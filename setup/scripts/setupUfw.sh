#!/bin/bash

sudo systemctl enable --now ufw.service
sudo ufw default deny
sudo ufw enable