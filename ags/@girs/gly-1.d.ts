/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Gly?version=1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace Gly {
        /**
         * Gly-1
         */

        /**
         * Errors that can appear while loading images.
         */
        class LoaderError extends GLib.Error {
            static $gtype: GObject.GType<LoaderError>;

            // Static fields

            /**
             * Generic type for all other errors.
             */
            static FAILED: number;
            /**
             * Unknown image format.
             */
            static UNKNOWN_IMAGE_FORMAT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Error quark for [error`GlyLoaderError]`
             */
            static quark(): GLib.Quark;
        }

        /**
         * Memory format
         */

        /**
         * Memory format
         */
        export namespace MemoryFormat {
            export const $gtype: GObject.GType<MemoryFormat>;
        }

        enum MemoryFormat {
            /**
             * 8-bit RGRA premultiplied
             */
            B8G8R8A8_PREMULTIPLIED,
            /**
             * 8-bit ARGB premultiplied
             */
            A8R8G8B8_PREMULTIPLIED,
            /**
             * 8-bit RGBA premultiplied
             */
            R8G8B8A8_PREMULTIPLIED,
            /**
             * 8-bit RGBA
             */
            B8G8R8A8,
            /**
             * 8-bit AGBR
             */
            A8R8G8B8,
            /**
             * 8-bit RGBA
             */
            R8G8B8A8,
            /**
             * 8-bit ABGR
             */
            A8B8G8R8,
            /**
             * 8-bit RGB
             */
            R8G8B8,
            /**
             * 8-bit BGR
             */
            B8G8R8,
            /**
             * 16-bit RGB
             */
            R16G16B16,
            /**
             * 16-bit RGBA premultiplied
             */
            R16G16B16A16_PREMULTIPLIED,
            /**
             * 16-bit RGBA
             */
            R16G16B16A16,
            /**
             * 16-bit float RGB
             */
            R16G16B16_FLOAT,
            /**
             * 16-bit float RGBA
             */
            R16G16B16A16_FLOAT,
            /**
             * 32-bit float RGB
             */
            R32G32B32_FLOAT,
            /**
             * 32-bit float RGBA premultiplied
             */
            R32G32B32A32_FLOAT_PREMULTIPLIED,
            /**
             * 16-bit float RGBA
             */
            R32G32B32A32_FLOAT,
            /**
             * 8-bit gray with alpha premultiplied
             */
            G8A8_PREMULTIPLIED,
            /**
             * 8-bit gray with alpha
             */
            G8A8,
            /**
             * 8-bit gray
             */
            G8,
            /**
             * 16-bit gray with alpha premultiplied
             */
            G16A16_PREMULTIPLIED,
            /**
             * 16-bit gray with alpha
             */
            G16A16,
            /**
             * 16-bit gray
             */
            G16,
        }
        /**
         * Sandbox mechanisms
         *
         * ::: warning
         *     Using `GLY_SANDBOX_SELECTOR_NOT_SANDBOXED` will disable an important security layer that sandboxes loaders. It is only intended for testing and development purposes.
         */

        /**
         * Sandbox mechanisms
         *
         * ::: warning
         *     Using `GLY_SANDBOX_SELECTOR_NOT_SANDBOXED` will disable an important security layer that sandboxes loaders. It is only intended for testing and development purposes.
         */
        export namespace SandboxSelector {
            export const $gtype: GObject.GType<SandboxSelector>;
        }

        enum SandboxSelector {
            /**
             * This mode selects `bwrap` outside of Flatpaks and usually
             *  `flatpak-spawn` inside of Flatpaks. The sandbox is disabled
             *  automatically inside of Flatpak development environments.
             *  Inside of Flatpaks, `flatpak-spawn` is used to create the sandbox. This
             *  mechanism starts an installed Flatpak with the same app id. For
             *  development, Flatpak are usually not installed and the sandbox can
             *  therefore not be used. If the sandbox has been started via
             *  `flatpak-builder --run` (i.e. without installed Flatpak) and the app id
             *  ends with `.Devel`, the sandbox is disabled.
             */
            AUTO,
            /**
             * bwrap
             */
            BWRAP,
            /**
             * flatpak-spawn
             */
            FLATPAK_SPAWN,
            /**
             * Disable sandbox. Unsafe, only use for testing and development.
             */
            NOT_SANDBOXED,
        }
        /**
         * Error quark for [error`GlyLoaderError]`
         * @returns The error domain
         */
        function loader_error_quark(): GLib.Quark;
        /**
         * Whether a memory format has an alpha channel
         * @param memory_format
         * @returns Returns `TRUE` if the memory format has an alpha channel
         */
        function memory_format_has_alpha(memory_format: MemoryFormat | null): boolean;
        /**
         * Whether a memory format as an alpha channel an the color values are
         * premultiplied with the alpha value
         * @param memory_format
         * @returns Returns `TRUE` if color channels are premultiplied
         */
        function memory_format_is_premultiplied(memory_format: MemoryFormat | null): boolean;
        module Frame {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A frame of an image often being the complete image.
         */
        class Frame extends GObject.Object {
            static $gtype: GObject.GType<Frame>;

            // Constructors

            constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Image data arranged according to [method`Frame`.get_memory_format]
             * @returns Image data
             */
            get_buf_bytes(): GLib.Bytes;
            /**
             * Duration to show frame for animations.
             *
             * If the value is zero, the image is not animated.
             * @returns Duration in microseconds.
             */
            get_delay(): number;
            /**
             * Height for image data in pixels
             * @returns Height in pixels
             */
            get_height(): number;
            /**
             * Format of the image data in [method`Gly`.Frame.get_buf_bytes]
             * @returns Format of image data
             */
            get_memory_format(): MemoryFormat;
            /**
             * Width of a row for image data in bytes
             * @returns Row stride in bytes
             */
            get_stride(): number;
            /**
             * Width for image data in pixels
             * @returns Width in pixels
             */
            get_width(): number;
        }

        module Image {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Image handle containing metadata and allowing frame requests.
         */
        class Image extends GObject.Object {
            static $gtype: GObject.GType<Image>;

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * See [method`Image`.get_width]
             * @returns height
             */
            get_height(): number;
            /**
             * Returns detected MIME type of the file
             * @returns MIME type
             */
            get_mime_type(): string;
            /**
             * Early width information.
             *
             * This information is often correct. However, it should only be used for
             * an early rendering estimates. For everything else, the specific frame
             * information should be used. See [method`Frame`.get_width].
             * @returns Width
             */
            get_width(): number;
            /**
             * Synchronously loads texture and information of the next frame.
             *
             * For single still images, this can only be called once.
             * For animated images, this function will loop to the first frame, when the last frame is reached.
             * @returns a new [class@Frame] on success, or `NULL` with @error filled in
             */
            next_frame(): Frame;
            /**
             * Asynchronous version of [method`Image`.next_frame].
             * @param cancellable A [class@Gio.Cancellable] to cancel the operation
             */
            next_frame_async(cancellable?: Gio.Cancellable | null): Promise<Frame>;
            /**
             * Asynchronous version of [method`Image`.next_frame].
             * @param cancellable A [class@Gio.Cancellable] to cancel the operation
             * @param callback A callback to call when the operation is complete
             */
            next_frame_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronous version of [method`Image`.next_frame].
             * @param cancellable A [class@Gio.Cancellable] to cancel the operation
             * @param callback A callback to call when the operation is complete
             */
            next_frame_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Frame> | void;
            /**
             * Finishes the [method`Image`.next_frame_async] call.
             * @param result a `GAsyncResult`
             * @returns Loaded frame.
             */
            next_frame_finish(result: Gio.AsyncResult): Frame;
        }

        module Loader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cancellable: Gio.Cancellable;
                file: Gio.File;
                sandbox_selector: SandboxSelector;
                sandboxSelector: SandboxSelector;
            }
        }

        /**
         * [class`Loader]` prepares loading an image.
         *
         * The following example shows how to obtain a [class`Gdk`.Texture]. It uses
         * [GlyGtk4](https://sophie-h.pages.gitlab.gnome.org/glycin/libglycin-gtk4)
         * for this.
         *
         * ```c
         * #include <glycin-gtk4.h>
         *
         * file = g_file_new_for_path ("test.png");
         * loader = gly_loader_new (file);
         * image = gly_loader_load (loader, NULL);
         * if (image)
         * {
         *   frame = gly_image_next_frame (image, NULL);
         *   if (frame) {
         *     texture = gly_gtk_frame_get_texture (frame);
         *     printf ("Image height: %d\n", gdk_texture_get_height (texture));
         *     image_widget = gtk_image_new_from_paintable (GDK_PAINTABLE (texture));
         *   }
         * }
         * ```
         */
        class Loader extends GObject.Object {
            static $gtype: GObject.GType<Loader>;

            // Properties

            get cancellable(): Gio.Cancellable;
            set cancellable(val: Gio.Cancellable);
            get file(): Gio.File;
            get sandbox_selector(): SandboxSelector;
            set sandbox_selector(val: SandboxSelector);
            get sandboxSelector(): SandboxSelector;
            set sandboxSelector(val: SandboxSelector);

            // Constructors

            constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](file: Gio.File): Loader;

            // Methods

            /**
             * Synchronously loads an image and returns an [class`Image]` when successful.
             * @returns a new [class@Image] on success, or `NULL` with @error filled in
             */
            load(): Image;
            /**
             * Asynchronous version of [method`Loader`.load].
             * @param cancellable A [class@Gio.Cancellable] to cancel the operation
             */
            load_async(cancellable?: Gio.Cancellable | null): Promise<Image>;
            /**
             * Asynchronous version of [method`Loader`.load].
             * @param cancellable A [class@Gio.Cancellable] to cancel the operation
             * @param callback A callback to call when the operation is complete
             */
            load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronous version of [method`Loader`.load].
             * @param cancellable A [class@Gio.Cancellable] to cancel the operation
             * @param callback A callback to call when the operation is complete
             */
            load_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Image> | void;
            /**
             * Finishes the [method`Image`.next_frame_async] call.
             * @param result A `GAsyncResult`
             * @returns Loaded frame.
             */
            load_finish(result: Gio.AsyncResult): Image;
            /**
             * Selects which sandbox mechanism should be used. The default without calling this function is [enum`SandboxSelector]``.AUTO`.
             * @param sandbox_selector Method by which the sandbox mechanism is selected
             */
            set_sandbox_selector(sandbox_selector: SandboxSelector | null): void;
        }

        type FrameClass = typeof Frame;
        type ImageClass = typeof Image;
        type LoaderClass = typeof Loader;
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

    export default Gly;
}

declare module 'gi://Gly' {
    import Gly1 from 'gi://Gly?version=1';
    export default Gly1;
}
// END
