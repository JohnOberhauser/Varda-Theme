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

declare module 'gi://Flatpak?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Flatpak {
        /**
         * Flatpak-1.0
         */

        /**
         * Error codes for library functions.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * App/runtime/remote is already installed
             */
            static ALREADY_INSTALLED: number;
            /**
             * App/runtime is not installed
             */
            static NOT_INSTALLED: number;
            /**
             * App/runtime was only pulled into the local
             *                             repository but not installed.
             */
            static ONLY_PULLED: number;
            /**
             * The App/Runtime is already installed, but from a different remote.
             */
            static DIFFERENT_REMOTE: number;
            /**
             * The transaction was aborted (returned %TRUE in operation-error signal).
             */
            static ABORTED: number;
            /**
             * The App/Runtime install was skipped due to earlier errors.
             */
            static SKIPPED: number;
            /**
             * The App/Runtime needs a more recent version of flatpak.
             */
            static NEED_NEW_FLATPAK: number;
            /**
             * The specified remote was not found.
             */
            static REMOTE_NOT_FOUND: number;
            /**
             * A runtime needed for the app was not found.
             */
            static RUNTIME_NOT_FOUND: number;
            /**
             * The pulled commit is a downgrade, and a downgrade wasn't
             *                           specifically allowed. (Since: 1.0)
             */
            static DOWNGRADE: number;
            /**
             * A ref could not be parsed. (Since: 1.0.3)
             */
            static INVALID_REF: number;
            /**
             * Invalid data. (Since: 1.0.3)
             */
            static INVALID_DATA: number;
            /**
             * Missing GPG key or signature. (Since: 1.0.3)
             */
            static UNTRUSTED: number;
            /**
             * Sandbox setup failed. (Since: 1.0.3)
             */
            static SETUP_FAILED: number;
            /**
             * Exporting data failed. (Since: 1.0.3)
             */
            static EXPORT_FAILED: number;
            /**
             * Remote can't be uninstalled. (Since: 1.0.3)
             */
            static REMOTE_USED: number;
            /**
             * Runtime can't be uninstalled. (Since: 1.0.3)
             */
            static RUNTIME_USED: number;
            /**
             * Application, runtime or remote name is invalid. (Since: 1.0.3)
             */
            static INVALID_NAME: number;
            /**
             * More disk space needed. (Since: 1.2.0)
             */
            static OUT_OF_SPACE: number;
            /**
             * An operation is being attempted by the wrong user (such as
             *                            root operating on a user installation). (Since: 1.2.0)
             */
            static WRONG_USER: number;
            /**
             * Cached data was requested, but it was not available. (Since: 1.4.0)
             */
            static NOT_CACHED: number;
            /**
             * The specified ref was not found. (Since: 1.4.0)
             */
            static REF_NOT_FOUND: number;
            /**
             * An operation was not allowed by the administrative policy.
             *                                   For example, an app is not allowed to be installed due
             *                                   to not complying with the parental controls policy. (Since: 1.5.1)
             */
            static PERMISSION_DENIED: number;
            /**
             * An authentication operation failed, for example, no
             *                                       correct password was supplied. (Since: 1.7.3)
             */
            static AUTHENTICATION_FAILED: number;
            /**
             * An operation tried to access a ref, or information about it that it
             *                                was not authorized. For example, when succesfully authenticating with a
             *                                server but the user doesn't have permissions for a private ref. (Since: 1.7.3)
             */
            static NOT_AUTHORIZED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Error codes returned by portal calls.
         */
        class PortalError extends GLib.Error {
            static $gtype: GObject.GType<PortalError>;

            // Static fields

            /**
             * General portal failure
             */
            static FAILED: number;
            /**
             * An argument was invalid
             */
            static INVALID_ARGUMENT: number;
            /**
             * The object was not found
             */
            static NOT_FOUND: number;
            /**
             * The object already exists
             */
            static EXISTS: number;
            /**
             * The call was not allowed
             */
            static NOT_ALLOWED: number;
            /**
             * The call was cancelled by the user
             */
            static CANCELLED: number;
            /**
             * The window was destroyed by the user
             */
            static WINDOW_DESTROYED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * The kind of artifact that a FlatpakRef refers to.
         */

        /**
         * The kind of artifact that a FlatpakRef refers to.
         */
        export namespace RefKind {
            export const $gtype: GObject.GType<RefKind>;
        }

        enum RefKind {
            /**
             * An application
             */
            APP,
            /**
             * A runtime that applications can use.
             */
            RUNTIME,
        }
        /**
         * Different types of `FlatpakRemote`.
         */

        /**
         * Different types of `FlatpakRemote`.
         */
        export namespace RemoteType {
            export const $gtype: GObject.GType<RemoteType>;
        }

        enum RemoteType {
            /**
             * Statically configured remote
             */
            STATIC,
            /**
             * Dynamically detected local pathname remote
             */
            USB,
            /**
             * Dynamically detected network remote
             */
            LAN,
        }
        /**
         * Information about the storage of an installation.
         */

        /**
         * Information about the storage of an installation.
         */
        export namespace StorageType {
            export const $gtype: GObject.GType<StorageType>;
        }

        enum StorageType {
            /**
             * default
             */
            DEFAULT,
            /**
             * installation is on a hard disk
             */
            HARD_DISK,
            /**
             * installation is on a SD card
             */
            SDCARD,
            /**
             * installation is on an MMC
             */
            MMC,
            /**
             * installation is on the network
             */
            NETWORK,
        }
        /**
         * The type of a #FlatpakTransactionOperation.
         */

        /**
         * The type of a #FlatpakTransactionOperation.
         */
        export namespace TransactionOperationType {
            export const $gtype: GObject.GType<TransactionOperationType>;
        }

        enum TransactionOperationType {
            /**
             * Install a ref from a remote
             */
            INSTALL,
            /**
             * Update an installed ref
             */
            UPDATE,
            /**
             * Install a bundle from a file
             */
            INSTALL_BUNDLE,
            /**
             * Uninstall a ref
             */
            UNINSTALL,
            /**
             * The (currently) last operation type
             */
            LAST_TYPE,
        }
        /**
         * The reason for #FlatpakTransaction::add-new-remote.
         */

        /**
         * The reason for #FlatpakTransaction::add-new-remote.
         */
        export namespace TransactionRemoteReason {
            export const $gtype: GObject.GType<TransactionRemoteReason>;
        }

        enum TransactionRemoteReason {
            /**
             * The remote specified in the flatpakref has other apps too
             */
            GENERIC_REPO,
            /**
             * The remote has runtimes needed for the app
             */
            RUNTIME_DEPS,
        }
        /**
         * The major version.
         */
        const MAJOR_VERSION: number;
        /**
         * The micro version.
         */
        const MICRO_VERSION: number;
        /**
         * The minor version.
         */
        const MINOR_VERSION: number;
        function error_quark(): GLib.Quark;
        /**
         * Returns the canonical name for the arch of the current machine.
         * @returns an arch string
         */
        function get_default_arch(): string;
        /**
         * Returns the canonical names for the arches that are supported (i.e. can run)
         * on the current machine, in order of priority (default is first).
         * @returns a zero terminated array of arch strings
         */
        function get_supported_arches(): string[];
        /**
         * Lists the system installations according to the current configuration and current
         * availability (e.g. doesn't return a configured installation if not reachable).
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakInstallation instances
         */
        function get_system_installations(cancellable?: Gio.Cancellable | null): Installation[];
        function portal_error_quark(): GLib.Quark;
        /**
         * Converts the operation type to a string.
         * @param kind a #FlatpakTransactionOperationType
         * @returns a string representing @kind
         */
        function transaction_operation_type_to_string(kind: TransactionOperationType | null): string;
        interface ProgressCallback {
            (status: string, progress: number, estimating: boolean): void;
        }
        /**
         * Flags to alter the behavior of flatpak_installation_install_full().
         */

        /**
         * Flags to alter the behavior of flatpak_installation_install_full().
         */
        export namespace InstallFlags {
            export const $gtype: GObject.GType<InstallFlags>;
        }

        enum InstallFlags {
            /**
             * Default
             */
            NONE,
            /**
             * Don't use static deltas when pulling
             */
            NO_STATIC_DELTAS,
            /**
             * Don't install any new builds that might be fetched
             */
            NO_DEPLOY,
            /**
             * Don't try to fetch new builds from the remote repo
             */
            NO_PULL,
            /**
             * Don't call triggers after installing. If used,
             * the caller must later call flatpak_installation_run_triggers() to update
             * the exported files. (Since: 1.0.3)
             */
            NO_TRIGGERS,
        }
        /**
         * Flags to alter the behavior of flatpak_installation_launch_full().
         */

        /**
         * Flags to alter the behavior of flatpak_installation_launch_full().
         */
        export namespace LaunchFlags {
            export const $gtype: GObject.GType<LaunchFlags>;
        }

        enum LaunchFlags {
            /**
             * Default
             */
            NONE,
            /**
             * Do not reap the child. Use this if you want to wait
             * for the child with g_child_watch_add(). (Since: 1.1)
             */
            DO_NOT_REAP,
        }
        /**
         * Flags to alter the behavior of e.g flatpak_installation_list_remote_refs_sync_full().
         */

        /**
         * Flags to alter the behavior of e.g flatpak_installation_list_remote_refs_sync_full().
         */
        export namespace QueryFlags {
            export const $gtype: GObject.GType<QueryFlags>;
        }

        enum QueryFlags {
            /**
             * Default
             */
            NONE,
            /**
             * Don't do any network i/o, but only return cached data.
             * This can return stale data, or a #FLATPAK_ERROR_NOT_CACHED error, however it is a
             * lot more efficient if you're doing many requests.
             */
            ONLY_CACHED,
            /**
             * Only list refs available from sideload
             * repos; see flatpak(1). (Since: 1.7)
             */
            ONLY_SIDELOADED,
            /**
             * Include refs from all arches, not just the primary ones. (Since: 1.11.2)
             */
            ALL_ARCHES,
        }
        /**
         * The details for #FlatpakTransaction::operation-error.
         */

        /**
         * The details for #FlatpakTransaction::operation-error.
         */
        export namespace TransactionErrorDetails {
            export const $gtype: GObject.GType<TransactionErrorDetails>;
        }

        enum TransactionErrorDetails {
            /**
             * The operation failure was not fatal
             */
            FATAL,
        }
        /**
         * The details for #FlatpakTransaction::operation-done.
         */

        /**
         * The details for #FlatpakTransaction::operation-done.
         */
        export namespace TransactionResult {
            export const $gtype: GObject.GType<TransactionResult>;
        }

        enum TransactionResult {
            /**
             * The update caused no changes
             */
            CHANGE,
        }
        /**
         * Flags to alter the behavior of flatpak_installation_uninstall_full().
         */

        /**
         * Flags to alter the behavior of flatpak_installation_uninstall_full().
         */
        export namespace UninstallFlags {
            export const $gtype: GObject.GType<UninstallFlags>;
        }

        enum UninstallFlags {
            /**
             * Default
             */
            NONE,
            /**
             * Don't prune the local OSTree repository after uninstalling
             */
            NO_PRUNE,
            /**
             * Don't call triggers after uninstalling. If used,
             * the caller must later call flatpak_installation_run_triggers() to update
             * the exported file. (Since: 1.0.3)
             */
            NO_TRIGGERS,
        }
        /**
         * Flags to alter the behavior of flatpak_installation_update().
         */

        /**
         * Flags to alter the behavior of flatpak_installation_update().
         */
        export namespace UpdateFlags {
            export const $gtype: GObject.GType<UpdateFlags>;
        }

        enum UpdateFlags {
            /**
             * Fetch remote builds and install the latest one (default)
             */
            NONE,
            /**
             * Don't install any new builds that might be fetched
             */
            NO_DEPLOY,
            /**
             * Don't try to fetch new builds from the remote repo
             */
            NO_PULL,
            /**
             * Don't use static deltas when pulling
             */
            NO_STATIC_DELTAS,
            /**
             * Don't prune the local OSTree repository after updating (Since: 0.11.8)
             */
            NO_PRUNE,
            /**
             * Don't call triggers after updating. If used,
             * the caller must later call flatpak_installation_run_triggers() to update
             * the exported files. (Since: 1.0.3)
             */
            NO_TRIGGERS,
        }
        module BundleRef {
            // Constructor properties interface

            interface ConstructorProps extends Ref.ConstructorProps {
                file: Gio.File;
            }
        }

        class BundleRef extends Ref {
            static $gtype: GObject.GType<BundleRef>;

            // Properties

            /**
             * The bundle file that this ref refers to.
             */
            get file(): Gio.File;

            // Constructors

            constructor(properties?: Partial<BundleRef.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](file: Gio.File): BundleRef;

            // Methods

            /**
             * Get the compressed appstream for the app/runtime
             * @returns an #GBytes with the appstream contents, or %NULL
             */
            get_appstream(): GLib.Bytes;
            /**
             * Get the file this bundle is stored in.
             * @returns an #GFile
             */
            get_file(): Gio.File;
            /**
             * Get the icon png data for the app/runtime
             * @param size 64 or 128
             * @returns an #GBytes with png contents
             */
            get_icon(size: number): GLib.Bytes;
            /**
             * Returns the installed size for the bundle.
             * @returns the installed size
             */
            get_installed_size(): number;
            /**
             * Get the metadata for the app/runtime
             * @returns an #GBytes with the metadata contents, or %NULL
             */
            get_metadata(): GLib.Bytes;
            /**
             * Get the origin url stored in the bundle
             * @returns an url string, or %NULL
             */
            get_origin(): string;
            /**
             * Get the runtime flatpakrepo url stored in the bundle (if any)
             * @returns an url string, or %NULL
             */
            get_runtime_repo_url(): string;
        }

        module Installation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Installation extends GObject.Object {
            static $gtype: GObject.GType<Installation>;

            // Constructors

            constructor(properties?: Partial<Installation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_path(path: Gio.File, user: boolean, cancellable?: Gio.Cancellable | null): Installation;

            static new_system(cancellable?: Gio.Cancellable | null): Installation;

            static new_system_with_id(id?: string | null, cancellable?: Gio.Cancellable | null): Installation;

            static new_user(cancellable?: Gio.Cancellable | null): Installation;

            // Methods

            /**
             * Adds a new `remote` object to the set of remotes. This is similar
             * to flatpak_installation_modify_remote() for non-existing remote
             * names. However, if the named remote already exists then instead of
             * modifying it it fails with %FLATPAK_ERROR_ALREADY_INSTALLED, or if
             * `if_needed` is true it silently succeeds without doing anything.
             *
             * As an exception to the last, if the local config has a filter defined,
             * but the new remote unsets the filter (for example, it comes from an
             * unfiltered .flatpakref via flatpak_remote_new_from_file()) the the local
             * remote filter gets reset. This is to allow the setup where there is a
             * default setup of a filtered remote, yet you can still use the standard
             * flatpakref file to get the full contents without getting two remotes.
             * @param remote the new #FlatpakRemote
             * @param if_needed if %TRUE, only add if it doesn't exists
             * @param cancellable a #GCancellable
             * @returns %TRUE if the modifications have been committed successfully
             */
            add_remote(remote: Remote, if_needed: boolean, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Remove all OSTree refs from the local flatpak repository which are not
             * in a deployed state. The next time the underlying OSTree repo is pruned,
             * objects which were attached to that ref will be removed. This is useful if
             * you pulled a flatpak refs using flatpak_installation_install_full() and
             * specified %FLATPAK_INSTALL_FLAGS_NO_DEPLOY but then decided not to
             * deploy the refs later on and want to remove the local refs to prevent them
             * from taking up disk space. Note that this will not remove the objects
             * referred to by `ref` from the underlying OSTree repo, you should use
             * flatpak_installation_prune_local_repo() to do that.
             * @param cancellable a #GCancellable
             * @returns %TRUE on success
             */
            cleanup_local_refs_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets monitor object for the installation. The returned file monitor will
             * emit the #GFileMonitor::changed signal whenever an application or runtime
             * was installed, uninstalled or updated.
             * @param cancellable a #GCancellable
             * @returns a new #GFileMonitor instance, or %NULL on error
             */
            create_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
            /**
             * Drops all internal (in-memory) caches. For instance, this may be needed to pick up new or changed
             * remotes configured outside this installation instance.
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, %FALSE on error
             */
            drop_caches(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Obtains the metadata file from a commit.
             *
             * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
             * function is not very useful anymore.
             * @param remote_name the name of the remote
             * @param ref the ref
             * @param cancellable a #GCancellable
             * @returns a #GBytes containing the flatpak metadata file,   or %NULL if an error occurred
             */
            fetch_remote_metadata_sync(remote_name: string, ref: Ref, cancellable?: Gio.Cancellable | null): GLib.Bytes;
            /**
             * Gets the current remote branch of a ref in the remote.
             * @param remote_name the name of the remote
             * @param kind what this ref contains (an #FlatpakRefKind)
             * @param name name of the app/runtime to fetch
             * @param arch which architecture to fetch (default: current architecture)
             * @param branch which branch to fetch (default: 'master')
             * @param cancellable a #GCancellable
             * @returns a #FlatpakRemoteRef instance, or %NULL
             */
            fetch_remote_ref_sync(
                remote_name: string,
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): RemoteRef;
            /**
             * Gets the current remote branch of a ref in the remote.
             * @param remote_name the name of the remote
             * @param kind what this ref contains (an #FlatpakRefKind)
             * @param name name of the app/runtime to fetch
             * @param arch which architecture to fetch (default: current architecture)
             * @param branch which branch to fetch (default: 'master')
             * @param flags set of #FlatpakQueryFlags
             * @param cancellable a #GCancellable
             * @returns a #FlatpakRemoteRef instance, or %NULL
             */
            fetch_remote_ref_sync_full(
                remote_name: string,
                kind: RefKind | null,
                name: string,
                arch: string | null,
                branch: string | null,
                flags: QueryFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): RemoteRef;
            /**
             * Gets information about the maximum amount of data that needs to be transferred
             * to pull the ref from a remote repository, and about the amount of
             * local disk space that is required to check out this commit.
             *
             * Note that if there are locally available data that are in the ref, which is common
             * for instance if you're doing an update then the real download size may be smaller
             * than what is returned here.
             *
             * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
             * function is not very useful anymore.
             * @param remote_name the name of the remote
             * @param ref the ref
             * @param cancellable a #GCancellable
             * @returns %TRUE, unless an error occurred
             */
            fetch_remote_size_sync(
                remote_name: string,
                ref: Ref,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number, number];
            /**
             * Get a global configuration option for the installation, see
             * flatpak_installation_set_config_sync() for supported keys.
             * @param key the name of the key to get
             * @param cancellable a #GCancellable
             * @returns The (newly allocated) value, or %NULL on error (%G_KEY_FILE_ERROR_KEY_NOT_FOUND error if key is not set)
             */
            get_config(key: string, cancellable?: Gio.Cancellable | null): string;
            /**
             * Get the last build of reference `name` that was installed with
             * flatpak_installation_install(), or %NULL if the reference has
             * never been installed locally.
             * @param name the name of the app
             * @param cancellable a #GCancellable
             * @returns an #FlatpakInstalledRef
             */
            get_current_installed_app(name: string, cancellable?: Gio.Cancellable | null): InstalledRef;
            /**
             * Get the default languages used by the installation to decide which
             * subpaths to install of locale extensions. This list may also be used
             * by frontends like GNOME Software to decide which language-specific apps
             * to display. An empty array means that all languages should be installed.
             * @returns A possibly empty array of strings, or %NULL on error.
             */
            get_default_languages(): string[];
            /**
             * Like flatpak_installation_get_default_languages() but includes territory
             * information (e.g. `en_US` rather than `en`) which may be included in the
             * `extra-languages` configuration.
             *
             * Strings returned by this function are in the format specified by
             * [`setlocale()`](man:setlocale): `language[_territory][.codeset][`modifier]``.
             * @returns A possibly empty array of locale strings, or %NULL on error.
             */
            get_default_locales(): string[];
            /**
             * Returns the display name of the installation for `self`.
             *
             * Note that this function may return %NULL if the installation
             * does not have a display name.
             * @returns a string with the installation's display name
             */
            get_display_name(): string;
            /**
             * Returns the ID of the installation for `self`.
             *
             * The ID for the default system installation is "default".
             * The ID for the user installation is "user".
             * @returns a string with the installation's ID
             */
            get_id(): string;
            /**
             * Returns information about an installed ref, such as the available builds,
             * its size, location, etc.
             * @param kind whether this is an app or runtime
             * @param name name of the app/runtime to fetch
             * @param arch which architecture to fetch (default: current architecture)
             * @param branch which branch to fetch (default: "master")
             * @param cancellable a #GCancellable
             * @returns an #FlatpakInstalledRef, or %NULL if an error occurred
             */
            get_installed_ref(
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): InstalledRef;
            /**
             * Returns whether the installation is for a user-specific location.
             * @returns %TRUE if @self is a per-user installation
             */
            get_is_user(): boolean;
            /**
             * Returns the min-free-space config value from the OSTree repository of this installation.
             *
             * Applications can use this value, together with information about the available
             * disk space and the size of pending updates or installs, to estimate whether a
             * pull operation will fail due to running out of disk space.
             * @returns %TRUE on success, or %FALSE on error.
             */
            get_min_free_space_bytes(): [boolean, number];
            /**
             * Returns the value set with flatpak_installation_set_no_interaction().
             * @returns %TRUE if interactive authorization dialogs are not allowed
             */
            get_no_interaction(): boolean;
            /**
             * Returns the installation location for `self`.
             * @returns an #GFile
             */
            get_path(): Gio.File;
            /**
             * Returns the numeric priority of the installation for `self`.
             * @returns an integer with the configured priority value
             */
            get_priority(): number;
            /**
             * Looks up a remote by name.
             * @param name a remote name
             * @param cancellable a #GCancellable
             * @returns a #FlatpakRemote instance, or %NULL with @error   set
             */
            get_remote_by_name(name: string, cancellable?: Gio.Cancellable | null): Remote;
            /**
             * Returns the type of storage of the installation for `self`.
             * @returns a #FlatpakStorageType
             */
            get_storage_type(): StorageType;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_install()
             * instead. It has a lot more interesting features.
             *
             * Install a new application or runtime.
             *
             * Note that this function was originally written to always return a
             * #FlatpakInstalledRef. Since 0.9.13, passing
             * FLATPAK_INSTALL_FLAGS_NO_DEPLOY will only pull refs into the local flatpak
             * repository without deploying them, however this function will
             * be unable to provide information on the installed ref, so
             * FLATPAK_ERROR_ONLY_PULLED will be set and the caller must respond
             * accordingly.
             * @param remote_name name of the remote to use
             * @param kind what this ref contains (an #FlatpakRefKind)
             * @param name name of the app/runtime to fetch
             * @param arch which architecture to fetch (default: current architecture)
             * @param branch which branch to fetch (default: 'master')
             * @param cancellable a #GCancellable
             * @returns The ref for the newly installed app or %NULL on failure
             */
            install(
                remote_name: string,
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): InstalledRef;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_install_bundle()
             * instead. It has a lot more interesting features.
             *
             * Install an application or runtime from an flatpak bundle file.
             * See flatpak-build-bundle(1) for how to create bundles.
             * @param file a #GFile that is an flatpak bundle
             * @param cancellable a #GCancellable
             * @returns The ref for the newly installed app or %NULL on failure
             */
            install_bundle(file: Gio.File, cancellable?: Gio.Cancellable | null): InstalledRef;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_install()
             * instead. It has a lot more interesting features.
             *
             * Install a new application or runtime.
             *
             * Note that this function was originally written to always return a
             * #FlatpakInstalledRef. Since 0.9.13, passing
             * FLATPAK_INSTALL_FLAGS_NO_DEPLOY will only pull refs into the local flatpak
             * repository without deploying them, however this function will
             * be unable to provide information on the installed ref, so
             * FLATPAK_ERROR_ONLY_PULLED will be set and the caller must respond
             * accordingly.
             * @param flags set of #FlatpakInstallFlags flag
             * @param remote_name name of the remote to use
             * @param kind what this ref contains (an #FlatpakRefKind)
             * @param name name of the app/runtime to fetch
             * @param arch which architecture to fetch (default: current architecture)
             * @param branch which branch to fetch (default: 'master')
             * @param subpaths A list of subpaths to fetch, or %NULL for everything
             * @param cancellable a #GCancellable
             * @returns The ref for the newly installed app or %NULL on failure
             */
            install_full(
                flags: InstallFlags | null,
                remote_name: string,
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                subpaths?: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): InstalledRef;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_install_flatpakref()
             * instead. It has a lot more interesting features.
             *
             * Creates a remote based on the passed in .flatpakref file contents
             * in `ref_file_data` and returns the #FlatpakRemoteRef that can be used
             * to install it.
             *
             * Note, the #FlatpakRemoteRef will not have the commit field set, or other details, to
             * avoid unnecessary roundtrips. If you need that you have to resolve it
             * explicitly with flatpak_installation_fetch_remote_ref_sync ().
             * @param ref_file_data The ref file contents
             * @param cancellable a #GCancellable
             * @returns a #FlatpakRemoteRef if the remote has been added successfully, %NULL on error.
             */
            install_ref_file(ref_file_data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): RemoteRef;
            /**
             * Launch an installed application.
             *
             * You can use flatpak_installation_get_installed_ref() or
             * flatpak_installation_get_current_installed_app() to find out what builds
             * are available, in order to get a value for `commit`.
             * @param name name of the app to launch
             * @param arch which architecture to launch (default: current architecture)
             * @param branch which branch of the application (default: "master")
             * @param commit the commit of @branch to launch
             * @param cancellable a #GCancellable
             * @returns %TRUE, unless an error occurred
             */
            launch(
                name: string,
                arch?: string | null,
                branch?: string | null,
                commit?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Launch an installed application.
             *
             * You can use flatpak_installation_get_installed_ref() or
             * flatpak_installation_get_current_installed_app() to find out what builds
             * are available, in order to get a value for `commit`.
             *
             * Compared to flatpak_installation_launch(), this function returns a #FlatpakInstance
             * that can be used to get information about the running instance. You can also use
             * it to wait for the instance to be done with g_child_watch_add() if you pass the
             * #FLATPAK_LAUNCH_FLAGS_DO_NOT_REAP flag.
             * @param flags set of #FlatpakLaunchFlags
             * @param name name of the app to launch
             * @param arch which architecture to launch (default: current architecture)
             * @param branch which branch of the application (default: "master")
             * @param commit the commit of @branch to launch
             * @param instance_out return location for a #FlatpakInstance
             * @param cancellable a #GCancellable
             * @returns %TRUE, unless an error occurred
             */
            launch_full(
                flags: LaunchFlags | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                commit?: string | null,
                instance_out?: Instance | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Lists the installed references.
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakInstalledRef instances
             */
            list_installed_refs(cancellable?: Gio.Cancellable | null): InstalledRef[];
            /**
             * Lists the installed references of a specific kind.
             * @param kind the kind of installation
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakInstalledRef instances
             */
            list_installed_refs_by_kind(kind: RefKind | null, cancellable?: Gio.Cancellable | null): InstalledRef[];
            /**
             * Lists the installed apps and runtimes that have an update available, either
             * from the configured remote or locally available but not deployed (see
             * flatpak_transaction_set_no_deploy()).
             *
             * This also checks if any of #FlatpakInstalledRef has a missing #FlatpakRelatedRef
             * (which has `should-download` set to %TRUE) or runtime. If so, it adds the
             * ref to the returning #GPtrArray to pull in the #FlatpakRelatedRef or runtime
             * again via an update operation in #FlatpakTransaction.
             *
             * In case more than one app needs an update of the same runtime or extension,
             * this function will return all of those apps.
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakInstalledRef instances, or %NULL on error
             */
            list_installed_refs_for_update(cancellable?: Gio.Cancellable | null): InstalledRef[];
            /**
             * Lists all the locally installed refs that are related to `ref`. These are
             * things that are interesting to install, update, or uninstall together with
             * `ref`. For instance, locale data or debug information.
             *
             * Note that while the related refs are usually installed from the same remote
             * as `ref` (`remote_name)`, it is possible they were installed from another
             * remote.
             *
             * This function is similar to flatpak_installation_list_remote_related_refs_sync,
             * but instead of looking at what is available on the remote, it only looks
             * at the locally installed refs. This is useful for instance when you're
             * looking for related refs to uninstall, or when you're planning to use
             * FLATPAK_UPDATE_FLAGS_NO_PULL to install previously pulled refs.
             * @param remote_name the name of the remote providing @ref
             * @param ref the ref
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRelatedRef instances
             */
            list_installed_related_refs_sync(
                remote_name: string,
                ref: string,
                cancellable?: Gio.Cancellable | null,
            ): RelatedRef[];
            /**
             * Lists the installed references that are pinned, meaning they will not be
             * returned by flatpak_installation_list_unused_refs() and won't be removed
             * unless explicitly specified for removal.
             *
             * Refs appear here either because they have been pinned automatically by
             * Flatpak or because the user pinned them; see flatpak-pin(1).
             * @param arch if non-%NULL, the architecture of refs to collect
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakInstalledRef instances
             */
            list_pinned_refs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[];
            /**
             * Lists all the applications and runtimes in a remote.
             * @param remote_or_uri the name or URI of the remote
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRemoteRef instances
             */
            list_remote_refs_sync(remote_or_uri: string, cancellable?: Gio.Cancellable | null): RemoteRef[];
            /**
             * Lists all the applications and runtimes in a remote.
             * @param remote_or_uri the name or URI of the remote
             * @param flags set of #FlatpakQueryFlags
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRemoteRef instances
             */
            list_remote_refs_sync_full(
                remote_or_uri: string,
                flags: QueryFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): RemoteRef[];
            /**
             * Lists all the available refs on `remote_name` that are related to `ref,` and
             * which are appropriate for the installed version of `ref`. For example if the
             * installed version of org.videolan.VLC has a related ref of
             * org.videolan.VLC.Plugin.bdj//3-19.08 and the remote version of VLC has a
             * related ref of org.videolan.VLC.Plugin.bdj//3-20.08, this function will only
             * return the 3-19.08 branch.
             *
             * See also the related functions
             * flatpak_installation_list_remote_related_refs_sync() and
             * flatpak_installation_list_installed_related_refs_sync().
             *
             * The returned list contains all available related refs, but not
             * every one should always be installed. For example,
             * flatpak_related_ref_should_download() returns %TRUE if the
             * reference should be installed/updated with the app, and
             * flatpak_related_ref_should_delete() returns %TRUE if it
             * should be uninstalled with the main ref.
             *
             * The commit property of each #FlatpakRelatedRef is not guaranteed to be
             * non-%NULL.
             * @param remote_name the name of the remote
             * @param ref the ref
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRelatedRef instances
             */
            list_remote_related_refs_for_installed_sync(
                remote_name: string,
                ref: string,
                cancellable?: Gio.Cancellable | null,
            ): RelatedRef[];
            /**
             * Lists all the available refs on `remote_name` that are related to
             * `ref,` and the subpaths to use. These are things that are
             * interesting to install, update, or uninstall together with
             * `ref`. For instance, locale data or debug information.
             *
             * The returned list contains all available related refs, but not
             * every one should always be installed. For example,
             * flatpak_related_ref_should_download() returns %TRUE if the
             * reference should be installed/updated with the app, and
             * flatpak_related_ref_should_delete() returns %TRUE if it
             * should be uninstalled with the main ref.
             *
             * The commit property of each #FlatpakRelatedRef is not guaranteed to be
             * non-%NULL.
             * @param remote_name the name of the remote
             * @param ref the ref
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRelatedRef instances
             */
            list_remote_related_refs_sync(
                remote_name: string,
                ref: string,
                cancellable?: Gio.Cancellable | null,
            ): RelatedRef[];
            /**
             * Lists the static remotes, in priority (highest first) order. For same
             * priority, an earlier added remote comes before a later added one.
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRemote instances
             */
            list_remotes(cancellable?: Gio.Cancellable | null): Remote[];
            /**
             * Lists only the remotes whose type is included in the `types` argument.
             *
             * Since flatpak 1.7 this will never return any types except FLATPAK_REMOTE_TYPE_STATIC.
             * Equivalent functionallity to FLATPAK_REMOTE_TYPE_USB can be had by listing remote refs
             * with FLATPAK_QUERY_FLAGS_ONLY_SIDELOADED.
             * @param types an array of #FlatpakRemoteType
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakRemote instances
             */
            list_remotes_by_type(types: RemoteType[] | null, cancellable?: Gio.Cancellable | null): Remote[];
            /**
             * Lists the installed references that are not 'used'.
             *
             * A reference is used if it is either an application,
             * or the runtime or sdk of a used ref, or an extension of a used ref.
             * Pinned runtimes are also considered used; see flatpak-pin(1) and
             * flatpak_installation_list_pinned_refs().
             * @param arch if non-%NULL, the architecture of refs to collect
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakInstalledRef instances
             */
            list_unused_refs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[];
            /**
             * Like flatpak_installation_list_unused_refs() but supports an extensible set
             * of options as well as an `metadata_injection` parameter. The following are
             * currently defined:
             *
             *   * exclude-refs (as): Act as if these refs are not installed even if they
             *       are when determining the set of unused refs
             *   * filter-by-eol (b): Return refs as unused if they are End-Of-Life.
             *       Note that if this option is combined with other filters then non-EOL refs may also be returned.
             *   * filter-by-autoprune (b): Return refs as unused if they should be autopruned.
             *       Note that if this option is combined with other filters then non-autoprune refs may also be returned.
             * @param arch if non-%NULL, the architecture of refs to collect
             * @param metadata_injection if non-%NULL, a #GHashTable mapping refs to                                  #GKeyFile objects, which when available will                                  be used instead of installed metadata
             * @param options if non-%NULL, a GVariant a{sv} with an extensible set                       of options
             * @param cancellable a #GCancellable
             * @returns a GPtrArray of   #FlatpakInstalledRef instances
             */
            list_unused_refs_with_options(
                arch?: string | null,
                metadata_injection?: GLib.HashTable<any, any> | null,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): InstalledRef[];
            /**
             * Loads the metadata overrides file for an application.
             * @param app_id an application id
             * @param cancellable a #GCancellable
             * @returns the contents of the overrides files,    or %NULL if an error occurred
             */
            load_app_overrides(app_id: string, cancellable?: Gio.Cancellable | null): string;
            /**
             * Saves changes in the `remote` object.
             * @param remote the modified #FlatpakRemote
             * @param cancellable a #GCancellable
             * @returns %TRUE if the modifications have been committed successfully
             */
            modify_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Remove all orphaned OSTree objects from the underlying OSTree repo in
             * `self`.
             * @param cancellable a #GCancellable
             * @returns %TRUE on success
             */
            prune_local_repo(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Remove the OSTree ref given by `remote_name:``ref` from the local flatpak
             * repository. The next time the underlying OSTree repo is pruned, objects
             * which were attached to that ref will be removed. This is useful if you
             * pulled a flatpak ref using flatpak_installation_install_full() and
             * specified %FLATPAK_INSTALL_FLAGS_NO_DEPLOY but then decided not to
             * deploy the ref later on and want to remove the local ref to prevent it
             * from taking up disk space. Note that this will not remove the objects
             * referred to by `ref` from the underlying OSTree repo, you should use
             * flatpak_installation_prune_local_repo() to do that.
             * @param remote_name the name of the remote
             * @param ref the ref
             * @param cancellable a #GCancellable
             * @returns %TRUE on success
             */
            remove_local_ref_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes the remote with the given name from the installation.
             * @param name the name of the remote to remove
             * @param cancellable a #GCancellable
             * @returns %TRUE if the remote has been removed successfully
             */
            remove_remote(name: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Run the trigger commands to update the files exported by the apps in
             * `self`. Should be used after one or more app install, upgrade or
             * uninstall operations with the %FLATPAK_INSTALL_FLAGS_NO_TRIGGERS,
             * %FLATPAK_UPDATE_FLAGS_NO_TRIGGERS or %FLATPAK_UNINSTALL_FLAGS_NO_TRIGGERS
             * flags set.
             * @param cancellable a #GCancellable
             * @returns %TRUE on success
             */
            run_triggers(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set a global configuration option for the installation, currently
             * the only supported keys are `languages`, which is a semicolon-separated
             * list of language codes like `"sv;en;pl"`, or `""` to mean all languages,
             * and `extra-languages`, which is a semicolon-separated list of locale
             * identifiers like `"en;en_DK;zh_HK.big5hkscs;uz_UZ.utf8`cyrillic"``.
             * @param key the name of the key to set
             * @param value the new value, or %NULL to unset
             * @param cancellable a #GCancellable
             * @returns %TRUE if the option was set correctly
             */
            set_config_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * This method can be used to prevent interactive authorization dialogs to appear
             * for operations on `self`. This is useful for background operations that are not
             * directly triggered by a user action.
             *
             * By default, interaction is allowed.
             * @param no_interaction Whether to disallow interactive authorization for operations
             */
            set_no_interaction(no_interaction: boolean): void;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_uninstall()
             * instead. It has a lot more interesting features.
             *
             * Uninstall an application or runtime.
             * @param kind what this ref contains (an #FlatpakRefKind)
             * @param name name of the app or runtime to uninstall
             * @param arch architecture of the app or runtime to uninstall; if  %NULL, flatpak_get_default_arch() is assumed
             * @param branch name of the branch of the app or runtime to uninstall;  if %NULL, `master` is assumed
             * @param cancellable a #GCancellable
             * @returns %TRUE on success
             */
            uninstall(
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_uninstall()
             * instead. It has a lot more interesting features.
             *
             * Uninstall an application or runtime.
             * @param flags set of #FlatpakUninstallFlags flags
             * @param kind what this ref contains (an #FlatpakRefKind)
             * @param name name of the app or runtime to uninstall
             * @param arch architecture of the app or runtime to uninstall; if  %NULL, flatpak_get_default_arch() is assumed
             * @param branch name of the branch of the app or runtime to uninstall;  if %NULL, `master` is assumed
             * @param cancellable a #GCancellable
             * @returns %TRUE on success
             */
            uninstall_full(
                flags: UninstallFlags | null,
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_update()
             * instead. It has a lot more interesting features.
             *
             * Update an application or runtime.
             *
             * If the specified package is not installed, then %FLATPAK_ERROR_NOT_INSTALLED
             * will be thrown.
             *
             * If no updates could be found on the remote end and the package is
             * already up to date, then %FLATPAK_ERROR_ALREADY_INSTALLED will be thrown.
             * @param flags set of #FlatpakUpdateFlags flag
             * @param kind whether this is an app or runtime
             * @param name name of the app or runtime to update
             * @param arch architecture of the app or runtime to update (default: current architecture)
             * @param branch name of the branch of the app or runtime to update (default: master)
             * @param cancellable a #GCancellable
             * @returns The ref for the newly updated app or %NULL on failure
             */
            update(
                flags: UpdateFlags | null,
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): InstalledRef;
            /**
             * Updates the local copy of appstream for `remote_name` for the specified `arch`.
             * @param remote_name the name of the remote
             * @param arch Architecture to update, or %NULL for the local machine arch
             * @param out_changed Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, or %FALSE on error
             */
            update_appstream_full_sync(
                remote_name: string,
                arch?: string | null,
                out_changed?: boolean | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Updates the local copy of appstream for `remote_name` for the specified `arch`.
             * If you need progress feedback, use flatpak_installation_update_appstream_full_sync().
             * @param remote_name the name of the remote
             * @param arch Architecture to update, or %NULL for the local machine arch
             * @param out_changed Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, or %FALSE on error
             */
            update_appstream_sync(
                remote_name: string,
                arch?: string | null,
                out_changed?: boolean | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * This is an old deprecated function, you should use
             * #FlatpakTransaction and flatpak_transaction_add_update()
             * instead. It has a lot more interesting features.
             *
             * Update an application or runtime.
             *
             * If the specified package is not installed, then %FLATPAK_ERROR_NOT_INSTALLED
             * will be thrown.
             *
             * If no updates could be found on the remote end and the package is
             * already up to date, then %FLATPAK_ERROR_ALREADY_INSTALLED will be thrown.
             * @param flags set of #FlatpakUpdateFlags flag
             * @param kind whether this is an app or runtime
             * @param name name of the app or runtime to update
             * @param arch architecture of the app or runtime to update (default: current architecture)
             * @param branch name of the branch of the app or runtime to update (default: master)
             * @param subpaths A list of subpaths to fetch, or %NULL for everything
             * @param cancellable a #GCancellable
             * @returns The ref for the newly updated app or %NULL on failure
             */
            update_full(
                flags: UpdateFlags | null,
                kind: RefKind | null,
                name: string,
                arch?: string | null,
                branch?: string | null,
                subpaths?: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): InstalledRef;
            /**
             * Updates the local configuration of a remote repository by fetching
             * the related information from the summary file in the remote OSTree
             * repository and committing the changes to the local installation.
             * @param name the name of the remote to update
             * @param cancellable a #GCancellable
             * @returns %TRUE if the remote has been updated successfully
             */
            update_remote_sync(name: string, cancellable?: Gio.Cancellable | null): boolean;
        }

        module InstalledRef {
            // Constructor properties interface

            interface ConstructorProps extends Ref.ConstructorProps {
                appdata_content_rating: GLib.HashTable<any, any>;
                appdataContentRating: GLib.HashTable<any, any>;
                appdata_content_rating_type: string;
                appdataContentRatingType: string;
                appdata_license: string;
                appdataLicense: string;
                appdata_name: string;
                appdataName: string;
                appdata_summary: string;
                appdataSummary: string;
                appdata_version: string;
                appdataVersion: string;
                deploy_dir: string;
                deployDir: string;
                end_of_life: string;
                endOfLife: string;
                end_of_life_rebase: string;
                endOfLifeRebase: string;
                installed_size: number;
                installedSize: number;
                is_current: boolean;
                isCurrent: boolean;
                latest_commit: string;
                latestCommit: string;
                origin: string;
                subpaths: string[];
            }
        }

        class InstalledRef extends Ref {
            static $gtype: GObject.GType<InstalledRef>;

            // Properties

            get appdata_content_rating(): GLib.HashTable<any, any>;
            get appdataContentRating(): GLib.HashTable<any, any>;
            get appdata_content_rating_type(): string;
            get appdataContentRatingType(): string;
            get appdata_license(): string;
            get appdataLicense(): string;
            get appdata_name(): string;
            get appdataName(): string;
            get appdata_summary(): string;
            get appdataSummary(): string;
            get appdata_version(): string;
            get appdataVersion(): string;
            get deploy_dir(): string;
            set deploy_dir(val: string);
            get deployDir(): string;
            set deployDir(val: string);
            get end_of_life(): string;
            get endOfLife(): string;
            get end_of_life_rebase(): string;
            get endOfLifeRebase(): string;
            get installed_size(): number;
            set installed_size(val: number);
            get installedSize(): number;
            set installedSize(val: number);
            get is_current(): boolean;
            set is_current(val: boolean);
            get isCurrent(): boolean;
            set isCurrent(val: boolean);
            get latest_commit(): string;
            set latest_commit(val: string);
            get latestCommit(): string;
            set latestCommit(val: string);
            get origin(): string;
            set origin(val: string);
            get subpaths(): string[];
            set subpaths(val: string[]);

            // Constructors

            constructor(properties?: Partial<InstalledRef.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the content rating field from the appdata. This is a potentially
             * empty mapping of content rating attribute IDs to values, to be interpreted
             * by the semantics of the content rating type (see
             * flatpak_installed_ref_get_appdata_content_rating_type()).
             * @returns the content rating or %NULL
             */
            get_appdata_content_rating(): GLib.HashTable<string, string> | null;
            /**
             * Returns the content rating type from the appdata. For example, `oars-1.0` or
             * `oars-1.1`.
             * @returns the content rating type or %NULL
             */
            get_appdata_content_rating_type(): string | null;
            /**
             * Returns the license field from the appdata.
             * @returns the license or %NULL
             */
            get_appdata_license(): string;
            /**
             * Returns the name field from the appdata.
             *
             * The returned string is localized.
             * @returns the name or %NULL
             */
            get_appdata_name(): string;
            /**
             * Returns the summary field from the appdata.
             *
             * The returned string is localized.
             * @returns the summary or %NULL
             */
            get_appdata_summary(): string;
            /**
             * Returns the default version field from the appdata.
             * @returns the version or %NULL
             */
            get_appdata_version(): string;
            /**
             * Gets the deploy dir of the ref.
             * @returns the deploy dir
             */
            get_deploy_dir(): string;
            /**
             * Returns the end-of-life reason string, or %NULL if the
             * ref is not end-of-lifed.
             * @returns the end-of-life reason or %NULL
             */
            get_eol(): string;
            /**
             * Returns the end-of-life rebased ref, or %NULL if the
             * ref is not end-of-lifed.
             * @returns the end-of-life rebased ref or %NULL
             */
            get_eol_rebase(): string;
            /**
             * Returns the installed size of the ref.
             * @returns the installed size
             */
            get_installed_size(): number;
            /**
             * Returns whether the ref is current.
             * @returns %TRUE if the ref is current
             */
            get_is_current(): boolean;
            /**
             * Gets the latest commit of the ref.
             * @returns the latest commit
             */
            get_latest_commit(): string | null;
            /**
             * Gets the origin of the ref.
             * @returns the origin
             */
            get_origin(): string;
            /**
             * Returns the subpaths that are installed, or %NULL if all files installed.
             * @returns A strv, or %NULL
             */
            get_subpaths(): string[];
            /**
             * Loads the compressed xml appdata for this ref (if it exists).
             * @param cancellable a #GCancellable
             * @returns a #GBytes containing the compressed appdata file,     or %NULL if an error occurred
             */
            load_appdata(cancellable?: Gio.Cancellable | null): GLib.Bytes;
            /**
             * Loads the metadata file for this ref.
             * @param cancellable a #GCancellable
             * @returns a #GBytes containing the metadata file,     or %NULL if an error occurred
             */
            load_metadata(cancellable?: Gio.Cancellable | null): GLib.Bytes;
        }

        module Instance {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Instance extends GObject.Object {
            static $gtype: GObject.GType<Instance>;

            // Constructors

            constructor(properties?: Partial<Instance.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets FlatpakInstance objects for all running sandboxes in the current session.
             */
            static get_all(): Instance[];

            // Methods

            /**
             * Gets the application ID of the application running in the instance.
             *
             * Note that this may return %NULL for sandboxes that don't have an application.
             * @returns the application ID or %NULL
             */
            get_app(): string | null;
            /**
             * Gets the architecture of the application running in the instance.
             * @returns the architecture
             */
            get_arch(): string;
            /**
             * Gets the branch of the application running in the instance.
             * @returns the architecture
             */
            get_branch(): string;
            /**
             * Gets the PID of the application process in the sandbox.
             *
             * See flatpak_instance_get_pid().
             *
             * Note that this function may return 0 immediately after launching
             * a sandbox, for a short amount of time.
             * @returns the application process PID
             */
            get_child_pid(): number;
            /**
             * Gets the commit of the application running in the instance.
             * @returns the commit
             */
            get_commit(): string;
            /**
             * Gets the instance ID. The ID is used by Flatpak for bookkeeping
             * purposes and has no further relevance.
             * @returns the instance ID
             */
            get_id(): string;
            /**
             * Gets a keyfile that holds information about the running sandbox.
             *
             * This file is available as /.flatpak-info inside the sandbox as well.
             *
             * The most important data in the keyfile is available with separate getters,
             * but there may be more information in the keyfile.
             * @returns the flatpak-info keyfile
             */
            get_info(): GLib.KeyFile;
            /**
             * Gets the PID of the outermost process in the sandbox. This is not the
             * application process itself, but a bubblewrap 'babysitter' process.
             *
             * See flatpak_instance_get_child_pid().
             * @returns the outermost process PID
             */
            get_pid(): number;
            /**
             * Gets the ref of the runtime used in the instance.
             * @returns the runtime ref
             */
            get_runtime(): string;
            /**
             * Gets the commit of the runtime used in the instance.
             * @returns the runtime commit
             */
            get_runtime_commit(): string;
            /**
             * Finds out if the sandbox represented by `self` is still running.
             * @returns %TRUE if the sandbox is still running
             */
            is_running(): boolean;
        }

        module Ref {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                arch: string;
                branch: string;
                collection_id: string;
                collectionId: string;
                commit: string;
                kind: RefKind;
                name: string;
            }
        }

        class Ref extends GObject.Object {
            static $gtype: GObject.GType<Ref>;

            // Properties

            get arch(): string;
            get branch(): string;
            get collection_id(): string;
            get collectionId(): string;
            get commit(): string;
            get kind(): RefKind;
            get name(): string;

            // Constructors

            constructor(properties?: Partial<Ref.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Tries to parse a full ref name and return a #FlatpakRef (without a
             * commit set) or fail if the ref is invalid somehow.
             * @param ref A string ref name, such as "app/org.test.App/x86_64/master"
             */
            static parse(ref: string): Ref;

            // Methods

            /**
             * Convert an FlatpakRef object into a string representation that
             * can be parsed by flatpak_ref_parse().
             * @returns string representation
             */
            format_ref(): string;
            /**
             * Like flatpak_ref_format_ref() but this returns the same string each time
             * it's called rather than allocating a new one.
             * @returns string representation
             */
            format_ref_cached(): string;
            /**
             * Gets the arch or the ref.
             * @returns the arch
             */
            get_arch(): string;
            /**
             * Gets the branch of the ref.
             * @returns the branch
             */
            get_branch(): string;
            /**
             * Gets the collection ID of the ref.
             * @returns the collection ID
             */
            get_collection_id(): string;
            /**
             * Gets the commit of the ref.
             * @returns the commit
             */
            get_commit(): string;
            /**
             * Gets the kind of artifact that this ref refers to.
             * @returns the kind of artifact
             */
            get_kind(): RefKind;
            /**
             * Gets the name of the ref.
             * @returns the name
             */
            get_name(): string;
        }

        module RelatedRef {
            // Constructor properties interface

            interface ConstructorProps extends Ref.ConstructorProps {
                should_autoprune: boolean;
                shouldAutoprune: boolean;
                should_delete: boolean;
                shouldDelete: boolean;
                should_download: boolean;
                shouldDownload: boolean;
                subpaths: string[];
            }
        }

        class RelatedRef extends Ref {
            static $gtype: GObject.GType<RelatedRef>;

            // Properties

            get should_autoprune(): boolean;
            get shouldAutoprune(): boolean;
            get should_delete(): boolean;
            get shouldDelete(): boolean;
            get should_download(): boolean;
            get shouldDownload(): boolean;
            get subpaths(): string[];

            // Constructors

            constructor(properties?: Partial<RelatedRef.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the subpaths that should be installed/updated for the ref.
             * This returns %NULL if all files should be installed.
             * @returns A strv, or %NULL
             */
            get_subpaths(): string[];
        }

        module Remote {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
                type: RemoteType;
            }
        }

        class Remote extends GObject.Object {
            static $gtype: GObject.GType<Remote>;

            // Properties

            /**
             * Name of the remote, as used in configuration files and when interfacing
             * with OSTree. This is typically human readable, but could be generated, and
             * must conform to ostree_validate_remote_name(). It should typically not be
             * presented in the UI.
             */
            get name(): string;
            set name(val: string);
            /**
             * The type of the remote: whether it comes from static configuration files
             * (`FLATPAK_REMOTE_TYPE_STATIC)` or has been dynamically found from the local
             * network or a mounted USB drive (`FLATPAK_REMOTE_TYPE_LAN,`
             * `FLATPAK_REMOTE_TYPE_USB)`. Dynamic remotes may be added and removed over
             * time.
             */
            get type(): RemoteType;

            // Constructors

            constructor(properties?: Partial<Remote.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string): Remote;

            static new_from_file(name: string, data: GLib.Bytes | Uint8Array): Remote;

            // Methods

            /**
             * Returns the directory where this remote will store locally cached
             * appstream information for the specified `arch`.
             * @param arch which architecture to fetch (default: current architecture)
             * @returns a #GFile
             */
            get_appstream_dir(arch?: string | null): Gio.File;
            /**
             * Returns the timestamp file that will be updated whenever the appstream information
             * has been updated (or tried to update) for the specified `arch`.
             * @param arch which architecture to fetch (default: current architecture)
             * @returns a #GFile
             */
            get_appstream_timestamp(arch?: string | null): Gio.File;
            /**
             * Returns the repository collection ID of this remote, if set.
             * @returns the collection ID, or %NULL if unset
             */
            get_collection_id(): string | null;
            /**
             * Returns the comment of the remote.
             * @returns the comment
             */
            get_comment(): string;
            /**
             * Returns the default branch configured for the remote.
             * @returns the default branch, or %NULL
             */
            get_default_branch(): string;
            /**
             * Returns the description of the remote.
             * @returns the description
             */
            get_description(): string;
            /**
             * Returns whether this remote is disabled.
             * @returns whether the remote is marked as disabled
             */
            get_disabled(): boolean;
            /**
             * Returns the filter file of the remote.
             * @returns a pathname to a filter file
             */
            get_filter(): string;
            /**
             * Returns whether GPG verification is enabled for the remote.
             * @returns whether GPG verification is enabled
             */
            get_gpg_verify(): boolean;
            /**
             * Returns the homepage url of the remote.
             * @returns the homepage url
             */
            get_homepage(): string;
            /**
             * Returns the icon url of the remote.
             * @returns the icon url
             */
            get_icon(): string;
            /**
             * Returns the main ref of this remote, if set. The main ref is the ref that an
             * origin remote is created for.
             * @returns the main ref, or %NULL
             */
            get_main_ref(): string;
            /**
             * Returns the name of the remote repository.
             * @returns the name
             */
            get_name(): string;
            /**
             * Returns whether this remote should be used to find dependencies.
             * @returns whether the remote is marked as "don't use for dependencies"
             */
            get_nodeps(): boolean;
            /**
             * Returns whether this remote should be used to list applications.
             * @returns whether the remote is marked as "don't enumerate"
             */
            get_noenumerate(): boolean;
            /**
             * Returns the priority for the remote.
             * @returns the priority
             */
            get_prio(): number;
            /**
             * Get the value of #FlatpakRemote:type.
             * @returns the type of remote this is
             */
            get_remote_type(): RemoteType;
            /**
             * Returns the title of the remote.
             * @returns the title
             */
            get_title(): string;
            /**
             * Returns the repository URL of this remote.
             * @returns the URL
             */
            get_url(): string;
            /**
             * Sets the repository collection ID of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param collection_id The new collection ID, or %NULL to unset
             */
            set_collection_id(collection_id?: string | null): void;
            /**
             * Sets the comment of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param comment The new comment
             */
            set_comment(comment: string): void;
            /**
             * Sets the default branch configured for this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param default_branch The new default_branch, or %NULL to unset
             */
            set_default_branch(default_branch: string): void;
            /**
             * Sets the description of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param description The new description
             */
            set_description(description: string): void;
            /**
             * Sets the disabled config of this remote. See flatpak_remote_get_disabled().
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param disabled a bool
             */
            set_disabled(disabled: boolean): void;
            /**
             * Sets a filter for this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param filter_path The pathname of the new filter file
             */
            set_filter(filter_path: string): void;
            /**
             * Sets the trusted gpg key for this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param gpg_key a #GBytes with gpg binary key data
             */
            set_gpg_key(gpg_key: GLib.Bytes | Uint8Array): void;
            /**
             * Sets the gpg_verify config of this remote. See flatpak_remote_get_gpg_verify().
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param gpg_verify a bool
             */
            set_gpg_verify(gpg_verify: boolean): void;
            /**
             * Sets the homepage of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param homepage The new homepage
             */
            set_homepage(homepage: string): void;
            /**
             * Sets the homepage of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param icon The new homepage
             */
            set_icon(icon: string): void;
            /**
             * Sets the main ref of this remote. The main ref is the ref that an origin
             * remote is created for.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param main_ref The new main ref
             */
            set_main_ref(main_ref: string): void;
            /**
             * Sets the nodeps config of this remote. See flatpak_remote_get_nodeps().
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param nodeps a bool
             */
            set_nodeps(nodeps: boolean): void;
            /**
             * Sets the noenumeration config of this remote. See flatpak_remote_get_noenumerate().
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param noenumerate a bool
             */
            set_noenumerate(noenumerate: boolean): void;
            /**
             * Sets the prio config of this remote. See flatpak_remote_get_prio().
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param prio a bool
             */
            set_prio(prio: number): void;
            /**
             * Sets the repository title of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param title The new title, or %NULL to unset
             */
            set_title(title: string): void;
            /**
             * Sets the repository URL of this remote.
             *
             * Note: This is a local modification of this object, you must commit changes
             * using flatpak_installation_modify_remote() for the changes to take
             * effect.
             * @param url The new url
             */
            set_url(url: string): void;
        }

        module RemoteRef {
            // Constructor properties interface

            interface ConstructorProps extends Ref.ConstructorProps {
                download_size: number;
                downloadSize: number;
                end_of_life: string;
                endOfLife: string;
                end_of_life_rebase: string;
                endOfLifeRebase: string;
                installed_size: number;
                installedSize: number;
                metadata: GLib.Bytes;
                remote_name: string;
                remoteName: string;
            }
        }

        class RemoteRef extends Ref {
            static $gtype: GObject.GType<RemoteRef>;

            // Properties

            get download_size(): number;
            get downloadSize(): number;
            get end_of_life(): string;
            get endOfLife(): string;
            get end_of_life_rebase(): string;
            get endOfLifeRebase(): string;
            get installed_size(): number;
            get installedSize(): number;
            get metadata(): GLib.Bytes;
            get remote_name(): string;
            get remoteName(): string;

            // Constructors

            constructor(properties?: Partial<RemoteRef.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the download size of the ref.
             * @returns the download size
             */
            get_download_size(): number;
            /**
             * Returns the end-of-life reason string, or %NULL if the
             * ref is not end-of-lifed.
             * @returns the end-of-life reason or %NULL
             */
            get_eol(): string;
            /**
             * Returns the end-of-life rebased ref, or %NULL if the
             * ref is not end-of-lifed.
             * @returns the end-of-life rebased ref or %NULL
             */
            get_eol_rebase(): string;
            /**
             * Returns the installed size of the ref.
             * @returns the installed size
             */
            get_installed_size(): number;
            /**
             * Returns the app metadata from the metadata cache of the ref.
             * @returns a #GBytes with the metadata file contents or %NULL
             */
            get_metadata(): GLib.Bytes | null;
            /**
             * Gets the remote name of the ref.
             * @returns the remote name
             */
            get_remote_name(): string;
        }

        module Transaction {
            // Signal callback interfaces

            interface AddNewRemote {
                (reason: TransactionRemoteReason, from_id: string, suggested_remote_name: string, url: string): boolean;
            }

            interface BasicAuthStart {
                (remote: string, realm: string, options: GLib.Variant, id: number): boolean;
            }

            interface ChooseRemoteForRef {
                (for_ref: string, runtime_ref: string, remotes: string[]): number;
            }

            interface EndOfLifed {
                (ref: string, reason: string, rebase: string): void;
            }

            interface EndOfLifedWithRebase {
                (remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string[]): boolean;
            }

            interface InstallAuthenticator {
                (remote: string, authenticator_ref: string): void;
            }

            interface NewOperation {
                (operation: TransactionOperation, progress: TransactionProgress): void;
            }

            interface OperationDone {
                (operation: TransactionOperation, commit: string | null, result: TransactionResult): void;
            }

            interface OperationError {
                (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails): boolean;
            }

            interface Ready {
                (): boolean;
            }

            interface ReadyPreAuth {
                (): boolean;
            }

            interface WebflowDone {
                (options: GLib.Variant, id: number): void;
            }

            interface WebflowStart {
                (remote: string, url: string, options: GLib.Variant, id: number): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                installation: Installation;
                no_interaction: boolean;
                noInteraction: boolean;
            }
        }

        class Transaction extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Transaction>;

            // Properties

            /**
             * The installation that the transaction operates on.
             */
            get installation(): Installation;
            /**
             * %TRUE if the transaction is not interactive, %FALSE otherwise.
             *
             * See flatpak_transaction_set_no_interaction().
             */
            get no_interaction(): boolean;
            set no_interaction(val: boolean);
            /**
             * %TRUE if the transaction is not interactive, %FALSE otherwise.
             *
             * See flatpak_transaction_set_no_interaction().
             */
            get noInteraction(): boolean;
            set noInteraction(val: boolean);

            // Constructors

            constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_installation(installation: Installation, cancellable?: Gio.Cancellable | null): Transaction;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'add-new-remote',
                callback: (
                    _source: this,
                    reason: TransactionRemoteReason,
                    from_id: string,
                    suggested_remote_name: string,
                    url: string,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'add-new-remote',
                callback: (
                    _source: this,
                    reason: TransactionRemoteReason,
                    from_id: string,
                    suggested_remote_name: string,
                    url: string,
                ) => boolean,
            ): number;
            emit(
                signal: 'add-new-remote',
                reason: TransactionRemoteReason,
                from_id: string,
                suggested_remote_name: string,
                url: string,
            ): void;
            connect(
                signal: 'basic-auth-start',
                callback: (_source: this, remote: string, realm: string, options: GLib.Variant, id: number) => boolean,
            ): number;
            connect_after(
                signal: 'basic-auth-start',
                callback: (_source: this, remote: string, realm: string, options: GLib.Variant, id: number) => boolean,
            ): number;
            emit(signal: 'basic-auth-start', remote: string, realm: string, options: GLib.Variant, id: number): void;
            connect(
                signal: 'choose-remote-for-ref',
                callback: (_source: this, for_ref: string, runtime_ref: string, remotes: string[]) => number,
            ): number;
            connect_after(
                signal: 'choose-remote-for-ref',
                callback: (_source: this, for_ref: string, runtime_ref: string, remotes: string[]) => number,
            ): number;
            emit(signal: 'choose-remote-for-ref', for_ref: string, runtime_ref: string, remotes: string[]): void;
            connect(
                signal: 'end-of-lifed',
                callback: (_source: this, ref: string, reason: string, rebase: string) => void,
            ): number;
            connect_after(
                signal: 'end-of-lifed',
                callback: (_source: this, ref: string, reason: string, rebase: string) => void,
            ): number;
            emit(signal: 'end-of-lifed', ref: string, reason: string, rebase: string): void;
            connect(
                signal: 'end-of-lifed-with-rebase',
                callback: (
                    _source: this,
                    remote: string,
                    ref: string,
                    reason: string,
                    rebased_to_ref: string,
                    previous_ids: string[],
                ) => boolean,
            ): number;
            connect_after(
                signal: 'end-of-lifed-with-rebase',
                callback: (
                    _source: this,
                    remote: string,
                    ref: string,
                    reason: string,
                    rebased_to_ref: string,
                    previous_ids: string[],
                ) => boolean,
            ): number;
            emit(
                signal: 'end-of-lifed-with-rebase',
                remote: string,
                ref: string,
                reason: string,
                rebased_to_ref: string,
                previous_ids: string[],
            ): void;
            connect(
                signal: 'install-authenticator',
                callback: (_source: this, remote: string, authenticator_ref: string) => void,
            ): number;
            connect_after(
                signal: 'install-authenticator',
                callback: (_source: this, remote: string, authenticator_ref: string) => void,
            ): number;
            emit(signal: 'install-authenticator', remote: string, authenticator_ref: string): void;
            connect(
                signal: 'new-operation',
                callback: (_source: this, operation: TransactionOperation, progress: TransactionProgress) => void,
            ): number;
            connect_after(
                signal: 'new-operation',
                callback: (_source: this, operation: TransactionOperation, progress: TransactionProgress) => void,
            ): number;
            emit(signal: 'new-operation', operation: TransactionOperation, progress: TransactionProgress): void;
            connect(
                signal: 'operation-done',
                callback: (
                    _source: this,
                    operation: TransactionOperation,
                    commit: string | null,
                    result: TransactionResult,
                ) => void,
            ): number;
            connect_after(
                signal: 'operation-done',
                callback: (
                    _source: this,
                    operation: TransactionOperation,
                    commit: string | null,
                    result: TransactionResult,
                ) => void,
            ): number;
            emit(
                signal: 'operation-done',
                operation: TransactionOperation,
                commit: string | null,
                result: TransactionResult,
            ): void;
            connect(
                signal: 'operation-error',
                callback: (
                    _source: this,
                    operation: TransactionOperation,
                    error: GLib.Error,
                    details: TransactionErrorDetails,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'operation-error',
                callback: (
                    _source: this,
                    operation: TransactionOperation,
                    error: GLib.Error,
                    details: TransactionErrorDetails,
                ) => boolean,
            ): number;
            emit(
                signal: 'operation-error',
                operation: TransactionOperation,
                error: GLib.Error,
                details: TransactionErrorDetails,
            ): void;
            connect(signal: 'ready', callback: (_source: this) => boolean): number;
            connect_after(signal: 'ready', callback: (_source: this) => boolean): number;
            emit(signal: 'ready'): void;
            connect(signal: 'ready-pre-auth', callback: (_source: this) => boolean): number;
            connect_after(signal: 'ready-pre-auth', callback: (_source: this) => boolean): number;
            emit(signal: 'ready-pre-auth'): void;
            connect(
                signal: 'webflow-done',
                callback: (_source: this, options: GLib.Variant, id: number) => void,
            ): number;
            connect_after(
                signal: 'webflow-done',
                callback: (_source: this, options: GLib.Variant, id: number) => void,
            ): number;
            emit(signal: 'webflow-done', options: GLib.Variant, id: number): void;
            connect(
                signal: 'webflow-start',
                callback: (_source: this, remote: string, url: string, options: GLib.Variant, id: number) => boolean,
            ): number;
            connect_after(
                signal: 'webflow-start',
                callback: (_source: this, remote: string, url: string, options: GLib.Variant, id: number) => boolean,
            ): number;
            emit(signal: 'webflow-start', remote: string, url: string, options: GLib.Variant, id: number): void;

            // Virtual methods

            vfunc_add_new_remote(
                reason: TransactionRemoteReason,
                from_id: string,
                remote_name: string,
                url: string,
            ): boolean;
            vfunc_basic_auth_start(remote: string, realm: string, options: GLib.Variant, id: number): boolean;
            vfunc_choose_remote_for_ref(for_ref: string, runtime_ref: string, remotes: string): number;
            vfunc_end_of_lifed(ref: string, reason: string, rebase: string): void;
            vfunc_end_of_lifed_with_rebase(
                remote: string,
                ref: string,
                reason: string,
                rebased_to_ref: string,
                previous_ids: string,
            ): boolean;
            vfunc_install_authenticator(remote: string, authenticator_ref: string): void;
            vfunc_new_operation(operation: TransactionOperation, progress: TransactionProgress): void;
            vfunc_operation_done(operation: TransactionOperation, commit: string, details: TransactionResult): void;
            vfunc_operation_error(
                operation: TransactionOperation,
                error: GLib.Error,
                detail: TransactionErrorDetails,
            ): boolean;
            vfunc_ready(): boolean;
            vfunc_ready_pre_auth(): boolean;
            /**
             * Executes the transaction.
             *
             * During the course of the execution, various signals will get emitted.
             * The FlatpakTransaction::choose-remote-for-ref  and
             * #FlatpakTransaction::add-new-remote signals may get emitted while
             * resolving operations. #FlatpakTransaction::ready is emitted when
             * the transaction has been fully resolved, and #FlatpakTransaction::new-operation
             * and #FlatpakTransaction::operation-done are emitted while the operations
             * are carried out. If an error occurs at any point during the execution,
             * #FlatpakTransaction::operation-error is emitted.
             *
             * Note that this call blocks until the transaction is done.
             * @param cancellable a #GCancellable
             */
            vfunc_run(cancellable?: Gio.Cancellable | null): boolean;
            vfunc_webflow_done(options: GLib.Variant, id: number): void;
            vfunc_webflow_start(remote: string, url: string, options: GLib.Variant, id: number): boolean;

            // Methods

            /**
             * Cancel an ongoing webflow authentication request. This can be call
             * in the time between #FlatpakTransaction::webflow-start returned
             * %TRUE, and #FlatpakTransaction::webflow-done is emitted. It will
             * cancel the ongoing authentication operation.
             *
             * This is useful for example if you're showing an authenticaion
             * window with a browser, but the user closed it before it was finished.
             * @param id The webflow id, as passed into the webflow-start signal
             */
            abort_webflow(id: number): void;
            /**
             * Similar to flatpak_transaction_add_dependency_source(), but adds
             * all the default installations, which means all the defined system-wide
             * (but not per-user) installations.
             */
            add_default_dependency_sources(): void;
            /**
             * Adds an extra installation as a source for application dependencies.
             * This means that applications can be installed in this transaction relying
             * on runtimes from this additional installation (whereas it would normally
             * install required runtimes that are not installed in the installation
             * the transaction works on).
             *
             * Also see flatpak_transaction_add_default_dependency_sources().
             * @param installation a #FlatpakInstallation
             */
            add_dependency_source(installation: Installation): void;
            /**
             * Adds installing the given ref to this transaction.
             *
             * The `remote` can either be a configured remote of the installation,
             * or a file:// uri pointing at a local repository to install from,
             * in which case an origin remote is created.
             * @param remote the name of the remote
             * @param ref the ref
             * @param subpaths subpaths to install, or the  empty list or %NULL to pull all subpaths
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_install(remote: string, ref: string, subpaths?: string[] | null): boolean;
            /**
             * Adds installing the given bundle to this transaction.
             * @param file a #GFile that is an flatpak bundle
             * @param gpg_data GPG key with which to check bundle signatures, or  %NULL to use the key embedded in the bundle (if any)
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_install_bundle(file: Gio.File, gpg_data?: GLib.Bytes | null): boolean;
            /**
             * Adds installing the given flatpakref to this transaction.
             * @param flatpakref_data data from a flatpakref file
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_install_flatpakref(flatpakref_data: GLib.Bytes | Uint8Array): boolean;
            /**
             * Adds updating the `previous_ids` of the given ref to this transaction, via either
             * installing the `ref` if it was not already present or updating it. This will
             * treat `ref` as the result of following an eol-rebase, and data migration from
             * the refs in `previous_ids` will be set up.
             *
             * If you want to rebase the ref and uninstall the old version of it, consider
             * using flatpak_transaction_add_rebase_and_uninstall() instead. It will add
             * appropriate dependencies between the rebase and uninstall operations.
             *
             * See flatpak_transaction_add_install() for a description of `remote`.
             * @param remote the name of the remote
             * @param ref the ref
             * @param subpaths the subpaths to include, or %NULL to install the complete ref
             * @param previous_ids Previous ids to add to the     given ref. These should simply be the ids, not the full ref names (e.g. org.foo.Bar,     not org.foo.Bar/x86_64/master).
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_rebase(remote: string, ref: string, subpaths?: string | null, previous_ids?: string[] | null): boolean;
            /**
             * Adds updating the `previous_ids` of the given `new_ref` to this transaction,
             * via either installing the `new_ref` if it was not already present or updating
             * it. This will treat `new_ref` as the result of following an eol-rebase, and
             * data migration from the refs in `previous_ids` will be set up.
             *
             * Also adds an operation to uninstall `old_ref` to this transaction. This
             * operation will only be run if the operation to install/update `new_ref`
             * succeeds.
             *
             * If `old_ref` is not already installed (which can happen if requesting to
             * install an EOLed app, rather than update one which is already installed), the
             * uninstall operation will silently not be added, and this function will behave
             * similarly to flatpak_transaction_add_rebase().
             *
             * See flatpak_transaction_add_install() for a description of `remote`.
             * @param remote the name of the remote
             * @param new_ref the ref to rebase to
             * @param old_ref the ref to uninstall
             * @param subpaths the subpaths to include, or %NULL to install the complete ref
             * @param previous_ids Previous ids to add to the     given ref. These should simply be the ids, not the full ref names (e.g. org.foo.Bar,     not org.foo.Bar/x86_64/master).
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_rebase_and_uninstall(
                remote: string,
                new_ref: string,
                old_ref: string,
                subpaths?: string | null,
                previous_ids?: string[] | null,
            ): boolean;
            /**
             * Adds an extra local ostree repo as source for installation. This is
             * equivalent to using the sideload-repos directories (see flatpak(1)), but can
             * be done dynamically. Any path added here is used in addition to ones in
             * those directories.
             * @param path a path to a local flatpak repository
             */
            add_sideload_repo(path: string): void;
            /**
             * Adds uninstalling the given ref to this transaction. If the transaction is
             * set to not deploy updates, the request is ignored.
             * @param ref the ref
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_uninstall(ref: string): boolean;
            /**
             * Adds updating the given ref to this transaction.
             * @param ref the ref
             * @param subpaths subpaths to install; %NULL  to use the current set plus the set of configured languages, or  `{ NULL }` or `{ "", NULL }` to pull all subpaths.
             * @param commit the commit to update to, or %NULL to use the latest
             * @returns %TRUE on success; %FALSE with @error set on failure.
             */
            add_update(ref: string, subpaths?: string[] | null, commit?: string | null): boolean;
            /**
             * Finishes (or aborts) an ongoing basic auth request.
             * @param id The webflow id, as passed into the webflow-start signal
             * @param user The user name, or %NULL if aborting request
             * @param password The password
             * @param options Extra a{sv] variant with options (or %NULL), currently unused.
             */
            complete_basic_auth(id: number, user: string, password: string, options: GLib.Variant): void;
            /**
             * Gets the value set by
             * flatpak_transaction_set_auto_install_debug().
             * @returns %TRUE if auto_install_debug is set, %FALSE otherwise
             */
            get_auto_install_debug(): boolean;
            /**
             * Gets the value set by
             * flatpak_transaction_set_auto_install_sdk().
             * @returns %TRUE if auto_install_sdk is set, %FALSE otherwise
             */
            get_auto_install_sdk(): boolean;
            /**
             * Gets the current operation.
             * @returns the current #FlatpakTransactionOperation
             */
            get_current_operation(): TransactionOperation;
            /**
             * Gets the value set by
             * flatpak_transaction_set_include_unused_uninstall_ops().
             * @returns %TRUE if include_unused_uninstall_ops is set, %FALSE otherwise
             */
            get_include_unused_uninstall_ops(): boolean;
            /**
             * Gets the installation this transaction was created for.
             * @returns a #FlatpakInstallation
             */
            get_installation(): Installation;
            /**
             * Gets whether the transaction is only downloading updates,
             * and not deploying them.
             * @returns %TRUE if no_deploy is set, %FALSE otherwise
             */
            get_no_deploy(): boolean;
            /**
             * Gets whether the transaction is interactive. See
             * flatpak_transaction_set_no_interaction().
             * @returns %TRUE if the transaction is not interactive, %FALSE otherwise
             */
            get_no_interaction(): boolean;
            /**
             * Gets whether the transaction should operate only on locally
             * available data.
             * @returns %TRUE if no_pull is set, %FALSE otherwise
             */
            get_no_pull(): boolean;
            /**
             * Gets the operation for `ref,` if any match. If `remote` is non-%NULL, only an
             * operation for that remote will be returned. If remote is %NULL and the
             * transaction has more than one operation for `ref` from different remotes, an
             * error will be returned.
             * @param remote a remote name
             * @param ref a ref
             * @returns the #FlatpakTransactionOperation for @ref, or   %NULL with @error set
             */
            get_operation_for_ref(remote: string | null, ref: string): TransactionOperation;
            /**
             * Gets the list of operations. Skipped operations are not included. The order
             * of the list is the order in which the operations are executed.
             * @returns a #GList of operations
             */
            get_operations(): TransactionOperation[];
            /**
             * Gets the parent window set for this transaction, or %NULL if unset. See
             * flatpak_transaction_get_parent_window().
             * @returns a window name, or %NULL
             */
            get_parent_window(): string;
            /**
             * Returns whether the transaction contains any non-skipped operations.
             * @returns %TRUE if the transaction is empty
             */
            is_empty(): boolean;
            /**
             * Executes the transaction.
             *
             * During the course of the execution, various signals will get emitted.
             * The FlatpakTransaction::choose-remote-for-ref  and
             * #FlatpakTransaction::add-new-remote signals may get emitted while
             * resolving operations. #FlatpakTransaction::ready is emitted when
             * the transaction has been fully resolved, and #FlatpakTransaction::new-operation
             * and #FlatpakTransaction::operation-done are emitted while the operations
             * are carried out. If an error occurs at any point during the execution,
             * #FlatpakTransaction::operation-error is emitted.
             *
             * Note that this call blocks until the transaction is done.
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, %FALSE if an error occurred
             */
            run(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * When this is set to %TRUE, Flatpak will automatically install the debug info
             * for each app currently being installed or updated, as well as its
             * dependencies. Does nothing if an uninstall is taking place.
             * @param auto_install_debug whether to auto install debug info for apps
             */
            set_auto_install_debug(auto_install_debug: boolean): void;
            /**
             * When this is set to %TRUE, Flatpak will automatically install the SDK for
             * each app currently being installed or updated. Does nothing if an uninstall
             * is taking place.
             * @param auto_install_sdk whether to auto install SDKs for apps
             */
            set_auto_install_sdk(auto_install_sdk: boolean): void;
            /**
             * Sets the architecture to default to where it is unspecified.
             * @param arch the arch to make default
             */
            set_default_arch(arch: string): void;
            /**
             * Normally the transaction pins any explicit installations so they will not
             * be automatically removed. But this can be disabled if you don't want this
             * behaviour.
             * @param disable_pin whether to disable auto-pinning
             */
            set_disable_auto_pin(disable_pin: boolean): void;
            /**
             * Sets whether the transaction should ignore runtime dependencies
             * when resolving operations for applications.
             * @param disable_dependencies whether to disable runtime dependencies
             */
            set_disable_dependencies(disable_dependencies: boolean): void;
            /**
             * Sets whether the transaction should avoid pruning the local OSTree
             * repository after updating.
             * @param disable_prune whether to avoid pruning
             */
            set_disable_prune(disable_prune: boolean): void;
            /**
             * Sets whether the transaction should avoid adding related refs
             * when resolving operations. Related refs are extensions that are
             * suggested by apps, such as locales.
             * @param disable_related whether to avoid adding related refs
             */
            set_disable_related(disable_related: boolean): void;
            /**
             * Sets whether the transaction should avoid using static
             * deltas when pulling.
             * @param disable_static_deltas whether to avoid static deltas
             */
            set_disable_static_deltas(disable_static_deltas: boolean): void;
            /**
             * Sets whether the transaction should uninstall files even
             * if they're used by a running application.
             * @param force_uninstall whether to force-uninstall refs
             */
            set_force_uninstall(force_uninstall: boolean): void;
            /**
             * When this is set to %TRUE, Flatpak will add uninstall operations to the
             * transaction for each runtime it considers unused. This is used by the
             * "update" CLI command to garbage collect runtimes and free disk space.
             *
             * No guarantees are made about the exact hueristic used; e.g. only end-of-life
             * unused runtimes may be uninstalled with this set. To see the full list of
             * unused runtimes in an installation, use
             * flatpak_installation_list_unused_refs().
             * @param include_unused_uninstall_ops whether to include unused uninstall ops
             */
            set_include_unused_uninstall_ops(include_unused_uninstall_ops: boolean): void;
            /**
             * Sets whether the transaction should download updates, but
             * not deploy them.
             * @param no_deploy whether to avoid deploying
             */
            set_no_deploy(no_deploy: boolean): void;
            /**
             * This method can be used to prevent interactive authorization dialogs to appear
             * for operations on `self`. This is useful for background operations that are not
             * directly triggered by a user action.
             *
             * By default, the setting from the parent #FlatpakInstallation is used.
             * @param no_interaction Whether to disallow interactive authorization for operations
             */
            set_no_interaction(no_interaction: boolean): void;
            /**
             * Sets whether the transaction should operate only on locally
             * available data.
             * @param no_pull whether to avoid pulls
             */
            set_no_pull(no_pull: boolean): void;
            /**
             * Sets the parent window (if any) to use for any UI show by this transaction.
             * This is used by authenticators if they need to interact with the user during
             * authentication.
             *
             * The format of this string depends on the display system in use, and is the
             * same as used by xdg-desktop-portal.
             *
             * On X11 it should be of the form x11:$xid where $xid is the hex
             * version of the xwindows id.
             *
             * On wayland is should be wayland:$handle where handle is gotten by
             * using the export call of the xdg-foreign-unstable wayland extension.
             * @param parent_window whether to avoid pulls
             */
            set_parent_window(parent_window: string): void;
            /**
             * Sets whether the transaction should uninstall first if a
             * ref is already installed.
             * @param reinstall whether to reinstall refs
             */
            set_reinstall(reinstall: boolean): void;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        module TransactionOperation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class TransactionOperation extends GObject.Object {
            static $gtype: GObject.GType<TransactionOperation>;

            // Constructors

            constructor(properties?: Partial<TransactionOperation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the path to the bundle.
             * @returns the bundle #GFile or %NULL
             */
            get_bundle_path(): Gio.File;
            /**
             * Gets the commit ID for the operation.
             *
             * This information is available when the transaction is resolved,
             * i.e. when #FlatpakTransaction::ready is emitted.
             * @returns the commit ID
             */
            get_commit(): string;
            /**
             * Gets the maximum download size for the operation.
             *
             * Note that this does not include the size of dependencies, and
             * the actual download may be smaller, if some of the data is already
             * available locally.
             *
             * For uninstall operations, this returns 0.
             *
             * This information is available when the transaction is resolved,
             * i.e. when #FlatpakTransaction::ready is emitted.
             * @returns the download size, in bytes
             */
            get_download_size(): number;
            /**
             * Gets the installed size for the operation.
             *
             * Note that even for a new install, the extra space required on
             * disk may be smaller than this number, if some of the data is already
             * available locally.
             *
             * For uninstall operations, this returns 0.
             *
             * This information is available when the transaction is resolved,
             * i.e. when #FlatpakTransaction::ready is emitted.
             * @returns the installed size, in bytes
             */
            get_installed_size(): number;
            /**
             * Gets whether this operation will be skipped when the transaction is run.
             * Operations are skipped in some transaction situations, for example when an
             * app has reached end of life and needs a rebase, or when it would have been
             * updated but no update is available. By default, skipped
             * operations are not returned by flatpak_transaction_get_operations() — but
             * they can be accessed by traversing the operation graph using
             * flatpak_transaction_operation_get_related_to_ops().
             * @returns %TRUE if the operation has been marked as to skip, %FALSE otherwise
             */
            get_is_skipped(): boolean;
            /**
             * Gets the metadata that will be applicable when the
             * operation is done.
             *
             * This can be compared to the current metadata returned
             * by flatpak_transaction_operation_get_old_metadata()
             * to find new required permissions and similar changes.
             *
             * This information is available when the transaction is resolved,
             * i.e. when #FlatpakTransaction::ready is emitted.
             * @returns the metadata #GKeyFile
             */
            get_metadata(): GLib.KeyFile;
            /**
             * Gets the metadata current metadata for the ref that `self` works on.
             * Also see flatpak_transaction_operation_get_metadata().
             *
             * This information is available when the transaction is resolved,
             * i.e. when #FlatpakTransaction::ready is emitted.
             * @returns the old metadata #GKeyFile
             */
            get_old_metadata(): GLib.KeyFile;
            /**
             * Gets the type of the operation.
             * @returns the type of operation, as #FlatpakTransactionOperationType
             */
            get_operation_type(): TransactionOperationType;
            /**
             * Gets the ref that the operation applies to.
             * @returns the ref
             */
            get_ref(): string;
            /**
             * Gets the operation(s) which caused this operation to be added to the
             * transaction. In the case of a runtime, it's the app(s) whose runtime it is,
             * and/or a runtime extension in the special case of an extra-data extension
             * that doesn't define the "NoRuntime" key. In the case of a related ref such
             * as an extension, it's the main app or runtime. In the case of a main app or
             * something added to the transaction by e.g. flatpak_transaction_add_install()
             * and which is not otherwise needed, %NULL or an empty array will be returned.
             *
             * Note that an op will be returned even if it’s marked as to be skipped when
             * the transaction is run. Check that using
             * flatpak_transaction_operation_get_is_skipped().
             *
             * Elements in the returned array are only safe to access while the parent
             * #FlatpakTransaction is alive.
             * @returns the   #FlatpakTransactionOperations this one is related to (may be %NULL or an   empty array, which are equivalent)
             */
            get_related_to_ops(): TransactionOperation[] | null;
            /**
             * Gets the remote that the operation applies to.
             * @returns the remote
             */
            get_remote(): string;
            /**
             * Gets whether the given operation will require authentication to acquire
             * needed tokens. See also the documentation for
             * #FlatpakTransaction::ready-pre-auth.
             * @returns whether @self requires authentication
             */
            get_requires_authentication(): boolean;
            /**
             * Gets the set of subpaths that will be pulled from this ref.
             *
             * Some refs are only partially installed, such as translations. These
             * are subset by the toplevel directory (typically by translation name).
             * The subset to install can be specified at install time, but is otherwise
             * decided based on configurations and things like the current locale and
             * how the app was previously installed.
             *
             * If there is no subsetting active, this will always return %NULL
             * (even though some other APIs also take an empty string to mean no
             * subsetting).
             *
             * This information is available when the transaction is resolved,
             * i.e. when #FlatpakTransaction::ready is emitted.
             * @returns the set of subpaths that will be pulled, or %NULL if no subsetting.
             */
            get_subpaths(): string[];
        }

        module TransactionProgress {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class TransactionProgress extends GObject.Object {
            static $gtype: GObject.GType<TransactionProgress>;

            // Constructors

            constructor(properties?: Partial<TransactionProgress.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Methods

            /**
             * Gets the number of bytes that have been transferred.
             * @returns the number of bytes transferred
             */
            get_bytes_transferred(): number;
            /**
             * Gets whether the progress is currently estimating
             * @returns whether we're estimating
             */
            get_is_estimating(): boolean;
            /**
             * Gets the current progress.
             * @returns the current progress, as an integer between 0 and 100
             */
            get_progress(): number;
            /**
             * Gets the time at which this operation has started, as monotonic time.
             * @returns the start time
             */
            get_start_time(): number;
            /**
             * Gets the current status string
             * @returns the current status
             */
            get_status(): string;
            /**
             * Sets how often progress should be updated.
             * @param update_interval the update interval, in milliseconds
             */
            set_update_frequency(update_interval: number): void;
        }

        type BundleRefClass = typeof BundleRef;
        type InstallationClass = typeof Installation;
        type InstalledRefClass = typeof InstalledRef;
        type InstanceClass = typeof Instance;
        type RefClass = typeof Ref;
        type RelatedRefClass = typeof RelatedRef;
        type RemoteClass = typeof Remote;
        type RemoteRefClass = typeof RemoteRef;
        type TransactionClass = typeof Transaction;
        type TransactionOperationClass = typeof TransactionOperation;
        type TransactionProgressClass = typeof TransactionProgress;
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

    export default Flatpak;
}

declare module 'gi://Flatpak' {
    import Flatpak10 from 'gi://Flatpak?version=1.0';
    export default Flatpak10;
}
// END
