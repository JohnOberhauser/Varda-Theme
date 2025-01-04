vim.opt.termguicolors = false

-- Define highlights using terminal colors
vim.api.nvim_set_hl(0, "Normal", { ctermfg = 7, ctermbg = 0 }) -- White on Black
vim.api.nvim_set_hl(0, "Comment", { ctermfg = 2, ctermbg = "NONE" }) -- Green
vim.api.nvim_set_hl(0, "Constant", { ctermfg = 1, ctermbg = "NONE" }) -- Red
vim.api.nvim_set_hl(0, "Identifier", { ctermfg = 4, ctermbg = "NONE" }) -- Blue
vim.api.nvim_set_hl(0, "Statement", { ctermfg = 5, ctermbg = "NONE" }) -- Purple
vim.api.nvim_set_hl(0, "PreProc", { ctermfg = 3, ctermbg = "NONE" }) -- Yellow
vim.api.nvim_set_hl(0, "Type", { ctermfg = 6, ctermbg = "NONE" }) -- Cyan
vim.api.nvim_set_hl(0, "Keyword", { ctermfg = 4 }) -- Blue

-- Remove the ~ at the start of each non-existent line
vim.opt.fillchars:append({ eob = " " }) -- Replace the `~` with a space