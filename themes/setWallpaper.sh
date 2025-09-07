# Update hyprlock wallpaper
path=$1
sed -i "s|.*path.*|    path = ${path}|" "$HOME/.config/hypr/hyprlock.conf"