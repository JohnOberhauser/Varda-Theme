mkdir -p ~/Downloads
cd ~/Downloads

git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

cd ~/Downloads
rm -rf ~/Downloads/yay
