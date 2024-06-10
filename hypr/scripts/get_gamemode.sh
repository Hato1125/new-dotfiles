#!/bin/bash

STATE_FILE="/tmp/hyprgame_mode_state"
if [ ! -f $STATE_FILE ]; then
  echo "0" > $STATE_FILE
else
  echo $(cat $STATE_FILE)
fi
