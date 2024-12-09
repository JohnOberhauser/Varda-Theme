### Installing greetd and tuigreet

install the packages
greetd
greetd-tuigreet

edit /etc/greetd/config.toml
so that it uses tuigreet

enable greetd:
sudo systemctl enable --now greetd

if you have another greeter set up, you will need to disable that first.  i.e. for gdm -> sudo systemctl disable gdm


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
run `mkinitcpio -P` to regenerate all the initramfs images

#### Step 5
Reboot your computer with your new colors


### Setting virtual terminal resolution

#### Step 1
edit /etc/mkinitcpio.conf
add `amdgpu` to the `MODULES` list.
add `kms` to the `HOOKS` list.  Place it first in the list.


### Showing asterisks when asking for LUKS password

#### Step 1
Make sure `plymouth` is installed

#### Step 2
edit /etc/mkinitcpio.conf
add `plymouth` to the `HOOKS` list.  Place it right before `encrypt`.


#### OLD - wrong way to set resolution
You should use the above steps, enabling kms for ensuring the native resolution is used.
Keeping this documentation in just in case I want to reference it for something else in the future.

#### Step 1
Add an FB mode in `/etc/fb.modes` like so:

```
mode "ultrawide"
    geometry 5120 1440 5120 1440 32
    timings 0 0 0 0 0 0 0
endmode
```

#### Step 2
Copy rc.local to `/etc/`

#### Step 3
Make sure `rc-local.service` is enabled
`sudo systemctl enable rc-local.service`

If the `rc-local.service` file doesn't exist, copy it to `/etc/systemd/system/`