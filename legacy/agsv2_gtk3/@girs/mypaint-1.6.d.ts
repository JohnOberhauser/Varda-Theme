/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://MyPaint?version=1.6' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace MyPaint {
        /**
         * MyPaint-1.6
         */

        export namespace BrushInput {
            export const $gtype: GObject.GType<BrushInput>;
        }

        enum BrushInput {
            INPUT_PRESSURE,
            INPUT_SPEED1,
            INPUT_SPEED2,
            INPUT_RANDOM,
            INPUT_STROKE,
            INPUT_DIRECTION,
            INPUT_TILT_DECLINATION,
            INPUT_TILT_ASCENSION,
            INPUT_CUSTOM,
            INPUT_DIRECTION_ANGLE,
            INPUT_ATTACK_ANGLE,
            INPUT_TILT_DECLINATIONX,
            INPUT_TILT_DECLINATIONY,
            INPUT_GRIDMAP_X,
            INPUT_GRIDMAP_Y,
            INPUT_VIEWZOOM,
            INPUT_BARREL_ROTATION,
            INPUT_BRUSH_RADIUS,
            INPUTS_COUNT,
        }

        export namespace BrushSetting {
            export const $gtype: GObject.GType<BrushSetting>;
        }

        enum BrushSetting {
            SETTING_OPAQUE,
            SETTING_OPAQUE_MULTIPLY,
            SETTING_OPAQUE_LINEARIZE,
            SETTING_RADIUS_LOGARITHMIC,
            SETTING_HARDNESS,
            SETTING_ANTI_ALIASING,
            SETTING_DABS_PER_BASIC_RADIUS,
            SETTING_DABS_PER_ACTUAL_RADIUS,
            SETTING_DABS_PER_SECOND,
            SETTING_RADIUS_BY_RANDOM,
            SETTING_SPEED1_SLOWNESS,
            SETTING_SPEED2_SLOWNESS,
            SETTING_SPEED1_GAMMA,
            SETTING_SPEED2_GAMMA,
            SETTING_OFFSET_BY_RANDOM,
            SETTING_OFFSET_BY_SPEED,
            SETTING_OFFSET_BY_SPEED_SLOWNESS,
            SETTING_SLOW_TRACKING,
            SETTING_SLOW_TRACKING_PER_DAB,
            SETTING_TRACKING_NOISE,
            SETTING_COLOR_H,
            SETTING_COLOR_S,
            SETTING_COLOR_V,
            SETTING_RESTORE_COLOR,
            SETTING_CHANGE_COLOR_H,
            SETTING_CHANGE_COLOR_L,
            SETTING_CHANGE_COLOR_HSL_S,
            SETTING_CHANGE_COLOR_V,
            SETTING_CHANGE_COLOR_HSV_S,
            SETTING_SMUDGE,
            SETTING_SMUDGE_LENGTH,
            SETTING_SMUDGE_RADIUS_LOG,
            SETTING_ERASER,
            SETTING_STROKE_THRESHOLD,
            SETTING_STROKE_DURATION_LOGARITHMIC,
            SETTING_STROKE_HOLDTIME,
            SETTING_CUSTOM_INPUT,
            SETTING_CUSTOM_INPUT_SLOWNESS,
            SETTING_ELLIPTICAL_DAB_RATIO,
            SETTING_ELLIPTICAL_DAB_ANGLE,
            SETTING_DIRECTION_FILTER,
            SETTING_LOCK_ALPHA,
            SETTING_COLORIZE,
            SETTING_SNAP_TO_PIXEL,
            SETTING_PRESSURE_GAIN_LOG,
            SETTING_GRIDMAP_SCALE,
            SETTING_GRIDMAP_SCALE_X,
            SETTING_GRIDMAP_SCALE_Y,
            SETTING_SMUDGE_LENGTH_LOG,
            SETTING_SMUDGE_BUCKET,
            SETTING_SMUDGE_TRANSPARENCY,
            SETTING_OFFSET_Y,
            SETTING_OFFSET_X,
            SETTING_OFFSET_ANGLE,
            SETTING_OFFSET_ANGLE_ASC,
            SETTING_OFFSET_ANGLE_VIEW,
            SETTING_OFFSET_ANGLE_2,
            SETTING_OFFSET_ANGLE_2_ASC,
            SETTING_OFFSET_ANGLE_2_VIEW,
            SETTING_OFFSET_ANGLE_ADJ,
            SETTING_OFFSET_MULTIPLIER,
            SETTING_POSTERIZE,
            SETTING_POSTERIZE_NUM,
            SETTING_PAINT_MODE,
            SETTINGS_COUNT,
        }

        export namespace BrushState {
            export const $gtype: GObject.GType<BrushState>;
        }

        enum BrushState {
            STATE_X,
            STATE_Y,
            STATE_PRESSURE,
            STATE_PARTIAL_DABS,
            STATE_ACTUAL_RADIUS,
            STATE_SMUDGE_RA,
            STATE_SMUDGE_GA,
            STATE_SMUDGE_BA,
            STATE_SMUDGE_A,
            STATE_LAST_GETCOLOR_R,
            STATE_LAST_GETCOLOR_G,
            STATE_LAST_GETCOLOR_B,
            STATE_LAST_GETCOLOR_A,
            STATE_LAST_GETCOLOR_RECENTNESS,
            STATE_ACTUAL_X,
            STATE_ACTUAL_Y,
            STATE_NORM_DX_SLOW,
            STATE_NORM_DY_SLOW,
            STATE_NORM_SPEED1_SLOW,
            STATE_NORM_SPEED2_SLOW,
            STATE_STROKE,
            STATE_STROKE_STARTED,
            STATE_CUSTOM_INPUT,
            STATE_RNG_SEED,
            STATE_ACTUAL_ELLIPTICAL_DAB_RATIO,
            STATE_ACTUAL_ELLIPTICAL_DAB_ANGLE,
            STATE_DIRECTION_DX,
            STATE_DIRECTION_DY,
            STATE_DECLINATION,
            STATE_ASCENSION,
            STATE_VIEWZOOM,
            STATE_VIEWROTATION,
            STATE_DIRECTION_ANGLE_DX,
            STATE_DIRECTION_ANGLE_DY,
            STATE_ATTACK_ANGLE,
            STATE_FLIP,
            STATE_GRIDMAP_X,
            STATE_GRIDMAP_Y,
            STATE_DECLINATIONX,
            STATE_DECLINATIONY,
            STATE_DABS_PER_BASIC_RADIUS,
            STATE_DABS_PER_ACTUAL_RADIUS,
            STATE_DABS_PER_SECOND,
            STATE_BARREL_ROTATION,
            STATES_COUNT,
        }
        function brush_input_from_cname(cname: string): BrushInput;
        function brush_input_info(id: BrushInput | null): BrushInputInfo;
        function brush_setting_from_cname(cname: string): BrushSetting;
        function brush_setting_info(id: BrushSetting | null): BrushSettingInfo;
        interface SurfaceBeginAtomicFunction {
            (self: Surface): void;
        }
        interface SurfaceDestroyFunction {
            (self: Surface): void;
        }
        interface SurfaceDrawDabFunction {
            (
                self: Surface,
                x: number,
                y: number,
                radius: number,
                color_r: number,
                color_g: number,
                color_b: number,
                opaque: number,
                hardness: number,
                alpha_eraser: number,
                aspect_ratio: number,
                angle: number,
                lock_alpha: number,
                colorize: number,
            ): number;
        }
        interface SurfaceEndAtomicFunction {
            (self: Surface, roi: Rectangle): void;
        }
        interface SurfaceGetColorFunction {
            (
                self: Surface,
                x: number,
                y: number,
                radius: number,
                color_r: number,
                color_g: number,
                color_b: number,
                color_a: number,
            ): void;
        }
        interface SurfaceSavePngFunction {
            (self: Surface, path: string, x: number, y: number, width: number, height: number): void;
        }
        interface TileRequestEndFunction {
            (self: TiledSurface, request: TileRequest): void;
        }
        interface TileRequestStartFunction {
            (self: TiledSurface, request: TileRequest): void;
        }
        /**
         * The MyPaint brush engine class.
         */
        class Brush {
            static $gtype: GObject.GType<Brush>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): Brush;

            static new_with_buckets(num_smudge_buckets: number): Brush;

            // Static methods

            static input_from_cname(cname: string): BrushInput;
            static setting_from_cname(cname: string): BrushSetting;

            // Methods

            from_defaults(): void;
            from_string(string: string): boolean;
            /**
             * Get the base value of a brush setting.
             * @param id
             */
            get_base_value(id: BrushSetting | null): number;
            /**
             * Returns how many inputs are used for the dynamics of a #MyPaintBrushSetting
             * @param id
             */
            get_inputs_used_n(id: BrushSetting | null): number;
            /**
             * Get the number of points used for the dynamics mapping between a #MyPaintBrushInput and #MyPaintBrushSetting.
             * @param id
             * @param input
             */
            get_mapping_n(id: BrushSetting | null, input: BrushInput | null): number;
            /**
             * Get a X,Y point of a dynamics mapping.
             * @param id
             * @param input
             * @param index
             */
            get_mapping_point(id: BrushSetting | null, input: BrushInput | null, index: number): [number, number];
            /**
             * Get an internal brush engine state.
             * Normally used for debugging, but can be used to implement record & replay functionality.
             * @param i
             */
            get_state(i: BrushState | null): number;
            /**
             * Return the total amount of painting time for the current stroke.
             */
            get_total_stroke_painting_time(): number;
            /**
             * Returns TRUE if the brush has no dynamics for the given #MyPaintBrushSetting
             * @param id
             */
            is_constant(id: BrushSetting | null): boolean;
            /**
             * Start a new stroke.
             */
            new_stroke(): void;
            /**
             * Reset the current brush engine state.
             * Used when the next mypaint_brush_stroke_to() call is not related to the current state.
             * Note that the reset request is queued and changes in state will only happen on next stroke_to()
             */
            reset(): void;
            /**
             * Set the base value of a brush setting.
             * @param id
             * @param value
             */
            set_base_value(id: BrushSetting | null, value: number): void;
            /**
             * Set the number of points used for the dynamics mapping between a #MyPaintBrushInput and #MyPaintBrushSetting.
             * @param id
             * @param input
             * @param n
             */
            set_mapping_n(id: BrushSetting | null, input: BrushInput | null, n: number): void;
            /**
             * Set a X,Y point of a dynamics mapping.
             * The index must be within the number of points set using mypaint_brush_set_mapping_n()
             * @param id
             * @param input
             * @param index
             * @param x
             * @param y
             */
            set_mapping_point(
                id: BrushSetting | null,
                input: BrushInput | null,
                index: number,
                x: number,
                y: number,
            ): void;
            /**
             * Enable/Disable printing of brush engine inputs on stderr. Intended for debugging only.
             * @param enabled
             */
            set_print_inputs(enabled: boolean): void;
            /**
             * Set an internal brush engine state.
             * Normally used for debugging, but can be used to implement record & replay functionality.
             * @param i
             * @param value
             */
            set_state(i: BrushState | null, value: number): void;
            /**
             * Should be called once for each motion event.
             * @param surface
             * @param x
             * @param y
             * @param pressure
             * @param xtilt
             * @param ytilt
             * @param dtime Time since last motion event, in seconds.
             * @returns non-0 if the stroke is finished or empty, else 0.
             */
            stroke_to(
                surface: Surface,
                x: number,
                y: number,
                pressure: number,
                xtilt: number,
                ytilt: number,
                dtime: number,
            ): number;
        }

        class BrushInputInfo {
            static $gtype: GObject.GType<BrushInputInfo>;

            // Fields

            cname: string;
            hard_min: number;
            soft_min: number;
            normal: number;
            soft_max: number;
            hard_max: number;
            name: string;
            tooltip: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    cname: string;
                    hard_min: number;
                    soft_min: number;
                    normal: number;
                    soft_max: number;
                    hard_max: number;
                    name: string;
                    tooltip: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            get_name(): string;
            get_tooltip(): string;
        }

        class BrushSettingInfo {
            static $gtype: GObject.GType<BrushSettingInfo>;

            // Fields

            cname: string;
            name: string;
            constant: boolean;
            min: number;
            def: number;
            max: number;
            tooltip: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    cname: string;
                    name: string;
                    constant: boolean;
                    min: number;
                    def: number;
                    max: number;
                    tooltip: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            get_name(): string;
            get_tooltip(): string;
        }

        /**
         * Simple #MyPaintTiledSurface subclass that implements a fixed sized #MyPaintSurface.
         * Only intended for testing and trivial use-cases, and to serve as an example of
         * how to implement a tiled surface subclass.
         */
        class FixedTiledSurface {
            static $gtype: GObject.GType<FixedTiledSurface>;

            // Constructors

            constructor(width: number, height: number);
            _init(...args: any[]): void;

            static ['new'](width: number, height: number): FixedTiledSurface;

            // Methods

            get_height(): number;
            get_width(): number;
            ['interface'](): Surface;
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

            // Methods

            copy(): Rectangle;
            expand_to_include_point(x: number, y: number): void;
            expand_to_include_rect(other: Rectangle): void;
        }

        class Rectangles {
            static $gtype: GObject.GType<Rectangles>;

            // Fields

            num_rectangles: number;
            rectangles: Rectangle;

            // Constructors

            constructor(
                properties?: Partial<{
                    num_rectangles: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class Surface {
            static $gtype: GObject.GType<Surface>;

            // Fields

            destroy: SurfaceDestroyFunction;
            refcount: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            begin_atomic(): void;
            /**
             * Draw a dab onto the surface.
             * @param x
             * @param y
             * @param radius
             * @param color_r
             * @param color_g
             * @param color_b
             * @param opaque
             * @param hardness
             * @param alpha_eraser
             * @param aspect_ratio
             * @param angle
             * @param lock_alpha
             * @param colorize
             */
            draw_dab(
                x: number,
                y: number,
                radius: number,
                color_r: number,
                color_g: number,
                color_b: number,
                opaque: number,
                hardness: number,
                alpha_eraser: number,
                aspect_ratio: number,
                angle: number,
                lock_alpha: number,
                colorize: number,
            ): number;
            end_atomic(): Rectangle | null;
            get_alpha(x: number, y: number, radius: number): number;
            get_color(
                x: number,
                y: number,
                radius: number,
                color_r: number,
                color_g: number,
                color_b: number,
                color_a: number,
            ): void;
            save_png(path: string, x: number, y: number, width: number, height: number): void;
        }

        class TileRequest {
            static $gtype: GObject.GType<TileRequest>;

            // Fields

            tx: number;
            ty: number;
            readonly: boolean;
            buffer: number;
            context: any;
            thread_id: number;
            mipmap_level: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    tx: number;
                    ty: number;
                    readonly: boolean;
                    buffer: number;
                    context: any;
                    thread_id: number;
                    mipmap_level: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Initialize a request for use with mypaint_tiled_surface_tile_request_start()
             * and mypaint_tiled_surface_tile_request_end()
             * @param level
             * @param tx
             * @param ty
             * @param readonly
             */
            init(level: number, tx: number, ty: number, readonly: boolean): void;
        }

        /**
         * Testing if this comment ends up in the gir.
         */
        class TiledSurface {
            static $gtype: GObject.GType<TiledSurface>;

            // Fields

            surface_do_symmetry: boolean;
            surface_center_x: number;
            operation_queue: any;
            dirty_bbox: Rectangle;
            threadsafe_tile_requests: boolean;
            tile_size: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            get_alpha(x: number, y: number, radius: number): number;
            /**
             * Enable/Disable symmetric brush painting across an X axis.
             * @param active TRUE to enable, FALSE to disable.
             * @param center_x X axis to mirror events across.
             */
            set_symmetry_state(active: boolean, center_x: number): void;
            tile_request_end(request: TileRequest): void;
            tile_request_start(request: TileRequest): void;
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

    export default MyPaint;
}

declare module 'gi://MyPaint' {
    import MyPaint16 from 'gi://MyPaint?version=1.6';
    export default MyPaint16;
}
// END
