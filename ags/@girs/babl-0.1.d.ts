/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Babl?version=0.1' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace Babl {
        /**
         * Babl-0.1
         */

        export namespace IccIntent {
            export const $gtype: GObject.GType<IccIntent>;
        }

        enum IccIntent {
            PERCEPTUAL,
            RELATIVE_COLORIMETRIC,
            SATURATION,
            ABSOLUTE_COLORIMETRIC,
            PERFORMANCE,
        }

        export namespace SpaceFlags {
            export const $gtype: GObject.GType<SpaceFlags>;
        }

        enum SpaceFlags {
            NONE,
            EQUALIZE,
        }
        const ALPHA_FLOOR: number;
        const ALPHA_FLOOR_F: number;
        const MAJOR_VERSION: number;
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        /**
         * Returns the babl object representing the color component given by
         * `name` such as for example "R", "cyan" or "CIE L".
         * @param name
         */
        function component(name: string): Object;
        /**
         * Returns the RGB space defined for the destination of conversion.
         * @param conversion
         */
        function conversion_get_destination_space(conversion: Object): Object;
        /**
         * Returns the RGB space defined for the source of conversion.
         * @param conversion
         */
        function conversion_get_source_space(conversion: Object): Object;
        /**
         * Deinitializes the babl library and frees any resources used when
         * matched with the number of calls to babl_init().
         */
        function exit(): void;
        /**
         * Create a faster than normal fish with specified performance (and thus
         * corresponding precision tradeoff), values tolerance can hold: NULL and
         * "default", means do same as babl_fish(), other values understood in
         * increasing order of speed gain are:
         *    "exact" "precise" "fast" "glitch"
         *
         * Fast fishes should be cached, since they are not internally kept track
         * of/made into singletons by babl and many creations of fast fishes will
         * otherwise be a leak.
         * @param source_format
         * @param destination_format
         * @param performance
         */
        function fast_fish(source_format: any | null, destination_format: any | null, performance: string): Object;
        /**
         * Create a babl fish capable of converting from source_format to
         *  destination_format, source and destination can be either strings
         *  with the names of the formats or Babl-format objects.
         * @param source_format
         * @param destination_format
         */
        function fish(source_format?: any | null, destination_format?: any | null): Object;
        /**
         * Returns the babl object representing the color format given by
         * `name` such as for example "RGB u8", "CMYK float" or "CIE Lab u16",
         * creates a format using the sRGB space, to also specify the color space
         * and TRCs for a format, see babl_format_with_space.
         * @param encoding
         */
        function format(encoding: string): Object;
        /**
         * Returns 1 if the provided format name is known by babl or 0 if it is
         * not. Can also be used to verify that specific extension formats are
         * available (though this can also be inferred from the version of babl).
         * @param name
         */
        function format_exists(name: string): number;
        /**
         * Returns the bytes per pixel for a babl color format.
         * @param format
         */
        function format_get_bytes_per_pixel(format: Object): number;
        /**
         * Returns the components and data type, without space suffix.
         * @param babl
         */
        function format_get_encoding(babl: Object): string;
        /**
         * Return the model used for constructing the format.
         * @param format
         */
        function format_get_model(format: Object): Object;
        /**
         * Returns the number of components for the given `format`.
         * @param format
         */
        function format_get_n_components(format: Object): number;
        function format_get_space(format: Object): Object;
        /**
         * Returns the type in the given `format` for the given
         * `component_index`.
         * @param format
         * @param component_index
         */
        function format_get_type(format: Object, component_index: number): Object;
        /**
         * Returns whether the `format` has an alpha channel.
         * @param format
         */
        function format_has_alpha(format: Object): number;
        /**
         * Returns whether the `format` is a format_n type.
         * @param format
         */
        function format_is_format_n(format: Object): number;
        /**
         * check whether a format is a palette backed format.
         * @param format
         */
        function format_is_palette(format: Object): number;
        function format_n(type: Object, components: number): Object;
        /**
         * Returns the babl object representing the color format given by
         * `name` such as for example "RGB u8", "R'G'B'A float", "Y float" with
         * a specific RGB working space used as the space, the resulting format
         * has -space suffixed to it, unless the space requested is sRGB then
         * the unsuffixed version is used. If a format is passed in as space
         * the space of the format is used.
         * @param encoding
         * @param space
         */
        function format_with_space(encoding: string, space: Object): Object;
        function get_model_flags(model: Object): ModelFlag;
        /**
         * Returns a string describing a Babl object.
         * @param babl
         */
        function get_name(babl: Object): string;
        /**
         * Get the version information on the babl library
         */
        function get_version(): [number, number, number];
        function icc_get_key(
            icc_data: string,
            icc_length: number,
            key: string,
            language: string,
            country: string,
        ): string;
        function icc_make_space(icc_data: string, icc_length: number, intent: IccIntent | null, error: string): Object;
        /**
         * Initializes the babl library.
         */
        function init(): void;
        /**
         * introspect a given BablObject
         * @param babl A #Babl
         */
        function introspect(babl: Object): void;
        /**
         * Returns the babl object representing the color model given by `name`
         * such as for example "RGB", "CMYK" or "CIE Lab".
         * @param name
         */
        function model(name: string): Object;
        function model_is(babl: Object, model_name: string): number;
        /**
         * The models for formats also have a space in babl, try to avoid code
         * needing to use this.
         * @param name
         * @param space
         */
        function model_with_space(name: string, space: Object): Object;
        /**
         * create a new palette based format, name is optional pass in NULL to get
         * an anonymous format. If you pass in with_alpha the format also gets
         * an 8bit alpha channel. Returns the BablModel of the color model. If
         * you pass in the same name the previous formats will be provided
         * again.
         * @param name
         * @param format_u8
         * @param format_u8_with_alpha
         */
        function new_palette(name: string, format_u8: Object, format_u8_with_alpha: Object): Object;
        /**
         * create a new palette based format, name is optional pass in NULL to get
         * an anonymous format. If you pass in with_alpha the format also gets
         * an 8bit alpha channel. Returns the BablModel of the color model. If
         * you pass in the same name the previous formats will be provided
         * again.
         * @param name
         * @param space
         * @param format_u8
         * @param format_u8_with_alpha
         */
        function new_palette_with_space(
            name: string,
            space: Object,
            format_u8: Object,
            format_u8_with_alpha: Object,
        ): Object;
        /**
         * reset a palette to initial state, frees up some caches that optimize
         * conversions.
         * @param babl
         */
        function palette_reset(babl: Object): void;
        /**
         * Assign a palette to a palette format, the data is a single span of pixels
         * representing the colors of the palette.
         * @param babl a #Babl
         * @param format The pixel format
         * @param data The pixel data
         * @param count The number of pixels in @data
         */
        function palette_set_palette(babl: Object, format: Object, data: Uint8Array | string, count: number): void;
        /**
         * Process n pixels from source to destination using babl_fish,
         *  returns number of pixels converted.
         * @param babl_fish
         * @param source
         * @param destination
         * @param n
         */
        function process(babl_fish: Object, source: any | null, destination: any | null, n: number): number;
        function process_rows(
            babl_fish: Object,
            source: any | null,
            source_stride: number,
            dest: any | null,
            dest_stride: number,
            n: number,
            rows: number,
        ): number;
        /**
         * Returns the babl object representing the `horizontal` and `vertical`
         * sampling such as for example 2, 2 for the chroma components in
         * YCbCr.
         * @param horizontal
         * @param vertical
         */
        function sampling(horizontal: number, vertical: number): Object;
        /**
         * Returns the babl object representing the specific RGB matrix color
         * working space referred to by name. Babl knows of:
         *    sRGB, Rec2020, Adobish, Apple and ProPhoto
         * @param name
         */
        function space(name: string): Object;
        /**
         * Creates a new babl-space/ RGB matrix color space definition with the
         * specified CIE xy(Y) values for white point: wx, wy and primary
         * chromaticities: rx,ry,gx,gy,bx,by and TRCs to be used. After registering a
         * new babl-space it can be used with babl_space() passing its name;
         *
         * Internally this does the math to derive the RGBXYZ matrix as used in an ICC
         * profile.
         * @param name The name for the color space
         * @param wx The X-coordinate of the color space's white point
         * @param wy The Y-coordinate of the color space's white point
         * @param rx The X-coordinate of the red primary
         * @param ry The Y-coordinate of the red primary
         * @param gx The X-coordinate of the green primary
         * @param gy The Y-coordinate of the green primary
         * @param bx The X-coordinate of the blue primary
         * @param by The Y-coordinate of the blue primary
         * @param trc_red The red component of the TRC.
         * @param trc_green The green component of the TRC (can be %NULL if it's            the same as @trc_red).
         * @param trc_blue The blue component of the TRC (can be %NULL if it's            the same as @trc_red).
         * @param flags The #BablSpaceFlags
         */
        function space_from_chromaticities(
            name: string | null,
            wx: number,
            wy: number,
            rx: number,
            ry: number,
            gx: number,
            gy: number,
            bx: number,
            by: number,
            trc_red: Object,
            trc_green: Object | null,
            trc_blue: Object | null,
            flags: SpaceFlags | null,
        ): Object;
        /**
         * Create a babl space from an in memory ICC profile, the profile does no
         * longer need to be loaded for the space to work, multiple calls with the same
         * icc profile and same intent will result in the same babl space.
         *
         * On a profile that doesn't contain A2B0 and B2A0 CLUTs perceptual and
         * relative-colorimetric intents are treated the same.
         *
         * If a BablSpace cannot be created from the profile NULL is returned and a
         * static string is set on the const char *value pointed at with &value
         * containing a message describing why the provided data does not yield a babl
         * space.
         * @param icc_data pointer to icc profile in memory
         * @param icc_length length of icc profile in bytes
         * @param intent the intent from the ICC profile to use.
         */
        function space_from_icc(icc_data: string, icc_length: number, intent: IccIntent | null): [Object, string];
        /**
         * Creates a new RGB matrix color space definition using a precomputed D50
         * adapted 3x3 matrix and associated CIE XYZ whitepoint, as possibly read from
         * an ICC profile.
         * @param name The name for the color space
         * @param wx The X-coordinate of the color space's white point
         * @param wy The Y-coordinate of the color space's white point
         * @param wz The Z-coordinate of the color space's white point
         * @param rx The X-coordinate of the red primary
         * @param gx The X-coordinate of the green primary
         * @param bx The X-coordinate of the blue primary
         * @param ry The Y-coordinate of the red primary
         * @param gy The Y-coordinate of the green primary
         * @param by The Y-coordinate of the blue primary
         * @param rz The Z-coordinate of the red primary
         * @param gz The Z-coordinate of the green primary
         * @param bz The Z-coordinate of the blue primary
         * @param trc_red The red component of the TRC.
         * @param trc_green The green component of the TRC (can be %NULL if it's            the same as @trc_red).
         * @param trc_blue The blue component of the TRC (can be %NULL if it's            the same as @trc_red).
         */
        function space_from_rgbxyz_matrix(
            name: string | null,
            wx: number,
            wy: number,
            wz: number,
            rx: number,
            gx: number,
            bx: number,
            ry: number,
            gy: number,
            by: number,
            rz: number,
            gz: number,
            bz: number,
            trc_red: Object,
            trc_green?: Object | null,
            trc_blue?: Object | null,
        ): Object;
        /**
         * query the chromaticities of white point and primaries as well as trcs
         * used for r g a nd b, all arguments are optional (can be %NULL).
         * @param space A #Babl instance
         */
        function space_get(
            space: Object,
        ): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            Object | null,
            Object | null,
            Object | null,
        ];
        function space_get_gamma(space: Object): number;
        /**
         * Return pointer to ICC profile for space note that this is
         * the ICC profile for R'G'B', though in formats only supporting linear
         * like EXR GEGL chooses to load this lienar data as RGB and use the sRGB
         * TRC.
         * @param babl a #Babl
         * @returns pointer to ICC profile data.
         */
        function space_get_icc(babl: Object): [string, number];
        /**
         * Retrieve the relevant RGB luminance constants for a babl space.
         *
         * Note: these luminance coefficients should only ever be used on linear data.
         * If your input `space` is non-linear, you should convert your pixel values to
         * the linearized variant of `space` before making any computation with these
         * coefficients. See #83.
         * @param space a BablSpace
         */
        function space_get_rgb_luminance(space: Object): [number, number, number];
        function space_is_cmyk(space: Object): number;
        function space_is_gray(space: Object): number;
        function space_is_rgb(space: Object): number;
        /**
         * Creates a variant of an existing space with different trc.
         * @param space
         * @param trc
         */
        function space_with_trc(space: Object, trc: Object): Object;
        /**
         * Look up a TRC by name, "sRGB" and "linear" are recognized
         * strings in a stock babl configuration.
         * @param name
         */
        function trc(name: string): Object;
        /**
         * Creates a Babl TRC for a specific gamma value, it will be given
         * a name that is a short string representation of the value.
         * @param gamma
         */
        function trc_gamma(gamma: number): Object;
        /**
         * Returns the babl object representing the data type given by `name`
         * such as for example "u8", "u16" or "float".
         * @param name
         */
        function type(name: string): Object;
        interface FishProcess {
            (babl: Object, src: string, dst: string, n: number, data?: any | null): void;
        }
        interface FuncLinear {
            (conversion: Object, src: string, dst: string, n: number): void;
        }
        interface FuncPlanar {
            (
                conversion: Object,
                src_bands: number,
                src: string,
                src_pitch: number,
                dst_bands: number,
                dst: string,
                dst_pitch: number,
                n: number,
            ): void;
        }

        export namespace ModelFlag {
            export const $gtype: GObject.GType<ModelFlag>;
        }

        enum ModelFlag {
            /**
             * the model encodes alpha.
             */
            ALPHA,
            /**
             * the alpha is associated alpha.
             */
            ASSOCIATED,
            /**
             * the components are inverted (used for getting the additive complement space of CMYK).
             */
            INVERTED,
            /**
             * the data has no TRC, i.e. is linear
             */
            LINEAR,
            /**
             * the data has a TRC - the TRC from the configured space
             */
            NONLINEAR,
            /**
             * the data has a TRC - a perceptual TRC where 50% gray is 0.5
             */
            PERCEPTUAL,
            /**
             * this is a gray component model
             */
            GRAY,
            /**
             * this is an RGB based component model, the space associated is expected to contain an RGB matrix profile.
             */
            RGB,
            /**
             * this model is part of the CIE family of spaces
             */
            CIE,
            /**
             * the encodings described are CMYK encodings, the space associated is expected to contain an CMYK ICC profile.
             */
            CMYK,
        }
        /**
         * The babl API is based around polymorphism and almost everything is
         * a Babl object.
         */
        class Object {
            static $gtype: GObject.GType<Object>;

            // Constructors

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

    export default Babl;
}

declare module 'gi://Babl' {
    import Babl01 from 'gi://Babl?version=0.1';
    export default Babl01;
}
// END
