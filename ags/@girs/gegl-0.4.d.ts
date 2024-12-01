/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./babl-0.1.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Gegl?version=0.4' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Babl from 'gi://Babl?version=0.1';

    export namespace Gegl {
        /**
         * Gegl-0.4
         */

        export namespace AbyssPolicy {
            export const $gtype: GObject.GType<AbyssPolicy>;
        }

        enum AbyssPolicy {
            NONE,
            CLAMP,
            LOOP,
            BLACK,
            WHITE,
        }

        export namespace BablVariant {
            export const $gtype: GObject.GType<BablVariant>;
        }

        enum BablVariant {
            FLOAT,
            LINEAR,
            NON_LINEAR,
            PERCEPTUAL,
            LINEAR_PREMULTIPLIED,
            PERCEPTUAL_PREMULTIPLIED,
            LINEAR_PREMULTIPLIED_IF_ALPHA,
            PERCEPTUAL_PREMULTIPLIED_IF_ALPHA,
            ADD_ALPHA,
        }

        export namespace CachePolicy {
            export const $gtype: GObject.GType<CachePolicy>;
        }

        enum CachePolicy {
            AUTO,
            NEVER,
            ALWAYS,
        }

        export namespace DistanceMetric {
            export const $gtype: GObject.GType<DistanceMetric>;
        }

        enum DistanceMetric {
            EUCLIDEAN,
            MANHATTAN,
            CHEBYSHEV,
        }

        export namespace DitherMethod {
            export const $gtype: GObject.GType<DitherMethod>;
        }

        enum DitherMethod {
            NONE,
            FLOYD_STEINBERG,
            BAYER,
            RANDOM,
            RANDOM_COVARIANT,
            ADD,
            ADD_COVARIANT,
            XOR,
            XOR_COVARIANT,
            BLUE_NOISE,
            BLUE_NOISE_COVARIANT,
        }
        /**
         * Flags controlling the mapping strategy.
         */

        /**
         * Flags controlling the mapping strategy.
         */
        export namespace MapFlags {
            export const $gtype: GObject.GType<MapFlags>;
        }

        enum MapFlags {
            /**
             * Prevent further mapping from being registered.
             */
            MAP_EXCLUDE_UNMAPPED,
        }

        export namespace Orientation {
            export const $gtype: GObject.GType<Orientation>;
        }

        enum Orientation {
            HORIZONTAL,
            VERTICAL,
        }

        export namespace RectangleAlignment {
            export const $gtype: GObject.GType<RectangleAlignment>;
        }

        enum RectangleAlignment {
            SUBSET,
            SUPERSET,
            NEAREST,
        }
        /**
         * An enumerated type specifying resolution (density) units.  If resolution
         * units are unknown, X and Y resolution specify the pixel aspect ratio.
         */

        /**
         * An enumerated type specifying resolution (density) units.  If resolution
         * units are unknown, X and Y resolution specify the pixel aspect ratio.
         */
        export namespace ResolutionUnit {
            export const $gtype: GObject.GType<ResolutionUnit>;
        }

        enum ResolutionUnit {
            /**
             * Unknown or resolution not applicable.
             */
            NONE,
            /**
             * Dots or pixels per inch.
             */
            DPI,
            /**
             * Dots or pixels per metre.
             */
            DPM,
        }

        export namespace SamplerType {
            export const $gtype: GObject.GType<SamplerType>;
        }

        enum SamplerType {
            NEAREST,
            LINEAR,
            CUBIC,
            NOHALO,
            LOHALO,
        }

        export namespace SplitStrategy {
            export const $gtype: GObject.GType<SplitStrategy>;
        }

        enum SplitStrategy {
            AUTO,
            HORIZONTAL,
            VERTICAL,
        }

        export namespace TileCommand {
            export const $gtype: GObject.GType<TileCommand>;
        }

        enum TileCommand {
            EGL_TILE_IDLE,
            EGL_TILE_SET,
            EGL_TILE_GET,
            EGL_TILE_IS_CACHED,
            EGL_TILE_EXIST,
            EGL_TILE_VOID,
            EGL_TILE_FLUSH,
            EGL_TILE_REFETCH,
            EGL_TILE_REINIT,
            GEGL_TILE_LAST_0_4_8_COMMAND,
            EGL_TILE_COPY,
            EGL_TILE_LAST_COMMAND,
        }
        const AUTO_ROWSTRIDE: number;
        const CH_BACK_CENTER: number;
        const CH_BACK_LEFT: number;
        const CH_BACK_RIGHT: number;
        const CH_FRONT_CENTER: number;
        const CH_FRONT_LEFT: number;
        const CH_FRONT_LEFT_OF_CENTER: number;
        const CH_FRONT_RIGHT: number;
        const CH_FRONT_RIGHT_OF_CENTER: number;
        const CH_LAYOUT_2POINT1: number;
        const CH_LAYOUT_2_1: number;
        const CH_LAYOUT_2_2: number;
        const CH_LAYOUT_3POINT1: number;
        const CH_LAYOUT_4POINT0: number;
        const CH_LAYOUT_4POINT1: number;
        const CH_LAYOUT_5POINT0: number;
        const CH_LAYOUT_5POINT0_BACK: number;
        const CH_LAYOUT_5POINT1: number;
        const CH_LAYOUT_5POINT1_BACK: number;
        const CH_LAYOUT_6POINT0: number;
        const CH_LAYOUT_6POINT0_FRONT: number;
        const CH_LAYOUT_6POINT1: number;
        const CH_LAYOUT_6POINT1_BACK: number;
        const CH_LAYOUT_6POINT1_FRONT: number;
        const CH_LAYOUT_7POINT0: number;
        const CH_LAYOUT_7POINT0_FRONT: number;
        const CH_LAYOUT_7POINT1: number;
        const CH_LAYOUT_7POINT1_WIDE: number;
        const CH_LAYOUT_7POINT1_WIDE_BACK: number;
        const CH_LAYOUT_HEXADECAGONAL: number;
        const CH_LAYOUT_HEXAGONAL: number;
        const CH_LAYOUT_NATIVE: number;
        const CH_LAYOUT_OCTAGONAL: number;
        const CH_LAYOUT_QUAD: number;
        const CH_LAYOUT_STEREO: number;
        const CH_LAYOUT_STEREO_DOWNMIX: number;
        const CH_LAYOUT_SURROUND: number;
        const CH_LOW_FREQUENCY: number;
        const CH_LOW_FREQUENCY_2: number;
        const CH_SIDE_LEFT: number;
        const CH_SIDE_RIGHT: number;
        const CH_STEREO_LEFT: number;
        const CH_STEREO_RIGHT: number;
        const CH_SURROUND_DIRECT_LEFT: number;
        const CH_SURROUND_DIRECT_RIGHT: number;
        const CH_TOP_BACK_CENTER: number;
        const CH_TOP_BACK_LEFT: number;
        const CH_TOP_BACK_RIGHT: number;
        const CH_TOP_CENTER: number;
        const CH_TOP_FRONT_CENTER: number;
        const CH_TOP_FRONT_LEFT: number;
        const CH_TOP_FRONT_RIGHT: number;
        const CH_WIDE_LEFT: number;
        const CH_WIDE_RIGHT: number;
        const FLOAT_EPSILON: number;
        const LOOKUP_MAX_ENTRIES: number;
        const MAJOR_VERSION: number;
        const MAX_AUDIO_CHANNELS: number;
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        const PARAM_NO_VALIDATE: number;
        function babl_variant(format: Babl.Object, variant: BablVariant | null): Babl.Object;
        /**
         * Disable OpenCL
         */
        function cl_disable(): void;
        /**
         * Initialize and enable OpenCL, calling this function again
         * will re-enable OpenCL if it has been disabled.
         * @returns True if OpenCL was initialized
         */
        function cl_init(): boolean;
        /**
         * Check if OpenCL is enabled.
         * @returns True if OpenCL is initialized and enabled
         */
        function cl_is_accelerated(): boolean;
        /**
         * Returns a GeglConfig object with properties that can be manipulated to control
         * GEGLs behavior.
         * @returns a #GeglConfig
         */
        function config(): Config;
        /**
         * Create a node chain from an unparsed commandline string.
         * @param ops an argv style, NULL terminated array of arguments
         * @param op_start node to pass in as input of chain
         * @param op_end node to get processed data
         * @param time the time to use for interpolatino of keyframed values
         * @param rel_dim relative dimension to scale rel suffixed values by
         * @param path_root path in filesystem to use as relative root
         */
        function create_chain(
            ops: string,
            op_start: Node,
            op_end: Node,
            time: number,
            rel_dim: number,
            path_root: string,
        ): void;
        /**
         * Create a node chain from argv style list of op data.
         * @param ops an argv style, NULL terminated array of arguments
         * @param op_start node to pass in as input of chain
         * @param op_end node to get processed data
         * @param time the time to use for interpolatino of keyframed values
         * @param rel_dim relative dimension to scale rel suffixed values by
         * @param path_root path in filesystem to use as relative root
         */
        function create_chain_argv(
            ops: string,
            op_start: Node,
            op_end: Node,
            time: number,
            rel_dim: number,
            path_root: string,
        ): void;
        /**
         * Call this function when you're done using GEGL. It will clean up
         * caches and write/dump debug information if the correct debug flags
         * are set.
         */
        function exit(): void;
        /**
         * Returns a value sutable to pass to the GeglBuffer constructor
         * or any other property that expects a Babl format.
         * @param format_name A Babl format name, e.g. "RGBA float"
         * @returns the format pointer
         */
        function format(format_name: string): GObject.Value | null;
        function format_get_name(format: GObject.Value | any): string | null;
        /**
         * This function fetches the version of the GEGL library being used by
         * the running process.
         */
        function get_version(): [number, number, number];
        /**
         * Dump the bounds and format of each node in the graph to stdout.
         * @param node The final node of the graph
         */
        function graph_dump_outputs(node: Node): void;
        /**
         * Dump the region that will be rendered for each node to fulfill
         * the request.
         * @param node The final node of the graph
         * @param roi The request rectangle
         */
        function graph_dump_request(node: Node, roi: Rectangle): void;
        function has_operation(operation_type: string): boolean;
        /**
         * Call this function before using any other GEGL functions. It will
         * initialize everything needed to operate GEGL and parses some
         * standard command line options.  `argc` and `argv` are adjusted
         * accordingly so your own code will never see those standard
         * arguments.
         *
         * Note that there is an alternative way to initialize GEGL: if you
         * are calling g_option_context_parse() with the option group returned
         * by #gegl_get_option_group(), you don't have to call #gegl_init().
         * @param argv a pointer to the array of command line arguments.
         */
        function init(argv?: string[] | null): string[] | null;
        function is_main_thread(): boolean;
        function list_operations(): string[];
        /**
         * Load all gegl modules found in the given directory.
         * @param path the directory to load modules from
         */
        function load_module_directory(path: string): void;
        /**
         * Distributes the execution of a function across multiple threads,
         * by calling it with a different index on each thread.
         * @param max_n the maximal number of threads to use
         * @param func the function to call
         */
        function parallel_distribute(max_n: number, func: ParallelDistributeFunc): void;
        /**
         * Distributes the processing of a planar data-structure across
         * multiple threads, by calling the given function with different
         * sub-areas on different threads.
         * @param area the area to process
         * @param thread_cost the cost of using each additional thread, relative               to the cost of processing a single data element
         * @param split_strategy the strategy to use for dividing the area
         * @param func the function to call
         */
        function parallel_distribute_area(
            area: Rectangle,
            thread_cost: number,
            split_strategy: SplitStrategy | null,
            func: ParallelDistributeAreaFunc,
        ): void;
        /**
         * Distributes the processing of a linear data-structure across
         * multiple threads, by calling the given function with different
         * sub-ranges on different threads.
         * @param size the total size of the data
         * @param thread_cost the cost of using each additional thread, relative               to the cost of processing a single data element
         * @param func the function to call
         */
        function parallel_distribute_range(size: number, thread_cost: number, func: ParallelDistributeRangeFunc): void;
        /**
         * Creates a new #GParamSpec instance specifying a #GeglAudioFragment property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_audio_fragment(
            name: string,
            nick: string,
            blurb: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GParamSpec instance specifying a #GeglColor property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_color the default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_color(
            name: string,
            nick: string,
            blurb: string,
            default_color: Color,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GParamSpec instance specifying a #GeglColor property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_color_string the default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_color_from_string(
            name: string,
            nick: string,
            blurb: string,
            default_color_string: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Get the default color value of the param spec
         * @param self a #GeglColor #GParamSpec
         * @returns the default #GeglColor
         */
        function param_spec_color_get_default(self: GObject.ParamSpec): Color;
        /**
         * Creates a new #GParamSpec instance specifying a #GeglCurve property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_curve the default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_curve(
            name: string,
            nick: string,
            blurb: string,
            default_curve: Curve,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GeglParamSpecDouble instance.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param ui_minimum minimum value a user should be allowed to input
         * @param ui_maximum maximum value a user should be allowed to input
         * @param ui_gamma the gamma that should be used when adjusting the value
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_double(
            name: string,
            nick: string,
            blurb: string,
            minimum: number,
            maximum: number,
            default_value: number,
            ui_minimum: number,
            ui_maximum: number,
            ui_gamma: number,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GeglParamSpecEnum instance.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param enum_type the enum type to get valid values from
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_enum(
            name: string,
            nick: string,
            blurb: string,
            enum_type: GObject.GType,
            default_value: number,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GeglParamSpecFilePath instance.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param no_validate true if the string should be validated with g_utf8_validate
         * @param null_ok true if the string can be NULL
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_file_path(
            name: string,
            nick: string,
            blurb: string,
            no_validate: boolean,
            null_ok: boolean,
            default_value: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_format(
            name: string,
            nick: string,
            blurb: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string;
        /**
         * Creates a new #GeglParamSpecInt instance.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param ui_minimum minimum value a user should be allowed to input
         * @param ui_maximum maximum value a user should be allowed to input
         * @param ui_gamma the gamma that should be used when adjusting the value
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_int(
            name: string,
            nick: string,
            blurb: string,
            minimum: number,
            maximum: number,
            default_value: number,
            ui_minimum: number,
            ui_maximum: number,
            ui_gamma: number,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GParamSpec instance specifying a #GeglPath property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_path the default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_path(
            name: string,
            nick: string,
            blurb: string,
            default_path: Path,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GeglParamSpecSeed instance specifying an integer random seed.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_seed(
            name: string,
            nick: string,
            blurb: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void;
        /**
         * Creates a new #GeglParamSpecString instance.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param no_validate true if the string should be validated with g_utf8_validate
         * @param null_ok true if the string can be NULL
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_string(
            name: string,
            nick: string,
            blurb: string,
            no_validate: boolean,
            null_ok: boolean,
            default_value: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Creates a new #GeglParamSpecUri instance.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param no_validate true if the string should be validated with g_utf8_validate
         * @param null_ok true if the string can be NULL
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_uri(
            name: string,
            nick: string,
            blurb: string,
            no_validate: boolean,
            null_ok: boolean,
            default_value: string,
            flags: GObject.ParamFlags | null,
        ): GObject.ParamSpec;
        /**
         * Returns a GeglRectangle that represents an infininte plane.
         */
        function rectangle_infinite_plane(): Rectangle;
        /**
         * Resets the cumulative data gathered by the #GeglStats object returned
         * by #gegl_stats().
         */
        function reset_stats(): void;
        function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag | null): string;
        /**
         * Returns a GeglStats object with properties that can be read to monitor
         * GEGL statistics.
         * @returns a #GeglStats
         */
        function stats(): Stats;
        interface LookupFunction {
            (value: number, data?: any | null): number;
        }
        interface NodeFunction {
            (node: PathItem): void;
        }
        interface ParallelDistributeAreaFunc {
            (area: Rectangle): void;
        }
        interface ParallelDistributeFunc {
            (i: number, n: number): void;
        }
        interface ParallelDistributeRangeFunc {
            (offset: number, size: number): void;
        }
        interface SamplerGetFun {
            (
                self: Sampler,
                x: number,
                y: number,
                scale: BufferMatrix2,
                output: any | null,
                repeat_mode: AbyssPolicy,
            ): void;
        }
        interface TileCallback {
            (tile: Tile): void;
        }
        interface TileSourceCommand {
            (
                gegl_tile_source: TileSource,
                command: TileCommand,
                x: number,
                y: number,
                z: number,
                data?: any | null,
            ): any | null;
        }

        export namespace AccessMode {
            export const $gtype: GObject.GType<AccessMode>;
        }

        enum AccessMode {
            READ,
            WRITE,
            READWRITE,
        }

        export namespace BlitFlags {
            export const $gtype: GObject.GType<BlitFlags>;
        }

        enum BlitFlags {
            DEFAULT,
            CACHE,
            DIRTY,
        }

        export namespace PadType {
            export const $gtype: GObject.GType<PadType>;
        }

        enum PadType {
            OUTPUT,
            INPUT,
        }

        export namespace SerializeFlag {
            export const $gtype: GObject.GType<SerializeFlag>;
        }

        enum SerializeFlag {
            TRIM_DEFAULTS,
            VERSION,
            INDENT,
            BAKE_ANIM,
        }
        module AudioFragment {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                string: string;
            }
        }

        class AudioFragment extends GObject.Object {
            static $gtype: GObject.GType<AudioFragment>;

            // Properties

            get string(): string;
            set string(val: string);

            // Fields

            data: number[];

            // Constructors

            constructor(properties?: Partial<AudioFragment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                sample_rate: number,
                channels: number,
                channel_layout: number,
                max_samples: number,
            ): AudioFragment;

            // Methods

            get_channel_layout(): number;
            get_channels(): number;
            get_max_samples(): number;
            get_pos(): number;
            get_sample_count(): number;
            get_sample_rate(): number;
            set_channel_layout(channel_layout: number): void;
            set_channels(channels: number): void;
            set_max_samples(max_samples: number): void;
            set_pos(pos: number): void;
            set_sample_count(sample_count: number): void;
            set_sample_rate(sample_rate: number): void;
        }

        module Buffer {
            // Signal callback interfaces

            interface Changed {
                (object: Rectangle): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends TileHandler.ConstructorProps {
                abyss_height: number;
                abyssHeight: number;
                abyss_width: number;
                abyssWidth: number;
                abyss_x: number;
                abyssX: number;
                abyss_y: number;
                abyssY: number;
                backend: TileBackend;
                format: any;
                height: number;
                initialized: boolean;
                path: string;
                pixels: number;
                px_size: number;
                pxSize: number;
                shift_x: number;
                shiftX: number;
                shift_y: number;
                shiftY: number;
                tile_height: number;
                tileHeight: number;
                tile_width: number;
                tileWidth: number;
                width: number;
                x: number;
                y: number;
            }
        }

        class Buffer extends TileHandler {
            static $gtype: GObject.GType<Buffer>;

            // Properties

            get abyss_height(): number;
            get abyssHeight(): number;
            get abyss_width(): number;
            get abyssWidth(): number;
            get abyss_x(): number;
            get abyssX(): number;
            get abyss_y(): number;
            get abyssY(): number;
            get backend(): TileBackend;
            get format(): any;
            set format(val: any);
            get height(): number;
            set height(val: number);
            get initialized(): boolean;
            get path(): string;
            get pixels(): number;
            get px_size(): number;
            get pxSize(): number;
            get shift_x(): number;
            get shiftX(): number;
            get shift_y(): number;
            get shiftY(): number;
            get tile_height(): number;
            get tileHeight(): number;
            get tile_width(): number;
            get tileWidth(): number;
            get width(): number;
            set width(val: number);
            get x(): number;
            set x(val: number);
            get y(): number;
            set y(val: number);

            // Constructors

            constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](format_name: string, x: number, y: number, width: number, height: number): Buffer;

            static new_for_backend(extent: Rectangle, backend: TileBackend): Buffer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this, object: Rectangle) => void): number;
            connect_after(signal: 'changed', callback: (_source: this, object: Rectangle) => void): number;
            emit(signal: 'changed', object: Rectangle): void;

            // Static methods

            /**
             * Loads an existing GeglBuffer from disk, if it has previously been saved with
             * gegl_buffer_save it should be possible to open through any GIO transport, buffers
             * that have been used as swap needs random access to be opened.
             * @param path the path to a gegl buffer on disk.
             */
            static load(path: string): Buffer;
            /**
             * Open an existing on-disk GeglBuffer, this buffer is opened in a monitored
             * state so multiple instances of gegl can share the same buffer. Sets on
             * one buffer are reflected in the other.
             * @param path the path to a gegl buffer on disk.
             */
            static open(path: string): Buffer;
            /**
             * Generates a unique filename in the GEGL swap directory, suitable for
             * using as swap space.  When the file is no longer needed, it may be
             * removed with gegl_buffer_swap_remove_file(); otherwise, it will be
             * removed when gegl_exit() is called.
             * @param suffix a string to suffix the filename with, for          identification purposes, or %NULL.
             */
            static swap_create_file(suffix?: string | null): string | null;
            /**
             * Tests if `path` is a swap file, that is, if it has been created
             * with gegl_buffer_swap_create_file(), and hasn't been removed
             * yet.
             * @param path a filename
             */
            static swap_has_file(path: string): boolean;
            /**
             * Removes a swap file, generated using gegl_buffer_swap_create_file(),
             * unlinking the file, if exists.
             * @param path the swap file to remove, as returned by        gegl_buffer_swap_create_file()
             */
            static swap_remove_file(path: string): void;

            // Methods

            /**
             * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
             * @param handler a #GeglTileHandler
             */
            add_handler(handler?: any | null): void;
            /**
             * Clears the provided rectangular region by setting all the associated memory
             * to 0.
             * @param roi a rectangular region
             */
            clear(roi: Rectangle): void;
            /**
             * Copy a region from source buffer to destination buffer.
             *
             * If the babl_formats of the buffers are the same, and the tile boundaries
             * align, this will create copy-on-write tiles in the destination buffer.
             *
             * This function never does any scaling. When src_rect and dst_rect do not have
             * the same width and height, the size of src_rect is used.
             * @param src_rect source rectangle (or NULL to copy entire source buffer)
             * @param repeat_mode the abyss policy to be using if src_rect is outside src's extent.
             * @param dst destination buffer.
             * @param dst_rect position of upper left destination pixel (or NULL to match @src_rect)
             */
            copy(src_rect: Rectangle, repeat_mode: AbyssPolicy | null, dst: Buffer, dst_rect: Rectangle): void;
            /**
             * Create a new sub GeglBuffer, that is a view on a larger buffer.
             * @param extent coordinates of new buffer.
             * @returns the new sub buffer
             */
            create_sub_buffer(extent: Rectangle): Buffer;
            /**
             * Duplicate a buffer (internally uses gegl_buffer_copy). Aligned tiles
             * will create copy-on-write clones in the new buffer.
             * @returns the new buffer
             */
            dup(): Buffer;
            /**
             * Flushes all unsaved data to disk, this is not necessary for shared
             * geglbuffers opened with gegl_buffer_open since they auto-sync on writes.
             */
            flush(): void;
            /**
             * Invokes the external flush function, if any is set on the provided buffer -
             * this ensures that data pending - in the current implementation only OpenCL -
             * externally to be synchronized with the buffer. Multi threaded code should
             * call such a synchronization before branching out to avoid each of the
             * threads having an implicit synchronization of its own.
             * @param rect rectangle
             */
            flush_ext(rect: Rectangle): void;
            /**
             * Blocks emission of the "changed" signal for `buffer`.
             *
             * While the signal is blocked, changes to `buffer` are accumulated, and will
             * be emitted once the signal is unblocked, using gegl_buffer_thaw_changed().
             */
            freeze_changed(): void;
            /**
             * Return the abyss extent of a buffer, this expands out to the parents extent in
             * subbuffers.
             */
            get_abyss(): Rectangle;
            /**
             * Returns a pointer to a GeglRectangle structure defining the geometry of a
             * specific GeglBuffer, this is also the default width/height of buffers passed
             * in to gegl_buffer_set and gegl_buffer_get (with a scale of 1.0 at least).
             */
            get_extent(): Rectangle;
            /**
             * Fetch a rectangular linear buffer of pixel data from the GeglBuffer.
             * @param rect the coordinates we want to retrieve data from.
             * @param scale sampling scale, 1.0 = pixel for pixel 2.0 = magnify, 0.5 scale down.
             * @param format_name the format to store data in, if NULL the format of the buffer is used.
             * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
             * @returns A copy of the requested data
             */
            get(
                rect: Rectangle,
                scale: number,
                format_name: string | null,
                repeat_mode: AbyssPolicy | null,
            ): Uint8Array;
            /**
             * Store a linear raster buffer into the GeglBuffer.
             * @param rect the rectangle to write.
             * @param format_name the format of the input data.
             * @param src pixel data to write to @buffer.
             */
            set(rect: Rectangle, format_name: string, src: Uint8Array | string): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * This function makes sure GeglBuffer and underlying code is aware of changes
             * being made to the linear buffer. If the request was not a compatible one
             * it is written back to the buffer. Multiple concurrent users can be handed
             * the same buffer (both raw access and converted).
             * @param linear a previously returned buffer.
             */
            linear_close(linear?: any | null): void;
            /**
             * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
             * @param handler a #GeglTileHandler
             */
            remove_handler(handler?: any | null): void;
            /**
             * Clean up resources used by sampling framework of buffer.
             */
            sample_cleanup(): void;
            /**
             * Write a GeglBuffer to a file.
             * @param path the path where the gegl buffer will be saved, any writable GIO uri is valid.
             * @param roi the region of interest to write, this is the tiles that will be collected and written to disk.
             */
            save(path: string, roi: Rectangle): void;
            /**
             * Changes the size and position of the abyss rectangle of a buffer.
             *
             * Returns TRUE if the change of abyss was successful.
             * @param abyss new abyss.
             */
            set_abyss(abyss: Rectangle): boolean;
            /**
             * Sets the region covered by rect to the specified color.
             * @param rect a rectangular region to fill with a color.
             * @param color the GeglColor to fill with.
             */
            set_color(rect: Rectangle, color: Color): void;
            /**
             * Sets the region covered by rect to the the provided pixel.
             * @param rect a rectangular region to fill with a color.
             * @param pixel pointer to the data of a single pixel
             * @param pixel_format the babl format of the pixel, if missing - the soft format of dst.
             */
            set_color_from_pixel(rect: Rectangle, pixel: any | null, pixel_format: Babl.Object): void;
            /**
             * Changes the size and position that is considered active in a buffer, this
             * operation is valid on any buffer, reads on subbuffers outside the master
             * buffer's extent are at the moment undefined.
             *
             * Returns TRUE if the change of extent was successful.
             * @param extent new extent.
             */
            set_extent(extent: Rectangle): boolean;
            /**
             * Fill a region with a repeating pattern. Offsets parameters are
             * relative to the origin (0, 0) and not to the rectangle. So be carefull
             * about the origin of `pattern` and `buffer` extents.
             * @param rect the region of @buffer to fill
             * @param pattern a #GeglBuffer to be repeated as a pattern
             * @param x_offset where the pattern starts horizontally
             * @param y_offset where the pattern starts vertical
             */
            set_pattern(rect: Rectangle, pattern: Buffer, x_offset: number, y_offset: number): void;
            /**
             * Checks if a pair of buffers share the same underlying tile storage.
             *
             * Returns TRUE if `buffer1` and `buffer2` share the same storage.
             * @param buffer2 a #GeglBuffer.
             */
            share_storage(buffer2: Buffer): boolean;
            /**
             * This function should be used instead of g_signal_connect when connecting to
             * the GeglBuffer::changed signal handler, GeglBuffer contains additional
             * machinery to avoid the overhead of changes when no signal handler have been
             * connected, if regular g_signal_connect is used; then no signals will be
             * emitted.
             * @param detailed_signal only "changed" expected for now
             * @param c_handler c function callback
             * @returns an handle like g_signal_connect.
             */
            signal_connect(detailed_signal: string, c_handler: GObject.Callback): number;
            /**
             * Unblocks emission of the "changed" signal for `buffer`.
             *
             * Once all calls to gegl_buffer_freeze_changed() are matched by corresponding
             * calls to gegl_buffer_freeze_changed(), all accumulated changes are emitted.
             */
            thaw_changed(): void;
        }

        module Color {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                string: string;
            }
        }

        class Color extends GObject.Object {
            static $gtype: GObject.GType<Color>;

            // Properties

            get string(): string;
            set string(val: string);

            // Constructors

            constructor(properties?: Partial<Color.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](string: string): Color;

            // Methods

            /**
             * Creates a copy of `color`.
             * @returns A new copy of @color.
             */
            duplicate(): Color;
            get_bytes(format: Babl.Object): GLib.Bytes;
            /**
             * Retrieves the current set color stored as `space`.
             * If `space` is %NULL, this is equivalent to requesting color in the default
             * naive CMYK space.
             * @param space CMYK space.
             */
            get_cmyk(space?: Babl.Object | null): [number, number, number, number, number];
            /**
             * Get the component values of the color in `format`.
             * @param format A Babl pointer
             * @returns The color components If value format not supported return NULL and components_length set to 0.
             */
            get_components(format: GObject.Value | any): number[];
            get_format(): Babl.Object;
            /**
             * Retrieves the current set color stored as `space`.
             * If `space` is %NULL, this is equivalent to requesting color in the default
             * sRGB space.
             * @param space RGB space.
             */
            get_hsla(space?: Babl.Object | null): [number, number, number, number];
            /**
             * Retrieves the current set color stored as `space`.
             * If `space` is %NULL, this is equivalent to requesting color in the default
             * sRGB space.
             * @param space RGB space.
             */
            get_hsva(space?: Babl.Object | null): [number, number, number, number];
            /**
             * Retrieves the current set color as linear light non premultipled RGBA data,
             * any of the return pointers can be omitted.
             */
            get_rgba(): [number, number, number, number];
            /**
             * Retrieves the current set color stored as `space`.
             * If `space` is %NULL, this is equivalent to requesting color in sRGB.
             * @param space RGB space.
             */
            get_rgba_with_space(space: Babl.Object): [number, number, number, number];
            /**
             * Set a GeglColor from a pixel stored in a %GBytes and it's babl format.
             * @param format a babl pixel format
             * @param bytes color stored as @format
             */
            set_bytes(format: Babl.Object, bytes: GLib.Bytes | Uint8Array): void;
            /**
             * Set color as CMYK data stored as `space`. If `space` is %NULL, this is
             * equivalent to storing with the default naive CMYK space.
             * @param cyan cyan value
             * @param magenta magenta value
             * @param yellow yellow value
             * @param key key value
             * @param alpha alpha value
             * @param space CMYK space.
             */
            set_cmyk(
                cyan: number,
                magenta: number,
                yellow: number,
                key: number,
                alpha: number,
                space?: Babl.Object | null,
            ): void;
            /**
             * Set the color using the component values as `format`.
             * @param format A Babl pointer
             * @param components The color components.
             */
            set_components(format: GObject.Value | any, components: number[]): void;
            /**
             * Set color as HSLA data stored as `space`. If `space` is %NULL, this is
             * equivalent to storing with the default sRGB space.
             * @param hue hue value.
             * @param saturation saturation value.
             * @param lightness lightness value.
             * @param alpha alpha value.
             * @param space RGB space.
             */
            set_hsla(
                hue: number,
                saturation: number,
                lightness: number,
                alpha: number,
                space?: Babl.Object | null,
            ): void;
            /**
             * Set color as HSVA data stored as `space`. If `space` is %NULL, this is
             * equivalent to storing with the default sRGB space.
             * @param hue hue value.
             * @param saturation saturation value.
             * @param value value value.
             * @param alpha alpha value.
             * @param space RGB space.
             */
            set_hsva(hue: number, saturation: number, value: number, alpha: number, space?: Babl.Object | null): void;
            /**
             * Set color as linear light non premultipled RGBA data
             * @param red red value
             * @param green green value
             * @param blue blue value
             * @param alpha alpha value
             */
            set_rgba(red: number, green: number, blue: number, alpha: number): void;
            /**
             * Set color as RGBA data stored as `space`. If `space` is %NULL, this is
             * equivalent to storing as sRGB.
             * @param red red value
             * @param green green value
             * @param blue blue value
             * @param alpha alpha value
             * @param space RGB space.
             */
            set_rgba_with_space(red: number, green: number, blue: number, alpha: number, space: Babl.Object): void;
        }

        module Config {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                application_license: string;
                applicationLicense: string;
                chunk_size: number;
                chunkSize: number;
                mipmap_rendering: boolean;
                mipmapRendering: boolean;
                quality: number;
                queue_size: number;
                queueSize: number;
                swap: string;
                swap_compression: string;
                swapCompression: string;
                threads: number;
                tile_cache_size: number;
                tileCacheSize: number;
                tile_height: number;
                tileHeight: number;
                tile_width: number;
                tileWidth: number;
                use_opencl: boolean;
                useOpencl: boolean;
            }
        }

        class Config extends GObject.Object {
            static $gtype: GObject.GType<Config>;

            // Properties

            get application_license(): string;
            set application_license(val: string);
            get applicationLicense(): string;
            set applicationLicense(val: string);
            get chunk_size(): number;
            set chunk_size(val: number);
            get chunkSize(): number;
            set chunkSize(val: number);
            get mipmap_rendering(): boolean;
            set mipmap_rendering(val: boolean);
            get mipmapRendering(): boolean;
            set mipmapRendering(val: boolean);
            get quality(): number;
            set quality(val: number);
            get queue_size(): number;
            set queue_size(val: number);
            get queueSize(): number;
            set queueSize(val: number);
            get swap(): string;
            set swap(val: string);
            get swap_compression(): string;
            set swap_compression(val: string);
            get swapCompression(): string;
            set swapCompression(val: string);
            get threads(): number;
            set threads(val: number);
            get tile_cache_size(): number;
            set tile_cache_size(val: number);
            get tileCacheSize(): number;
            set tileCacheSize(val: number);
            get tile_height(): number;
            set tile_height(val: number);
            get tileHeight(): number;
            set tileHeight(val: number);
            get tile_width(): number;
            set tile_width(val: number);
            get tileWidth(): number;
            set tileWidth(val: number);
            get use_opencl(): boolean;
            set use_opencl(val: boolean);
            get useOpencl(): boolean;
            set useOpencl(val: boolean);

            // Constructors

            constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module Curve {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Curve extends GObject.Object {
            static $gtype: GObject.GType<Curve>;

            // Constructors

            constructor(properties?: Partial<Curve.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](y_min: number, y_max: number): Curve;

            static new_default(): Curve;

            // Methods

            /**
             * Add a point to the curve at `x` `y` (replacing the value exactly for `x` if it
             * already exists.
             * @param x x coordinate
             * @param y y coordinate
             */
            add_point(x: number, y: number): number;
            /**
             * Retrieve the number of points in the curve.
             *
             * Returns the number of points for the coordinates in the curve.
             * @param x
             */
            calc_value(x: number): number;
            /**
             * Create a copy of `curve`.
             * @returns A new copy of @curve.
             */
            duplicate(): Curve;
            /**
             * Retrive the coordinates for an index.
             * @param index the position of the value number to retrieve.
             */
            get_point(index: number): [number, number];
            /**
             * Get the bounds on the values of the curve and store the values in
             * the return locaitons provided in `min_y` and `max_y`.
             */
            get_y_bounds(): [number, number];
            /**
             * Retrieve the number of points in the curve.
             *
             * Returns the number of points for the coordinates in the curve.
             */
            num_points(): number;
            /**
             * Replace an existing point in a curve.
             * @param index the position of the value number to retrieve.
             * @param x x coordinate
             * @param y y coordinate
             */
            set_point(index: number, x: number, y: number): void;
        }

        module MetadataHash {
            // Constructor properties interface

            interface ConstructorProps extends MetadataStore.ConstructorProps, Metadata.ConstructorProps {}
        }

        class MetadataHash extends MetadataStore implements Metadata {
            static $gtype: GObject.GType<MetadataHash>;

            // Constructors

            constructor(properties?: Partial<MetadataHash.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MetadataHash;

            // Inherited methods
            /**
             * Retrieve resolution from the application image metadata.  Intended for use
             * by the image file writer.  If resolution is not supported by the application
             * or if the operation fails %FALSE is returned and the resolution values are
             * not updated.
             * @param unit #GeglResolutionUnit return location
             * @param x X resolution return location
             * @param y Y resolution return location
             * @returns %TRUE if successful.
             */
            get_resolution(unit: ResolutionUnit | null, x: number, y: number): boolean;
            /**
             * Retrieve image file metadata from the application.  Intended for use by the
             * image file writer. If the operation fails it returns %FALSE and `value` is
             * not updated.
             * @param iter #GeglMetadataIter referencing the value to get
             * @param value Value to set in the interface
             * @returns %TRUE if successful.
             */
            iter_get_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Initialise an iterator to find all supported metadata keys.
             * @param iter #GeglMetadataIter to be initialised
             */
            iter_init(iter: MetadataIter): void;
            /**
             * Look up the specified key and initialise an iterator to reference the
             * associated metadata. The iterator is used in conjunction with
             * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
             * iterator is not valid for gegl_metadata_iter_next().
             * @param iter #GeglMetadataIter to be initialised
             * @param key Name of the value look up
             * @returns %TRUE if key is found.
             */
            iter_lookup(iter: MetadataIter, key: string): boolean;
            /**
             * Move the iterator to the next metadata item
             * @param iter #GeglMetadataIter to be updated
             * @returns key name if found, else %NULL
             */
            iter_next(iter: MetadataIter): string;
            /**
             * Set application data retrieved from image file's metadata.  Intended for use
             * by the image file reader.  If the operation fails it returns %FALSE and
             * `value` is ignored.
             * @param iter #GeglMetadataIter referencing the value to set
             * @param value Value to set in the interface
             * @returns %TRUE if successful.
             */
            iter_set_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Set the name of the file module and pass an array of mappings from
             * file-format specific metadata names to those used by Gegl. A GValue
             * transformation function may be supplied, e.g. to parse or format timestamps.
             * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
             * @param flags Flags specifying capabilities of underlying file format
             * @param map Array of mappings from file module metadata              names to Gegl well-known names.
             */
            register_map(file_module: string, flags: number, map: MetadataMap[]): void;
            /**
             * Set resolution retrieved from image file's metadata.  Intended for use by
             * the image file reader.  If resolution is not supported by the application or
             * if the operation fails %FALSE is returned and the values are ignored.
             * @param unit Specify #GeglResolutionUnit
             * @param x X resolution
             * @param y Y resolution
             * @returns %TRUE if successful.
             */
            set_resolution(unit: ResolutionUnit | null, x: number, y: number): boolean;
            /**
             * Unregister the file module mappings and any further mappings added or
             * modified by the application.  This should be called after the file module
             * completes operations.
             */
            unregister_map(): void;
            /**
             * Retrieve resolution from the application image metadata.  Intended for use
             * by the image file writer.  If resolution is not supported by the application
             * or if the operation fails %FALSE is returned and the resolution values are
             * not updated.
             * @param unit #GeglResolutionUnit return location
             * @param x X resolution return location
             * @param y Y resolution return location
             */
            vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
            /**
             * Retrieve image file metadata from the application.  Intended for use by the
             * image file writer. If the operation fails it returns %FALSE and `value` is
             * not updated.
             * @param iter #GeglMetadataIter referencing the value to get
             * @param value Value to set in the interface
             */
            vfunc_iter_get_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Initialise an iterator to find all supported metadata keys.
             * @param iter #GeglMetadataIter to be initialised
             */
            vfunc_iter_init(iter: MetadataIter): void;
            /**
             * Look up the specified key and initialise an iterator to reference the
             * associated metadata. The iterator is used in conjunction with
             * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
             * iterator is not valid for gegl_metadata_iter_next().
             * @param iter #GeglMetadataIter to be initialised
             * @param key Name of the value look up
             */
            vfunc_iter_lookup(iter: MetadataIter, key: string): boolean;
            /**
             * Move the iterator to the next metadata item
             * @param iter #GeglMetadataIter to be updated
             */
            vfunc_iter_next(iter: MetadataIter): string;
            /**
             * Set application data retrieved from image file's metadata.  Intended for use
             * by the image file reader.  If the operation fails it returns %FALSE and
             * `value` is ignored.
             * @param iter #GeglMetadataIter referencing the value to set
             * @param value Value to set in the interface
             */
            vfunc_iter_set_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Set the name of the file module and pass an array of mappings from
             * file-format specific metadata names to those used by Gegl. A GValue
             * transformation function may be supplied, e.g. to parse or format timestamps.
             * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
             * @param flags Flags specifying capabilities of underlying file format
             * @param map Array of mappings from file module metadata              names to Gegl well-known names.
             */
            vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void;
            /**
             * Set resolution retrieved from image file's metadata.  Intended for use by
             * the image file reader.  If resolution is not supported by the application or
             * if the operation fails %FALSE is returned and the values are ignored.
             * @param unit Specify #GeglResolutionUnit
             * @param x X resolution
             * @param y Y resolution
             */
            vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            // Conflicted with Gegl.MetadataStore.notify
            notify(...args: never[]): any;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module MetadataStore {
            // Signal callback interfaces

            interface Changed {
                (pspec: GObject.ParamSpec): void;
            }

            interface GenerateValue {
                (pspec: GObject.ParamSpec, value: GObject.Value | any): boolean;
            }

            interface Mapped {
                (file_module: string, exclude_unmapped: boolean): void;
            }

            interface ParseValue {
                (pspec: GObject.ParamSpec, value: GObject.Value | any): boolean;
            }

            interface Unmapped {
                (file_module: string, local_name: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Metadata.ConstructorProps {
                artist: string;
                comment: string;
                copyright: string;
                description: string;
                disclaimer: string;
                file_module_name: string;
                fileModuleName: string;
                resolution_unit: ResolutionUnit;
                resolutionUnit: ResolutionUnit;
                resolution_x: number;
                resolutionX: number;
                resolution_y: number;
                resolutionY: number;
                software: string;
                source: string;
                timestamp: GLib.DateTime;
                title: string;
                warning: string;
            }
        }

        abstract class MetadataStore extends GObject.Object implements Metadata {
            static $gtype: GObject.GType<MetadataStore>;

            // Properties

            /**
             * Name of image creator.
             */
            get artist(): string;
            set artist(val: string);
            /**
             * Miscellaneous comment; conversion from GIF comment.
             */
            get comment(): string;
            set comment(val: string);
            /**
             * Copyright notice.
             */
            get copyright(): string;
            set copyright(val: string);
            /**
             * Description of image (possibly long).
             */
            get description(): string;
            set description(val: string);
            /**
             * Legal disclaimer.
             */
            get disclaimer(): string;
            set disclaimer(val: string);
            /**
             * Current file loader/saver module name. Valid only while a #GeglMetadata
             * mapping is registered. This property is mainly provided for use in signal
             * handlers.
             */
            get file_module_name(): string;
            /**
             * Current file loader/saver module name. Valid only while a #GeglMetadata
             * mapping is registered. This property is mainly provided for use in signal
             * handlers.
             */
            get fileModuleName(): string;
            /**
             * A #GeglResolutionUnit specifying units for the image resolution (density).
             */
            get resolution_unit(): ResolutionUnit;
            set resolution_unit(val: ResolutionUnit);
            /**
             * A #GeglResolutionUnit specifying units for the image resolution (density).
             */
            get resolutionUnit(): ResolutionUnit;
            set resolutionUnit(val: ResolutionUnit);
            /**
             * X resolution or density in dots per unit.
             */
            get resolution_x(): number;
            set resolution_x(val: number);
            /**
             * X resolution or density in dots per unit.
             */
            get resolutionX(): number;
            set resolutionX(val: number);
            /**
             * Y resolution or density in dots per unit.
             */
            get resolution_y(): number;
            set resolution_y(val: number);
            /**
             * Y resolution or density in dots per unit.
             */
            get resolutionY(): number;
            set resolutionY(val: number);
            /**
             * Software used to create the image.
             */
            get software(): string;
            set software(val: string);
            /**
             * Device used to create the image.
             */
            get source(): string;
            set source(val: string);
            /**
             * Time of original image creation.
             */
            get timestamp(): GLib.DateTime;
            set timestamp(val: GLib.DateTime);
            /**
             * Short (one line) title or caption for image.
             */
            get title(): string;
            set title(val: string);
            /**
             * Warning of nature of content.
             */
            get warning(): string;
            set warning(val: string);

            // Constructors

            constructor(properties?: Partial<MetadataStore.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this, pspec: GObject.ParamSpec) => void): number;
            connect_after(signal: 'changed', callback: (_source: this, pspec: GObject.ParamSpec) => void): number;
            emit(signal: 'changed', pspec: GObject.ParamSpec): void;
            connect(
                signal: 'generate-value',
                callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean,
            ): number;
            connect_after(
                signal: 'generate-value',
                callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean,
            ): number;
            emit(signal: 'generate-value', pspec: GObject.ParamSpec, value: GObject.Value | any): void;
            connect(
                signal: 'mapped',
                callback: (_source: this, file_module: string, exclude_unmapped: boolean) => void,
            ): number;
            connect_after(
                signal: 'mapped',
                callback: (_source: this, file_module: string, exclude_unmapped: boolean) => void,
            ): number;
            emit(signal: 'mapped', file_module: string, exclude_unmapped: boolean): void;
            connect(
                signal: 'parse-value',
                callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean,
            ): number;
            connect_after(
                signal: 'parse-value',
                callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean,
            ): number;
            emit(signal: 'parse-value', pspec: GObject.ParamSpec, value: GObject.Value | any): void;
            connect(
                signal: 'unmapped',
                callback: (_source: this, file_module: string, local_name: string) => void,
            ): number;
            connect_after(
                signal: 'unmapped',
                callback: (_source: this, file_module: string, local_name: string) => void,
            ): number;
            emit(signal: 'unmapped', file_module: string, local_name: string): void;

            // Virtual methods

            /**
             * The _declare virtual method creates a metadata variable in the
             * underlying data store. It implements gegl_metadata_store_declare(). A
             * #GParamSpec is used to describe the variable.  If the metadata shadows an
             * object property, shadow should be %TRUE, otherwise %FALSE.  It is acceptable
             * for a subclass to provide additional variables which are implicitly
             * declared, that is, they need not be declared using
             * gegl_metadata_store_declare(), however the `pspec` method must still retrieve
             * a #GParamSpec describing such variables.  This method MUST be provided by
             * the subclass.
             * @param pspec
             * @param shadow
             */
            vfunc__declare(pspec: GObject.ParamSpec, shadow: boolean): void;
            /**
             * Return a pointer to a #GValue with the value of the metadata
             * variable or %NULL if not declared or the variable does not contain a valid
             * value.  Implements gegl_metadata_store_get_value().  This method MUST be
             * provided by the subclass.
             * @param name
             */
            vfunc__get_value(name: string): unknown;
            /**
             * Test whether the #GeglMetadataStore contains a value for the specified name.
             * @param name Metadata name
             */
            vfunc_has_value(name: string): boolean;
            /**
             * This method is called after a file loader or saver registers
             * a #GeglMetadataMap and before any further processing takes place.  It is
             * intended to allow an application to create further application-specific
             * mappings using gegl_metadata_store_register().  #GeglMetadataStore provides
             * a default method which emits the `::mapped` signal.
             * @param file_module_name
             * @param flags
             */
            vfunc_register_hook(file_module_name: string, flags: number): void;
            /**
             * Set the specified metadata value. If `value` is %NULL the default value from
             * the associated #GParamSpec is used. This operation will fail if the value
             * has not been previously declared.  A `changed::name` signal is emitted when
             * the value is set. If the value is shadowed by a property a `notify::name`
             * signal is also emitted.
             * @param name Metadata name
             * @param value (nullable): A valid #GValue or %NULL
             */
            vfunc_set_value(name: string, value: GObject.Value | any): void;

            // Methods

            /**
             * Declare a metadata value using a #GParamSpec.
             * @param pspec A #GParamSpec
             */
            declare(pspec: GObject.ParamSpec): void;
            /**
             * Get name of image creator.
             * @returns Artist or %NULL if not set
             */
            get_artist(): string;
            /**
             * Get the comment.
             * @returns Comment or %NULL if not set
             */
            get_comment(): string;
            /**
             * Get the copyright notice.
             * @returns Copyright or %NULL if not set
             */
            get_copyright(): string;
            /**
             * Get description of image.
             * @returns Description or %NULL if not set
             */
            get_description(): string;
            /**
             * Get the legal disclaimer.
             * @returns Disclaimer or %NULL if not set
             */
            get_disclaimer(): string;
            /**
             * Return the name registered by the current file module.
             * @returns Current file module name or %NULL.
             */
            get_file_module_name(): string;
            /**
             * Get the units used for resolution.
             * @returns a #GeglResolutionUnit.
             */
            get_resolution_unit(): ResolutionUnit;
            /**
             * Get the X resolution or density in dots per unit.
             * @returns X resolution
             */
            get_resolution_x(): number;
            /**
             * Get the Y resolution or density in dots per unit.
             * @returns Y resolution
             */
            get_resolution_y(): number;
            /**
             * Get software used to create the image.
             * @returns Software or %NULL if not set
             */
            get_software(): string;
            /**
             * Get device used to create the image.
             * @returns source or %NULL if not set
             */
            get_source(): string;
            /**
             * A slightly more efficient version of gegl_metadata_store_get_value()
             * for string values avoiding a duplication. Otherwise it behaves the same
             * gegl_metadata_store_get_value().
             * @param name Metadata name
             * @returns String or %NULL.
             */
            get_string(name: string): string;
            /**
             * Get time of original image creation.
             * @returns #GDateTime or %NULL if not set. Free with                           g_date_time_unref() when done.
             */
            get_timestamp(): GLib.DateTime;
            /**
             * Get title or caption for image.
             * @returns Title or %NULL if not set
             */
            get_title(): string;
            /**
             * Retrieve the metadata value. `value` must be initialised with a compatible
             * type. If the value is unset or has not been previously declared `value` is
             * unchanged and an error message is logged.
             * @param name Metadata name
             * @param value An initialised #GValue.
             */
            get_value(name: string, value: GObject.Value | any): unknown;
            /**
             * Get warning.
             * @returns Warning or %NULL if not set
             */
            get_warning(): string;
            /**
             * Test whether the #GeglMetadataStore contains a value for the specified name.
             * @param name Metadata name
             * @returns %TRUE if metadata is declared and contains a valid value.
             */
            has_value(name: string): boolean;
            /**
             * gegl_metadata_store_notify() is called by subclasses when the value of a
             * metadata variable changes. It emits the `::changed` signal with the variable
             * name as the detail parameter.  Set `shadow` = %TRUE if variable is shadowed
             * by a property so that a notify signal is emitted with the property name as
             * the detail parameter.
             * @param pspec The #GParamSpec used to declare the variable.
             * @param shadow The metadata variable shadows a property.
             */
            notify(pspec: GObject.ParamSpec, shadow: boolean): void;
            // Conflicted with GObject.Object.notify
            notify(...args: never[]): any;
            register(local_name: string, name: string, transform: GObject.ValueTransform): void;
            /**
             * Set name of image creator.
             * @param artist Artist string
             */
            set_artist(artist: string): void;
            /**
             * Set the miscellaneous comment; conversion from GIF comment.
             * @param comment Comment string
             */
            set_comment(comment: string): void;
            /**
             * Set the copyright notice.
             * @param copyright Copyright string
             */
            set_copyright(copyright: string): void;
            /**
             * Set description of image.
             * @param description Description string
             */
            set_description(description: string): void;
            /**
             * Set the legal disclaimer.
             * @param disclaimer Disclaimer string
             */
            set_disclaimer(disclaimer: string): void;
            /**
             * Set the units used for the resolution (density) values.
             * @param unit Units as a #GeglResolutionUnit
             */
            set_resolution_unit(unit: ResolutionUnit | null): void;
            /**
             * Set the X resolution or density in dots per unit.
             * @param resolution_x X resolution or density
             */
            set_resolution_x(resolution_x: number): void;
            /**
             * Set the Y resolution or density in dots per unit.
             * @param resolution_y Y resolution or density
             */
            set_resolution_y(resolution_y: number): void;
            /**
             * Set software used to create the image.
             * @param software Software string
             */
            set_software(software: string): void;
            /**
             * Set device used to create the image.
             * @param source Source string
             */
            set_source(source: string): void;
            /**
             * A slightly more efficient version of gegl_metadata_store_set_value()
             * for string values avoiding a duplication. Otherwise it behaves the same
             * gegl_metadata_store_set_value().
             * @param name Metadata name
             * @param string String value to set
             */
            set_string(name: string, string: string): void;
            /**
             * Set time of original image creation.
             * @param timestamp A #GDateTime
             */
            set_timestamp(timestamp: GLib.DateTime): void;
            /**
             * Set title or caption for image.
             * @param title Title string
             */
            set_title(title: string): void;
            /**
             * Set the specified metadata value. If `value` is %NULL the default value from
             * the associated #GParamSpec is used. This operation will fail if the value
             * has not been previously declared.  A `changed::name` signal is emitted when
             * the value is set. If the value is shadowed by a property a `notify::name`
             * signal is also emitted.
             * @param name Metadata name
             * @param value (nullable): A valid #GValue or %NULL
             */
            set_value(name: string, value: GObject.Value | any): void;
            /**
             * Set the warning of nature of content.
             * @param warning Warning string
             */
            set_warning(warning: string): void;
            /**
             * Get the declared type of the value in the #GeglMetadataStore.
             * @param name Metadata name
             * @returns Declared #GType of metadata value or %G_TYPE_INVALID.
             */
            typeof_value(name: string): GObject.GType;

            // Inherited methods
            /**
             * Retrieve resolution from the application image metadata.  Intended for use
             * by the image file writer.  If resolution is not supported by the application
             * or if the operation fails %FALSE is returned and the resolution values are
             * not updated.
             * @param unit #GeglResolutionUnit return location
             * @param x X resolution return location
             * @param y Y resolution return location
             * @returns %TRUE if successful.
             */
            get_resolution(unit: ResolutionUnit | null, x: number, y: number): boolean;
            /**
             * Retrieve image file metadata from the application.  Intended for use by the
             * image file writer. If the operation fails it returns %FALSE and `value` is
             * not updated.
             * @param iter #GeglMetadataIter referencing the value to get
             * @param value Value to set in the interface
             * @returns %TRUE if successful.
             */
            iter_get_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Initialise an iterator to find all supported metadata keys.
             * @param iter #GeglMetadataIter to be initialised
             */
            iter_init(iter: MetadataIter): void;
            /**
             * Look up the specified key and initialise an iterator to reference the
             * associated metadata. The iterator is used in conjunction with
             * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
             * iterator is not valid for gegl_metadata_iter_next().
             * @param iter #GeglMetadataIter to be initialised
             * @param key Name of the value look up
             * @returns %TRUE if key is found.
             */
            iter_lookup(iter: MetadataIter, key: string): boolean;
            /**
             * Move the iterator to the next metadata item
             * @param iter #GeglMetadataIter to be updated
             * @returns key name if found, else %NULL
             */
            iter_next(iter: MetadataIter): string;
            /**
             * Set application data retrieved from image file's metadata.  Intended for use
             * by the image file reader.  If the operation fails it returns %FALSE and
             * `value` is ignored.
             * @param iter #GeglMetadataIter referencing the value to set
             * @param value Value to set in the interface
             * @returns %TRUE if successful.
             */
            iter_set_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Set the name of the file module and pass an array of mappings from
             * file-format specific metadata names to those used by Gegl. A GValue
             * transformation function may be supplied, e.g. to parse or format timestamps.
             * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
             * @param flags Flags specifying capabilities of underlying file format
             * @param map Array of mappings from file module metadata              names to Gegl well-known names.
             */
            register_map(file_module: string, flags: number, map: MetadataMap[]): void;
            /**
             * Set resolution retrieved from image file's metadata.  Intended for use by
             * the image file reader.  If resolution is not supported by the application or
             * if the operation fails %FALSE is returned and the values are ignored.
             * @param unit Specify #GeglResolutionUnit
             * @param x X resolution
             * @param y Y resolution
             * @returns %TRUE if successful.
             */
            set_resolution(unit: ResolutionUnit | null, x: number, y: number): boolean;
            /**
             * Unregister the file module mappings and any further mappings added or
             * modified by the application.  This should be called after the file module
             * completes operations.
             */
            unregister_map(): void;
            /**
             * Retrieve resolution from the application image metadata.  Intended for use
             * by the image file writer.  If resolution is not supported by the application
             * or if the operation fails %FALSE is returned and the resolution values are
             * not updated.
             * @param unit #GeglResolutionUnit return location
             * @param x X resolution return location
             * @param y Y resolution return location
             */
            vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
            /**
             * Retrieve image file metadata from the application.  Intended for use by the
             * image file writer. If the operation fails it returns %FALSE and `value` is
             * not updated.
             * @param iter #GeglMetadataIter referencing the value to get
             * @param value Value to set in the interface
             */
            vfunc_iter_get_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Initialise an iterator to find all supported metadata keys.
             * @param iter #GeglMetadataIter to be initialised
             */
            vfunc_iter_init(iter: MetadataIter): void;
            /**
             * Look up the specified key and initialise an iterator to reference the
             * associated metadata. The iterator is used in conjunction with
             * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
             * iterator is not valid for gegl_metadata_iter_next().
             * @param iter #GeglMetadataIter to be initialised
             * @param key Name of the value look up
             */
            vfunc_iter_lookup(iter: MetadataIter, key: string): boolean;
            /**
             * Move the iterator to the next metadata item
             * @param iter #GeglMetadataIter to be updated
             */
            vfunc_iter_next(iter: MetadataIter): string;
            /**
             * Set application data retrieved from image file's metadata.  Intended for use
             * by the image file reader.  If the operation fails it returns %FALSE and
             * `value` is ignored.
             * @param iter #GeglMetadataIter referencing the value to set
             * @param value Value to set in the interface
             */
            vfunc_iter_set_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Set the name of the file module and pass an array of mappings from
             * file-format specific metadata names to those used by Gegl. A GValue
             * transformation function may be supplied, e.g. to parse or format timestamps.
             * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
             * @param flags Flags specifying capabilities of underlying file format
             * @param map Array of mappings from file module metadata              names to Gegl well-known names.
             */
            vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void;
            /**
             * Set resolution retrieved from image file's metadata.  Intended for use by
             * the image file reader.  If resolution is not supported by the application or
             * if the operation fails %FALSE is returned and the values are ignored.
             * @param unit Specify #GeglResolutionUnit
             * @param x X resolution
             * @param y Y resolution
             */
            vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module Node {
            // Signal callback interfaces

            interface Computed {
                (object: Rectangle): void;
            }

            interface Invalidated {
                (object: Rectangle): void;
            }

            interface Progress {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cache_policy: CachePolicy;
                cachePolicy: CachePolicy;
                dont_cache: boolean;
                dontCache: boolean;
                gegl_operation: Operation;
                geglOperation: Operation;
                name: string;
                operation: string;
                passthrough: boolean;
                use_opencl: boolean;
                useOpencl: boolean;
            }
        }

        class Node extends GObject.Object {
            static $gtype: GObject.GType<Node>;

            // Properties

            get cache_policy(): CachePolicy;
            set cache_policy(val: CachePolicy);
            get cachePolicy(): CachePolicy;
            set cachePolicy(val: CachePolicy);
            get dont_cache(): boolean;
            set dont_cache(val: boolean);
            get dontCache(): boolean;
            set dontCache(val: boolean);
            get gegl_operation(): Operation;
            set gegl_operation(val: Operation);
            get geglOperation(): Operation;
            set geglOperation(val: Operation);
            get name(): string;
            set name(val: string);
            get operation(): string;
            set operation(val: string);
            get passthrough(): boolean;
            set passthrough(val: boolean);
            get use_opencl(): boolean;
            set use_opencl(val: boolean);
            get useOpencl(): boolean;
            set useOpencl(val: boolean);

            // Constructors

            constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Node;

            static new_from_file(path: string): Node;

            static new_from_serialized(chaindata: string, path_root: string): Node;

            static new_from_xml(xmldata: string, path_root: string): Node;

            // Signals

            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect_after(signal: 'computed', callback: (_source: this, object: Rectangle) => void): number;
            emit(signal: 'computed', object: Rectangle): void;
            connect_after(signal: 'invalidated', callback: (_source: this, object: Rectangle) => void): number;
            emit(signal: 'invalidated', object: Rectangle): void;
            connect_after(signal: 'progress', callback: (_source: this, object: number) => void): number;
            emit(signal: 'progress', object: number): void;

            // Methods

            /**
             * Make the GeglNode `graph,` take a reference on child. This reference
             * will be dropped when the reference count on the graph reaches zero.
             * @param child a GeglNode.
             * @returns the child.
             */
            add_child(child: Node): Node;
            /**
             * Render a rectangular region from a node to the given buffer.
             * @param buffer the #GeglBuffer to render to.
             * @param roi the rectangle to render.
             * @param level mipmap level to render (0 for all)
             * @param abyss_policy
             */
            blit_buffer(
                buffer: Buffer | null,
                roi: Rectangle | null,
                level: number,
                abyss_policy: AbyssPolicy | null,
            ): void;
            /**
             * Makes a connection between the pads of two nodes, one pad should
             * be a source pad the other a sink pad, order does not matter.
             *
             * Returns TRUE if the connection was successfully made.
             * @param a_pad_name and the pad of the node we want connected.
             * @param b another node
             * @param b_pad_name and its pad to be connected.
             */
            connect(a_pad_name: string, b: Node, b_pad_name: string): boolean;
            connect(...args: never[]): any;
            /**
             * Makes a connection between the pads of two nodes.
             *
             * Returns TRUE if the connection was successfully made.
             * @param input_pad_name the name of the input pad we are connecting to
             * @param source the node producing data we want to connect.
             * @param output_pad_name the output pad we want to use on the source.
             */
            connect_from(input_pad_name: string, source: Node, output_pad_name: string): boolean;
            /**
             * Makes a connection between the pads of two nodes.
             *
             * Returns TRUE if the connection was successfully made.
             * @param output_pad_name the output pad we want to use on the source.
             * @param sink the node we're connecting an input to
             * @param input_pad_name the name of the input pad we are connecting to
             */
            connect_to(output_pad_name: string, sink: Node, input_pad_name: string): boolean;
            /**
             * Creates a new processing node that performs the specified operation.
             * All properties of the operation will have their default values. This
             * is included as an addition to #gegl_node_new_child in the public API to have
             * a non varargs entry point for bindings as well as sometimes simpler more
             * readable code.
             * @param operation the type of node to create.
             * @returns a newly created node. The node will be destroyed by the parent. Calling g_object_unref on a node will cause the node to be dropped by the parent. (You may also add additional references using g_object_ref/g_object_unref, but in general relying on the parents reference counting is easiest.)
             */
            create_child(operation: string): Node;
            /**
             * Performs hit detection by returning the node providing data at a given
             * coordinate pair. Currently operates only on bounding boxes and not
             * pixel data.
             * @param x x coordinate
             * @param y y coordinate
             * @returns the GeglNode providing the data ending up at @x,@y in the output of @node.
             */
            detect(x: number, y: number): Node;
            /**
             * Disconnects node connected to `input_pad` of `node` (if any).
             *
             * Returns TRUE if a connection was broken.
             * @param input_pad the input pad to disconnect.
             */
            disconnect(input_pad: string): boolean;
            // Conflicted with GObject.Object.disconnect
            disconnect(...args: never[]): any;
            find_property(property_name: string): GObject.ParamSpec;
            get_children(): Node[];
            /**
             * Retrieve which pads on which nodes are connected to a named output_pad,
             * and the number of connections. Both the location for the generated
             * nodes array and pads array can be left as NULL. If they are non NULL
             * both should be freed with g_free. The arrays are NULL terminated.
             *
             * Returns the number of consumers connected to this output_pad.
             * @param output_pad the output pad we want to know who uses.
             */
            get_consumers(output_pad: string): [number, Node[] | null, string[] | null];
            get_gegl_operation(): Operation | null;
            /**
             * Proxies are used to route between nodes of a subgraph contained within
             * a node.
             * @param pad_name the name of the pad.
             * @returns Returns an input proxy for the named pad. If no input proxy exists with this name a new one will be created.
             */
            get_input_proxy(pad_name: string): Node;
            get_operation(): string;
            /**
             * Proxies are used to route between nodes of a subgraph contained within
             * a node.
             * @param pad_name the name of the pad.
             * @returns Returns a output proxy for the named pad. If no output proxy exists with this name a new one will be created.
             */
            get_output_proxy(pad_name: string): Node;
            get_pad_description(pad_name: string): string;
            get_pad_label(pad_name: string): string;
            /**
             * Returns a GeglNode that keeps a reference on a child.
             * @returns the parent of a node or NULL.
             */
            get_parent(): Node;
            get_passthrough(): boolean;
            get_producer(input_pad_name: string, output_pad_name?: string | null): Node;
            /**
             * Returns TRUE if the node has a pad with the specified name
             * @param pad_name the pad name we are looking for
             */
            has_pad(pad_name: string): boolean;
            /**
             * Returns the position and dimensions of a rectangle spanning the area
             * defined by a node.
             * @returns pointer a #GeglRectangle
             */
            get_bounding_box(): Rectangle;
            get_property(property_name: string): unknown;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            is_graph(): boolean;
            /**
             * This is equivalent to gegl_node_connect (source, "output", sink, "input");
             * @param sink the consumer of data.
             */
            link(sink: Node): void;
            /**
             * If the node has any input pads this function returns a null terminated
             * array of pad names, otherwise it returns NULL. The return value can be
             * freed with g_strfreev().
             */
            list_input_pads(): string[];
            /**
             * If the node has any output pads this function returns a null terminated
             * array of pad names, otherwise it returns NULL. The return value can be
             * freed with g_strfreev().
             */
            list_output_pads(): string[];
            new_processor(rectangle: Rectangle): Processor;
            /**
             * Render a composition. This can be used for instance on a node with a "png-save"
             * operation to render all necessary data, and make it be written to file. This
             * function wraps the usage of a GeglProcessor in a single blocking function
             * call. If you need a non-blocking operation, then make a direct use of
             * #gegl_processor_work. See #GeglProcessor.
             *
             * ---
             * GeglNode      *gegl;
             * GeglRectangle  roi;
             * GeglNode      *png_save;
             * unsigned char *buffer;
             *
             * gegl = gegl_parse_xml (xml_data);
             * roi      = gegl_node_get_bounding_box (gegl);
             * # create png_save from the graph, the parent/child relationship
             * # only mean anything when it comes to memory management.
             * png_save = gegl_node_new_child (gegl,
             *                                 "operation", "gegl:png-save",
             *                                 "path",      "output.png",
             *                                 NULL);
             *
             * gegl_node_link (gegl, png_save);
             * gegl_node_process (png_save);
             *
             * buffer = malloc (roi.w*roi.h*4);
             * gegl_node_blit (gegl,
             *                 1.0,
             *                 &roi,
             *                 babl_format("R'G'B'A u8"),
             *                 buffer,
             *                 GEGL_AUTO_ROWSTRIDE,
             *                 GEGL_BLIT_DEFAULT);
             */
            process(): void;
            progress(progress: number, message: string): void;
            /**
             * Removes a child from a GeglNode. The reference previously held will be
             * dropped so increase the reference count before removing when reparenting
             * a child between two graphs.
             * @param child a GeglNode.
             * @returns the child.
             */
            remove_child(child: Node): Node;
            set_enum_as_string(key: string, value: string): void;
            set_passthrough(passthrough: boolean): void;
            /**
             * This is mainly included for language bindings. Using #gegl_node_set is
             * more convenient when programming in C.
             * @param property_name the name of the property to set
             * @param value a GValue containing the value to be set in the property.
             */
            set_property(property_name: string, value: GObject.Value | any): void;
            // Conflicted with GObject.Object.set_property
            set_property(...args: never[]): any;
            /**
             * Sets the right value in animated properties of this node and all its
             * dependendcies to be the specified time position.
             * @param time the time to set the properties which have keyfraes attached to
             */
            set_time(time: number): void;
            /**
             * Returns a freshly allocated \0 terminated string containing a XML
             * serialization of the composition produced by a node (and thus also
             * the nodes contributing data to the specified node). To export a
             * gegl graph, connect the internal output node to an output proxy (see
             * #gegl_node_get_output_proxy.) and use the proxy node as the basis
             * for the serialization.
             * @param path_root filesystem path to construct relative paths from.
             */
            to_xml(path_root: string): string;
            /**
             * Returns a freshly allocated \0 terminated string containing a XML
             * serialization of a segment of a graph from `head` to `tail` nodes.
             * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
             * @param tail a #GeglNode
             * @param path_root filesystem path to construct relative paths from.
             * @returns XML serialization of a graph segment.
             */
            to_xml_full(tail: Node | null, path_root: string): string;
        }

        module Operation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Operation extends GObject.Object {
            static $gtype: GObject.GType<Operation>;

            // Constructors

            constructor(properties?: Partial<Operation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static find_property(operation_type: string, property_name: string): GObject.ParamSpec;
            // Conflicted with GObject.Object.find_property
            static find_property(...args: never[]): any;
            static get_key(operation_type: string, key_name: string): string;
            static get_op_version(op_name: string): string;
            static get_property_key(operation_type: string, property_name: string, property_key_name: string): string;
            static list_keys(operation_type: string): string[];
            static list_properties(operation_type: string): GObject.ParamSpec[];
            // Conflicted with GObject.Object.list_properties
            static list_properties(...args: never[]): any;
            static list_property_keys(operation_type: string, property_name: string): string[];
        }

        module Path {
            // Signal callback interfaces

            interface Changed {
                (object?: any | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Path extends GObject.Object {
            static $gtype: GObject.GType<Path>;

            // Constructors

            constructor(properties?: Partial<Path.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Path;

            static new_from_string(instructions: string): Path;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this, object: any | null) => void): number;
            connect_after(signal: 'changed', callback: (_source: this, object: any | null) => void): number;
            emit(signal: 'changed', object?: any | null): void;

            // Static methods

            /**
             * Adds a new type to the path system, FIXME this should probably
             * return something on registration conflicts, for now it expects
             * all registered paths to be aware of each other.
             * @param type a gchar to recognize in path descriptions.
             * @param items the number of floating point data items the instruction takes
             * @param description a human readable description of this entry
             */
            static add_type(type: number, items: number, description: string): void;

            // Methods

            /**
             * Compute the coordinates of the path at the `position` (length measured from
             * start of path, not including discontinuities).
             * @param pos how far along the path.
             */
            calc(pos: number): [boolean, number, number];
            /**
             * Compute a corresponding y coordinate for a given x input coordinate,
             * returns 0 if computed correctly and -1 if the path doesn't exist for the
             * specified x coordinate.
             * @param x x coordinate to compute for
             */
            calc_y_for_x(x: number): [number, number];
            /**
             * Remove all nods from a `path`.
             */
            clear(): void;
            /**
             * Figure out what and where on a path is closest to arbitrary coordinates.
             *
             * Returns the length along the path where the closest point was encountered.
             * @param x x coordinate.
             * @param y y coordinate
             */
            closest_point(x: number, y: number): [number, number, number, number];
            /**
             * Marks the path as dirty and issues an invalidation for the path rendering,
             * use this if modifying the values of a GeglPathPoint inline.
             */
            dirty(): void;
            /**
             * Execute a provided function for every node in the path (useful for
             * drawing and otherwise traversing a path.)
             * @param each_item a function to call for each node in the path.
             */
            foreach(each_item: NodeFunction): void;
            /**
             * Execute a provided function for the segments of a poly line approximating
             * the path.
             * @param each_item a function to call for each node in the path.
             */
            foreach_flat(each_item: NodeFunction): void;
            /**
             * Make the `GeglPath` stop firing signals as it changes must be paired with a
             * gegl_path_thaw() for the signals to start again.
             */
            freeze(): void;
            /**
             * Compute the bounding box of a path.
             */
            get_bounds(): [number, number, number, number];
            /**
             * Returns the total length of the path.
             * @returns the length of the path.
             */
            get_length(): number;
            /**
             * Get the transformation matrix of the path.
             */
            get_matrix(): Matrix3;
            /**
             * Retrieves the number of nodes in the path.
             * @returns the number of nodes in the path.
             */
            get_n_nodes(): number;
            /**
             * Retrieve the node of the path at position `pos`.
             *
             * Returns TRUE if the node was successfully retrieved.
             * @param index the node number to retrieve
             */
            get_node(index: number): [boolean, PathItem];
            /**
             * Insert the new node `node` at position `pos` in `path`.
             * if `pos` = -1, the node is added in the last position.
             * @param pos the position we want the new node to have.
             * @param node pointer to a structure describing the GeglPathItem we want to store
             */
            insert_node(pos: number, node: PathItem): void;
            /**
             * Check if the path contains any nodes.
             *
             * Returns TRUE if the path has no nodes.
             */
            is_empty(): boolean;
            /**
             * Parses `instructions` and appends corresponding nodes to path (call
             * gegl_path_clean() first if you want to replace the existing path.
             * @param instructions a string describing a path.
             */
            parse_string(instructions: string): void;
            /**
             * Removes the node number `pos` in `path`.
             * @param pos a node in the path.
             */
            remove_node(pos: number): void;
            /**
             * Replaces the exiting node at position `pos` in `path`.
             * @param pos the position we want the new node to have.
             * @param node pointer to a structure describing the GeglPathItem we want to store.
             */
            replace_node(pos: number, node: PathItem): void;
            /**
             * Set the transformation matrix of the path.
             *
             * The path is transformed through this matrix when being evaluated,
             * causing the calculated positions and length to be changed by the transform.
             * @param matrix a #GeglMatrix3 to copy the matrix from
             */
            set_matrix(matrix: Matrix3): void;
            /**
             * Restart firing signals (unless the path has been frozen multiple times).
             */
            thaw(): void;
            /**
             * Serialize the paths nodes to a string.
             * @returns return a string with instructions describing the string you need to free this with g_free().
             */
            to_string(): string;
        }

        module Processor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                chunksize: number;
                node: Node;
                progress: number;
                rectangle: any;
            }
        }

        class Processor extends GObject.Object {
            static $gtype: GObject.GType<Processor>;

            // Properties

            get chunksize(): number;
            set node(val: Node);
            get progress(): number;
            set progress(val: number);
            get rectangle(): any;
            set rectangle(val: any);

            // Constructors

            constructor(properties?: Partial<Processor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the (cache) buffer the processor is rendering into, another way of
             * getting to the same pixel data is calling gegl_node_blit with flags
             * indicating that we want caching and accept dirty data.
             * @returns the #GeglBuffer rendered into.
             */
            get_buffer(): Buffer;
            set_level(level: number): void;
            /**
             * Change the rectangle a #GeglProcessor is working on.
             * @param rectangle the new #GeglRectangle the processor shold work on or NULL to make it work on all data in the buffer.
             */
            set_rectangle(rectangle: Rectangle): void;
            set_scale(scale: number): void;
            /**
             * Do an iteration of work for the processor.
             *
             * Returns TRUE if there is more work to be done.
             *
             * ---
             * GeglProcessor *processor = gegl_node_new_processor (node, &roi);
             * double         progress;
             *
             * while (gegl_processor_work (processor, &progress))
             *   g_warning ("%f%% complete", progress);
             * g_object_unref (processor);
             */
            work(): [boolean, number];
        }

        module Stats {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active_threads: number;
                activeThreads: number;
                assigned_threads: number;
                assignedThreads: number;
                scratch_total: number;
                scratchTotal: number;
                swap_busy: boolean;
                swapBusy: boolean;
                swap_file_size: number;
                swapFileSize: number;
                swap_queue_full: boolean;
                swapQueueFull: boolean;
                swap_queue_stalls: number;
                swapQueueStalls: number;
                swap_queued_total: number;
                swapQueuedTotal: number;
                swap_read_total: number;
                swapReadTotal: number;
                swap_reading: boolean;
                swapReading: boolean;
                swap_total: number;
                swapTotal: number;
                swap_total_uncompressed: number;
                swapTotalUncompressed: number;
                swap_write_total: number;
                swapWriteTotal: number;
                swap_writing: boolean;
                swapWriting: boolean;
                tile_alloc_total: number;
                tileAllocTotal: number;
                tile_cache_hits: number;
                tileCacheHits: number;
                tile_cache_misses: number;
                tileCacheMisses: number;
                tile_cache_total: number;
                tileCacheTotal: number;
                tile_cache_total_max: number;
                tileCacheTotalMax: number;
                tile_cache_total_uncompressed: number;
                tileCacheTotalUncompressed: number;
                zoom_total: number;
                zoomTotal: number;
            }
        }

        class Stats extends GObject.Object {
            static $gtype: GObject.GType<Stats>;

            // Properties

            get active_threads(): number;
            get activeThreads(): number;
            get assigned_threads(): number;
            get assignedThreads(): number;
            get scratch_total(): number;
            get scratchTotal(): number;
            get swap_busy(): boolean;
            get swapBusy(): boolean;
            get swap_file_size(): number;
            get swapFileSize(): number;
            get swap_queue_full(): boolean;
            get swapQueueFull(): boolean;
            get swap_queue_stalls(): number;
            get swapQueueStalls(): number;
            get swap_queued_total(): number;
            get swapQueuedTotal(): number;
            get swap_read_total(): number;
            get swapReadTotal(): number;
            get swap_reading(): boolean;
            get swapReading(): boolean;
            get swap_total(): number;
            get swapTotal(): number;
            get swap_total_uncompressed(): number;
            get swapTotalUncompressed(): number;
            get swap_write_total(): number;
            get swapWriteTotal(): number;
            get swap_writing(): boolean;
            get swapWriting(): boolean;
            get tile_alloc_total(): number;
            get tileAllocTotal(): number;
            get tile_cache_hits(): number;
            get tileCacheHits(): number;
            get tile_cache_misses(): number;
            get tileCacheMisses(): number;
            get tile_cache_total(): number;
            get tileCacheTotal(): number;
            get tile_cache_total_max(): number;
            get tileCacheTotalMax(): number;
            get tile_cache_total_uncompressed(): number;
            get tileCacheTotalUncompressed(): number;
            get zoom_total(): number;
            get zoomTotal(): number;

            // Constructors

            constructor(properties?: Partial<Stats.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module TileBackend {
            // Constructor properties interface

            interface ConstructorProps extends TileSource.ConstructorProps {
                flush_on_destroy: boolean;
                flushOnDestroy: boolean;
                format: any;
                px_size: number;
                pxSize: number;
                tile_height: number;
                tileHeight: number;
                tile_size: number;
                tileSize: number;
                tile_width: number;
                tileWidth: number;
            }
        }

        class TileBackend extends TileSource {
            static $gtype: GObject.GType<TileBackend>;

            // Properties

            get flush_on_destroy(): boolean;
            set flush_on_destroy(val: boolean);
            get flushOnDestroy(): boolean;
            set flushOnDestroy(val: boolean);
            get format(): any;
            get px_size(): number;
            get pxSize(): number;
            get tile_height(): number;
            get tileHeight(): number;
            get tile_size(): number;
            get tileSize(): number;
            get tile_width(): number;
            get tileWidth(): number;

            // Constructors

            constructor(properties?: Partial<TileBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Delete a swap file from disk. This must be used by tile backends which may
             * swap to disk under certain circonstances.
             *
             * For safety, this function will check that the swap file is in the swap
             * directory before deletion but it won't perform any other check.
             * @param path the path where the gegl tile backend has swapped.
             */
            static unlink_swap(path: string): void;

            // Methods

            get_flush_on_destroy(): boolean;
            get_tile_height(): number;
            get_tile_size(): number;
            get_tile_width(): number;
            /**
             * Gets a pointer to the GeglTileStorage that uses the backend
             * @returns the #GeglTileStorage
             */
            peek_storage(): TileSource;
            /**
             * Specify the extent of the backend, can be used to pre-prime the
             * backend with the width/height information when constructing proxy
             * GeglBuffers to interact with other systems
             * @param rectangle the new extent
             */
            set_extent(rectangle: Rectangle): void;
            /**
             * Control whether cached data will be written to the backend before it
             * is destroyed. If false unwritten data will be discarded.
             * @param flush_on_destroy true if the backend needs to be flushed
             */
            set_flush_on_destroy(flush_on_destroy: boolean): void;
        }

        module TileHandler {
            // Constructor properties interface

            interface ConstructorProps extends TileSource.ConstructorProps {
                source: GObject.Object;
            }
        }

        class TileHandler extends TileSource {
            static $gtype: GObject.GType<TileHandler>;

            // Properties

            get source(): GObject.Object;
            set source(val: GObject.Object);

            // Constructors

            constructor(properties?: Partial<TileHandler.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            damage_rect(rect: Rectangle): void;
            damage_tile(x: number, y: number, z: number, damage: number): void;
            lock(): void;
            set_source(source: TileSource): void;
            unlock(): void;
        }

        module TileSource {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class TileSource extends GObject.Object {
            static $gtype: GObject.GType<TileSource>;

            // Fields

            command: TileSourceCommand;
            padding: any[];

            // Constructors

            constructor(properties?: Partial<TileSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        type AudioFragmentClass = typeof AudioFragment;
        abstract class AudioFragmentPrivate {
            static $gtype: GObject.GType<AudioFragmentPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class BufferIterator {
            static $gtype: GObject.GType<BufferIterator>;

            // Fields

            length: number;
            items: BufferIteratorItem[];

            // Constructors

            _init(...args: any[]): void;
        }

        class BufferIteratorItem {
            static $gtype: GObject.GType<BufferIteratorItem>;

            // Fields

            data: any;
            roi: Rectangle;

            // Constructors

            constructor(
                properties?: Partial<{
                    data: any;
                    roi: Rectangle;
                }>,
            );
            _init(...args: any[]): void;
        }

        abstract class BufferIteratorPriv {
            static $gtype: GObject.GType<BufferIteratorPriv>;

            // Constructors

            _init(...args: any[]): void;
        }

        class BufferMatrix2 {
            static $gtype: GObject.GType<BufferMatrix2>;

            // Fields

            coeff: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    coeff: number[];
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            determinant(): number;
            is_identity(): boolean;
            is_scale(): boolean;
        }

        type ColorClass = typeof Color;
        abstract class ColorPrivate {
            static $gtype: GObject.GType<ColorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CurveClass = typeof Curve;
        class Lookup {
            static $gtype: GObject.GType<Lookup>;

            // Fields

            'function': LookupFunction;
            data: any;
            shift: number;
            positive_min: number;
            positive_max: number;
            negative_min: number;
            negative_max: number;
            bitmask: number[];
            table: number[];

            // Constructors

            _init(...args: any[]): void;
        }

        class Matrix3 {
            static $gtype: GObject.GType<Matrix3>;

            // Fields

            coeff: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    coeff: number[];
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Matrix3;

            // Methods

            /**
             * Returns a copy of `src`.
             */
            copy(): Matrix3;
            /**
             * Copies the matrix in `src` into `dst`.
             * @param src a #GeglMatrix3
             */
            copy_into(src: Matrix3): void;
            /**
             * Returns the determinant for the matrix.
             */
            determinant(): number;
            /**
             * Check if two matrices are equal.
             *
             * Returns TRUE if the matrices are equal.
             * @param matrix2 a #GeglMatrix3
             */
            equal(matrix2: Matrix3): boolean;
            /**
             * Set the provided `matrix` to the identity matrix.
             */
            identity(): void;
            /**
             * Inverts `matrix`.
             */
            invert(): void;
            /**
             * Check if a matrix only does an affine transformation.
             *
             * Returns TRUE if the matrix only does an affine transformation.
             */
            is_affine(): boolean;
            /**
             * Check if a matrix is the identity matrix.
             *
             * Returns TRUE if the matrix is the identity matrix.
             */
            is_identity(): boolean;
            /**
             * Check if a matrix only does scaling.
             *
             * Returns TRUE if the matrix only does scaling.
             */
            is_scale(): boolean;
            /**
             * Check if a matrix only does translation.
             *
             * Returns TRUE if the matrix only does trasnlation.
             */
            is_translate(): boolean;
            /**
             * Multiples `product` = `left` · `right`
             * @param right a #GeglMatrix3
             * @param product a #GeglMatrix3 to store the result in.
             */
            multiply(right: Matrix3, product: Matrix3): void;
            /**
             * Shift the origin of the transformation specified by `matrix`
             * to (`x,` `y)`. In other words, calculate the matrix that:
             *
             * 1. Translates the input by (-`x,` -`y)`.
             *
             * 2. Transforms the result using the original `matrix`.
             *
             * 3. Translates the result by (`x,` `y)`.
             * @param x x coordinate of new origin
             * @param y y coordinate of new origin.
             */
            originate(x: number, y: number): void;
            /**
             * Parse a transofmation matrix from a string.
             * @param string a string describing the matrix (right now a small subset of the transform strings allowed by SVG)
             */
            parse_string(string: string): void;
            /**
             * Rounds numerical errors in `matrix` to the nearest integer.
             */
            round_error(): void;
            /**
             * Serialize a #GeglMatrix3 to a string.
             *
             * Returns a freshly allocated string representing that #GeglMatrix3, the
             * returned string should be g_free()'d.
             */
            to_string(): string;
            /**
             * transforms the coordinates provided in `x` and `y` and changes to the
             * coordinates gotten when the transformed with the matrix.
             * @param x pointer to an x coordinate
             * @param y pointer to an y coordinate
             */
            transform_point(x: number, y: number): void;
        }

        type MetadataHashClass = typeof MetadataHash;
        type MetadataInterface = typeof Metadata;
        /**
         * An opaque type representing a metadata iterator.
         */
        class MetadataIter {
            static $gtype: GObject.GType<MetadataIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        /**
         * Struct to describe how a metadata variable is mapped from the name used by
         * the image file module to the name used by Gegl.  An optional transform
         * function may be specified, e.g. to transform from a #GDatetime to a string.
         */
        class MetadataMap {
            static $gtype: GObject.GType<MetadataMap>;

            // Fields

            local_name: string;
            name: string;
            transform: GObject.ValueTransform;

            // Constructors

            _init(...args: any[]): void;
        }

        type MetadataStoreClass = typeof MetadataStore;
        abstract class OperationContext {
            static $gtype: GObject.GType<OperationContext>;

            // Constructors

            _init(...args: any[]): void;
        }

        class ParamSpecDouble {
            static $gtype: GObject.GType<ParamSpecDouble>;

            // Fields

            ui_minimum: number;
            ui_maximum: number;
            ui_gamma: number;
            ui_step_small: number;
            ui_step_big: number;
            ui_digits: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            set_digits(digits: number): void;
            set_steps(small_step: number, big_step: number): void;
        }

        class ParamSpecEnum {
            static $gtype: GObject.GType<ParamSpecEnum>;

            // Fields

            excluded_values: any[];

            // Constructors

            _init(...args: any[]): void;

            // Methods

            exclude_value(value: number): void;
        }

        class ParamSpecFilePath {
            static $gtype: GObject.GType<ParamSpecFilePath>;

            // Fields

            no_validate: number;
            null_ok: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class ParamSpecFormat {
            static $gtype: GObject.GType<ParamSpecFormat>;

            // Constructors

            _init(...args: any[]): void;
        }

        class ParamSpecInt {
            static $gtype: GObject.GType<ParamSpecInt>;

            // Fields

            ui_minimum: number;
            ui_maximum: number;
            ui_gamma: number;
            ui_step_small: number;
            ui_step_big: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            set_steps(small_step: number, big_step: number): void;
        }

        class ParamSpecSeed {
            static $gtype: GObject.GType<ParamSpecSeed>;

            // Fields

            ui_minimum: number;
            ui_maximum: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class ParamSpecString {
            static $gtype: GObject.GType<ParamSpecString>;

            // Fields

            no_validate: number;
            null_ok: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class ParamSpecUri {
            static $gtype: GObject.GType<ParamSpecUri>;

            // Fields

            no_validate: number;
            null_ok: number;

            // Constructors

            _init(...args: any[]): void;
        }

        type PathClass = typeof Path;
        class PathItem {
            static $gtype: GObject.GType<PathItem>;

            // Fields

            type: number;
            point: PathPoint[];

            // Constructors

            constructor(
                properties?: Partial<{
                    type: number;
                    point: PathPoint[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class PathList {
            static $gtype: GObject.GType<PathList>;

            // Fields

            next: any;
            d: PathItem;

            // Constructors

            constructor(
                properties?: Partial<{
                    next: any;
                    d: PathItem;
                }>,
            );
            _init(...args: any[]): void;
        }

        class PathPoint {
            static $gtype: GObject.GType<PathPoint>;

            // Fields

            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class Random {
            static $gtype: GObject.GType<Random>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): Random;

            static new_with_seed(seed: number): Random;

            // Methods

            /**
             * Return a new copy of an existing GeglRandom
             */
            duplicate(): Random;
            /**
             * Return a random floating point number in range 0.0 .. 1.0.
             * @param x x coordinate
             * @param y y coordinate
             * @param z z coordinate (mipmap level)
             * @param n number no (each x,y coordinate provides its own sequence of numbers
             */
            float(x: number, y: number, z: number, n: number): number;
            /**
             * Return a random floating point number in the range specified,
             * for the given x,y coordinates and GeglRandom provided, if multiple different
             * numbers are needed pass in incrementing n's.
             * @param x x coordinate
             * @param y y coordinate
             * @param z z coordinate (mipmap level)
             * @param n number no (each x,y coordinate provides its own sequence of numbers
             * @param min minimum value
             * @param max maximum value
             */
            float_range(x: number, y: number, z: number, n: number, min: number, max: number): number;
            /**
             * Free a GeglRandom structure created with gegl_random_new() or
             * gegl_random_new_with_seed()
             */
            free(): void;
            /**
             * Return a random integer number in range 0 .. MAX_UINT
             * @param x x coordinate
             * @param y y coordinate
             * @param z z coordinate (mipmap level)
             * @param n number no (each x,y coordinate provides its own sequence of numbers
             */
            int(x: number, y: number, z: number, n: number): number;
            /**
             * Return a random integer point number in the range specified,
             * for the given x,y coordinates and GeglRandom provided, if multiple different
             * numbers are needed pass in incrementing n's.
             * @param x x coordinate
             * @param y y coordinate
             * @param z z coordinate (mipmap level)
             * @param n number no (each x,y coordinate provides its own sequence of numbers
             * @param min minimum value
             * @param max maximum value+1
             */
            int_range(x: number, y: number, z: number, n: number, min: number, max: number): number;
            /**
             * Change the seed of an existing GeglRandom.
             * @param seed an integer seed, change for different permutation.
             */
            set_seed(seed: number): void;
        }

        class Rectangle {
            static $gtype: GObject.GType<Rectangle>;

            // Fields

            x: number;
            y: number;
            width: number;
            height: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](x: number, y: number, width: number, height: number): Rectangle;

            // Static methods

            /**
             * Returns a GeglRectangle that represents an infininte plane.
             */
            static infinite_plane(): Rectangle;

            // Methods

            /**
             * Aligns `rectangle` to a regular tile grid, of which `tile` is a representative
             * tile, and stores the result in `destination`.
             *
             * `alignment` can be one of:
             *
             *   GEGL_RECTANGLE_ALIGNMENT_SUBSET:  Calculate the biggest aligned rectangle
             *   contained in `rectangle`.
             *
             *   GEGL_RECTANGLE_ALIGNMENT_SUPERSET:  Calculate the smallest aligned
             *   rectangle containing `rectangle`.
             *
             *   GEGL_RECTANGLE_ALIGNMENT_NEAREST:  Calculate the nearest aligned rectangle
             *   to `rectangle`.
             *
             * `destination` may point to the same object as `rectangle` or `tile`.
             *
             * Returns TRUE if the result is not empty.
             * @param rectangle a #GeglRectangle
             * @param tile a #GeglRectangle
             * @param alignment a #GeglRectangleAlignment value
             */
            align(rectangle: Rectangle, tile: Rectangle, alignment: RectangleAlignment | null): boolean;
            /**
             * Aligns `rectangle` to the tile grid of `buffer,` and stores the result in
             * `destination`.
             *
             * `alignment` has the same meaning as for gegl_rectangle_align().
             *
             * `destination` may point to the same object as `rectangle`.
             *
             * Returns TRUE if the result is not empty.
             * @param rectangle a #GeglRectangle
             * @param buffer a #GeglBuffer
             * @param alignment a #GeglRectangleAlignment value
             */
            align_to_buffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment | null): boolean;
            /**
             * Computes the bounding box of the rectangles `source1` and `source2` and stores the
             * resulting bounding box in `destination`.
             *
             * `destination` may point to the same object as `source1` or `source2`.
             * @param source1 a #GeglRectangle
             * @param source2 a #GeglRectangle
             */
            bounding_box(source1: Rectangle, source2: Rectangle): void;
            /**
             * Checks if the #GeglRectangle `child` is fully contained within `parent`.
             *
             * Returns TRUE if the `child` is fully contained in `parent`.
             * @param child a #GeglRectangle
             */
            contains(child: Rectangle): boolean;
            /**
             * Copies the rectangle information stored in `source` over the information in
             * `destination`.
             *
             * `destination` may point to the same object as `source`.
             * @param source a #GeglRectangle
             */
            copy(source: Rectangle): void;
            /**
             * For debugging purposes, not stable API.
             */
            dump(): void;
            /**
             * Create a new copy of `rectangle`.
             * @returns a #GeglRectangle
             */
            dup(): Rectangle;
            /**
             * Check if two #GeglRectangles are equal.
             *
             * Returns TRUE if `rectangle` and `rectangle2` are equal.
             * @param rectangle2 a #GeglRectangle
             */
            equal(rectangle2: Rectangle): boolean;
            /**
             * Check if a rectangle is equal to a set of parameters.
             *
             * Returns TRUE if `rectangle` and `x,``y` `width` x `height` are equal.
             * @param x X coordinate
             * @param y Y coordinate
             * @param width width of rectangle
             * @param height height of rectangle
             */
            equal_coords(x: number, y: number, width: number, height: number): boolean;
            /**
             * Calculates the intersection of two rectangles. If the rectangles do not
             * intersect, dest's width and height are set to 0 and its x and y values
             * are undefined.
             *
             * `dest` may point to the same object as `src1` or `src2`.
             *
             * Returns TRUE if the rectangles intersect.
             * @param src1 a #GeglRectangle
             * @param src2 a #GeglRectangle
             */
            intersect(src1: Rectangle, src2: Rectangle): boolean;
            /**
             * Check if a rectangle has zero area.
             *
             * Returns TRUE if the width or height of `rectangle` is 0.
             */
            is_empty(): boolean;
            /**
             * Returns TRUE if the GeglRectangle represents an infininte plane,
             * FALSE otherwise.
             */
            is_infinite_plane(): boolean;
            /**
             * Sets the `x,` `y,` `width` and `height` on `rectangle`.
             * @param x upper left x coordinate
             * @param y upper left y coordinate
             * @param width width in pixels.
             * @param height height in pixels.
             */
            set(x: number, y: number, width: number, height: number): void;
            /**
             * Subtracts `subtrahend` from `minuend,` and stores the resulting rectangles in
             * `destination`.  Between 0 and 4 disjoint rectangles may be produced.
             *
             * `destination` may contain `minuend` or `subtrahend`.
             *
             * Returns the number of resulting rectangles.
             * @param minuend a #GeglRectangle
             * @param subtrahend a #GeglRectangle
             */
            subtract(minuend: Rectangle, subtrahend: Rectangle): number;
            /**
             * Computes the bounding box of the area formed by subtracting `subtrahend`
             * from `minuend,` and stores the result in `destination`.
             *
             * `destination` may point to the same object as `minuend` or `subtrahend`.
             *
             * Returns TRUE if the result is not empty.
             * @param minuend a #GeglRectangle
             * @param subtrahend a #GeglRectangle
             */
            subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean;
            /**
             * Computes the symmetric difference of the rectangles `source1` and `source2`,
             * and stores the resulting rectangles in `destination`.  Between 0 and 4
             * disjoint rectangles may be produced.
             *
             * `destination` may contain `rectangle1` or `rectangle2`.
             *
             * Returns the number of resulting rectangles.
             * @param source1 a #GeglRectangle
             * @param source2 a #GeglRectangle
             */
            xor(source1: Rectangle, source2: Rectangle): number;
        }

        abstract class Sampler {
            static $gtype: GObject.GType<Sampler>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Perform a sampling with the provided `sampler`.
             * @param x x coordinate to sample
             * @param y y coordinate to sample
             * @param scale matrix representing extent of sampling area in source buffer.
             * @param output memory location for output data.
             * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
             */
            get(x: number, y: number, scale: BufferMatrix2, output: any | null, repeat_mode: AbyssPolicy | null): void;
            get_context_rect(): Rectangle;
        }

        abstract class Tile {
            static $gtype: GObject.GType<Tile>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TileBackendClass = typeof TileBackend;
        abstract class TileBackendPrivate {
            static $gtype: GObject.GType<TileBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class TileCopyParams {
            static $gtype: GObject.GType<TileCopyParams>;

            // Fields

            dst_buffer: Buffer;
            dst_x: number;
            dst_y: number;
            dst_z: number;

            // Constructors

            _init(...args: any[]): void;
        }

        type TileHandlerClass = typeof TileHandler;
        abstract class TileHandlerPrivate {
            static $gtype: GObject.GType<TileHandlerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TileSourceClass = typeof TileSource;
        module Metadata {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface MetadataNamespace {
            $gtype: GObject.GType<Metadata>;
            prototype: Metadata;
        }
        interface Metadata extends GObject.Object {
            // Methods

            /**
             * Retrieve resolution from the application image metadata.  Intended for use
             * by the image file writer.  If resolution is not supported by the application
             * or if the operation fails %FALSE is returned and the resolution values are
             * not updated.
             * @param unit #GeglResolutionUnit return location
             * @param x X resolution return location
             * @param y Y resolution return location
             * @returns %TRUE if successful.
             */
            get_resolution(unit: ResolutionUnit | null, x: number, y: number): boolean;
            /**
             * Retrieve image file metadata from the application.  Intended for use by the
             * image file writer. If the operation fails it returns %FALSE and `value` is
             * not updated.
             * @param iter #GeglMetadataIter referencing the value to get
             * @param value Value to set in the interface
             * @returns %TRUE if successful.
             */
            iter_get_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Initialise an iterator to find all supported metadata keys.
             * @param iter #GeglMetadataIter to be initialised
             */
            iter_init(iter: MetadataIter): void;
            /**
             * Look up the specified key and initialise an iterator to reference the
             * associated metadata. The iterator is used in conjunction with
             * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
             * iterator is not valid for gegl_metadata_iter_next().
             * @param iter #GeglMetadataIter to be initialised
             * @param key Name of the value look up
             * @returns %TRUE if key is found.
             */
            iter_lookup(iter: MetadataIter, key: string): boolean;
            /**
             * Move the iterator to the next metadata item
             * @param iter #GeglMetadataIter to be updated
             * @returns key name if found, else %NULL
             */
            iter_next(iter: MetadataIter): string;
            /**
             * Set application data retrieved from image file's metadata.  Intended for use
             * by the image file reader.  If the operation fails it returns %FALSE and
             * `value` is ignored.
             * @param iter #GeglMetadataIter referencing the value to set
             * @param value Value to set in the interface
             * @returns %TRUE if successful.
             */
            iter_set_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Set the name of the file module and pass an array of mappings from
             * file-format specific metadata names to those used by Gegl. A GValue
             * transformation function may be supplied, e.g. to parse or format timestamps.
             * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
             * @param flags Flags specifying capabilities of underlying file format
             * @param map Array of mappings from file module metadata              names to Gegl well-known names.
             */
            register_map(file_module: string, flags: number, map: MetadataMap[]): void;
            /**
             * Set resolution retrieved from image file's metadata.  Intended for use by
             * the image file reader.  If resolution is not supported by the application or
             * if the operation fails %FALSE is returned and the values are ignored.
             * @param unit Specify #GeglResolutionUnit
             * @param x X resolution
             * @param y Y resolution
             * @returns %TRUE if successful.
             */
            set_resolution(unit: ResolutionUnit | null, x: number, y: number): boolean;
            /**
             * Unregister the file module mappings and any further mappings added or
             * modified by the application.  This should be called after the file module
             * completes operations.
             */
            unregister_map(): void;

            // Virtual methods

            /**
             * Retrieve resolution from the application image metadata.  Intended for use
             * by the image file writer.  If resolution is not supported by the application
             * or if the operation fails %FALSE is returned and the resolution values are
             * not updated.
             * @param unit #GeglResolutionUnit return location
             * @param x X resolution return location
             * @param y Y resolution return location
             */
            vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
            /**
             * Retrieve image file metadata from the application.  Intended for use by the
             * image file writer. If the operation fails it returns %FALSE and `value` is
             * not updated.
             * @param iter #GeglMetadataIter referencing the value to get
             * @param value Value to set in the interface
             */
            vfunc_iter_get_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Initialise an iterator to find all supported metadata keys.
             * @param iter #GeglMetadataIter to be initialised
             */
            vfunc_iter_init(iter: MetadataIter): void;
            /**
             * Look up the specified key and initialise an iterator to reference the
             * associated metadata. The iterator is used in conjunction with
             * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
             * iterator is not valid for gegl_metadata_iter_next().
             * @param iter #GeglMetadataIter to be initialised
             * @param key Name of the value look up
             */
            vfunc_iter_lookup(iter: MetadataIter, key: string): boolean;
            /**
             * Move the iterator to the next metadata item
             * @param iter #GeglMetadataIter to be updated
             */
            vfunc_iter_next(iter: MetadataIter): string;
            /**
             * Set application data retrieved from image file's metadata.  Intended for use
             * by the image file reader.  If the operation fails it returns %FALSE and
             * `value` is ignored.
             * @param iter #GeglMetadataIter referencing the value to set
             * @param value Value to set in the interface
             */
            vfunc_iter_set_value(iter: MetadataIter, value: GObject.Value | any): boolean;
            /**
             * Set the name of the file module and pass an array of mappings from
             * file-format specific metadata names to those used by Gegl. A GValue
             * transformation function may be supplied, e.g. to parse or format timestamps.
             * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
             * @param flags Flags specifying capabilities of underlying file format
             * @param map Array of mappings from file module metadata              names to Gegl well-known names.
             */
            vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void;
            /**
             * Set resolution retrieved from image file's metadata.  Intended for use by
             * the image file reader.  If resolution is not supported by the application or
             * if the operation fails %FALSE is returned and the values are ignored.
             * @param unit Specify #GeglResolutionUnit
             * @param x X resolution
             * @param y Y resolution
             */
            vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
        }

        export const Metadata: MetadataNamespace & {
            new (): Metadata; // This allows `obj instanceof Metadata`
        };

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

    export default Gegl;
}

declare module 'gi://Gegl' {
    import Gegl04 from 'gi://Gegl?version=0.4';
    export default Gegl04;
}
// END
