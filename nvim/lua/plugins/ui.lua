return {
  {
    'm6vrm/gruber.vim',
    event = 'VimEnter',
    config = function()
      vim.cmd.colorscheme('gruber')
    end,
  },
  {
    'xiyaowong/transparent.nvim',
    event = 'VimEnter',
    config = function()
      vim.cmd('TransparentEnable')
    end
  },
  {
    'lukas-reineke/indent-blankline.nvim',
    main = 'ibl',
    event = 'BufRead',
    config = function()
      require("ibl").setup{
        indent = {
          char = '│'
        }
      }
    end
  },
  {
    'norcalli/nvim-colorizer.lua',
    config = function()
       require('colorizer').setup()
    end
  }
}
