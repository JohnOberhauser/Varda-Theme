/// <reference path="./json-1.0.d.ts" />
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

declare module 'gi://GUsb?version=1.0' {
    // Module dependencies
    import type Json from 'gi://Json?version=1.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GUsb {
        /**
         * GUsb-1.0
         */

        export namespace ContextError {
            export const $gtype: GObject.GType<ContextError>;
        }

        enum ContextError {
            CONTEXT_ERROR_INTERNAL,
        }
        /**
         * The USB device class.
         */

        /**
         * The USB device class.
         */
        export namespace DeviceClassCode {
            export const $gtype: GObject.GType<DeviceClassCode>;
        }

        enum DeviceClassCode {
            INTERFACE_DESC,
            AUDIO,
            COMMUNICATIONS,
            HID,
            PHYSICAL,
            IMAGE,
            PRINTER,
            MASS_STORAGE,
            HUB,
            CDC_DATA,
            SMART_CARD,
            CONTENT_SECURITY,
            VIDEO,
            PERSONAL_HEALTHCARE,
            AUDIO_VIDEO,
            BILLBOARD,
            DIAGNOSTIC,
            WIRELESS_CONTROLLER,
            MISCELLANEOUS,
            APPLICATION_SPECIFIC,
            VENDOR_SPECIFIC,
        }
        /**
         * The message direction.
         */

        /**
         * The message direction.
         */
        export namespace DeviceDirection {
            export const $gtype: GObject.GType<DeviceDirection>;
        }

        enum DeviceDirection {
            DEVICE_TO_HOST,
            HOST_TO_DEVICE,
        }
        /**
         * The error code.
         */

        /**
         * The error code.
         */
        export namespace DeviceError {
            export const $gtype: GObject.GType<DeviceError>;
        }

        enum DeviceError {
            /**
             * Internal error
             */
            INTERNAL,
            /**
             * IO error
             */
            IO,
            /**
             * Operation timed out
             */
            TIMED_OUT,
            /**
             * Operation not supported
             */
            NOT_SUPPORTED,
            /**
             * No device found
             */
            NO_DEVICE,
            /**
             * Device is not open
             */
            NOT_OPEN,
            /**
             * Device is already open
             */
            ALREADY_OPEN,
            /**
             * Operation was cancelled
             */
            CANCELLED,
            /**
             * Operation failed
             */
            FAILED,
            /**
             * Permission denied
             */
            PERMISSION_DENIED,
            /**
             * Device was busy
             */
            BUSY,
        }
        /**
         * The USB language ID.
         */

        /**
         * The USB language ID.
         */
        export namespace DeviceLangid {
            export const $gtype: GObject.GType<DeviceLangid>;
        }

        enum DeviceLangid {
            INVALID,
            ENGLISH_UNITED_STATES,
        }
        /**
         * The message recipient.
         */

        /**
         * The message recipient.
         */
        export namespace DeviceRecipient {
            export const $gtype: GObject.GType<DeviceRecipient>;
        }

        enum DeviceRecipient {
            DEVICE,
            INTERFACE,
            ENDPOINT,
            OTHER,
        }
        /**
         * The message request type.
         */

        /**
         * The message request type.
         */
        export namespace DeviceRequestType {
            export const $gtype: GObject.GType<DeviceRequestType>;
        }

        enum DeviceRequestType {
            STANDARD,
            CLASS,
            VENDOR,
            RESERVED,
        }
        /**
         * The error code.
         */
        class SourceError extends GLib.Error {
            static $gtype: GObject.GType<SourceError>;

            // Static fields

            static SOURCE_ERROR_INTERNAL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * The compile-time major version
         */
        const MAJOR_VERSION: number;
        /**
         * The compile-time micro version
         */
        const MICRO_VERSION: number;
        /**
         * The compile-time minor version
         */
        const MINOR_VERSION: number;
        function source_error_quark(): GLib.Quark;
        /**
         * Converts the error code into a string
         * @param error_code a libusb error code
         * @returns String, or %NULL
         */
        function strerror(error_code: number): string;
        /**
         * Gets the GUsb installed runtime version.
         * @returns a version number, e.g. "0.3.1"
         */
        function version_string(): string;
        /**
         * The flags to use for the context.
         */

        /**
         * The flags to use for the context.
         */
        export namespace ContextFlags {
            export const $gtype: GObject.GType<ContextFlags>;
        }

