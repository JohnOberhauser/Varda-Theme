Icons are a mix of
Flatery
https://www.gnome-look.org/s/Gnome/p/1332404
Archdroid from this theme creator
https://github.com/themix-project/oomox

Most of the icons I use I've edited to match my color scheme

Cursor comes from Breeze Cursor
https://github.com/ful1e5/BreezeX_Cursor
My fork with the varda theme changes, built from this source
https://github.com/JohnOberhauser/BreezeX_Cursor/tree/varda

For the cursor to work properly with gtk4 windows, you must also copy to icons folder to /usr/local/share/icons/



Theme is based on
https://github.com/vinceliuice/Graphite-gtk-theme
My fork is here
https://github.com/JohnOberhauser/Graphite-gtk-theme
changes are in the varda branch


to generate the theme, use the install script
    ./install.sh -n Varda -t blue -c dark -s compact
then copy the contents from the new theme in the ~/.theme directory to this project's varda theme



GDM shell instructions:

place the hook file from the shell directory in
/usr/share/libalpm/hooks
to auto apply the theme after a gdm update.  Make sure the path is correct in the hook file


backup file
    sudo cp -av /usr/share/gnome-shell/gnome-shell-theme.gresource{,~}
then do
    sudo glib-compile-resources --target=/usr/share/gnome-shell/gnome-shell-theme.gresource /ssd/home/workspace/Varda-Theme/gnome/themes/Varda/gnome-shell/gnome-shell-theme.gresource.xml
uninstall
    sudo mv -v /usr/share/gnome-shell/gnome-shell-theme.gresource{~,}

    to uninstall you might just need to reinstall gnome-shell through pacman if the backup is gone













old install instructions
move the varda folder to /usr/share/themes
THEME_SRC_DIR="/usr/share/themes/Varda/gnome-shell"
sudo glib-compile-resources --target="/usr/share/gnome-shell/gnome-shell-theme.gresource" --sourcedir="$THEME_SRC_DIR" "$THEME_SRC_DIR/gnome-shell-theme.gresource.xml"


The old theme is a hacked version of Materia theme
https://github.com/nana-4/materia-theme
Check the varda branch on my fork for the source
https://github.com/JohnOberhauser/materia-theme/tree/varda