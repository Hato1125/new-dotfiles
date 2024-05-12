return {
  {
    'rockyzhang24/arctic.nvim',
    name = 'arctic',
    branch = 'main',
    priority = 1000,
    dependencies = {
      'rktjmp/lush.nvim'
    },
    config = function()
      vim.cmd('colorscheme arctic')
    end
  },
}
