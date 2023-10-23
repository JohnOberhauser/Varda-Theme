Kvantum is a style provider for QT5.

Install qt5ct and kvantum

Env variable that should be set

QT_QPA_PLATFORMTHEME=qt5ct
QT_STYLE_OVERRIDE=kvantum

These are set in the hyprland config file.

These also need to be set in the hyprland config

```
exec-once=dbus-update-activation-environment --systemd --all
exec-once=systemctl --user import-environment QT_QPA_PLATFORMTHEME QT_STYLE_OVERRIDE
```

Move the Varda directory to `.config/kvantum`

Open the kvantum program and change the theme to Varda.