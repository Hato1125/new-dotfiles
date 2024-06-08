import {
  setting,
  running
} from "./main.js"

try {
  setting()
  running()
} catch(error) {
  print(error)
}
