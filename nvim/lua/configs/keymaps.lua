vim.g.mapleader = ' '

vim.keymap.set('n', '<C-f>', ':/')
vim.keymap.set('n', '<C-j>', ':%s/')

vim.keymap.set('i', 'jk', '<esc>')

vim.keymap.set('n', '<leader>ss', ':sp<return>')
vim.keymap.set('n', '<leader>sv', ':vs<return>')

vim.keymap.set('n', '<leader>h', '<c-w>h')
vim.keymap.set('n', '<leader>j', '<c-w>j')
vim.keymap.set('n', '<leader>k', '<c-w>k')
vim.keymap.set('n', '<leader>l', '<c-w>l')

vim.keymap.set('n', '<leader>fb', ':Neotree toggle<return>')
vim.keymap.set('n', '<leader>ff', ':Neotree toggle show buffers<return>')
