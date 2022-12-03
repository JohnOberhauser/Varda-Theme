Based off of https://github.com/migueravila/SimplerentFox
and https://github.com/black7375/Firefox-UI-Fix/tree/v1.0

In the searchbar type about:config. A dialog will be shown to you. Press the I accept the risk button.

Search for toolkit.legacyUserProfileCustomizations.stylesheets, layers.acceleration.force-enabled, gfx.webrender.all, and svg.context-properties.content.enabled. Change them to True

Go to your Firefox profile: $HOME/.mozilla/firefox/XXXXXXX.default-release/

Create a folder and name it chrome (with lowercase).

Then paste the userChrome.css and the userContent.css files into the folder

Go to firefox settings and change the font to JetBrainsMono Patched Glyphs from the fonts directory

