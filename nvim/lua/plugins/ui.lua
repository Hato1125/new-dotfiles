return {
  {
    'comfysage/evergarden',
    priority = 1000,
    opts = {
      transparent_background = true,
      contrast_dark = 'hard',
    },
    config = function()
      vim.cmd.colorscheme('evergarden')
    end,
  },
  {
    'lukas-reineke/indent-blankline.nvim',
    main = 'ibl',
    event = 'BufRead',
    config = function()
      require('ibl').setup{
        indent = {
          char = '│'
        }
      }
    end
  },
  {
    'norcalli/nvim-colorizer.lua',
    event = 'BufRead',
    config = function()
       require('colorizer').setup{
       }
    end
  },
  {
    'nvim-lualine/lualine.nvim',
    event = 'VimEnter',
    dependencies = {
      'nvim-tree/nvim-web-devicons'
    },
    config = function()
      require('lualine').setup {
      }
    end
  }
}
