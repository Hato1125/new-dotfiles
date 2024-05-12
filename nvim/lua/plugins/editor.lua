return {
  {
    'nvim-neo-tree/neo-tree.nvim',
    branch = 'v3.x',
    dependencies = {
      'nvim-lua/plenary.nvim',
      'nvim-tree/nvim-web-devicons',
      'MunifTanjim/nui.nvim',
      '3rd/image.nvim',
    },
    config = function()
      require('neo-tree').setup({
        filesystem = {
          hide_dotfiles = true,
          hide_gitignored = true,
          hide_hidden = true,
          never_show = {
            '.DS_Store',
          }
        },
        window = {
	        mappings = {
	          ['r'] = 'rename',
	          ['a'] = 'add',
	          ['c'] = 'copy',
            ['d'] = 'delete',
	          ['p'] = 'paste_from_clipboard',
            ['H'] = 'toggle_hidden',
	        }
	      }
      })
    end
  },
}
