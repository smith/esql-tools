# esqshell

A shell for [ES|QL](https://www.elastic.co/guide/en/elasticsearch/reference/master/esql.html).

## Installation

Download and unpack the latest version for your platform from the [releases](../releases) page. Put it somewhere on you `PATH`.

## Usage

`esql` supports the following options:

```shell
  -e, --execute The query to execute
  -f, --format The [format](https://www.elastic.co/guide/en/elasticsearch/reference/master/esql-rest.html#esql-rest-format) to use. `txt` is the default.
```

The following environment variables must be set:

* `ELASTICSEARCH_URL`
* `ELASTICSEARCH_API_KEY`

Presently only authenticated API key access works.

## Examples

```sh
esql -e "FROM logs-* | LIMIT 10" -f json
```

Selects 10 items from the `logs-*` index and formats them as JSON. See the ES|QL documentation for more examples.

## Running locally

You'll need [Babashka](https://babashka.org/) installed to run locally. Use `./src/esql.clj` instead of `esql`.
