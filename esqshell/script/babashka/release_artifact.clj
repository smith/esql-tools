(ns babashka.release-artifact
  (:require [borkdude.gh-release-artifact :as ghr]
            [clojure.java.shell :refer [sh]]
            [clojure.string :as str]))

(defn current-branch []
  (or (System/getenv "APPVEYOR_PULL_REQUEST_HEAD_REPO_BRANCH")
      (System/getenv "APPVEYOR_REPO_BRANCH")
      (System/getenv "CIRCLE_BRANCH")
      (System/getenv "GITHUB_REF_NAME")
      (System/getenv "CIRRUS_BRANCH")
      (-> (sh "git" "rev-parse" "--abbrev-ref" "HEAD")
          :out
          str/trim)))

(defn -main [& args]
  (let [ght (System/getenv "GITHUB_TOKEN")
        _ (println "Github token found")
        file (first args)
        _ (println "File" file)
        branch (current-branch)
        _ (println "On branch:" branch)
        current-version
        (-> (slurp "resources/ESQSHELL_VERSION")
            str/trim)]
    (if (and ght (contains? #{"master" "main"} branch))
      (do (assert file "File name must be provided")
          (println "On main branch. Publishing asset.")
          (ghr/overwrite-asset {:org "smith"
                                :repo "esql-tools"
                                :file file
                                :tag (str "v" current-version)
                                :draft false
                                :overwrite (str/ends-with? current-version "SNAPSHOT")
                                :sha256 true}))
      (println "Skipping release artifact (no GITHUB_TOKEN or not on main branch)"))
    nil))

(when (= *file* (System/getProperty "babashka.file"))
  (apply -main *command-line-args*))
