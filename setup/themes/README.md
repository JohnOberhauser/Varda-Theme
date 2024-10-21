Adding a new theme:

1. Add a GTK theme in `./gtk/generator` and generate it
2. Edit `./setup/scripts/setTheme.sh` for gtk
3. Install intellij idea and android studio themes or create a new theme within the `./intellij/Varda-Intellij-Theme` project
4. Apply the themes and edit `./setup/scripts/setTheme.sh` for idea and studio
5. Create a new theme directory in `./setup/themes/` and add all the necessary files (copy another theme and modify the files to match the new theme)
6. Edit the allowed arguments for `./setup/scripts/setTheme.sh` so it can take the new theme.  The argument should be the theme's directory name
7. Set btop theme in `./setup/scripts/setTheme.sh`.  If there isn't a built-in theme, create a new one