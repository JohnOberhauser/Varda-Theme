#!/usr/bin/env python3

import gi
import os
import time
gi.require_version('Playerctl', '2.0')
from gi.repository import Playerctl, GLib


manager = Playerctl.PlayerManager()

# playerConnected = False

def eww(command):
    os.system("{} {}".format("eww -c $HOME/.config/hypr/components/eww", command))

def on_play(player, status, manager):
    eww("update playIcon=󰏤")
    print('play')
    setTrackInfo(player)

def on_pause(player, status, manager):
    eww("update playIcon=")
    print('paused')

def setTrackInfo(player):
    print("setting track info")
    artist = player.get_artist()
    title = player.get_title()
    setArtistAndTitle(artist, title)

def setArtistAndTitle(artist, title):
    print("artist {}".format(artist))
    print("title {}".format(title))
    if (len(artist)) > 26:
        artist = ("%.24s" % artist) + "..."
    if (len(title)) > 26:
        title = ("%.24s" % title) + "..."
    eww('update trackArtist=\"{}\"'.format(artist if artist and artist != "" else "---"))
    eww('update trackTitle=\"{}\"'.format(title if title and title != "" else "---"))

def on_metadata(player, metadata, manager):
    artist = metadata['xesam:artist'][0]
    title = metadata['xesam:title']
    setArtistAndTitle(artist, title)
    eww("update trackPosition=0")

def on_shuffle(player, status, manager):
    if (status):
        print("shuffling")
        eww("update shuffleIcon=󰒟")
    else:
        print("not shuffling")
        eww("update shuffleIcon=󰒞")

def on_loop_none(player, status, manager):
    print("none")
    eww("update loopIcon=󰑗")

def on_loop_track(player, status, manager):
    print("track")
    eww("update loopIcon=󰑘")

def on_loop_playlist(player, status, manager):
    print("playlist")
    eww("update loopIcon=󰑖")

def init_player(name):
    # choose if you want to manage the player based on the name
    if name.name in ['spotify']:
        eww("update mediaControlsRevealed=true")
        player = Playerctl.Player.new_from_name(name)
        print(dir(player))
        player.connect('playback-status::playing', on_play, manager)
        player.connect('playback-status::paused', on_pause, manager)
        player.connect('playback-status::stopped', on_pause, manager)
        player.connect('shuffle', on_shuffle, manager)
        player.connect('loop-status::none', on_loop_none, manager)
        player.connect('loop-status::track', on_loop_track, manager)
        player.connect('loop-status::playlist', on_loop_playlist, manager)
        player.connect('metadata', on_metadata, manager)
        player.set_shuffle(False)
        player.set_loop_status(Playerctl.LoopStatus.NONE)
        setTrackInfo(player)
        manager.manage_player(player)


def on_name_appeared(manager, name):
    print("player appeared: {}".format(name.name))
    time.sleep(3) # race condition during initialization
    init_player(name)

def on_player_vanished(manager, player):
    print('player has exited: {}'.format(player.props.player_name))
    # playerConnected = False
    eww("update mediaControlsRevealed=false")

manager.connect('name-appeared', on_name_appeared)
manager.connect('player-vanished', on_player_vanished)

for name in manager.props.player_names:
    print(name.name)
    init_player(name)

main = GLib.MainLoop()
main.run()