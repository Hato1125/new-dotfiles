import {
  setting,
  running
} from "./main.js"

import bar from "./widgets/bar/bar.js"
import quiksetting from "./widgets/quicsetting/quicsetting.js"

try {
  setting([
    bar,
    quiksetting,
  ])
  running([
    bar,
    quiksetting,
  ])
} catch(error) {
  print(error)
}
