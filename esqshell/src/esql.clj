#!/usr/bin/env bb

 (ns esql
   "Execute ES|QL"
   (:require
    [babashka.http-client :as http :refer [post]]
    [cheshire.core :as json]))

(defn- format-error [exception]
  (let [e (Throwable->map exception)
        reason (:reason (first (get-in (json/decode (:body (:data e)) true) [:error :root_cause])))]
    (str "Error: " reason)))

(defn esql
  "Make an ES|QL request"
  [q]
  (try
    (->
     (post "https://localhost:9200/_query" {:body (json/encode {:query q}) :content-type :json})
     :status)
    (catch Exception e (binding [*out* *err*]
                         (println (format-error e))
                         (System/exit 1)))))

;; query request https://github.com/elastic/elasticsearch-specification/pull/2354/files#diff-8026717def06d70a424cff413bfe04ae49fa1bae9f799ad61cf5ac06ba04ceaaR31
(esql *command-line-args*)