        enum ContextFlags {
            NONE,
            AUTO_OPEN_DEVICES,
            SAVE_EVENTS,
            SAVE_REMOVED_DEVICES,
            DEBUG,
        }
        /**
         * Flags for the g_usb_device_claim_interface and
         * g_usb_device_release_interface methods flags parameters.
         */

        /**
         * Flags for the g_usb_device_claim_interface and
         * g_usb_device_release_interface methods flags parameters.
         */
        export namespace DeviceClaimInterfaceFlags {
            export const $gtype: GObject.GType<DeviceClaimInterfaceFlags>;
        }

        enum DeviceClaimInterfaceFlags {
            NONE,
            BIND_KERNEL_DRIVER,
        }
        module BosDescriptor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BosDescriptor extends GObject.Object {
            static $gtype: GObject.GType<BosDescriptor>;

            // Constructors

            constructor(properties?: Partial<BosDescriptor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the BOS descriptor capability.
             * @returns capability
             */
            get_capability(): number;
            /**
             * Gets any extra data from the BOS descriptor.
             * @returns a #GBytes, or %NULL for failure
             */
            get_extra(): GLib.Bytes;
        }

        module Context {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceChanged {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (device: Device): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                debug_level: number;
                debugLevel: number;
                libusb_context: any;
                libusbContext: any;
            }
        }

        class Context extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Context>;

            // Properties

            get debug_level(): number;
            set debug_level(val: number);
            get debugLevel(): number;
            set debugLevel(val: number);
            get libusb_context(): any;
            get libusbContext(): any;

            // Constructors

            constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Context;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-added', device: Device): void;
            connect(signal: 'device-changed', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-changed', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-changed', device: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-removed', device: Device): void;

            // Static methods

            static error_quark(): GLib.Quark;

            // Virtual methods

            vfunc_device_added(device: Device): void;
            vfunc_device_changed(device: Device): void;
            vfunc_device_removed(device: Device): void;

            // Methods

            /**
             * Enumerates all the USB devices and adds them to the context.
             *
             * You only need to call this function once, and any subsequent calls
             * are silently ignored.
             */
            enumerate(): void;
            /**
             * Finds a device based on its bus and address values.
             * @param bus a bus number
             * @param address a bus address
             * @returns a new #GUsbDevice, or %NULL if not found.
             */
            find_by_bus_address(bus: number, address: number): Device;
            /**
             * Finds a device based on its platform id value.
             * @param platform_id a platform id, e.g. "usb:00:03:03:02"
             * @returns a new #GUsbDevice, or %NULL if not found.
             */
            find_by_platform_id(platform_id: string): Device;
            /**
             * Finds a device based on its bus and address values.
             * @param vid a vendor ID
             * @param pid a product ID
             * @returns a new #GUsbDevice, or %NULL if not found.
             */
            find_by_vid_pid(vid: number, pid: number): Device;
            get_devices(): Device[];
            /**
             * Sets the flags to use for the context.
             * @returns the #GUsbContextFlags, e.g. %G_USB_CONTEXT_FLAGS_AUTO_OPEN_DEVICES
             */
            get_flags(): ContextFlags;
            /**
             * Gets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
             * @returns interval in ms
             */
            get_hotplug_poll_interval(): number;
            /**
             * Gets the internal GMainContext to use for synchronous methods.
             * By default the value is set to the value of g_main_context_default()
             * @returns the #GMainContext
             */
            get_main_context(): GLib.MainContext;
            /**
             * This function does nothing.
             * @param main_ctx a #GMainContext, or %NULL
             * @returns the #GUsbSource.
             */
            get_source(main_ctx: GLib.MainContext): Source;
            /**
             * Loads the context from a JSON object.
             * @param json_object a #JsonObject
             * @returns %TRUE on success
             */
            load(json_object: Json.Object): boolean;
            /**
             * Loads any devices with a specified tag into the context from a JSON object.
             * @param json_object a #JsonObject
             * @param tag a string tag, e.g. `runtime-reload`, or %NULL
             * @returns %TRUE on success
             */
            load_with_tag(json_object: Json.Object, tag: string): boolean;
            /**
             * Saves the context to an existing JSON builder.
             * @param json_builder a #JsonBuilder
             * @returns %TRUE on success
             */
            save(json_builder: Json.Builder): boolean;
            /**
             * Saves any devices with a specified tag into an existing JSON builder.
             * @param json_builder a #JsonBuilder
             * @param tag a string tag, e.g. `runtime-reload`, or %NULL
             * @returns %TRUE on success
             */
            save_with_tag(json_builder: Json.Builder, tag: string): boolean;
            /**
             * Sets the debug flags which control what is logged to the console.
             *
             * Using %G_LOG_LEVEL_INFO will output to standard out, and everything
             * else logs to standard error.
             * @param flags a GLogLevelFlags such as %G_LOG_LEVEL_ERROR | %G_LOG_LEVEL_INFO, or 0
             */
            set_debug(flags: GLib.LogLevelFlags | null): void;
            /**
             * Sets the flags to use for the context. These should be set before
             * g_usb_context_enumerate() is called.
             * @param flags some #GUsbContextFlags, e.g. %G_USB_CONTEXT_FLAGS_AUTO_OPEN_DEVICES
             */
            set_flags(flags: ContextFlags | null): void;
            /**
             * Sets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
             * This defaults to 1000ms and can be changed before or after g_usb_context_enumerate() has been
             * called.
             * @param hotplug_poll_interval the interval in ms
             */
            set_hotplug_poll_interval(hotplug_poll_interval: number): void;
            /**
             * Sets the internal GMainContext to use for synchronous methods.
             * @param main_ctx
             */
            set_main_context(main_ctx: GLib.MainContext): void;
            /**
             * Waits for the device to be replugged.
             * It may come back with a different VID:PID.
             *
             * Warning: This is synchronous and blocks until the device comes
             * back or the timeout triggers.
             * @param device a #GUsbDevice
             * @param timeout_ms timeout to wait
             * @returns a new #GUsbDevice, or %NULL for invalid
             */
            wait_for_replug(device: Device, timeout_ms: number): Device;

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

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                context: Context;
                libusb_device: any;
                libusbDevice: any;
                platform_id: string;
                platformId: string;
            }
        }

