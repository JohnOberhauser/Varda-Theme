/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const lookup = {}
const engine = "https://duckduckgo.com/?q="

/**
 * inject bookmarks into html
 */

const bookmarks = [
  {"id":"cXUpSmwMSV0sW93q","label":"Proton","bookmarks":[
      {"id":"zDaM1uX7S5Jr6G55","label":"Mail","url":"https://mail.proton.me/u/0/inbox"},
      {"id":"DhWDbQzV8facaOW5","label":"Calendar","url":"https://calendar.proton.me/u/0/"},
      {"id":"7pjO0yk6R8Nnyjoi","label":"Drive","url":"https://drive.proton.me/u/0"},
      {"id":"n76HQkjFc29zZlc8","label":"Notes","url":"https://app.standardnotes.com/"}
    ]
  },
  {"id":"njYk5XF49Zdf8g3o","label":"Social","bookmarks":[
      {"id":"PeIbQBjpA41kjGD6","label":"Feedly","url":"https://feedly.com/i/my/me"},
      {"id":"PeIbQBjpA41kjGD6","label":"Foss","url":"https://fosstodon.org/home"},
      {"id":"fgOAsCWGRNHCRZQR","label":"Discord","url":"https://discord.com/app"},
      {"id":"PeIbQBjpA41kjGD6","label":"Bsky","url":"https://bsky.app/"},
    ]
  },
  {"id":"qjTUGL2OWFspQdfe","label":"Finance","bookmarks":[
      {"id":"pZDB2ilcq8t0m6eW","label":"Schwab","url":"https://client.schwab.com/clientapps/accounts/summary/"},
      {"id":"5YRKKQap76zg1ZxO","label":"Capital One","url":"https://myaccounts.capitalone.com/accountSummary"},
      {"id":"ereuzztrzJbI0lqk","label":"Vanguard","url":"https://personal.vanguard.com/us/MyHome"},
      {"id":"R37Y4hMSIvTGhRmy","label":"Fidelity","url":"https://nb.fidelity.com/public/nb/401k/home"}
    ]
  },
  {"id":"njYk5XF49Zdf8g3o","label":"Dev","bookmarks":[
      {"id":"REzi7xXTn6hBm5Vu","label":"Github","url":"https://github.com/"},
      {"id":"oa5G4ZJXzwxLi4CM","label":"ArchWiki","url":"https://wiki.archlinux.org/"},
      {"id":"fgOAsCWGRNHCRZQR","label":"Hyprland","url":"https://wiki.hyprland.org/"},
      {"id":"PeIbQBjpA41kjGD6","label":"Ags","url":"https://aylur.github.io/ags/"}
    ]
  },
  {"id":"qjTUGL2OWFspQmm2","label":"Video","bookmarks":[
      {"id":"pZDB2ilcq8t0m6eW","label":"YouTube","url":"https://www.youtube.com/"},
      {"id":"5YRKKQap76zg1ZxO","label":"Jellyfin","url":"http://192.168.50.158:8096"},
      {"id":"ereuzztrzJbI0lqk","label":"Twitch","url":"https://www.twitch.tv/"},
      {"id":"R37Y4hMSIvTGhRmy","label":"Prime","url":"https://www.amazon.com/gp/video/storefront"}
    ]
  },
  {"id":"qjTUGL2OWFspQm11","label":"Other","bookmarks":[
      {"id":"pZDB2ilcq8t0m611","label":"Maps","url":"https://maps.google.com"},
      {"id":"5YRKKQap76zg1Z11","label":"Amazon","url":"https://www.amazon.com/"},
      {"id":"R37Y4hMSIvTGhR11","label":"ChatGPT","url":"https://chat.openai.com/"},
      {"id":"ereuzztrzJbI0l11","label":"Syncthing","url":"http://localhost:8384"}
    ]
  }
]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
