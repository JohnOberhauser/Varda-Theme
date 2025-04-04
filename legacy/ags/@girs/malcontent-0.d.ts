/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Malcontent?version=0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Malcontent {
        /**
         * Malcontent-0
         */

        /**
         * Rating values of the intensity of a given section in an app or game.
         * These are directly equivalent to the values in the #AsContentRatingValue
         * enumeration in libappstream.
         */

        /**
         * Rating values of the intensity of a given section in an app or game.
         * These are directly equivalent to the values in the #AsContentRatingValue
         * enumeration in libappstream.
         */
        export namespace AppFilterOarsValue {
            export const $gtype: GObject.GType<AppFilterOarsValue>;
        }

        enum AppFilterOarsValue {
            /**
             * Unknown value for the given
             *    section.
             */
            UNKNOWN,
            /**
             * No rating for the given section.
             */
            NONE,
            /**
             * Mild rating for the given section.
             */
            MILD,
            /**
             * Moderate rating for the given
             *    section.
             */
            MODERATE,
            /**
             * Intense rating for the given
             *    section.
             */
            INTENSE,
        }
        /**
         * Errors relating to get/set operations on an #MctManager instance.
         */
        class ManagerError extends GLib.Error {
            static $gtype: GObject.GType<ManagerError>;

            // Static fields

            /**
             * Given user ID doesn’t exist
             */
            static INVALID_USER: number;
            /**
             * Not authorized to query properties of
             *     the given user
             */
            static PERMISSION_DENIED: number;
            /**
             * The data stored in a property of the given
             *     user is inconsistent or invalid
             */
            static INVALID_DATA: number;
            /**
             * Parental controls are disabled for all users
             */
            static DISABLED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Deserialize an app filter previously serialized with
         * mct_app_filter_serialize(). This function guarantees to be able to
         * deserialize any serialized form from this version or older versions of
         * libmalcontent.
         *
         * If deserialization fails, %MCT_MANAGER_ERROR_INVALID_DATA will be returned.
         * @param variant a serialized app filter variant
         * @param user_id the ID of the user the app filter relates to
         * @returns deserialized app filter
         */
        function app_filter_deserialize(variant: GLib.Variant, user_id: never): AppFilter;
        function app_filter_error_quark(): GLib.Quark;
        function manager_error_quark(): GLib.Quark;
        /**
         * Deserialize a set of session limits previously serialized with
         * mct_session_limits_serialize(). This function guarantees to be able to
         * deserialize any serialized form from this version or older versions of
         * libmalcontent.
         *
         * If deserialization fails, %MCT_MANAGER_ERROR_INVALID_DATA will be returned.
         * @param variant a serialized session limits variant
         * @param user_id the ID of the user the session limits relate to
         * @returns deserialized session limits
         */
        function session_limits_deserialize(variant: GLib.Variant, user_id: never): SessionLimits;
        /**
         * Flags to control the behaviour of getter functions like
         * mct_manager_get_app_filter() and mct_manager_get_app_filter_async().
         */

        /**
         * Flags to control the behaviour of getter functions like
         * mct_manager_get_app_filter() and mct_manager_get_app_filter_async().
         */
        export namespace ManagerGetValueFlags {
            export const $gtype: GObject.GType<ManagerGetValueFlags>;
        }

        enum ManagerGetValueFlags {
            /**
             * No flags set.
             */
            NONE,
            /**
             * Allow interactive polkit dialogs
             *    when requesting authorization.
             */
            INTERACTIVE,
        }
        /**
         * Flags to control the behaviour of setter functions like
         * mct_manager_set_app_filter() and mct_manager_set_app_filter_async().
         */

        /**
         * Flags to control the behaviour of setter functions like
         * mct_manager_set_app_filter() and mct_manager_set_app_filter_async().
         */
        export namespace ManagerSetValueFlags {
            export const $gtype: GObject.GType<ManagerSetValueFlags>;
        }

        enum ManagerSetValueFlags {
            /**
             * No flags set.
             */
            NONE,
            /**
             * Allow interactive polkit dialogs
             *    when requesting authorization.
             */
            INTERACTIVE,
        }
        namespace Manager {
            // Signal callback interfaces

            interface AppFilterChanged {
                (user_id: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connection: Gio.DBusConnection;
            }
        }

        /**
         * #MctManager is a top-level management object which is used to query and
         * monitor #MctAppFilters for different users.
         */
        class Manager extends GObject.Object {
            static $gtype: GObject.GType<Manager>;

            // Properties

            /**
             * A connection to the system bus, where accounts-service runs. It’s provided
             * mostly for testing purposes, or to allow an existing connection to be
             * re-used.
             */
            get connection(): Gio.DBusConnection;

            // Constructors

            constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](connection: Gio.DBusConnection): Manager;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'app-filter-changed', callback: (_source: this, user_id: number) => void): number;
            connect_after(signal: 'app-filter-changed', callback: (_source: this, user_id: number) => void): number;
            emit(signal: 'app-filter-changed', user_id: number): void;

            // Methods

            /**
             * Synchronous version of mct_manager_get_app_filter_async().
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @returns app filter for the queried user
             */
            get_app_filter(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): AppFilter;
            /**
             * Asynchronously get a snapshot of the app filter settings for the given
             * `user_id`.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned.
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             */
            get_app_filter_async(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<AppFilter>;
            /**
             * Asynchronously get a snapshot of the app filter settings for the given
             * `user_id`.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned.
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            get_app_filter_async(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously get a snapshot of the app filter settings for the given
             * `user_id`.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned.
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            get_app_filter_async(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AppFilter> | void;
            /**
             * Finish an asynchronous operation to get the app filter for a user, started
             * with mct_manager_get_app_filter_async().
             * @param result a #GAsyncResult
             * @returns app filter for the queried user
             */
            get_app_filter_finish(result: Gio.AsyncResult): AppFilter;
            /**
             * Synchronous version of mct_manager_get_session_limits_async().
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @returns session limits for the queried user
             */
            get_session_limits(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): SessionLimits;
            /**
             * Asynchronously get a snapshot of the session limit settings for the given
             * `user_id`.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned via mct_manager_get_session_limits_finish().
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             */
            get_session_limits_async(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<SessionLimits>;
            /**
             * Asynchronously get a snapshot of the session limit settings for the given
             * `user_id`.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned via mct_manager_get_session_limits_finish().
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            get_session_limits_async(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously get a snapshot of the session limit settings for the given
             * `user_id`.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned via mct_manager_get_session_limits_finish().
             * @param user_id ID of the user to query, typically coming from getuid()
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            get_session_limits_async(
                user_id: never,
                flags: ManagerGetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<SessionLimits> | void;
            /**
             * Finish an asynchronous operation to get the session limits for a user,
             * started with mct_manager_get_session_limits_async().
             * @param result a #GAsyncResult
             * @returns session limits for the queried user
             */
            get_session_limits_finish(result: Gio.AsyncResult): SessionLimits;
            /**
             * Synchronous version of mct_manager_set_app_filter_async().
             * @param user_id ID of the user to set the filter for, typically coming from getuid()
             * @param app_filter the app filter to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success, %FALSE otherwise
             */
            set_app_filter(
                user_id: never,
                app_filter: AppFilter,
                flags: ManagerSetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously set the app filter settings for the given `user_id` to the
             * given `app_filter` instance. This will set all fields of the app filter.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned. The user’s app filter settings will be left in an undefined state.
             * @param user_id ID of the user to set the filter for, typically coming from getuid()
             * @param app_filter the app filter to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             */
            set_app_filter_async(
                user_id: never,
                app_filter: AppFilter,
                flags: ManagerSetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously set the app filter settings for the given `user_id` to the
             * given `app_filter` instance. This will set all fields of the app filter.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned. The user’s app filter settings will be left in an undefined state.
             * @param user_id ID of the user to set the filter for, typically coming from getuid()
             * @param app_filter the app filter to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            set_app_filter_async(
                user_id: never,
                app_filter: AppFilter,
                flags: ManagerSetValueFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously set the app filter settings for the given `user_id` to the
             * given `app_filter` instance. This will set all fields of the app filter.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned. The user’s app filter settings will be left in an undefined state.
             * @param user_id ID of the user to set the filter for, typically coming from getuid()
             * @param app_filter the app filter to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            set_app_filter_async(
                user_id: never,
                app_filter: AppFilter,
                flags: ManagerSetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finish an asynchronous operation to set the app filter for a user, started
             * with mct_manager_set_app_filter_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE otherwise
             */
            set_app_filter_finish(result: Gio.AsyncResult): boolean;
            /**
             * Synchronous version of mct_manager_set_session_limits_async().
             * @param user_id ID of the user to set the limits for, typically coming from getuid()
             * @param session_limits the session limits to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success, %FALSE otherwise
             */
            set_session_limits(
                user_id: never,
                session_limits: SessionLimits,
                flags: ManagerSetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously set the session limits settings for the given `user_id` to the
             * given `session_limits` instance.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned via mct_manager_set_session_limits_finish(). The user’s session
             * limits settings will be left in an undefined state.
             * @param user_id ID of the user to set the limits for, typically coming from getuid()
             * @param session_limits the session limits to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             */
            set_session_limits_async(
                user_id: never,
                session_limits: SessionLimits,
                flags: ManagerSetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously set the session limits settings for the given `user_id` to the
             * given `session_limits` instance.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned via mct_manager_set_session_limits_finish(). The user’s session
             * limits settings will be left in an undefined state.
             * @param user_id ID of the user to set the limits for, typically coming from getuid()
             * @param session_limits the session limits to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            set_session_limits_async(
                user_id: never,
                session_limits: SessionLimits,
                flags: ManagerSetValueFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously set the session limits settings for the given `user_id` to the
             * given `session_limits` instance.
             *
             * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
             * returned via mct_manager_set_session_limits_finish(). The user’s session
             * limits settings will be left in an undefined state.
             * @param user_id ID of the user to set the limits for, typically coming from getuid()
             * @param session_limits the session limits to set for the user
             * @param flags flags to affect the behaviour of the call
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            set_session_limits_async(
                user_id: never,
                session_limits: SessionLimits,
                flags: ManagerSetValueFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finish an asynchronous operation to set the session limits for a user,
             * started with mct_manager_set_session_limits_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE otherwise
             */
            set_session_limits_finish(result: Gio.AsyncResult): boolean;
        }

        /**
         * #MctAppFilter is an opaque, immutable structure which contains a snapshot of
         * the app filtering settings for a user at a given time. This includes a list
         * of apps which are explicitly banned or allowed to be run by that user.
         *
         * Typically, app filter settings can only be changed by the administrator, and
         * are read-only for non-administrative users. The precise policy is set using
         * polkit.
         */
        abstract class AppFilter {
            static $gtype: GObject.GType<AppFilter>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Deserialize an app filter previously serialized with
             * mct_app_filter_serialize(). This function guarantees to be able to
             * deserialize any serialized form from this version or older versions of
             * libmalcontent.
             *
             * If deserialization fails, %MCT_MANAGER_ERROR_INVALID_DATA will be returned.
             * @param variant a serialized app filter variant
             * @param user_id the ID of the user the app filter relates to
             */
            static deserialize(variant: GLib.Variant, user_id: never): AppFilter;
            static error_quark(): GLib.Quark;

            // Methods

            /**
             * Check whether app filters `a` and `b` are equal.
             * @param b an #MctAppFilter
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise
             */
            equal(b: AppFilter): boolean;
            /**
             * List the OARS sections present in this app filter. The sections are returned
             * in lexicographic order. A section will be listed even if its stored value is
             * %MCT_APP_FILTER_OARS_VALUE_UNKNOWN. The returned list may be empty.
             * @returns %NULL-terminated    array of OARS sections
             */
            get_oars_sections(): string[];
            /**
             * Get the value assigned to the given `oars_section` in the OARS filter stored
             * within `filter`. If that section has no value explicitly defined,
             * %MCT_APP_FILTER_OARS_VALUE_UNKNOWN is returned.
             *
             * This value is the most intense value allowed for apps to have in this
             * section, inclusive. Any app with a more intense value for this section must
             * be hidden from the user whose `filter` this is.
             *
             * This does not factor in mct_app_filter_is_system_installation_allowed().
             * @param oars_section name of the OARS section to get the value from
             * @returns an #MctAppFilterOarsValue
             */
            get_oars_value(oars_section: string): AppFilterOarsValue;
            /**
             * Get the user ID of the user this #MctAppFilter is for.
             * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
             */
            get_user_id(): never;
            /**
             * Check whether the app with the given `app_info` is allowed to be run
             * according to this app filter. This matches on multiple keys potentially
             * present in the #GAppInfo, including the path of the executable.
             *
             * If the appfilter is a blocklist, the `app_info` is blocked if any of its
             * keys are blocked. If the appfilter is an allowlist, the `app_info` is allowed
             * if any of its keys are allowed.
             * @param app_info application information
             * @returns %TRUE if the user this @filter corresponds to is allowed to run the    app represented by @app_info according to the @filter policy; %FALSE    otherwise
             */
            is_appinfo_allowed(app_info: Gio.AppInfo): boolean;
            /**
             * Check whether apps handling the given `content_type` are allowed to be run
             * according to this app filter.
             *
             * Note that this method doesn’t match content subtypes. For example, if
             * `application/xml` is added to the blocklist but `application/xspf+xml` is not,
             * a check for whether `application/xspf+xml` is blocklisted would return false.
             * @param content_type content type to check
             * @returns %TRUE if the user this @filter corresponds to is allowed to run    programs handling @content_type according to the @filter policy;    %FALSE otherwise
             */
            is_content_type_allowed(content_type: string): boolean;
            /**
             * Check whether the app filter is enabled and is going to impose at least one
             * restriction on the user. This gives a high level view of whether app filter
             * parental controls are ‘enabled’ for the given user.
             * @returns %TRUE if the app filter contains at least one non-default value,    %FALSE if it’s entirely default
             */
            is_enabled(): boolean;
            /**
             * Check whether the flatpak app with the given `app_id` is allowed to be run
             * according to this app filter. This is a globbing match, matching `app_id`
             * against potentially multiple entries in the blocklist, as the blocklist
             * contains flatpak refs (for example, `app/org.gnome.Builder/x86_64/master`)
             * which contain architecture and branch information. App IDs (for example,
             * `org.gnome.Builder`) do not contain architecture or branch information.
             * @param app_id flatpak ID for the app, for example `org.gnome.Builder`
             * @returns %TRUE if the user this @filter corresponds to is allowed to run the    flatpak called @app_id according to the @filter policy; %FALSE otherwise
             */
            is_flatpak_app_allowed(app_id: string): boolean;
            /**
             * Check whether the flatpak app with the given `app_ref` is allowed to be run
             * according to this app filter.
             * @param app_ref flatpak ref for the app, for example `app/org.gnome.Builder/x86_64/master`
             * @returns %TRUE if the user this @filter corresponds to is allowed to run the    flatpak called @app_ref according to the @filter policy; %FALSE otherwise
             */
            is_flatpak_ref_allowed(app_ref: string): boolean;
            /**
             * Check whether the program at `path` is allowed to be run according to this
             * app filter. `path` will be canonicalised without doing any I/O.
             * @param path absolute path of a program to check
             * @returns %TRUE if the user this @filter corresponds to is allowed to run the    program at @path according to the @filter policy; %FALSE otherwise
             */
            is_path_allowed(path: string): boolean;
            /**
             * Get whether the user is allowed to install to the flatpak system repository.
             * This should be queried in addition to the OARS values
             * (mct_app_filter_get_oars_value()) — if it returns %FALSE, the OARS values
             * should be ignored and app installation should be unconditionally disallowed.
             * @returns %TRUE if app installation is allowed to the system repository for    this user; %FALSE if it is unconditionally disallowed for this user
             */
            is_system_installation_allowed(): boolean;
            /**
             * Get whether the user is allowed to install to their flatpak user repository.
             * This should be queried in addition to the OARS values
             * (mct_app_filter_get_oars_value()) — if it returns %FALSE, the OARS values
             * should be ignored and app installation should be unconditionally disallowed.
             * @returns %TRUE if app installation is allowed to the user repository for    this user; %FALSE if it is unconditionally disallowed for this user
             */
            is_user_installation_allowed(): boolean;
            /**
             * Increment the reference count of `filter,` and return the same pointer to it.
             * @returns the same pointer as @filter
             */
            ref(): AppFilter;
            /**
             * Build a #GVariant which contains the app filter from `filter,` in an opaque
             * variant format. This format may change in future, but
             * mct_app_filter_deserialize() is guaranteed to always be able to load any
             * variant produced by the current or any previous version of
             * mct_app_filter_serialize().
             * @returns a new, floating #GVariant containing the app    filter
             */
            serialize(): GLib.Variant;
            /**
             * Decrement the reference count of `filter`. If the reference count reaches
             * zero, free the `filter` and all its resources.
             */
            unref(): void;
        }

        /**
         * #MctAppFilterBuilder is a stack-allocated mutable structure used to build an
         * #MctAppFilter instance. Use mct_app_filter_builder_init(), various method
         * calls to set properties of the app filter, and then
         * mct_app_filter_builder_end(), to construct an #MctAppFilter.
         */
        class AppFilterBuilder {
            static $gtype: GObject.GType<AppFilterBuilder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): AppFilterBuilder;

            // Methods

            /**
             * Add `content_type` to the blocklist of content types in the filter under
             * construction. The `content_type` will not be added again if it’s already been
             * added.
             *
             * Note that this method doesn’t handle content subtypes. For example, if
             * `application/xml` is added to the blocklist but `application/xspf+xml` is not,
             * a check for whether `application/xspf+xml` is blocklisted would return false.
             * @param content_type a content type to blocklist
             */
            blocklist_content_type(content_type: string): void;
            /**
             * Add `app_ref` to the blocklist of flatpak refs in the filter under
             * construction. The `app_ref` will not be added again if it’s already been
             * added.
             * @param app_ref a flatpak app ref to blocklist
             */
            blocklist_flatpak_ref(app_ref: string): void;
            /**
             * Add `path` to the blocklist of app paths in the filter under construction. It
             * will be canonicalised (without doing any I/O) before being added.
             * The canonicalised `path` will not be added again if it’s already been added.
             * @param path an absolute path to blocklist
             */
            blocklist_path(path: string): void;
            /**
             * Clear `builder,` freeing any internal state in it. This will not free the
             * top-level storage for `builder` itself, which is assumed to be allocated on
             * the stack.
             *
             * If called on an already-cleared #MctAppFilterBuilder, this function is
             * idempotent.
             */
            clear(): void;
            /**
             * Copy the given `builder` to a newly-allocated #MctAppFilterBuilder on the
             * heap. This is safe to use with cleared, stack-allocated
             * #MctAppFilterBuilders.
             * @returns a copy of @builder
             */
            copy(): AppFilterBuilder;
            /**
             * Finish constructing an #MctAppFilter with the given `builder,` and return it.
             * The #MctAppFilterBuilder will be cleared as if mct_app_filter_builder_clear()
             * had been called.
             * @returns a newly constructed #MctAppFilter
             */
            end(): AppFilter;
            /**
             * Free an #MctAppFilterBuilder originally allocated using
             * mct_app_filter_builder_new(). This must not be called on stack-allocated
             * builders initialised using mct_app_filter_builder_init().
             */
            free(): void;
            /**
             * Initialise the given `builder` so it can be used to construct a new
             * #MctAppFilter. `builder` must have been allocated on the stack, and must not
             * already be initialised.
             *
             * Construct the #MctAppFilter by calling methods on `builder,` followed by
             * mct_app_filter_builder_end(). To abort construction, use
             * mct_app_filter_builder_clear().
             */
            init(): void;
            /**
             * Set whether the user is allowed to install to the flatpak system repository.
             * If this is %TRUE, app installation is still subject to the OARS values
             * (mct_app_filter_builder_set_oars_value()). If it is %FALSE, app installation
             * is unconditionally disallowed for this user.
             * @param allow_system_installation %TRUE to allow app installation; %FALSE to    unconditionally disallow it
             */
            set_allow_system_installation(allow_system_installation: boolean): void;
            /**
             * Set whether the user is allowed to install to their flatpak user repository.
             * If this is %TRUE, app installation is still subject to the OARS values
             * (mct_app_filter_builder_set_oars_value()). If it is %FALSE, app installation
             * is unconditionally disallowed for this user.
             * @param allow_user_installation %TRUE to allow app installation; %FALSE to    unconditionally disallow it
             */
            set_allow_user_installation(allow_user_installation: boolean): void;
            /**
             * Set the OARS value for the given `oars_section,` indicating the intensity of
             * content covered by that section which the user is allowed to see (inclusive).
             * Any apps which have more intense content in this section should not be usable
             * by the user.
             * @param oars_section name of the OARS section to set the value for
             * @param value value to set for the @oars_section
             */
            set_oars_value(oars_section: string, value: AppFilterOarsValue | null): void;
        }

        type ManagerClass = typeof Manager;
        /**
         * #MctSessionLimits is an opaque, immutable structure which contains a snapshot
         * of the session limits settings for a user at a given time. This includes
         * whether session limits are being enforced, and the limit policy — for
         * example, the times of day when a user is allowed to use the computer.
         *
         * Typically, session limits settings can only be changed by the administrator,
         * and are read-only for non-administrative users. The precise policy is set
         * using polkit.
         */
        abstract class SessionLimits {
            static $gtype: GObject.GType<SessionLimits>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Deserialize a set of session limits previously serialized with
             * mct_session_limits_serialize(). This function guarantees to be able to
             * deserialize any serialized form from this version or older versions of
             * libmalcontent.
             *
             * If deserialization fails, %MCT_MANAGER_ERROR_INVALID_DATA will be returned.
             * @param variant a serialized session limits variant
             * @param user_id the ID of the user the session limits relate to
             */
            static deserialize(variant: GLib.Variant, user_id: never): SessionLimits;

            // Methods

            /**
             * Check whether the user has time remaining in which they are allowed to use
             * the computer, assuming that `now_usecs` is the current time, and applying the
             * session limit policy from `limits` to it.
             *
             * This will return whether the user is allowed to use the computer now; further
             * information about the policy and remaining time is provided in
             * `time_remaining_secs_out` and `time_limit_enabled_out`.
             * @param now_usecs current time as microseconds since the Unix epoch (UTC),     typically queried using g_get_real_time()
             * @returns %TRUE if the user this @limits corresponds to is allowed to be in     an active session at the given time; %FALSE otherwise
             */
            check_time_remaining(now_usecs: number): [boolean, number, boolean];
            /**
             * Get the user ID of the user this #MctSessionLimits is for.
             * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
             */
            get_user_id(): never;
            /**
             * Check whether any session limits are enabled and are going to impose at least
             * one restriction on the user. This gives a high level view of whether session
             * limit parental controls are ‘enabled’ for the given user.
             *
             * This function is equivalent to the value returned by the
             * `time_limit_enabled_out` argument of
             * mct_session_limits_check_time_remaining().
             * @returns %TRUE if the session limits object contains at least one restrictive    session limit, %FALSE if there are no limits in place
             */
            is_enabled(): boolean;
            /**
             * Increment the reference count of `limits,` and return the same pointer to it.
             * @returns the same pointer as @limits
             */
            ref(): SessionLimits;
            /**
             * Build a #GVariant which contains the session limits from `limits,` in an
             * opaque variant format. This format may change in future, but
             * mct_session_limits_deserialize() is guaranteed to always be able to load any
             * variant produced by the current or any previous version of
             * mct_session_limits_serialize().
             * @returns a new, floating #GVariant containing the    session limits
             */
            serialize(): GLib.Variant;
            /**
             * Decrement the reference count of `limits`. If the reference count reaches
             * zero, free the `limits` and all its resources.
             */
            unref(): void;
        }

        /**
         * #MctSessionLimitsBuilder is a stack-allocated mutable structure used to build
         * an #MctSessionLimits instance. Use mct_session_limits_builder_init(), various
         * method calls to set properties of the session limits, and then
         * mct_session_limits_builder_end(), to construct an #MctSessionLimits.
         */
        class SessionLimitsBuilder {
            static $gtype: GObject.GType<SessionLimitsBuilder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): SessionLimitsBuilder;

            // Methods

            /**
             * Clear `builder,` freeing any internal state in it. This will not free the
             * top-level storage for `builder` itself, which is assumed to be allocated on
             * the stack.
             *
             * If called on an already-cleared #MctSessionLimitsBuilder, this function is
             * idempotent.
             */
            clear(): void;
            /**
             * Copy the given `builder` to a newly-allocated #MctSessionLimitsBuilder on the
             * heap. This is safe to use with cleared, stack-allocated
             * #MctSessionLimitsBuilders.
             * @returns a copy of @builder
             */
            copy(): SessionLimitsBuilder;
            /**
             * Finish constructing an #MctSessionLimits with the given `builder,` and return
             * it. The #MctSessionLimitsBuilder will be cleared as if
             * mct_session_limits_builder_clear() had been called.
             * @returns a newly constructed #MctSessionLimits
             */
            end(): SessionLimits;
            /**
             * Free an #MctSessionLimitsBuilder originally allocated using
             * mct_session_limits_builder_new(). This must not be called on stack-allocated
             * builders initialised using mct_session_limits_builder_init().
             */
            free(): void;
            /**
             * Initialise the given `builder` so it can be used to construct a new
             * #MctSessionLimits. `builder` must have been allocated on the stack, and must
             * not already be initialised.
             *
             * Construct the #MctSessionLimits by calling methods on `builder,` followed by
             * mct_session_limits_builder_end(). To abort construction, use
             * mct_session_limits_builder_clear().
             */
            init(): void;
            /**
             * Set the session limits in `builder` to be a daily schedule, where sessions are
             * allowed between `start_time_secs` and `end_time_secs` every day.
             * `start_time_secs` and `end_time_secs` are given as offsets from the start of
             * the day, in seconds. `end_time_secs` must be greater than `start_time_secs`.
             * `end_time_secs` must be at most `24 * 60 * 60`.
             *
             * This will overwrite any other session limits.
             * @param start_time_secs number of seconds since midnight when the user’s session     can first start
             * @param end_time_secs number of seconds since midnight when the user’s session can     last end
             */
            set_daily_schedule(start_time_secs: number, end_time_secs: number): void;
            /**
             * Unset any session limits currently set in the `builder`.
             */
            set_none(): void;
        }

        type AppFilterError = ManagerError;
        type GetAppFilterFlags = ManagerGetValueFlags;
        type SetAppFilterFlags = ManagerSetValueFlags;
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

    export default Malcontent;
}

declare module 'gi://Malcontent' {
    import Malcontent0 from 'gi://Malcontent?version=0';
    export default Malcontent0;
}
// END
