/// <reference path="./gtk-4.0.d.ts" />
/// <reference path="./gsk-4.0.d.ts" />
/// <reference path="./graphene-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Gtk4SessionLock?version=1.0' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=4.0';
    import type Gsk from 'gi://Gsk?version=4.0';
    import type Graphene from 'gi://Graphene?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace Gtk4SessionLock {
        /**
         * Gtk4SessionLock-1.0
         */

        /**
         * May block for a Wayland roundtrip the first time it's called.
         * @returns %TRUE if the platform is Wayland and Wayland compositor supports the Session Lock protocol.
         */
        function is_supported(): boolean;
        namespace Instance {
            // Signal callback interfaces

            interface Failed {
                (): void;
            }

            interface Locked {
                (): void;
            }

            interface Unlocked {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * An instance of the object used to control locking the screen.
         * Multiple instances can exist at once, but only one can be locked at a time.
         */
        class Instance extends GObject.Object {
            static $gtype: GObject.GType<Instance>;

            // Constructors

            constructor(properties?: Partial<Instance.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Instance;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'failed', callback: (_source: this) => void): number;
            connect_after(signal: 'failed', callback: (_source: this) => void): number;
            emit(signal: 'failed'): void;
            connect(signal: 'locked', callback: (_source: this) => void): number;
            connect_after(signal: 'locked', callback: (_source: this) => void): number;
            emit(signal: 'locked'): void;
            connect(signal: 'unlocked', callback: (_source: this) => void): number;
            connect_after(signal: 'unlocked', callback: (_source: this) => void): number;
            emit(signal: 'unlocked'): void;

            // Methods

            /**
             * This should be called with a different window once for each monitor immediately after calling
             * gtk_session_lock_lock(). Hiding a window that is active on a monitor or not letting a window be resized by the
             * library may result in a Wayland protocol error.
             * @param window The GTK Window to use as a lock surface
             * @param monitor The monitor to show it on
             */
            assign_window_to_monitor(window: Gtk.Window, monitor: Gdk.Monitor): void;
            /**
             * Returns if this instance currently holds a lock.
             */
            is_locked(): boolean;
            /**
             * Lock the screen. This should be called before assigning any windows to monitors. If this function fails the ::failed
             * signal is emitted, if it succeeds the ::locked signal is emitted. The ::failed signal may be emitted before the
             * function returns (for example, if another #GtkSessionLockInstance holds a lock) or later (if another process holds a
             * lock). The only case where neither signal is triggered is if the instance is already locked.
             * @returns false on immediate fail, true if lock acquisition was successfully started
             */
            lock(): boolean;
            /**
             * If the screen is locked by this instance unlocks it and fires ::unlocked. Otherwise has no effect
             */
            unlock(): void;
        }

        type InstanceClass = typeof Instance;
        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default Gtk4SessionLock;
}

declare module 'gi://Gtk4SessionLock' {
    import Gtk4SessionLock10 from 'gi://Gtk4SessionLock?version=1.0';
    export default Gtk4SessionLock10;
}
// END
