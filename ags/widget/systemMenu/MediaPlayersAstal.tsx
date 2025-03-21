import {Gtk} from "astal/gtk4"
import Mpris from "gi://AstalMpris"
import {bind, Variable} from "astal"
import Pango from "gi://Pango?version=1.0";

function lengthStr(length: number) {
    const min = Math.floor(length / 60)
    const sec = Math.floor(length % 60)
    const sec0 = sec < 10 ? "0" : ""
    return `${min}:${sec0}${sec}`
}


function MediaPlayer({ player }: { player: Mpris.Player }) {
    const { START, END, CENTER } = Gtk.Align

    const title = bind(player, "title").as(t =>
        t || "Unknown Track")

    const artist = bind(player, "artist").as(a =>
        a || "Unknown Artist")

    // player.position will keep changing even when the player is paused.  This is a workaround
    const realPosition = Variable(player.position)
    bind(player, "position").subscribe((position) => {
        if (player.playbackStatus === Mpris.PlaybackStatus.PLAYING) {
            realPosition.set(position)
        }
    })

    const playIcon = bind(player, "playbackStatus").as(s =>
        s === Mpris.PlaybackStatus.PLAYING
            ? ""
            : ""
    )

    return <box
        cssClasses={["mediaPlayer"]}
        vertical={true}>
        <label
            cssClasses={["labelSmallBold"]}
            ellipsize={Pango.EllipsizeMode.END}
            halign={CENTER}
            label={title}/>
        <label
            cssClasses={["labelSmall"]}
            ellipsize={Pango.EllipsizeMode.END}
            halign={CENTER}
            label={artist}/>
        <box
            cssClasses={["seekContainer"]}
            vertical={false}>
            <label
                cssClasses={["labelSmall"]}
                halign={START}
                visible={bind(player, "length").as(l => l > 0)}
                label={realPosition().as(lengthStr)}
            />
            <slider
                cssClasses={["seek"]}
                hexpand={true}
                visible={bind(player, "length").as(l => l > 0)}
                onChangeValue={({value}) => {
                    player.position = value * player.length
                    realPosition.set(player.position)
                }}
                value={realPosition().as((position) => {
                    return player.length > 0 ? position / player.length : 0
                })}
            />
            <label
                cssClasses={["labelSmall"]}
                halign={END}
                visible={bind(player, "length").as(l => l > 0)}
                label={bind(player, "length").as(l => l > 0 ? lengthStr(l) : "0:00")}
            />
        </box>
        <box
            halign={CENTER}>
            <button
                cssClasses={["controlButton"]}
                onClicked={() => {
                    if (player.shuffleStatus === Mpris.Shuffle.ON) {
                        player.set_shuffle_status(Mpris.Shuffle.OFF)
                    } else {
                        player.set_shuffle_status(Mpris.Shuffle.ON)
                    }
                }}
                visible={bind(player, "shuffleStatus").as((shuffle) => shuffle !== Mpris.Shuffle.UNSUPPORTED)}
                label={bind(player, "shuffleStatus").as((shuffle) => {
                    if (shuffle === Mpris.Shuffle.ON) {
                        return ""
                    } else {
                        return "󰒞"
                    }
                })}/>
            <button
                cssClasses={["controlButton"]}
                onClicked={() => player.previous()}
                visible={bind(player, "canGoPrevious")}
                label=""/>
            <button
                cssClasses={["controlButton"]}
                onClicked={() => player.play_pause()}
                visible={bind(player, "canControl")}
                label={playIcon}/>
            <button
                cssClasses={["controlButton"]}
                onClicked={() => player.next()}
                visible={bind(player, "canGoNext")}
                label=""/>
            <button
                cssClasses={["controlButton"]}
                onClicked={() => {
                    if (player.loopStatus === Mpris.Loop.NONE) {
                        player.set_loop_status(Mpris.Loop.PLAYLIST)
                    } else if (player.loopStatus === Mpris.Loop.PLAYLIST) {
                        player.set_loop_status(Mpris.Loop.TRACK)
                    } else {
                        player.set_loop_status(Mpris.Loop.NONE)
                    }
                }}
                visible={bind(player, "loopStatus").as((status) => status !== Mpris.Loop.UNSUPPORTED)}
                label={bind(player, "loopStatus").as((status) => {
                    if (status === Mpris.Loop.NONE) {
                        return "󰑗"
                    } else if (status === Mpris.Loop.PLAYLIST) {
                        return "󰑖"
                    } else {
                        return "󰑘"
                    }
                })}/>
        </box>
    </box>
}

/**
 * This media play collection uses the astal library to monitor mpris data.  It's causes noticeable ui jank,
 * so I created a clone of this in the [MediaPlayers.tsx] file.  Using that one until the jank is fixed.
 */
export default function () {
    const mpris = Mpris.get_default()
    return <box
        cssClasses={["mediaPlayersContainer"]}
        vertical={true}>
        {bind(mpris, "players").as(players => {
            return players.map(player => (
                <MediaPlayer player={player}/>
            ))
        })}
    </box>
}