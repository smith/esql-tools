#!/bin/bash

set -e

OS="$1"
BB_VERSION="1.3.186"
ARCH="amd64"
VERSION="0.1.0-SNAPSHOT"

if [ "$OS" = "macos-latest" ]; then
  OS="macos"
  STATIC=""
else
  OS="linux"
  STATIC="-static"
fi

cd esqshell || exit

# Get babashka
BB_ARCHIVE="babashka-$BB_VERSION-$OS-$ARCH$STATIC.tar.gz"
curl -sLO "https://github.com/babashka/babashka/releases/download/v$BB_VERSION/$BB_ARCHIVE"
tar xfz $BB_ARCHIVE
# This might help with checks on macos
which xattr 2>&1 /dev/null && xattr -c bb

# Make uberjar (note that we're expecting to be in a container with bb present, this is not the bb we downloaded but the bb present on the system)
bb uberjar esql.jar -m esql 

# Make self-contained executable
cat ./bb esql.jar > "esql-$VERSION-SNAPSHOT-$ARCH-$OS"
gzip -f "esql-$VERSION-SNAPSHOT-$ARCH-$OS"
