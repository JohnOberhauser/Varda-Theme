import {Gtk} from "astal/gtk3"
import Mpris from "gi://AstalMpris"
import {bind, Variable} from "astal"

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
        className="mediaPlayer"
        vertical={true}>
        <label
            className="labelSmallBold"
            truncate={true}
            halign={CENTER}
            label={title}/>
        <label
            className="labelSmall"
            truncate={true}
            halign={CENTER}
            label={artist}/>
        <box
            className="seekContainer"
            vertical={false}>
            <label
                className="labelSmall"
                halign={START}
                visible={bind(player, "length").as(l => l > 0)}
                label={realPosition().as(lengthStr)}
            />
            <slider
                className="seek"
                hexpand={true}
                visible={bind(player, "length").as(l => l > 0)}
                onDragged={({value}) => {
                    player.position = value * player.length
                    realPosition.set(player.position)
                }}
                value={realPosition().as((position) => {
                    return player.length > 0 ? position / player.length : 0
                })}
            />
            <label
                className="labelSmall"
                halign={END}
                visible={bind(player, "length").as(l => l > 0)}
                label={bind(player, "length").as(l => l > 0 ? lengthStr(l) : "0:00")}
            />
        </box>
        <box
            halign={CENTER}>
            <button
                className="controlButton"
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
                className="controlButton"
                onClicked={() => player.previous()}
                visible={bind(player, "canGoPrevious")}
                label=""/>
            <button
                className="controlButton"
                onClicked={() => player.play_pause()}
                visible={bind(player, "canControl")}
                label={playIcon}/>
            <button
                className="controlButton"
                onClicked={() => player.next()}
                visible={bind(player, "canGoNext")}
                label=""/>
            <button
                className="controlButton"
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

export default function () {
    const mpris = Mpris.get_default()
    return <box
        className="mediaPlayersContainer"
        vertical={true}>
        {bind(mpris, "players").as(players => {
            return players.map(player => (
                <MediaPlayer player={player}/>
            ))
        })}
    </box>
}