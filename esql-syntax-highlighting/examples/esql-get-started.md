## Getting started with ES|QL queries

<titleabbrev>Getting started</titleabbrev>

This guide shows how you can use ES|QL to query and aggregate your data.

### Prerequisites

To follow along with the queries in this guide, you can either set up your own
deployment, or use Elastic’s public ES|QL demo environment.

### Run an ES|QL query

In Kibana, you can use Console or Discover to run ES|QL queries:

### Your first ES|QL query

Each ES|QL query starts with a [source command](#esql-source-commands). A
source command produces a table, typically with data from Elasticsearch.

![A source command producing a table from Elasticsearch](images/esql/source-command.svg)

The [esql-from](#esql-from) source command returns a table with documents from a data
stream, index, or alias. Each row in the resulting table represents a document.
This query returns up to 500 documents from the `sample_data` index:

```esql
FROM sample_data
```

Each column corresponds to a field, and can be accessed by the name of that
field.

<dl><dt><strong>💡 TIP</strong></dt><dd>

ES|QL keywords are case-insensitive. The following query is identical to the
previous one:

```esql
from sample_data
```
</dd></dl>

### Processing commands

A source command can be followed by one or more
[processing commands](#esql-processing-commands), separated by a pipe character:
`|`. Processing commands change an input table by adding, removing, or changing
rows and columns. Processing commands can perform filtering, projection,
aggregation, and more.

![A processing command changing an input table](images/esql/esql-limit.png)

For example, you can use the [esql-limit](#esql-limit) command to limit the number of rows
that are returned, up to a maximum of 10,000 rows:

```esql
FROM sample_data
| LIMIT 3
```

<dl><dt><strong>💡 TIP</strong></dt><dd>

For readability, you can put each command on a separate line. However, you don’t
have to. The following query is identical to the previous one:

```esql
FROM sample_data | LIMIT 3
```
</dd></dl>

#### Sort a table

![A processing command sorting an input table](images/esql/esql-sort.png)

Another processing command is the [esql-sort](#esql-sort) command. By default, the rows
returned by `FROM` don’t have a defined sort order. Use the `SORT` command to
sort rows on one or more columns:

```esql
FROM sample_data
| SORT @timestamp DESC
```

#### Query the data

Use the [esql-where](#esql-where) command to query the data. For example, to find all
events with a duration longer than 5ms:

```esql
FROM sample_data
| WHERE event.duration > 5000000
```

`WHERE` supports several [operators](#esql-operators). For example, you can use [esql-like-operator](#esql-like-operator) to run a wildcard query against the `message` column:

```esql
FROM sample_data
| WHERE message LIKE "Connected*"
```

#### More processing commands

There are many other processing commands, like [esql-keep](#esql-keep) and [esql-drop](#esql-drop)
to keep or drop columns, [esql-enrich](#esql-enrich) to enrich a table with data from
indices in Elasticsearch, and [esql-dissect](#esql-dissect) and [esql-grok](#esql-grok) to process data. Refer
to [esql-processing-commands](#esql-processing-commands) for an overview of all processing commands.

### Chain processing commands

You can chain processing commands, separated by a pipe character: `|`. Each
processing command works on the output table of the previous command. The result
of a query is the table produced by the final processing command.

![Processing commands can be chained](images/esql/esql-sort-limit.png)

The following example first sorts the table on `@timestamp`, and next limits the
result set to 3 rows:

```esql
FROM sample_data
| SORT @timestamp DESC
| LIMIT 3
```

**📌 NOTE**\
The order of processing commands is important. First limiting the result
set to 3 rows before sorting those 3 rows would most likely return a result that
is different than this example, where the sorting comes before the limit.

### Compute values

Use the [esql-eval](#esql-eval) command to append columns to a table, with calculated
values. For example, the following query appends a `duration_ms` column. The
values in the column are computed by dividing `event.duration` by 1,000,000. In
other words: `event.duration` converted from nanoseconds to milliseconds.

```esql
FROM sample_data
| EVAL duration_ms = event.duration / 1000000.0
```

`EVAL` supports several [functions](#esql-functions). For example, to round a
number to the closest number with the specified number of digits, use the
[esql-round](#esql-round) function:

```esql
FROM sample_data
| EVAL duration_ms = ROUND(event.duration / 1000000.0, 1)
```

### Calculate statistics

ES|QL can not only be used to query your data, you can also use it to aggregate
your data. Use the [esql-stats-by](#esql-stats-by) command to calculate statistics. For
example, the median duration:

```esql
FROM sample_data
| STATS median_duration = MEDIAN(event.duration)
```

You can calculate multiple stats with one command:

```esql
FROM sample_data
| STATS median_duration = MEDIAN(event.duration), max_duration = MAX(event.duration)
```

Use `BY` to group calculated stats by one or more columns. For example, to
calculate the median duration per client IP:

```esql
FROM sample_data
| STATS median_duration = MEDIAN(event.duration) BY client.ip
```

### Create a histogram

To track statistics over time, ES|QL enables you to create histograms using the
[esql-auto_bucket](#esql-auto_bucket) function. `AUTO_BUCKET` creates human-friendly bucket sizes
and returns a value for each row that corresponds to the resulting bucket the
row falls into. 

For example, to create hourly buckets for the data on October 23rd:

```esql
FROM sample_data
| KEEP @timestamp
| EVAL bucket = AUTO_BUCKET (@timestamp, 24, "2023-10-23T00:00:00Z", "2023-10-23T23:59:59Z")
```

Combine `AUTO_BUCKET` with [esql-stats-by](#esql-stats-by) to create a histogram. For example,
to count the number of events per hour:

```esql
FROM sample_data
| KEEP @timestamp, event.duration
| EVAL bucket = AUTO_BUCKET (@timestamp, 24, "2023-10-23T00:00:00Z", "2023-10-23T23:59:59Z")
| STATS COUNT(*) BY bucket
```

Or the median duration per hour:

```esql
FROM sample_data
| KEEP @timestamp, event.duration
| EVAL bucket = AUTO_BUCKET (@timestamp, 24, "2023-10-23T00:00:00Z", "2023-10-23T23:59:59Z")
| STATS median_duration = MEDIAN(event.duration) BY bucket
```

### Enrich data

ES|QL enables you to [enrich](#esql-enrich-data) a table with data from indices
in Elasticsearch, using the [esql-enrich](#esql-enrich) command.

![align="center"](images/esql/esql-enrich.png)

Before you can use `ENRICH`, you first need to
[create](#esql-create-enrich-policy) and [execute](#esql-execute-enrich-policy)
an [enrich policy](#esql-enrich-policy). 

After creating and executing a policy, you can use it with the `ENRICH`
command:

```esql
FROM sample_data
| KEEP @timestamp, client.ip, event.duration
| EVAL client.ip = TO_STRING(client.ip)
| ENRICH clientip_policy ON client.ip WITH env
```

You can use the new `env` column that’s added by the `ENRICH` command in
subsequent commands. For example, to calculate the median duration per
environment:

```esql
FROM sample_data
| KEEP @timestamp, client.ip, event.duration
| EVAL client.ip = TO_STRING(client.ip)
| ENRICH clientip_policy ON client.ip WITH env
| STATS median_duration = MEDIAN(event.duration) BY env
```

For more about data enrichment with ES|QL, refer to [esql-enrich-data](#esql-enrich-data).

### Process data

Your data may contain unstructured strings that you want to
[structure](#esql-process-data-with-dissect-and-grok) to make it easier to
analyze the data. For example, the sample data contains log messages like:

```txt
"Connected to 10.1.0.3"
```

By extracting the IP address from these messages, you can determine which IP has
accepted the most client connections.

To structure unstructured strings at query time, you can use the ES|QL
[esql-dissect](#esql-dissect) and [esql-grok](#esql-grok) commands. `DISSECT` works by breaking up a
string using a delimiter-based pattern. `GROK` works similarly, but uses regular
expressions. This makes `GROK` more powerful, but generally also slower.

In this case, no regular expressions are needed, as the `message` is
straightforward: "Connected to ", followed by the server IP. To match this
string, you can use the following `DISSECT` command:

```esql
FROM sample_data
| DISSECT message "Connected to %{server.ip}"
```

This adds a `server.ip` column to those rows that have a `message` that matches
this pattern. For other rows, the value of `server.ip` is `null`.

You can use the new `server.ip` column that’s added by the `DISSECT` command in
subsequent commands. For example, to determine how many connections each server
has accepted:

```esql
FROM sample_data
| WHERE STARTS_WITH(message, "Connected to")
| DISSECT message "Connected to %{server.ip}"
| STATS COUNT(*) BY server.ip
```

For more about data processing with ES|QL, refer to
[esql-process-data-with-dissect-and-grok](#esql-process-data-with-dissect-and-grok).

### Learn more

To learn more about ES|QL, refer to [esql-language](#esql-language) and [esql-using](#esql-using).
