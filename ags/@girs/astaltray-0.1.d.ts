/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalTray?version=0.1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';

    export namespace AstalTray {
        /**
         * AstalTray-0.1
         */

        export namespace Category {
            export const $gtype: GObject.GType<Category>;
        }

        enum Category {
            APPLICATION,
            COMMUNICATIONS,
            SYSTEM,
            HARDWARE,
        }

        export namespace Status {
            export const $gtype: GObject.GType<Status>;
        }

        enum Status {
            PASSIVE,
            ACTIVE,
            NEEDS_ATTENTION,
        }
        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        function category_to_nick(): string;
        function status_to_nick(): string;
        /**
         * Get the singleton instance of [class`AstalTray`.Tray]
         */
        function get_default(): Tray;
        module Tray {
            // Signal callback interfaces

            interface ItemAdded {
                (item_id: string): void;
            }

            interface ItemRemoved {
                (item_id: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                items: TrayItem[];
            }
        }

        class Tray extends GObject.Object {
            static $gtype: GObject.GType<Tray>;

            // Properties

            /**
             * List of currently registered tray items
             */
            get items(): TrayItem[];

            // Constructors

            constructor(properties?: Partial<Tray.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Tray;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'item-added', callback: (_source: this, item_id: string) => void): number;
            connect_after(signal: 'item-added', callback: (_source: this, item_id: string) => void): number;
            emit(signal: 'item-added', item_id: string): void;
            connect(signal: 'item-removed', callback: (_source: this, item_id: string) => void): number;
            connect_after(signal: 'item-removed', callback: (_source: this, item_id: string) => void): number;
            emit(signal: 'item-removed', item_id: string): void;

            // Static methods

            /**
             * Get the singleton instance of [class`AstalTray`.Tray]
             */
            static get_default(): Tray;

            // Methods

            /**
             * gets the TrayItem with the given item-id.
             * @param item_id
             */
            get_item(item_id: string): TrayItem;
            get_items(): TrayItem[];
        }

        module TrayItem {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface Ready {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                title: string;
                category: Category;
                status: Status;
                tooltip: Tooltip;
                tooltip_markup: string;
                tooltipMarkup: string;
                id: string;
                is_menu: boolean;
                isMenu: boolean;
                icon_theme_path: string;
                iconThemePath: string;
                icon_name: string;
                iconName: string;
                icon_pixbuf: GdkPixbuf.Pixbuf;
                iconPixbuf: GdkPixbuf.Pixbuf;
                gicon: Gio.Icon;
                item_id: string;
                itemId: string;
            }
        }

        class TrayItem extends GObject.Object {
            static $gtype: GObject.GType<TrayItem>;

            // Properties

            /**
             * The Title of the TrayItem
             */
            get title(): string;
            /**
             * The category this item belongs to
             */
            get category(): Category;
            /**
             * the current status of this item
             */
            get status(): Status;
            /**
             * the tooltip of this item
             */
            get tooltip(): Tooltip;
            /**
             * a markup representation of the tooltip. This is basically equvivalent to `tooltip.title \n tooltip.description`
             */
            get tooltip_markup(): string;
            /**
             * a markup representation of the tooltip. This is basically equvivalent to `tooltip.title \n tooltip.description`
             */
            get tooltipMarkup(): string;
            /**
             * the id of the item. This id is specified by the tray app.
             */
            get id(): string;
            /**
             * If set, this only supports the menu, so showing the menu should be prefered over calling [method`AstalTray`.TrayItem.activate].
             */
            get is_menu(): boolean;
            /**
             * If set, this only supports the menu, so showing the menu should be prefered over calling [method`AstalTray`.TrayItem.activate].
             */
            get isMenu(): boolean;
            /**
             * the icon theme path, where to look for the [property`AstalTray`.TrayItem:icon-name].
             * It is recommended to use the [property`AstalTray`.TrayItem:gicon] property, which does the icon lookups for you.
             */
            get icon_theme_path(): string;
            /**
             * the icon theme path, where to look for the [property`AstalTray`.TrayItem:icon-name].
             * It is recommended to use the [property`AstalTray`.TrayItem:gicon] property, which does the icon lookups for you.
             */
            get iconThemePath(): string;
            /**
             * the name of the icon. This should be looked up in the [property`AstalTray`.TrayItem:icon-theme-path] if set or in the currently used icon
             * theme otherwise.
             * It is recommended to use the [property`AstalTray`.TrayItem:gicon] property, which does the icon lookups for you.
             */
            get icon_name(): string;
            /**
             * the name of the icon. This should be looked up in the [property`AstalTray`.TrayItem:icon-theme-path] if set or in the currently used icon
             * theme otherwise.
             * It is recommended to use the [property`AstalTray`.TrayItem:gicon] property, which does the icon lookups for you.
             */
            get iconName(): string;
            /**
             * a pixbuf containing the icon.
             * It is recommended to use the [property`AstalTray`.TrayItem:gicon] property, which does the icon lookups for you.
             */
            get icon_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * a pixbuf containing the icon.
             * It is recommended to use the [property`AstalTray`.TrayItem:gicon] property, which does the icon lookups for you.
             */
            get iconPixbuf(): GdkPixbuf.Pixbuf;
            /**
             * contains the items icon. This property is intended to be used with the gicon property of the Icon widget and the recommended way to display the
             * icon. This property unifies the [property`AstalTray`.TrayItem:icon-name], [property`AstalTray`.TrayItem:icon-theme-path] and [property
             * `AstalTray`.TrayItem:icon-pixbuf] properties.
             */
            get gicon(): Gio.Icon;
            set gicon(val: Gio.Icon);
            /**
             * the id of the item used to uniquely identify the TrayItems by this lib.
             */
            get item_id(): string;
            set item_id(val: string);
            /**
             * the id of the item used to uniquely identify the TrayItems by this lib.
             */
            get itemId(): string;
            set itemId(val: string);

            // Constructors

            constructor(properties?: Partial<TrayItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'ready', callback: (_source: this) => void): number;
            connect_after(signal: 'ready', callback: (_source: this) => void): number;
            emit(signal: 'ready'): void;

            // Methods

            /**
             * send an activate request to the tray app.
             * @param x
             * @param y
             */
            activate(x: number, y: number): void;
            /**
             * send a secondary activate request to the tray app.
             * @param x
             * @param y
             */
            secondary_activate(x: number, y: number): void;
            /**
             * send a scroll request to the tray app. valid values for the orientation are "horizontal" and "vertical".
             * @param delta
             * @param orientation
             */
            scroll(delta: number, orientation: string): void;
            /**
             * creates a new Gtk Menu for this item.
             */
            create_menu(): Gtk.Menu | null;
            to_json_string(): string;
            get_title(): string;
            get_category(): Category;
            get_status(): Status;
            get_tooltip(): Tooltip | null;
            get_tooltip_markup(): string;
            get_id(): string;
            get_is_menu(): boolean;
            get_icon_theme_path(): string;
            get_icon_name(): string;
            get_icon_pixbuf(): GdkPixbuf.Pixbuf;
            get_gicon(): Gio.Icon;
            get_item_id(): string;
        }

        type TrayClass = typeof Tray;
        abstract class TrayPrivate {
            static $gtype: GObject.GType<TrayPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TrayItemClass = typeof TrayItem;
        abstract class TrayItemPrivate {
            static $gtype: GObject.GType<TrayItemPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Pixmap {
            static $gtype: GObject.GType<Pixmap>;

            // Fields

            width: number;
            height: number;
            bytes: Uint8Array;
            bytes_length1: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    width: number;
                    height: number;
                    bytes: Uint8Array;
                    bytes_length1: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class Tooltip {
            static $gtype: GObject.GType<Tooltip>;

            // Fields

            icon_name: string;
            icon: Pixmap[];
            icon_length1: number;
            title: string;
            description: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    icon_name: string;
                    icon: Pixmap[];
                    icon_length1: number;
                    title: string;
                    description: string;
                }>,
            );
            _init(...args: any[]): void;
        }

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

    export default AstalTray;
}

declare module 'gi://AstalTray' {
    import AstalTray01 from 'gi://AstalTray?version=0.1';
    export default AstalTray01;
}
// END
