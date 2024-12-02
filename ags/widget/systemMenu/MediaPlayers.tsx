import { Astal, Gtk } from "astal/gtk3"
import Mpris from "gi://AstalMpris"
import { bind } from "astal"

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

    const position = bind(player, "position").as(p => player.length > 0
        ? p / player.length : 0)

    const playIcon = bind(player, "playbackStatus").as(s =>
        s === Mpris.PlaybackStatus.PLAYING
            ? ""
            : ""
    )

    return <box
        className="mediaPlayer"
        vertical={true}>
        <label
            className="title"
            halign={CENTER}
            label={title}/>
        <label
            className="artist"
            halign={CENTER}
            label={artist}/>
        <box
            className="seekContainer"
            vertical={false}>
            <label
                className="time"
                halign={START}
                visible={bind(player, "length").as(l => l > 0)}
                label={bind(player, "position").as(lengthStr)}
            />
            <slider
                className="seek"
                hexpand={true}
                visible={bind(player, "length").as(l => l > 0)}
                onDragged={({value}) => player.position = value * player.length}
                value={position}
            />
            <label
                className="time"
                halign={END}
                visible={bind(player, "length").as(l => l > 0)}
                label={bind(player, "length").as(l => l > 0 ? lengthStr(l) : "0:00")}
            />
        </box>
        <box
            halign={CENTER}>
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