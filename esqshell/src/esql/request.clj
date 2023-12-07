(ns esql.request
  (:require
   [babashka.http-client :as http :refer [post]]
   [cheshire.core :as json]))

(defn format-error
  "Get the error message from a failed request as a string"
  [exception]
  (let [e (Throwable->map exception)
        reason (:reason
                (first
                 (get-in
                  (json/decode
                   (:body (:data e)) true) [:error :root_cause])))]
    reason))

(def url
  (str
   (or
    (System/getenv "ELASTICSEARCH_URL")
    "http://localhost:9200")
   "/_query"))

(defn- get-response [resp]
  (:body resp))

(defn request
  "Make an ES|QL request"
  [q fmt]

  (->
   (post
    (str url "?format=" fmt)
    {:body (json/encode {:query q})
     :headers {:user-agent "esqshell"
               :content-type "application/json"
               :authorization (str "ApiKey " (System/getenv "ELASTICSEARCH_API_KEY"))}})
   (get-response)))
  