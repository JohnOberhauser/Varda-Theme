local wk = require("which-key")

function create_new_file()
    -- Prompt user for a file name
    local new_file_name = vim.fn.input("New File Name: ")
    if new_file_name ~= "" then
        vim.cmd("edit " .. new_file_name)
    else
        print("File creation canceled")
    end
end

wk.add({
    { "<leader>f", group = "file" }, -- group
    { "<leader>ff", "<cmd>Telescope find_files<cr>", desc = "Find File", mode = "n" },
    { "<leader>fn", "<cmd>lua create_new_file()<CR>", desc = "New File" },
    { "<leader>w", proxy = "<c-w>", group = "windows" }, -- proxy to window mappings
    { "<leader>b", group = "buffers", expand = function()
            return require("which-key.extras").expand.buf()
        end
    },
    { "<leader>y", "<cmd>Yazi<cr>", desc = "Open yazi at the current file" },
    { '<c-up>', "<cmd>Yazi toggle<cr>", desc = "Resume the last yazi session" },
    {'~', "<cmd>WhichKey<cr>", desc = "Show which key window"},
    { "<leader>a", "<cmd>Alpha<cr>", desc = "Open Alpha" },
    { "<leader>l", "<cmd>Lazy<cr>", desc = "Open Lazy Plugin Manager" },
})