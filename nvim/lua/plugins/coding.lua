return {
  {
    'neoclide/coc.nvim',
    branch = "release",
    event = 'BufRead',
    keys = {
      { '<leader>gd', '<Plug>(coc-definition)' },
      { '<leader>gy', '<Plug>(coc-type-definition)' },
    },
    config = function()
      vim.g.coc_global_extensions = {
        'coc-clangd',
        'coc-cmake',
        'coc-json',
        'coc-lua',
        'coc-rust-analyzer',
      }
    end
  },
  {
    'nvim-treesitter/nvim-treesitter',
    build = ":TSUpdate",
    event = 'BufRead',
    config = function()
      require('nvim-treesitter.configs').setup{
        ensure_installed = {
          'c',
          'cpp',
          'cmake',
          'json',
          'lua',
          'rust',
        },
        sync_install = false,
        auto_install = true,
        highlight = {
          enable = true
        }
      }
    end
  }
}
