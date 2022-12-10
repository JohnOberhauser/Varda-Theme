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





### Installing greetd and tuigreet

install the packages from the AUR
greetd
greetd-tuigreet

enable greetd:
sudo systemctl enable --now greetd

if you have another greeter set up, you will need to disable that first.  i.e. for gdm -> sudo systemctl disable gdm
