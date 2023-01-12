place this directory in ~/.config/

### required packages

#### from arch repo
eww - topbar and widgets    
wireplumber - used in varius scripts for audio    
playerctl - used in various scripts for controlling media players    
swaylock - lock screen    
rofi - app launcher    
swayidle - screen timeout    
slurp - screenshot / screencast utility    
grim - screenshot taker    
xdg-desktop-portal-wlr - portal backend for screenshots and screencasting    
xdg-desktop-portal-gtk - portal backend for everything else (also has screenshot and screencast, but wlr overrides it)    
dunst - notifications    
python - various scripts (weather and media controls)    
pacman-contrib - used in script to check how many packages are out of date    
polkit-gnome - GUI sudo permission handler    

#### from AUR:
hyprland - duh    
hyprpaper - wallpaper    



### Cursor
cursor in use    
https://github.com/alvatip/Nordzy-cursors

edit the hypr/scripts/setCursor.sh file to change the cursor

place cursor folders in these locations    
~/.icons/    
/usr/share/icons    
/usr/local/share/icons    

edit    
/usr/share/icons/default/index.theme    
~/.icons/default/index.theme    
so that it inherits the cursor theme    
