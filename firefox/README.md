Some things based off of https://github.com/migueravila/SimplerentFox
and https://github.com/black7375/Firefox-UI-Fix/tree/v1.0

In the searchbar type about:config. A dialog will be shown to you. Press the I accept the risk button.

Search for toolkit.legacyUserProfileCustomizations.stylesheets, layers.acceleration.force-enabled, gfx.webrender.all, and svg.context-properties.content.enabled. Change them to True

Copy the chrome directory to $HOME/.mozilla/firefox/XXXXXXX.default-release/

If the theme isn't working, make sure you setup to multi-account containers addon, or disable `pageAction-urlbar-_testpilot-containers` in `url-bar.css`

Go to firefox settings and change the font to JetBrainsMono Patched Glyphs from the fonts directory
