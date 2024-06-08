import {
  setting,
  running
} from "./main.js"

import bar from "./widgets/bar/bar.js"

try {
  setting([
    bar
  ])
  running([
    bar
  ])
} catch(error) {
  print(error)
}
