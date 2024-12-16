Adding a new theme:

1. Add a GTK theme in `./gtk/generator` and generate it
2. Create a new theme within the `./intellij/Varda-Intellij-Theme` project and reinstall the plugin in idea and android studio
3. Add btop theme (can skip to use a pre-existing one)
4. Create a new theme directory in `./setup/themes/` and add all the necessary files (copy another theme and modify the files to match the new theme)
5. Update `./setup/scripts/setTheme.sh`
6. Update ags by adding a new theme to the system overview window