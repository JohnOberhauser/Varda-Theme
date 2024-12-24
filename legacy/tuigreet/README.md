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