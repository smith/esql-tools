
(ns convert
  (:require [clojure.data.json :as json]
            [clojure.java.io :as io] [clj-antlr.core :as antlr]))

'(defn antlr-to-textmate [antlr-file output-file]
   (let [parser (antlr/parser antlr-file)
         tokens (antlr/tokens parser "from logs")
         textmate-grammar (map (fn [[k v]] {:name k :match v}) tokens)]
     (with-open [writer (io/writer output-file)]
       (json/write textmate-grammar writer))))

(defn antlr-to-textmate [antlr-file output-file]
  (let [antlr-grammar (slurp antlr-file)
        lexer-rules (re-seq #"(?m)^lexer rule: (\w+)" antlr-grammar)
        parser-rules (re-seq #"(?m)^parser rule: (\w+)" antlr-grammar)
        textmate-grammar (map (fn [rule] {:name (first rule) :match (second rule)})
                              (concat lexer-rules parser-rules))]
    (with-open [writer (io/writer output-file)]
      (json/write textmate-grammar writer))))

(antlr-to-textmate "./antlr/EsqlBaseParser.g4" "./EsqlBase.tmLanguage.json")

