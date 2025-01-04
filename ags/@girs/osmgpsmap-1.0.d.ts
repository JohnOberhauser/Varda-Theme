/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://OsmGpsMap?version=1.0' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';

    export namespace OsmGpsMap {
        /**
         * OsmGpsMap-1.0
         */

        export namespace MapKey_t {
            export const $gtype: GObject.GType<MapKey_t>;
        }

        enum MapKey_t {
            FULLSCREEN,
            ZOOMIN,
            ZOOMOUT,
            UP,
            DOWN,
            LEFT,
            RIGHT,
            MAX,
        }

        export namespace MapSource_t {
            export const $gtype: GObject.GType<MapSource_t>;
        }

        enum MapSource_t {
            NULL,
            OPENSTREETMAP,
            OPENSTREETMAP_RENDERER,
            OPENAERIALMAP,
            MAPS_FOR_FREE,
            OPENCYCLEMAP,
            OSM_PUBLIC_TRANSPORT,
            GOOGLE_STREET,
            GOOGLE_SATELLITE,
            GOOGLE_HYBRID,
            VIRTUAL_EARTH_STREET,
            VIRTUAL_EARTH_SATELLITE,
            VIRTUAL_EARTH_HYBRID,
            OSMC_TRAILS,
            LAST,
        }
        const MAP_CACHE_AUTO: string;
        const MAP_CACHE_DISABLED: string;
        const MAP_CACHE_FRIENDLY: string;
        const MAP_INVALID: number;
        module Map {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.DrawingArea.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                auto_center: boolean;
                autoCenter: boolean;
                auto_center_threshold: number;
                autoCenterThreshold: number;
                auto_download: boolean;
                autoDownload: boolean;
                drag_limit: number;
                dragLimit: number;
                gps_track_highlight_radius: number;
                gpsTrackHighlightRadius: number;
                gps_track_point_radius: number;
                gpsTrackPointRadius: number;
                gps_track_width: number;
                gpsTrackWidth: number;
                image_format: string;
                imageFormat: string;
                latitude: number;
                longitude: number;
                map_source: number;
                mapSource: number;
                map_x: number;
                mapX: number;
                map_y: number;
                mapY: number;
                max_zoom: number;
                maxZoom: number;
                min_zoom: number;
                minZoom: number;
                proxy_uri: string;
                proxyUri: string;
                record_trip_history: boolean;
                recordTripHistory: boolean;
                repo_uri: string;
                repoUri: string;
                show_gps_point: boolean;
                showGpsPoint: boolean;
                show_trip_history: boolean;
                showTripHistory: boolean;
                tile_cache: string;
                tileCache: string;
                tile_cache_base: string;
                tileCacheBase: string;
                tile_zoom_offset: number;
                tileZoomOffset: number;
                tiles_queued: number;
                tilesQueued: number;
                user_agent: string;
                userAgent: string;
                zoom: number;
            }
        }

        class Map extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<Map>;

            // Properties

            get auto_center(): boolean;
            set auto_center(val: boolean);
            get autoCenter(): boolean;
            set autoCenter(val: boolean);
            get auto_center_threshold(): number;
            set auto_center_threshold(val: number);
            get autoCenterThreshold(): number;
            set autoCenterThreshold(val: number);
            get auto_download(): boolean;
            set auto_download(val: boolean);
            get autoDownload(): boolean;
            set autoDownload(val: boolean);
            get drag_limit(): number;
            get dragLimit(): number;
            get gps_track_highlight_radius(): number;
            set gps_track_highlight_radius(val: number);
            get gpsTrackHighlightRadius(): number;
            set gpsTrackHighlightRadius(val: number);
            get gps_track_point_radius(): number;
            set gps_track_point_radius(val: number);
            get gpsTrackPointRadius(): number;
            set gpsTrackPointRadius(val: number);
            get gps_track_width(): number;
            set gps_track_width(val: number);
            get gpsTrackWidth(): number;
            set gpsTrackWidth(val: number);
            get image_format(): string;
            get imageFormat(): string;
            get latitude(): number;
            get longitude(): number;
            /**
             * A #OsmGpsMapSource_t representing the tile repository to use
             *
             * <note>
             * <para>
             * If you do not wish to use the default map tiles (provided by OpenStreeMap)
             * it is recommened that you set this property at construction, instead
             * of setting #OsmGpsMap:repo-uri.
             * </para>
             * </note>
             */
            get map_source(): number;
            set map_source(val: number);
            /**
             * A #OsmGpsMapSource_t representing the tile repository to use
             *
             * <note>
             * <para>
             * If you do not wish to use the default map tiles (provided by OpenStreeMap)
             * it is recommened that you set this property at construction, instead
             * of setting #OsmGpsMap:repo-uri.
             * </para>
             * </note>
             */
            get mapSource(): number;
            set mapSource(val: number);
            get map_x(): number;
            get mapX(): number;
            get map_y(): number;
            get mapY(): number;
            get max_zoom(): number;
            get maxZoom(): number;
            get min_zoom(): number;
            get minZoom(): number;
            get proxy_uri(): string;
            get proxyUri(): string;
            get record_trip_history(): boolean;
            set record_trip_history(val: boolean);
            get recordTripHistory(): boolean;
            set recordTripHistory(val: boolean);
            /**
             * A URI string which defines the location and format to fetch tiles
             * for the map. The string is of the format
             * "http://tile.openstreetmap.org/&num;Z/&num;X/&num;Y.png". Characters
             * that begin with &num; are treated as tokens and replaced according to
             * the following rules;
             *
             * <itemizedlist>
             * <listitem>
             * <para>
             * \#X - X-tile, slippy map format
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Y - Y-tile, slippy map format, mercator projection
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Z - Zoom level, where min_zoom &gt;= zoom &lt;= max_zoom
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#S - Zoom level, where -max_zoom &gt;= (zoom-max_zoom) &lt;= min_zoom
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Q - Quad tree format, set of "qrts"
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Q0 - Quad tree format, set of "0123"
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#YS - Not Implemented
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#R - Random integer in range [0,4]
             * </para>
             * </listitem>
             * </itemizedlist>
             *
             * <note>
             * <para>
             * If you do not wish to use the default map tiles (provided by OpenStreeMap)
             * it is recommened that you use one of the predefined map sources, and thus
             * you should construct the map by setting #OsmGpsMap:map-source and not
             * #OsmGpsMap:repo-uri. The #OsmGpsMap:repo-uri property is primarily
             * designed for applications that wish complete control of tile repository
             * management, or wish to use #OsmGpsMap with a tile repository it does not
             * explicitly support.
             * </para>
             * </note>
             */
            get repo_uri(): string;
            /**
             * A URI string which defines the location and format to fetch tiles
             * for the map. The string is of the format
             * "http://tile.openstreetmap.org/&num;Z/&num;X/&num;Y.png". Characters
             * that begin with &num; are treated as tokens and replaced according to
             * the following rules;
             *
             * <itemizedlist>
             * <listitem>
             * <para>
             * \#X - X-tile, slippy map format
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Y - Y-tile, slippy map format, mercator projection
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Z - Zoom level, where min_zoom &gt;= zoom &lt;= max_zoom
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#S - Zoom level, where -max_zoom &gt;= (zoom-max_zoom) &lt;= min_zoom
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Q - Quad tree format, set of "qrts"
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#Q0 - Quad tree format, set of "0123"
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#YS - Not Implemented
             * </para>
             * </listitem>
             * <listitem>
             * <para>
             * \#R - Random integer in range [0,4]
             * </para>
             * </listitem>
             * </itemizedlist>
             *
             * <note>
             * <para>
             * If you do not wish to use the default map tiles (provided by OpenStreeMap)
             * it is recommened that you use one of the predefined map sources, and thus
             * you should construct the map by setting #OsmGpsMap:map-source and not
             * #OsmGpsMap:repo-uri. The #OsmGpsMap:repo-uri property is primarily
             * designed for applications that wish complete control of tile repository
             * management, or wish to use #OsmGpsMap with a tile repository it does not
             * explicitly support.
             * </para>
             * </note>
             */
            get repoUri(): string;
            /**
             * Controls whether the current gps point is shown on the map. Note that
             * for derived classes that implement the draw_gps_point vfunc, if this
             * property is %FALSE
             */
            get show_gps_point(): boolean;
            set show_gps_point(val: boolean);
            /**
             * Controls whether the current gps point is shown on the map. Note that
             * for derived classes that implement the draw_gps_point vfunc, if this
             * property is %FALSE
             */
            get showGpsPoint(): boolean;
            set showGpsPoint(val: boolean);
            get show_trip_history(): boolean;
            set show_trip_history(val: boolean);
            get showTripHistory(): boolean;
            set showTripHistory(val: boolean);
            /**
             * Either a full path or one of the special format URIs
             * #OSM_GPS_MAP_CACHE_DISABLED, #OSM_GPS_MAP_CACHE_AUTO,
             * #OSM_GPS_MAP_CACHE_FRIENDLY. Also see #OsmGpsMap:tile-cache-base for a
             * full understanding.
             *
             * #OSM_GPS_MAP_CACHE_DISABLED disables the on disk tile cache (so all tiles
             * are fetched from the network. #OSM_GPS_MAP_CACHE_AUTO causes the tile
             * cache to be /tile-cache-base/md5(repo-uri), where md5 is the md5sum
             * of #OsmGpsMap:repo-uri. #OSM_GPS_MAP_CACHE_FRIENDLY
             * causes the tile cache to be /tile-cache-base/friendlyname(repo-uri).
             *
             * Any other string is interpreted as a local path, i.e. /path/to/cache
             */
            get tile_cache(): string;
            set tile_cache(val: string);
            /**
             * Either a full path or one of the special format URIs
             * #OSM_GPS_MAP_CACHE_DISABLED, #OSM_GPS_MAP_CACHE_AUTO,
             * #OSM_GPS_MAP_CACHE_FRIENDLY. Also see #OsmGpsMap:tile-cache-base for a
             * full understanding.
             *
             * #OSM_GPS_MAP_CACHE_DISABLED disables the on disk tile cache (so all tiles
             * are fetched from the network. #OSM_GPS_MAP_CACHE_AUTO causes the tile
             * cache to be /tile-cache-base/md5(repo-uri), where md5 is the md5sum
             * of #OsmGpsMap:repo-uri. #OSM_GPS_MAP_CACHE_FRIENDLY
             * causes the tile cache to be /tile-cache-base/friendlyname(repo-uri).
             *
             * Any other string is interpreted as a local path, i.e. /path/to/cache
             */
            get tileCache(): string;
            set tileCache(val: string);
            /**
             * The base directory of the tile cache when you have constructed
             * the map with #OsmGpsMap:tile-cache set to #OSM_GPS_MAP_CACHE_AUTO or
             * #OSM_GPS_MAP_CACHE_FRIENDLY
             *
             * The string is interpreted as a local path, i.e. /path/to/cache. If NULL
             * is supplied, map tiles are cached starting in the users cache directory,
             * (as outlined in the
             * <ulink url="http://www.freedesktop.org/wiki/Specifications/basedir-spec">
             * <citetitle>XDG Base Directory Specification</citetitle></ulink>). To get the
             * base directory where map tiles will be cached call
             * osm_gps_map_get_default_cache_directory()
             */
            get tile_cache_base(): string;
            /**
             * The base directory of the tile cache when you have constructed
             * the map with #OsmGpsMap:tile-cache set to #OSM_GPS_MAP_CACHE_AUTO or
             * #OSM_GPS_MAP_CACHE_FRIENDLY
             *
             * The string is interpreted as a local path, i.e. /path/to/cache. If NULL
             * is supplied, map tiles are cached starting in the users cache directory,
             * (as outlined in the
             * <ulink url="http://www.freedesktop.org/wiki/Specifications/basedir-spec">
             * <citetitle>XDG Base Directory Specification</citetitle></ulink>). To get the
             * base directory where map tiles will be cached call
             * osm_gps_map_get_default_cache_directory()
             */
            get tileCacheBase(): string;
            get tile_zoom_offset(): number;
            get tileZoomOffset(): number;
            /**
             * The number of tiles currently waiting to download. Connect to
             * ::notify::tiles-queued if you want to be informed when this changes
             */
            get tiles_queued(): number;
            /**
             * The number of tiles currently waiting to download. Connect to
             * ::notify::tiles-queued if you want to be informed when this changes
             */
            get tilesQueued(): number;
            /**
             * The default user-agent for downloading tiles from the #OsmGpsMap:map-source
             * is "libosmgpsmap/VERSION". The value of #OsmGpsMap:user-agent will be
             * appended to it.
             */
            get user_agent(): string;
            set user_agent(val: string);
            /**
             * The default user-agent for downloading tiles from the #OsmGpsMap:map-source
             * is "libosmgpsmap/VERSION". The value of #OsmGpsMap:user-agent will be
             * appended to it.
             */
            get userAgent(): string;
            set userAgent(val: string);
            /**
             * The map zoom level. Connect to ::notify::zoom if you want to be informed
             * when this changes.
             */
            get zoom(): number;

            // Constructors

            constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Map;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Static methods

            /**
             * Returns (transfer full): the default cache directory for the library, that is the base
             * directory to which the full cache path is appended. If
             * #OsmGpsMap:tile-cache-base is omitted from the constructor then this value
             * is used.
             */
            static get_default_cache_directory(): string;
            /**
             * Get copyright information for the source
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_get_copyright(source: MapSource_t): string;
            /**
             * Get friendly name for source
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_get_friendly_name(source: MapSource_t): string;
            /**
             * Get tile image format for the source
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_get_image_format(source: MapSource_t): string;
            /**
             * Get maximum zoom level for the source
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_get_max_zoom(source: MapSource_t): number;
            /**
             * Get minimum zoom level for the source
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_get_min_zoom(source: MapSource_t): number;
            /**
             * Get repository URI address for the source
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_get_repo_uri(source: MapSource_t): string;
            /**
             * Check whether source is considered valid
             * @param source a #OsmGpsMapSource_t source id
             */
            static source_is_valid(source: MapSource_t): boolean;

            // Virtual methods

            vfunc_draw_gps_point(cr: cairo.Context): void;

            // Methods

            /**
             * Convert the given location on the globe to the corresponding
             * pixel locations on the map.
             * @param pt location
             */
            convert_geographic_to_screen(pt: MapPoint): [number, number];
            /**
             * Convert the given pixel location on the map into corresponding
             * location on the globe
             * @param pixel_x pixel location on map, x axis
             * @param pixel_y pixel location on map, y axis
             */
            convert_screen_to_geographic(pixel_x: number, pixel_y: number): MapPoint;
            /**
             * Cancels all tiles currently being downloaded. Typically used if you wish to
             * cacel a large number of tiles queued using osm_gps_map_download_maps()
             */
            download_cancel_all(): void;
            /**
             * Downloads all tiles over the supplied zoom range in the rectangular
             * region specified by pt1 (north west corner) to pt2 (south east corner)
             * @param pt1 nort west corner
             * @param pt2 south east corner
             * @param zoom_start start of zoom range
             * @param zoom_end end of zoom range
             */
            download_maps(pt1: MapPoint, pt2: MapPoint, zoom_start: number, zoom_end: number): void;
            /**
             * Returns the geographic locations of the bounding box describing the contents
             * of the current window, i.e the top left and bottom right corners.
             */
            get_bbox(): [MapPoint, MapPoint];
            /**
             * A convenience function for getting the geographic location of events,
             * such as mouse clicks, on the map
             *
             * Free returned point with g_free
             * @param event A #GtkEventButton that occured on the map
             * @returns The point on the globe corresponding to the click
             */
            get_event_location(event: Gdk.EventButton): MapPoint;
            /**
             * Get the scale of the map at the center, in meters/pixel.
             * @returns the scale of the map at the center, in meters/pixel.
             */
            get_scale(): number;
            /**
             * Set current GPS point to given lat/lon point with given heading.
             * If record-trip-history is set, add point to trip history
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             * @param heading GPS degrees or #OSM_GPS_MAP_INVALID to disable showing heading
             */
            gps_add(latitude: number, longitude: number, heading: number): void;
            /**
             * Clear GPS track history
             */
            gps_clear(): void;
            /**
             * Get internal GPS track history
             * @returns The #OsmGpsMapTrack of the internal GPS track, i.e. that which is modified when calling osm_gps_map_gps_add(). You must not free this.
             */
            gps_get_track(): MapTrack;
            /**
             * Creates `OsmGpsMapImage` with given params and adds it to map images
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             * @param image Image pixbuf
             * @returns A #OsmGpsMapImage representing the added pixbuf
             */
            image_add(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf): MapImage;
            /**
             * Creates `OsmGpsMapImage` with given params and adds it to map images
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             * @param image Image pixbuf
             * @param xalign x-align of image
             * @param yalign y-align of image
             * @returns A #OsmGpsMapImage representing the added pixbuf
             */
            image_add_with_alignment(
                latitude: number,
                longitude: number,
                image: GdkPixbuf.Pixbuf,
                xalign: number,
                yalign: number,
            ): MapImage;
            /**
             * Creates `OsmGpsMapImage` with given params and adds it to map images
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             * @param image Image pixbuf
             * @param xalign x-align of image
             * @param yalign y-align of image
             * @param zorder z-order of image
             * @returns A #OsmGpsMapImage representing the added pixbuf
             */
            image_add_with_alignment_z(
                latitude: number,
                longitude: number,
                image: GdkPixbuf.Pixbuf,
                xalign: number,
                yalign: number,
                zorder: number,
            ): MapImage;
            /**
             * Creates `OsmGpsMapImage` with given params and adds it to map images
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             * @param image Image pixbuf
             * @param zorder z-order of image
             * @returns A #OsmGpsMapImage representing the added pixbuf
             */
            image_add_z(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, zorder: number): MapImage;
            /**
             * Remove image from list of images
             * @param image a @OsmGpsMapImage to remove
             * @returns true if image was on list of images
             */
            image_remove(image: MapImage): boolean;
            /**
             * Remove all images from map
             */
            image_remove_all(): void;
            /**
             * Add layer to map
             * @param layer a #OsmGpsMapLayer object
             */
            layer_add(layer: MapLayer): void;
            /**
             * Remove layer from map
             * @param layer a #OsmGpsMapLayer object
             * @returns whether layer was found and removed
             */
            layer_remove(layer: MapLayer): boolean;
            /**
             * Remove all layers from map
             */
            layer_remove_all(): void;
            map_redraw(): boolean;
            map_redraw_idle(): void;
            polygon_add(poly: MapPolygon): void;
            polygon_remove(poly: MapPolygon): boolean;
            polygon_remove_all(): void;
            /**
             * Scrolls the map by `dx,` `dy` pixels (positive north, east)
             * @param dx pixels to scroll in NS (positive: scroll nort, negative: scroll south)
             * @param dy pixels to scroll in EW (positive: scroll east, negative: scroll west)
             */
            scroll(dx: number, dy: number): void;
            /**
             * Set map center, does not change zoom level
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             */
            set_center(latitude: number, longitude: number): void;
            /**
             * Set map center and desired zoom level
             * @param latitude latitude in degrees
             * @param longitude longitude in degrees
             * @param zoom desired zoom level
             */
            set_center_and_zoom(latitude: number, longitude: number, zoom: number): void;
            /**
             * Associates a keyboard shortcut with the supplied `keyval`
             * (as returned by #gdk_keyval_from_name or simiar). The action given in `key`
             * will be triggered when the corresponding `keyval` is pressed. By default
             * no keyboard shortcuts are associated.
             * @param key a #OsmGpsMapKey_t
             * @param keyval a keyval to bind
             */
            set_keyboard_shortcut(key: MapKey_t | null, keyval: number): void;
            /**
             * Set map zoom to the desired zoom level
             * @param zoom Desired zoom level
             * @returns zoom level
             */
            set_zoom(zoom: number): number;
            /**
             * Set tile zoom offset
             * @param zoom_offset tile zoom offset
             */
            set_zoom_offset(zoom_offset: number): void;
            /**
             * Add a track to map
             * @param track a @OsmGpsMapTrack object
             */
            track_add(track: MapTrack): void;
            /**
             * Remove given track from map
             * @param track a #OsmGpsMapTrack object
             */
            track_remove(track: MapTrack): boolean;
            /**
             * Remove all tracks
             */
            track_remove_all(): void;
            /**
             * Zoom and center the map so that both points fit inside the window.
             * @param latitude1 latitude of 1st point in degrees
             * @param latitude2 latitude of 2nd point in degrees
             * @param longitude1 longtitude of 1st point in degrees
             * @param longitude2 longtitude of 2nd point in degrees
             */
            zoom_fit_bbox(latitude1: number, latitude2: number, longitude1: number, longitude2: number): void;
            /**
             * Zoom in by 1 step
             * @returns zoom level
             */
            zoom_in(): number;
            /**
             * Zoom out by 1 step
             * @returns zoom level
             */
            zoom_out(): number;

            // Inherited methods
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

        module MapImage {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                pixbuf: GdkPixbuf.Pixbuf;
                point: MapPoint;
                rotation: number;
                x_align: number;
                xAlign: number;
                y_align: number;
                yAlign: number;
                z_order: number;
                zOrder: number;
            }
        }

        class MapImage extends GObject.Object {
            static $gtype: GObject.GType<MapImage>;

            // Properties

            get pixbuf(): GdkPixbuf.Pixbuf;
            set pixbuf(val: GdkPixbuf.Pixbuf);
            get point(): MapPoint;
            set point(val: MapPoint);
            get rotation(): number;
            set rotation(val: number);
            get x_align(): number;
            set x_align(val: number);
            get xAlign(): number;
            set xAlign(val: number);
            get y_align(): number;
            set y_align(val: number);
            get yAlign(): number;
            set yAlign(val: number);
            get z_order(): number;
            set z_order(val: number);
            get zOrder(): number;
            set zOrder(val: number);

            // Constructors

            constructor(properties?: Partial<MapImage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MapImage;

            // Methods

            /**
             * Draw image to given cairo context
             * @param cr cairo context
             * @param rect bounding rectangle
             */
            draw(cr: cairo.Context, rect: Gdk.Rectangle): Gdk.Rectangle;
            /**
             * Get image location point
             * @returns location point
             */
            get_point(): MapPoint;
            /**
             * Get image rotation
             * @returns rotation
             */
            get_rotation(): number;
            /**
             * Get image z-order
             * @returns z-order
             */
            get_zorder(): number;
            /**
             * Set image rotation
             * @param rot image rotation in degrees
             */
            set_rotation(rot: number): void;
        }

        module MapOsd {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, MapLayer.ConstructorProps {
                dpad_radius: number;
                dpadRadius: number;
                osd_x: number;
                osdX: number;
                osd_y: number;
                osdY: number;
                show_coordinates: boolean;
                showCoordinates: boolean;
                show_copyright: boolean;
                showCopyright: boolean;
                show_crosshair: boolean;
                showCrosshair: boolean;
                show_dpad: boolean;
                showDpad: boolean;
                show_gps_in_dpad: boolean;
                showGpsInDpad: boolean;
                show_gps_in_zoom: boolean;
                showGpsInZoom: boolean;
                show_scale: boolean;
                showScale: boolean;
                show_zoom: boolean;
                showZoom: boolean;
            }
        }

        class MapOsd extends GObject.Object implements MapLayer {
            static $gtype: GObject.GType<MapOsd>;

            // Properties

            /**
             * The dpad radius property.
             */
            get dpad_radius(): number;
            set dpad_radius(val: number);
            /**
             * The dpad radius property.
             */
            get dpadRadius(): number;
            set dpadRadius(val: number);
            /**
             * The osd x property.
             */
            get osd_x(): number;
            set osd_x(val: number);
            /**
             * The osd x property.
             */
            get osdX(): number;
            set osdX(val: number);
            /**
             * The osd y property.
             */
            get osd_y(): number;
            set osd_y(val: number);
            /**
             * The osd y property.
             */
            get osdY(): number;
            set osdY(val: number);
            /**
             * The show coordinates of map centre property.
             */
            get show_coordinates(): boolean;
            set show_coordinates(val: boolean);
            /**
             * The show coordinates of map centre property.
             */
            get showCoordinates(): boolean;
            set showCoordinates(val: boolean);
            /**
             * The show copyright property.
             */
            get show_copyright(): boolean;
            set show_copyright(val: boolean);
            /**
             * The show copyright property.
             */
            get showCopyright(): boolean;
            set showCopyright(val: boolean);
            /**
             * The show crosshair at map centre property.
             */
            get show_crosshair(): boolean;
            set show_crosshair(val: boolean);
            /**
             * The show crosshair at map centre property.
             */
            get showCrosshair(): boolean;
            set showCrosshair(val: boolean);
            /**
             * The show dpad for map navigation property.
             */
            get show_dpad(): boolean;
            set show_dpad(val: boolean);
            /**
             * The show dpad for map navigation property.
             */
            get showDpad(): boolean;
            set showDpad(val: boolean);
            /**
             * The show gps indicator in middle of dpad property.
             */
            get show_gps_in_dpad(): boolean;
            set show_gps_in_dpad(val: boolean);
            /**
             * The show gps indicator in middle of dpad property.
             */
            get showGpsInDpad(): boolean;
            set showGpsInDpad(val: boolean);
            /**
             * The show gps indicator in middle of zoom control property.
             */
            get show_gps_in_zoom(): boolean;
            set show_gps_in_zoom(val: boolean);
            /**
             * The show gps indicator in middle of zoom control property.
             */
            get showGpsInZoom(): boolean;
            set showGpsInZoom(val: boolean);
            /**
             * The show scale on the map property.
             */
            get show_scale(): boolean;
            set show_scale(val: boolean);
            /**
             * The show scale on the map property.
             */
            get showScale(): boolean;
            set showScale(val: boolean);
            /**
             * The show zoom control for map navigation property.
             */
            get show_zoom(): boolean;
            set show_zoom(val: boolean);
            /**
             * The show zoom control for map navigation property.
             */
            get showZoom(): boolean;
            set showZoom(val: boolean);

            // Constructors

            constructor(properties?: Partial<MapOsd.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MapOsd;

            // Inherited methods
            /**
             * Check whether layer is busy (eg drawing an animation)
             * @returns layer busy state
             */
            busy(): boolean;
            /**
             * Handle button event
             * @param map a #OsmGpsMap widget
             * @param event a #GdkEventButton event
             * @returns whether even had been handled
             */
            button_press(map: Map, event: Gdk.EventButton): boolean;
            /**
             * Draw layer on map
             * @param map a #OsmGpsMap widget
             * @param cr a cairo context to draw to
             */
            draw(map: Map, cr: cairo.Context): void;
            /**
             * Render layer on map
             * @param map a #OsmGpsMap widget
             */
            render(map: Map): void;
            /**
             * Check whether layer is busy (eg drawing an animation)
             */
            vfunc_busy(): boolean;
            /**
             * Handle button event
             * @param map a #OsmGpsMap widget
             * @param event a #GdkEventButton event
             */
            vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;
            /**
             * Draw layer on map
             * @param map a #OsmGpsMap widget
             * @param cr a cairo context to draw to
             */
            vfunc_draw(map: Map, cr: cairo.Context): void;
            /**
             * Render layer on map
             * @param map a #OsmGpsMap widget
             */
            vfunc_render(map: Map): void;
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

        module MapPolygon {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                breakable: boolean;
                editable: boolean;
                shade_alpha: number;
                shadeAlpha: number;
                shaded: boolean;
                track: any;
                visible: boolean;
            }
        }

        class MapPolygon extends GObject.Object {
            static $gtype: GObject.GType<MapPolygon>;

            // Properties

            get breakable(): boolean;
            set breakable(val: boolean);
            get editable(): boolean;
            set editable(val: boolean);
            get shade_alpha(): number;
            set shade_alpha(val: number);
            get shadeAlpha(): number;
            set shadeAlpha(val: number);
            get shaded(): boolean;
            set shaded(val: boolean);
            get track(): any;
            set track(val: any);
            get visible(): boolean;
            set visible(val: boolean);

            // Constructors

            constructor(properties?: Partial<MapPolygon.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MapPolygon;

            // Methods

            /**
             * Get track from the polygon
             * @returns The #OsmGpsMapTrack of the polygon
             */
            get_track(): MapTrack;
        }

        module MapTrack {
            // Signal callback interfaces

            interface PointAdded {
                (arg1: MapPoint): void;
            }

            interface PointChanged {
                (object: number): void;
            }

            interface PointInserted {
                (object: number): void;
            }

            interface PointRemoved {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                alpha: number;
                color: Gdk.RGBA;
                editable: boolean;
                line_width: number;
                lineWidth: number;
                track: any;
                visible: boolean;
            }
        }

        class MapTrack extends GObject.Object {
            static $gtype: GObject.GType<MapTrack>;

            // Properties

            get alpha(): number;
            set alpha(val: number);
            get color(): Gdk.RGBA;
            set color(val: Gdk.RGBA);
            get editable(): boolean;
            set editable(val: boolean);
            get line_width(): number;
            set line_width(val: number);
            get lineWidth(): number;
            set lineWidth(val: number);
            get track(): any;
            get visible(): boolean;
            set visible(val: boolean);

            // Constructors

            constructor(properties?: Partial<MapTrack.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MapTrack;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'point-added', callback: (_source: this, arg1: MapPoint) => void): number;
            connect_after(signal: 'point-added', callback: (_source: this, arg1: MapPoint) => void): number;
            emit(signal: 'point-added', arg1: MapPoint): void;
            connect(signal: 'point-changed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'point-changed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'point-changed', object: number): void;
            connect(signal: 'point-inserted', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'point-inserted', callback: (_source: this, object: number) => void): number;
            emit(signal: 'point-inserted', object: number): void;
            connect(signal: 'point-removed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'point-removed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'point-removed', object: number): void;

            // Methods

            /**
             * Add a point to track
             * @param point a #OsmGpsMapPoint point to add
             */
            add_point(point: MapPoint): void;
            /**
             * Get track color
             */
            get_color(): Gdk.RGBA;
            /**
             * Get track length in meters
             * @returns the length of the track in meters.
             */
            get_length(): number;
            /**
             * Get a #OsmGpsMapPoint point at `pos` of given track
             * @param pos Position of the point to get
             * @returns a #OsmGpsMapPoint
             */
            get_point(pos: number): MapPoint;
            /**
             * Get list of points in the track
             * @returns list of #OsmGpsMapPoint
             */
            get_points(): MapPoint[];
            /**
             * Instert point `np` at given postition `pos`
             * @param np a #OsmGpsMapPoint
             * @param pos Position for the point
             */
            insert_point(np: MapPoint, pos: number): void;
            /**
             * Get number of points in the track
             * @returns the number of points in the track.
             */
            n_points(): number;
            /**
             * Remove track point at `pos` position in point list
             * @param pos Position of the point to remove
             */
            remove_point(pos: number): void;
            /**
             * Set track color
             * @param color new track color
             */
            set_color(color: Gdk.RGBA): void;
        }

        type MapClass = typeof Map;
        type MapImageClass = typeof MapImage;
        abstract class MapImagePrivate {
            static $gtype: GObject.GType<MapImagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MapLayerIface = typeof MapLayer;
        type MapOsdClass = typeof MapOsd;
        abstract class MapOsdPrivate {
            static $gtype: GObject.GType<MapOsdPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class MapPoint {
            static $gtype: GObject.GType<MapPoint>;

            // Fields

            rlat: number;
            rlon: number;
            user_data: any;

            // Constructors

            constructor(
                properties?: Partial<{
                    rlat: number;
                    rlon: number;
                    user_data: any;
                }>,
            );
            _init(...args: any[]): void;

            static new_degrees(lat: number, lon: number): MapPoint;

            static new_degrees_with_user_data(lat: number, lon: number, user_data?: any | null): MapPoint;

            static new_radians(rlat: number, rlon: number): MapPoint;

            static new_radians_with_user_data(rlat: number, rlon: number, user_data?: any | null): MapPoint;

            // Methods

            /**
             * Create a copy of a point
             * @returns Copied point
             */
            copy(): MapPoint;
            /**
             * Free point object
             */
            free(): void;
            /**
             * Returns the lagitude and longitude in degrees.
             */
            get_degrees(): [number, number];
            /**
             * Returns the lagitude and longitude in radians.
             */
            get_radians(): [number, number];
            /**
             * Get user data stored in point
             * @returns The #OsmGpsMapPoint user data
             */
            get_user_data(): any | null;
            /**
             * Sets the lagitude and longitude in degrees.
             * @param lat latitude in degrees
             * @param lon longitude in degrees
             */
            set_degrees(lat: number, lon: number): void;
            /**
             * Sets the lagitude and longitude in radians.
             * @param rlat latitude in radians
             * @param rlon longitude in radians
             */
            set_radians(rlat: number, rlon: number): void;
            /**
             * Store user data in point
             * @param user_data user data
             */
            set_user_data(user_data?: any | null): void;
        }

        type MapPolygonClass = typeof MapPolygon;
        abstract class MapPolygonPrivate {
            static $gtype: GObject.GType<MapPolygonPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MapPrivate {
            static $gtype: GObject.GType<MapPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MapTrackClass = typeof MapTrack;
        abstract class MapTrackPrivate {
            static $gtype: GObject.GType<MapTrackPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module MapLayer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface MapLayerNamespace {
            $gtype: GObject.GType<MapLayer>;
            prototype: MapLayer;
        }
        interface MapLayer extends GObject.Object {
            // Methods

            /**
             * Check whether layer is busy (eg drawing an animation)
             * @returns layer busy state
             */
            busy(): boolean;
            /**
             * Handle button event
             * @param map a #OsmGpsMap widget
             * @param event a #GdkEventButton event
             * @returns whether even had been handled
             */
            button_press(map: Map, event: Gdk.EventButton): boolean;
            /**
             * Draw layer on map
             * @param map a #OsmGpsMap widget
             * @param cr a cairo context to draw to
             */
            draw(map: Map, cr: cairo.Context): void;
            /**
             * Render layer on map
             * @param map a #OsmGpsMap widget
             */
            render(map: Map): void;

            // Virtual methods

            /**
             * Check whether layer is busy (eg drawing an animation)
             */
            vfunc_busy(): boolean;
            /**
             * Handle button event
             * @param map a #OsmGpsMap widget
             * @param event a #GdkEventButton event
             */
            vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;
            /**
             * Draw layer on map
             * @param map a #OsmGpsMap widget
             * @param cr a cairo context to draw to
             */
            vfunc_draw(map: Map, cr: cairo.Context): void;
            /**
             * Render layer on map
             * @param map a #OsmGpsMap widget
             */
            vfunc_render(map: Map): void;
        }

        export const MapLayer: MapLayerNamespace & {
            new (): MapLayer; // This allows `obj instanceof MapLayer`
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

    export default OsmGpsMap;
}

declare module 'gi://OsmGpsMap' {
    import OsmGpsMap10 from 'gi://OsmGpsMap?version=1.0';
    export default OsmGpsMap10;
}
// END
