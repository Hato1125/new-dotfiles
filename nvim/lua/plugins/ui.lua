return {
  {
    'EdenEast/nightfox.nvim',
    config = function()
      vim.cmd("set background=light")
      vim.cmd.colorscheme('dawnfox')
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
      require('lualine').setup{
      }
    end
  },
  {
    'nvim-telescope/telescope.nvim',
    branch = '0.1.x',
    dependencies = {
      'nvim-lua/plenary.nvim'
    },
    cmd = 'Telescope',
    keys = {
      { '<leader>ff', ':Telescope find_files<return>', desc = 'Find files' },
      { '<leader>fg', ':Telescope live_grep<return>', desc = 'Live grep' },
    },
    config = function()
      require('telescope').setup{
      }
    end
  },
  {
    'sudormrfbin/cheatsheet.nvim',
    dependencies = {
      'nvim-telescope/telescope.nvim',
      'nvim-lua/popup.nvim',
      'nvim-lua/plenary.nvim',
    },
    cmd = 'Cheatsheet',
    keys = {
      { '<leader>cc', ':Cheatsheet<return>', desc = 'Cheatsheet' }
    },
    config = function()
      require('cheatsheet').setup{
      }
    end
  },
  {
    'nvim-telescope/telescope-file-browser.nvim',
    dependencies = {
      "nvim-telescope/telescope.nvim",
      "nvim-lua/plenary.nvim"
    },
    keys = {
      { '<leader>fb', ':Telescope file_browser<return>', desc = 'File browser' }
    },
    config = function()
      require('telescope').load_extension 'file_browser'
    end
  },
  {
    'norcalli/nvim-colorizer.lua',
    event = 'BufRead',
    config = function()
      require('colorizer').setup()
    end
  }
}
