return {
    -- Yazi
    {
        "mikavilpas/yazi.nvim",
        event = "VeryLazy",
        opts = {
             -- if you want to open yazi instead of netrw, see below for more info
            open_for_directories = true,
            keymaps = {
                show_help = '<f1>',
            },
        },
    },
    -- Alpha dashboard
    {
        "goolord/alpha-nvim",
    },
    -- Telescope for finding files
    {
      'nvim-telescope/telescope.nvim',
      dependencies = { 'nvim-lua/plenary.nvim' }
    },
    -- Which key, shows keybindings
    {
      "folke/which-key.nvim",
      lazy = true,
      opts = {
          preset = "helix"
      },
    },
}