/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [
{"id":"cXUpSmwMSV0sW93q","label":"Proton","bookmarks":[
{"id":"zDaM1uX7S5Jr6G55","label":"Mail","url":"https://mail.proton.me/u/0/inbox"},
{"id":"DhWDbQzV8facaOW5","label":"Calendar","url":"https://calendar.proton.me/u/0/"},
{"id":"7pjO0yk6R8Nnyjoi","label":"Drive","url":"https://drive.proton.me/u/0"},
{"id":"n76HQkjFc29zZlc8","label":"Account","url":"https://account.proton.me/u/0/vpn"}
]
},
{"id":"njYk5XF49Zdf8g3o","label":"Social","bookmarks":[
{"id":"REzi7xXTn6hBm5Vu","label":"Reddit","url":"https://www.reddit.com/"},
{"id":"oa5G4ZJXzwxLi4CM","label":"Pocket","url":"https://getpocket.com/explore/?src=queue_nav"},
{"id":"fgOAsCWGRNHCRZQR","label":"Biz","url":"https://boards.4channel.org/biz/catalog"},
{"id":"PeIbQBjpA41kjGD6","label":"LinkedIn","url":"https://www.linkedin.com/feed/"}
]
},
{"id":"njYk5XF49Zdf8g3o","label":"Dev","bookmarks":[
{"id":"REzi7xXTn6hBm5Vu","label":"Github","url":"https://github.com/"},
{"id":"oa5G4ZJXzwxLi4CM","label":"ArchWiki","url":"https://wiki.archlinux.org/"},
{"id":"fgOAsCWGRNHCRZQR","label":"Hyprland","url":"https://wiki.hyprland.org/"},
{"id":"PeIbQBjpA41kjGD6","label":"Eww","url":"https://elkowar.github.io/eww/"}
]
},
{"id":"qjTUGL2OWFspQmm2","label":"Video","bookmarks":[
{"id":"pZDB2ilcq8t0m6eW","label":"YouTube","url":"https://www.youtube.com/"},
{"id":"5YRKKQap76zg1ZxO","label":"Twitch","url":"https://www.twitch.tv/directory"},
{"id":"ereuzztrzJbI0lqk","label":"Netflix","url":"https://www.netflix.com/browse"},
{"id":"R37Y4hMSIvTGhRmy","label":"HBO","url":"https://play.hbomax.com/page/urn:hbo:page:home"}
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
