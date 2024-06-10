#!/bin/bash

STATE_FILE="/tmp/hyprgame_mode_state"
GAMEMODE_STATE=$(gamemoded -s)
if [ ! -f $STATE_FILE ]; then
  if [ "$GAMEMODE_STATE" == "gamemode is active" ]; then
    echo "1" > $STATE_FILE
  else
    echo "0" > $STATE_FILE
  fi
fi

HYPRGAMEMODE=$(cat $STATE_FILE)
if [ $HYPRGAMEMODE -eq 0 ]; then
  hyprctl --batch "                     \
    keyword general:resize_on_border 0; "
  #if [ "$GAMEMODE_STATE" == "gamemode is inactive" ]; then
  #fi
  echo "1" > $STATE_FILE
else
  hyprctl --batch "                     \
    keyword general:resize_on_border 1; "
  #if [ "$GAMEMODE_STATE" == "gamemode is active" ]; then
  #fi
  echo "0" > $STATE_FILE
fi
