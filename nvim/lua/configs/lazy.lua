require('lazy').setup({
  spec = {
    { import = 'plugins' }
  },
  default = {
    lazy = true
  },
  ui = {
    border = 'rounded'
  },
  performance = {
    cache = {
      enabled = true,
    }
  }
})
