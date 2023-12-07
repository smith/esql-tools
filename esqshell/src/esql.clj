#!/usr/bin/env bb

 (ns esql
   "Execute ES|QL"
   (:require    [clojure.stacktrace :refer [print-stack-trace]]
              [esql.request :refer [format-error request]]
              [clojure.tools.cli :refer [parse-opts]]
              [clojure.string :refer [blank? join]]))

(defn usage [options-summary]
  (->> ["esqlshell"
        ""
        "Usage: esql [options]"
        ""
        "Options:"
        options-summary
        ""]
       (join \newline)))

(def cli-options
  [["-e" "--execute QUERY" "Query"
    :validate [#(not (blank? %)) "Query must not be empty"]]
   ["-f" "--format FORMAT" "Format"
    :default "txt"]])

     
(defn esql
  "Make an ES|QL request"
  [q fmt]
  (try
    (request q fmt)
  (catch java.net.ConnectException _ex
    (binding [*out* *err*]
      (println "Error: Connection failed")
      (System/exit 1)))
  (catch clojure.lang.ExceptionInfo ex
    (binding [*out* *err*]
      (print "Error executing query: ")
      (if (:status (ex-data ex))
        (println (format-error ex))
        (print-stack-trace ex 8))
      (System/exit 1)))))

(defn -main [& args]
  (let [opts (parse-opts args cli-options)
        q  (get-in opts [:options :execute])
        fmt (get-in opts [:options :format])]
    (println (esql q fmt))))
 
   
 
;; query request https://github.com/elastic/elasticsearch-specification/pull/2354/files#diff-8026717def06d70a424cff413bfe04ae49fa1bae9f799ad61cf5ac06ba04ceaaR31

(when (= *file* (System/getProperty "babashka.file"))
  (apply -main *command-line-args*))