        class Device extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Device>;

            // Properties

            set context(val: Context);
            get libusb_device(): any;
            get libusbDevice(): any;
            set platform_id(val: string);
            set platformId(val: string);

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static error_quark(): GLib.Quark;

            // Methods

            /**
             * Adds a tag, which is included in the JSON log to identify the specific device.
             *
             * For instance, there might be a pre-update runtime, a bootloader and a post-update runtime
             * and allowing tags to be saved to the backend object allows us to identify each version of
             * the same physical device.
             * @param tag a tag, for example `bootloader` or `runtime-reload`
             */
            add_tag(tag: string): void;
            /**
             * Perform a USB bulk transfer.
             *
             * Warning: this function is synchronous, and cannot be cancelled.
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success
             */
            bulk_transfer(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number];
            /**
             * Do an async bulk transfer
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             */
            bulk_transfer_async(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<number>;
            /**
             * Do an async bulk transfer
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to run on completion
             */
            bulk_transfer_async(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Do an async bulk transfer
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to run on completion
             */
            bulk_transfer_async(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Gets the result from the asynchronous function.
             * @param res the #GAsyncResult
             * @returns the actual number of bytes sent, or -1 on error.
             */
            bulk_transfer_finish(res: Gio.AsyncResult): number;
            /**
             * Claim an interface of the device.
             * @param iface bInterfaceNumber of the interface you wish to claim
             * @param flags #GUsbDeviceClaimInterfaceFlags
             * @returns %TRUE on success
             */
            claim_interface(iface: number, flags: DeviceClaimInterfaceFlags | null): boolean;
            /**
             * Clear all the events saved by the device.
             */
            clear_events(): void;
            /**
             * Closes the device when it is no longer required.
             * @returns %TRUE on success
             */
            close(): boolean;
            /**
             * Perform a USB control transfer.
             *
             * Warning: this function is synchronous, and cannot be cancelled.
             * @param direction
             * @param request_type the request type field for the setup packet
             * @param recipient
             * @param request the request field for the setup packet
             * @param value the value field for the setup packet
             * @param idx the index field for the setup packet
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success
             */
            control_transfer(
                direction: DeviceDirection | null,
                request_type: DeviceRequestType | null,
                recipient: DeviceRecipient | null,
                request: number,
                value: number,
                idx: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number];
            /**
             * Do an async control transfer
             * @param direction
             * @param request_type
             * @param recipient
             * @param request
             * @param value
             * @param idx
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             */
            control_transfer_async(
                direction: DeviceDirection | null,
                request_type: DeviceRequestType | null,
                recipient: DeviceRecipient | null,
                request: number,
                value: number,
                idx: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<number>;
            /**
             * Do an async control transfer
             * @param direction
             * @param request_type
             * @param recipient
             * @param request
             * @param value
             * @param idx
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to run on completion
             */
            control_transfer_async(
                direction: DeviceDirection | null,
                request_type: DeviceRequestType | null,
                recipient: DeviceRecipient | null,
                request: number,
                value: number,
                idx: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Do an async control transfer
             * @param direction
             * @param request_type
             * @param recipient
             * @param request
             * @param value
             * @param idx
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to run on completion
             */
            control_transfer_async(
                direction: DeviceDirection | null,
                request_type: DeviceRequestType | null,
                recipient: DeviceRecipient | null,
                request: number,
                value: number,
                idx: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Gets the result from the asynchronous function.
             * @param res the #GAsyncResult
             * @returns the actual number of bytes sent, or -1 on error.
             */
            control_transfer_finish(res: Gio.AsyncResult): number;
            /**
             * Gets the USB address for the device.
             * @returns The 8-bit address
             */
            get_address(): number;
            /**
             * Gets the first bos_descriptor that matches the descriptor capability.
             * If you want to find all the BOS descriptors that match (there may be other matching BOS
             * descriptors you have to use `g_usb_device_get_bos_descriptors()` and check each one manually.
             * @param capability a BOS capability type
             * @returns a #GUsbBosDescriptor or %NULL for not found
             */
            get_bos_descriptor(capability: number): BosDescriptor;
            /**
             * Gets all the BOS descriptors exported by the device.
             *
             * The first time this method is used the hardware is queried and then after that cached results
             * are returned. To invalidate the caches use g_usb_device_invalidate().
             * @returns an array of BOS descriptors
             */
            get_bos_descriptors(): BosDescriptor[];
            /**
             * Gets the USB bus number for the device.
             * @returns The 8-bit bus number
             */
            get_bus(): number;
            /**
             * Gets the device children if any exist.
             * @returns an array of #GUsbDevice
             */
            get_children(): Device[];
            /**
             * Get the bConfigurationValue for the active configuration of the device.
             *
             * Warning: this function is synchronous.
             * @returns The bConfigurationValue of the active config, or -1 on error
             */
            get_configuration(): number;
            /**
             * Get the index for the active Configuration string descriptor
             * ie, iConfiguration.
             * @returns a string descriptor index.
             */
            get_configuration_index(): number;
            /**
             * Gets the date and time that the #GUsbDevice was created.
             *
             * This can be used as an indicator if the device replugged, as the vendor and product IDs may not
             * change for some devices. Use `g_date_time_equal()` to verify equality.
             * @returns a #GDateTime
             */
            get_created(): GLib.DateTime;
            /**
             * Gets the string index from the vendor class interface descriptor.
             * @param class_id a device class, e.g. 0xff for VENDOR
             * @param subclass_id a device subclass
             * @param protocol_id a protocol number
             * @returns a non-zero index, or 0x00 for failure
             */
            get_custom_index(class_id: number, subclass_id: number, protocol_id: number): number;
            /**
             * Gets the device class, typically a #GUsbDeviceClassCode.
             * @returns a device class number, e.g. 0x09 is a USB hub.
             */
            get_device_class(): number;
            /**
             * Gets the device protocol qualified by the class and subclass numbers.
             * See g_usb_device_get_device_class() and g_usb_device_get_device_subclass().
             * @returns a device protocol number.
             */
            get_device_protocol(): number;
            /**
             * Gets the device subclass qualified by the class number.
             * See g_usb_device_get_device_class().
             * @returns a device subclass number.
             */
            get_device_subclass(): number;
            /**
             * Gets all the events saved by the device.
             *
             * Events are only collected when the `G_USB_CONTEXT_FLAGS_SAVE_EVENTS` flag is used before
             * enumerating the context. Events can be used to replay device transactions.
             * @returns an array of events
             */
            get_events(): DeviceEvent[];
            /**
             * Gets the default HID descriptors exported by the device.
             *
             * If more than one interface exports a HID descriptor, use g_usb_device_get_hid_descriptors()
             * instead.
             * @returns a HID descriptor, or %NULL
             */
            get_hid_descriptor_default(): GLib.Bytes;
            /**
             * Gets all the HID descriptors exported by the device.
             *
             * The first time this method is used the hardware is queried and then after that cached results
             * are returned. To invalidate the caches use g_usb_device_invalidate().
             * @returns an array of HID descriptors
             */
            get_hid_descriptors(): GLib.Bytes[];
            /**
             * Gets the first interface that matches the vendor class interface descriptor.
             * If you want to find all the interfaces that match (there may be other
             * 'alternate' interfaces you have to use g_usb_device_get_interfaces() and
             * check each one manally.
             * @param class_id a device class, e.g. 0xff for VENDOR
             * @param subclass_id a device subclass
             * @param protocol_id a protocol number
             * @returns a #GUsbInterface or %NULL for not found
             */
            get_interface(class_id: number, subclass_id: number, protocol_id: number): Interface;
            /**
             * Gets all the interfaces exported by the device.
             *
             * The first time this method is used the hardware is queried and then after that cached results
             * are returned. To invalidate the caches use g_usb_device_invalidate().
             * @returns an array of interfaces or %NULL for error
             */
            get_interfaces(): Interface[];
            /**
             * Gets the index for the Manufacturer string descriptor.
             * @returns a string descriptor index.
             */
            get_manufacturer_index(): number;
            /**
             * Gets the device parent if one exists.
             * @returns #GUsbDevice or %NULL
             */
            get_parent(): Device;
            /**
             * Gets the product ID for the device.
             * @returns an ID.
             */
            get_pid(): number;
            /**
             * Gets the product ID for the device as a string.
             * @returns an string ID, or %NULL if not available.
             */
            get_pid_as_str(): string;
            /**
             * Gets the platform identifier for the device.
             *
             * When the device is removed and then replugged, this value is not expected to
             * be different.
             * @returns The platform ID, e.g. "usb:02:00:03:01"
             */
            get_platform_id(): string;
            /**
             * Gets the USB port number for the device.
             * @returns The 8-bit port number
             */
            get_port_number(): number;
            /**
             * Gets the index for the Product string descriptor.
             * @returns a string descriptor index.
             */
            get_product_index(): number;
            /**
             * Gets the BCD firmware version number for the device.
             * @returns a version number in BCD format.
             */
            get_release(): number;
            /**
             * Gets the index for the Serial Number string descriptor.
             * @returns a string descriptor index.
             */
            get_serial_number_index(): number;
            /**
             * Gets the BCD specification revision for the device. For example,
             * `0x0110` indicates USB 1.1 and 0x0320 indicates USB 3.2
             * @returns a specification revision in BCD format.
             */
            get_spec(): number;
            /**
             * Get a string descriptor from the device. The returned string should be freed
             * with g_free() when no longer needed.
             * @param desc_index the index for the string descriptor to retrieve
             * @returns a newly-allocated string holding the descriptor, or NULL on error.
             */
            get_string_descriptor(desc_index: number): string;
            /**
             * Get a raw string descriptor from the device. The returned string should be freed
             * with g_bytes_unref() when no longer needed.
             * The descriptor will be at most 128 btes in length, if you need to
             * issue a request with either a smaller or larger descriptor, you can
             * use g_usb_device_get_string_descriptor_bytes_full instead.
             * @param desc_index the index for the string descriptor to retrieve
             * @param langid the language ID
             * @returns a possibly UTF-16 string, or NULL on error.
             */
            get_string_descriptor_bytes(desc_index: number, langid: number): GLib.Bytes;
            /**
             * Get a raw string descriptor from the device. The returned string should be freed
             * with g_bytes_unref() when no longer needed.
             * @param desc_index the index for the string descriptor to retrieve
             * @param langid the language ID
             * @param length size of the request data buffer
             * @returns a possibly UTF-16 string, or NULL on error.
             */
            get_string_descriptor_bytes_full(desc_index: number, langid: number, length: number): GLib.Bytes;
            /**
             * Gets all the tags.
             * @returns string tags
             */
            get_tags(): string[];
            /**
             * Gets the vendor ID for the device.
             * @returns an ID.
             */
            get_vid(): number;
            /**
             * Gets the vendor ID for the device as a string.
             * @returns an string ID, or %NULL if not available.
             */
            get_vid_as_str(): string;
            /**
             * Checks if a tag has been used to identify the specific device.
             * @param tag a tag, for example `bootloader` or `runtime-reload`
             * @returns %TRUE on success
             */
            has_tag(tag: string): boolean;
            /**
             * Perform a USB interrupt transfer.
             *
             * Warning: this function is synchronous, and cannot be cancelled.
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success
             */
            interrupt_transfer(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number];
            /**
             * Do an async interrupt transfer
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             */
            interrupt_transfer_async(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<number>;
            /**
             * Do an async interrupt transfer
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to run on completion
             */
            interrupt_transfer_async(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Do an async interrupt transfer
             * @param endpoint the address of a valid endpoint to communicate with
             * @param data a suitably-sized data buffer for either input or output
             * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to run on completion
             */
            interrupt_transfer_async(
                endpoint: number,
                data: Uint8Array | string,
                timeout: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Gets the result from the asynchronous function.
             * @param res the #GAsyncResult
             * @returns the actual number of bytes sent, or -1 on error.
             */
            interrupt_transfer_finish(res: Gio.AsyncResult): number;
            /**
             * Invalidates the caches used in g_usb_device_get_interfaces().
             */
            invalidate(): void;
            /**
             * Gets if the device is emulated.
             * @returns %TRUE if the device is emulated and not backed by a physical device.
             */
            is_emulated(): boolean;
            /**
             * Opens the device for use.
             *
             * Warning: this function is synchronous.
             * @returns %TRUE on success
             */
            open(): boolean;
            /**
             * Release an interface of the device.
             * @param iface bInterfaceNumber of the interface you wish to release
             * @param flags #GUsbDeviceClaimInterfaceFlags
             * @returns %TRUE on success
             */
            release_interface(iface: number, flags: DeviceClaimInterfaceFlags | null): boolean;
            /**
             * Removes a tag, which is included in the JSON log to identify the specific device.
             * @param tag a tag, for example `bootloader` or `runtime-reload`
             */
            remove_tag(tag: string): void;
            /**
             * Perform a USB port reset to reinitialize a device.
             *
             * If the reset succeeds, the device will appear to disconnected and reconnected.
             * This means the `self` will no longer be valid and should be closed and
             * rediscovered.
             *
             * This is a blocking function which usually incurs a noticeable delay.
             * @returns %TRUE on success
             */
            reset(): boolean;
            /**
             * Set the active bConfigurationValue for the device.
             *
             * Warning: this function is synchronous.
             * @param configuration the configuration value to set
             * @returns %TRUE on success
             */
            set_configuration(configuration: number): boolean;
            /**
             * Sets an alternate setting on an interface.
             * @param iface bInterfaceNumber of the interface you wish to release
             * @param alt alternative setting number
             * @returns %TRUE on success
             */
            set_interface_alt(iface: number, alt: number): boolean;

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

        module DeviceEvent {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class DeviceEvent extends GObject.Object {
            static $gtype: GObject.GType<DeviceEvent>;

            // Constructors

            constructor(properties?: Partial<DeviceEvent.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets any bytes data from the event.
             * @returns a #GBytes, or %NULL
             */
            get_bytes(): GLib.Bytes;
            /**
             * Gets the event ID.
             * @returns string, or %NULL
             */
            get_id(): string;
            /**
             * Gets any return code from the event.
             * @returns a `enum libusb_error`
             */
            get_rc(): number;
            /**
             * Gets any status data from the event.
             * @returns a `enum libusb_transfer_status`, or -1 for failure
             */
            get_status(): number;
            /**
             * Set the bytes data to the event.
             * @param bytes a #GBytes
             */
            set_bytes(bytes: GLib.Bytes | Uint8Array): void;
        }

        module DeviceList {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (device: Device): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context: Context;
            }
        }

        class DeviceList extends GObject.Object {
            static $gtype: GObject.GType<DeviceList>;

            // Properties

            get context(): Context;

            // Constructors

            constructor(properties?: Partial<DeviceList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: Context): DeviceList;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-added', device: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-removed', device: Device): void;

            // Virtual methods

            vfunc_device_added(device: Device): void;
            vfunc_device_removed(device: Device): void;

            // Methods

            /**
             * This function does nothing.
             */
            coldplug(): void;
            /**
             * Finds a device based on its bus and address values.
             * @param bus a bus number
             * @param address a bus address
             * @returns a new #GUsbDevice, or %NULL if not found.
             */
            find_by_bus_address(bus: number, address: number): Device;
            /**
             * Finds a device based on its bus and address values.
             * @param vid a vendor ID
             * @param pid a product ID
             * @returns a new #GUsbDevice, or %NULL if not found.
             */
            find_by_vid_pid(vid: number, pid: number): Device;
            get_devices(): Device[];
        }

        module Endpoint {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Endpoint extends GObject.Object {
            static $gtype: GObject.GType<Endpoint>;

            // Constructors

            constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the address of the endpoint.
             * @returns The 4-bit endpoint address
             */
            get_address(): number;
            /**
             * Gets the direction of the endpoint.
             * @returns The endpoint direction
             */
            get_direction(): DeviceDirection;
            /**
             * Gets any extra data from the endpoint.
             * @returns a #GBytes, or %NULL for failure
             */
            get_extra(): GLib.Bytes;
            /**
             * Gets the type of endpoint.
             * @returns The 8-bit type
             */
            get_kind(): number;
            /**
             * Gets the maximum packet size this endpoint is capable of sending/receiving.
             * @returns The maximum packet size
             */
            get_maximum_packet_size(): number;
            /**
             * Gets the number part of endpoint address.
             * @returns The lower 4-bit of endpoint address
             */
            get_number(): number;
            /**
             * Gets the endpoint polling interval.
             * @returns The endpoint polling interval
             */
            get_polling_interval(): number;
            /**
             * Gets the rate at which synchronization feedback is provided, for audio device only.
             * @returns The endpoint refresh
             */
            get_refresh(): number;
            /**
             * Gets the address if the synch endpoint, for audio device only.
             * @returns The synch endpoint address
             */
            get_synch_address(): number;
        }

        module Interface {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Interface extends GObject.Object {
            static $gtype: GObject.GType<Interface>;

            // Constructors

            constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the alternate setting for the interface.
             * @returns alt setting, typically zero.
             */
            get_alternate(): number;
            /**
             * Gets the interface class, typically a #GUsbInterfaceClassCode.
             * @returns a interface class number, e.g. 0x09 is a USB hub.
             */
            get_class(): number;
            /**
             * Gets interface endpoints.
             * @returns an array of endpoints, or %NULL on failure.
             */
            get_endpoints(): Endpoint[];
            /**
             * Gets any extra data from the interface.
             * @returns a #GBytes, or %NULL for failure
             */
            get_extra(): GLib.Bytes;
            /**
             * Gets the index for the string descriptor.
             * @returns a string descriptor index.
             */
            get_index(): number;
            /**
             * Gets the type of interface.
             * @returns The 8-bit address
             */
            get_kind(): number;
            /**
             * Gets the USB bus number for the interface.
             * @returns The 8-bit bus number
             */
            get_length(): number;
            /**
             * Gets the interface number.
             * @returns The interface ID
             */
            get_number(): number;
            /**
             * Gets the interface protocol qualified by the class and subclass numbers.
             * See g_usb_interface_get_class() and g_usb_interface_get_subclass().
             * @returns a interface protocol number.
             */
            get_protocol(): number;
            /**
             * Gets the interface subclass qualified by the class number.
             * See g_usb_interface_get_class().
             * @returns a interface subclass number.
             */
            get_subclass(): number;
        }

        type BosDescriptorClass = typeof BosDescriptor;
        type ContextClass = typeof Context;
        type DeviceClass = typeof Device;
        type DeviceEventClass = typeof DeviceEvent;
        type DeviceListClass = typeof DeviceList;
        type EndpointClass = typeof Endpoint;
        type InterfaceClass = typeof Interface;
        abstract class Source {
            static $gtype: GObject.GType<Source>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static error_quark(): GLib.Quark;

            // Methods

            /**
             * This function does nothing.
             * @param func a function to call
             */
            set_callback(func: GLib.SourceFunc): void;
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

    export default GUsb;
}

declare module 'gi://GUsb' {
    import GUsb10 from 'gi://GUsb?version=1.0';
    export default GUsb10;
}
// END
