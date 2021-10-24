#!/bin/bash

DEFAULT_CONTAINER_NAME="nodep"

if [ "$1" = "build" ]
then 
  if [ -n $2 ]
  then 
    echo "default name = $DEFAULT_CONTAINER_NAME"
  else
    echo "default name = $2"
    DEFAULT_CONTAINER_NAME=$2
  fi
  echo "container name used for building $DEFAULT_CONTAINER_NAME"
  docker build -t $DEFAULT_CONTAINER_NAME .
else 
  # for running
  docker run -it $DEFAULT_CONTAINER_NAME $2
fi