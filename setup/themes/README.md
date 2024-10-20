Adding a new theme:

1. Find a GTK theme and place it in `./gnome/themes`
2. Find an icon theme and modify `./setup/scripts/installGtkThemes.sh` to download it
3. Modify `./setup/scripts/installGtkThemes.sh` to install the GTK and icon themes
4. Edit `./setup/scripts/setTheme.sh` for gtk
5. Install intellij idea and android studio themes or create a new theme within the `./intellij/Varda-Intellij-Theme` project
6. Apply the themes and edit `./setup/scripts/setTheme.sh` for idea and studio
7. Create a new theme directory in `./setup/themes/` and add all the necessary files (copy another theme and modify the files to match the new theme)
8. Edit the allowed arguments for `./setup/scripts/setTheme.sh` so it can take the new theme.  The argument should be the theme's directory name
9. Set btop theme in `./setup/scripts/setTheme.sh`.  If there isn't a built-in theme, create a new one