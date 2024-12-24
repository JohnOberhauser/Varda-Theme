#!/bin/bash

sudo systemctl enable --now bluetooth.service
sudo systemctl enable --now ufw.service
systemctl --user enable --now hypridle.service