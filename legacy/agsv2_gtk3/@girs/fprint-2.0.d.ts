/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gusb-1.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://FPrint?version=2.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GUsb from 'gi://GUsb?version=1.0';
    import type Json from 'gi://Json?version=1.0';

    export namespace FPrint {
        /**
         * FPrint-2.0
         */

        /**
         * Error codes for device operations. More specific errors from other domains
         * such as #G_IO_ERROR or #G_USB_DEVICE_ERROR may also be reported.
         */
        class DeviceError extends GLib.Error {
            static $gtype: GObject.GType<DeviceError>;

            // Static fields

            /**
             * A general error occurred.
             */
            static GENERAL: number;
            /**
             * The device does not support the requested
             *  operation.
             */
            static NOT_SUPPORTED: number;
            /**
             * The device needs to be opened to start this
             *   operation.
             */
            static NOT_OPEN: number;
            /**
             * The device has already been opened.
             */
            static ALREADY_OPEN: number;
            /**
             * The device is busy with another request.
             */
            static BUSY: number;
            /**
             * Protocol error
             */
            static PROTO: number;
            /**
             * The passed data is invalid
             */
            static DATA_INVALID: number;
            /**
             * Requested print was not found on device
             */
            static DATA_NOT_FOUND: number;
            /**
             * No space on device available for operation
             */
            static DATA_FULL: number;
            /**
             * Enrolling template duplicates storaged templates
             */
            static DATA_DUPLICATE: number;
            /**
             * The device has been removed.
             */
            static REMOVED: number;
            /**
             * The device might be getting too hot
             */
            static TOO_HOT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Error codes representing scan failures resulting in the user needing to
         * retry.
         */

        /**
         * Error codes representing scan failures resulting in the user needing to
         * retry.
         */
        export namespace DeviceRetry {
            export const $gtype: GObject.GType<DeviceRetry>;
        }

        enum DeviceRetry {
            /**
             * The scan did not succeed due to poor scan quality
             *   or other general user scanning problem.
             */
            GENERAL,
            /**
             * The scan did not succeed because the finger
             *   swipe was too short.
             */
            TOO_SHORT,
            /**
             * The scan did not succeed because the finger
             *   was not centered on the scanner.
             */
            CENTER_FINGER,
            /**
             * The scan did not succeed due to quality or
             *   pressure problems; the user should remove their finger from the scanner
             *   before retrying.
             */
            REMOVE_FINGER,
        }

        export namespace DeviceType {
            export const $gtype: GObject.GType<DeviceType>;
        }

        enum DeviceType {
            /**
             * The device is a virtual device
             */
            VIRTUAL,
            /**
             * The device is a udev device
             */
            UDEV,
            /**
             * The device is a USB device
             */
            USB,
        }

        export namespace Finger {
            export const $gtype: GObject.GType<Finger>;
        }

        enum Finger {
            /**
             * The finger is unknown
             */
            UNKNOWN,
            /**
             * Left thumb
             */
            LEFT_THUMB,
            /**
             * Left index finger
             */
            LEFT_INDEX,
            /**
             * Left middle finger
             */
            LEFT_MIDDLE,
            /**
             * Left ring finger
             */
            LEFT_RING,
            /**
             * Left little finger
             */
            LEFT_LITTLE,
            /**
             * Right thumb
             */
            RIGHT_THUMB,
            /**
             * Right index finger
             */
            RIGHT_INDEX,
            /**
             * Right middle finger
             */
            RIGHT_MIDDLE,
            /**
             * Right ring finger
             */
            RIGHT_RING,
            /**
             * Right little finger
             */
            RIGHT_LITTLE,
            /**
             * The first finger in the fp-print order
             */
            FIRST,
            /**
             * The last finger in the fp-print order
             */
            LAST,
        }

        export namespace ScanType {
            export const $gtype: GObject.GType<ScanType>;
        }

        enum ScanType {
            /**
             * Sensor requires swiping the finger.
             */
            SWIPE,
            /**
             * Sensor requires placing/pressing down the finger.
             */
            PRESS,
        }
        /**
         * When a device is created, it is assumed to be cold. Applications such as
         * fprintd may want to ensure all devices on the system are cold before
         * shutting down in order to ensure that the cool-off period is not violated
         * because the internal libfprint state about the device is lost.
         */

        /**
         * When a device is created, it is assumed to be cold. Applications such as
         * fprintd may want to ensure all devices on the system are cold before
         * shutting down in order to ensure that the cool-off period is not violated
         * because the internal libfprint state about the device is lost.
         */
        export namespace Temperature {
            export const $gtype: GObject.GType<Temperature>;
        }

        enum Temperature {
            /**
             * Sensor is considered cold.
             */
            COLD,
            /**
             * Sensor is warm, usage time may be limited.
             */
            WARM,
            /**
             * Sensor is hot and cannot be used.
             */
            HOT,
        }
        function device_error_quark(): GLib.Quark;
        function device_retry_quark(): GLib.Quark;
        interface EnrollProgress {
            (device: Device, completed_stages: number, print?: Print | null, error?: GLib.Error | null): void;
        }
        interface MatchCb {
            (device: Device, match?: Print | null, print?: Print | null, error?: GLib.Error | null): void;
        }

        export namespace DeviceFeature {
            export const $gtype: GObject.GType<DeviceFeature>;
        }

        enum DeviceFeature {
            /**
             * Device does not support any feature
             */
            NONE,
            /**
             * Supports image capture
             */
            CAPTURE,
            /**
             * Supports finger identification
             */
            IDENTIFY,
            /**
             * Supports finger verification
             */
            VERIFY,
            /**
             * Device has a persistent storage
             */
            STORAGE,
            /**
             * Supports listing the storage templates
             */
            STORAGE_LIST,
            /**
             * Supports deleting stored templates
             */
            STORAGE_DELETE,
            /**
             * Supports clearing the whole storage
             */
            STORAGE_CLEAR,
            /**
             * Natively supports duplicates detection
             */
            DUPLICATES_CHECK,
            /**
             * Whether the device can run continuously
             */
            ALWAYS_ON,
            /**
             * Supports updating an existing print record using new scans
             */
            UPDATE_PRINT,
        }

        export namespace FingerStatusFlags {
            export const $gtype: GObject.GType<FingerStatusFlags>;
        }

        enum FingerStatusFlags {
            /**
             * Sensor has not the finger on it, nor requires it
             */
            NONE,
            /**
             * Sensor waits for the finger
             */
            NEEDED,
            /**
             * Sensor has the finger on it
             */
            PRESENT,
        }
        module Context {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (device: Device): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Context extends GObject.Object {
            static $gtype: GObject.GType<Context>;

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
            connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-removed', device: Device): void;

            // Virtual methods

            /**
             * Called when a new device is added
             * @param device
             */
            vfunc_device_added(device: Device): void;
            /**
             * Called when a device is removed
             * @param device
             */
            vfunc_device_removed(device: Device): void;

            // Methods

            /**
             * Enumerate all devices. You should call this function exactly once
             * at startup. Please note that it iterates the mainloop until all
             * devices are enumerated.
             */
            enumerate(): void;
            /**
             * Get all devices. fp_context_enumerate() will be called as needed.
             * @returns a new #GPtrArray of #FpDevice's.
             */
            get_devices(): Device[];
        }

        module Device {
            // Signal callback interfaces

            interface Removed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
                device_id: string;
                deviceId: string;
                driver: string;
                finger_status: FingerStatusFlags;
                fingerStatus: FingerStatusFlags;
                fpi_driver_data: number;
                fpiDriverData: number;
                fpi_environ: string;
                fpiEnviron: string;
                fpi_udev_data_hidraw: string;
                fpiUdevDataHidraw: string;
                fpi_udev_data_spidev: string;
                fpiUdevDataSpidev: string;
                fpi_usb_device: GUsb.Device;
                fpiUsbDevice: GUsb.Device;
                name: string;
                nr_enroll_stages: number;
                nrEnrollStages: number;
                open: boolean;
                removed: boolean;
                scan_type: ScanType;
                scanType: ScanType;
                temperature: Temperature;
            }
        }

        abstract class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
            static $gtype: GObject.GType<Device>;

            // Properties

            get device_id(): string;
            get deviceId(): string;
            get driver(): string;
            get finger_status(): FingerStatusFlags;
            get fingerStatus(): FingerStatusFlags;
            set fpi_driver_data(val: number);
            set fpiDriverData(val: number);
            set fpi_environ(val: string);
            set fpiEnviron(val: string);
            get fpi_udev_data_hidraw(): string;
            get fpiUdevDataHidraw(): string;
            get fpi_udev_data_spidev(): string;
            get fpiUdevDataSpidev(): string;
            get fpi_usb_device(): GUsb.Device;
            get fpiUsbDevice(): GUsb.Device;
            get name(): string;
            get nr_enroll_stages(): number;
            get nrEnrollStages(): number;
            get open(): boolean;
            get removed(): boolean;
            get scan_type(): ScanType;
            get scanType(): ScanType;
            get temperature(): Temperature;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'removed', callback: (_source: this) => void): number;
            connect_after(signal: 'removed', callback: (_source: this) => void): number;
            emit(signal: 'removed'): void;

            // Methods

            /**
             * Start an asynchronous operation to capture an image. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_capture_finish().
             * @param wait_for_finger Whether to wait for a finger or not
             * @param cancellable a #GCancellable, or %NULL
             */
            capture(wait_for_finger: boolean, cancellable?: Gio.Cancellable | null): Promise<Image>;
            /**
             * Start an asynchronous operation to capture an image. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_capture_finish().
             * @param wait_for_finger Whether to wait for a finger or not
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            capture(
                wait_for_finger: boolean,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start an asynchronous operation to capture an image. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_capture_finish().
             * @param wait_for_finger Whether to wait for a finger or not
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            capture(
                wait_for_finger: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Image> | void;
            /**
             * Finish an asynchronous operation to capture an image. You should check
             * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
             * was an interaction issue.
             *
             * See fp_device_capture().
             * @param result A #GAsyncResult
             * @returns #FpImage or %NULL on error
             */
            capture_finish(result: Gio.AsyncResult): Image;
            /**
             * Start an synchronous operation to capture an image.
             * @param wait_for_finger Whether to wait for a finger or not
             * @param cancellable a #GCancellable, or %NULL
             * @returns A new #FpImage or %NULL on error
             */
            capture_sync(wait_for_finger: boolean, cancellable?: Gio.Cancellable | null): Image;
            /**
             * Start an asynchronous operation to delete all prints from the device.
             * The callback will be called once the operation has finished. Retrieve
             * the result with fp_device_clear_storage_finish().
             *
             * This only makes sense on devices that store prints on-chip, but is safe
             * to always call.
             * @param cancellable a #GCancellable, or %NULL
             */
            clear_storage(cancellable?: Gio.Cancellable | null): Promise<void>;
            /**
             * Start an asynchronous operation to delete all prints from the device.
             * The callback will be called once the operation has finished. Retrieve
             * the result with fp_device_clear_storage_finish().
             *
             * This only makes sense on devices that store prints on-chip, but is safe
             * to always call.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            clear_storage(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Start an asynchronous operation to delete all prints from the device.
             * The callback will be called once the operation has finished. Retrieve
             * the result with fp_device_clear_storage_finish().
             *
             * This only makes sense on devices that store prints on-chip, but is safe
             * to always call.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            clear_storage(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            /**
             * Finish an asynchronous operation to delete all enrolled prints.
             *
             * See fp_device_clear_storage().
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            clear_storage_finish(result: Gio.AsyncResult): void;
            /**
             * Clear sensor storage.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %FALSE on error, %TRUE otherwise
             */
            clear_storage_sync(cancellable?: Gio.Cancellable | null): void;
            /**
             * Start an asynchronous operation to close the device. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_close_finish().
             * @param cancellable a #GCancellable, or %NULL
             */
            close(cancellable?: Gio.Cancellable | null): Promise<void>;
            /**
             * Start an asynchronous operation to close the device. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_close_finish().
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            close(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Start an asynchronous operation to close the device. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_close_finish().
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            close(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            /**
             * Finish an asynchronous operation to close the device.
             * See fp_device_close().
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            close_finish(result: Gio.AsyncResult): void;
            /**
             * Close the device synchronously.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %FALSE on error, %TRUE otherwise
             */
            close_sync(cancellable?: Gio.Cancellable | null): void;
            /**
             * Start an asynchronous operation to delete a print from the device.
             * The callback will be called once the operation has finished. Retrieve
             * the result with fp_device_delete_print_finish().
             *
             * This only makes sense on devices that store prints on-chip, but is safe
             * to always call.
             * @param enrolled_print a #FpPrint to delete
             * @param cancellable a #GCancellable, or %NULL
             */
            delete_print(enrolled_print: Print, cancellable?: Gio.Cancellable | null): Promise<void>;
            /**
             * Start an asynchronous operation to delete a print from the device.
             * The callback will be called once the operation has finished. Retrieve
             * the result with fp_device_delete_print_finish().
             *
             * This only makes sense on devices that store prints on-chip, but is safe
             * to always call.
             * @param enrolled_print a #FpPrint to delete
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            delete_print(
                enrolled_print: Print,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start an asynchronous operation to delete a print from the device.
             * The callback will be called once the operation has finished. Retrieve
             * the result with fp_device_delete_print_finish().
             *
             * This only makes sense on devices that store prints on-chip, but is safe
             * to always call.
             * @param enrolled_print a #FpPrint to delete
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            delete_print(
                enrolled_print: Print,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            /**
             * Finish an asynchronous operation to delete an enrolled print.
             *
             * See fp_device_delete_print().
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            delete_print_finish(result: Gio.AsyncResult): void;
            /**
             * Delete a given print from the device.
             * @param enrolled_print a #FpPrint to verify
             * @param cancellable a #GCancellable, or %NULL
             * @returns %FALSE on error, %TRUE otherwise
             */
            delete_print_sync(enrolled_print: Print, cancellable?: Gio.Cancellable | null): void;
            /**
             * Start an asynchronous operation to enroll a print. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_enroll_finish().
             *
             * The `template_print` parameter is a #FpPrint with available metadata filled
             * in and, optionally, with existing fingerprint data to be updated with newly
             * enrolled fingerprints if a device driver supports it. The driver may make use
             * of the metadata, when e.g. storing the print on device memory. It is undefined
             * whether this print is filled in by the driver and returned, or whether the
             * driver will return a newly created print after enrollment succeeded.
             * @param template_print a #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             */
            enroll(template_print: Print, cancellable?: Gio.Cancellable | null): Promise<Print>;
            /**
             * Start an asynchronous operation to enroll a print. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_enroll_finish().
             *
             * The `template_print` parameter is a #FpPrint with available metadata filled
             * in and, optionally, with existing fingerprint data to be updated with newly
             * enrolled fingerprints if a device driver supports it. The driver may make use
             * of the metadata, when e.g. storing the print on device memory. It is undefined
             * whether this print is filled in by the driver and returned, or whether the
             * driver will return a newly created print after enrollment succeeded.
             * @param template_print a #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            enroll(
                template_print: Print,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start an asynchronous operation to enroll a print. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_enroll_finish().
             *
             * The `template_print` parameter is a #FpPrint with available metadata filled
             * in and, optionally, with existing fingerprint data to be updated with newly
             * enrolled fingerprints if a device driver supports it. The driver may make use
             * of the metadata, when e.g. storing the print on device memory. It is undefined
             * whether this print is filled in by the driver and returned, or whether the
             * driver will return a newly created print after enrollment succeeded.
             * @param template_print a #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            enroll(
                template_print: Print,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Print> | void;
            /**
             * Finish an asynchronous operation to enroll a print. You should check
             * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
             * was an interaction issue.
             * See fp_device_enroll().
             * @param result A #GAsyncResult
             * @returns The enrolled #FpPrint, or %NULL on error
             */
            enroll_finish(result: Gio.AsyncResult): Print;
            /**
             * Enroll a new print. See fp_device_enroll(). It is undefined whether
             * `template_print` is updated or a newly created #FpPrint is returned.
             * @param template_print A #FpPrint to fill in or use   as a template.
             * @param cancellable a #GCancellable, or %NULL
             * @param progress_cb progress reporting callback
             * @returns A #FpPrint on success, %NULL otherwise
             */
            enroll_sync(
                template_print: Print,
                cancellable?: Gio.Cancellable | null,
                progress_cb?: EnrollProgress | null,
            ): Print;
            get_device_id(): string;
            get_driver(): string;
            /**
             * Gets the #FpDeviceFeature's supported by the `device`.
             * @returns #FpDeviceFeature flags of supported features
             */
            get_features(): DeviceFeature;
            /**
             * Retrieves the finger status flags for the device.
             * This can be used by the UI to present the relevant feedback, although it
             * is not guaranteed to be a relevant value when not performing any action.
             * @returns The current #FpFingerStatusFlags
             */
            get_finger_status(): FingerStatusFlags;
            get_name(): string;
            /**
             * Retrieves the number of enroll stages for this device.
             * @returns The number of enroll stages
             */
            get_nr_enroll_stages(): number;
            /**
             * Retrieves the scan type of the device.
             * @returns The #FpScanType
             */
            get_scan_type(): ScanType;
            /**
             * Retrieves simple temperature information for device. It is not possible
             * to use a device when this is #FP_TEMPERATURE_HOT.
             * @returns The current temperature estimation.
             */
            get_temperature(): Temperature;
            /**
             * Checks if `device` supports the requested #FpDeviceFeature's.
             * See fp_device_get_features()
             * @param feature #FpDeviceFeature flags to check against device supported features
             * @returns %TRUE if supported, %FALSE otherwise
             */
            has_feature(feature: DeviceFeature | null): boolean;
            /**
             * Whether the device has on-chip storage. If it has, you can list the
             * prints stored on the with fp_device_list_prints() and you should
             * always delete prints from the device again using
             * fp_device_delete_print().
             */
            has_storage(): boolean;
            /**
             * Start an asynchronous operation to identify prints. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_identify_finish().
             * @param prints #GPtrArray of #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             */
            identify(
                prints: Print[],
                cancellable?: Gio.Cancellable | null,
            ): Promise<[void, Print | null, Print | null]>;
            /**
             * Start an asynchronous operation to identify prints. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_identify_finish().
             * @param prints #GPtrArray of #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            identify(
                prints: Print[],
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start an asynchronous operation to identify prints. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_identify_finish().
             * @param prints #GPtrArray of #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            identify(
                prints: Print[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[void, Print | null, Print | null]> | void;
            /**
             * Finish an asynchronous operation to identify a print. You should check
             * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
             * was an interaction issue.
             *
             * Use `match` to find the print that matched. With `print` you can fetch the
             * newly created print and retrieve the image data if available.
             *
             * See fp_device_identify().
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            identify_finish(result: Gio.AsyncResult): [Print | null, Print | null];
            /**
             * Identify a print synchronously.
             * @param prints #GPtrArray of #FpPrint
             * @param cancellable a #GCancellable, or %NULL
             * @returns %FALSE on error, %TRUE otherwise
             */
            identify_sync(prints: Print[], cancellable?: Gio.Cancellable | null): [Print | null, Print | null];
            is_open(): boolean;
            /**
             * Start an asynchronous operation to list all prints stored on the device.
             * This only makes sense on devices that store prints on-chip.
             *
             * Retrieve the result with fp_device_list_prints_finish().
             * @param cancellable a #GCancellable, or %NULL
             */
            list_prints(cancellable?: Gio.Cancellable | null): Promise<Print[]>;
            /**
             * Start an asynchronous operation to list all prints stored on the device.
             * This only makes sense on devices that store prints on-chip.
             *
             * Retrieve the result with fp_device_list_prints_finish().
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            list_prints(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Start an asynchronous operation to list all prints stored on the device.
             * This only makes sense on devices that store prints on-chip.
             *
             * Retrieve the result with fp_device_list_prints_finish().
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            list_prints(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Print[]> | void;
            /**
             * Finish an asynchronous operation to list all device stored prints.
             *
             * See fp_device_list_prints().
             * @param result A #GAsyncResult
             * @returns Array of prints or %NULL on error
             */
            list_prints_finish(result: Gio.AsyncResult): Print[];
            /**
             * List device stored prints synchronously.
             * @param cancellable a #GCancellable, or %NULL
             * @returns Array of prints, or %NULL on error
             */
            list_prints_sync(cancellable?: Gio.Cancellable | null): Print[];
            /**
             * Finish an asynchronous operation to open the device.
             * See fp_device_open().
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            open_finish(result: Gio.AsyncResult): void;
            /**
             * Open the device synchronously.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %FALSE on error, %TRUE otherwise
             */
            open_sync(cancellable?: Gio.Cancellable | null): void;
            /**
             * Resume device after system suspend. Retrieve the result with
             * fp_device_suspend_finish().
             *
             * Note that it is not defined when any ongoing operation may return (success or
             * error). You must be ready to handle this before, during or after the
             * resume operation.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             */
            resume(cancellable?: Gio.Cancellable | null): Promise<void>;
            /**
             * Resume device after system suspend. Retrieve the result with
             * fp_device_suspend_finish().
             *
             * Note that it is not defined when any ongoing operation may return (success or
             * error). You must be ready to handle this before, during or after the
             * resume operation.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             * @param callback the function to call on completion
             */
            resume(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Resume device after system suspend. Retrieve the result with
             * fp_device_suspend_finish().
             *
             * Note that it is not defined when any ongoing operation may return (success or
             * error). You must be ready to handle this before, during or after the
             * resume operation.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             * @param callback the function to call on completion
             */
            resume(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            /**
             * Finish an asynchronous operation to resume the device after suspend.
             * See fp_device_resume().
             *
             * The API user should accept an error of #FP_DEVICE_ERROR_NOT_SUPPORTED.
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            resume_finish(result: Gio.AsyncResult): void;
            /**
             * Resume device after suspend.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             * @returns %FALSE on error, %TRUE otherwise
             */
            resume_sync(cancellable?: Gio.Cancellable | null): void;
            /**
             * Check whether the device supports capturing images.
             * @returns Whether the device supports image capture
             */
            supports_capture(): boolean;
            /**
             * Check whether the device supports identification.
             * @returns Whether the device supports identification
             */
            supports_identify(): boolean;
            /**
             * Prepare the device for system suspend. Retrieve the result with
             * fp_device_suspend_finish().
             *
             * The suspend method can be called at any time (even if the device is not
             * opened) and must be paired with a corresponding resume call. It is undefined
             * when or how any ongoing operation is finished. This call might wait for an
             * ongoing operation to finish, might cancel the ongoing operation or may
             * prepare the device so that the host is resumed when the operation can be
             * finished.
             *
             * If an ongoing operation must be cancelled then it will complete with an error
             * code of #FP_DEVICE_ERROR_BUSY before the suspend async routine finishes.
             *
             * Any operation started while the device is suspended will fail with
             * #FP_DEVICE_ERROR_BUSY, this includes calls to open or close the device.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             */
            suspend(cancellable?: Gio.Cancellable | null): Promise<void>;
            /**
             * Prepare the device for system suspend. Retrieve the result with
             * fp_device_suspend_finish().
             *
             * The suspend method can be called at any time (even if the device is not
             * opened) and must be paired with a corresponding resume call. It is undefined
             * when or how any ongoing operation is finished. This call might wait for an
             * ongoing operation to finish, might cancel the ongoing operation or may
             * prepare the device so that the host is resumed when the operation can be
             * finished.
             *
             * If an ongoing operation must be cancelled then it will complete with an error
             * code of #FP_DEVICE_ERROR_BUSY before the suspend async routine finishes.
             *
             * Any operation started while the device is suspended will fail with
             * #FP_DEVICE_ERROR_BUSY, this includes calls to open or close the device.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             * @param callback the function to call on completion
             */
            suspend(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Prepare the device for system suspend. Retrieve the result with
             * fp_device_suspend_finish().
             *
             * The suspend method can be called at any time (even if the device is not
             * opened) and must be paired with a corresponding resume call. It is undefined
             * when or how any ongoing operation is finished. This call might wait for an
             * ongoing operation to finish, might cancel the ongoing operation or may
             * prepare the device so that the host is resumed when the operation can be
             * finished.
             *
             * If an ongoing operation must be cancelled then it will complete with an error
             * code of #FP_DEVICE_ERROR_BUSY before the suspend async routine finishes.
             *
             * Any operation started while the device is suspended will fail with
             * #FP_DEVICE_ERROR_BUSY, this includes calls to open or close the device.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             * @param callback the function to call on completion
             */
            suspend(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            /**
             * Finish an asynchronous operation to prepare the device for suspend.
             * See fp_device_suspend().
             *
             * The API user should accept an error of #FP_DEVICE_ERROR_NOT_SUPPORTED.
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            suspend_finish(result: Gio.AsyncResult): void;
            /**
             * Prepare device for suspend.
             * @param cancellable a #GCancellable, or %NULL, currently not used
             * @returns %FALSE on error, %TRUE otherwise
             */
            suspend_sync(cancellable?: Gio.Cancellable | null): void;
            /**
             * Start an asynchronous operation to verify a print. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_verify_finish().
             * @param enrolled_print a #FpPrint to verify
             * @param cancellable a #GCancellable, or %NULL
             */
            verify(enrolled_print: Print, cancellable?: Gio.Cancellable | null): Promise<[void, boolean, Print | null]>;
            /**
             * Start an asynchronous operation to verify a print. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_verify_finish().
             * @param enrolled_print a #FpPrint to verify
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            verify(
                enrolled_print: Print,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start an asynchronous operation to verify a print. The callback will
             * be called once the operation has finished. Retrieve the result with
             * fp_device_verify_finish().
             * @param enrolled_print a #FpPrint to verify
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            verify(
                enrolled_print: Print,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[void, boolean, Print | null]> | void;
            /**
             * Finish an asynchronous operation to verify an enrolled print. You should check
             * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
             * was an interaction issue.
             *
             * With `print` you can fetch the newly created print and retrieve the image data if available.
             *
             * See fp_device_verify().
             * @param result A #GAsyncResult
             * @returns %FALSE on error, %TRUE otherwise
             */
            verify_finish(result: Gio.AsyncResult): [boolean, Print | null];
            /**
             * Verify a given print synchronously.
             * @param enrolled_print a #FpPrint to verify
             * @param cancellable a #GCancellable, or %NULL
             * @returns %FALSE on error, %TRUE otherwise
             */
            verify_sync(enrolled_print: Print, cancellable: Gio.Cancellable | null): [boolean, Print | null];

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): Device;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

        module Image {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                height: number;
                width: number;
            }
        }

        class Image extends GObject.Object {
            static $gtype: GObject.GType<Image>;

            // Properties

            get height(): number;
            get width(): number;

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](width: number, height: number): Image;

            // Methods

            /**
             * Detects the minutiae found in an image.
             * @param cancellable a #GCancellable, or %NULL
             */
            detect_minutiae(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Detects the minutiae found in an image.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            detect_minutiae(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Detects the minutiae found in an image.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback the function to call on completion
             */
            detect_minutiae(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finish minutiae detection in an image
             * @param result A #GAsyncResult
             * @returns %TRUE on success
             */
            detect_minutiae_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets the binarized data for an image. This data must not be modified or
             * freed. You need to first detect the minutiae using
             * fp_image_detect_minutiae().
             * @returns The binarized image data
             */
            get_binarized(): Uint8Array;
            /**
             * Gets the greyscale data for an image. This data must not be modified or
             * freed.
             * @returns The image data
             */
            get_data(): Uint8Array;
            // Conflicted with GObject.Object.get_data
            get_data(...args: never[]): any;
            /**
             * Gets the pixel height of an image.
             * @returns the height of the image
             */
            get_height(): number;
            /**
             * Gets the minutiae for an image. This data must not be modified or
             * freed. You need to first detect the minutiae using
             * fp_image_detect_minutiae().
             * @returns The detected minutiae
             */
            get_minutiae(): Minutia[];
            /**
             * Gets the resolution of the image. Note that this is assumed to
             * be fixed to 500 points per inch (~19.685 p/mm) for most drivers.
             * @returns the resolution of the image in points per millimeter
             */
            get_ppmm(): number;
            /**
             * Gets the pixel width of an image.
             * @returns the width of the image
             */
            get_width(): number;
        }

        module ImageDevice {
            // Signal callback interfaces

            interface FpiImageDeviceStateChanged {
                (new_state: unknown): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Device.ConstructorProps, Gio.AsyncInitable.ConstructorProps {}
        }

        abstract class ImageDevice extends Device implements Gio.AsyncInitable<ImageDevice> {
            static $gtype: GObject.GType<ImageDevice>;

            // Constructors

            constructor(properties?: Partial<ImageDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'fpi-image-device-state-changed',
                callback: (_source: this, new_state: unknown) => void,
            ): number;
            connect_after(
                signal: 'fpi-image-device-state-changed',
                callback: (_source: this, new_state: unknown) => void,
            ): number;
            emit(signal: 'fpi-image-device-state-changed', new_state: unknown): void;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): ImageDevice;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

        module Print {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                description: string;
                device_id: string;
                deviceId: string;
                device_stored: boolean;
                deviceStored: boolean;
                driver: string;
                enroll_date: GLib.Date;
                enrollDate: GLib.Date;
                finger: Finger;
                fpi_data: GLib.Variant;
                fpiData: GLib.Variant;
                fpi_prints: any;
                fpiPrints: any;
                image: Image;
                username: string;
            }
        }

        class Print extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<Print>;

            // Properties

            get description(): string;
            set description(val: string);
            get device_id(): string;
            get deviceId(): string;
            get device_stored(): boolean;
            get deviceStored(): boolean;
            get driver(): string;
            get enroll_date(): GLib.Date;
            set enroll_date(val: GLib.Date);
            get enrollDate(): GLib.Date;
            set enrollDate(val: GLib.Date);
            get finger(): Finger;
            set finger(val: Finger);
            get fpi_data(): GLib.Variant;
            set fpi_data(val: GLib.Variant);
            get fpiData(): GLib.Variant;
            set fpiData(val: GLib.Variant);
            get fpi_prints(): any;
            set fpi_prints(val: any);
            get fpiPrints(): any;
            set fpiPrints(val: any);
            get image(): Image;
            get username(): string;
            set username(val: string);

            // Constructors

            constructor(properties?: Partial<Print.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device: Device): Print;

            // Static methods

            /**
             * Deserialize a print definition from permanent storage.
             * @param data The binary data
             */
            static deserialize(data: Uint8Array | string): Print;

            // Methods

            /**
             * Tests whether the prints is compatible with the given device.
             * @param device A #FpDevice
             * @returns %TRUE if the print is compatible with the device
             */
            compatible(device: Device): boolean;
            /**
             * Tests whether the prints can be considered equal. This only compares the
             * actual information about the print, not the metadata.
             * @param other Second #FpPrint
             * @returns %TRUE if the prints are equal
             */
            equal(other: Print): boolean;
            /**
             * Returns the user defined description for the print.
             * @returns The description
             */
            get_description(): string | null;
            /**
             * Returns the device ID that the print was created for.
             * @returns The device ID
             */
            get_device_id(): string;
            /**
             * Whether the print is actually stored on the device and this is
             * just a handle to use that references the device stored data.
             * @returns Whether the print is stored on the device
             */
            get_device_stored(): boolean;
            /**
             * Returns the driver that the print was created for.
             * @returns The driver
             */
            get_driver(): string;
            /**
             * Returns the user defined enroll date for the print.
             * @returns The #GDate
             */
            get_enroll_date(): GLib.Date | null;
            /**
             * Returns the finger that the print was created for.
             * @returns The #FpFinger
             */
            get_finger(): Finger;
            /**
             * Returns the image that the print was created from, or %NULL
             * @returns The #FpImage
             */
            get_image(): Image | null;
            /**
             * Returns the user defined username for the print.
             * @returns The username
             */
            get_username(): string | null;
            /**
             * Serialize a print definition for permanent storage. Note that this is
             * lossy in the sense that e.g. the image data is discarded.
             * @returns %TRUE on success
             */
            serialize(): Uint8Array;
            /**
             * Set the description for the print.
             * @param description The new description
             */
            set_description(description: string): void;
            /**
             * Set the enroll date for the print.
             * @param enroll_date The new enroll date
             */
            set_enroll_date(enroll_date: GLib.Date): void;
            /**
             * Set the finger that the print is for.
             * @param finger The #FpFinger
             */
            set_finger(finger: Finger | null): void;
            /**
             * Set the username for the print.
             * @param username The new username
             */
            set_username(username: string): void;
        }

        type ContextClass = typeof Context;
        type DeviceClass = typeof Device;
        type ImageClass = typeof Image;
        type ImageDeviceClass = typeof ImageDevice;
        abstract class Minutia {
            static $gtype: GObject.GType<Minutia>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the coordinates of the found minutia. This is only useful for
             * debugging purposes and the API is not considered stable for production.
             */
            get_coords(): [number, number];
        }

        type PrintClass = typeof Print;
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

    export default FPrint;
}

declare module 'gi://FPrint' {
    import FPrint20 from 'gi://FPrint?version=2.0';
    export default FPrint20;
}
// END
