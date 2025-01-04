Adding a new theme:

1. Create a new theme directory in `./setup/themes/`
2. Add a GTK theme in `./gtk/generator` and generate it
3. Create a new theme within the `./intellij/Varda-Intellij-Theme` project and reinstall the plugin in idea and android studio
4. Add all the necessary files to `./setup/themes/{themeName}` (copy another theme and modify the files to match the new theme)
5. Update `./setup/scripts/setTheme.sh`
6. Update ags by adding a new theme to the system overview window