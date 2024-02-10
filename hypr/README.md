place this directory in ~/.config/

### required packages

#### from arch repo
hyprland - duh    
hyprpaper - wallpaper   
wireplumber - used in varius scripts for audio    
playerctl - used in various scripts for controlling media players    
swaylock - lock screen    
rofi - app launcher    
swayidle - screen timeout    
slurp - screenshot / screencast utility    
grim - screenshot taker    
xdg-desktop-portal-hyprland - portal backend for screenshots and screencasting    
xdg-desktop-portal-gtk - portal backend for everything else (also has screenshot and screencast, but wlr overrides it)    
dunst - notifications   
pacman-contrib - used in script to check how many packages are out of date    
polkit-gnome - GUI sudo permission handler    
bc - used in scripts
socat - listen for hyprland socket events
brightnessctl - controlling screen brightness
acpi - get battery info
acpid - start this with "systemctl enable acpid"
sox - play sounds
sassc - used in ags
pipewire-pulse - used in ags
upower - used in ags
gnome-bluetooth-3.0 - used in ags

#### Aur
aylur's gtk shell

#### Flatpaks
overskride

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
