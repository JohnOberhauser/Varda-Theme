import { PropsWithChildren } from "react"

import { BookmarkProvider } from "@startpage/bookmarks"
import { StoragePrefixProvider } from "@startpage/local-storage"

import { VersionProvider } from "../Changelog/VersionContext"
import { GeneralSettingsProvider } from "./GeneralSettings"
import { initialBookmarks } from "./initialData"
import { SearchSettingsProvider } from "./SearchSettings"
import { SurfaceSettingsProvider } from "./SurfaceSettings"
import { ThemeProvider } from "./ThemeProvider"

export const storagePrefix = "yags-"

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <StoragePrefixProvider prefix={storagePrefix}>
    <BookmarkProvider initialBookmarks={initialBookmarks}>
      <VersionProvider>
        <GeneralSettingsProvider>
          <SearchSettingsProvider>
            <SurfaceSettingsProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </SurfaceSettingsProvider>
          </SearchSettingsProvider>
        </GeneralSettingsProvider>
      </VersionProvider>
    </BookmarkProvider>
  </StoragePrefixProvider>
)
