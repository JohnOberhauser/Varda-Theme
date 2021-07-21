If using the pamac status tray indicator, you must disable and re-enable the extension after changing the theme for the icon to be themed properly.

Icons are a mix of
Flatery
https://www.gnome-look.org/s/Gnome/p/1332404
Archdroid from this theme creator
https://github.com/themix-project/oomox

Most of the icons I use I've edited to match my color scheme

The theme is a hacked version of Materia theme
https://github.com/nana-4/materia-theme

Check the varda branch on my fork for the source
https://github.com/JohnOberhauser/materia-theme/tree/varda

Cursor comes from Breeze Cursor
https://github.com/ful1e5/BreezeX_Cursor
My fork with the varda theme changes, built from this source
https://github.com/JohnOberhauser/BreezeX_Cursor/tree/varda

For the cursor to work properly with gtk4 windows, you must also copy to icons folder to /usr/local/share/icons/





GDM shell instructions:

place the hook file from the shell directory in
/usr/share/libalpm/hooks
to auto apply the theme after a gdm update.  Make sure the path is correct in the hook file


to install
backup file

    sudo cp -av /usr/share/gnome-shell/gnome-shell-theme.gresource{,~}

install

    THEME_NAME="$(gsettings get org.gnome.desktop.interface gtk-theme | sed "s/'//g")"
    THEME_SRC_DIR="/usr/share/themes/$THEME_NAME/gnome-shell"
    sudo glib-compile-resources --target="/usr/share/gnome-shell/gnome-shell-theme.gresource" --sourcedir="$THEME_SRC_DIR" "$THEME_SRC_DIR/gnome-shell-theme.gresource.xml"

uninstall

    sudo mv -v /usr/share/gnome-shell/gnome-shell-theme.gresource{~,}
