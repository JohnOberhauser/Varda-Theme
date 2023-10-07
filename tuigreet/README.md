### Setting virtual terminal colors in the early boot process

#### Step 1
https://github.com/coderonline/base16-vtrgb

Use this repo.  Grab /initcpio/ and place those files in
/usr/lib/initcpio/hooks
/usr/lib/initcpio/install

(or install from the AUR)

#### Step 2
rename and move `varda.vga` to `/etc/vtrgb`

#### Step 3
edit /etc/mkinitcpio.conf
add `setvtrgb` to the `HOOKS` list.  Place it first in the list.

#### Step 3.5 (optional)
create a backup of your images in /boot/ just in case something goes terribly wrong

#### Step 4
run `mkinitcpio -P` to regenerate all of the initramfs images

#### Step 5
Reboot your computer with your new colors


### Setting virtual terminal resolution
Adding these docs a few months after I did this, so hopefully these steps are right...

#### Step 1
Add an fb mode in `/etc/fb.modes` like so:

```
mode "ultrawide"
    geometry 5120 1440 5120 1440 32
    timings 0 0 0 0 0 0 0
endmode
```

#### Step 2
Add this to `/etc/rc.local`
```
#!/bin/bash
fbset -a "ultrawide"
```

If it doesn't already exist, create it and make it executable with
`sudo chmod +x /etc/rc.local`

#### Step 3
Make sure `rc-local.service` is enabled
`sudo systemctl enable rc-local.service`

If the `rc-local.service` file doesn't exist, create it in `/etc/systemd/system/`
These are the files contents
```
[Unit]
Description=/etc/rc.local Compatibility
ConditionPathExists=/etc/rc.local

[Service]
Type=forking
ExecStart=/etc/rc.local start
TimeoutSec=0
StandardOutput=tty
RemainAfterExit=yes
SysVStartPriority=99

[Install]
WantedBy=multi-user.target
```

### Installing greetd and tuigreet

install the packages from the AUR
greetd
greetd-tuigreet

enable greetd:
sudo systemctl enable --now greetd

if you have another greeter set up, you will need to disable that first.  i.e. for gdm -> sudo systemctl disable gdm
