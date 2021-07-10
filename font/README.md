Only install JetBrainsMonoPatchedGlyphs-Regular.tff and the symbola fonts
The other doesn't have a custom character I added for neofetch ascii art.
The character in question is unicode uee44  
Character was added using font forge.

Using patched jetbrains font from nerd-fonts
https://github.com/ryanoasis/nerd-fonts
https://github.com/JetBrains/JetBrainsMono

Symbola comes from here https://www.wfonts.com/font/symbola

Move ttf files into ~/.local/share/fonts
In Tweaks, set fonts
Interface: JetBrainsMono Patched Glyphs Regular 11
Document: JetBrainsMono Patched Glyphs Regular 11
Monospace: JetBrainsMono Patched Glyphs Regular 10
Legacy: JetBrainsMono Patched Glyphs Regular 11

Symbola is there so that the system can fall back to using it for unicode characters.  This is necessary for bashtop.

Need to set font specifically for firefox and atom
