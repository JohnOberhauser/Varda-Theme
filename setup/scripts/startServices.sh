#!/bin/bash

sudo systemctl enable --now bluetooth.service
systemctl --user enable --now hypridle.service