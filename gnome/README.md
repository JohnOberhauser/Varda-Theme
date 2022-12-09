Icons are a mix of
Flatery
https://www.gnome-look.org/s/Gnome/p/1332404
Archdroid from this theme creator
https://github.com/themix-project/oomox


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

    to uninstall you might just need to reinstall gnome-shell (after removing the hook) through pacman if the backup is gone


