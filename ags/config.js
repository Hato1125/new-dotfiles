import bar from "./widgets/bar/bar.js"

App.addIcons(`${App.configDir}/assets`)
App.config({
  style: "./styles/main.css",
  windows: [
    bar(0),
    bar(1),
  ]
})
