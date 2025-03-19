/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalIO?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AstalIO {
        /**
         * AstalIO-0.1
         */

        class AppError extends GLib.Error {
            static $gtype: GObject.GType<AppError>;

            // Static fields

            static NAME_OCCUPIED: number;
            static TAKEOVER_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        /**
         * Starts a [class`Gio`.SocketService] and binds `XDG_RUNTIME_DIR/astal/<instance_name>.sock`. This socket is then used by the astal
         * cli. Not meant for public usage, but for [method`AstalIO`.Application.acquire_socket].
         * @param app
         */
        function acquire_socket(app: Application): [Gio.SocketService, string];
        /**
         * Get a list of running Astal.Application instances. It is the equivalent of `astal --list`.
         */
        function get_instances(): string[];
        /**
         * Quit an an Astal instances. It is the equivalent of `astal --quit -i instance`.
         * @param instance
         */
        function quit_instance(instance: string): void;
        /**
         * Open the Gtk debug tool of an an Astal instances. It is the equivalent of `astal --inspector -i instance`.
         * @param instance
         */
        function open_inspector(instance: string): void;
        /**
         * Toggle a Window of an Astal instances. It is the equivalent of `astal -i instance --toggle window`.
         * @param instance
         * @param window
         */
        function toggle_window_by_name(instance: string, window: string): void;
        /**
         * Use [func`AstalIO`.send_request] instead.
         * @param instance
         * @param request
         */
        function send_message(instance: string, request: string): string;
        /**
         * Send a request to an Astal instances. It is the equivalent of `astal -i instance "request content"`.
         * @param instance
         * @param request
         */
        function send_request(instance: string, request: string): string;
        /**
         * Read the socket of an Astal.Application instance.
         * @param conn
         */
        function read_sock(conn: Gio.SocketConnection): Promise<string>;
        /**
         * Read the socket of an Astal.Application instance.
         * @param conn
         * @param _callback_
         */
        function read_sock(
            conn: Gio.SocketConnection,
            _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): void;
        /**
         * Read the socket of an Astal.Application instance.
         * @param conn
         * @param _callback_
         */
        function read_sock(
            conn: Gio.SocketConnection,
            _callback_?: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): Promise<string> | void;
        function read_sock_finish(_res_: Gio.AsyncResult): string;
        /**
         * Write the socket of an Astal.Application instance.
         * @param conn
         * @param response
         */
        function write_sock(conn: Gio.SocketConnection, response: string): Promise<void>;
        /**
         * Write the socket of an Astal.Application instance.
         * @param conn
         * @param response
         * @param _callback_
         */
        function write_sock(
            conn: Gio.SocketConnection,
            response: string,
            _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): void;
        /**
         * Write the socket of an Astal.Application instance.
         * @param conn
         * @param response
         * @param _callback_
         */
        function write_sock(
            conn: Gio.SocketConnection,
            response: string,
            _callback_?: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): Promise<void> | void;
        function write_sock_finish(_res_: Gio.AsyncResult): void;
        /**
         * Read the contents of a file synchronously.
         * @param path
         */
        function read_file(path: string): string;
        /**
         * Read the contents of a file asynchronously.
         * @param path
         */
        function read_file_async(path: string): Promise<string>;
        /**
         * Read the contents of a file asynchronously.
         * @param path
         * @param _callback_
         */
        function read_file_async(path: string, _callback_: Gio.AsyncReadyCallback<string> | null): void;
        /**
         * Read the contents of a file asynchronously.
         * @param path
         * @param _callback_
         */
        function read_file_async(
            path: string,
            _callback_?: Gio.AsyncReadyCallback<string> | null,
        ): Promise<string> | void;
        function read_file_finish(_res_: Gio.AsyncResult): string;
        /**
         * Write content to a file synchronously.
         * @param path
         * @param content
         */
        function write_file(path: string, content: string): void;
        /**
         * Write content to a file asynchronously.
         * @param path
         * @param content
         */
        function write_file_async(path: string, content: string): Promise<void>;
        /**
         * Write content to a file asynchronously.
         * @param path
         * @param content
         * @param _callback_
         */
        function write_file_async(
            path: string,
            content: string,
            _callback_: Gio.AsyncReadyCallback<string> | null,
        ): void;
        /**
         * Write content to a file asynchronously.
         * @param path
         * @param content
         * @param _callback_
         */
        function write_file_async(
            path: string,
            content: string,
            _callback_?: Gio.AsyncReadyCallback<string> | null,
        ): Promise<void> | void;
        function write_file_finish(_res_: Gio.AsyncResult): void;
        /**
         * Monitor a file for changes. If the path is a directory, monitor it recursively. The callback will be called passed two parameters: the path of
         * the file that changed and an [enum`Gio`.FileMonitorEvent] indicating the reason.
         * @param path
         * @param callback
         */
        function monitor_file(path: string, callback: GObject.Closure): Gio.FileMonitor | null;
        namespace Daemon {
            // Constructor properties interface

            interface ConstructorProps extends Gio.Application.ConstructorProps, Application.ConstructorProps {}
        }

        class Daemon extends Gio.Application implements Application {
            static $gtype: GObject.GType<Daemon>;

            // Constructors

            constructor(properties?: Partial<Daemon.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Daemon;

            // Virtual methods

            /**
             * Handler for an incoming request.
             * @param request Body of the request
             * @param conn The connection which expects the response.
             */
            vfunc_request(request: string, conn: Gio.SocketConnection): void;

            // Methods

            /**
             * Handler for an incoming request.
             * @param request Body of the request
             * @param conn The connection which expects the response.
             */
            request(request: string, conn: Gio.SocketConnection): void;

            // Inherited properties
            get instance_name(): string;
            set instance_name(val: string);
            get instanceName(): string;
            set instanceName(val: string);

            // Inherited methods
            quit(): void;
            inspector(): void;
            toggle_window(window: string): void;
            acquire_socket(): void;
            get_instance_name(): string;
            set_instance_name(value: string): void;
            vfunc_quit(): void;
            vfunc_inspector(): void;
            vfunc_toggle_window(window: string): void;
            vfunc_acquire_socket(): void;
            vfunc_get_instance_name(): string;
            vfunc_set_instance_name(value: string): void;
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

        namespace Process {
            // Signal callback interfaces

            interface Stdout {
                (out: string): void;
            }

            interface Stderr {
                (err: string): void;
            }

            interface Exit {
                (code: number, terminated: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                argv: string[];
            }
        }

        /**
         * `Process` provides shortcuts for [class`Gio`.Subprocess] with sane defaults.
         */
        class Process extends GObject.Object {
            static $gtype: GObject.GType<Process>;

            // Properties

            get argv(): string[];

            // Constructors

            constructor(properties?: Partial<Process.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cmd: string[]): Process;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'stdout', callback: (_source: this, out: string) => void): number;
            connect_after(signal: 'stdout', callback: (_source: this, out: string) => void): number;
            emit(signal: 'stdout', out: string): void;
            connect(signal: 'stderr', callback: (_source: this, err: string) => void): number;
            connect_after(signal: 'stderr', callback: (_source: this, err: string) => void): number;
            emit(signal: 'stderr', err: string): void;
            connect(signal: 'exit', callback: (_source: this, code: number, terminated: boolean) => void): number;
            connect_after(signal: 'exit', callback: (_source: this, code: number, terminated: boolean) => void): number;
            emit(signal: 'exit', code: number, terminated: boolean): void;

            // Static methods

            /**
             * Start a new subprocess with the given command.
             * The first element of the vector is executed with the remaining elements as the argument list.
             * @param cmd
             */
            static subprocessv(cmd: string[]): Process;
            /**
             * Start a new subprocess with the given command which is parsed using [func`GLib`.shell_parse_argv].
             * @param cmd
             */
            static subprocess(cmd: string): Process;
            /**
             * Execute a command synchronously. The first element of the vector is executed with the remaining elements as the argument list.
             * @param cmd
             */
            static execv(cmd: string[]): string;
            /**
             * Execute a command synchronously. The command is parsed using [func`GLib`.shell_parse_argv].
             * @param cmd
             */
            static exec(cmd: string): string;
            /**
             * Execute a command asynchronously. The first element of the vector is executed with the remaining elements as the argument list.
             * @param cmd
             * @param _callback_
             */
            static exec_asyncv(cmd: string[], _callback_?: Gio.AsyncReadyCallback<Process> | null): void;
            static exec_asyncv_finish(_res_: Gio.AsyncResult): string;
            /**
             * Execute a command asynchronously. The command is parsed using [func`GLib`.shell_parse_argv].
             * @param cmd
             * @param _callback_
             */
            static exec_async(cmd: string, _callback_?: Gio.AsyncReadyCallback<Process> | null): void;
            static exec_finish(_res_: Gio.AsyncResult): string;

            // Methods

            /**
             * Force quit the subprocess.
             */
            kill(): void;
            /**
             * Send a signal to the subprocess.
             * @param signal_num Signal number to be sent
             */
            signal(signal_num: number): void;
            /**
             * Write a line to the subprocess' stdin synchronously.
             * @param _in String to be written to stdin
             */
            write(_in: string): void;
            /**
             * Write a line to the subprocess' stdin asynchronously.
             * @param _in String to be written to stdin
             */
            write_async(_in: string): Promise<void>;
            /**
             * Write a line to the subprocess' stdin asynchronously.
             * @param _in String to be written to stdin
             * @param _callback_
             */
            write_async(_in: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Write a line to the subprocess' stdin asynchronously.
             * @param _in String to be written to stdin
             * @param _callback_
             */
            write_async(_in: string, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            write_finish(_res_: Gio.AsyncResult): void;
            get_argv(): string[];
        }

        namespace Time {
            // Signal callback interfaces

            interface Now {
                (): void;
            }

            interface Cancelled {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * `Time` provides shortcuts for GLib timeout functions.
         */
        class Time extends GObject.Object {
            static $gtype: GObject.GType<Time>;

            // Constructors

            constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static interval_prio(interval: number, prio: number, fn?: GObject.Closure | null): Time;

            static timeout_prio(timeout: number, prio: number, fn?: GObject.Closure | null): Time;

            static idle_prio(prio: number, fn?: GObject.Closure | null): Time;

            static ['new'](): Time;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'now', callback: (_source: this) => void): number;
            connect_after(signal: 'now', callback: (_source: this) => void): number;
            emit(signal: 'now'): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;

            // Static methods

            /**
             * Start an interval timer. Ticks immediately then every `interval` milliseconds.
             * @param interval Tick every milliseconds.
             * @param fn Optional callback.
             */
            static interval(interval: number, fn?: GObject.Closure | null): Time;
            /**
             * Start a timeout timer which ticks after `timeout` milliseconds.
             * @param timeout Tick after milliseconds.
             * @param fn Optional callback.
             */
            static timeout(timeout: number, fn?: GObject.Closure | null): Time;
            /**
             * Start a timer which will tick when there are no higher priority tasks pending.
             * @param fn Optional callback.
             */
            static idle(fn?: GObject.Closure | null): Time;

            // Methods

            /**
             * Cancel timer and emit [signal`AstalIO`.Time::cancelled]
             */
            cancel(): void;
        }

        namespace VariableBase {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface Dropped {
                (): void;
            }

            interface Error {
                (err: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class VariableBase extends GObject.Object {
            static $gtype: GObject.GType<VariableBase>;

            // Constructors

            constructor(properties?: Partial<VariableBase.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VariableBase;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'dropped', callback: (_source: this) => void): number;
            connect_after(signal: 'dropped', callback: (_source: this) => void): number;
            emit(signal: 'dropped'): void;
            connect(signal: 'error', callback: (_source: this, err: string) => void): number;
            connect_after(signal: 'error', callback: (_source: this, err: string) => void): number;
            emit(signal: 'error', err: string): void;

            // Methods

            emit_changed(): void;
            emit_dropped(): void;
            emit_error(err: string): void;
        }

        namespace Variable {
            // Constructor properties interface

            interface ConstructorProps extends VariableBase.ConstructorProps {
                value: GObject.Value;
            }
        }

        class Variable extends VariableBase {
            static $gtype: GObject.GType<Variable>;

            // Properties

            get value(): GObject.Value;
            set value(val: GObject.Value);

            // Constructors

            constructor(properties?: Partial<Variable.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](init: GObject.Value | any): Variable;
            // Conflicted with AstalIO.VariableBase.new

            static ['new'](...args: never[]): any;

            // Methods

            poll(interval: number, exec: string, transform?: GObject.Closure | null): Variable;
            pollv(interval: number, execv: string[], transform?: GObject.Closure | null): Variable;
            pollfn(interval: number, fn: GObject.Closure): Variable;
            watch(exec: string, transform?: GObject.Closure | null): Variable;
            watchv(execv: string[], transform?: GObject.Closure | null): Variable;
            start_poll(): void;
            start_watch(): void;
            stop_poll(): void;
            stop_watch(): void;
            is_polling(): boolean;
            is_watching(): boolean;
            get_value(): unknown;
            set_value(value: GObject.Value | any): void;
        }

        type DaemonClass = typeof Daemon;
        abstract class DaemonPrivate {
            static $gtype: GObject.GType<DaemonPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ProcessClass = typeof Process;
        abstract class ProcessPrivate {
            static $gtype: GObject.GType<ProcessPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TimeClass = typeof Time;
        abstract class TimePrivate {
            static $gtype: GObject.GType<TimePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VariableBaseClass = typeof VariableBase;
        abstract class VariableBasePrivate {
            static $gtype: GObject.GType<VariableBasePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VariableClass = typeof Variable;
        abstract class VariablePrivate {
            static $gtype: GObject.GType<VariablePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ApplicationIface = typeof Application;
        namespace Application {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                instance_name: string;
                instanceName: string;
            }
        }

        export interface ApplicationNamespace {
            $gtype: GObject.GType<Application>;
            prototype: Application;
        }
        interface Application extends GObject.Object {
            // Properties

            get instance_name(): string;
            set instance_name(val: string);
            get instanceName(): string;
            set instanceName(val: string);

            // Methods

            quit(): void;
            inspector(): void;
            toggle_window(window: string): void;
            acquire_socket(): void;
            request(request: string, conn: Gio.SocketConnection): void;
            get_instance_name(): string;
            set_instance_name(value: string): void;

            // Virtual methods

            vfunc_quit(): void;
            vfunc_inspector(): void;
            vfunc_toggle_window(window: string): void;
            vfunc_acquire_socket(): void;
            vfunc_request(request: string, conn: Gio.SocketConnection): void;
            vfunc_get_instance_name(): string;
            vfunc_set_instance_name(value: string): void;
        }

        export const Application: ApplicationNamespace & {
            new (): Application; // This allows `obj instanceof Application`
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

    export default AstalIO;
}

declare module 'gi://AstalIO' {
    import AstalIO01 from 'gi://AstalIO?version=0.1';
    export default AstalIO01;
}
// END
