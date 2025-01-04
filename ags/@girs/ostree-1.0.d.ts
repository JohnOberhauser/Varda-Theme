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

declare module 'gi://OSTree?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace OSTree {
        /**
         * OSTree-1.0
         */

        export namespace DeploymentUnlockedState {
            export const $gtype: GObject.GType<DeploymentUnlockedState>;
        }

        enum DeploymentUnlockedState {
            NONE,
            DEVELOPMENT,
            HOTFIX,
            TRANSIENT,
        }
        /**
         * Errors returned by signature creation and verification operations in OSTree.
         * These may be returned by any API which creates or verifies signatures.
         */
        class GpgError extends GLib.Error {
            static $gtype: GObject.GType<GpgError>;

            // Static fields

            /**
             * A signature was expected, but not found.
             */
            static NO_SIGNATURE: number;
            /**
             * A signature was malformed.
             */
            static INVALID_SIGNATURE: number;
            /**
             * A signature was found, but was created with a key not in the
             * configured keyrings.
             */
            static MISSING_KEY: number;
            /**
             * A signature was expired. Since: 2020.1.
             */
            static EXPIRED_SIGNATURE: number;
            /**
             * A signature was found, but the key used to
             *   sign it has expired. Since: 2020.1.
             */
            static EXPIRED_KEY: number;
            /**
             * A signature was found, but the key used to
             *   sign it has been revoked. Since: 2020.1.
             */
            static REVOKED_KEY: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * Signature attributes available from an #OstreeGpgVerifyResult.
         * The attribute's #GVariantType is shown in brackets.
         */

        /**
         * Signature attributes available from an #OstreeGpgVerifyResult.
         * The attribute's #GVariantType is shown in brackets.
         */
        export namespace GpgSignatureAttr {
            export const $gtype: GObject.GType<GpgSignatureAttr>;
        }

        enum GpgSignatureAttr {
            /**
             * [#G_VARIANT_TYPE_BOOLEAN] Is the signature valid?
             */
            VALID,
            /**
             * [#G_VARIANT_TYPE_BOOLEAN] Has the signature expired?
             */
            SIG_EXPIRED,
            /**
             * [#G_VARIANT_TYPE_BOOLEAN] Has the signing key expired?
             */
            KEY_EXPIRED,
            /**
             * [#G_VARIANT_TYPE_BOOLEAN] Has the signing key been revoked?
             */
            KEY_REVOKED,
            /**
             * [#G_VARIANT_TYPE_BOOLEAN] Is the signing key missing?
             */
            KEY_MISSING,
            /**
             * [#G_VARIANT_TYPE_STRING] Fingerprint of the signing key
             */
            FINGERPRINT,
            /**
             * [#G_VARIANT_TYPE_INT64] Signature creation Unix timestamp
             */
            TIMESTAMP,
            /**
             * [#G_VARIANT_TYPE_INT64] Signature expiration Unix timestamp (0 if no
             *   expiration)
             */
            EXP_TIMESTAMP,
            /**
             * [#G_VARIANT_TYPE_STRING] Name of the public key algorithm used to create
             *   the signature
             */
            PUBKEY_ALGO_NAME,
            /**
             * [#G_VARIANT_TYPE_STRING] Name of the hash algorithm used to create the
             *   signature
             */
            HASH_ALGO_NAME,
            /**
             * [#G_VARIANT_TYPE_STRING] The name of the signing key's primary user
             */
            USER_NAME,
            /**
             * [#G_VARIANT_TYPE_STRING] The email address of the signing key's primary
             *   user
             */
            USER_EMAIL,
            /**
             * [#G_VARIANT_TYPE_STRING] Fingerprint of the signing key's primary key
             *   (will be the same as OSTREE_GPG_SIGNATURE_ATTR_FINGERPRINT if the
             *   the signature is already from the primary key rather than a subkey,
             *   and will be the empty string if the key is missing.)
             */
            FINGERPRINT_PRIMARY,
            /**
             * [#G_VARIANT_TYPE_INT64] Key expiration Unix timestamp (0 if no
             *   expiration or if the key is missing)
             */
            KEY_EXP_TIMESTAMP,
            /**
             * [#G_VARIANT_TYPE_INT64] Key expiration Unix timestamp of the signing key's
             *   primary key (will be the same as OSTREE_GPG_SIGNATURE_ATTR_KEY_EXP_TIMESTAMP
             *   if the signing key is the primary key and 0 if no expiration or if the key
             *   is missing)
             */
            KEY_EXP_TIMESTAMP_PRIMARY,
        }
        /**
         * Enumeration for core object types; %OSTREE_OBJECT_TYPE_FILE is for
         * content, the other types are metadata.
         */

        /**
         * Enumeration for core object types; %OSTREE_OBJECT_TYPE_FILE is for
         * content, the other types are metadata.
         */
        export namespace ObjectType {
            export const $gtype: GObject.GType<ObjectType>;
        }

        enum ObjectType {
            /**
             * Content; regular file, symbolic link
             */
            FILE,
            /**
             * List of children (trees or files), and metadata
             */
            DIR_TREE,
            /**
             * Directory metadata
             */
            DIR_META,
            /**
             * Toplevel object, refers to tree and dirmeta for root
             */
            COMMIT,
            /**
             * Toplevel object, refers to a deleted commit
             */
            TOMBSTONE_COMMIT,
            /**
             * Detached metadata for a commit
             */
            COMMIT_META,
            /**
             * Symlink to a .file given its checksum on the payload only.
             */
            PAYLOAD_LINK,
            /**
             * Detached xattrs content, for 'bare-split-xattrs' mode.
             */
            FILE_XATTRS,
            /**
             * Hardlink to a .file-xattrs given the checksum of its .file
             * object.
             */
            FILE_XATTRS_LINK,
        }

        export namespace RepoCheckoutFilterResult {
            export const $gtype: GObject.GType<RepoCheckoutFilterResult>;
        }

        enum RepoCheckoutFilterResult {
            /**
             * Do checkout this object
             */
            ALLOW,
            /**
             * Ignore this object
             */
            SKIP,
        }

        export namespace RepoCheckoutMode {
            export const $gtype: GObject.GType<RepoCheckoutMode>;
        }

        enum RepoCheckoutMode {
            /**
             * No special options
             */
            NONE,
            /**
             * Ignore uid/gid of files
             */
            USER,
        }

        export namespace RepoCheckoutOverwriteMode {
            export const $gtype: GObject.GType<RepoCheckoutOverwriteMode>;
        }

        enum RepoCheckoutOverwriteMode {
            /**
             * No special options
             */
            NONE,
            /**
             * When layering checkouts, unlink() and replace
             * existing files, but do not modify existing directories (unless whiteouts are enabled, then
             * directories are replaced)
             */
            UNION_FILES,
            /**
             * Only add new files/directories
             */
            ADD_FILES,
            /**
             * Like UNION_FILES, but error if files are not
             * identical (requires hardlink checkouts)
             */
            UNION_IDENTICAL,
        }

        export namespace RepoCommitFilterResult {
            export const $gtype: GObject.GType<RepoCommitFilterResult>;
        }

        enum RepoCommitFilterResult {
            /**
             * Do commit this object
             */
            ALLOW,
            /**
             * Ignore this object
             */
            SKIP,
        }

        export namespace RepoCommitIterResult {
            export const $gtype: GObject.GType<RepoCommitIterResult>;
        }

        enum RepoCommitIterResult {
            ERROR,
            END,
            FILE,
            DIR,
        }
        /**
         * Flags controlling repository locking.
         */

        /**
         * Flags controlling repository locking.
         */
        export namespace RepoLockType {
            export const $gtype: GObject.GType<RepoLockType>;
        }

        enum RepoLockType {
            /**
             * A "read only" lock; multiple readers are allowed.
             */
            SHARED,
            /**
             * A writable lock at most one writer can be active, and zero readers.
             */
            EXCLUSIVE,
        }
        /**
         * See the documentation of #OstreeRepo for more information about the
         * possible modes.
         */

        /**
         * See the documentation of #OstreeRepo for more information about the
         * possible modes.
         */
        export namespace RepoMode {
            export const $gtype: GObject.GType<RepoMode>;
        }

        enum RepoMode {
            /**
             * Files are stored as themselves; checkouts are hardlinks; can only be
             * written as root
             */
            BARE,
            /**
             * Files are compressed, should be owned by non-root.  Can be served via
             * HTTP.  Since: 2017.12
             */
            ARCHIVE,
            /**
             * Legacy alias for `OSTREE_REPO_MODE_ARCHIVE`
             */
            ARCHIVE_Z2,
            /**
             * Files are stored as themselves, except ownership; can be written by
             * user. Hardlinks work only in user checkouts.
             */
            BARE_USER,
            /**
             * Same as BARE_USER, but all metadata is not stored, so it can
             * only be used for user checkouts. Does not need xattrs.
             */
            BARE_USER_ONLY,
            /**
             * Same as BARE_USER, but xattrs are stored separately from
             * file content, with dedicated object types.
             */
            BARE_SPLIT_XATTRS,
        }
        /**
         * The remote change operation.
         */

        /**
         * The remote change operation.
         */
        export namespace RepoRemoteChange {
            export const $gtype: GObject.GType<RepoRemoteChange>;
        }

        enum RepoRemoteChange {
            /**
             * Add a remote
             */
            ADD,
            /**
             * Like above, but do nothing if the remote exists
             */
            ADD_IF_NOT_EXISTS,
            /**
             * Delete a remote
             */
            DELETE,
            /**
             * Delete a remote, do nothing if the remote does not
             * exist
             */
            DELETE_IF_EXISTS,
            /**
             * Add or replace a remote (Since: 2019.2)
             */
            REPLACE,
        }
        /**
         * Parameters controlling optimization of static deltas.
         */

        /**
         * Parameters controlling optimization of static deltas.
         */
        export namespace StaticDeltaGenerateOpt {
            export const $gtype: GObject.GType<StaticDeltaGenerateOpt>;
        }

        enum StaticDeltaGenerateOpt {
            /**
             * Optimize for speed of delta creation over space
             */
            LOWLATENCY,
            /**
             * Optimize for delta size (may be very slow)
             */
            MAJOR,
        }
        /**
         * Flags controlling static delta index generation.
         */

        /**
         * Flags controlling static delta index generation.
         */
        export namespace StaticDeltaIndexFlags {
            export const $gtype: GObject.GType<StaticDeltaIndexFlags>;
        }

        enum StaticDeltaIndexFlags {
            /**
             * No special flags
             */
            STATIC_DELTA_INDEX_FLAGS_NONE,
        }
        const COMMIT_GVARIANT_STRING: string;
        /**
         * GVariant type `s`.  Intended to describe the CPU architecture.  This is a freeform string, and
         * some distributions which have existing package managers might want to match that schema.  If you
         * don't have a prior schema, it's recommended to use `uname -m` by default (i.e. the Linux kernel
         * schema).  In the future ostree might include a builtin function to compare architectures.
         */
        const COMMIT_META_KEY_ARCHITECTURE: string;
        /**
         * GVariant type `s`.  If this is added to a commit, `ostree_repo_pull()`
         * will enforce that the commit was retrieved from a repository which has
         * the same collection ID.  See `ostree_repo_set_collection_id()`.
         * This is most useful in concert with `OSTREE_COMMIT_META_KEY_REF_BINDING`,
         * as it more strongly binds the commit to the repository and branch.
         */
        const COMMIT_META_KEY_COLLECTION_BINDING: string;
        /**
         * GVariant type `s`. This metadata key is used to display vendor's message
         * when an update stream for a particular branch ends. It usually provides
         * update instructions for the users.
         */
        const COMMIT_META_KEY_ENDOFLIFE: string;
        /**
         * GVariant type `s`.  Should contain a refspec defining a new target branch;
         * `ostree admin upgrade` and `OstreeSysrootUpgrader` will automatically initiate
         * a rebase upon encountering this metadata key.
         */
        const COMMIT_META_KEY_ENDOFLIFE_REBASE: string;
        /**
         * GVariant type `as`; each element is a branch name. If this is added to a
         * commit, `ostree_repo_pull()` will enforce that the commit was retrieved from
         * one of the branch names in this array.  This prevents "sidegrade" attacks.
         * The rationale for having this support multiple branch names is that it helps
         * support a "promotion" model of taking a commit and moving it between development
         * and production branches.
         */
        const COMMIT_META_KEY_REF_BINDING: string;
        /**
         * GVariant type `s`. This should hold a relatively short single line value
         * containing a human-readable "source" for a commit, intended to be displayed
         * near the origin ref.  This is particularly useful for systems that inject
         * content into an OSTree commit from elsewhere - for example, generating from
         * an OCI or qcow2 image. Or if generating from packages, the enabled repository
         * names and their versions.
         *
         * Try to keep this key short (e.g. < 80 characters) and human-readable; if you
         * desire machine readable data, consider injecting separate metadata keys.
         */
        const COMMIT_META_KEY_SOURCE_TITLE: string;
        /**
         * GVariant type `s`. This metadata key is used for version numbers. A freeform
         * string; the intention is that systems using ostree do not interpret this
         * semantically as traditional package managers do.
         *
         * This is the only ostree-defined metadata key that does not start with `ostree.`.
         */
        const COMMIT_META_KEY_VERSION: string;
        const DIRMETA_GVARIANT_STRING: string;
        const FILEMETA_GVARIANT_STRING: string;
        const GPG_KEY_GVARIANT_STRING: string;
        /**
         * Default limit for maximum permitted size in bytes of metadata objects fetched
         * over HTTP (including repo/config files, refs, and commit/dirtree/dirmeta
         * objects). This is an arbitrary number intended to mitigate disk space
         * exhaustion attacks.
         */
        const MAX_METADATA_SIZE: number;
        /**
         * This variable is no longer meaningful, it is kept only for compatibility.
         */
        const MAX_METADATA_WARN_SIZE: number;
        /**
         * GVariant type `b`: Set if this commit is intended to be bootable
         */
        const METADATA_KEY_BOOTABLE: string;
        /**
         * GVariant type `s`: Contains the Linux kernel release (i.e. `uname -r`)
         */
        const METADATA_KEY_LINUX: string;
        /**
         * GVariant type `s`. This key can be used in the repo metadata which is stored
         * in OSTREE_REPO_METADATA_REF as well as in the summary. The semantics of this
         * are that the remote repository wants clients to update their remote config
         * to add this collection ID (clients can't do P2P operations involving a
         * remote without a collection ID configured on it, even if one is configured
         * on the server side). Clients must never change or remove a collection ID
         * already set in their remote config.
         *
         * Currently, OSTree does not implement changing a remote config based on this
         * key, but it may do so in a later release, and until then clients such as
         * Flatpak may implement it.
         *
         * This is a replacement for the similar metadata key implemented by flatpak,
         * `xa.collection-id`, which is now deprecated as clients which supported it had
         * bugs with their P2P implementations.
         */
        const META_KEY_DEPLOY_COLLECTION_ID: string;
        /**
         * The name of a `GKeyFile` group for data that should not
         * be carried across upgrades.  For more information,
         * see ostree_deployment_origin_remove_transient_state().
         */
        const ORIGIN_TRANSIENT_GROUP: string;
        /**
         * Filesystem path that is created on an ostree-booted system.
         */
        const PATH_BOOTED: string;
        /**
         * ostree release version component (e.g. 2 if %OSTREE_VERSION is 2017.2)
         */
        const RELEASE_VERSION: number;
        /**
         * The name of a ref which is used to store metadata for the entire repository,
         * such as its expected update time (`ostree.summary.expires`), name, or new
         * GPG keys. Metadata is stored on contentless commits in the ref, and hence is
         * signed with the commits.
         *
         * This supersedes the additional metadata dictionary in the `summary` file
         * (see ostree_repo_regenerate_summary()), as the use of a ref means that the
         * metadata for multiple upstream repositories can be included in a single mirror
         * repository, disambiguating the refs using collection IDs. In order to support
         * peer to peer redistribution of repository metadata, repositories must set a
         * collection ID (ostree_repo_set_collection_id()).
         *
         * Users of OSTree may place arbitrary metadata in commits on this ref, but the
         * keys must be namespaced by product or developer. For example,
         * `exampleos.end-of-life`. The `ostree.` prefix is reserved.
         */
        const REPO_METADATA_REF: string;
        /**
         * Length of a sha256 digest when expressed as raw bytes
         */
        const SHA256_DIGEST_LEN: number;
        /**
         * Length of a sha256 digest when expressed as a hexadecimal string
         */
        const SHA256_STRING_LEN: number;
        /**
         * The name of the default ed25519 signing type.
         */
        const SIGN_NAME_ED25519: string;
        const SUMMARY_GVARIANT_STRING: string;
        const SUMMARY_SIG_GVARIANT_STRING: string;
        /**
         * The mtime used for stored files.  This was originally 0, changed to 1 for
         * a few releases, then was reverted due to regressions it introduced from
         * users who had been using zero before.
         */
        const TIMESTAMP: number;
        const TREE_GVARIANT_STRING: string;
        /**
         * ostree version.
         */
        const VERSION: number;
        /**
         * ostree version, encoded as a string, useful for printing and
         * concatenation.
         */
        const VERSION_S: string;
        /**
         * ostree year version component (e.g. 2017 if %OSTREE_VERSION is 2017.2)
         */
        const YEAR_VERSION: number;
        /**
         * In many cases using libostree, a program may need to "break"
         * hardlinks by performing a copy.  For example, in order to
         * logically append to a file.
         *
         * This function performs full copying, including e.g. extended
         * attributes and permissions of both regular files and symbolic links.
         *
         * If the file is not hardlinked, this function does nothing and
         * returns successfully.
         *
         * This function does not perform synchronization via `fsync()` or
         * `fdatasync()`; the idea is this will commonly be done as part
         * of an `ostree_repo_commit_transaction()`, which itself takes
         * care of synchronization.
         * @param dfd Directory fd
         * @param path Path relative to @dfd
         * @param skip_xattrs Do not copy extended attributes
         * @param cancellable
         */
        function break_hardlink(
            dfd: number,
            path: string,
            skip_xattrs: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        function check_version(required_year: number, required_release: number): boolean;
        function checksum_b64_from_bytes(csum: Uint8Array | string): string;
        function checksum_b64_to_bytes(checksum: string): Uint8Array;
        function checksum_bytes_peek(bytes: GLib.Variant): Uint8Array;
        /**
         * Like ostree_checksum_bytes_peek(), but also throws `error`.
         * @param bytes #GVariant of type ay
         * @returns Binary checksum data
         */
        function checksum_bytes_peek_validate(bytes: GLib.Variant): Uint8Array;
        /**
         * Compute the OSTree checksum for a given file.
         * @param f File path
         * @param objtype Object type
         * @param cancellable Cancellable
         */
        function checksum_file(
            f: Gio.File,
            objtype: ObjectType | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Uint8Array];
        /**
         * Asynchronously compute the OSTree checksum for a given file;
         * complete with ostree_checksum_file_async_finish().
         * @param f File path
         * @param objtype Object type
         * @param io_priority Priority for operation, see %G_IO_PRIORITY_DEFAULT
         * @param cancellable Cancellable
         */
        function checksum_file_async(
            f: Gio.File,
            objtype: ObjectType | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): Promise<[Uint8Array]>;
        /**
         * Asynchronously compute the OSTree checksum for a given file;
         * complete with ostree_checksum_file_async_finish().
         * @param f File path
         * @param objtype Object type
         * @param io_priority Priority for operation, see %G_IO_PRIORITY_DEFAULT
         * @param cancellable Cancellable
         * @param callback Invoked when operation is complete
         */
        function checksum_file_async(
            f: Gio.File,
            objtype: ObjectType | null,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gio.File> | null,
        ): void;
        /**
         * Asynchronously compute the OSTree checksum for a given file;
         * complete with ostree_checksum_file_async_finish().
         * @param f File path
         * @param objtype Object type
         * @param io_priority Priority for operation, see %G_IO_PRIORITY_DEFAULT
         * @param cancellable Cancellable
         * @param callback Invoked when operation is complete
         */
        function checksum_file_async(
            f: Gio.File,
            objtype: ObjectType | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gio.File> | null,
        ): Promise<[Uint8Array]> | void;
        /**
         * Finish computing the OSTree checksum for a given file; see
         * ostree_checksum_file_async().
         * @param f File path
         * @param result Async result
         */
        function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [boolean, Uint8Array];
        /**
         * Compute the OSTree checksum for a given file. This is an fd-relative version
         * of ostree_checksum_file() which also takes flags and fills in a caller
         * allocated buffer.
         * @param dfd Directory file descriptor
         * @param path Subpath @stbuf (allow-none): Optional stat buffer
         * @param stbuf
         * @param objtype Object type
         * @param flags Flags @out_checksum (out) (transfer full): Return location for hex checksum
         * @param out_checksum
         * @param cancellable Cancellable
         */
        function checksum_file_at(
            dfd: number,
            path: string,
            stbuf: any | null,
            objtype: ObjectType | null,
            flags: ChecksumFlags | null,
            out_checksum: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Compute the OSTree checksum for a given input.
         * @param file_info File information
         * @param xattrs Optional extended attributes
         * @param _in File content, should be %NULL for symbolic links
         * @param objtype Object type
         * @param cancellable Cancellable
         */
        function checksum_file_from_input(
            file_info: Gio.FileInfo,
            xattrs: GLib.Variant | null,
            _in: Gio.InputStream | null,
            objtype: ObjectType | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Uint8Array];
        function checksum_from_bytes(csum: Uint8Array | string): string;
        function checksum_from_bytes_v(csum_v: GLib.Variant): string;
        /**
         * Convert `checksum` from a string to binary in-place, without
         * allocating memory.  Use this function in hot code paths.
         * @param checksum a SHA256 string
         * @param buf Output buffer with at least 32 bytes of space
         */
        function checksum_inplace_to_bytes(checksum: string, buf: number): void;
        function checksum_to_bytes(checksum: string): Uint8Array;
        function checksum_to_bytes_v(checksum: string): GLib.Variant;
        /**
         * Compare two binary checksums, using memcmp().
         * @param a A binary checksum
         * @param b A binary checksum
         */
        function cmp_checksum_bytes(a: number, b: number): number;
        /**
         * Copy an array of #OstreeCollectionRefs, including deep copies of all its
         * elements. `refs` must be %NULL-terminated; it may be empty, but must not be
         * %NULL.
         * @param refs %NULL-terminated array of #OstreeCollectionRefs
         * @returns a newly allocated copy of @refs
         */
        function collection_ref_dupv(refs: CollectionRef[]): CollectionRef[];
        /**
         * Free the given array of `refs,` including freeing all its elements. `refs`
         * must be %NULL-terminated; it may be empty, but must not be %NULL.
         * @param refs an array of #OstreeCollectionRefs
         */
        function collection_ref_freev(refs: CollectionRef[]): void;
        /**
         * There are use cases where one wants a checksum just of the content of a
         * commit. OSTree commits by default capture the current timestamp, and may have
         * additional metadata, which means that re-committing identical content
         * often results in a new checksum.
         *
         * By comparing checksums of content, it's possible to easily distinguish
         * cases where nothing actually changed.
         *
         * The content checksums is simply defined as `SHA256(root dirtree_checksum ||
         * root_dirmeta_checksum)`, i.e. the SHA-256 of the root "dirtree" object's checksum concatenated
         * with the root "dirmeta" checksum (both in binary form, not hexadecimal).
         * @param commit_variant A commit object
         * @returns A SHA-256 hex string, or %NULL if @commit_variant is not well-formed
         */
        function commit_get_content_checksum(commit_variant: GLib.Variant): string | null;
        /**
         * Reads a commit's "ostree.sizes" metadata and returns an array of
         * #OstreeCommitSizesEntry in `out_sizes_entries`. Each element
         * represents an object in the commit. If the commit does not contain
         * the "ostree.sizes" metadata, a %G_IO_ERROR_NOT_FOUND error will be
         * returned.
         * @param commit_variant variant of type %OSTREE_OBJECT_TYPE_COMMIT
         */
        function commit_get_object_sizes(commit_variant: GLib.Variant): [boolean, CommitSizesEntry[] | null];
        function commit_get_parent(commit_variant: GLib.Variant): string | null;
        function commit_get_timestamp(commit_variant: GLib.Variant): number;
        /**
         * Update provided `dict` with standard metadata for bootable OSTree commits.
         * @param root Root filesystem to be committed
         * @param dict Dictionary to update
         * @param cancellable
         */
        function commit_metadata_for_bootable(
            root: Gio.File,
            dict: GLib.VariantDict,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * A thin wrapper for ostree_content_stream_parse(); this function
         * converts an object content stream back into components.
         * @param compressed Whether or not the stream is zlib-compressed
         * @param content_path Path to file containing content
         * @param trusted If %TRUE, assume the content has been validated
         * @param cancellable Cancellable
         */
        function content_file_parse(
            compressed: boolean,
            content_path: Gio.File,
            trusted: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];
        /**
         * A thin wrapper for ostree_content_stream_parse(); this function
         * converts an object content stream back into components.
         * @param compressed Whether or not the stream is zlib-compressed
         * @param parent_dfd Directory file descriptor
         * @param path Subpath
         * @param trusted If %TRUE, assume the content has been validated
         * @param cancellable Cancellable
         */
        function content_file_parse_at(
            compressed: boolean,
            parent_dfd: number,
            path: string,
            trusted: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];
        /**
         * The reverse of ostree_raw_file_to_content_stream(); this function
         * converts an object content stream back into components.
         * @param compressed Whether or not the stream is zlib-compressed
         * @param input Object content stream
         * @param input_length Length of stream
         * @param trusted If %TRUE, assume the content has been validated
         * @param cancellable Cancellable
         */
        function content_stream_parse(
            compressed: boolean,
            input: Gio.InputStream,
            input_length: number,
            trusted: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];
        function create_directory_metadata(dir_info: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant;
        /**
         * Compute the difference between directory `a` and `b` as 3 separate
         * sets of #OstreeDiffItem in `modified,` `removed,` and `added`.
         * @param flags Flags
         * @param a First directory path, or %NULL
         * @param b First directory path
         * @param modified Modified files
         * @param removed Removed files
         * @param added Added files
         * @param cancellable Cancellable
         */
        function diff_dirs(
            flags: DiffFlags | null,
            a: Gio.File,
            b: Gio.File,
            modified: DiffItem[],
            removed: Gio.File[],
            added: Gio.File[],
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Compute the difference between directory `a` and `b` as 3 separate
         * sets of #OstreeDiffItem in `modified,` `removed,` and `added`.
         * @param flags Flags
         * @param a First directory path, or %NULL
         * @param b First directory path
         * @param modified Modified files
         * @param removed Removed files
         * @param added Added files
         * @param options Options
         * @param cancellable Cancellable
         */
        function diff_dirs_with_options(
            flags: DiffFlags | null,
            a: Gio.File,
            b: Gio.File,
            modified: DiffItem[],
            removed: Gio.File[],
            added: Gio.File[],
            options?: DiffDirsOptions | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Print the contents of a diff to stdout.
         * @param a First directory path
         * @param b First directory path
         * @param modified Modified files
         * @param removed Removed files
         * @param added Added files
         */
        function diff_print(
            a: Gio.File,
            b: Gio.File,
            modified: DiffItem[],
            removed: Gio.File[],
            added: Gio.File[],
        ): void;
        /**
         * Retrieve all extended attributes in a canonical (sorted) order from
         * the given file descriptor.
         * @param fd File descriptor
         * @param cancellable Cancellable
         * @returns A GVariant of type `a(ayay)`
         */
        function fs_get_all_xattrs(fd: number, cancellable?: Gio.Cancellable | null): GLib.Variant;
        /**
         * Retrieve all extended attributes in a canonical (sorted) order from
         * the given path, relative to the provided directory file descriptor.
         * The target path will not be dereferenced.  Currently on Linux, this
         * API must be used currently to retrieve extended attributes
         * for symbolic links because while `O_PATH` exists, it cannot be used
         * with `fgetxattr()`.
         * @param dfd Directory file descriptor
         * @param path Filesystem path
         * @param cancellable Cancellable
         * @returns A GVariant of type `a(ayay)`
         */
        function fs_get_all_xattrs_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): GLib.Variant;
        function gpg_error_quark(): GLib.Quark;
        /**
         * Use this function with #GHashTable and ostree_object_name_serialize().
         * @param a A #GVariant containing a serialized object
         */
        function hash_object_name(a?: any | null): number;
        /**
         * Frees the OstreeKernelArgs structure pointed by *loc
         * @param loc Address of an OstreeKernelArgs pointer
         */
        function kernel_args_cleanup(loc?: any | null): void;
        function metadata_variant_type(objtype: ObjectType | null): GLib.VariantType;
        /**
         * Reverse ostree_object_to_string().
         * @param str An ASCII checksum
         */
        function object_from_string(str: string): [string, ObjectType];
        /**
         * Reverse ostree_object_name_serialize().  Note that `out_checksum` is
         * only valid for the lifetime of `variant,` and must not be freed.
         * @param variant A #GVariant of type (su)
         */
        function object_name_deserialize(variant: GLib.Variant): [string, ObjectType];
        function object_name_serialize(checksum: string, objtype: ObjectType | null): GLib.Variant;
        function object_to_string(checksum: string, objtype: ObjectType | null): string;
        /**
         * The reverse of ostree_object_type_to_string().
         * @param str A stringified version of #OstreeObjectType
         */
        function object_type_from_string(str: string): ObjectType;
        /**
         * Serialize `objtype` to a string; this is used for file extensions.
         * @param objtype an #OstreeObjectType
         */
        function object_type_to_string(objtype: ObjectType | null): string;
        /**
         * Split a refspec like `gnome-ostree:gnome-ostree/buildmain` or just
         * `gnome-ostree/buildmain` into two parts. In the first case, `out_remote`
         * will be set to `gnome-ostree`, and `out_ref` to `gnome-ostree/buildmain`.
         * In the second case (a local ref), `out_remote` will be %NULL, and `out_ref`
         * will be `gnome-ostree/buildmain`. In both cases, %TRUE will be returned.
         * @param refspec A "refspec" string
         * @returns %TRUE on successful parsing, %FALSE otherwise
         */
        function parse_refspec(refspec: string): [boolean, string, string];
        /**
         * Convert from a "bare" file representation into an
         * OSTREE_OBJECT_TYPE_FILE stream suitable for ostree pull.
         * @param input File raw content stream
         * @param file_info A file info
         * @param xattrs Optional extended attributes
         * @param cancellable Cancellable
         */
        function raw_file_to_archive_z2_stream(
            input: Gio.InputStream,
            file_info: Gio.FileInfo,
            xattrs: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gio.InputStream];
        /**
         * Like ostree_raw_file_to_archive_z2_stream(), but supports an extensible set
         * of flags. The following flags are currently defined:
         *
         * - `compression-level` (`i`): Level of compression to use, 0–9, with 0 being
         *   the least compression, and <0 giving the default level (currently 6).
         * @param input File raw content stream
         * @param file_info A file info
         * @param xattrs Optional extended attributes
         * @param options A GVariant `a{sv}` with an extensible set of flags
         * @param cancellable Cancellable
         */
        function raw_file_to_archive_z2_stream_with_options(
            input: Gio.InputStream,
            file_info: Gio.FileInfo,
            xattrs: GLib.Variant | null,
            options: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gio.InputStream];
        /**
         * Convert from a "bare" file representation into an
         * OSTREE_OBJECT_TYPE_FILE stream.  This is a fundamental operation
         * for writing data to an #OstreeRepo.
         * @param input File raw content stream
         * @param file_info A file info
         * @param xattrs Optional extended attributes
         * @param cancellable Cancellable
         */
        function raw_file_to_content_stream(
            input: Gio.InputStream,
            file_info: Gio.FileInfo,
            xattrs: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gio.InputStream, number];
        function repo_commit_traverse_iter_cleanup(p?: any | null): void;
        /**
         * A version of ostree_repo_finder_resolve_async() which queries one or more
         * `finders` in parallel and combines the results.
         * @param finders non-empty array of #OstreeRepoFinders
         * @param refs non-empty array of collection–ref pairs to find remotes for
         * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
         * @param cancellable a #GCancellable, or %NULL
         */
        function repo_finder_resolve_all_async(
            finders: RepoFinder[],
            refs: CollectionRef[],
            parent_repo: Repo,
            cancellable?: Gio.Cancellable | null,
        ): Promise<RepoFinderResult[]>;
        /**
         * A version of ostree_repo_finder_resolve_async() which queries one or more
         * `finders` in parallel and combines the results.
         * @param finders non-empty array of #OstreeRepoFinders
         * @param refs non-empty array of collection–ref pairs to find remotes for
         * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
         * @param cancellable a #GCancellable, or %NULL
         * @param callback asynchronous completion callback
         */
        function repo_finder_resolve_all_async(
            finders: RepoFinder[],
            refs: CollectionRef[],
            parent_repo: Repo,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<RepoFinder[]> | null,
        ): void;
        /**
         * A version of ostree_repo_finder_resolve_async() which queries one or more
         * `finders` in parallel and combines the results.
         * @param finders non-empty array of #OstreeRepoFinders
         * @param refs non-empty array of collection–ref pairs to find remotes for
         * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
         * @param cancellable a #GCancellable, or %NULL
         * @param callback asynchronous completion callback
         */
        function repo_finder_resolve_all_async(
            finders: RepoFinder[],
            refs: CollectionRef[],
            parent_repo: Repo,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<RepoFinder[]> | null,
        ): Promise<RepoFinderResult[]> | void;
        /**
         * Get the results from a ostree_repo_finder_resolve_all_async() operation.
         * @param result #GAsyncResult from the callback
         * @returns array of zero    or more results
         */
        function repo_finder_resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];
        /**
         * Free the given `results` array, freeing each element and the container.
         * @param results an #OstreeRepoFinderResult
         */
        function repo_finder_result_freev(results: RepoFinderResult[]): void;
        /**
         * Return an array with newly allocated instances of all available
         * signing engines; they will not be initialized.
         * @returns an array of signing engines
         */
        function sign_get_all(): Sign[];
        /**
         * Create a new instance of a signing engine.
         * @param name the name of desired signature engine
         * @returns New signing engine, or %NULL if the engine is not known
         */
        function sign_get_by_name(name: string): Sign;
        /**
         * Use this function to see if input strings are checksums.
         * @param sha256 SHA256 hex string
         * @returns %TRUE if @sha256 is a valid checksum string, %FALSE otherwise
         */
        function validate_checksum_string(sha256: string): boolean;
        /**
         * Check whether the given `collection_id` is valid. Return an error if it is
         * invalid or %NULL.
         *
         * Valid collection IDs are reverse DNS names:
         *  * They are composed of 1 or more elements separated by a period (`.`) character.
         *    All elements must contain at least one character.
         *  * Each element must only contain the ASCII characters `[A-Z][a-z][0-9]_` and must not
         *    begin with a digit.
         *  * They must contain at least one `.` (period) character (and thus at least two elements).
         *  * They must not begin with a `.` (period) character.
         *  * They must not exceed 255 characters in length.
         *
         * (This makes their format identical to D-Bus interface names, for consistency.)
         * @param collection_id A collection ID
         * @returns %TRUE if @collection_id is a valid collection ID, %FALSE if it is invalid    or %NULL
         */
        function validate_collection_id(collection_id?: string | null): boolean;
        function validate_remote_name(remote_name: string): boolean;
        function validate_rev(rev: string): boolean;
        function validate_structureof_checksum_string(checksum: string): boolean;
        /**
         * Use this to validate the basic structure of `commit,` independent of
         * any other objects it references.
         * @param commit A commit object, %OSTREE_OBJECT_TYPE_COMMIT
         * @returns %TRUE if @commit is structurally valid
         */
        function validate_structureof_commit(commit: GLib.Variant): boolean;
        function validate_structureof_csum_v(checksum: GLib.Variant): boolean;
        /**
         * Use this to validate the basic structure of `dirmeta`.
         * @param dirmeta A dirmeta object, %OSTREE_OBJECT_TYPE_DIR_META
         * @returns %TRUE if @dirmeta is structurally valid
         */
        function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean;
        /**
         * Use this to validate the basic structure of `dirtree,` independent of
         * any other objects it references.
         * @param dirtree A dirtree object, %OSTREE_OBJECT_TYPE_DIR_TREE
         * @returns %TRUE if @dirtree is structurally valid
         */
        function validate_structureof_dirtree(dirtree: GLib.Variant): boolean;
        function validate_structureof_file_mode(mode: number): boolean;
        function validate_structureof_objtype(objtype: number): boolean;
        interface RepoCheckoutFilter {
            (repo: Repo, path: string, stbuf?: any | null): RepoCheckoutFilterResult;
        }
        interface RepoCommitFilter {
            (repo: Repo, path: string, file_info: Gio.FileInfo): RepoCommitFilterResult;
        }
        interface RepoCommitModifierXattrCallback {
            (repo: Repo, path: string, file_info: Gio.FileInfo): GLib.Variant;
        }
        interface RepoImportArchiveTranslatePathname {
            (repo: Repo, stbuf: any | null, src_path: string): string;
        }
        /**
         * Flags influencing checksumming logic.
         */

        /**
         * Flags influencing checksumming logic.
         */
        export namespace ChecksumFlags {
            export const $gtype: GObject.GType<ChecksumFlags>;
        }

        enum ChecksumFlags {
            /**
             * Default checksumming without tweaks.
             *    (Since: 2017.13.)
             */
            NONE,
            /**
             * Ignore xattrs when checksumming.
             *    (Since: 2017.13.)
             */
            IGNORE_XATTRS,
            /**
             * Use canonical uid/gid/mode
             *    values, for bare-user-only mode. (Since: 2021.4.)
             */
            CANONICAL_PERMISSIONS,
        }

        export namespace DiffFlags {
            export const $gtype: GObject.GType<DiffFlags>;
        }

        enum DiffFlags {
            NONE,
            IGNORE_XATTRS,
        }
        /**
         * Formatting flags for ostree_gpg_verify_result_describe().  Currently
         * there's only one possible output format, but this enumeration allows
         * for future variations.
         */

        /**
         * Formatting flags for ostree_gpg_verify_result_describe().  Currently
         * there's only one possible output format, but this enumeration allows
         * for future variations.
         */
        export namespace GpgSignatureFormatFlags {
            export const $gtype: GObject.GType<GpgSignatureFormatFlags>;
        }

        enum GpgSignatureFormatFlags {
            /**
             * Use the default output format
             */
            GPG_SIGNATURE_FORMAT_DEFAULT,
        }
        /**
         * Flags modifying commit behavior. In bare-user-only mode,
         * `OSTREE_REPO_COMMIT_MODIFIER_FLAGS_CANONICAL_PERMISSIONS` and
         * `OSTREE_REPO_COMMIT_MODIFIER_FLAGS_SKIP_XATTRS` are automatically enabled.
         */

        /**
         * Flags modifying commit behavior. In bare-user-only mode,
         * `OSTREE_REPO_COMMIT_MODIFIER_FLAGS_CANONICAL_PERMISSIONS` and
         * `OSTREE_REPO_COMMIT_MODIFIER_FLAGS_SKIP_XATTRS` are automatically enabled.
         */
        export namespace RepoCommitModifierFlags {
            export const $gtype: GObject.GType<RepoCommitModifierFlags>;
        }

        enum RepoCommitModifierFlags {
            /**
             * No special flags
             */
            NONE,
            /**
             * Do not process extended attributes
             */
            SKIP_XATTRS,
            /**
             * Generate size information.
             */
            GENERATE_SIZES,
            /**
             * Canonicalize permissions.
             */
            CANONICAL_PERMISSIONS,
            /**
             * Emit an error if configured SELinux
             * policy does not provide a label
             */
            ERROR_ON_UNLABELED,
            /**
             * Delete added files/directories after commit; Since:
             * 2017.13
             */
            CONSUME,
            /**
             * If a devino cache hit is found, skip
             * modifier filters (non-directories only); Since: 2017.14
             */
            DEVINO_CANONICAL,
            /**
             * For SELinux and other systems, label
             * /usr/etc as if it was /etc.
             */
            SELINUX_LABEL_V1,
        }
        /**
         * Flags representing the state of a commit in the local repository, as returned
         * by ostree_repo_load_commit().
         */

        /**
         * Flags representing the state of a commit in the local repository, as returned
         * by ostree_repo_load_commit().
         */
        export namespace RepoCommitState {
            export const $gtype: GObject.GType<RepoCommitState>;
        }

        enum RepoCommitState {
            /**
             * Commit is complete. This is the default.
             *    (Since: 2017.14.)
             */
            NORMAL,
            /**
             * One or more objects are missing from the
             *    local copy of the commit, but metadata is present. (Since: 2015.7.)
             */
            PARTIAL,
            /**
             * One or more objects are missing from the
             *    local copy of the commit, due to an fsck --delete. (Since: 2019.4.)
             */
            FSCK_PARTIAL,
        }

        export namespace RepoCommitTraverseFlags {
            export const $gtype: GObject.GType<RepoCommitTraverseFlags>;
        }

        enum RepoCommitTraverseFlags {
            /**
             * No special options for traverse
             */
            NONE,
            /**
             * Traverse and retrieve only commit objects.
             * (Since: 2022.2)
             */
            COMMIT_ONLY,
        }

        export namespace RepoListObjectsFlags {
            export const $gtype: GObject.GType<RepoListObjectsFlags>;
        }

        enum RepoListObjectsFlags {
            /**
             * List only loose (plain file) objects
             */
            LOOSE,
            /**
             * List only packed (compacted into blobs) objects
             */
            PACKED,
            /**
             * List all objects
             */
            ALL,
            /**
             * Only list objects in this repo, not parents
             */
            NO_PARENTS,
        }

        export namespace RepoListRefsExtFlags {
            export const $gtype: GObject.GType<RepoListRefsExtFlags>;
        }

        enum RepoListRefsExtFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Only list aliases.  Since: 2017.10
             */
            ALIASES,
            /**
             * Exclude remote refs.  Since: 2017.11
             */
            EXCLUDE_REMOTES,
            /**
             * Exclude mirrored refs.  Since: 2019.2
             */
            EXCLUDE_MIRRORS,
        }

        export namespace RepoPruneFlags {
            export const $gtype: GObject.GType<RepoPruneFlags>;
        }

        enum RepoPruneFlags {
            /**
             * No special options for pruning
             */
            NONE,
            /**
             * Don't actually delete objects
             */
            NO_PRUNE,
            /**
             * Do not traverse individual commit objects, only follow refs
             * for reachability calculations
             */
            REFS_ONLY,
            /**
             * Only traverse commit objects.  (Since 2022.2)
             */
            COMMIT_ONLY,
        }

        export namespace RepoPullFlags {
            export const $gtype: GObject.GType<RepoPullFlags>;
        }

        enum RepoPullFlags {
            /**
             * No special options for pull
             */
            NONE,
            /**
             * Write out refs suitable for mirrors and fetch all refs if none
             * requested
             */
            MIRROR,
            /**
             * Fetch only the commit metadata
             */
            COMMIT_ONLY,
            /**
             * Do verify checksums of local (filesystem-accessible)
             * repositories (defaults on for HTTP)
             */
            UNTRUSTED,
            /**
             * Since 2017.7.  Reject writes of content objects with
             * modes outside of 0775.
             */
            BAREUSERONLY_FILES,
            /**
             * Don't verify checksums of objects HTTP repositories
             * (Since: 2017.12)
             */
            TRUSTED_HTTP,
        }

        export namespace RepoResolveRevExtFlags {
            export const $gtype: GObject.GType<RepoResolveRevExtFlags>;
        }

        enum RepoResolveRevExtFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Exclude remote and mirrored refs. Since: 2019.2
             */
            LOCAL_ONLY,
        }

        export namespace RepoVerifyFlags {
            export const $gtype: GObject.GType<RepoVerifyFlags>;
        }

        enum RepoVerifyFlags {
            /**
             * No flags
             */
            NONE,
            /**
             * Skip GPG verification
             */
            NO_GPG,
            /**
             * Skip all other signature verification methods
             */
            NO_SIGNAPI,
        }

        export namespace SePolicyRestoreconFlags {
            export const $gtype: GObject.GType<SePolicyRestoreconFlags>;
        }

        enum SePolicyRestoreconFlags {
            NONE,
            ALLOW_NOLABEL,
            KEEP_EXISTING,
        }

        export namespace SysrootSimpleWriteDeploymentFlags {
            export const $gtype: GObject.GType<SysrootSimpleWriteDeploymentFlags>;
        }

        enum SysrootSimpleWriteDeploymentFlags {
            NONE,
            RETAIN,
            NOT_DEFAULT,
            NO_CLEAN,
            RETAIN_PENDING,
            RETAIN_ROLLBACK,
        }
        /**
         * Flags controlling operation of an #OstreeSysrootUpgrader.
         */

        /**
         * Flags controlling operation of an #OstreeSysrootUpgrader.
         */
        export namespace SysrootUpgraderFlags {
            export const $gtype: GObject.GType<SysrootUpgraderFlags>;
        }

        enum SysrootUpgraderFlags {
            /**
             * Do not error if the origin has an
             * unconfigured-state key
             */
            IGNORE_UNCONFIGURED,
            /**
             * Enable "staging" (finalization at shutdown); recommended
             *    (Since: 2021.4)
             */
            STAGE,
        }

        export namespace SysrootUpgraderPullFlags {
            export const $gtype: GObject.GType<SysrootUpgraderPullFlags>;
        }

        enum SysrootUpgraderPullFlags {
            NONE,
            ALLOW_OLDER,
            SYNTHETIC,
        }
        module AsyncProgress {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class AsyncProgress extends GObject.Object {
            static $gtype: GObject.GType<AsyncProgress>;

            // Constructors

            constructor(properties?: Partial<AsyncProgress.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): AsyncProgress;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Virtual methods

            vfunc_changed(): void;

            // Methods

            /**
             * Atomically copies all the state from `self` to `dest,` without invoking the
             * callback.
             * This is used for proxying progress objects across different #GMainContexts.
             * @param dest An #OstreeAsyncProgress to copy to
             */
            copy_state(dest: AsyncProgress): void;
            /**
             * Process any pending signals, ensuring the main context is cleared
             * of sources used by this object.  Also ensures that no further
             * events will be queued.
             */
            finish(): void;
            /**
             * Get the human-readable status string from the #OstreeAsyncProgress. This
             * operation is thread-safe. The retuned value may be %NULL if no status is
             * set.
             *
             * This is a convenience function to get the well-known `status` key.
             * @returns the current status, or %NULL if none is set
             */
            get_status(): string | null;
            get_uint(key: string): number;
            get_uint64(key: string): number;
            /**
             * Look up a key in the #OstreeAsyncProgress and return the #GVariant associated
             * with it. The lookup is thread-safe.
             * @param key a key to look up
             * @returns value for the given @key, or %NULL if    it was not set
             */
            get_variant(key: string): GLib.Variant | null;
            /**
             * Set the human-readable status string for the #OstreeAsyncProgress. This
             * operation is thread-safe. %NULL may be passed to clear the status.
             *
             * This is a convenience function to set the well-known `status` key.
             * @param status new status string, or %NULL to clear the status
             */
            set_status(status?: string | null): void;
            set_uint(key: string, value: number): void;
            set_uint64(key: string, value: number): void;
            /**
             * Assign a new `value` to the given `key,` replacing any existing value. The
             * operation is thread-safe. `value` may be a floating reference;
             * g_variant_ref_sink() will be called on it.
             *
             * Any watchers of the #OstreeAsyncProgress will be notified of the change if
             * `value` differs from the existing value for `key`.
             * @param key a key to set
             * @param value the value to assign to @key
             */
            set_variant(key: string, value: GLib.Variant): void;
        }

        module BootconfigParser {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BootconfigParser extends GObject.Object {
            static $gtype: GObject.GType<BootconfigParser>;

            // Constructors

            constructor(properties?: Partial<BootconfigParser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): BootconfigParser;

            // Methods

            clone(): BootconfigParser;
            /**
             * Get the value corresponding to `key` from the boot configuration dictionary.
             * @param key the key name to retrieve
             * @returns The corresponding value, or %NULL if the key hasn't been found.
             */
            get(key: string): string | null;
            get_overlay_initrds(): string[] | null;
            parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initialize a bootconfig from the given file.
             * @param dfd Directory fd
             * @param path File path
             * @param cancellable Cancellable
             */
            parse_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set the `key/``value` pair to the boot configuration dictionary.
             * @param key the key
             * @param value the key
             */
            set(key: string, value: string): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * These are rendered as additional `initrd` keys in the final bootloader configs. The
             * base initrd is part of the primary keys.
             * @param initrds Array of overlay    initrds or %NULL to unset.
             */
            set_overlay_initrds(initrds?: string[] | null): void;
            write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
            write_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;
        }

        module ContentWriter {
            // Constructor properties interface

            interface ConstructorProps extends Gio.OutputStream.ConstructorProps {}
        }

        class ContentWriter extends Gio.OutputStream {
            static $gtype: GObject.GType<ContentWriter>;

            // Constructors

            constructor(properties?: Partial<ContentWriter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Complete the object write and return the checksum.
             * @param cancellable Cancellable
             * @returns Checksum, or %NULL on error
             */
            finish(cancellable?: Gio.Cancellable | null): string;
        }

        module Deployment {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Deployment extends GObject.Object {
            static $gtype: GObject.GType<Deployment>;

            // Constructors

            constructor(properties?: Partial<Deployment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                index: number,
                osname: string,
                csum: string,
                deployserial: number,
                bootcsum: string | null,
                bootserial: number,
            ): Deployment;

            // Static methods

            /**
             * The intention of an origin file is primarily describe the "inputs" that
             * resulted in a deployment, and it's commonly used to derive the new state. For
             * example, a key value (in pure libostree mode) is the "refspec". However,
             * libostree (or other applications) may want to store "transient" state that
             * should not be carried across upgrades.
             *
             * This function just removes all members of the `libostree-transient` group.
             * The name of that group is available to all libostree users; best practice
             * would be to prefix values underneath there with a short identifier for your
             * software.
             *
             * Additionally, this function will remove the `origin/unlocked` and
             * `origin/override-commit` members; these should be considered transient state
             * that should have been under an explicit group.
             * @param origin An origin
             */
            static origin_remove_transient_state(origin: GLib.KeyFile): void;
            static unlocked_state_to_string(state: DeploymentUnlockedState): string;

            // Methods

            clone(): Deployment;
            equal(bp: Deployment): boolean;
            get_bootconfig(): BootconfigParser | null;
            get_bootcsum(): string;
            get_bootserial(): number;
            get_csum(): string;
            get_deployserial(): number;
            get_index(): number;
            get_origin(): GLib.KeyFile | null;
            /**
             * Note this function only returns a *relative* path - if you want to
             * access, it, you must either use fd-relative api such as openat(),
             * or concatenate it with the full ostree_sysroot_get_path().
             * @returns Path to deployment root directory, relative to sysroot
             */
            get_origin_relpath(): string;
            get_osname(): string;
            get_unlocked(): DeploymentUnlockedState;
            hash(): number;
            is_finalization_locked(): boolean;
            /**
             * See ostree_sysroot_deployment_set_pinned().
             * @returns `TRUE` if deployment will not be subject to GC
             */
            is_pinned(): boolean;
            is_staged(): boolean;
            /**
             * Set or clear the bootloader configuration.
             * @param bootconfig Bootloader configuration object
             */
            set_bootconfig(bootconfig?: BootconfigParser | null): void;
            /**
             * Should never have been made public API; don't use this.
             * @param index Don't use this
             */
            set_bootserial(index: number): void;
            /**
             * Sets the global index into the bootloader ordering.
             * @param index Index into bootloader ordering
             */
            set_index(index: number): void;
            /**
             * Replace the "origin", which is a description of the source
             * of the deployment and how to update to the next version.
             * @param origin Set the origin for this deployment
             */
            set_origin(origin?: GLib.KeyFile | null): void;
        }

        module GpgVerifyResult {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        class GpgVerifyResult extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<GpgVerifyResult>;

            // Constructors

            constructor(properties?: Partial<GpgVerifyResult.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Similar to ostree_gpg_verify_result_describe() but takes a #GVariant of
             * all attributes for a GPG signature instead of an #OstreeGpgVerifyResult
             * and signature index.
             *
             * The `variant` <emphasis>MUST</emphasis> have been created by
             * ostree_gpg_verify_result_get_all().
             * @param variant a #GVariant from ostree_gpg_verify_result_get_all()
             * @param output_buffer a #GString to hold the description
             * @param line_prefix optional line prefix string
             * @param flags flags to adjust the description format
             */
            static describe_variant(
                variant: GLib.Variant,
                output_buffer: GLib.String,
                line_prefix: string | null,
                flags: GpgSignatureFormatFlags,
            ): void;

            // Methods

            /**
             * Counts all the signatures in `result`.
             * @returns signature count
             */
            count_all(): number;
            /**
             * Counts only the valid signatures in `result`.
             * @returns valid signature count
             */
            count_valid(): number;
            /**
             * Appends a brief, human-readable description of the GPG signature at
             * `signature_index` in `result` to the `output_buffer`.  The description
             * spans multiple lines.  A `line_prefix` string, if given, will precede
             * each line of the description.
             *
             * The `flags` argument is reserved for future variations to the description
             * format.  Currently must be 0.
             *
             * It is a programmer error to request an invalid `signature_index`.  Use
             * ostree_gpg_verify_result_count_all() to find the number of signatures in
             * `result`.
             * @param signature_index which signature to describe
             * @param output_buffer a #GString to hold the description
             * @param line_prefix optional line prefix string
             * @param flags flags to adjust the description format
             */
            describe(
                signature_index: number,
                output_buffer: GLib.String,
                line_prefix: string | null,
                flags: GpgSignatureFormatFlags | null,
            ): void;
            /**
             * Builds a #GVariant tuple of requested attributes for the GPG signature at
             * `signature_index` in `result`.  See the #OstreeGpgSignatureAttr description
             * for the #GVariantType of each available attribute.
             *
             * It is a programmer error to request an invalid #OstreeGpgSignatureAttr or
             * an invalid `signature_index`.  Use ostree_gpg_verify_result_count_all() to
             * find the number of signatures in `result`.
             * @param signature_index which signature to get attributes from
             * @param attrs Array of requested attributes
             * @returns a new, floating, #GVariant tuple
             */
            get(signature_index: number, attrs: GpgSignatureAttr[] | null): GLib.Variant;
            /**
             * Builds a #GVariant tuple of all available attributes for the GPG signature
             * at `signature_index` in `result`.
             *
             * The child values in the returned #GVariant tuple are ordered to match the
             * #OstreeGpgSignatureAttr enumeration, which means the enum values can be
             * used as index values in functions like g_variant_get_child().  See the
             * #OstreeGpgSignatureAttr description for the #GVariantType of each
             * available attribute.
             *
             * <note>
             *   <para>
             *     The #OstreeGpgSignatureAttr enumeration may be extended in the future
             *     with new attributes, which would affect the #GVariant tuple returned by
             *     this function.  While the position and type of current child values in
             *     the #GVariant tuple will not change, to avoid backward-compatibility
             *     issues <emphasis>please do not depend on the tuple's overall size or
             *     type signature</emphasis>.
             *   </para>
             * </note>
             *
             * It is a programmer error to request an invalid `signature_index`.  Use
             * ostree_gpg_verify_result_count_all() to find the number of signatures in
             * `result`.
             * @param signature_index which signature to get attributes from
             * @returns a new, floating, #GVariant tuple
             */
            get_all(signature_index: number): GLib.Variant;
            /**
             * Searches `result` for a signature signed by `key_id`.  If a match is found,
             * the function returns %TRUE and sets `out_signature_index` so that further
             * signature details can be obtained through ostree_gpg_verify_result_get().
             * If no match is found, the function returns %FALSE and leaves
             * `out_signature_index` unchanged.
             * @param key_id a GPG key ID or fingerprint
             * @returns %TRUE on success, %FALSE on failure
             */
            lookup(key_id: string): [boolean, number];
            /**
             * Checks if the result contains at least one signature from the
             * trusted keyring.  You can call this function immediately after
             * ostree_repo_verify_summary() or ostree_repo_verify_commit_ext() -
             * it will handle the %NULL `result` and filled `error` too.
             * @returns %TRUE if @result was not %NULL and had at least one signature from trusted keyring, otherwise %FALSE
             */
            require_valid_signature(): boolean;

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

        module MutableTree {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Private instance structure.
         */
        class MutableTree extends GObject.Object {
            static $gtype: GObject.GType<MutableTree>;

            // Constructors

            constructor(properties?: Partial<MutableTree.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MutableTree;

            static new_from_checksum(repo: Repo, contents_checksum: string, metadata_checksum: string): MutableTree;

            static new_from_commit(repo: Repo, rev: string): MutableTree;

            // Methods

            /**
             * In some cases, a tree may be in a "lazy" state that loads
             * data in the background; if an error occurred during a non-throwing
             * API call, it will have been cached.  This function checks for a
             * cached error.  The tree remains in error state.
             * @returns `TRUE` on success
             */
            check_error(): boolean;
            /**
             * Returns the subdirectory of self with filename `name,` creating an empty one
             * it if it doesn't exist.
             * @param name Name of subdirectory of self to retrieve/creates
             */
            ensure_dir(name: string): [boolean, MutableTree | null];
            /**
             * Create all parent trees necessary for the given `split_path` to
             * exist.
             * @param split_path File path components
             * @param metadata_checksum SHA256 checksum for metadata
             */
            ensure_parent_dirs(split_path: string[], metadata_checksum: string): [boolean, MutableTree | null];
            /**
             * Merges `self` with the tree given by `contents_checksum` and
             * `metadata_checksum,` but only if it's possible without writing new objects to
             * the `repo`.  We can do this if either `self` is empty, the tree given by
             * `contents_checksum` is empty or if both trees already have the same
             * `contents_checksum`.
             * @param repo
             * @param contents_checksum
             * @param metadata_checksum
             * @returns @TRUE if merge was successful, @FALSE if it was not possible. This function enables optimisations when composing trees.  The provided checksums are not loaded or checked when this function is called.  Instead the contents will be loaded only when needed.
             */
            fill_empty_from_dirtree(repo: Repo, contents_checksum: string, metadata_checksum: string): boolean;
            get_contents_checksum(): string;
            get_files(): GLib.HashTable<string, string>;
            get_metadata_checksum(): string;
            get_subdirs(): GLib.HashTable<string, MutableTree>;
            /**
             * Lookup `name` and returns `out_file_checksum` or `out_subdir` depending on its
             * file type.
             * @param name name
             * @returns %TRUE on success and either @out_file_checksum or @out_subdir are filled, %FALSE otherwise.
             */
            lookup(name: string): [boolean, string, MutableTree | null];
            /**
             * Remove the file or subdirectory named `name` from the mutable tree `self`.
             * @param name Name of file or subdirectory to remove
             * @param allow_noent If @FALSE, an error will be thrown if @name does not exist in the tree
             */
            remove(name: string, allow_noent: boolean): boolean;
            replace_file(name: string, checksum: string): boolean;
            set_contents_checksum(checksum: string): void;
            set_metadata_checksum(checksum: string): void;
            /**
             * Traverse `start` number of elements starting from `split_path;` the
             * child will be returned in `out_subdir`.
             * @param split_path Split pathname
             * @param start Descend from this number of elements in @split_path
             */
            walk(split_path: string[], start: number): [boolean, MutableTree];
        }

        module Repo {
            // Signal callback interfaces

            interface GpgVerifyResult {
                (checksum: string, result: GpgVerifyResult): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                path: Gio.File;
                remotes_config_dir: string;
                remotesConfigDir: string;
                sysroot_path: Gio.File;
                sysrootPath: Gio.File;
            }
        }

        class Repo extends GObject.Object {
            static $gtype: GObject.GType<Repo>;

            // Properties

            /**
             * Path to repository.  Note that if this repository was created
             * via `ostree_repo_new_at()`, this value will refer to a value in
             * the Linux kernel's `/proc/self/fd` directory.  Generally, you
             * should avoid using this property at all; you can gain a reference
             * to the repository's directory fd via `ostree_repo_get_dfd()` and
             * use file-descriptor relative operations.
             */
            get path(): Gio.File;
            /**
             * Path to directory containing remote definitions.  The default is `NULL`.
             * If a `sysroot-path` property is defined, this value will default to
             * `${sysroot_path}/etc/ostree/remotes.d`.
             *
             * This value will only be used for system repositories.
             */
            get remotes_config_dir(): string;
            /**
             * Path to directory containing remote definitions.  The default is `NULL`.
             * If a `sysroot-path` property is defined, this value will default to
             * `${sysroot_path}/etc/ostree/remotes.d`.
             *
             * This value will only be used for system repositories.
             */
            get remotesConfigDir(): string;
            /**
             * A system using libostree for the host has a "system" repository; this
             * property will be set for repositories referenced via
             * `ostree_sysroot_repo()` for example.
             *
             * You should avoid using this property; if your code is operating
             * on a system repository, use `OstreeSysroot` and access the repository
             * object via `ostree_sysroot_repo()`.
             */
            get sysroot_path(): Gio.File;
            /**
             * A system using libostree for the host has a "system" repository; this
             * property will be set for repositories referenced via
             * `ostree_sysroot_repo()` for example.
             *
             * You should avoid using this property; if your code is operating
             * on a system repository, use `OstreeSysroot` and access the repository
             * object via `ostree_sysroot_repo()`.
             */
            get sysrootPath(): Gio.File;

            // Constructors

            constructor(properties?: Partial<Repo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](path: Gio.File): Repo;

            static new_default(): Repo;

            static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'gpg-verify-result',
                callback: (_source: this, checksum: string, result: GpgVerifyResult) => void,
            ): number;
            connect_after(
                signal: 'gpg-verify-result',
                callback: (_source: this, checksum: string, result: GpgVerifyResult) => void,
            ): number;
            emit(signal: 'gpg-verify-result', checksum: string, result: GpgVerifyResult): void;

            // Static methods

            /**
             * This is a file-descriptor relative version of ostree_repo_create().
             * Create the underlying structure on disk for the repository, and call
             * ostree_repo_open_at() on the result, preparing it for use.
             *
             * If a repository already exists at `dfd` + `path` (defined by an `objects/`
             * subdirectory existing), then this function will simply call
             * ostree_repo_open_at().  In other words, this function cannot be used to change
             * the mode or configuration (`repo/config`) of an existing repo.
             *
             * The `options` dict may contain:
             *
             *   - collection-id: s: Set as collection ID in repo/config (Since 2017.9)
             * @param dfd Directory fd
             * @param path Path
             * @param mode The mode to store the repository in
             * @param options a{sv}: See below for accepted keys
             * @param cancellable Cancellable
             */
            static create_at(
                dfd: number,
                path: string,
                mode: RepoMode,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): Repo;
            static mode_from_string(mode: string): [boolean, RepoMode];
            /**
             * This combines ostree_repo_new() (but using fd-relative access) with
             * ostree_repo_open().  Use this when you know you should be operating on an
             * already extant repository.  If you want to create one, use ostree_repo_create_at().
             * @param dfd Directory fd
             * @param path Path
             * @param cancellable
             */
            static open_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): Repo;
            /**
             * Convenient "changed" callback for use with
             * ostree_async_progress_new_and_connect() when pulling from a remote
             * repository.
             *
             * Depending on the state of the #OstreeAsyncProgress, either displays a
             * custom status message, or else outstanding fetch progress in bytes/sec,
             * or else outstanding content or metadata writes to the repository in
             * number of objects.
             *
             * Compatibility note: this function previously assumed that `user_data`
             * was a pointer to a #GSConsole instance.  This is no longer the case,
             * and `user_data` is ignored.
             * @param progress Async progress
             * @param user_data User data
             */
            static pull_default_console_progress_changed(progress: AsyncProgress, user_data?: any | null): void;
            /**
             * This hash table is a mapping from #GVariant which can be accessed
             * via ostree_object_name_deserialize() to a #GVariant containing either
             * a similar #GVariant or and array of them, listing the parents of the key.
             */
            static traverse_new_parents(): GLib.HashTable<GLib.Variant, GLib.Variant>;
            /**
             * This hash table is a set of #GVariant which can be accessed via
             * ostree_object_name_deserialize().
             */
            static traverse_new_reachable(): GLib.HashTable<GLib.Variant, GLib.Variant>;
            /**
             * Gets all the commits that a certain object belongs to, as recorded
             * by a parents table gotten from ostree_repo_traverse_commit_union_with_parents.
             * @param parents
             * @param object
             */
            static traverse_parents_get_commits(
                parents: { [key: string]: any } | GLib.HashTable<any, any>,
                object: GLib.Variant,
            ): string[];

            // Methods

            /**
             * Abort the active transaction; any staged objects and ref changes will be
             * discarded. You *must* invoke this if you have chosen not to invoke
             * ostree_repo_commit_transaction(). Calling this function when not in a
             * transaction will do nothing and return successfully.
             * @param cancellable Cancellable
             */
            abort_transaction(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Add a GPG signature to a summary file.
             * @param key_id NULL-terminated array of GPG keys.
             * @param homedir GPG home directory, or %NULL
             * @param cancellable A #GCancellable
             */
            add_gpg_signature_summary(
                key_id: string[],
                homedir?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Append a GPG signature to a commit.
             * @param commit_checksum SHA256 of given commit to sign
             * @param signature_bytes Signature data
             * @param cancellable A #GCancellable
             */
            append_gpg_signature(
                commit_checksum: string,
                signature_bytes: GLib.Bytes | Uint8Array,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Similar to ostree_repo_checkout_tree(), but uses directory-relative
             * paths for the destination, uses a new `OstreeRepoCheckoutAtOptions`,
             * and takes a commit checksum and optional subpath pair, rather than
             * requiring use of `GFile` APIs for the caller.
             *
             * It also replaces ostree_repo_checkout_at() which was not safe to
             * use with GObject introspection.
             *
             * Note in addition that unlike ostree_repo_checkout_tree(), the
             * default is not to use the repository-internal uncompressed objects
             * cache.
             * @param options Options
             * @param destination_dfd Directory FD for destination
             * @param destination_path Directory for destination
             * @param commit Checksum for commit
             * @param cancellable Cancellable
             */
            checkout_at(
                options: RepoCheckoutAtOptions | null,
                destination_dfd: number,
                destination_path: string,
                commit: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Create a composefs filesystem metadata blob from an OSTree commit. Supported
             * options:
             *
             *  - verity: `u`: 0 = disabled, 1 = set if present on file, 2 = enabled; any other value is a fatal
             * error
             * @param options If non-NULL, must be a GVariant of type a{sv}. See below.
             * @param destination_dfd Parent directory fd
             * @param destination_path Filename
             * @param checksum OStree commit digest
             * @param cancellable Cancellable
             */
            checkout_composefs(
                options: GLib.Variant | null,
                destination_dfd: number,
                destination_path: string,
                checksum: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Call this after finishing a succession of checkout operations; it
             * will delete any currently-unused uncompressed objects from the
             * cache.
             * @param cancellable Cancellable
             */
            checkout_gc(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Check out `source` into `destination,` which must live on the
             * physical filesystem.  `source` may be any subdirectory of a given
             * commit.  The `mode` and `overwrite_mode` allow control over how the
             * files are checked out.
             * @param mode Options controlling all files
             * @param overwrite_mode Whether or not to overwrite files
             * @param destination Place tree here
             * @param source Source tree
             * @param source_info Source info
             * @param cancellable Cancellable
             */
            checkout_tree(
                mode: RepoCheckoutMode | null,
                overwrite_mode: RepoCheckoutOverwriteMode | null,
                destination: Gio.File,
                source: RepoFile,
                source_info: Gio.FileInfo,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Compute the composefs digest for a filesystem tree
             * and insert it into metadata for a commit object.  The composefs
             * digest covers the entire filesystem tree and can be verified by
             * the composefs mount tooling.
             * @param format_version Must be zero
             * @param dict A GVariant builder of type a{sv}
             * @param repo_root the target filesystem tree
             * @param cancellable Cancellable
             */
            commit_add_composefs_metadata(
                format_version: number,
                dict: GLib.VariantDict,
                repo_root: RepoFile,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Complete the transaction. Any refs set with
             * ostree_repo_transaction_set_ref() or
             * ostree_repo_transaction_set_refspec() will be written out.
             *
             * Note that if multiple threads are performing writes, all such threads must
             * have terminated before this function is invoked.
             *
             * Locking: Releases `shared` lock acquired by `ostree_repo_prepare_transaction()`
             * Multithreading: This function is *not* MT safe; only one transaction can be
             * active at a time.
             * @param cancellable Cancellable
             */
            commit_transaction(cancellable?: Gio.Cancellable | null): [boolean, RepoTransactionStats | null];
            copy_config(): GLib.KeyFile;
            /**
             * Create the underlying structure on disk for the repository, and call
             * ostree_repo_open() on the result, preparing it for use.
             *
             * Since version 2016.8, this function will succeed on an existing
             * repository, and finish creating any necessary files in a partially
             * created repository.  However, this function cannot change the mode
             * of an existing repository, and will silently ignore an attempt to
             * do so.
             *
             * Since 2017.9, "existing repository" is defined by the existence of an
             * `objects` subdirectory.
             *
             * This function predates ostree_repo_create_at(). It is an error to call
             * this function on a repository initialized via ostree_repo_open_at().
             * @param mode The mode to store the repository in
             * @param cancellable Cancellable
             */
            create(mode: RepoMode | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Remove the object of type `objtype` with checksum `sha2`56
             * from the repository.  An error of type %G_IO_ERROR_NOT_FOUND
             * is thrown if the object does not exist.
             * @param objtype Object type
             * @param sha256 Checksum
             * @param cancellable Cancellable
             */
            delete_object(objtype: ObjectType | null, sha256: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Check whether two opened repositories are the same on disk: if their root
             * directories are the same inode. If `a` or `b` are not open yet (due to
             * ostree_repo_open() not being called on them yet), %FALSE will be returned.
             * @param b an #OstreeRepo
             * @returns %TRUE if @a and @b are the same repository on disk, %FALSE otherwise
             */
            equal(b: Repo): boolean;
            /**
             * Find reachable remote URIs which claim to provide any of the given named
             * `refs`. This will search for configured remotes (#OstreeRepoFinderConfig),
             * mounted volumes (#OstreeRepoFinderMount) and (if enabled at compile time)
             * local network peers (#OstreeRepoFinderAvahi). In order to use a custom
             * configuration of #OstreeRepoFinder instances, call
             * ostree_repo_finder_resolve_all_async() on them individually.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most of `refs,` at the lowest
             * latency.
             *
             * Each result contains a list of the subset of `refs` it claims to provide. It
             * is possible for a non-empty list of results to be returned, but for some of
             * `refs` to not be listed in any of the results. Callers must check for this.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given `refs`
             * from those remotes.
             *
             * The following `options` are currently defined:
             *
             *   * `override-commit-ids` (`as`): Array of specific commit IDs to fetch. The nth
             *   commit ID applies to the nth ref, so this must be the same length as `refs,` if
             *   provided.
             *   * `n-network-retries` (`u`): Number of times to retry each download on
             *   receiving a transient network error, such as a socket timeout; default is
             *   5, 0 means return errors without retrying. Since: 2018.6
             *
             * `finders` must be a non-empty %NULL-terminated array of the #OstreeRepoFinder
             * instances to use, or %NULL to use the system default set of finders, which
             * will typically be all available finders using their default options (but
             * this is not guaranteed).
             *
             * GPG verification of commits will be used unconditionally.
             *
             * This will use the thread-default #GMainContext, but will not iterate it.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param options a GVariant `a{sv}` with an extensible set of flags
             * @param finders non-empty array of    #OstreeRepoFinder instances to use, or %NULL to use the system defaults
             * @param progress an #OstreeAsyncProgress to update with the operation’s    progress, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             */
            find_remotes_async(
                refs: CollectionRef[],
                options: GLib.Variant | null,
                finders: RepoFinder[],
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<RepoFinderResult[]>;
            /**
             * Find reachable remote URIs which claim to provide any of the given named
             * `refs`. This will search for configured remotes (#OstreeRepoFinderConfig),
             * mounted volumes (#OstreeRepoFinderMount) and (if enabled at compile time)
             * local network peers (#OstreeRepoFinderAvahi). In order to use a custom
             * configuration of #OstreeRepoFinder instances, call
             * ostree_repo_finder_resolve_all_async() on them individually.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most of `refs,` at the lowest
             * latency.
             *
             * Each result contains a list of the subset of `refs` it claims to provide. It
             * is possible for a non-empty list of results to be returned, but for some of
             * `refs` to not be listed in any of the results. Callers must check for this.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given `refs`
             * from those remotes.
             *
             * The following `options` are currently defined:
             *
             *   * `override-commit-ids` (`as`): Array of specific commit IDs to fetch. The nth
             *   commit ID applies to the nth ref, so this must be the same length as `refs,` if
             *   provided.
             *   * `n-network-retries` (`u`): Number of times to retry each download on
             *   receiving a transient network error, such as a socket timeout; default is
             *   5, 0 means return errors without retrying. Since: 2018.6
             *
             * `finders` must be a non-empty %NULL-terminated array of the #OstreeRepoFinder
             * instances to use, or %NULL to use the system default set of finders, which
             * will typically be all available finders using their default options (but
             * this is not guaranteed).
             *
             * GPG verification of commits will be used unconditionally.
             *
             * This will use the thread-default #GMainContext, but will not iterate it.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param options a GVariant `a{sv}` with an extensible set of flags
             * @param finders non-empty array of    #OstreeRepoFinder instances to use, or %NULL to use the system defaults
             * @param progress an #OstreeAsyncProgress to update with the operation’s    progress, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            find_remotes_async(
                refs: CollectionRef[],
                options: GLib.Variant | null,
                finders: RepoFinder[],
                progress: AsyncProgress | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Find reachable remote URIs which claim to provide any of the given named
             * `refs`. This will search for configured remotes (#OstreeRepoFinderConfig),
             * mounted volumes (#OstreeRepoFinderMount) and (if enabled at compile time)
             * local network peers (#OstreeRepoFinderAvahi). In order to use a custom
             * configuration of #OstreeRepoFinder instances, call
             * ostree_repo_finder_resolve_all_async() on them individually.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most of `refs,` at the lowest
             * latency.
             *
             * Each result contains a list of the subset of `refs` it claims to provide. It
             * is possible for a non-empty list of results to be returned, but for some of
             * `refs` to not be listed in any of the results. Callers must check for this.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given `refs`
             * from those remotes.
             *
             * The following `options` are currently defined:
             *
             *   * `override-commit-ids` (`as`): Array of specific commit IDs to fetch. The nth
             *   commit ID applies to the nth ref, so this must be the same length as `refs,` if
             *   provided.
             *   * `n-network-retries` (`u`): Number of times to retry each download on
             *   receiving a transient network error, such as a socket timeout; default is
             *   5, 0 means return errors without retrying. Since: 2018.6
             *
             * `finders` must be a non-empty %NULL-terminated array of the #OstreeRepoFinder
             * instances to use, or %NULL to use the system default set of finders, which
             * will typically be all available finders using their default options (but
             * this is not guaranteed).
             *
             * GPG verification of commits will be used unconditionally.
             *
             * This will use the thread-default #GMainContext, but will not iterate it.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param options a GVariant `a{sv}` with an extensible set of flags
             * @param finders non-empty array of    #OstreeRepoFinder instances to use, or %NULL to use the system defaults
             * @param progress an #OstreeAsyncProgress to update with the operation’s    progress, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            find_remotes_async(
                refs: CollectionRef[],
                options: GLib.Variant | null,
                finders: RepoFinder[],
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<RepoFinderResult[]> | void;
            /**
             * Finish an asynchronous pull operation started with
             * ostree_repo_find_remotes_async().
             * @param result the asynchronous result
             * @returns a potentially empty array    of #OstreeRepoFinderResults, followed by a %NULL terminator element; or    %NULL on error
             */
            find_remotes_finish(result: Gio.AsyncResult): RepoFinderResult[];
            /**
             * Verify consistency of the object; this performs checks only relevant to the
             * immediate object itself, such as checksumming. This API call will not itself
             * traverse metadata objects for example.
             * @param objtype Object type
             * @param sha256 Checksum
             * @param cancellable Cancellable
             */
            fsck_object(objtype: ObjectType | null, sha256: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Get the bootloader configured. See the documentation for the
             * "sysroot.bootloader" config key.
             * @returns bootloader configuration for the sysroot
             */
            get_bootloader(): string;
            /**
             * Get the collection ID of this repository. See [collection IDs][collection-ids].
             * @returns collection ID for the repository
             */
            get_collection_id(): string | null;
            get_config(): GLib.KeyFile;
            /**
             * Get the set of default repo finders configured. See the documentation for
             * the "core.default-repo-finders" config key.
             * @returns %NULL-terminated array of strings.
             */
            get_default_repo_finders(): string[];
            /**
             * In some cases it's useful for applications to access the repository
             * directly; for example, writing content into `repo/tmp` ensures it's
             * on the same filesystem.  Another case is detecting the mtime on the
             * repository (to see whether a ref was written).
             * @returns File descriptor for repository root - owned by @self
             */
            get_dfd(): number;
            /**
             * For more information see ostree_repo_set_disable_fsync().
             * @returns Whether or not fsync() is enabled for this repo.
             */
            get_disable_fsync(): boolean;
            /**
             * Determine the number of bytes of free disk space that are reserved according
             * to the repo config and return that number in `out_reserved_bytes`. See the
             * documentation for the core.min-free-space-size and
             * core.min-free-space-percent repo config options.
             * @returns %TRUE on success, %FALSE otherwise.
             */
            get_min_free_space_bytes(): [boolean, number];
            get_mode(): RepoMode;
            /**
             * Before this function can be used, ostree_repo_init() must have been
             * called.
             * @returns Parent repository, or %NULL if none
             */
            get_parent(): Repo | null;
            /**
             * Note that since the introduction of ostree_repo_open_at(), this function may
             * return a process-specific path in `/proc` if the repository was created using
             * that API. In general, you should avoid use of this API.
             * @returns Path to repo
             */
            get_path(): Gio.File;
            /**
             * OSTree remotes are represented by keyfile groups, formatted like:
             * `[remote "remotename"]`. This function returns a value named `option_name`
             * underneath that group, and returns it as a boolean.
             * If the option is not set, `out_value` will be set to `default_value`. If an
             * error is returned, `out_value` will be set to %FALSE.
             * @param remote_name Name
             * @param option_name Option
             * @param default_value Value returned if @option_name is not present
             * @returns %TRUE on success, otherwise %FALSE with @error set
             */
            get_remote_boolean_option(
                remote_name: string,
                option_name: string,
                default_value: boolean,
            ): [boolean, boolean];
            /**
             * OSTree remotes are represented by keyfile groups, formatted like:
             * `[remote "remotename"]`. This function returns a value named `option_name`
             * underneath that group, and returns it as a zero terminated array of strings.
             * If the option is not set, or if an error is returned, `out_value` will be set
             * to %NULL.
             * @param remote_name Name
             * @param option_name Option
             * @returns %TRUE on success, otherwise %FALSE with @error set
             */
            get_remote_list_option(remote_name: string, option_name: string): [boolean, string[]];
            /**
             * OSTree remotes are represented by keyfile groups, formatted like:
             * `[remote "remotename"]`. This function returns a value named `option_name`
             * underneath that group, or `default_value` if the remote exists but not the
             * option name.  If an error is returned, `out_value` will be set to %NULL.
             * @param remote_name Name
             * @param option_name Option
             * @param default_value Value returned if @option_name is not present
             * @returns %TRUE on success, otherwise %FALSE with @error set
             */
            get_remote_option(
                remote_name: string,
                option_name: string,
                default_value: string | null,
            ): [boolean, string];
            /**
             * Sign the given `data` with the specified keys in `key_id`. Similar to
             * ostree_repo_add_gpg_signature_summary() but can be used on any
             * data.
             *
             * You can use ostree_repo_gpg_verify_data() to verify the signatures.
             * @param data Data as a #GBytes
             * @param old_signatures Existing signatures to append to (or %NULL)
             * @param key_id NULL-terminated array of GPG keys.
             * @param homedir GPG home directory, or %NULL
             * @param cancellable A #GCancellable
             * @returns %TRUE if @data has been signed successfully, %FALSE in case of error (@error will contain the reason).
             */
            gpg_sign_data(
                data: GLib.Bytes | Uint8Array,
                old_signatures: GLib.Bytes | null,
                key_id: string[],
                homedir: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Bytes];
            /**
             * Verify `signatures` for `data` using GPG keys in the keyring for
             * `remote_name,` and return an #OstreeGpgVerifyResult.
             *
             * The `remote_name` parameter can be %NULL. In that case it will do
             * the verifications using GPG keys in the keyrings of all remotes.
             * @param remote_name Name of remote
             * @param data Data as a #GBytes
             * @param signatures Signatures as a #GBytes
             * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
             * @param extra_keyring Path to additional keyring file (not a directory)
             * @param cancellable Cancellable
             * @returns an #OstreeGpgVerifyResult, or %NULL on error
             */
            gpg_verify_data(
                remote_name: string | null,
                data: GLib.Bytes | Uint8Array,
                signatures: GLib.Bytes | Uint8Array,
                keyringdir?: Gio.File | null,
                extra_keyring?: Gio.File | null,
                cancellable?: Gio.Cancellable | null,
            ): GpgVerifyResult;
            /**
             * Set `out_have_object` to %TRUE if `self` contains the given object;
             * %FALSE otherwise.
             * @param objtype Object type
             * @param checksum ASCII SHA256 checksum
             * @param cancellable Cancellable
             * @returns %FALSE if an unexpected error occurred, %TRUE otherwise
             */
            has_object(
                objtype: ObjectType | null,
                checksum: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, boolean];
            /**
             * Calculate a hash value for the given open repository, suitable for use when
             * putting it into a hash table. It is an error to call this on an #OstreeRepo
             * which is not yet open, as a persistent hash value cannot be calculated until
             * the repository is open and the inode of its root directory has been loaded.
             *
             * This function does no I/O.
             * @returns hash value for the #OstreeRepo
             */
            hash(): number;
            /**
             * Copy object named by `objtype` and `checksum` into `self` from the
             * source repository `source`.  If both repositories are of the same
             * type and on the same filesystem, this will simply be a fast Unix
             * hard link operation.
             *
             * Otherwise, a copy will be performed.
             * @param source Source repo
             * @param objtype Object type
             * @param checksum checksum
             * @param cancellable Cancellable
             */
            import_object_from(
                source: Repo,
                objtype: ObjectType | null,
                checksum: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Copy object named by `objtype` and `checksum` into `self` from the
             * source repository `source`. If `trusted` is %TRUE and both
             * repositories are of the same type and on the same filesystem,
             * this will simply be a fast Unix hard link operation.
             *
             * Otherwise, a copy will be performed.
             * @param source Source repo
             * @param objtype Object type
             * @param checksum checksum
             * @param trusted If %TRUE, assume the source repo is valid and trusted
             * @param cancellable Cancellable
             */
            import_object_from_with_trust(
                source: Repo,
                objtype: ObjectType | null,
                checksum: string,
                trusted: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            is_system(): boolean;
            /**
             * Returns whether the repository is writable by the current user.
             * If the repository is not writable, the `error` indicates why.
             * @returns %TRUE if this repository is writable
             */
            is_writable(): boolean;
            /**
             * List all local, mirrored, and remote refs, mapping them to the commit
             * checksums they currently point to in `out_all_refs`. If `match_collection_id`
             * is specified, the results will be limited to those with an equal collection
             * ID.
             *
             * #OstreeCollectionRefs are guaranteed to be returned with their collection ID
             * set to a non-%NULL value; so no refs from `refs/heads` will be listed if no
             * collection ID is configured for the repository
             * (ostree_repo_get_collection_id()).
             *
             * If you want to exclude refs from `refs/remotes`, use
             * %OSTREE_REPO_LIST_REFS_EXT_EXCLUDE_REMOTES in `flags`. Similarly use
             * %OSTREE_REPO_LIST_REFS_EXT_EXCLUDE_MIRRORS to exclude refs from
             * `refs/mirrors`.
             * @param match_collection_id If non-%NULL, only list refs from this collection
             * @param flags Options controlling listing behavior
             * @param cancellable Cancellable
             * @returns %TRUE on success, %FALSE otherwise
             */
            list_collection_refs(
                match_collection_id: string | null,
                flags: RepoListRefsExtFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<CollectionRef, string>];
            /**
             * This function synchronously enumerates all commit objects starting
             * with `start,` returning data in `out_commits`.
             *
             * To list all commit objects, provide the empty string `""` for `start`.
             * @param start List commits starting with this checksum (empty string for all)
             * @param cancellable Cancellable
             * @returns %TRUE on success, %FALSE on error, and @error will be set
             */
            list_commit_objects_starting_with(
                start: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<GLib.Variant, GLib.Variant>];
            /**
             * This function synchronously enumerates all objects in the
             * repository, returning data in `out_objects`.  `out_objects`
             * maps from keys returned by ostree_object_name_serialize()
             * to #GVariant values of type %OSTREE_REPO_LIST_OBJECTS_VARIANT_TYPE.
             * @param flags Flags controlling enumeration
             * @param cancellable Cancellable
             * @returns %TRUE on success, %FALSE on error, and @error will be set
             */
            list_objects(
                flags: RepoListObjectsFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<GLib.Variant, GLib.Variant>];
            /**
             * If `refspec_prefix` is %NULL, list all local and remote refspecs,
             * with their current values in `out_all_refs`.  Otherwise, only list
             * refspecs which have `refspec_prefix` as a prefix.
             *
             * `out_all_refs` will be returned as a mapping from refspecs (including the
             * remote name) to checksums. If `refspec_prefix` is non-%NULL, it will be
             * removed as a prefix from the hash table keys.
             * @param refspec_prefix Only list refs which match this prefix
             * @param cancellable Cancellable
             */
            list_refs(
                refspec_prefix: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<string, string>];
            /**
             * If `refspec_prefix` is %NULL, list all local and remote refspecs,
             * with their current values in `out_all_refs`.  Otherwise, only list
             * refspecs which have `refspec_prefix` as a prefix.
             *
             * `out_all_refs` will be returned as a mapping from refspecs (including the
             * remote name) to checksums. Differently from ostree_repo_list_refs(), the
             * `refspec_prefix` will not be removed from the refspecs in the hash table.
             * @param refspec_prefix Only list refs which match this prefix
             * @param flags Options controlling listing behavior
             * @param cancellable Cancellable
             */
            list_refs_ext(
                refspec_prefix: string | null,
                flags: RepoListRefsExtFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<string, string>];
            /**
             * This function synchronously enumerates all static delta indexes in the
             * repository, returning its result in `out_indexes`.
             * @param cancellable Cancellable
             */
            list_static_delta_indexes(cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * This function synchronously enumerates all static deltas in the
             * repository, returning its result in `out_deltas`.
             * @param cancellable Cancellable
             */
            list_static_delta_names(cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * A version of ostree_repo_load_variant() specialized to commits,
             * capable of returning extended state information.  Currently
             * the only extended state is %OSTREE_REPO_COMMIT_STATE_PARTIAL, which
             * means that only a sub-path of the commit is available.
             * @param checksum Commit checksum
             */
            load_commit(checksum: string): [boolean, GLib.Variant | null, RepoCommitState | null];
            /**
             * Load content object, decomposing it into three parts: the actual
             * content (for regular files), the metadata, and extended attributes.
             * @param checksum ASCII SHA256 checksum
             * @param cancellable Cancellable
             */
            load_file(
                checksum: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Gio.InputStream | null, Gio.FileInfo | null, GLib.Variant | null];
            /**
             * Load object as a stream; useful when copying objects between
             * repositories.
             * @param objtype Object type
             * @param checksum ASCII SHA256 checksum
             * @param cancellable Cancellable
             */
            load_object_stream(
                objtype: ObjectType | null,
                checksum: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Gio.InputStream, number];
            /**
             * Load the metadata object `sha2`56 of type `objtype,` storing the
             * result in `out_variant`.
             * @param objtype Expected object type
             * @param sha256 Checksum string
             */
            load_variant(objtype: ObjectType | null, sha256: string): [boolean, GLib.Variant];
            /**
             * Attempt to load the metadata object `sha2`56 of type `objtype` if it
             * exists, storing the result in `out_variant`.  If it doesn't exist,
             * `out_variant` will be set to %NULL and the function will still
             * return TRUE.
             * @param objtype Object type
             * @param sha256 ASCII checksum
             */
            load_variant_if_exists(objtype: ObjectType | null, sha256: string): [boolean, GLib.Variant | null];
            /**
             * Release a lock of type `lock_type` from the lock state. If the lock state
             * becomes empty, the repository is unlocked. Otherwise, the lock state only
             * changes when transitioning from an exclusive lock back to a shared lock. The
             * requested `lock_type` must be the same type that was requested in the call to
             * ostree_repo_lock_push(). It is a programmer error if these do not match and
             * the program may abort if the lock would reach an invalid state.
             *
             * ostree_repo_lock_pop() waits for the lock depending on the repository's
             * lock-timeout-secs configuration. When lock-timeout-secs is -1, a blocking lock is
             * attempted. Otherwise, the lock is removed non-blocking and
             * ostree_repo_lock_pop() will sleep synchronously up to lock-timeout-secs seconds
             * attempting to remove the lock. If the lock cannot be removed within the
             * timeout, a %G_IO_ERROR_WOULD_BLOCK error is returned.
             *
             * If `self` is not writable by the user, then no unlocking is attempted and
             * %TRUE is returned.
             * @param lock_type the type of lock to release
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, otherwise %FALSE with @error set
             */
            lock_pop(lock_type: RepoLockType | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Takes a lock on the repository and adds it to the lock state. If `lock_type`
             * is %OSTREE_REPO_LOCK_SHARED, a shared lock is taken. If `lock_type` is
             * %OSTREE_REPO_LOCK_EXCLUSIVE, an exclusive lock is taken. The actual lock
             * state is only changed when locking a previously unlocked repository or
             * upgrading the lock from shared to exclusive. If the requested lock type is
             * unchanged or would represent a downgrade (exclusive to shared), the lock
             * state is not changed.
             *
             * ostree_repo_lock_push() waits for the lock depending on the repository's
             * lock-timeout-secs configuration. When lock-timeout-secs is -1, a blocking lock is
             * attempted. Otherwise, the lock is taken non-blocking and
             * ostree_repo_lock_push() will sleep synchronously up to lock-timeout-secs seconds
             * attempting to acquire the lock. If the lock cannot be acquired within the
             * timeout, a %G_IO_ERROR_WOULD_BLOCK error is returned.
             *
             * If `self` is not writable by the user, then no locking is attempted and
             * %TRUE is returned.
             * @param lock_type the type of lock to acquire
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, otherwise %FALSE with @error set
             */
            lock_push(lock_type: RepoLockType | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Commits in the "partial" state do not have all their child objects
             * written.  This occurs in various situations, such as during a pull,
             * but also if a "subpath" pull is used, as well as "commit only"
             * pulls.
             *
             * This function is used by ostree_repo_pull_with_options(); you
             * should use this if you are implementing a different type of transport.
             * @param checksum Commit SHA-256
             * @param is_partial Whether or not this commit is partial
             */
            mark_commit_partial(checksum: string, is_partial: boolean): boolean;
            /**
             * Allows the setting of a reason code for a partial commit. Presently
             * it only supports setting reason bitmask to
             * OSTREE_REPO_COMMIT_STATE_FSCK_PARTIAL, or
             * OSTREE_REPO_COMMIT_STATE_NORMAL.  This will allow successive ostree
             * fsck operations to exit properly with an error code if the
             * repository has been truncated as a result of fsck trying to repair
             * it.
             * @param checksum Commit SHA-256
             * @param is_partial Whether or not this commit is partial
             * @param in_state Reason bitmask for partial commit
             */
            mark_commit_partial_reason(
                checksum: string,
                is_partial: boolean,
                in_state: RepoCommitState | null,
            ): boolean;
            open(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Starts or resumes a transaction. In order to write to a repo, you
             * need to start a transaction. You can complete the transaction with
             * ostree_repo_commit_transaction(), or abort the transaction with
             * ostree_repo_abort_transaction().
             *
             * Currently, transactions may result in partial commits or data in the target
             * repository if interrupted during ostree_repo_commit_transaction(), and
             * further writing refs is also not currently atomic.
             *
             * There can be at most one transaction active on a repo at a time per instance
             * of `OstreeRepo`; however, it is safe to have multiple threads writing objects
             * on a single `OstreeRepo` instance as long as their lifetime is bounded by the
             * transaction.
             *
             * Locking: Acquires a `shared` lock; release via commit or abort
             * Multithreading: This function is *not* MT safe; only one transaction can be
             * active at a time.
             * @param cancellable Cancellable
             */
            prepare_transaction(cancellable?: Gio.Cancellable | null): [boolean, boolean];
            /**
             * Delete content from the repository.  By default, this function will
             * only delete "orphaned" objects not referred to by any commit.  This
             * can happen during a local commit operation, when we have written
             * content objects but not saved the commit referencing them.
             *
             * However, if %OSTREE_REPO_PRUNE_FLAGS_REFS_ONLY is provided, instead
             * of traversing all commits, only refs will be used.  Particularly
             * when combined with `depth,` this is a convenient way to delete
             * history from the repository.
             *
             * Use the %OSTREE_REPO_PRUNE_FLAGS_NO_PRUNE to just determine
             * statistics on objects that would be deleted, without actually
             * deleting them.
             *
             * Locking: exclusive
             * @param flags Options controlling prune process
             * @param depth Stop traversal after this many iterations (-1 for unlimited)
             * @param cancellable Cancellable
             */
            prune(
                flags: RepoPruneFlags | null,
                depth: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number, number, number];
            /**
             * Delete content from the repository.  This function is the "backend"
             * half of the higher level ostree_repo_prune().  To use this function,
             * you determine the root set yourself, and this function finds all other
             * unreferenced objects and deletes them.
             *
             * Use this API when you want to perform more selective pruning - for example,
             * retain all commits from a production branch, but just GC some history from
             * your dev branch.
             *
             * The %OSTREE_REPO_PRUNE_FLAGS_NO_PRUNE flag may be specified to just determine
             * statistics on objects that would be deleted, without actually deleting them.
             *
             * Locking: exclusive
             * @param options Options controlling prune process
             * @param cancellable Cancellable
             */
            prune_from_reachable(
                options: RepoPruneOptions,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number, number, number];
            /**
             * Prune static deltas, if COMMIT is specified then delete static delta files only
             * targeting that commit; otherwise any static delta of non existing commits are
             * deleted.
             *
             * Locking: exclusive
             * @param commit ASCII SHA256 checksum for commit, or %NULL for each non existing commit
             * @param cancellable Cancellable
             */
            prune_static_deltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Connect to the remote repository, fetching the specified set of
             * refs `refs_to_fetch`.  For each ref that is changed, download the
             * commit, all metadata, and all content objects, storing them safely
             * on disk in `self`.
             *
             * If `flags` contains %OSTREE_REPO_PULL_FLAGS_MIRROR, and
             * the `refs_to_fetch` is %NULL, and the remote repository contains a
             * summary file, then all refs will be fetched.
             *
             * If `flags` contains %OSTREE_REPO_PULL_FLAGS_COMMIT_ONLY, then only the
             * metadata for the commits in `refs_to_fetch` is pulled.
             *
             * Warning: This API will iterate the thread default main context,
             * which is a bug, but kept for compatibility reasons.  If you want to
             * avoid this, use g_main_context_push_thread_default() to push a new
             * one around this call.
             * @param remote_name Name of remote
             * @param refs_to_fetch Optional list of refs; if %NULL, fetch all configured refs
             * @param flags Options controlling fetch behavior
             * @param progress Progress
             * @param cancellable Cancellable
             */
            pull(
                remote_name: string,
                refs_to_fetch: string[] | null,
                flags: RepoPullFlags | null,
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Pull refs from multiple remotes which have been found using
             * ostree_repo_find_remotes_async().
             *
             * `results` are expected to be in priority order, with the best remotes to pull
             * from listed first. ostree_repo_pull_from_remotes_async() will generally pull
             * from the remotes in order, but may parallelise its downloads.
             *
             * If an error is encountered when pulling from a given remote, that remote will
             * be ignored and another will be tried instead. If any refs have not been
             * downloaded successfully after all remotes have been tried, %G_IO_ERROR_FAILED
             * will be returned. The results of any successful downloads will remain cached
             * in the local repository.
             *
             * If `cancellable` is cancelled, %G_IO_ERROR_CANCELLED will be returned
             * immediately. The results of any successfully completed downloads at that
             * point will remain cached in the local repository.
             *
             * GPG verification of commits will be used unconditionally.
             *
             * The following `options` are currently defined:
             *
             *   * `flags` (`i`): #OstreeRepoPullFlags to apply to the pull operation
             *   * `inherit-transaction` (`b`): %TRUE to inherit an ongoing transaction on
             *     the #OstreeRepo, rather than encapsulating the pull in a new one
             *   * `depth` (`i`): How far in the history to traverse; default is 0, -1 means infinite
             *   * `disable-static-deltas` (`b`): Do not use static deltas
             *   * `http-headers` (`a(ss)`): Additional headers to add to all HTTP requests
             *   * `subdirs` (`as`): Pull just these subdirectories
             *   * `update-frequency` (`u`): Frequency to call the async progress callback in
             *     milliseconds, if any; only values higher than 0 are valid
             *   * `append-user-agent` (`s`): Additional string to append to the user agent
             *   * `n-network-retries` (`u`): Number of times to retry each download on receiving
             *     a transient network error, such as a socket timeout; default is 5, 0
             *     means return errors without retrying. Since: 2018.6
             *   * `ref-keyring-map` (`a(sss)`): Array of (collection ID, ref name, keyring
             *     remote name) tuples specifying which remote's keyring should be used when
             *     doing GPG verification of each collection-ref. This is useful to prevent a
             *     remote from serving malicious updates to refs which did not originate from
             *     it. This can be a subset or superset of the refs being pulled; any ref
             *     not being pulled will be ignored and any ref without a keyring remote
             *     will be verified with the keyring of the remote being pulled from.
             *     Since: 2019.2
             * @param results %NULL-terminated array of remotes to    pull from, including the refs to pull from each
             * @param options A GVariant `a{sv}` with an extensible set of flags
             * @param progress an #OstreeAsyncProgress to update with the operation’s    progress, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             */
            pull_from_remotes_async(
                results: RepoFinderResult[],
                options?: GLib.Variant | null,
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Pull refs from multiple remotes which have been found using
             * ostree_repo_find_remotes_async().
             *
             * `results` are expected to be in priority order, with the best remotes to pull
             * from listed first. ostree_repo_pull_from_remotes_async() will generally pull
             * from the remotes in order, but may parallelise its downloads.
             *
             * If an error is encountered when pulling from a given remote, that remote will
             * be ignored and another will be tried instead. If any refs have not been
             * downloaded successfully after all remotes have been tried, %G_IO_ERROR_FAILED
             * will be returned. The results of any successful downloads will remain cached
             * in the local repository.
             *
             * If `cancellable` is cancelled, %G_IO_ERROR_CANCELLED will be returned
             * immediately. The results of any successfully completed downloads at that
             * point will remain cached in the local repository.
             *
             * GPG verification of commits will be used unconditionally.
             *
             * The following `options` are currently defined:
             *
             *   * `flags` (`i`): #OstreeRepoPullFlags to apply to the pull operation
             *   * `inherit-transaction` (`b`): %TRUE to inherit an ongoing transaction on
             *     the #OstreeRepo, rather than encapsulating the pull in a new one
             *   * `depth` (`i`): How far in the history to traverse; default is 0, -1 means infinite
             *   * `disable-static-deltas` (`b`): Do not use static deltas
             *   * `http-headers` (`a(ss)`): Additional headers to add to all HTTP requests
             *   * `subdirs` (`as`): Pull just these subdirectories
             *   * `update-frequency` (`u`): Frequency to call the async progress callback in
             *     milliseconds, if any; only values higher than 0 are valid
             *   * `append-user-agent` (`s`): Additional string to append to the user agent
             *   * `n-network-retries` (`u`): Number of times to retry each download on receiving
             *     a transient network error, such as a socket timeout; default is 5, 0
             *     means return errors without retrying. Since: 2018.6
             *   * `ref-keyring-map` (`a(sss)`): Array of (collection ID, ref name, keyring
             *     remote name) tuples specifying which remote's keyring should be used when
             *     doing GPG verification of each collection-ref. This is useful to prevent a
             *     remote from serving malicious updates to refs which did not originate from
             *     it. This can be a subset or superset of the refs being pulled; any ref
             *     not being pulled will be ignored and any ref without a keyring remote
             *     will be verified with the keyring of the remote being pulled from.
             *     Since: 2019.2
             * @param results %NULL-terminated array of remotes to    pull from, including the refs to pull from each
             * @param options A GVariant `a{sv}` with an extensible set of flags
             * @param progress an #OstreeAsyncProgress to update with the operation’s    progress, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            pull_from_remotes_async(
                results: RepoFinderResult[],
                options: GLib.Variant | null,
                progress: AsyncProgress | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Pull refs from multiple remotes which have been found using
             * ostree_repo_find_remotes_async().
             *
             * `results` are expected to be in priority order, with the best remotes to pull
             * from listed first. ostree_repo_pull_from_remotes_async() will generally pull
             * from the remotes in order, but may parallelise its downloads.
             *
             * If an error is encountered when pulling from a given remote, that remote will
             * be ignored and another will be tried instead. If any refs have not been
             * downloaded successfully after all remotes have been tried, %G_IO_ERROR_FAILED
             * will be returned. The results of any successful downloads will remain cached
             * in the local repository.
             *
             * If `cancellable` is cancelled, %G_IO_ERROR_CANCELLED will be returned
             * immediately. The results of any successfully completed downloads at that
             * point will remain cached in the local repository.
             *
             * GPG verification of commits will be used unconditionally.
             *
             * The following `options` are currently defined:
             *
             *   * `flags` (`i`): #OstreeRepoPullFlags to apply to the pull operation
             *   * `inherit-transaction` (`b`): %TRUE to inherit an ongoing transaction on
             *     the #OstreeRepo, rather than encapsulating the pull in a new one
             *   * `depth` (`i`): How far in the history to traverse; default is 0, -1 means infinite
             *   * `disable-static-deltas` (`b`): Do not use static deltas
             *   * `http-headers` (`a(ss)`): Additional headers to add to all HTTP requests
             *   * `subdirs` (`as`): Pull just these subdirectories
             *   * `update-frequency` (`u`): Frequency to call the async progress callback in
             *     milliseconds, if any; only values higher than 0 are valid
             *   * `append-user-agent` (`s`): Additional string to append to the user agent
             *   * `n-network-retries` (`u`): Number of times to retry each download on receiving
             *     a transient network error, such as a socket timeout; default is 5, 0
             *     means return errors without retrying. Since: 2018.6
             *   * `ref-keyring-map` (`a(sss)`): Array of (collection ID, ref name, keyring
             *     remote name) tuples specifying which remote's keyring should be used when
             *     doing GPG verification of each collection-ref. This is useful to prevent a
             *     remote from serving malicious updates to refs which did not originate from
             *     it. This can be a subset or superset of the refs being pulled; any ref
             *     not being pulled will be ignored and any ref without a keyring remote
             *     will be verified with the keyring of the remote being pulled from.
             *     Since: 2019.2
             * @param results %NULL-terminated array of remotes to    pull from, including the refs to pull from each
             * @param options A GVariant `a{sv}` with an extensible set of flags
             * @param progress an #OstreeAsyncProgress to update with the operation’s    progress, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            pull_from_remotes_async(
                results: RepoFinderResult[],
                options?: GLib.Variant | null,
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finish an asynchronous pull operation started with
             * ostree_repo_pull_from_remotes_async().
             * @param result the asynchronous result
             * @returns %TRUE on success, %FALSE otherwise
             */
            pull_from_remotes_finish(result: Gio.AsyncResult): boolean;
            /**
             * This is similar to ostree_repo_pull(), but only fetches a single
             * subpath.
             * @param remote_name Name of remote
             * @param dir_to_pull Subdirectory path
             * @param refs_to_fetch Optional list of refs; if %NULL, fetch all configured refs
             * @param flags Options controlling fetch behavior
             * @param progress Progress
             * @param cancellable Cancellable
             */
            pull_one_dir(
                remote_name: string,
                dir_to_pull: string,
                refs_to_fetch: string[] | null,
                flags: RepoPullFlags | null,
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Like ostree_repo_pull(), but supports an extensible set of flags.
             * The following are currently defined:
             *
             *   * `refs` (`as`): Array of string refs
             *   * `collection-refs` (`a(sss)`): Array of (collection ID, ref name, checksum) tuples to pull;
             *     mutually exclusive with `refs` and `override-commit-ids`. Checksums may be the empty
             *     string to pull the latest commit for that ref
             *   * `flags` (`i`): An instance of #OstreeRepoPullFlags
             *   * `subdir` (`s`): Pull just this subdirectory
             *   * `subdirs` (`as`): Pull just these subdirectories
             *   * `override-remote-name` (`s`): If local, add this remote to refspec
             *   * `gpg-verify` (`b`): GPG verify commits
             *   * `gpg-verify-summary` (`b`): GPG verify summary
             *   * `disable-sign-verify` (`b`): Disable signapi verification of commits
             *   * `disable-sign-verify-summary` (`b`): Disable signapi verification of the summary
             *   * `depth` (`i`): How far in the history to traverse; default is 0, -1 means infinite
             *   * `per-object-fsync` (`b`): Perform disk writes more slowly, avoiding a single large I/O sync
             *   * `disable-static-deltas` (`b`): Do not use static deltas
             *   * `require-static-deltas` (`b`): Require static deltas
             *   * `override-commit-ids` (`as`): Array of specific commit IDs to fetch for refs
             *   * `timestamp-check` (`b`): Verify commit timestamps are newer than current (when pulling via
             * ref); Since: 2017.11
             *   * `timestamp-check-from-rev` (`s`): Verify that all fetched commit timestamps are newer than
             * timestamp of given rev; Since: 2020.4
             *   * `max-metadata-size` (`t`): Restrict metadata objects to a maximum number of bytes; 0 to
             * disable.  Since: 2018.9
             *   * `dry-run` (`b`): Only print information on what will be downloaded (requires static deltas)
             *   * `override-url` (`s`): Fetch objects from this URL if remote specifies no metalink in options
             *   * `inherit-transaction` (`b`): Don't initiate, finish or abort a transaction, useful to do
             * multiple pulls in one transaction.
             *   * `http-headers` (`a(ss)`): Additional headers to add to all HTTP requests
             *   * `update-frequency` (`u`): Frequency to call the async progress callback in milliseconds, if
             * any; only values higher than 0 are valid
             *   * `localcache-repos` (`as`): File paths for local repos to use as caches when doing remote
             * fetches
             *   * `append-user-agent` (`s`): Additional string to append to the user agent
             *   * `n-network-retries` (`u`): Number of times to retry each download on receiving
             *     a transient network error, such as a socket timeout; default is 5, 0
             *     means return errors without retrying. Since: 2018.6
             *   * `low-speed-limit-bytes` (`u`): The average transfer speed per second of a transfer
             *      during the time set via "low-speed-time-seconds" for libcurl to abort.
             *   * `low-speed-time-seconds` (`u`): The time in number seconds that the transfer
             *      speed should be below the "low-speed-limit-bytes" setting for libcurl to abort.
             *   * `retry-all-network-errors` (`b`): Retry when network issues happen, instead of
             *      failing automatically. Currently only affects libcurl. (Default set to true)
             *   * `max-outstanding-fetcher-requests` (`u`): The max amount of concurrent connections allowed.
             *   * `ref-keyring-map` (`a(sss)`): Array of (collection ID, ref name, keyring
             *     remote name) tuples specifying which remote's keyring should be used when
             *     doing GPG verification of each collection-ref. This is useful to prevent a
             *     remote from serving malicious updates to refs which did not originate from
             *     it. This can be a subset or superset of the refs being pulled; any ref
             *     not being pulled will be ignored and any ref without a keyring remote
             *     will be verified with the keyring of the remote being pulled from.
             *     Since: 2019.2
             *   * `summary-bytes` (`ay'): Contents of the `summary` file to use. If this is
             *     specified, `summary-sig-bytes` must also be specified. This is
             *     useful if doing multiple pull operations in a transaction, using
             *     ostree_repo_remote_fetch_summary_with_options() beforehand to download
             *     the `summary` and `summary.sig` once for the entire transaction. If not
             *     specified, the `summary` will be downloaded from the remote. Since: 2020.5
             *   * `summary-sig-bytes` (`ay`): Contents of the `summary.sig` file. If this
             *     is specified, `summary-bytes` must also be specified. Since: 2020.5
             *   * `disable-verify-bindings` (`b`): Disable verification of commit bindings.
             *     Since: 2020.9
             * @param remote_name_or_baseurl Name of remote or file:// url
             * @param options A GVariant a{sv} with an extensible set of flags.
             * @param progress Progress
             * @param cancellable Cancellable
             */
            pull_with_options(
                remote_name_or_baseurl: string,
                options: GLib.Variant,
                progress?: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Return the size in bytes of object with checksum `sha2`56, after any
             * compression has been applied.
             * @param objtype Object type
             * @param sha256 Checksum
             * @param cancellable Cancellable
             */
            query_object_storage_size(
                objtype: ObjectType | null,
                sha256: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number];
            /**
             * Load the content for `rev` into `out_root`.
             * @param ref Ref or ASCII checksum
             * @param cancellable Cancellable
             */
            read_commit(ref: string, cancellable?: Gio.Cancellable | null): [boolean, Gio.File | null, string];
            /**
             * OSTree commits can have arbitrary metadata associated; this
             * function retrieves them.  If none exists, `out_metadata` will be set
             * to %NULL.
             * @param checksum ASCII SHA256 commit checksum
             * @param cancellable Cancellable
             */
            read_commit_detached_metadata(
                checksum: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Variant | null];
            /**
             * Regenerate the OSTree repository metadata used by clients to describe
             * available branches and other metadata.
             *
             * The repository metadata currently consists of the `summary` file. See
             * ostree_repo_regenerate_summary() and %OSTREE_SUMMARY_GVARIANT_FORMAT for
             * additional details on its contents.
             *
             * Additionally, if the `core/collection-id` key is set in the configuration, a
             * %OSTREE_REPO_METADATA_REF commit will be created.
             *
             * The following `options` are currently defined:
             *
             *   * `gpg-key-ids` (`as`): Array of GPG key IDs to sign the metadata with.
             *   * `gpg-homedir` (`s`): GPG home directory.
             *   * `sign-keys` (`av`): Array of keys to sign the metadata with. The key
             *   type is specific to the sign engine used.
             *   * `sign-type` (`s`): Sign engine type to use. If not specified,
             *   %OSTREE_SIGN_NAME_ED25519 is used.
             *
             * Locking: shared
             * @param additional_metadata A GVariant `a{sv}`, or %NULL
             * @param options A GVariant `a{sv}` with an extensible set of flags
             * @param cancellable Cancellable
             */
            regenerate_metadata(
                additional_metadata?: GLib.Variant | null,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * An OSTree repository can contain a high level "summary" file that
             * describes the available branches and other metadata.
             *
             * If the timetable for making commits and updating the summary file is fairly
             * regular, setting the `ostree.summary.expires` key in `additional_metadata`
             * will aid clients in working out when to check for updates.
             *
             * It is regenerated automatically after any ref is
             * added, removed, or updated if `core/auto-update-summary` is set.
             *
             * If the `core/collection-id` key is set in the configuration, it will be
             * included as %OSTREE_SUMMARY_COLLECTION_ID in the summary file. Refs that
             * have associated collection IDs will be included in the generated summary
             * file, listed under the %OSTREE_SUMMARY_COLLECTION_MAP key. Collection IDs
             * and refs in %OSTREE_SUMMARY_COLLECTION_MAP are guaranteed to be in
             * lexicographic order.
             *
             * Locking: shared (Prior to 2021.7, this was exclusive)
             * @param additional_metadata A GVariant of type a{sv}, or %NULL
             * @param cancellable Cancellable
             */
            regenerate_summary(
                additional_metadata?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * By default, an #OstreeRepo will cache the remote configuration and its
             * own repo/config data.  This API can be used to reload it.
             * @param cancellable cancellable
             */
            reload_config(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Create a new remote named `name` pointing to `url`.  If `options` is
             * provided, then it will be mapped to #GKeyFile entries, where the
             * GVariant dictionary key is an option string, and the value is
             * mapped as follows:
             *   * s: g_key_file_set_string()
             *   * b: g_key_file_set_boolean()
             *   * as: g_key_file_set_string_list()
             * @param name Name of remote
             * @param url URL for remote (if URL begins with metalink=, it will be used as such)
             * @param options GVariant of type a{sv}
             * @param cancellable Cancellable
             */
            remote_add(
                name: string,
                url?: string | null,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * A combined function handling the equivalent of
             * ostree_repo_remote_add(), ostree_repo_remote_delete(), with more
             * options.
             * @param sysroot System root
             * @param changeop Operation to perform
             * @param name Name of remote
             * @param url URL for remote (if URL begins with metalink=, it will be used as such)
             * @param options GVariant of type a{sv}
             * @param cancellable Cancellable
             */
            remote_change(
                sysroot: Gio.File | null,
                changeop: RepoRemoteChange | null,
                name: string,
                url?: string | null,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Delete the remote named `name`.  It is an error if the provided
             * remote does not exist.
             * @param name Name of remote
             * @param cancellable Cancellable
             */
            remote_delete(name: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Tries to fetch the summary file and any GPG signatures on the summary file
             * over HTTP, and returns the binary data in `out_summary` and `out_signatures`
             * respectively.
             *
             * If no summary file exists on the remote server, `out_summary` is set to
             * `NULL`.  Likewise if the summary file is not signed, `out_signatures` is
             * set to `NULL`.  In either case the function still returns %TRUE.
             *
             * This method does not verify the signature of the downloaded summary file.
             * Use ostree_repo_verify_summary() for that.
             *
             * Parse the summary data into a #GVariant using g_variant_new_from_bytes()
             * with #OSTREE_SUMMARY_GVARIANT_FORMAT as the format string.
             * @param name name of a remote
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, %FALSE on failure
             */
            remote_fetch_summary(
                name: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Bytes | null, GLib.Bytes | null];
            /**
             * Like ostree_repo_remote_fetch_summary(), but supports an extensible set of flags.
             * The following are currently defined:
             *
             * - override-url (s): Fetch summary from this URL if remote specifies no metalink in options
             * - http-headers (a(ss)): Additional headers to add to all HTTP requests
             * - append-user-agent (s): Additional string to append to the user agent
             * - n-network-retries (u): Number of times to retry each download on receiving
             *   a transient network error, such as a socket timeout; default is 5, 0
             *   means return errors without retrying
             * @param name name of a remote
             * @param options A GVariant a{sv} with an extensible set of flags
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, %FALSE on failure
             */
            remote_fetch_summary_with_options(
                name: string,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Bytes | null, GLib.Bytes | null];
            /**
             * Enumerate the trusted GPG keys for the remote `name`. If `name` is
             * %NULL, the global GPG keys will be returned. The keys will be
             * returned in the `out_keys` #GPtrArray. Each element in the array is a
             * #GVariant of format %OSTREE_GPG_KEY_GVARIANT_FORMAT. The `key_ids`
             * array can be used to limit which keys are included. If `key_ids` is
             * %NULL, then all keys are included.
             * @param name name of the remote or %NULL
             * @param key_ids a %NULL-terminated array of GPG key IDs to include, or %NULL
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE if the GPG keys could be enumerated, %FALSE otherwise
             */
            remote_get_gpg_keys(
                name?: string | null,
                key_ids?: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Variant[] | null];
            /**
             * Return whether GPG verification is enabled for the remote named `name`
             * through `out_gpg_verify`.  It is an error if the provided remote does
             * not exist.
             * @param name Name of remote
             * @returns %TRUE on success, %FALSE on failure
             */
            remote_get_gpg_verify(name: string): [boolean, boolean];
            /**
             * Return whether GPG verification of the summary is enabled for the remote
             * named `name` through `out_gpg_verify_summary`.  It is an error if the provided
             * remote does not exist.
             * @param name Name of remote
             * @returns %TRUE on success, %FALSE on failure
             */
            remote_get_gpg_verify_summary(name: string): [boolean, boolean];
            /**
             * Return the URL of the remote named `name` through `out_url`.  It is an
             * error if the provided remote does not exist.
             * @param name Name of remote
             * @returns %TRUE on success, %FALSE on failure
             */
            remote_get_url(name: string): [boolean, string];
            /**
             * Imports one or more GPG keys from the open `source_stream,` or from the
             * user's personal keyring if `source_stream` is %NULL.  The `key_ids` array
             * can optionally restrict which keys are imported.  If `key_ids` is %NULL,
             * then all keys are imported.
             *
             * The imported keys will be used to conduct GPG verification when pulling
             * from the remote named `name`.
             * @param name name of a remote
             * @param source_stream a #GInputStream, or %NULL
             * @param key_ids a %NULL-terminated array of GPG key IDs, or %NULL
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, %FALSE on failure
             */
            remote_gpg_import(
                name: string,
                source_stream: Gio.InputStream | null,
                key_ids: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number];
            /**
             * List available remote names in an #OstreeRepo.  Remote names are sorted
             * alphabetically.  If no remotes are available the function returns %NULL.
             * @returns a %NULL-terminated          array of remote names
             */
            remote_list(): string[];
            /**
             * List refs advertised by `remote_name,` including refs which are part of
             * collections. If the repository at `remote_name` has a collection ID set, its
             * refs will be returned with that collection ID; otherwise, they will be returned
             * with a %NULL collection ID in each #OstreeCollectionRef key in `out_all_refs`.
             * Any refs for other collections stored in the repository will also be returned.
             * No filtering is performed.
             * @param remote_name Name of the remote.
             * @param cancellable Cancellable
             */
            remote_list_collection_refs(
                remote_name: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<CollectionRef, string>];
            remote_list_refs(
                remote_name: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<string, string>];
            /**
             * Look up the checksum for the given collection–ref, returning it in `out_rev`.
             * This will search through the mirrors and remote refs.
             *
             * If `allow_noent` is %TRUE and the given `ref` cannot be found, %TRUE will be
             * returned and `out_rev` will be set to %NULL. If `allow_noent` is %FALSE and
             * the given `ref` cannot be found, a %G_IO_ERROR_NOT_FOUND error will be
             * returned.
             *
             * If you want to check only local refs, not remote or mirrored ones, use the
             * flag %OSTREE_REPO_RESOLVE_REV_EXT_LOCAL_ONLY. This is analogous to using
             * ostree_repo_resolve_rev_ext() but for collection-refs.
             * @param ref a collection–ref to resolve
             * @param allow_noent %TRUE to not throw an error if @ref doesn’t exist
             * @param flags options controlling behaviour
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            resolve_collection_ref(
                ref: CollectionRef,
                allow_noent: boolean,
                flags: RepoResolveRevExtFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Find the GPG keyring for the given `collection_id,` using the local
             * configuration from the given #OstreeRepo. This will search the configured
             * remotes for ones whose `collection-id` key matches `collection_id,` and will
             * return the first matching remote.
             *
             * If multiple remotes match and have different keyrings, a debug message will
             * be emitted, and the first result will be returned. It is expected that the
             * keyrings should match.
             *
             * If no match can be found, a %G_IO_ERROR_NOT_FOUND error will be returned.
             * @param collection_id the collection ID to look up a keyring for
             * @param cancellable a #GCancellable, or %NULL
             * @returns #OstreeRemote containing the GPG keyring for    @collection_id
             */
            resolve_keyring_for_collection(collection_id: string, cancellable?: Gio.Cancellable | null): Remote;
            /**
             * Look up the given refspec, returning the checksum it references in
             * the parameter `out_rev`. Will fall back on remote directory if cannot
             * find the given refspec in local.
             * @param refspec A refspec
             * @param allow_noent Do not throw an error if refspec does not exist
             */
            resolve_rev(refspec: string, allow_noent: boolean): [boolean, string];
            /**
             * Look up the given refspec, returning the checksum it references in
             * the parameter `out_rev`. Differently from ostree_repo_resolve_rev(),
             * this will not fall back to searching through remote repos if a
             * local ref is specified but not found.
             *
             * The flag %OSTREE_REPO_RESOLVE_REV_EXT_LOCAL_ONLY is implied so
             * using it has no effect.
             * @param refspec A refspec
             * @param allow_noent Do not throw an error if refspec does not exist
             * @param flags Options controlling behavior
             */
            resolve_rev_ext(
                refspec: string,
                allow_noent: boolean,
                flags: RepoResolveRevExtFlags | null,
            ): [boolean, string];
            /**
             * This function is deprecated in favor of using ostree_repo_devino_cache_new(),
             * which allows a precise mapping to be built up between hardlink checkout files
             * and their checksums between `ostree_repo_checkout_at()` and
             * `ostree_repo_write_directory_to_mtree()`.
             *
             * When invoking ostree_repo_write_directory_to_mtree(), it has to compute the
             * checksum of all files. If your commit contains hardlinks from a checkout,
             * this functions builds a mapping of device numbers and inodes to their
             * checksum.
             *
             * There is an upfront cost to creating this mapping, as this will scan the
             * entire objects directory. If your commit is composed of mostly hardlinks to
             * existing ostree objects, then this will speed up considerably, so call it
             * before you call ostree_repo_write_directory_to_mtree() or similar.  However,
             * ostree_repo_devino_cache_new() is better as it avoids scanning all objects.
             *
             * Multithreading: This function is *not* MT safe.
             * @param cancellable Cancellable
             */
            scan_hardlinks(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Like ostree_repo_set_ref_immediate(), but creates an alias.
             * @param remote A remote for the ref
             * @param ref The ref to write
             * @param target The ref target to point it to, or %NULL to unset
             * @param cancellable GCancellable
             */
            set_alias_ref_immediate(
                remote: string | null,
                ref: string,
                target?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Set a custom location for the cache directory used for e.g.
             * per-remote summary caches. Setting this manually is useful when
             * doing operations on a system repo as a user because you don't have
             * write permissions in the repo, where the cache is normally stored.
             * @param dfd directory fd
             * @param path subpath in @dfd
             * @param cancellable a #GCancellable
             */
            set_cache_dir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set or clear the collection ID of this repository. See [collection IDs][collection-ids].
             * The update will be made in memory, but must be written out to the repository
             * configuration on disk using ostree_repo_write_config().
             * @param collection_id new collection ID, or %NULL to unset it
             * @returns %TRUE on success, %FALSE otherwise
             */
            set_collection_id(collection_id?: string | null): boolean;
            /**
             * This is like ostree_repo_transaction_set_collection_ref(), except it may be
             * invoked outside of a transaction.  This is presently safe for the
             * case where we're creating or overwriting an existing ref.
             * @param ref The collection–ref to write
             * @param checksum The checksum to point it to, or %NULL to unset
             * @param cancellable GCancellable
             * @returns %TRUE on success, %FALSE otherwise
             */
            set_collection_ref_immediate(
                ref: CollectionRef,
                checksum?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Disable requests to fsync() to stable storage during commits.  This
             * option should only be used by build system tools which are creating
             * disposable virtual machines, or have higher level mechanisms for
             * ensuring data consistency.
             * @param disable_fsync If %TRUE, do not fsync
             */
            set_disable_fsync(disable_fsync: boolean): void;
            /**
             * This is like ostree_repo_transaction_set_ref(), except it may be
             * invoked outside of a transaction.  This is presently safe for the
             * case where we're creating or overwriting an existing ref.
             *
             * Multithreading: This function is MT safe.
             * @param remote A remote for the ref
             * @param ref The ref to write
             * @param checksum The checksum to point it to, or %NULL to unset
             * @param cancellable GCancellable
             */
            set_ref_immediate(
                remote: string | null,
                ref: string,
                checksum?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Add a GPG signature to a commit.
             * @param commit_checksum SHA256 of given commit to sign
             * @param key_id Use this GPG key id
             * @param homedir GPG home directory, or %NULL
             * @param cancellable A #GCancellable
             */
            sign_commit(
                commit_checksum: string,
                key_id: string,
                homedir?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * This function is deprecated, sign the summary file instead.
             * Add a GPG signature to a static delta.
             * @param from_commit From commit
             * @param to_commit To commit
             * @param key_id key id
             * @param homedir homedir
             * @param cancellable cancellable
             */
            sign_delta(
                from_commit: string,
                to_commit: string,
                key_id: string,
                homedir: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Validate the commit data using the commit metadata which must
             * contain at least one valid signature.  If GPG and signapi are
             * both enabled, then both must find at least one valid signature.
             * @param remote_name Name of remote
             * @param commit_data Commit object data (GVariant)
             * @param commit_metadata Commit metadata (GVariant `a{sv}`), must contain at least one valid signature
             * @param flags Optionally disable GPG or signapi
             */
            signature_verify_commit_data(
                remote_name: string,
                commit_data: GLib.Bytes | Uint8Array,
                commit_metadata: GLib.Bytes | Uint8Array,
                flags: RepoVerifyFlags | null,
            ): [boolean, string];
            /**
             * Given a directory representing an already-downloaded static delta
             * on disk, apply it, generating a new commit.  The directory must be
             * named with the form "FROM-TO", where both are checksums, and it
             * must contain a file named "superblock", along with at least one part.
             * @param dir_or_file Path to a directory containing static delta data, or directly to the superblock
             * @param skip_validation If %TRUE, assume data integrity
             * @param cancellable Cancellable
             */
            static_delta_execute_offline(
                dir_or_file: Gio.File,
                skip_validation: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Given a directory representing an already-downloaded static delta
             * on disk, apply it, generating a new commit.
             * If sign is passed, the static delta signature is verified.
             * If sign-verify-deltas configuration option is set and static delta is signed,
             * signature verification will be mandatory before apply the static delta.
             * The directory must be named with the form "FROM-TO", where both are
             * checksums, and it must contain a file named "superblock", along with at least
             * one part.
             * @param dir_or_file Path to a directory containing static delta data, or directly to the superblock
             * @param sign Signature engine used to check superblock
             * @param skip_validation If %TRUE, assume data integrity
             * @param cancellable Cancellable
             */
            static_delta_execute_offline_with_signature(
                dir_or_file: Gio.File,
                sign: Sign,
                skip_validation: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Generate a lookaside "static delta" from `from` (%NULL means
             * from-empty) which can generate the objects in `to`.  This delta is
             * an optimization over fetching individual objects, and can be
             * conveniently stored and applied offline.
             *
             * The `params` argument should be an a{sv}.  The following attributes
             * are known:
             *   - min-fallback-size: u: Minimum uncompressed size in megabytes to use fallback, 0 to disable
             * fallbacks
             *   - max-chunk-size: u: Maximum size in megabytes of a delta part
             *   - max-bsdiff-size: u: Maximum size in megabytes to consider bsdiff compression
             *   for input files
             *   - compression: y: Compression type: 0=none, x=lzma, g=gzip
             *   - bsdiff-enabled: b: Enable bsdiff compression.  Default TRUE.
             *   - inline-parts: b: Put part data in header, to get a single file delta.  Default FALSE.
             *   - verbose: b: Print diagnostic messages.  Default FALSE.
             *   - endianness: b: Deltas use host byte order by default; this option allows choosing
             * (G_BIG_ENDIAN or G_LITTLE_ENDIAN)
             *   - filename: ^ay: Save delta superblock to this filename (bytestring), and parts in the same
             * directory.  Default saves to repository.
             *   - sign-name: ^ay: Signature type to use (bytestring).
             *   - sign-key-ids: ^as: NULL-terminated array of keys used to sign delta superblock.
             * @param opt High level optimization choice
             * @param from ASCII SHA256 checksum of origin, or %NULL
             * @param to ASCII SHA256 checksum of target
             * @param metadata Optional metadata
             * @param params Parameters, see below
             * @param cancellable Cancellable
             */
            static_delta_generate(
                opt: StaticDeltaGenerateOpt | null,
                from: string | null,
                to: string,
                metadata?: GLib.Variant | null,
                params?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * The delta index for a particular commit lists all the existing deltas that can be used
             * when downloading that commit. This operation regenerates these indexes, either for
             * a particular commit (if `opt_to_commit` is non-%NULL), or for all commits that
             * are reachable by an existing delta (if `opt_to_commit` is %NULL).
             *
             * This is normally called automatically when the summary is updated in
             * ostree_repo_regenerate_summary().
             *
             * Locking: shared
             * @param flags Flags affecting the indexing operation
             * @param opt_to_commit ASCII SHA256 checksum of target commit, or %NULL to index all targets
             * @param cancellable Cancellable
             */
            static_delta_reindex(
                flags: StaticDeltaIndexFlags | null,
                opt_to_commit: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Verify static delta file signature.
             * @param delta_id delta path
             * @param sign Signature engine used to check superblock
             * @returns TRUE if the signature of static delta file is valid using the signature engine provided, FALSE otherwise.
             */
            static_delta_verify_signature(delta_id: string, sign: Sign): [boolean, string];
            /**
             * If `checksum` is not %NULL, then record it as the target of local ref named
             * `ref`.
             *
             * Otherwise, if `checksum` is %NULL, then record that the ref should
             * be deleted.
             *
             * The change will not be written out immediately, but when the transaction
             * is completed with ostree_repo_commit_transaction(). If the transaction
             * is instead aborted with ostree_repo_abort_transaction(), no changes will
             * be made to the repository.
             *
             * Multithreading: Since v2017.15 this function is MT safe.
             * @param ref The collection–ref to write
             * @param checksum The checksum to point it to
             */
            transaction_set_collection_ref(ref: CollectionRef, checksum?: string | null): void;
            /**
             * If `checksum` is not %NULL, then record it as the target of ref named
             * `ref;` if `remote` is provided, the ref will appear to originate from that
             * remote.
             *
             * Otherwise, if `checksum` is %NULL, then record that the ref should
             * be deleted.
             *
             * The change will be written when the transaction is completed with
             * ostree_repo_commit_transaction(); that function takes care of writing all of
             * the objects (such as the commit referred to by `checksum)` before updating the
             * refs. If the transaction is instead aborted with
             * ostree_repo_abort_transaction(), no changes to the ref will be made to the
             * repository.
             *
             * Note however that currently writing *multiple* refs is not truly atomic; if
             * the process or system is terminated during
             * ostree_repo_commit_transaction(), it is possible that just some of the refs
             * will have been updated. Your application should take care to handle this
             * case.
             *
             * Multithreading: Since v2017.15 this function is MT safe.
             * @param remote A remote for the ref
             * @param ref The ref to write
             * @param checksum The checksum to point it to
             */
            transaction_set_ref(remote: string | null, ref: string, checksum?: string | null): void;
            /**
             * Like ostree_repo_transaction_set_ref(), but takes concatenated
             * `refspec` format as input instead of separate remote and name
             * arguments.
             *
             * Multithreading: Since v2017.15 this function is MT safe.
             * @param refspec The refspec to write
             * @param checksum The checksum to point it to
             */
            transaction_set_refspec(refspec: string, checksum?: string | null): void;
            /**
             * Create a new set `out_reachable` containing all objects reachable
             * from `commit_checksum,` traversing `maxdepth` parent commits.
             * @param commit_checksum ASCII SHA256 checksum
             * @param maxdepth Traverse this many parent commits, -1 for unlimited
             * @param cancellable Cancellable
             */
            traverse_commit(
                commit_checksum: string,
                maxdepth: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<GLib.Variant, GLib.Variant>];
            /**
             * Add all commit objects directly reachable via a ref to `reachable`.
             *
             * Locking: shared
             * @param depth Depth of traversal
             * @param reachable Set of reachable objects (will be modified)
             * @param cancellable Cancellable
             */
            traverse_reachable_refs(
                depth: number,
                reachable: { [key: string]: any } | GLib.HashTable<GLib.Variant, GLib.Variant>,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Check for a valid GPG signature on commit named by the ASCII
             * checksum `commit_checksum`.
             * @param commit_checksum ASCII SHA256 checksum
             * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
             * @param extra_keyring Path to additional keyring file (not a directory)
             * @param cancellable Cancellable
             * @returns %TRUE if there was a GPG signature from a trusted keyring, otherwise %FALSE
             */
            verify_commit(
                commit_checksum: string,
                keyringdir?: Gio.File | null,
                extra_keyring?: Gio.File | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Read GPG signature(s) on the commit named by the ASCII checksum
             * `commit_checksum` and return detailed results.
             * @param commit_checksum ASCII SHA256 checksum
             * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
             * @param extra_keyring Path to additional keyring file (not a directory)
             * @param cancellable Cancellable
             * @returns an #OstreeGpgVerifyResult, or %NULL on error
             */
            verify_commit_ext(
                commit_checksum: string,
                keyringdir?: Gio.File | null,
                extra_keyring?: Gio.File | null,
                cancellable?: Gio.Cancellable | null,
            ): GpgVerifyResult;
            /**
             * Read GPG signature(s) on the commit named by the ASCII checksum
             * `commit_checksum` and return detailed results, based on the keyring
             * configured for `remote`.
             * @param commit_checksum ASCII SHA256 checksum
             * @param remote_name OSTree remote to use for configuration
             * @param cancellable Cancellable
             * @returns an #OstreeGpgVerifyResult, or %NULL on error
             */
            verify_commit_for_remote(
                commit_checksum: string,
                remote_name: string,
                cancellable?: Gio.Cancellable | null,
            ): GpgVerifyResult;
            /**
             * Verify `signatures` for `summary` data using GPG keys in the keyring for
             * `remote_name,` and return an #OstreeGpgVerifyResult.
             * @param remote_name Name of remote
             * @param summary Summary data as a #GBytes
             * @param signatures Summary signatures as a #GBytes
             * @param cancellable Cancellable
             * @returns an #OstreeGpgVerifyResult, or %NULL on error
             */
            verify_summary(
                remote_name: string,
                summary: GLib.Bytes | Uint8Array,
                signatures: GLib.Bytes | Uint8Array,
                cancellable?: Gio.Cancellable | null,
            ): GpgVerifyResult;
            /**
             * Import an archive file `archive` into the repository, and write its
             * file structure to `mtree`.
             * @param archive A path to an archive file
             * @param mtree The #OstreeMutableTree to write to
             * @param modifier Optional commit modifier
             * @param autocreate_parents Autocreate parent directories
             * @param cancellable Cancellable
             */
            write_archive_to_mtree(
                archive: Gio.File,
                mtree: MutableTree,
                modifier: RepoCommitModifier | null,
                autocreate_parents: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Read an archive from `fd` and import it into the repository, writing
             * its file structure to `mtree`.
             * @param fd A file descriptor to read the archive from
             * @param mtree The #OstreeMutableTree to write to
             * @param modifier Optional commit modifier
             * @param autocreate_parents Autocreate parent directories
             * @param cancellable Cancellable
             */
            write_archive_to_mtree_from_fd(
                fd: number,
                mtree: MutableTree,
                modifier: RepoCommitModifier | null,
                autocreate_parents: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Write a commit metadata object, referencing `root_contents_checksum`
             * and `root_metadata_checksum`.
             * This uses the current time as the commit timestamp, but it can be
             * overridden with an explicit timestamp via the
             * [standard](https://reproducible-builds.org/specs/source-date-epoch/)
             * `SOURCE_DATE_EPOCH` environment flag.
             * @param parent ASCII SHA256 checksum for parent, or %NULL for none
             * @param subject Subject
             * @param body Body
             * @param metadata GVariant of type a{sv}, or %NULL for none
             * @param root The tree to point the commit to
             * @param cancellable Cancellable
             */
            write_commit(
                parent: string | null,
                subject: string | null,
                body: string | null,
                metadata: GLib.Variant | null,
                root: RepoFile,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Replace any existing metadata associated with commit referred to by
             * `checksum` with `metadata`.  If `metadata` is %NULL, then existing
             * data will be deleted.
             * @param checksum ASCII SHA256 commit checksum
             * @param metadata Metadata to associate with commit in with format "a{sv}", or %NULL to delete
             * @param cancellable Cancellable
             */
            write_commit_detached_metadata(
                checksum: string,
                metadata?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Write a commit metadata object, referencing `root_contents_checksum`
             * and `root_metadata_checksum`.
             * @param parent ASCII SHA256 checksum for parent, or %NULL for none
             * @param subject Subject
             * @param body Body
             * @param metadata GVariant of type a{sv}, or %NULL for none
             * @param root The tree to point the commit to
             * @param time The time to use to stamp the commit
             * @param cancellable Cancellable
             */
            write_commit_with_time(
                parent: string | null,
                subject: string | null,
                body: string | null,
                metadata: GLib.Variant | null,
                root: RepoFile,
                time: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Save `new_config` in place of this repository's config file.
             * @param new_config Overwrite the config file with this data
             */
            write_config(new_config: GLib.KeyFile): boolean;
            /**
             * Store the content object streamed as `object_input,`
             * with total length `length`.  The actual checksum will
             * be returned as `out_csum`.
             * @param expected_checksum If provided, validate content against this checksum
             * @param object_input Content object stream
             * @param length Length of @object_input
             * @param cancellable Cancellable
             */
            write_content(
                expected_checksum: string | null,
                object_input: Gio.InputStream,
                length: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Uint8Array | null];
            /**
             * Asynchronously store the content object `object`.  If provided, the
             * checksum `expected_checksum` will be verified.
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Input
             * @param length Length of @object
             * @param cancellable Cancellable
             */
            write_content_async(
                expected_checksum: string | null,
                object: Gio.InputStream,
                length: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<number>;
            /**
             * Asynchronously store the content object `object`.  If provided, the
             * checksum `expected_checksum` will be verified.
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Input
             * @param length Length of @object
             * @param cancellable Cancellable
             * @param callback Invoked when content is writed
             */
            write_content_async(
                expected_checksum: string | null,
                object: Gio.InputStream,
                length: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously store the content object `object`.  If provided, the
             * checksum `expected_checksum` will be verified.
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Input
             * @param length Length of @object
             * @param cancellable Cancellable
             * @param callback Invoked when content is writed
             */
            write_content_async(
                expected_checksum: string | null,
                object: Gio.InputStream,
                length: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Completes an invocation of ostree_repo_write_content_async().
             * @param result a #GAsyncResult
             */
            write_content_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Store the content object streamed as `object_input,` with total
             * length `length`.  The given `checksum` will be treated as trusted.
             *
             * This function should be used when importing file objects from local
             * disk, for example.
             * @param checksum Store content using this ASCII SHA256 checksum
             * @param object_input Content stream
             * @param length Length of @object_input
             * @param cancellable Cancellable
             */
            write_content_trusted(
                checksum: string,
                object_input: Gio.InputStream,
                length: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Store as objects all contents of the directory referred to by `dfd`
             * and `path` all children into the repository `self,` overlaying the
             * resulting filesystem hierarchy into `mtree`.
             * @param dfd Directory file descriptor
             * @param path Path
             * @param mtree Overlay directory contents into this tree
             * @param modifier Optional modifier
             * @param cancellable Cancellable
             */
            write_dfd_to_mtree(
                dfd: number,
                path: string,
                mtree: MutableTree,
                modifier?: RepoCommitModifier | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Store objects for `dir` and all children into the repository `self,`
             * overlaying the resulting filesystem hierarchy into `mtree`.
             * @param dir Path to a directory
             * @param mtree Overlay directory contents into this tree
             * @param modifier Optional modifier
             * @param cancellable Cancellable
             */
            write_directory_to_mtree(
                dir: Gio.File,
                mtree: MutableTree,
                modifier?: RepoCommitModifier | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Store the metadata object `object`.  Return the checksum
             * as `out_csum`.
             *
             * If `expected_checksum` is not %NULL, verify it against the
             * computed checksum.
             * @param objtype Object type
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Metadata
             * @param cancellable Cancellable
             */
            write_metadata(
                objtype: ObjectType | null,
                expected_checksum: string | null,
                object: GLib.Variant,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Uint8Array | null];
            /**
             * Asynchronously store the metadata object `variant`.  If provided,
             * the checksum `expected_checksum` will be verified.
             * @param objtype Object type
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Metadata
             * @param cancellable Cancellable
             */
            write_metadata_async(
                objtype: ObjectType | null,
                expected_checksum: string | null,
                object: GLib.Variant,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Uint8Array>;
            /**
             * Asynchronously store the metadata object `variant`.  If provided,
             * the checksum `expected_checksum` will be verified.
             * @param objtype Object type
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Metadata
             * @param cancellable Cancellable
             * @param callback Invoked when metadata is writed
             */
            write_metadata_async(
                objtype: ObjectType | null,
                expected_checksum: string | null,
                object: GLib.Variant,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously store the metadata object `variant`.  If provided,
             * the checksum `expected_checksum` will be verified.
             * @param objtype Object type
             * @param expected_checksum If provided, validate content against this checksum
             * @param object Metadata
             * @param cancellable Cancellable
             * @param callback Invoked when metadata is writed
             */
            write_metadata_async(
                objtype: ObjectType | null,
                expected_checksum: string | null,
                object: GLib.Variant,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Uint8Array> | void;
            /**
             * Complete a call to ostree_repo_write_metadata_async().
             * @param result Result
             */
            write_metadata_finish(result: Gio.AsyncResult): [boolean, Uint8Array];
            /**
             * Store the metadata object `variant;` the provided `checksum` is
             * trusted.
             * @param objtype Object type
             * @param checksum Store object with this ASCII SHA256 checksum
             * @param object_input Metadata object stream
             * @param length Length, may be 0 for unknown
             * @param cancellable Cancellable
             */
            write_metadata_stream_trusted(
                objtype: ObjectType | null,
                checksum: string,
                object_input: Gio.InputStream,
                length: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Store the metadata object `variant;` the provided `checksum` is
             * trusted.
             * @param objtype Object type
             * @param checksum Store object with this ASCII SHA256 checksum
             * @param variant Metadata object
             * @param cancellable Cancellable
             */
            write_metadata_trusted(
                objtype: ObjectType | null,
                checksum: string,
                variant: GLib.Variant,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Write all metadata objects for `mtree` to repo; the resulting
             * `out_file` points to the %OSTREE_OBJECT_TYPE_DIR_TREE object that
             * the `mtree` represented.
             * @param mtree Mutable tree
             * @param cancellable Cancellable
             */
            write_mtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): [boolean, Gio.File];
            /**
             * Create an `OstreeContentWriter` that allows streaming output into
             * the repository.
             * @param expected_checksum Expected checksum (SHA-256 hex string)
             * @param uid user id
             * @param gid group id
             * @param mode Unix file mode
             * @param content_len Expected content length
             * @param xattrs Extended attributes (GVariant type `(ayay)`)
             * @returns A new writer, or %NULL on error
             */
            write_regfile(
                expected_checksum: string | null,
                uid: number,
                gid: number,
                mode: number,
                content_len: number,
                xattrs?: GLib.Variant | null,
            ): ContentWriter;
            /**
             * Synchronously create a file object from the provided content.  This API
             * is intended for small files where it is reasonable to buffer the entire
             * content in memory.
             *
             * Unlike `ostree_repo_write_content()`, if `expected_checksum` is provided,
             * this function will not check for the presence of the object beforehand.
             * @param expected_checksum The expected checksum
             * @param uid User id
             * @param gid Group id
             * @param mode File mode
             * @param xattrs Extended attributes, GVariant of type (ayay)
             * @param buf File contents
             * @param cancellable Cancellable
             * @returns Checksum (as a hex string) of the committed file
             */
            write_regfile_inline(
                expected_checksum: string | null,
                uid: number,
                gid: number,
                mode: number,
                xattrs: GLib.Variant | null,
                buf: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): string;
            /**
             * Synchronously create a symlink object.
             *
             * Unlike `ostree_repo_write_content()`, if `expected_checksum` is provided,
             * this function will not check for the presence of the object beforehand.
             * @param expected_checksum The expected checksum
             * @param uid User id
             * @param gid Group id
             * @param xattrs Extended attributes, GVariant of type (ayay)
             * @param symlink_target Target of the symbolic link
             * @param cancellable Cancellable
             * @returns Checksum (as a hex string) of the committed file
             */
            write_symlink(
                expected_checksum: string | null,
                uid: number,
                gid: number,
                xattrs: GLib.Variant | null,
                symlink_target: string,
                cancellable?: Gio.Cancellable | null,
            ): string;
        }

        module RepoFile {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.File.ConstructorProps {}
        }

        class RepoFile extends GObject.Object implements Gio.File {
            static $gtype: GObject.GType<RepoFile>;

            // Constructors

            constructor(properties?: Partial<RepoFile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Ensure that the backing metadata is loaded.
             * @returns %FALSE if the operation failed, %TRUE otherwise
             */
            ensure_resolved(): boolean;
            get_checksum(): string;
            get_repo(): Repo;
            get_root(): RepoFile;
            get_xattrs(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
            tree_find_child(name: string): [number, boolean, GLib.Variant];
            /**
             * This API will return %NULL if the file is not "resolved" i.e. in a loaded
             * state.  It will also return %NULL if this path is not a directory tree.
             * @returns The GVariant representing the children of this directory.
             */
            tree_get_contents(): GLib.Variant | null;
            tree_get_contents_checksum(): string | null;
            /**
             * This API will return %NULL if the file is not "resolved" i.e. in a loaded
             * state.  It will also return %NULL if this path is not a directory tree.
             * @returns The GVariant representing the metadata for this directory.
             */
            tree_get_metadata(): GLib.Variant | null;
            tree_get_metadata_checksum(): string | null;
            tree_query_child(
                n: number,
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Gio.FileInfo | null];
            /**
             * Replace the metadata checksum and metadata object.
             * @param checksum
             * @param metadata
             */
            tree_set_metadata(checksum: string, metadata: GLib.Variant): void;

            // Inherited methods
            /**
             * Gets an output stream for appending data to the file.
             * If the file doesn't already exist it is created.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level that
             * is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * Some file systems don't allow all file names, and may return an
             * %G_IO_ERROR_INVALID_FILENAME error. If the file is a directory the
             * %G_IO_ERROR_IS_DIRECTORY error will be returned. Other errors are
             * possible too, and depend on what kind of filesystem the file is on.
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileOutputStream, or %NULL on error.   Free the returned object with g_object_unref().
             */
            append_to(flags: Gio.FileCreateFlags | null, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;
            /**
             * Asynchronously opens `file` for appending.
             *
             * For more details, see g_file_append_to() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_append_to_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            append_to_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileOutputStream>;
            /**
             * Asynchronously opens `file` for appending.
             *
             * For more details, see g_file_append_to() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_append_to_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            append_to_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously opens `file` for appending.
             *
             * For more details, see g_file_append_to() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_append_to_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            append_to_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileOutputStream> | void;
            /**
             * Finishes an asynchronous file append operation started with
             * g_file_append_to_async().
             * @param res #GAsyncResult
             * @returns a valid #GFileOutputStream   or %NULL on error.   Free the returned object with g_object_unref().
             */
            append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
            /**
             * Prepares the file attribute query string for copying to `file`.
             *
             * This function prepares an attribute query string to be
             * passed to g_file_query_info() to get a list of attributes
             * normally copied with the file (see g_file_copy_attributes()
             * for the detailed description). This function is used by the
             * implementation of g_file_copy_attributes() and is useful
             * when one needs to query and set the attributes in two
             * stages (e.g., for recursive move of a directory).
             * @param flags a set of #GFileCopyFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns an attribute query string for g_file_query_info(),   or %NULL if an error occurs.
             */
            build_attribute_list_for_copy(
                flags: Gio.FileCopyFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): string;
            /**
             * Copies the file `source` to the location specified by `destination`.
             * Can not handle recursive copies of directories.
             *
             * If the flag %G_FILE_COPY_OVERWRITE is specified an already
             * existing `destination` file is overwritten.
             *
             * If the flag %G_FILE_COPY_NOFOLLOW_SYMLINKS is specified then symlinks
             * will be copied as symlinks, otherwise the target of the
             * `source` symlink will be copied.
             *
             * If the flag %G_FILE_COPY_ALL_METADATA is specified then all the metadata
             * that is possible to copy is copied, not just the default subset (which,
             * for instance, does not include the owner, see #GFileInfo).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `progress_callback` is not %NULL, then the operation can be monitored
             * by setting this to a #GFileProgressCallback function.
             * `progress_callback_data` will be passed to this function. It is guaranteed
             * that this callback will be called after all data has been transferred with
             * the total number of bytes copied during the operation.
             *
             * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND error
             * is returned, independent on the status of the `destination`.
             *
             * If %G_FILE_COPY_OVERWRITE is not specified and the target exists, then
             * the error %G_IO_ERROR_EXISTS is returned.
             *
             * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error is returned. If trying to overwrite a directory with a directory the
             * %G_IO_ERROR_WOULD_MERGE error is returned.
             *
             * If the source is a directory and the target does not exist, or
             * %G_FILE_COPY_OVERWRITE is specified and the target is a file, then the
             * %G_IO_ERROR_WOULD_RECURSE error is returned.
             *
             * If you are interested in copying the #GFile object itself (not the on-disk
             * file), see g_file_dup().
             * @param destination destination #GFile
             * @param flags set of #GFileCopyFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback function to callback with   progress information, or %NULL if progress information is not needed
             * @returns %TRUE on success, %FALSE otherwise.
             */
            copy(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
            ): boolean;
            /**
             * Copies the file `source` to the location specified by `destination`
             * asynchronously. For details of the behaviour, see g_file_copy().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_copy(). The callback will run in the default main context
             * of the thread calling g_file_copy_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_copy_finish() to get the result of the operation.
             * @param destination destination #GFile
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback function to callback with progress information, or %NULL if   progress information is not needed
             */
            copy_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
            ): Promise<boolean>;
            /**
             * Copies the file `source` to the location specified by `destination`
             * asynchronously. For details of the behaviour, see g_file_copy().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_copy(). The callback will run in the default main context
             * of the thread calling g_file_copy_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_copy_finish() to get the result of the operation.
             * @param destination destination #GFile
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback function to callback with progress information, or %NULL if   progress information is not needed
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            copy_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                progress_callback: Gio.FileProgressCallback | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Copies the file `source` to the location specified by `destination`
             * asynchronously. For details of the behaviour, see g_file_copy().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_copy(). The callback will run in the default main context
             * of the thread calling g_file_copy_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_copy_finish() to get the result of the operation.
             * @param destination destination #GFile
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback function to callback with progress information, or %NULL if   progress information is not needed
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            copy_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            // Conflicted with Gio.File.copy_async
            copy_async(...args: never[]): any;
            /**
             * Copies the file attributes from `source` to `destination`.
             *
             * Normally only a subset of the file attributes are copied,
             * those that are copies in a normal file copy operation
             * (which for instance does not include e.g. owner). However
             * if %G_FILE_COPY_ALL_METADATA is specified in `flags,` then
             * all the metadata that is possible to copy is copied. This
             * is useful when implementing move by copy + delete source.
             * @param destination a #GFile to copy attributes to
             * @param flags a set of #GFileCopyFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the attributes were copied successfully,   %FALSE otherwise.
             */
            copy_attributes(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Finishes copying the file started with g_file_copy_async().
             * @param res a #GAsyncResult
             * @returns a %TRUE on success, %FALSE on error.
             */
            copy_finish(res: Gio.AsyncResult): boolean;
            /**
             * Creates a new file and returns an output stream for writing to it.
             * The file must not already exist.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level
             * that is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If a file or directory with this name already exists the
             * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
             * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
             * error, and if the name is to long %G_IO_ERROR_FILENAME_TOO_LONG will
             * be returned. Other errors are possible too, and depend on what kind
             * of filesystem the file is on.
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileOutputStream for the newly created   file, or %NULL on error.   Free the returned object with g_object_unref().
             */
            create(flags: Gio.FileCreateFlags | null, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;
            /**
             * Asynchronously creates a new file and returns an output stream
             * for writing to it. The file must not already exist.
             *
             * For more details, see g_file_create() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            create_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileOutputStream>;
            /**
             * Asynchronously creates a new file and returns an output stream
             * for writing to it. The file must not already exist.
             *
             * For more details, see g_file_create() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            create_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a new file and returns an output stream
             * for writing to it. The file must not already exist.
             *
             * For more details, see g_file_create() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            create_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileOutputStream> | void;
            /**
             * Finishes an asynchronous file create operation started with
             * g_file_create_async().
             * @param res a #GAsyncResult
             * @returns a #GFileOutputStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            create_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
            /**
             * Creates a new file and returns a stream for reading and
             * writing to it. The file must not already exist.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level
             * that is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If a file or directory with this name already exists, the
             * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
             * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
             * error, and if the name is too long, %G_IO_ERROR_FILENAME_TOO_LONG
             * will be returned. Other errors are possible too, and depend on what
             * kind of filesystem the file is on.
             *
             * Note that in many non-local file cases read and write streams are
             * not supported, so make sure you really need to do read and write
             * streaming, rather than just opening for reading or writing.
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileIOStream for the newly created   file, or %NULL on error.   Free the returned object with g_object_unref().
             */
            create_readwrite(flags: Gio.FileCreateFlags | null, cancellable?: Gio.Cancellable | null): Gio.FileIOStream;
            /**
             * Asynchronously creates a new file and returns a stream
             * for reading and writing to it. The file must not already exist.
             *
             * For more details, see g_file_create_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_readwrite_finish() to get
             * the result of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            create_readwrite_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileIOStream>;
            /**
             * Asynchronously creates a new file and returns a stream
             * for reading and writing to it. The file must not already exist.
             *
             * For more details, see g_file_create_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_readwrite_finish() to get
             * the result of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            create_readwrite_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a new file and returns a stream
             * for reading and writing to it. The file must not already exist.
             *
             * For more details, see g_file_create_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_readwrite_finish() to get
             * the result of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            create_readwrite_async(
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileIOStream> | void;
            /**
             * Finishes an asynchronous file create operation started with
             * g_file_create_readwrite_async().
             * @param res a #GAsyncResult
             * @returns a #GFileIOStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
            /**
             * Deletes a file. If the `file` is a directory, it will only be
             * deleted if it is empty. This has the same semantics as g_unlink().
             *
             * If `file` doesn’t exist, %G_IO_ERROR_NOT_FOUND will be returned. This allows
             * for deletion to be implemented avoiding
             * [time-of-check to time-of-use races](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use):
             *
             * ```
             * g_autoptr(GError) local_error = NULL;
             * if (!g_file_delete (my_file, my_cancellable, &local_error) &&
             *     !g_error_matches (local_error, G_IO_ERROR, G_IO_ERROR_NOT_FOUND))
             *   {
             *     // deletion failed for some reason other than the file not existing:
             *     // so report the error
             *     g_warning ("Failed to delete %s: %s",
             *                g_file_peek_path (my_file), local_error->message);
             *   }
             * ```
             *
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the file was deleted. %FALSE otherwise.
             */
            ['delete'](cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously delete a file. If the `file` is a directory, it will
             * only be deleted if it is empty.  This has the same semantics as
             * g_unlink().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            delete_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously delete a file. If the `file` is a directory, it will
             * only be deleted if it is empty.  This has the same semantics as
             * g_unlink().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            delete_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously delete a file. If the `file` is a directory, it will
             * only be deleted if it is empty.  This has the same semantics as
             * g_unlink().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            delete_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes deleting a file started with g_file_delete_async().
             * @param result a #GAsyncResult
             * @returns %TRUE if the file was deleted. %FALSE otherwise.
             */
            delete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Duplicates a #GFile handle. This operation does not duplicate
             * the actual file or directory represented by the #GFile; see
             * g_file_copy() if attempting to copy a file.
             *
             * g_file_dup() is useful when a second handle is needed to the same underlying
             * file, for use in a separate thread (#GFile is not thread-safe). For use
             * within the same thread, use g_object_ref() to increment the existing object’s
             * reference count.
             *
             * This call does no blocking I/O.
             * @returns a new #GFile that is a duplicate   of the given #GFile.
             */
            dup(): Gio.File;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            eject_mountable(
                flags: Gio.MountUnmountFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            eject_mountable(
                flags: Gio.MountUnmountFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            eject_mountable(
                flags: Gio.MountUnmountFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an asynchronous eject operation started by
             * g_file_eject_mountable().
             * @param result a #GAsyncResult
             * @returns %TRUE if the @file was ejected successfully.   %FALSE otherwise.
             */
            eject_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_with_operation_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            eject_mountable_with_operation(
                flags: Gio.MountUnmountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_with_operation_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            eject_mountable_with_operation(
                flags: Gio.MountUnmountFlags | null,
                mount_operation: Gio.MountOperation | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_with_operation_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            eject_mountable_with_operation(
                flags: Gio.MountUnmountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an asynchronous eject operation started by
             * g_file_eject_mountable_with_operation().
             * @param result a #GAsyncResult
             * @returns %TRUE if the @file was ejected successfully.   %FALSE otherwise.
             */
            eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets the requested information about the files in a directory.
             * The result is a #GFileEnumerator object that will give out
             * #GFileInfo objects for all the files in the directory.
             *
             * The `attributes` value is a string that specifies the file
             * attributes that should be gathered. It is not an error if
             * it's not possible to read a particular requested attribute
             * from a file - it just won't be set. `attributes` should
             * be a comma-separated list of attributes or attribute wildcards.
             * The wildcard "*" means all attributes, and a wildcard like
             * "standard::*" means all attributes in the standard namespace.
             * An example attribute query be "standard::*,owner::user".
             * The standard attributes are available as defines, like
             * %G_FILE_ATTRIBUTE_STANDARD_NAME. %G_FILE_ATTRIBUTE_STANDARD_NAME should
             * always be specified if you plan to call g_file_enumerator_get_child() or
             * g_file_enumerator_iterate() on the returned enumerator.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
             * be returned. If the file is not a directory, the %G_IO_ERROR_NOT_DIRECTORY
             * error will be returned. Other errors are possible too.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns A #GFileEnumerator if successful,   %NULL on error. Free the returned object with g_object_unref().
             */
            enumerate_children(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileEnumerator;
            /**
             * Asynchronously gets the requested information about the files
             * in a directory. The result is a #GFileEnumerator object that will
             * give out #GFileInfo objects for all the files in the directory.
             *
             * For more details, see g_file_enumerate_children() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_enumerate_children_finish() to get the result of
             * the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            enumerate_children_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileEnumerator>;
            /**
             * Asynchronously gets the requested information about the files
             * in a directory. The result is a #GFileEnumerator object that will
             * give out #GFileInfo objects for all the files in the directory.
             *
             * For more details, see g_file_enumerate_children() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_enumerate_children_finish() to get the result of
             * the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            enumerate_children_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the requested information about the files
             * in a directory. The result is a #GFileEnumerator object that will
             * give out #GFileInfo objects for all the files in the directory.
             *
             * For more details, see g_file_enumerate_children() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_enumerate_children_finish() to get the result of
             * the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            enumerate_children_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileEnumerator> | void;
            /**
             * Finishes an async enumerate children operation.
             * See g_file_enumerate_children_async().
             * @param res a #GAsyncResult
             * @returns a #GFileEnumerator or %NULL   if an error occurred.   Free the returned object with g_object_unref().
             */
            enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator;
            /**
             * Checks if the two given #GFiles refer to the same file.
             *
             * Note that two #GFiles that differ can still refer to the same
             * file on the filesystem due to various forms of filename
             * aliasing.
             *
             * This call does no blocking I/O.
             * @param file2 the second #GFile
             * @returns %TRUE if @file1 and @file2 are equal.
             */
            equal(file2: Gio.File): boolean;
            /**
             * Gets a #GMount for the #GFile.
             *
             * #GMount is returned only for user interesting locations, see
             * #GVolumeMonitor. If the #GFileIface for `file` does not have a #mount,
             * `error` will be set to %G_IO_ERROR_NOT_FOUND and %NULL #will be returned.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GMount where the @file is located   or %NULL on error.   Free the returned object with g_object_unref().
             */
            find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount;
            /**
             * Asynchronously gets the mount for the file.
             *
             * For more details, see g_file_find_enclosing_mount() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_find_enclosing_mount_finish() to
             * get the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            find_enclosing_mount_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.Mount>;
            /**
             * Asynchronously gets the mount for the file.
             *
             * For more details, see g_file_find_enclosing_mount() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_find_enclosing_mount_finish() to
             * get the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            find_enclosing_mount_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the mount for the file.
             *
             * For more details, see g_file_find_enclosing_mount() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_find_enclosing_mount_finish() to
             * get the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            find_enclosing_mount_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.Mount> | void;
            /**
             * Finishes an asynchronous find mount request.
             * See g_file_find_enclosing_mount_async().
             * @param res a #GAsyncResult
             * @returns #GMount for given @file or %NULL on error.   Free the returned object with g_object_unref().
             */
            find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount;
            /**
             * Gets the base name (the last component of the path) for a given #GFile.
             *
             * If called for the top level of a system (such as the filesystem root
             * or a uri like sftp://host/) it will return a single directory separator
             * (and on Windows, possibly a drive letter).
             *
             * The base name is a byte string (not UTF-8). It has no defined encoding
             * or rules other than it may not contain zero bytes.  If you want to use
             * filenames in a user interface you should use the display name that you
             * can get by requesting the %G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME
             * attribute with g_file_query_info().
             *
             * This call does no blocking I/O.
             * @returns string containing the #GFile's   base name, or %NULL if given #GFile is invalid. The returned string   should be freed with g_free() when no longer needed.
             */
            get_basename(): string | null;
            /**
             * Gets a child of `file` with basename equal to `name`.
             *
             * Note that the file with that specific name might not exist, but
             * you can still have a #GFile that points to it. You can use this
             * for instance to create that file.
             *
             * This call does no blocking I/O.
             * @param name string containing the child's basename
             * @returns a #GFile to a child specified by @name.   Free the returned object with g_object_unref().
             */
            get_child(name: string): Gio.File;
            /**
             * Gets the child of `file` for a given `display_name` (i.e. a UTF-8
             * version of the name). If this function fails, it returns %NULL
             * and `error` will be set. This is very useful when constructing a
             * #GFile for a new file and the user entered the filename in the
             * user interface, for instance when you select a directory and
             * type a filename in the file selector.
             *
             * This call does no blocking I/O.
             * @param display_name string to a possible child
             * @returns a #GFile to the specified child, or   %NULL if the display name couldn't be converted.   Free the returned object with g_object_unref().
             */
            get_child_for_display_name(display_name: string): Gio.File;
            /**
             * Gets the parent directory for the `file`.
             * If the `file` represents the root directory of the
             * file system, then %NULL will be returned.
             *
             * This call does no blocking I/O.
             * @returns a #GFile structure to the   parent of the given #GFile or %NULL if there is no parent. Free   the returned object with g_object_unref().
             */
            get_parent(): Gio.File | null;
            /**
             * Gets the parse name of the `file`.
             * A parse name is a UTF-8 string that describes the
             * file such that one can get the #GFile back using
             * g_file_parse_name().
             *
             * This is generally used to show the #GFile as a nice
             * full-pathname kind of string in a user interface,
             * like in a location entry.
             *
             * For local files with names that can safely be converted
             * to UTF-8 the pathname is used, otherwise the IRI is used
             * (a form of URI that allows UTF-8 characters unescaped).
             *
             * This call does no blocking I/O.
             * @returns a string containing the #GFile's parse name.   The returned string should be freed with g_free()   when no longer needed.
             */
            get_parse_name(): string;
            /**
             * Gets the local pathname for #GFile, if one exists. If non-%NULL, this is
             * guaranteed to be an absolute, canonical path. It might contain symlinks.
             *
             * This call does no blocking I/O.
             * @returns string containing the #GFile's path,   or %NULL if no such path exists. The returned string should be freed   with g_free() when no longer needed.
             */
            get_path(): string | null;
            /**
             * Gets the path for `descendant` relative to `parent`.
             *
             * This call does no blocking I/O.
             * @param descendant input #GFile
             * @returns string with the relative path from   @descendant to @parent, or %NULL if @descendant doesn't have @parent as   prefix. The returned string should be freed with g_free() when   no longer needed.
             */
            get_relative_path(descendant: Gio.File): string | null;
            /**
             * Gets the URI for the `file`.
             *
             * This call does no blocking I/O.
             * @returns a string containing the #GFile's URI. If the #GFile was constructed   with an invalid URI, an invalid URI is returned.   The returned string should be freed with g_free()   when no longer needed.
             */
            get_uri(): string;
            /**
             * Gets the URI scheme for a #GFile.
             * RFC 3986 decodes the scheme as:
             *
             * ```
             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
             * ```
             *
             * Common schemes include "file", "http", "ftp", etc.
             *
             * The scheme can be different from the one used to construct the #GFile,
             * in that it might be replaced with one that is logically equivalent to the #GFile.
             *
             * This call does no blocking I/O.
             * @returns a string containing the URI scheme for the given   #GFile or %NULL if the #GFile was constructed with an invalid URI. The   returned string should be freed with g_free() when no longer needed.
             */
            get_uri_scheme(): string | null;
            /**
             * Checks if `file` has a parent, and optionally, if it is `parent`.
             *
             * If `parent` is %NULL then this function returns %TRUE if `file` has any
             * parent at all.  If `parent` is non-%NULL then %TRUE is only returned
             * if `file` is an immediate child of `parent`.
             * @param parent the parent to check for, or %NULL
             * @returns %TRUE if @file is an immediate child of @parent (or any parent in   the case that @parent is %NULL).
             */
            has_parent(parent?: Gio.File | null): boolean;
            /**
             * Checks whether `file` has the prefix specified by `prefix`.
             *
             * In other words, if the names of initial elements of `file'`s
             * pathname match `prefix`. Only full pathname elements are matched,
             * so a path like /foo is not considered a prefix of /foobar, only
             * of /foo/bar.
             *
             * A #GFile is not a prefix of itself. If you want to check for
             * equality, use g_file_equal().
             *
             * This call does no I/O, as it works purely on names. As such it can
             * sometimes return %FALSE even if `file` is inside a `prefix` (from a
             * filesystem point of view), because the prefix of `file` is an alias
             * of `prefix`.
             * @param prefix input #GFile
             * @returns %TRUE if the @file's parent, grandparent, etc is @prefix,   %FALSE otherwise.
             */
            has_prefix(prefix: Gio.File): boolean;
            /**
             * Checks to see if a #GFile has a given URI scheme.
             *
             * This call does no blocking I/O.
             * @param uri_scheme a string containing a URI scheme
             * @returns %TRUE if #GFile's backend supports the   given URI scheme, %FALSE if URI scheme is %NULL,   not supported, or #GFile is invalid.
             */
            has_uri_scheme(uri_scheme: string): boolean;
            /**
             * Creates a hash value for a #GFile.
             *
             * This call does no blocking I/O.
             * @returns 0 if @file is not a valid #GFile, otherwise an   integer that can be used as hash value for the #GFile.   This function is intended for easily hashing a #GFile to   add to a #GHashTable or similar data structure.
             */
            hash(): number;
            /**
             * Checks to see if a file is native to the platform.
             *
             * A native file is one expressed in the platform-native filename format,
             * e.g. "C:\Windows" or "/usr/bin/". This does not mean the file is local,
             * as it might be on a locally mounted remote filesystem.
             *
             * On some systems non-native files may be available using the native
             * filesystem via a userspace filesystem (FUSE), in these cases this call
             * will return %FALSE, but g_file_get_path() will still return a native path.
             *
             * This call does no blocking I/O.
             * @returns %TRUE if @file is native
             */
            is_native(): boolean;
            /**
             * Loads the contents of `file` and returns it as #GBytes.
             *
             * If `file` is a resource:// based URI, the resulting bytes will reference the
             * embedded resource instead of a copy. Otherwise, this is equivalent to calling
             * g_file_load_contents() and g_bytes_new_take().
             *
             * For resources, `etag_out` will be set to %NULL.
             *
             * The data contained in the resulting #GBytes is always zero-terminated, but
             * this is not included in the #GBytes length. The resulting #GBytes should be
             * freed with g_bytes_unref() when no longer in use.
             * @param cancellable a #GCancellable or %NULL
             * @returns a #GBytes or %NULL and @error is set
             */
            load_bytes(cancellable: Gio.Cancellable | null): [GLib.Bytes, string];
            /**
             * Asynchronously loads the contents of `file` as #GBytes.
             *
             * If `file` is a resource:// based URI, the resulting bytes will reference the
             * embedded resource instead of a copy. Otherwise, this is equivalent to calling
             * g_file_load_contents_async() and g_bytes_new_take().
             *
             * `callback` should call g_file_load_bytes_finish() to get the result of this
             * asynchronous operation.
             *
             * See g_file_load_bytes() for more information.
             * @param cancellable a #GCancellable or %NULL
             */
            load_bytes_async(cancellable?: Gio.Cancellable | null): Promise<[GLib.Bytes, string]>;
            /**
             * Asynchronously loads the contents of `file` as #GBytes.
             *
             * If `file` is a resource:// based URI, the resulting bytes will reference the
             * embedded resource instead of a copy. Otherwise, this is equivalent to calling
             * g_file_load_contents_async() and g_bytes_new_take().
             *
             * `callback` should call g_file_load_bytes_finish() to get the result of this
             * asynchronous operation.
             *
             * See g_file_load_bytes() for more information.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            load_bytes_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously loads the contents of `file` as #GBytes.
             *
             * If `file` is a resource:// based URI, the resulting bytes will reference the
             * embedded resource instead of a copy. Otherwise, this is equivalent to calling
             * g_file_load_contents_async() and g_bytes_new_take().
             *
             * `callback` should call g_file_load_bytes_finish() to get the result of this
             * asynchronous operation.
             *
             * See g_file_load_bytes() for more information.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            load_bytes_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[GLib.Bytes, string]> | void;
            /**
             * Completes an asynchronous request to g_file_load_bytes_async().
             *
             * For resources, `etag_out` will be set to %NULL.
             *
             * The data contained in the resulting #GBytes is always zero-terminated, but
             * this is not included in the #GBytes length. The resulting #GBytes should be
             * freed with g_bytes_unref() when no longer in use.
             *
             * See g_file_load_bytes() for more information.
             * @param result a #GAsyncResult provided to the callback
             * @returns a #GBytes or %NULL and @error is set
             */
            load_bytes_finish(result: Gio.AsyncResult): [GLib.Bytes, string];
            /**
             * Loads the content of the file into memory. The data is always
             * zero-terminated, but this is not included in the resultant `length`.
             * The returned `contents` should be freed with g_free() when no longer
             * needed.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @returns %TRUE if the @file's contents were successfully loaded.   %FALSE if there were errors.
             */
            load_contents(cancellable: Gio.Cancellable | null): [boolean, Uint8Array, string];
            /**
             * Starts an asynchronous load of the `file'`s contents.
             *
             * For more details, see g_file_load_contents() which is
             * the synchronous version of this call.
             *
             * When the load operation has completed, `callback` will be called
             * with `user` data. To finish the operation, call
             * g_file_load_contents_finish() with the #GAsyncResult returned by
             * the `callback`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             */
            load_contents_async(cancellable?: Gio.Cancellable | null): Promise<[Uint8Array, string]>;
            /**
             * Starts an asynchronous load of the `file'`s contents.
             *
             * For more details, see g_file_load_contents() which is
             * the synchronous version of this call.
             *
             * When the load operation has completed, `callback` will be called
             * with `user` data. To finish the operation, call
             * g_file_load_contents_finish() with the #GAsyncResult returned by
             * the `callback`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            load_contents_async(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts an asynchronous load of the `file'`s contents.
             *
             * For more details, see g_file_load_contents() which is
             * the synchronous version of this call.
             *
             * When the load operation has completed, `callback` will be called
             * with `user` data. To finish the operation, call
             * g_file_load_contents_finish() with the #GAsyncResult returned by
             * the `callback`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            load_contents_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[Uint8Array, string]> | void;
            /**
             * Finishes an asynchronous load of the `file'`s contents.
             * The contents are placed in `contents,` and `length` is set to the
             * size of the `contents` string. The `contents` should be freed with
             * g_free() when no longer needed. If `etag_out` is present, it will be
             * set to the new entity tag for the `file`.
             * @param res a #GAsyncResult
             * @returns %TRUE if the load was successful. If %FALSE and @error is   present, it will be set appropriately.
             */
            load_contents_finish(res: Gio.AsyncResult): [boolean, Uint8Array, string];
            /**
             * Finishes an asynchronous partial load operation that was started
             * with g_file_load_partial_contents_async(). The data is always
             * zero-terminated, but this is not included in the resultant `length`.
             * The returned `contents` should be freed with g_free() when no longer
             * needed.
             * @param res a #GAsyncResult
             * @returns %TRUE if the load was successful. If %FALSE and @error is   present, it will be set appropriately.
             */
            load_partial_contents_finish(res: Gio.AsyncResult): [boolean, Uint8Array, string];
            /**
             * Creates a directory. Note that this will only create a child directory
             * of the immediate parent directory of the path or URI given by the #GFile.
             * To recursively create directories, see g_file_make_directory_with_parents().
             * This function will fail if the parent directory does not exist, setting
             * `error` to %G_IO_ERROR_NOT_FOUND. If the file system doesn't support
             * creating directories, this function will fail, setting `error` to
             * %G_IO_ERROR_NOT_SUPPORTED.
             *
             * For a local #GFile the newly created directory will have the default
             * (current) ownership and permissions of the current process.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE on successful creation, %FALSE otherwise.
             */
            make_directory(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously creates a directory.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            make_directory_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously creates a directory.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            make_directory_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a directory.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            make_directory_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an asynchronous directory creation, started with
             * g_file_make_directory_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on successful directory creation, %FALSE otherwise.
             */
            make_directory_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a directory and any parent directories that may not
             * exist similar to 'mkdir -p'. If the file system does not support
             * creating directories, this function will fail, setting `error` to
             * %G_IO_ERROR_NOT_SUPPORTED. If the directory itself already exists,
             * this function will fail setting `error` to %G_IO_ERROR_EXISTS, unlike
             * the similar g_mkdir_with_parents().
             *
             * For a local #GFile the newly created directories will have the default
             * (current) ownership and permissions of the current process.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if all directories have been successfully created, %FALSE otherwise.
             */
            make_directory_with_parents(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Creates a symbolic link named `file` which contains the string
             * `symlink_value`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param symlink_value a string with the path for the target   of the new symlink
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE on the creation of a new symlink, %FALSE otherwise.
             */
            make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously creates a symbolic link named `file` which contains the
             * string `symlink_value`.
             * @param symlink_value a string with the path for the target   of the new symlink
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            make_symbolic_link_async(
                symlink_value: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously creates a symbolic link named `file` which contains the
             * string `symlink_value`.
             * @param symlink_value a string with the path for the target   of the new symlink
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            make_symbolic_link_async(
                symlink_value: string,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a symbolic link named `file` which contains the
             * string `symlink_value`.
             * @param symlink_value a string with the path for the target   of the new symlink
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            make_symbolic_link_async(
                symlink_value: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an asynchronous symbolic link creation, started with
             * g_file_make_symbolic_link_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on successful directory creation, %FALSE otherwise.
             */
            make_symbolic_link_finish(result: Gio.AsyncResult): boolean;
            /**
             * Recursively measures the disk usage of `file`.
             *
             * This is essentially an analog of the 'du' command, but it also
             * reports the number of directories and non-directory files encountered
             * (including things like symbolic links).
             *
             * By default, errors are only reported against the toplevel file
             * itself.  Errors found while recursing are silently ignored, unless
             * %G_FILE_MEASURE_REPORT_ANY_ERROR is given in `flags`.
             *
             * The returned size, `disk_usage,` is in bytes and should be formatted
             * with g_format_size() in order to get something reasonable for showing
             * in a user interface.
             *
             * `progress_callback` and `progress_data` can be given to request
             * periodic progress updates while scanning.  See the documentation for
             * #GFileMeasureProgressCallback for information about when and how the
             * callback will be invoked.
             * @param flags #GFileMeasureFlags
             * @param cancellable optional #GCancellable
             * @param progress_callback a #GFileMeasureProgressCallback
             * @returns %TRUE if successful, with the out parameters set.   %FALSE otherwise, with @error set.
             */
            measure_disk_usage(
                flags: Gio.FileMeasureFlags | null,
                cancellable: Gio.Cancellable | null,
                progress_callback: Gio.FileMeasureProgressCallback | null,
            ): [boolean, number, number, number];
            /**
             * Collects the results from an earlier call to
             * g_file_measure_disk_usage_async().  See g_file_measure_disk_usage() for
             * more information.
             * @param result the #GAsyncResult passed to your #GAsyncReadyCallback
             * @returns %TRUE if successful, with the out parameters set.   %FALSE otherwise, with @error set.
             */
            measure_disk_usage_finish(result: Gio.AsyncResult): [boolean, number, number, number];
            /**
             * Obtains a file or directory monitor for the given file,
             * depending on the type of the file.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags a set of #GFileMonitorFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileMonitor for the given @file,   or %NULL on error.   Free the returned object with g_object_unref().
             */
            monitor(flags: Gio.FileMonitorFlags | null, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
            /**
             * Obtains a directory monitor for the given file.
             * This may fail if directory monitoring is not supported.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * It does not make sense for `flags` to contain
             * %G_FILE_MONITOR_WATCH_HARD_LINKS, since hard links can not be made to
             * directories.  It is not possible to monitor all the files in a
             * directory for changes made via hard links; if you want to do this then
             * you must register individual watches with g_file_monitor().
             * @param flags a set of #GFileMonitorFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileMonitor for the given @file,   or %NULL on error. Free the returned object with g_object_unref().
             */
            monitor_directory(
                flags: Gio.FileMonitorFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileMonitor;
            /**
             * Obtains a file monitor for the given file. If no file notification
             * mechanism exists, then regular polling of the file is used.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `flags` contains %G_FILE_MONITOR_WATCH_HARD_LINKS then the monitor
             * will also attempt to report changes made to the file via another
             * filename (ie, a hard link). Without this flag, you can only rely on
             * changes made through the filename contained in `file` to be
             * reported. Using this flag may result in an increase in resource
             * usage, and may not have any effect depending on the #GFileMonitor
             * backend and/or filesystem type.
             * @param flags a set of #GFileMonitorFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileMonitor for the given @file,   or %NULL on error.   Free the returned object with g_object_unref().
             */
            monitor_file(flags: Gio.FileMonitorFlags | null, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
            /**
             * Starts a `mount_operation,` mounting the volume that contains
             * the file `location`.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_mount_enclosing_volume_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            mount_enclosing_volume(
                flags: Gio.MountMountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Starts a `mount_operation,` mounting the volume that contains
             * the file `location`.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_mount_enclosing_volume_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            mount_enclosing_volume(
                flags: Gio.MountMountFlags | null,
                mount_operation: Gio.MountOperation | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts a `mount_operation,` mounting the volume that contains
             * the file `location`.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_mount_enclosing_volume_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            mount_enclosing_volume(
                flags: Gio.MountMountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes a mount operation started by g_file_mount_enclosing_volume().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful. If an error has occurred,   this function will return %FALSE and set @error   appropriately if present.
             */
            mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean;
            /**
             * Mounts a file of type G_FILE_TYPE_MOUNTABLE.
             * Using `mount_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            mount_mountable(
                flags: Gio.MountMountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.File>;
            /**
             * Mounts a file of type G_FILE_TYPE_MOUNTABLE.
             * Using `mount_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            mount_mountable(
                flags: Gio.MountMountFlags | null,
                mount_operation: Gio.MountOperation | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Mounts a file of type G_FILE_TYPE_MOUNTABLE.
             * Using `mount_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            mount_mountable(
                flags: Gio.MountMountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.File> | void;
            /**
             * Finishes a mount operation. See g_file_mount_mountable() for details.
             *
             * Finish an asynchronous mount operation that was started
             * with g_file_mount_mountable().
             * @param result a #GAsyncResult
             * @returns a #GFile or %NULL on error.   Free the returned object with g_object_unref().
             */
            mount_mountable_finish(result: Gio.AsyncResult): Gio.File;
            /**
             * Tries to move the file or directory `source` to the location specified
             * by `destination`. If native move operations are supported then this is
             * used, otherwise a copy + delete fallback is used. The native
             * implementation may support moving directories (for instance on moves
             * inside the same filesystem), but the fallback code does not.
             *
             * If the flag %G_FILE_COPY_OVERWRITE is specified an already
             * existing `destination` file is overwritten.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `progress_callback` is not %NULL, then the operation can be monitored
             * by setting this to a #GFileProgressCallback function.
             * `progress_callback_data` will be passed to this function. It is
             * guaranteed that this callback will be called after all data has been
             * transferred with the total number of bytes copied during the operation.
             *
             * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND
             * error is returned, independent on the status of the `destination`.
             *
             * If %G_FILE_COPY_OVERWRITE is not specified and the target exists,
             * then the error %G_IO_ERROR_EXISTS is returned.
             *
             * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error is returned. If trying to overwrite a directory with a directory the
             * %G_IO_ERROR_WOULD_MERGE error is returned.
             *
             * If the source is a directory and the target does not exist, or
             * %G_FILE_COPY_OVERWRITE is specified and the target is a file, then
             * the %G_IO_ERROR_WOULD_RECURSE error may be returned (if the native
             * move operation isn't available).
             * @param destination #GFile pointing to the destination location
             * @param flags set of #GFileCopyFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback #GFileProgressCallback   function for updates
             * @returns %TRUE on successful move, %FALSE otherwise.
             */
            move(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
            ): boolean;
            /**
             * Asynchronously moves a file `source` to the location of `destination`. For details of the behaviour, see g_file_move().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_move(). The callback will run in the default main context
             * of the thread calling g_file_move_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_move_finish() to get the result of the operation.
             * @param destination #GFile pointing to the destination location
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback #GFileProgressCallback function for updates
             */
            move_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
            ): Promise<boolean>;
            /**
             * Asynchronously moves a file `source` to the location of `destination`. For details of the behaviour, see g_file_move().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_move(). The callback will run in the default main context
             * of the thread calling g_file_move_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_move_finish() to get the result of the operation.
             * @param destination #GFile pointing to the destination location
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback #GFileProgressCallback function for updates
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            move_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                progress_callback: Gio.FileProgressCallback | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously moves a file `source` to the location of `destination`. For details of the behaviour, see g_file_move().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_move(). The callback will run in the default main context
             * of the thread calling g_file_move_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_move_finish() to get the result of the operation.
             * @param destination #GFile pointing to the destination location
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback #GFileProgressCallback function for updates
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            move_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            // Conflicted with Gio.File.move_async
            move_async(...args: never[]): any;
            /**
             * Finishes an asynchronous file movement, started with
             * g_file_move_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on successful file move, %FALSE otherwise.
             */
            move_finish(result: Gio.AsyncResult): boolean;
            /**
             * Opens an existing file for reading and writing. The result is
             * a #GFileIOStream that can be used to read and write the contents
             * of the file.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
             * be returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error will be returned. Other errors are possible too, and depend on
             * what kind of filesystem the file is on. Note that in many non-local
             * file cases read and write streams are not supported, so make sure you
             * really need to do read and write streaming, rather than just opening
             * for reading or writing.
             * @param cancellable a #GCancellable
             * @returns #GFileIOStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream;
            /**
             * Asynchronously opens `file` for reading and writing.
             *
             * For more details, see g_file_open_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_open_readwrite_finish() to get
             * the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            open_readwrite_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.FileIOStream>;
            /**
             * Asynchronously opens `file` for reading and writing.
             *
             * For more details, see g_file_open_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_open_readwrite_finish() to get
             * the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            open_readwrite_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously opens `file` for reading and writing.
             *
             * For more details, see g_file_open_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_open_readwrite_finish() to get
             * the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            open_readwrite_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileIOStream> | void;
            /**
             * Finishes an asynchronous file read operation started with
             * g_file_open_readwrite_async().
             * @param res a #GAsyncResult
             * @returns a #GFileIOStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
            /**
             * Exactly like g_file_get_path(), but caches the result via
             * g_object_set_qdata_full().  This is useful for example in C
             * applications which mix `g_file_*` APIs with native ones.  It
             * also avoids an extra duplicated string when possible, so will be
             * generally more efficient.
             *
             * This call does no blocking I/O.
             * @returns string containing the #GFile's path,   or %NULL if no such path exists. The returned string is owned by @file.
             */
            peek_path(): string | null;
            /**
             * Polls a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             */
            poll_mountable(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Polls a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            poll_mountable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Polls a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            poll_mountable(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes a poll operation. See g_file_poll_mountable() for details.
             *
             * Finish an asynchronous poll operation that was polled
             * with g_file_poll_mountable().
             * @param result a #GAsyncResult
             * @returns %TRUE if the operation finished successfully. %FALSE otherwise.
             */
            poll_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Returns the #GAppInfo that is registered as the default
             * application to handle the file specified by `file`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @returns a #GAppInfo if the handle was found,   %NULL if there were errors.   When you are done with it, release it with g_object_unref()
             */
            query_default_handler(cancellable?: Gio.Cancellable | null): Gio.AppInfo;
            /**
             * Async version of g_file_query_default_handler().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             */
            query_default_handler_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.AppInfo>;
            /**
             * Async version of g_file_query_default_handler().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is done
             */
            query_default_handler_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Async version of g_file_query_default_handler().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is done
             */
            query_default_handler_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.AppInfo> | void;
            /**
             * Finishes a g_file_query_default_handler_async() operation.
             * @param result a #GAsyncResult
             * @returns a #GAppInfo if the handle was found,   %NULL if there were errors.   When you are done with it, release it with g_object_unref()
             */
            query_default_handler_finish(result: Gio.AsyncResult): Gio.AppInfo;
            /**
             * Utility function to check if a particular file exists. This is
             * implemented using g_file_query_info() and as such does blocking I/O.
             *
             * Note that in many cases it is [racy to first check for file existence](https://en.wikipedia.org/wiki/Time_of_check_to_time_of_use)
             * and then execute something based on the outcome of that, because the
             * file might have been created or removed in between the operations. The
             * general approach to handling that is to not check, but just do the
             * operation and handle the errors as they come.
             *
             * As an example of race-free checking, take the case of reading a file,
             * and if it doesn't exist, creating it. There are two racy versions: read
             * it, and on error create it; and: check if it exists, if not create it.
             * These can both result in two processes creating the file (with perhaps
             * a partially written file as the result). The correct approach is to
             * always try to create the file with g_file_create() which will either
             * atomically create the file or fail with a %G_IO_ERROR_EXISTS error.
             *
             * However, in many cases an existence check is useful in a user interface,
             * for instance to make a menu item sensitive/insensitive, so that you don't
             * have to fool users that something is possible and then just show an error
             * dialog. If you do this, you should make sure to also handle the errors
             * that can happen due to races when you execute the operation.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the file exists (and can be detected without error),   %FALSE otherwise (or if cancelled).
             */
            query_exists(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Utility function to inspect the #GFileType of a file. This is
             * implemented using g_file_query_info() and as such does blocking I/O.
             *
             * The primary use case of this method is to check if a file is
             * a regular file, directory, or symlink.
             * @param flags a set of #GFileQueryInfoFlags passed to g_file_query_info()
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns The #GFileType of the file and %G_FILE_TYPE_UNKNOWN   if the file does not exist
             */
            query_file_type(flags: Gio.FileQueryInfoFlags | null, cancellable?: Gio.Cancellable | null): Gio.FileType;
            /**
             * Similar to g_file_query_info(), but obtains information
             * about the filesystem the `file` is on, rather than the file itself.
             * For instance the amount of space available and the type of
             * the filesystem.
             *
             * The `attributes` value is a string that specifies the attributes
             * that should be gathered. It is not an error if it's not possible
             * to read a particular requested attribute from a file - it just
             * won't be set. `attributes` should be a comma-separated list of
             * attributes or attribute wildcards. The wildcard "*" means all
             * attributes, and a wildcard like "filesystem::*" means all attributes
             * in the filesystem namespace. The standard namespace for filesystem
             * attributes is "filesystem". Common attributes of interest are
             * %G_FILE_ATTRIBUTE_FILESYSTEM_SIZE (the total size of the filesystem
             * in bytes), %G_FILE_ATTRIBUTE_FILESYSTEM_FREE (number of bytes available),
             * and %G_FILE_ATTRIBUTE_FILESYSTEM_TYPE (type of the filesystem).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
             * be returned. Other errors are possible too, and depend on what
             * kind of filesystem the file is on.
             * @param attributes an attribute query string
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileInfo or %NULL if there was an error.   Free the returned object with g_object_unref().
             */
            query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo;
            /**
             * Asynchronously gets the requested information about the filesystem
             * that the specified `file` is on. The result is a #GFileInfo object
             * that contains key-value attributes (such as type or size for the
             * file).
             *
             * For more details, see g_file_query_filesystem_info() which is the
             * synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the
             * operation.
             * @param attributes an attribute query string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            query_filesystem_info_async(
                attributes: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileInfo>;
            /**
             * Asynchronously gets the requested information about the filesystem
             * that the specified `file` is on. The result is a #GFileInfo object
             * that contains key-value attributes (such as type or size for the
             * file).
             *
             * For more details, see g_file_query_filesystem_info() which is the
             * synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the
             * operation.
             * @param attributes an attribute query string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            query_filesystem_info_async(
                attributes: string,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the requested information about the filesystem
             * that the specified `file` is on. The result is a #GFileInfo object
             * that contains key-value attributes (such as type or size for the
             * file).
             *
             * For more details, see g_file_query_filesystem_info() which is the
             * synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the
             * operation.
             * @param attributes an attribute query string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            query_filesystem_info_async(
                attributes: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileInfo> | void;
            /**
             * Finishes an asynchronous filesystem info query.
             * See g_file_query_filesystem_info_async().
             * @param res a #GAsyncResult
             * @returns #GFileInfo for given @file   or %NULL on error.   Free the returned object with g_object_unref().
             */
            query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
            /**
             * Gets the requested information about specified `file`.
             * The result is a #GFileInfo object that contains key-value
             * attributes (such as the type or size of the file).
             *
             * The `attributes` value is a string that specifies the file
             * attributes that should be gathered. It is not an error if
             * it's not possible to read a particular requested attribute
             * from a file - it just won't be set. `attributes` should be a
             * comma-separated list of attributes or attribute wildcards.
             * The wildcard "*" means all attributes, and a wildcard like
             * "standard::*" means all attributes in the standard namespace.
             * An example attribute query be "standard::*,owner::user".
             * The standard attributes are available as defines, like
             * %G_FILE_ATTRIBUTE_STANDARD_NAME.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * For symlinks, normally the information about the target of the
             * symlink is returned, rather than information about the symlink
             * itself. However if you pass %G_FILE_QUERY_INFO_NOFOLLOW_SYMLINKS
             * in `flags` the information about the symlink itself will be returned.
             * Also, for symlinks that point to non-existing files the information
             * about the symlink itself will be returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
             * returned. Other errors are possible too, and depend on what kind of
             * filesystem the file is on.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileInfo for the given @file, or %NULL   on error. Free the returned object with g_object_unref().
             */
            query_info(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileInfo;
            /**
             * Asynchronously gets the requested information about specified `file`.
             * The result is a #GFileInfo object that contains key-value attributes
             * (such as type or size for the file).
             *
             * For more details, see g_file_query_info() which is the synchronous
             * version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            query_info_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileInfo>;
            /**
             * Asynchronously gets the requested information about specified `file`.
             * The result is a #GFileInfo object that contains key-value attributes
             * (such as type or size for the file).
             *
             * For more details, see g_file_query_info() which is the synchronous
             * version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            query_info_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the requested information about specified `file`.
             * The result is a #GFileInfo object that contains key-value attributes
             * (such as type or size for the file).
             *
             * For more details, see g_file_query_info() which is the synchronous
             * version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            query_info_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileInfo> | void;
            /**
             * Finishes an asynchronous file info query.
             * See g_file_query_info_async().
             * @param res a #GAsyncResult
             * @returns #GFileInfo for given @file   or %NULL on error. Free the returned object with   g_object_unref().
             */
            query_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
            /**
             * Obtain the list of settable attributes for the file.
             *
             * Returns the type and full attribute name of all the attributes
             * that can be set on this file. This doesn't mean setting it will
             * always succeed though, you might get an access failure, or some
             * specific file may not support a specific attribute.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileAttributeInfoList describing the settable attributes.   When you are done with it, release it with   g_file_attribute_info_list_unref()
             */
            query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;
            /**
             * Obtain the list of attribute namespaces where new attributes
             * can be created by a user. An example of this is extended
             * attributes (in the "xattr" namespace).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileAttributeInfoList describing the writable namespaces.   When you are done with it, release it with   g_file_attribute_info_list_unref()
             */
            query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;
            /**
             * Opens a file for reading. The result is a #GFileInputStream that
             * can be used to read the contents of the file.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
             * returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error will be returned. Other errors are possible too, and depend
             * on what kind of filesystem the file is on.
             * @param cancellable a #GCancellable
             * @returns #GFileInputStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            read(cancellable?: Gio.Cancellable | null): Gio.FileInputStream;
            /**
             * Asynchronously opens `file` for reading.
             *
             * For more details, see g_file_read() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_read_finish() to get the result
             * of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            read_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.FileInputStream>;
            /**
             * Asynchronously opens `file` for reading.
             *
             * For more details, see g_file_read() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_read_finish() to get the result
             * of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously opens `file` for reading.
             *
             * For more details, see g_file_read() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_read_finish() to get the result
             * of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileInputStream> | void;
            /**
             * Finishes an asynchronous file read operation started with
             * g_file_read_async().
             * @param res a #GAsyncResult
             * @returns a #GFileInputStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            read_finish(res: Gio.AsyncResult): Gio.FileInputStream;
            /**
             * Returns an output stream for overwriting the file, possibly
             * creating a backup copy of the file first. If the file doesn't exist,
             * it will be created.
             *
             * This will try to replace the file in the safest way possible so
             * that any errors during the writing will not affect an already
             * existing copy of the file. For instance, for local files it
             * may write to a temporary file and then atomically rename over
             * the destination when the stream is closed.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level that
             * is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If you pass in a non-%NULL `etag` value and `file` already exists, then
             * this value is compared to the current entity tag of the file, and if
             * they differ an %G_IO_ERROR_WRONG_ETAG error is returned. This
             * generally means that the file has been changed since you last read
             * it. You can get the new etag from g_file_output_stream_get_etag()
             * after you've finished writing and closed the #GFileOutputStream. When
             * you load a new file you can use g_file_input_stream_query_info() to
             * get the etag of the file.
             *
             * If `make_backup` is %TRUE, this function will attempt to make a
             * backup of the current file before overwriting it. If this fails
             * a %G_IO_ERROR_CANT_CREATE_BACKUP error will be returned. If you
             * want to replace anyway, try again with `make_backup` set to %FALSE.
             *
             * If the file is a directory the %G_IO_ERROR_IS_DIRECTORY error will
             * be returned, and if the file is some other form of non-regular file
             * then a %G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some
             * file systems don't allow all file names, and may return an
             * %G_IO_ERROR_INVALID_FILENAME error, and if the name is to long
             * %G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are
             * possible too, and depend on what kind of filesystem the file is on.
             * @param etag an optional [entity tag](#entity-tags)   for the current #GFile, or #NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileOutputStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            replace(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileOutputStream;
            /**
             * Asynchronously overwrites the file, replacing the contents,
             * possibly creating a backup copy of the file first.
             *
             * For more details, see g_file_replace() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_finish() to get the result
             * of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            replace_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileOutputStream>;
            /**
             * Asynchronously overwrites the file, replacing the contents,
             * possibly creating a backup copy of the file first.
             *
             * For more details, see g_file_replace() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_finish() to get the result
             * of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            replace_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously overwrites the file, replacing the contents,
             * possibly creating a backup copy of the file first.
             *
             * For more details, see g_file_replace() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_finish() to get the result
             * of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            replace_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileOutputStream> | void;
            /**
             * Replaces the contents of `file` with `contents` of `length` bytes.
             *
             * If `etag` is specified (not %NULL), any existing file must have that etag,
             * or the error %G_IO_ERROR_WRONG_ETAG will be returned.
             *
             * If `make_backup` is %TRUE, this function will attempt to make a backup
             * of `file`. Internally, it uses g_file_replace(), so will try to replace the
             * file contents in the safest way possible. For example, atomic renames are
             * used when replacing local files’ contents.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * The returned `new_etag` can be used to verify that the file hasn't
             * changed the next time it is saved over.
             * @param contents a string containing the new contents for @file
             * @param etag the old [entity-tag](#entity-tags) for the document,   or %NULL
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @returns %TRUE if successful. If an error has occurred, this function   will return %FALSE and set @error appropriately if present.
             */
            replace_contents(
                contents: Uint8Array | string,
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Starts an asynchronous replacement of `file` with the given
             * `contents` of `length` bytes. `etag` will replace the document's
             * current entity tag.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_replace_contents_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `make_backup` is %TRUE, this function will attempt to
             * make a backup of `file`.
             *
             * Note that no copy of `contents` will be made, so it must stay valid
             * until `callback` is called. See g_file_replace_contents_bytes_async()
             * for a #GBytes version that will automatically hold a reference to the
             * contents (without copying) for the duration of the call.
             * @param contents string of contents to replace the file with
             * @param etag a new [entity tag](#entity-tags) for the @file, or %NULL
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object, %NULL to ignore
             */
            replace_contents_async(
                contents: Uint8Array | string,
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string>;
            /**
             * Starts an asynchronous replacement of `file` with the given
             * `contents` of `length` bytes. `etag` will replace the document's
             * current entity tag.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_replace_contents_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `make_backup` is %TRUE, this function will attempt to
             * make a backup of `file`.
             *
             * Note that no copy of `contents` will be made, so it must stay valid
             * until `callback` is called. See g_file_replace_contents_bytes_async()
             * for a #GBytes version that will automatically hold a reference to the
             * contents (without copying) for the duration of the call.
             * @param contents string of contents to replace the file with
             * @param etag a new [entity tag](#entity-tags) for the @file, or %NULL
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            replace_contents_async(
                contents: Uint8Array | string,
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts an asynchronous replacement of `file` with the given
             * `contents` of `length` bytes. `etag` will replace the document's
             * current entity tag.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_replace_contents_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `make_backup` is %TRUE, this function will attempt to
             * make a backup of `file`.
             *
             * Note that no copy of `contents` will be made, so it must stay valid
             * until `callback` is called. See g_file_replace_contents_bytes_async()
             * for a #GBytes version that will automatically hold a reference to the
             * contents (without copying) for the duration of the call.
             * @param contents string of contents to replace the file with
             * @param etag a new [entity tag](#entity-tags) for the @file, or %NULL
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            replace_contents_async(
                contents: Uint8Array | string,
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            // Conflicted with Gio.File.replace_contents_async
            replace_contents_async(...args: never[]): any;
            /**
             * Same as g_file_replace_contents_async() but takes a #GBytes input instead.
             * This function will keep a ref on `contents` until the operation is done.
             * Unlike g_file_replace_contents_async() this allows forgetting about the
             * content without waiting for the callback.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_replace_contents_finish().
             * @param contents a #GBytes
             * @param etag a new [entity tag](#entity-tags) for the @file, or %NULL
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            replace_contents_bytes_async(
                contents: GLib.Bytes | Uint8Array,
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous replace of the given `file`. See
             * g_file_replace_contents_async(). Sets `new_etag` to the new entity
             * tag for the document, if present.
             * @param res a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure.
             */
            replace_contents_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Finishes an asynchronous file replace operation started with
             * g_file_replace_async().
             * @param res a #GAsyncResult
             * @returns a #GFileOutputStream, or %NULL on error.   Free the returned object with g_object_unref().
             */
            replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
            /**
             * Returns an output stream for overwriting the file in readwrite mode,
             * possibly creating a backup copy of the file first. If the file doesn't
             * exist, it will be created.
             *
             * For details about the behaviour, see g_file_replace() which does the
             * same thing but returns an output stream only.
             *
             * Note that in many non-local file cases read and write streams are not
             * supported, so make sure you really need to do read and write streaming,
             * rather than just opening for reading or writing.
             * @param etag an optional [entity tag](#entity-tags)   for the current #GFile, or #NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFileIOStream or %NULL on error.   Free the returned object with g_object_unref().
             */
            replace_readwrite(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileIOStream;
            /**
             * Asynchronously overwrites the file in read-write mode,
             * replacing the contents, possibly creating a backup copy
             * of the file first.
             *
             * For more details, see g_file_replace_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_readwrite_finish() to get
             * the result of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            replace_readwrite_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileIOStream>;
            /**
             * Asynchronously overwrites the file in read-write mode,
             * replacing the contents, possibly creating a backup copy
             * of the file first.
             *
             * For more details, see g_file_replace_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_readwrite_finish() to get
             * the result of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            replace_readwrite_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously overwrites the file in read-write mode,
             * replacing the contents, possibly creating a backup copy
             * of the file first.
             *
             * For more details, see g_file_replace_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_readwrite_finish() to get
             * the result of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            replace_readwrite_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileIOStream> | void;
            /**
             * Finishes an asynchronous file replace operation started with
             * g_file_replace_readwrite_async().
             * @param res a #GAsyncResult
             * @returns a #GFileIOStream, or %NULL on error.   Free the returned object with g_object_unref().
             */
            replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
            /**
             * Resolves a relative path for `file` to an absolute path.
             *
             * This call does no blocking I/O.
             *
             * If the `relative_path` is an absolute path name, the resolution
             * is done absolutely (without taking `file` path as base).
             * @param relative_path a given relative path string
             * @returns a #GFile for the resolved path.
             */
            resolve_relative_path(relative_path: string): Gio.File;
            /**
             * Sets an attribute in the file with attribute name `attribute` to `value_p`.
             *
             * Some attributes can be unset by setting `type` to
             * %G_FILE_ATTRIBUTE_TYPE_INVALID and `value_p` to %NULL.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param type The type of the attribute
             * @param value_p a pointer to the value (or the pointer   itself if the type is a pointer type)
             * @param flags a set of #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the attribute was set, %FALSE otherwise.
             */
            set_attribute(
                attribute: string,
                type: Gio.FileAttributeType | null,
                value_p: any | null,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_BYTE_STRING to `value`.
             * If `attribute` is of a different type, this operation will fail,
             * returning %FALSE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param value a string containing the attribute's new value
             * @param flags a #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the @attribute was successfully set to @value   in the @file, %FALSE otherwise.
             */
            set_attribute_byte_string(
                attribute: string,
                value: string,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_INT32 to `value`.
             * If `attribute` is of a different type, this operation will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param value a #gint32 containing the attribute's new value
             * @param flags a #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the @attribute was successfully set to @value   in the @file, %FALSE otherwise.
             */
            set_attribute_int32(
                attribute: string,
                value: number,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_INT64 to `value`.
             * If `attribute` is of a different type, this operation will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param value a #guint64 containing the attribute's new value
             * @param flags a #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the @attribute was successfully set, %FALSE otherwise.
             */
            set_attribute_int64(
                attribute: string,
                value: number,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_STRING to `value`.
             * If `attribute` is of a different type, this operation will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param value a string containing the attribute's value
             * @param flags #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the @attribute was successfully set, %FALSE otherwise.
             */
            set_attribute_string(
                attribute: string,
                value: string,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_UINT32 to `value`.
             * If `attribute` is of a different type, this operation will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param value a #guint32 containing the attribute's new value
             * @param flags a #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the @attribute was successfully set to @value   in the @file, %FALSE otherwise.
             */
            set_attribute_uint32(
                attribute: string,
                value: number,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_UINT64 to `value`.
             * If `attribute` is of a different type, this operation will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param value a #guint64 containing the attribute's new value
             * @param flags a #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE if the @attribute was successfully set to @value   in the @file, %FALSE otherwise.
             */
            set_attribute_uint64(
                attribute: string,
                value: number,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously sets the attributes of `file` with `info`.
             *
             * For more details, see g_file_set_attributes_from_info(),
             * which is the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_attributes_finish() to get
             * the result of the operation.
             * @param info a #GFileInfo
             * @param flags a #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            set_attributes_async(
                info: Gio.FileInfo,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.FileInfo>;
            /**
             * Asynchronously sets the attributes of `file` with `info`.
             *
             * For more details, see g_file_set_attributes_from_info(),
             * which is the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_attributes_finish() to get
             * the result of the operation.
             * @param info a #GFileInfo
             * @param flags a #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            set_attributes_async(
                info: Gio.FileInfo,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously sets the attributes of `file` with `info`.
             *
             * For more details, see g_file_set_attributes_from_info(),
             * which is the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_attributes_finish() to get
             * the result of the operation.
             * @param info a #GFileInfo
             * @param flags a #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            set_attributes_async(
                info: Gio.FileInfo,
                flags: Gio.FileQueryInfoFlags | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.FileInfo> | void;
            /**
             * Finishes setting an attribute started in g_file_set_attributes_async().
             * @param result a #GAsyncResult
             * @returns %TRUE if the attributes were set correctly, %FALSE otherwise.
             */
            set_attributes_finish(result: Gio.AsyncResult): [boolean, Gio.FileInfo];
            /**
             * Tries to set all attributes in the #GFileInfo on the target
             * values, not stopping on the first error.
             *
             * If there is any error during this operation then `error` will
             * be set to the first error. Error on particular fields are flagged
             * by setting the "status" field in the attribute value to
             * %G_FILE_ATTRIBUTE_STATUS_ERROR_SETTING, which means you can
             * also detect further errors.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param info a #GFileInfo
             * @param flags #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %FALSE if there was any error, %TRUE otherwise.
             */
            set_attributes_from_info(
                info: Gio.FileInfo,
                flags: Gio.FileQueryInfoFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Renames `file` to the specified display name.
             *
             * The display name is converted from UTF-8 to the correct encoding
             * for the target filesystem if possible and the `file` is renamed to this.
             *
             * If you want to implement a rename operation in the user interface the
             * edit name (%G_FILE_ATTRIBUTE_STANDARD_EDIT_NAME) should be used as the
             * initial value in the rename widget, and then the result after editing
             * should be passed to g_file_set_display_name().
             *
             * On success the resulting converted filename is returned.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param display_name a string
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns a #GFile specifying what @file was renamed to,   or %NULL if there was an error.   Free the returned object with g_object_unref().
             */
            set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File;
            /**
             * Asynchronously sets the display name for a given #GFile.
             *
             * For more details, see g_file_set_display_name() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_display_name_finish() to get
             * the result of the operation.
             * @param display_name a string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            set_display_name_async(
                display_name: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.File>;
            /**
             * Asynchronously sets the display name for a given #GFile.
             *
             * For more details, see g_file_set_display_name() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_display_name_finish() to get
             * the result of the operation.
             * @param display_name a string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            set_display_name_async(
                display_name: string,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously sets the display name for a given #GFile.
             *
             * For more details, see g_file_set_display_name() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_display_name_finish() to get
             * the result of the operation.
             * @param display_name a string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            set_display_name_async(
                display_name: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.File> | void;
            /**
             * Finishes setting a display name started with
             * g_file_set_display_name_async().
             * @param res a #GAsyncResult
             * @returns a #GFile or %NULL on error.   Free the returned object with g_object_unref().
             */
            set_display_name_finish(res: Gio.AsyncResult): Gio.File;
            /**
             * Starts a file of type %G_FILE_TYPE_MOUNTABLE.
             * Using `start_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param start_operation a #GMountOperation, or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object, %NULL to ignore
             */
            start_mountable(
                flags: Gio.DriveStartFlags | null,
                start_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Starts a file of type %G_FILE_TYPE_MOUNTABLE.
             * Using `start_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param start_operation a #GMountOperation, or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied, or %NULL
             */
            start_mountable(
                flags: Gio.DriveStartFlags | null,
                start_operation: Gio.MountOperation | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts a file of type %G_FILE_TYPE_MOUNTABLE.
             * Using `start_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param start_operation a #GMountOperation, or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied, or %NULL
             */
            start_mountable(
                flags: Gio.DriveStartFlags | null,
                start_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes a start operation. See g_file_start_mountable() for details.
             *
             * Finish an asynchronous start operation that was started
             * with g_file_start_mountable().
             * @param result a #GAsyncResult
             * @returns %TRUE if the operation finished successfully. %FALSE otherwise.
             */
            start_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stops a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_stop_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            stop_mountable(
                flags: Gio.MountUnmountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Stops a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_stop_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            stop_mountable(
                flags: Gio.MountUnmountFlags | null,
                mount_operation: Gio.MountOperation | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Stops a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_stop_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            stop_mountable(
                flags: Gio.MountUnmountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes a stop operation, see g_file_stop_mountable() for details.
             *
             * Finish an asynchronous stop operation that was started
             * with g_file_stop_mountable().
             * @param result a #GAsyncResult
             * @returns %TRUE if the operation finished successfully.   %FALSE otherwise.
             */
            stop_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks if `file` supports
             * [thread-default contexts][g-main-context-push-thread-default-context].
             * If this returns %FALSE, you cannot perform asynchronous operations on
             * `file` in a thread that has a thread-default context.
             * @returns Whether or not @file supports thread-default contexts.
             */
            supports_thread_contexts(): boolean;
            /**
             * Sends `file` to the "Trashcan", if possible. This is similar to
             * deleting it, but the user can recover it before emptying the trashcan.
             * Trashing is disabled for system mounts by default (see
             * g_unix_mount_is_system_internal()), so this call can return the
             * %G_IO_ERROR_NOT_SUPPORTED error. Since GLib 2.66, the `x-gvfs-notrash` unix
             * mount option can be used to disable g_file_trash() support for particular
             * mounts, the %G_IO_ERROR_NOT_SUPPORTED error will be returned in that case.
             * Since 2.82, the `x-gvfs-trash` unix mount option can be used to enable
             * g_file_trash() support for particular system mounts.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @returns %TRUE on successful trash, %FALSE otherwise.
             */
            trash(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously sends `file` to the Trash location, if possible.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            trash_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously sends `file` to the Trash location, if possible.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            trash_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously sends `file` to the Trash location, if possible.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            trash_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an asynchronous file trashing operation, started with
             * g_file_trash_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on successful trash, %FALSE otherwise.
             */
            trash_finish(result: Gio.AsyncResult): boolean;
            /**
             * Unmounts a file of type G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            unmount_mountable(
                flags: Gio.MountUnmountFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Unmounts a file of type G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            unmount_mountable(
                flags: Gio.MountUnmountFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Unmounts a file of type G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            unmount_mountable(
                flags: Gio.MountUnmountFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an unmount operation, see g_file_unmount_mountable() for details.
             *
             * Finish an asynchronous unmount operation that was started
             * with g_file_unmount_mountable().
             * @param result a #GAsyncResult
             * @returns %TRUE if the operation finished successfully.   %FALSE otherwise.
             */
            unmount_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Unmounts a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            unmount_mountable_with_operation(
                flags: Gio.MountUnmountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Unmounts a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            unmount_mountable_with_operation(
                flags: Gio.MountUnmountFlags | null,
                mount_operation: Gio.MountOperation | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Unmounts a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            unmount_mountable_with_operation(
                flags: Gio.MountUnmountFlags | null,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an unmount operation,
             * see g_file_unmount_mountable_with_operation() for details.
             *
             * Finish an asynchronous unmount operation that was started
             * with g_file_unmount_mountable_with_operation().
             * @param result a #GAsyncResult
             * @returns %TRUE if the operation finished successfully.   %FALSE otherwise.
             */
            unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets an output stream for appending data to the file.
             * If the file doesn't already exist it is created.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level that
             * is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * Some file systems don't allow all file names, and may return an
             * %G_IO_ERROR_INVALID_FILENAME error. If the file is a directory the
             * %G_IO_ERROR_IS_DIRECTORY error will be returned. Other errors are
             * possible too, and depend on what kind of filesystem the file is on.
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;
            /**
             * Asynchronously opens `file` for appending.
             *
             * For more details, see g_file_append_to() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_append_to_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_append_to_async(
                flags: Gio.FileCreateFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file append operation started with
             * g_file_append_to_async().
             * @param res #GAsyncResult
             */
            vfunc_append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
            /**
             * Copies the file `source` to the location specified by `destination`.
             * Can not handle recursive copies of directories.
             *
             * If the flag %G_FILE_COPY_OVERWRITE is specified an already
             * existing `destination` file is overwritten.
             *
             * If the flag %G_FILE_COPY_NOFOLLOW_SYMLINKS is specified then symlinks
             * will be copied as symlinks, otherwise the target of the
             * `source` symlink will be copied.
             *
             * If the flag %G_FILE_COPY_ALL_METADATA is specified then all the metadata
             * that is possible to copy is copied, not just the default subset (which,
             * for instance, does not include the owner, see #GFileInfo).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `progress_callback` is not %NULL, then the operation can be monitored
             * by setting this to a #GFileProgressCallback function.
             * `progress_callback_data` will be passed to this function. It is guaranteed
             * that this callback will be called after all data has been transferred with
             * the total number of bytes copied during the operation.
             *
             * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND error
             * is returned, independent on the status of the `destination`.
             *
             * If %G_FILE_COPY_OVERWRITE is not specified and the target exists, then
             * the error %G_IO_ERROR_EXISTS is returned.
             *
             * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error is returned. If trying to overwrite a directory with a directory the
             * %G_IO_ERROR_WOULD_MERGE error is returned.
             *
             * If the source is a directory and the target does not exist, or
             * %G_FILE_COPY_OVERWRITE is specified and the target is a file, then the
             * %G_IO_ERROR_WOULD_RECURSE error is returned.
             *
             * If you are interested in copying the #GFile object itself (not the on-disk
             * file), see g_file_dup().
             * @param destination destination #GFile
             * @param flags set of #GFileCopyFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback function to callback with   progress information, or %NULL if progress information is not needed
             */
            vfunc_copy(
                destination: Gio.File,
                flags: Gio.FileCopyFlags,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
            ): boolean;
            /**
             * Copies the file `source` to the location specified by `destination`
             * asynchronously. For details of the behaviour, see g_file_copy().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_copy(). The callback will run in the default main context
             * of the thread calling g_file_copy_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_copy_finish() to get the result of the operation.
             * @param destination destination #GFile
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback function to callback with progress information, or %NULL if   progress information is not needed
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_copy_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes copying the file started with g_file_copy_async().
             * @param res a #GAsyncResult
             */
            vfunc_copy_finish(res: Gio.AsyncResult): boolean;
            /**
             * Creates a new file and returns an output stream for writing to it.
             * The file must not already exist.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level
             * that is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If a file or directory with this name already exists the
             * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
             * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
             * error, and if the name is to long %G_IO_ERROR_FILENAME_TOO_LONG will
             * be returned. Other errors are possible too, and depend on what kind
             * of filesystem the file is on.
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;
            /**
             * Asynchronously creates a new file and returns an output stream
             * for writing to it. The file must not already exist.
             *
             * For more details, see g_file_create() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_finish() to get the result
             * of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_create_async(
                flags: Gio.FileCreateFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file create operation started with
             * g_file_create_async().
             * @param res a #GAsyncResult
             */
            vfunc_create_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
            /**
             * Creates a new file and returns a stream for reading and
             * writing to it. The file must not already exist.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level
             * that is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If a file or directory with this name already exists, the
             * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
             * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
             * error, and if the name is too long, %G_IO_ERROR_FILENAME_TOO_LONG
             * will be returned. Other errors are possible too, and depend on what
             * kind of filesystem the file is on.
             *
             * Note that in many non-local file cases read and write streams are
             * not supported, so make sure you really need to do read and write
             * streaming, rather than just opening for reading or writing.
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream;
            /**
             * Asynchronously creates a new file and returns a stream
             * for reading and writing to it. The file must not already exist.
             *
             * For more details, see g_file_create_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_create_readwrite_finish() to get
             * the result of the operation.
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_create_readwrite_async(
                flags: Gio.FileCreateFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file create operation started with
             * g_file_create_readwrite_async().
             * @param res a #GAsyncResult
             */
            vfunc_create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
            /**
             * Deletes a file. If the `file` is a directory, it will only be
             * deleted if it is empty. This has the same semantics as g_unlink().
             *
             * If `file` doesn’t exist, %G_IO_ERROR_NOT_FOUND will be returned. This allows
             * for deletion to be implemented avoiding
             * [time-of-check to time-of-use races](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use):
             *
             * ```
             * g_autoptr(GError) local_error = NULL;
             * if (!g_file_delete (my_file, my_cancellable, &local_error) &&
             *     !g_error_matches (local_error, G_IO_ERROR, G_IO_ERROR_NOT_FOUND))
             *   {
             *     // deletion failed for some reason other than the file not existing:
             *     // so report the error
             *     g_warning ("Failed to delete %s: %s",
             *                g_file_peek_path (my_file), local_error->message);
             *   }
             * ```
             *
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_delete_file(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously delete a file. If the `file` is a directory, it will
             * only be deleted if it is empty.  This has the same semantics as
             * g_unlink().
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            vfunc_delete_file_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes deleting a file started with g_file_delete_async().
             * @param result a #GAsyncResult
             */
            vfunc_delete_file_finish(result: Gio.AsyncResult): boolean;
            /**
             * Duplicates a #GFile handle. This operation does not duplicate
             * the actual file or directory represented by the #GFile; see
             * g_file_copy() if attempting to copy a file.
             *
             * g_file_dup() is useful when a second handle is needed to the same underlying
             * file, for use in a separate thread (#GFile is not thread-safe). For use
             * within the same thread, use g_object_ref() to increment the existing object’s
             * reference count.
             *
             * This call does no blocking I/O.
             */
            vfunc_dup(): Gio.File;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_eject_mountable(
                flags: Gio.MountUnmountFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous eject operation started by
             * g_file_eject_mountable().
             * @param result a #GAsyncResult
             */
            vfunc_eject_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Starts an asynchronous eject on a mountable.
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_eject_mountable_with_operation_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_eject_mountable_with_operation(
                flags: Gio.MountUnmountFlags,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous eject operation started by
             * g_file_eject_mountable_with_operation().
             * @param result a #GAsyncResult
             */
            vfunc_eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets the requested information about the files in a directory.
             * The result is a #GFileEnumerator object that will give out
             * #GFileInfo objects for all the files in the directory.
             *
             * The `attributes` value is a string that specifies the file
             * attributes that should be gathered. It is not an error if
             * it's not possible to read a particular requested attribute
             * from a file - it just won't be set. `attributes` should
             * be a comma-separated list of attributes or attribute wildcards.
             * The wildcard "*" means all attributes, and a wildcard like
             * "standard::*" means all attributes in the standard namespace.
             * An example attribute query be "standard::*,owner::user".
             * The standard attributes are available as defines, like
             * %G_FILE_ATTRIBUTE_STANDARD_NAME. %G_FILE_ATTRIBUTE_STANDARD_NAME should
             * always be specified if you plan to call g_file_enumerator_get_child() or
             * g_file_enumerator_iterate() on the returned enumerator.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
             * be returned. If the file is not a directory, the %G_IO_ERROR_NOT_DIRECTORY
             * error will be returned. Other errors are possible too.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_enumerate_children(
                attributes: string,
                flags: Gio.FileQueryInfoFlags,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileEnumerator;
            /**
             * Asynchronously gets the requested information about the files
             * in a directory. The result is a #GFileEnumerator object that will
             * give out #GFileInfo objects for all the files in the directory.
             *
             * For more details, see g_file_enumerate_children() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_enumerate_children_finish() to get the result of
             * the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_enumerate_children_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an async enumerate children operation.
             * See g_file_enumerate_children_async().
             * @param res a #GAsyncResult
             */
            vfunc_enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator;
            /**
             * Checks if the two given #GFiles refer to the same file.
             *
             * Note that two #GFiles that differ can still refer to the same
             * file on the filesystem due to various forms of filename
             * aliasing.
             *
             * This call does no blocking I/O.
             * @param file2 the second #GFile
             */
            vfunc_equal(file2: Gio.File): boolean;
            /**
             * Gets a #GMount for the #GFile.
             *
             * #GMount is returned only for user interesting locations, see
             * #GVolumeMonitor. If the #GFileIface for `file` does not have a #mount,
             * `error` will be set to %G_IO_ERROR_NOT_FOUND and %NULL #will be returned.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount;
            /**
             * Asynchronously gets the mount for the file.
             *
             * For more details, see g_file_find_enclosing_mount() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_find_enclosing_mount_finish() to
             * get the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_find_enclosing_mount_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous find mount request.
             * See g_file_find_enclosing_mount_async().
             * @param res a #GAsyncResult
             */
            vfunc_find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount;
            /**
             * Gets the base name (the last component of the path) for a given #GFile.
             *
             * If called for the top level of a system (such as the filesystem root
             * or a uri like sftp://host/) it will return a single directory separator
             * (and on Windows, possibly a drive letter).
             *
             * The base name is a byte string (not UTF-8). It has no defined encoding
             * or rules other than it may not contain zero bytes.  If you want to use
             * filenames in a user interface you should use the display name that you
             * can get by requesting the %G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME
             * attribute with g_file_query_info().
             *
             * This call does no blocking I/O.
             */
            vfunc_get_basename(): string | null;
            /**
             * Gets the child of `file` for a given `display_name` (i.e. a UTF-8
             * version of the name). If this function fails, it returns %NULL
             * and `error` will be set. This is very useful when constructing a
             * #GFile for a new file and the user entered the filename in the
             * user interface, for instance when you select a directory and
             * type a filename in the file selector.
             *
             * This call does no blocking I/O.
             * @param display_name string to a possible child
             */
            vfunc_get_child_for_display_name(display_name: string): Gio.File;
            /**
             * Gets the parent directory for the `file`.
             * If the `file` represents the root directory of the
             * file system, then %NULL will be returned.
             *
             * This call does no blocking I/O.
             */
            vfunc_get_parent(): Gio.File | null;
            /**
             * Gets the parse name of the `file`.
             * A parse name is a UTF-8 string that describes the
             * file such that one can get the #GFile back using
             * g_file_parse_name().
             *
             * This is generally used to show the #GFile as a nice
             * full-pathname kind of string in a user interface,
             * like in a location entry.
             *
             * For local files with names that can safely be converted
             * to UTF-8 the pathname is used, otherwise the IRI is used
             * (a form of URI that allows UTF-8 characters unescaped).
             *
             * This call does no blocking I/O.
             */
            vfunc_get_parse_name(): string;
            /**
             * Gets the local pathname for #GFile, if one exists. If non-%NULL, this is
             * guaranteed to be an absolute, canonical path. It might contain symlinks.
             *
             * This call does no blocking I/O.
             */
            vfunc_get_path(): string | null;
            /**
             * Gets the path for `descendant` relative to `parent`.
             *
             * This call does no blocking I/O.
             * @param descendant input #GFile
             */
            vfunc_get_relative_path(descendant: Gio.File): string | null;
            /**
             * Gets the URI for the `file`.
             *
             * This call does no blocking I/O.
             */
            vfunc_get_uri(): string;
            /**
             * Gets the URI scheme for a #GFile.
             * RFC 3986 decodes the scheme as:
             *
             * ```
             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
             * ```
             *
             * Common schemes include "file", "http", "ftp", etc.
             *
             * The scheme can be different from the one used to construct the #GFile,
             * in that it might be replaced with one that is logically equivalent to the #GFile.
             *
             * This call does no blocking I/O.
             */
            vfunc_get_uri_scheme(): string | null;
            /**
             * Checks to see if a #GFile has a given URI scheme.
             *
             * This call does no blocking I/O.
             * @param uri_scheme a string containing a URI scheme
             */
            vfunc_has_uri_scheme(uri_scheme: string): boolean;
            /**
             * Creates a hash value for a #GFile.
             *
             * This call does no blocking I/O.
             */
            vfunc_hash(): number;
            /**
             * Checks to see if a file is native to the platform.
             *
             * A native file is one expressed in the platform-native filename format,
             * e.g. "C:\Windows" or "/usr/bin/". This does not mean the file is local,
             * as it might be on a locally mounted remote filesystem.
             *
             * On some systems non-native files may be available using the native
             * filesystem via a userspace filesystem (FUSE), in these cases this call
             * will return %FALSE, but g_file_get_path() will still return a native path.
             *
             * This call does no blocking I/O.
             */
            vfunc_is_native(): boolean;
            /**
             * Creates a directory. Note that this will only create a child directory
             * of the immediate parent directory of the path or URI given by the #GFile.
             * To recursively create directories, see g_file_make_directory_with_parents().
             * This function will fail if the parent directory does not exist, setting
             * `error` to %G_IO_ERROR_NOT_FOUND. If the file system doesn't support
             * creating directories, this function will fail, setting `error` to
             * %G_IO_ERROR_NOT_SUPPORTED.
             *
             * For a local #GFile the newly created directory will have the default
             * (current) ownership and permissions of the current process.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_make_directory(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously creates a directory.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            vfunc_make_directory_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous directory creation, started with
             * g_file_make_directory_async().
             * @param result a #GAsyncResult
             */
            vfunc_make_directory_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a symbolic link named `file` which contains the string
             * `symlink_value`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param symlink_value a string with the path for the target   of the new symlink
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously creates a symbolic link named `file` which contains the
             * string `symlink_value`.
             * @param symlink_value a string with the path for the target   of the new symlink
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            vfunc_make_symbolic_link_async(
                symlink_value: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous symbolic link creation, started with
             * g_file_make_symbolic_link_async().
             * @param result a #GAsyncResult
             */
            vfunc_make_symbolic_link_finish(result: Gio.AsyncResult): boolean;
            /**
             * Recursively measures the disk usage of `file`.
             *
             * This is essentially an analog of the 'du' command, but it also
             * reports the number of directories and non-directory files encountered
             * (including things like symbolic links).
             *
             * By default, errors are only reported against the toplevel file
             * itself.  Errors found while recursing are silently ignored, unless
             * %G_FILE_MEASURE_REPORT_ANY_ERROR is given in `flags`.
             *
             * The returned size, `disk_usage,` is in bytes and should be formatted
             * with g_format_size() in order to get something reasonable for showing
             * in a user interface.
             *
             * `progress_callback` and `progress_data` can be given to request
             * periodic progress updates while scanning.  See the documentation for
             * #GFileMeasureProgressCallback for information about when and how the
             * callback will be invoked.
             * @param flags #GFileMeasureFlags
             * @param cancellable optional #GCancellable
             * @param progress_callback a #GFileMeasureProgressCallback
             */
            vfunc_measure_disk_usage(
                flags: Gio.FileMeasureFlags,
                cancellable: Gio.Cancellable | null,
                progress_callback: Gio.FileMeasureProgressCallback | null,
            ): [boolean, number, number, number];
            /**
             * Collects the results from an earlier call to
             * g_file_measure_disk_usage_async().  See g_file_measure_disk_usage() for
             * more information.
             * @param result the #GAsyncResult passed to your #GAsyncReadyCallback
             */
            vfunc_measure_disk_usage_finish(result: Gio.AsyncResult): [boolean, number, number, number];
            /**
             * Obtains a directory monitor for the given file.
             * This may fail if directory monitoring is not supported.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * It does not make sense for `flags` to contain
             * %G_FILE_MONITOR_WATCH_HARD_LINKS, since hard links can not be made to
             * directories.  It is not possible to monitor all the files in a
             * directory for changes made via hard links; if you want to do this then
             * you must register individual watches with g_file_monitor().
             * @param flags a set of #GFileMonitorFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_monitor_dir(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
            /**
             * Obtains a file monitor for the given file. If no file notification
             * mechanism exists, then regular polling of the file is used.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `flags` contains %G_FILE_MONITOR_WATCH_HARD_LINKS then the monitor
             * will also attempt to report changes made to the file via another
             * filename (ie, a hard link). Without this flag, you can only rely on
             * changes made through the filename contained in `file` to be
             * reported. Using this flag may result in an increase in resource
             * usage, and may not have any effect depending on the #GFileMonitor
             * backend and/or filesystem type.
             * @param flags a set of #GFileMonitorFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
            /**
             * Starts a `mount_operation,` mounting the volume that contains
             * the file `location`.
             *
             * When this operation has completed, `callback` will be called with
             * `user_user` data, and the operation can be finalized with
             * g_file_mount_enclosing_volume_finish().
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            vfunc_mount_enclosing_volume(
                flags: Gio.MountMountFlags,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a mount operation started by g_file_mount_enclosing_volume().
             * @param result a #GAsyncResult
             */
            vfunc_mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean;
            /**
             * Mounts a file of type G_FILE_TYPE_MOUNTABLE.
             * Using `mount_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_mount_mountable(
                flags: Gio.MountMountFlags,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a mount operation. See g_file_mount_mountable() for details.
             *
             * Finish an asynchronous mount operation that was started
             * with g_file_mount_mountable().
             * @param result a #GAsyncResult
             */
            vfunc_mount_mountable_finish(result: Gio.AsyncResult): Gio.File;
            /**
             * Tries to move the file or directory `source` to the location specified
             * by `destination`. If native move operations are supported then this is
             * used, otherwise a copy + delete fallback is used. The native
             * implementation may support moving directories (for instance on moves
             * inside the same filesystem), but the fallback code does not.
             *
             * If the flag %G_FILE_COPY_OVERWRITE is specified an already
             * existing `destination` file is overwritten.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If `progress_callback` is not %NULL, then the operation can be monitored
             * by setting this to a #GFileProgressCallback function.
             * `progress_callback_data` will be passed to this function. It is
             * guaranteed that this callback will be called after all data has been
             * transferred with the total number of bytes copied during the operation.
             *
             * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND
             * error is returned, independent on the status of the `destination`.
             *
             * If %G_FILE_COPY_OVERWRITE is not specified and the target exists,
             * then the error %G_IO_ERROR_EXISTS is returned.
             *
             * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error is returned. If trying to overwrite a directory with a directory the
             * %G_IO_ERROR_WOULD_MERGE error is returned.
             *
             * If the source is a directory and the target does not exist, or
             * %G_FILE_COPY_OVERWRITE is specified and the target is a file, then
             * the %G_IO_ERROR_WOULD_RECURSE error may be returned (if the native
             * move operation isn't available).
             * @param destination #GFile pointing to the destination location
             * @param flags set of #GFileCopyFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback #GFileProgressCallback   function for updates
             */
            vfunc_move(
                destination: Gio.File,
                flags: Gio.FileCopyFlags,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
            ): boolean;
            /**
             * Asynchronously moves a file `source` to the location of `destination`. For details of the behaviour, see g_file_move().
             *
             * If `progress_callback` is not %NULL, then that function that will be called
             * just like in g_file_move(). The callback will run in the default main context
             * of the thread calling g_file_move_async() — the same context as `callback` is
             * run in.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * g_file_move_finish() to get the result of the operation.
             * @param destination #GFile pointing to the destination location
             * @param flags set of #GFileCopyFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param progress_callback #GFileProgressCallback function for updates
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_move_async(
                destination: Gio.File,
                flags: Gio.FileCopyFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file movement, started with
             * g_file_move_async().
             * @param result a #GAsyncResult
             */
            vfunc_move_finish(result: Gio.AsyncResult): boolean;
            /**
             * Opens an existing file for reading and writing. The result is
             * a #GFileIOStream that can be used to read and write the contents
             * of the file.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
             * be returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error will be returned. Other errors are possible too, and depend on
             * what kind of filesystem the file is on. Note that in many non-local
             * file cases read and write streams are not supported, so make sure you
             * really need to do read and write streaming, rather than just opening
             * for reading or writing.
             * @param cancellable a #GCancellable
             */
            vfunc_open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream;
            /**
             * Asynchronously opens `file` for reading and writing.
             *
             * For more details, see g_file_open_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_open_readwrite_finish() to get
             * the result of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_open_readwrite_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file read operation started with
             * g_file_open_readwrite_async().
             * @param res a #GAsyncResult
             */
            vfunc_open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
            /**
             * Polls a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            vfunc_poll_mountable(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a poll operation. See g_file_poll_mountable() for details.
             *
             * Finish an asynchronous poll operation that was polled
             * with g_file_poll_mountable().
             * @param result a #GAsyncResult
             */
            vfunc_poll_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks whether `file` has the prefix specified by `prefix`.
             *
             * In other words, if the names of initial elements of `file'`s
             * pathname match `prefix`. Only full pathname elements are matched,
             * so a path like /foo is not considered a prefix of /foobar, only
             * of /foo/bar.
             *
             * A #GFile is not a prefix of itself. If you want to check for
             * equality, use g_file_equal().
             *
             * This call does no I/O, as it works purely on names. As such it can
             * sometimes return %FALSE even if `file` is inside a `prefix` (from a
             * filesystem point of view), because the prefix of `file` is an alias
             * of `prefix`.
             * @param file input #GFile
             */
            vfunc_prefix_matches(file: Gio.File): boolean;
            /**
             * Similar to g_file_query_info(), but obtains information
             * about the filesystem the `file` is on, rather than the file itself.
             * For instance the amount of space available and the type of
             * the filesystem.
             *
             * The `attributes` value is a string that specifies the attributes
             * that should be gathered. It is not an error if it's not possible
             * to read a particular requested attribute from a file - it just
             * won't be set. `attributes` should be a comma-separated list of
             * attributes or attribute wildcards. The wildcard "*" means all
             * attributes, and a wildcard like "filesystem::*" means all attributes
             * in the filesystem namespace. The standard namespace for filesystem
             * attributes is "filesystem". Common attributes of interest are
             * %G_FILE_ATTRIBUTE_FILESYSTEM_SIZE (the total size of the filesystem
             * in bytes), %G_FILE_ATTRIBUTE_FILESYSTEM_FREE (number of bytes available),
             * and %G_FILE_ATTRIBUTE_FILESYSTEM_TYPE (type of the filesystem).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
             * be returned. Other errors are possible too, and depend on what
             * kind of filesystem the file is on.
             * @param attributes an attribute query string
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo;
            /**
             * Asynchronously gets the requested information about the filesystem
             * that the specified `file` is on. The result is a #GFileInfo object
             * that contains key-value attributes (such as type or size for the
             * file).
             *
             * For more details, see g_file_query_filesystem_info() which is the
             * synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the
             * operation.
             * @param attributes an attribute query string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_query_filesystem_info_async(
                attributes: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous filesystem info query.
             * See g_file_query_filesystem_info_async().
             * @param res a #GAsyncResult
             */
            vfunc_query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
            /**
             * Gets the requested information about specified `file`.
             * The result is a #GFileInfo object that contains key-value
             * attributes (such as the type or size of the file).
             *
             * The `attributes` value is a string that specifies the file
             * attributes that should be gathered. It is not an error if
             * it's not possible to read a particular requested attribute
             * from a file - it just won't be set. `attributes` should be a
             * comma-separated list of attributes or attribute wildcards.
             * The wildcard "*" means all attributes, and a wildcard like
             * "standard::*" means all attributes in the standard namespace.
             * An example attribute query be "standard::*,owner::user".
             * The standard attributes are available as defines, like
             * %G_FILE_ATTRIBUTE_STANDARD_NAME.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * For symlinks, normally the information about the target of the
             * symlink is returned, rather than information about the symlink
             * itself. However if you pass %G_FILE_QUERY_INFO_NOFOLLOW_SYMLINKS
             * in `flags` the information about the symlink itself will be returned.
             * Also, for symlinks that point to non-existing files the information
             * about the symlink itself will be returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
             * returned. Other errors are possible too, and depend on what kind of
             * filesystem the file is on.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_query_info(
                attributes: string,
                flags: Gio.FileQueryInfoFlags,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileInfo;
            /**
             * Asynchronously gets the requested information about specified `file`.
             * The result is a #GFileInfo object that contains key-value attributes
             * (such as type or size for the file).
             *
             * For more details, see g_file_query_info() which is the synchronous
             * version of this call.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call g_file_query_info_finish() to get the result of the operation.
             * @param attributes an attribute query string
             * @param flags a set of #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_query_info_async(
                attributes: string,
                flags: Gio.FileQueryInfoFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file info query.
             * See g_file_query_info_async().
             * @param res a #GAsyncResult
             */
            vfunc_query_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
            /**
             * Obtain the list of settable attributes for the file.
             *
             * Returns the type and full attribute name of all the attributes
             * that can be set on this file. This doesn't mean setting it will
             * always succeed though, you might get an access failure, or some
             * specific file may not support a specific attribute.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;
            /**
             * Obtain the list of attribute namespaces where new attributes
             * can be created by a user. An example of this is extended
             * attributes (in the "xattr" namespace).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;
            /**
             * Asynchronously opens `file` for reading.
             *
             * For more details, see g_file_read() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_read_finish() to get the result
             * of the operation.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_read_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file read operation started with
             * g_file_read_async().
             * @param res a #GAsyncResult
             */
            vfunc_read_finish(res: Gio.AsyncResult): Gio.FileInputStream;
            /**
             * Opens a file for reading. The result is a #GFileInputStream that
             * can be used to read the contents of the file.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
             * returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
             * error will be returned. Other errors are possible too, and depend
             * on what kind of filesystem the file is on.
             * @param cancellable a #GCancellable
             */
            vfunc_read_fn(cancellable?: Gio.Cancellable | null): Gio.FileInputStream;
            /**
             * Returns an output stream for overwriting the file, possibly
             * creating a backup copy of the file first. If the file doesn't exist,
             * it will be created.
             *
             * This will try to replace the file in the safest way possible so
             * that any errors during the writing will not affect an already
             * existing copy of the file. For instance, for local files it
             * may write to a temporary file and then atomically rename over
             * the destination when the stream is closed.
             *
             * By default files created are generally readable by everyone,
             * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
             * will be made readable only to the current user, to the level that
             * is supported on the target filesystem.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled
             * by triggering the cancellable object from another thread. If the
             * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
             * returned.
             *
             * If you pass in a non-%NULL `etag` value and `file` already exists, then
             * this value is compared to the current entity tag of the file, and if
             * they differ an %G_IO_ERROR_WRONG_ETAG error is returned. This
             * generally means that the file has been changed since you last read
             * it. You can get the new etag from g_file_output_stream_get_etag()
             * after you've finished writing and closed the #GFileOutputStream. When
             * you load a new file you can use g_file_input_stream_query_info() to
             * get the etag of the file.
             *
             * If `make_backup` is %TRUE, this function will attempt to make a
             * backup of the current file before overwriting it. If this fails
             * a %G_IO_ERROR_CANT_CREATE_BACKUP error will be returned. If you
             * want to replace anyway, try again with `make_backup` set to %FALSE.
             *
             * If the file is a directory the %G_IO_ERROR_IS_DIRECTORY error will
             * be returned, and if the file is some other form of non-regular file
             * then a %G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some
             * file systems don't allow all file names, and may return an
             * %G_IO_ERROR_INVALID_FILENAME error, and if the name is to long
             * %G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are
             * possible too, and depend on what kind of filesystem the file is on.
             * @param etag an optional [entity tag](#entity-tags)   for the current #GFile, or #NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_replace(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileOutputStream;
            /**
             * Asynchronously overwrites the file, replacing the contents,
             * possibly creating a backup copy of the file first.
             *
             * For more details, see g_file_replace() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_finish() to get the result
             * of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_replace_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file replace operation started with
             * g_file_replace_async().
             * @param res a #GAsyncResult
             */
            vfunc_replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
            /**
             * Returns an output stream for overwriting the file in readwrite mode,
             * possibly creating a backup copy of the file first. If the file doesn't
             * exist, it will be created.
             *
             * For details about the behaviour, see g_file_replace() which does the
             * same thing but returns an output stream only.
             *
             * Note that in many non-local file cases read and write streams are not
             * supported, so make sure you really need to do read and write streaming,
             * rather than just opening for reading or writing.
             * @param etag an optional [entity tag](#entity-tags)   for the current #GFile, or #NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_replace_readwrite(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags,
                cancellable?: Gio.Cancellable | null,
            ): Gio.FileIOStream;
            /**
             * Asynchronously overwrites the file in read-write mode,
             * replacing the contents, possibly creating a backup copy
             * of the file first.
             *
             * For more details, see g_file_replace_readwrite() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_replace_readwrite_finish() to get
             * the result of the operation.
             * @param etag an [entity tag](#entity-tags) for the current #GFile,   or %NULL to ignore
             * @param make_backup %TRUE if a backup should be created
             * @param flags a set of #GFileCreateFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_replace_readwrite_async(
                etag: string | null,
                make_backup: boolean,
                flags: Gio.FileCreateFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file replace operation started with
             * g_file_replace_readwrite_async().
             * @param res a #GAsyncResult
             */
            vfunc_replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
            /**
             * Resolves a relative path for `file` to an absolute path.
             *
             * This call does no blocking I/O.
             *
             * If the `relative_path` is an absolute path name, the resolution
             * is done absolutely (without taking `file` path as base).
             * @param relative_path a given relative path string
             */
            vfunc_resolve_relative_path(relative_path: string): Gio.File;
            /**
             * Sets an attribute in the file with attribute name `attribute` to `value_p`.
             *
             * Some attributes can be unset by setting `type` to
             * %G_FILE_ATTRIBUTE_TYPE_INVALID and `value_p` to %NULL.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param attribute a string containing the attribute's name
             * @param type The type of the attribute
             * @param value_p a pointer to the value (or the pointer   itself if the type is a pointer type)
             * @param flags a set of #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_set_attribute(
                attribute: string,
                type: Gio.FileAttributeType,
                value_p: any | null,
                flags: Gio.FileQueryInfoFlags,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously sets the attributes of `file` with `info`.
             *
             * For more details, see g_file_set_attributes_from_info(),
             * which is the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_attributes_finish() to get
             * the result of the operation.
             * @param info a #GFileInfo
             * @param flags a #GFileQueryInfoFlags
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_set_attributes_async(
                info: Gio.FileInfo,
                flags: Gio.FileQueryInfoFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes setting an attribute started in g_file_set_attributes_async().
             * @param result a #GAsyncResult
             */
            vfunc_set_attributes_finish(result: Gio.AsyncResult): [boolean, Gio.FileInfo];
            /**
             * Tries to set all attributes in the #GFileInfo on the target
             * values, not stopping on the first error.
             *
             * If there is any error during this operation then `error` will
             * be set to the first error. Error on particular fields are flagged
             * by setting the "status" field in the attribute value to
             * %G_FILE_ATTRIBUTE_STATUS_ERROR_SETTING, which means you can
             * also detect further errors.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param info a #GFileInfo
             * @param flags #GFileQueryInfoFlags
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_set_attributes_from_info(
                info: Gio.FileInfo,
                flags: Gio.FileQueryInfoFlags,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Renames `file` to the specified display name.
             *
             * The display name is converted from UTF-8 to the correct encoding
             * for the target filesystem if possible and the `file` is renamed to this.
             *
             * If you want to implement a rename operation in the user interface the
             * edit name (%G_FILE_ATTRIBUTE_STANDARD_EDIT_NAME) should be used as the
             * initial value in the rename widget, and then the result after editing
             * should be passed to g_file_set_display_name().
             *
             * On success the resulting converted filename is returned.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param display_name a string
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File;
            /**
             * Asynchronously sets the display name for a given #GFile.
             *
             * For more details, see g_file_set_display_name() which is
             * the synchronous version of this call.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_set_display_name_finish() to get
             * the result of the operation.
             * @param display_name a string
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_set_display_name_async(
                display_name: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes setting a display name started with
             * g_file_set_display_name_async().
             * @param res a #GAsyncResult
             */
            vfunc_set_display_name_finish(res: Gio.AsyncResult): Gio.File;
            /**
             * Starts a file of type %G_FILE_TYPE_MOUNTABLE.
             * Using `start_operation,` you can request callbacks when, for instance,
             * passwords are needed during authentication.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_mount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param start_operation a #GMountOperation, or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied, or %NULL
             */
            vfunc_start_mountable(
                flags: Gio.DriveStartFlags,
                start_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a start operation. See g_file_start_mountable() for details.
             *
             * Finish an asynchronous start operation that was started
             * with g_file_start_mountable().
             * @param result a #GAsyncResult
             */
            vfunc_start_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stops a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_stop_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
             */
            vfunc_stop_mountable(
                flags: Gio.MountUnmountFlags,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stop operation, see g_file_stop_mountable() for details.
             *
             * Finish an asynchronous stop operation that was started
             * with g_file_stop_mountable().
             * @param result a #GAsyncResult
             */
            vfunc_stop_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sends `file` to the "Trashcan", if possible. This is similar to
             * deleting it, but the user can recover it before emptying the trashcan.
             * Trashing is disabled for system mounts by default (see
             * g_unix_mount_is_system_internal()), so this call can return the
             * %G_IO_ERROR_NOT_SUPPORTED error. Since GLib 2.66, the `x-gvfs-notrash` unix
             * mount option can be used to disable g_file_trash() support for particular
             * mounts, the %G_IO_ERROR_NOT_SUPPORTED error will be returned in that case.
             * Since 2.82, the `x-gvfs-trash` unix mount option can be used to enable
             * g_file_trash() support for particular system mounts.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             */
            vfunc_trash(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously sends `file` to the Trash location, if possible.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
             */
            vfunc_trash_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous file trashing operation, started with
             * g_file_trash_async().
             * @param result a #GAsyncResult
             */
            vfunc_trash_finish(result: Gio.AsyncResult): boolean;
            /**
             * Unmounts a file of type G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_unmount_mountable(
                flags: Gio.MountUnmountFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an unmount operation, see g_file_unmount_mountable() for details.
             *
             * Finish an asynchronous unmount operation that was started
             * with g_file_unmount_mountable().
             * @param result a #GAsyncResult
             */
            vfunc_unmount_mountable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Unmounts a file of type %G_FILE_TYPE_MOUNTABLE.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_file_unmount_mountable_finish() to get
             * the result of the operation.
             * @param flags flags affecting the operation
             * @param mount_operation a #GMountOperation,   or %NULL to avoid user interaction
             * @param cancellable optional #GCancellable object,   %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_unmount_mountable_with_operation(
                flags: Gio.MountUnmountFlags,
                mount_operation?: Gio.MountOperation | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an unmount operation,
             * see g_file_unmount_mountable_with_operation() for details.
             *
             * Finish an asynchronous unmount operation that was started
             * with g_file_unmount_mountable_with_operation().
             * @param result a #GAsyncResult
             */
            vfunc_unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
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

        module RepoFinderAvahi {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {}
        }

        class RepoFinderAvahi extends GObject.Object implements RepoFinder {
            static $gtype: GObject.GType<RepoFinderAvahi>;

            // Constructors

            constructor(properties?: Partial<RepoFinderAvahi.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context?: GLib.MainContext | null): RepoFinderAvahi;

            // Methods

            /**
             * Start monitoring the local network for peers who are advertising OSTree
             * repositories, using Avahi. In order for this to work, the #GMainContext
             * passed to `self` at construction time must be iterated (so it will typically
             * be the global #GMainContext, or be a separate #GMainContext in a worker
             * thread).
             *
             * This will return an error (%G_IO_ERROR_FAILED) if initialisation fails, or if
             * Avahi support is not available (%G_IO_ERROR_NOT_SUPPORTED). In either case,
             * the #OstreeRepoFinderAvahi instance is useless afterwards and should be
             * destroyed.
             *
             * Call ostree_repo_finder_avahi_stop() to stop the repo finder.
             *
             * It is an error to call this function multiple times on the same
             * #OstreeRepoFinderAvahi instance, or to call it after
             * ostree_repo_finder_avahi_stop().
             */
            start(): void;
            /**
             * Stop monitoring the local network for peers who are advertising OSTree
             * repositories. If any resolve tasks (from ostree_repo_finder_resolve_async())
             * are in progress, they will be cancelled and will return %G_IO_ERROR_CANCELLED.
             *
             * Call ostree_repo_finder_avahi_start() to start the repo finder.
             *
             * It is an error to call this function multiple times on the same
             * #OstreeRepoFinderAvahi instance, or to call it before
             * ostree_repo_finder_avahi_start().
             */
            stop(): void;

            // Inherited methods
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
            ): Promise<RepoFinderResult[]>;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<RepoFinderResult[]> | void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             * @returns array of zero    or more results
             */
            resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            vfunc_resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             */
            vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
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

        module RepoFinderConfig {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {}
        }

        class RepoFinderConfig extends GObject.Object implements RepoFinder {
            static $gtype: GObject.GType<RepoFinderConfig>;

            // Constructors

            constructor(properties?: Partial<RepoFinderConfig.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): RepoFinderConfig;

            // Inherited methods
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
            ): Promise<RepoFinderResult[]>;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<RepoFinderResult[]> | void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             * @returns array of zero    or more results
             */
            resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            vfunc_resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             */
            vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
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

        module RepoFinderMount {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {
                monitor: Gio.VolumeMonitor;
            }
        }

        class RepoFinderMount extends GObject.Object implements RepoFinder {
            static $gtype: GObject.GType<RepoFinderMount>;

            // Properties

            /**
             * Volume monitor to use to look up mounted volumes when queried.
             */
            get monitor(): Gio.VolumeMonitor;

            // Constructors

            constructor(properties?: Partial<RepoFinderMount.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](monitor?: Gio.VolumeMonitor | null): RepoFinderMount;

            // Inherited methods
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
            ): Promise<RepoFinderResult[]>;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<RepoFinderResult[]> | void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             * @returns array of zero    or more results
             */
            resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            vfunc_resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             */
            vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
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

        module RepoFinderOverride {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {}
        }

        class RepoFinderOverride extends GObject.Object implements RepoFinder {
            static $gtype: GObject.GType<RepoFinderOverride>;

            // Constructors

            constructor(properties?: Partial<RepoFinderOverride.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): RepoFinderOverride;

            // Methods

            /**
             * Add the given `uri` to the set of URIs which the repo finder will search for
             * matching refs when ostree_repo_finder_resolve_async() is called on it.
             * @param uri URI to add to the repo finder
             */
            add_uri(uri: string): void;

            // Inherited methods
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
            ): Promise<RepoFinderResult[]>;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<RepoFinderResult[]> | void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             * @returns array of zero    or more results
             */
            resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            vfunc_resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             */
            vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
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

        module SePolicy {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                path: Gio.File;
                rootfs_dfd: number;
                rootfsDfd: number;
            }
        }

        class SePolicy extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<SePolicy>;

            // Properties

            get path(): Gio.File;
            get rootfs_dfd(): number;
            get rootfsDfd(): number;

            // Constructors

            constructor(properties?: Partial<SePolicy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy;

            static new_at(rootfs_dfd: number, cancellable?: Gio.Cancellable | null): SePolicy;

            static new_from_commit(repo: Repo, rev: string, cancellable?: Gio.Cancellable | null): SePolicy;

            // Static methods

            /**
             * Cleanup function for ostree_sepolicy_setfscreatecon().
             * @param unused Not used, just in case you didn't infer that from the parameter name
             */
            static fscreatecon_cleanup(unused?: any | null): void;

            // Methods

            get_csum(): string | null;
            /**
             * Store in `out_label` the security context for the given `relpath` and
             * mode `unix_mode`.  If the policy does not specify a label, %NULL
             * will be returned.
             * @param relpath Path
             * @param unix_mode Unix mode
             * @param cancellable Cancellable
             */
            get_label(relpath: string, unix_mode: number, cancellable?: Gio.Cancellable | null): [boolean, string];
            get_name(): string | null;
            /**
             * This API should be considered deprecated, because it's supported for
             * policy objects to be created from file-descriptor relative paths, which
             * may not be globally accessible.
             * @returns Path to rootfs
             */
            get_path(): Gio.File | null;
            /**
             * Reset the security context of `target` based on the SELinux policy.
             * @param path Path string to use for policy lookup
             * @param info File attributes
             * @param target Physical path to target file
             * @param flags Flags controlling behavior
             * @param cancellable Cancellable
             */
            restorecon(
                path: string,
                info: Gio.FileInfo | null,
                target: Gio.File,
                flags: SePolicyRestoreconFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            setfscreatecon(path: string, mode: number): boolean;

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

        module Sysroot {
            // Signal callback interfaces

            interface JournalMsg {
                (msg: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                path: Gio.File;
            }
        }

        class Sysroot extends GObject.Object {
            static $gtype: GObject.GType<Sysroot>;

            // Properties

            get path(): Gio.File;

            // Constructors

            constructor(properties?: Partial<Sysroot.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](path?: Gio.File | null): Sysroot;

            static new_default(): Sysroot;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'journal-msg', callback: (_source: this, msg: string) => void): number;
            connect_after(signal: 'journal-msg', callback: (_source: this, msg: string) => void): number;
            emit(signal: 'journal-msg', msg: string): void;

            // Static methods

            static get_deployment_origin_path(deployment_path: Gio.File): Gio.File;

            // Methods

            /**
             * Given the target deployment (which must be the staged deployment) this API
             * will toggle its "finalization locking" state.  If it is currently locked,
             * it will be unlocked (and hence queued to apply on shutdown).
             * @param deployment Deployment which must be staged
             */
            change_finalization(deployment: Deployment): boolean;
            /**
             * Delete any state that resulted from a partially completed
             * transaction, such as incomplete deployments.
             * @param cancellable Cancellable
             */
            cleanup(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Prune the system repository.  This is a thin wrapper
             * around ostree_repo_prune_from_reachable(); the primary
             * addition is that this function automatically gathers
             * all deployed commits into the reachable set.
             *
             * You generally want to at least set the `OSTREE_REPO_PRUNE_FLAGS_REFS_ONLY`
             * flag in `options`.  A commit traversal depth of `0` is assumed.
             *
             * Locking: exclusive
             * @param options Flags controlling pruning
             * @param cancellable Cancellable
             */
            cleanup_prune_repo(
                options: RepoPruneOptions,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number, number, number];
            /**
             * Older version of ostree_sysroot_stage_tree_with_options().
             * @param osname osname to use for merge deployment
             * @param revision Checksum to add
             * @param origin Origin to use for upgrades
             * @param provided_merge_deployment Use this deployment for merge path
             * @param override_kernel_argv Use these as kernel arguments; if %NULL, inherit options from provided_merge_deployment
             * @param cancellable Cancellable
             */
            deploy_tree(
                osname: string | null,
                revision: string,
                origin: GLib.KeyFile | null,
                provided_merge_deployment: Deployment | null,
                override_kernel_argv: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Deployment];
            /**
             * Check out deployment tree with revision `revision,` performing a 3
             * way merge with `provided_merge_deployment` for configuration.
             *
             * When booted into the sysroot, you should use the
             * ostree_sysroot_stage_tree() API instead.
             * @param osname osname to use for merge deployment
             * @param revision Checksum to add
             * @param origin Origin to use for upgrades
             * @param provided_merge_deployment Use this deployment for merge path
             * @param opts Options
             * @param cancellable Cancellable
             */
            deploy_tree_with_options(
                osname: string | null,
                revision: string,
                origin: GLib.KeyFile | null,
                provided_merge_deployment: Deployment | null,
                opts: SysrootDeployTreeOpts | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Deployment];
            /**
             * Entirely replace the kernel arguments of `deployment` with the
             * values in `new_kargs`.
             * @param deployment A deployment
             * @param new_kargs Replace deployment's kernel arguments
             * @param cancellable Cancellable
             */
            deployment_set_kargs(
                deployment: Deployment,
                new_kargs: string[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Replace the kernel arguments of `deployment` with the values in `kargs_str`.
             * @param deployment A deployment
             * @param kargs_str Replace @deployment's kernel arguments
             * @param cancellable Cancellable
             */
            deployment_set_kargs_in_place(
                deployment: Deployment,
                kargs_str?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * By default, deployment directories are not mutable.  This function
             * will allow making them temporarily mutable, for example to allow
             * layering additional non-OSTree content.
             * @param deployment A deployment
             * @param is_mutable Whether or not deployment's files can be changed
             * @param cancellable Cancellable
             */
            deployment_set_mutable(
                deployment: Deployment,
                is_mutable: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * By default, deployments may be subject to garbage collection. Typical uses of
             * libostree only retain at most 2 deployments. If `is_pinned` is `TRUE`, a
             * metadata bit will be set causing libostree to avoid automatic GC of the
             * deployment. However, this is really an "advisory" note; it's still possible
             * for e.g. older versions of libostree unaware of pinning to GC the deployment.
             *
             * This function does nothing and returns successfully if the deployment
             * is already in the desired pinning state.  It is an error to try to pin
             * the staged deployment (as it's not in the bootloader entries).
             * @param deployment A deployment
             * @param is_pinned Whether or not deployment will be automatically GC'd
             */
            deployment_set_pinned(deployment: Deployment, is_pinned: boolean): boolean;
            /**
             * Configure the target deployment `deployment` such that it
             * is writable.  There are multiple modes, essentially differing
             * in whether or not any changes persist across reboot.
             *
             * The `OSTREE_DEPLOYMENT_UNLOCKED_HOTFIX` state is persistent
             * across reboots.
             * @param deployment Deployment
             * @param unlocked_state Transition to this unlocked state
             * @param cancellable Cancellable
             */
            deployment_unlock(
                deployment: Deployment,
                unlocked_state: DeploymentUnlockedState | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Ensure that `self` is set up as a valid rootfs, by creating
             * /ostree/repo, among other things.
             * @param cancellable Cancellable
             */
            ensure_initialized(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * This function may only be called if the sysroot is loaded.
             * @returns The currently booted deployment, or %NULL if none
             */
            get_booted_deployment(): Deployment | null;
            get_bootversion(): number;
            get_deployment_directory(deployment: Deployment): Gio.File;
            /**
             * Note this function only returns a *relative* path - if you want
             * to access, it, you must either use fd-relative api such as openat(),
             * or concatenate it with the full ostree_sysroot_get_path().
             * @param deployment A deployment
             * @returns Path to deployment root directory, relative to sysroot
             */
            get_deployment_dirpath(deployment: Deployment): string;
            get_deployments(): Deployment[];
            /**
             * Access a file descriptor that refers to the root directory of this sysroot.
             * ostree_sysroot_initialize() (or ostree_sysroot_load()) must have been invoked
             * prior to calling this function.
             * @returns A file descriptor valid for the lifetime of @self
             */
            get_fd(): number;
            /**
             * Find the deployment to use as a configuration merge source; this is
             * the first one in the current deployment list which matches osname.
             * @param osname Operating system group
             * @returns Configuration merge deployment
             */
            get_merge_deployment(osname?: string | null): Deployment | null;
            get_path(): Gio.File;
            /**
             * Retrieve the OSTree repository in sysroot `self`. The repo is guaranteed to be open
             * (see ostree_repo_open()).
             * @param cancellable Cancellable
             * @returns %TRUE on success, %FALSE otherwise
             */
            get_repo(cancellable?: Gio.Cancellable | null): [boolean, Repo | null];
            get_staged_deployment(): Deployment | null;
            get_subbootversion(): number;
            /**
             * Initialize the directory structure for an "osname", which is a
             * group of operating system deployments, with a shared `/var`.  One
             * is required for generating a deployment.
             * @param osname Name group of operating system checkouts
             * @param cancellable Cancellable
             */
            init_osname(osname: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Subset of ostree_sysroot_load(); performs basic initialization. Notably, one
             * can invoke `ostree_sysroot_get_fd()` after calling this function.
             *
             * It is not necessary to call this function if ostree_sysroot_load() is
             * invoked.
             */
            initialize(): boolean;
            /**
             * Prepare the current process for modifying a booted sysroot, if applicable.
             * This function subsumes the functionality of `ostree_sysroot_initialize`
             * and may be invoked wherever that function is.
             *
             * If the sysroot does not appear to be booted, or where the current process is not uid 0,
             * this function returns successfully.
             *
             * Otherwise, if the process is in the same mount namespace as pid 1, create
             * a new namespace.
             *
             * If you invoke this function, it must be before ostree_sysroot_load(); it may
             * be invoked before or after ostree_sysroot_initialize().
             * @param cancellable
             */
            initialize_with_mount_namespace(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Can only be invoked after `ostree_sysroot_initialize()`.
             * @returns %TRUE iff the sysroot points to a booted deployment
             */
            is_booted(): boolean;
            /**
             * Load deployment list, bootversion, and subbootversion from the
             * rootfs `self`.
             * @param cancellable Cancellable
             */
            load(cancellable?: Gio.Cancellable | null): boolean;
            load_if_changed(cancellable?: Gio.Cancellable | null): [boolean, boolean];
            /**
             * Acquire an exclusive multi-process write lock for `self`.  This call
             * blocks until the lock has been acquired.  The lock is not
             * reentrant.
             *
             * Release the lock with ostree_sysroot_unlock().  The lock will also
             * be released if `self` is deallocated.
             */
            lock(): boolean;
            /**
             * An asynchronous version of ostree_sysroot_lock().
             * @param cancellable Cancellable
             */
            lock_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * An asynchronous version of ostree_sysroot_lock().
             * @param cancellable Cancellable
             * @param callback Callback
             */
            lock_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * An asynchronous version of ostree_sysroot_lock().
             * @param cancellable Cancellable
             * @param callback Callback
             */
            lock_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Call when ostree_sysroot_lock_async() is ready.
             * @param result Result
             */
            lock_finish(result: Gio.AsyncResult): boolean;
            origin_new_from_refspec(refspec: string): GLib.KeyFile;
            /**
             * Like ostree_sysroot_cleanup() in that it cleans up incomplete deployments
             * and old boot versions, but does NOT prune the repository.
             * @param cancellable Cancellable
             */
            prepare_cleanup(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Find the pending and rollback deployments for `osname`. Pass %NULL for `osname`
             * to use the booted deployment's osname. By default, pending deployment is the
             * first deployment in the order that matches `osname,` and `rollback` will be the
             * next one after the booted deployment, or the deployment after the pending if
             * we're not looking at the booted deployment.
             * @param osname "stateroot" name
             */
            query_deployments_for(osname?: string | null): [Deployment | null, Deployment | null];
            /**
             * This function is a variant of ostree_sysroot_get_repo() that cannot fail, and
             * returns a cached repository. Can only be called after ostree_sysroot_initialize()
             * or ostree_sysroot_load() has been invoked successfully.
             * @returns The OSTree repository in sysroot @self.
             */
            repo(): Repo;
            /**
             * Find the booted deployment, or return an error if not booted via OSTree.
             * @returns The currently booted deployment, or an error
             */
            require_booted_deployment(): Deployment;
            /**
             * If this function is invoked, then libostree will assume that
             * a private Linux mount namespace has been created by the process.
             * The primary use case for this is to have e.g. /sysroot mounted
             * read-only by default.
             *
             * If this function has been called, then when a function which requires
             * writable access is invoked, libostree will automatically remount as writable
             * any mount points on which it operates.  This currently is just `/sysroot` and
             * `/boot`.
             *
             * If you invoke this function, it must be before ostree_sysroot_load(); it may
             * be invoked before or after ostree_sysroot_initialize().
             */
            set_mount_namespace_in_use(): void;
            /**
             * Prepend `new_deployment` to the list of deployments, commit, and
             * cleanup.  By default, all other deployments for the given `osname`
             * except the merge deployment and the booted deployment will be
             * garbage collected.
             *
             * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_RETAIN is
             * specified, then all current deployments will be kept.
             *
             * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_RETAIN_PENDING is
             * specified, then pending deployments will be kept.
             *
             * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_RETAIN_ROLLBACK is
             * specified, then rollback deployments will be kept.
             *
             * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_NOT_DEFAULT is
             * specified, then instead of prepending, the new deployment will be
             * added right after the booted or merge deployment, instead of first.
             *
             * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_NO_CLEAN is
             * specified, then no cleanup will be performed after adding the
             * deployment. Make sure to call ostree_sysroot_cleanup() sometime
             * later, instead.
             * @param osname OS name
             * @param new_deployment Prepend this deployment to the list
             * @param merge_deployment Use this deployment for configuration merge
             * @param flags Flags controlling behavior
             * @param cancellable Cancellable
             */
            simple_write_deployment(
                osname: string | null,
                new_deployment: Deployment,
                merge_deployment: Deployment | null,
                flags: SysrootSimpleWriteDeploymentFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Stage an overlay initrd to be used in an upcoming deployment. Returns a checksum which
             * can be passed to ostree_sysroot_deploy_tree_with_options() or
             * ostree_sysroot_stage_tree_with_options() via the `overlay_initrds` array option.
             * @param fd File descriptor to overlay initrd
             * @param cancellable Cancellable
             */
            stage_overlay_initrd(fd: number, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Older version of ostree_sysroot_stage_tree_with_options().
             * @param osname osname to use for merge deployment
             * @param revision Checksum to add
             * @param origin Origin to use for upgrades
             * @param merge_deployment Use this deployment for merge path
             * @param override_kernel_argv Use these as kernel arguments; if %NULL, inherit options from provided_merge_deployment
             * @param cancellable Cancellable
             */
            stage_tree(
                osname: string | null,
                revision: string,
                origin: GLib.KeyFile | null,
                merge_deployment: Deployment | null,
                override_kernel_argv: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Deployment];
            /**
             * Like ostree_sysroot_deploy_tree(), but "finalization" only occurs at OS
             * shutdown time.
             * @param osname osname to use for merge deployment
             * @param revision Checksum to add
             * @param origin Origin to use for upgrades
             * @param merge_deployment Use this deployment for merge path
             * @param opts Options
             * @param cancellable Cancellable
             */
            stage_tree_with_options(
                osname: string | null,
                revision: string,
                origin: GLib.KeyFile | null,
                merge_deployment: Deployment | null,
                opts: SysrootDeployTreeOpts,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Deployment];
            /**
             * Try to acquire an exclusive multi-process write lock for `self`.  If
             * another process holds the lock, this function will return
             * immediately, setting `out_acquired` to %FALSE, and returning %TRUE
             * (and no error).
             *
             * Release the lock with ostree_sysroot_unlock().  The lock will also
             * be released if `self` is deallocated.
             */
            try_lock(): [boolean, boolean];
            /**
             * Release any resources such as file descriptors referring to the
             * root directory of this sysroot.  Normally, those resources are
             * cleared by finalization, but in garbage collected languages that
             * may not be predictable.
             *
             * This undoes the effect of `ostree_sysroot_load()`.
             */
            unload(): void;
            /**
             * Clear the lock previously acquired with ostree_sysroot_lock().  It
             * is safe to call this function if the lock has not been previously
             * acquired.
             */
            unlock(): void;
            /**
             * Update a sysroot as needed after having copied it into place using file-level
             * operations. This enables options like fs-verity on the required files that may
             * have been lost during the copy.
             * @param cancellable
             */
            update_post_copy(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Older version of ostree_sysroot_write_deployments_with_options(). This
             * version will perform post-deployment cleanup by default.
             * @param new_deployments List of new deployments
             * @param cancellable Cancellable
             */
            write_deployments(new_deployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Assuming `new_deployments` have already been deployed in place on disk via
             * ostree_sysroot_deploy_tree(), atomically update bootloader configuration. By
             * default, no post-transaction cleanup will be performed. You should invoke
             * ostree_sysroot_cleanup() at some point after the transaction, or specify
             * `do_postclean` in `opts`.  Skipping the post-transaction cleanup is useful
             * if for example you want to control pruning of the repository.
             * @param new_deployments List of new deployments
             * @param opts Options
             * @param cancellable Cancellable
             */
            write_deployments_with_options(
                new_deployments: Deployment[],
                opts: SysrootWriteDeploymentsOpts,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Immediately replace the origin file of the referenced `deployment`
             * with the contents of `new_origin`.  If `new_origin` is %NULL,
             * this function will write the current origin of `deployment`.
             * @param deployment Deployment
             * @param new_origin Origin content
             * @param cancellable Cancellable
             */
            write_origin_file(
                deployment: Deployment,
                new_origin?: GLib.KeyFile | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
        }

        module SysrootUpgrader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                flags: SysrootUpgraderFlags;
                osname: string;
                sysroot: Sysroot;
            }
        }

        class SysrootUpgrader extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<SysrootUpgrader>;

            // Properties

            get flags(): SysrootUpgraderFlags;
            get osname(): string;
            get sysroot(): Sysroot;

            // Constructors

            constructor(properties?: Partial<SysrootUpgrader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader;

            static new_for_os(
                sysroot: Sysroot,
                osname?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): SysrootUpgrader;

            static new_for_os_with_flags(
                sysroot: Sysroot,
                osname: string | null,
                flags: SysrootUpgraderFlags,
                cancellable?: Gio.Cancellable | null,
            ): SysrootUpgrader;

            // Static methods

            /**
             * Check that the timestamp on `to_rev` is equal to or newer than
             * `from_rev`.  This protects systems against man-in-the-middle
             * attackers which provide a client with an older commit.
             * @param repo Repo
             * @param from_rev From revision
             * @param to_rev To revision
             */
            static check_timestamps(repo: Repo, from_rev: string, to_rev: string): boolean;

            // Methods

            /**
             * Write the new deployment to disk, perform a configuration merge
             * with /etc, and update the bootloader configuration.
             * @param cancellable Cancellable
             */
            deploy(cancellable?: Gio.Cancellable | null): boolean;
            dup_origin(): GLib.KeyFile | null;
            get_origin(): GLib.KeyFile | null;
            get_origin_description(): string | null;
            /**
             * Perform a pull from the origin.  First check if the ref has
             * changed, if so download the linked objects, and store the updated
             * ref locally.  Then `out_changed` will be %TRUE.
             *
             * If the origin remote is unchanged, `out_changed` will be set to
             * %FALSE.
             * @param flags Flags controlling pull behavior
             * @param upgrader_flags Flags controlling upgrader behavior
             * @param progress Progress
             * @param cancellable Cancellable
             */
            pull(
                flags: RepoPullFlags | null,
                upgrader_flags: SysrootUpgraderPullFlags | null,
                progress: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, boolean];
            /**
             * Like ostree_sysroot_upgrader_pull(), but allows retrieving just a
             * subpath of the tree.  This can be used to download metadata files
             * from inside the tree such as package databases.
             * @param dir_to_pull Subdirectory path (should include a leading /)
             * @param flags Flags controlling pull behavior
             * @param upgrader_flags Flags controlling upgrader behavior
             * @param progress Progress
             * @param cancellable Cancellable
             */
            pull_one_dir(
                dir_to_pull: string,
                flags: RepoPullFlags | null,
                upgrader_flags: SysrootUpgraderPullFlags | null,
                progress: AsyncProgress | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, boolean];
            /**
             * Replace the origin with `origin`.
             * @param origin The new origin
             * @param cancellable Cancellable
             */
            set_origin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean;

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

        type AsyncProgressClass = typeof AsyncProgress;
        /**
         * A structure which globally uniquely identifies a ref as the tuple
         * (`collection_id,` `ref_name)`. For backwards compatibility, `collection_id` may be %NULL,
         * indicating a ref name which is not globally unique.
         */
        class CollectionRef {
            static $gtype: GObject.GType<CollectionRef>;

            // Fields

            collection_id: string;
            ref_name: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    collection_id: string;
                    ref_name: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](collection_id: string | null, ref_name: string): CollectionRef;

            // Static methods

            /**
             * Copy an array of #OstreeCollectionRefs, including deep copies of all its
             * elements. `refs` must be %NULL-terminated; it may be empty, but must not be
             * %NULL.
             * @param refs %NULL-terminated array of #OstreeCollectionRefs
             */
            static dupv(refs: CollectionRef[]): CollectionRef[];
            /**
             * Free the given array of `refs,` including freeing all its elements. `refs`
             * must be %NULL-terminated; it may be empty, but must not be %NULL.
             * @param refs an array of #OstreeCollectionRefs
             */
            static freev(refs: CollectionRef[]): void;

            // Methods

            /**
             * Create a copy of the given `ref`.
             * @returns a newly allocated copy of @ref
             */
            dup(): CollectionRef;
            /**
             * Compare `ref1` and `ref2` and return %TRUE if they have the same collection ID and
             * ref name, and %FALSE otherwise. Both `ref1` and `ref2` must be non-%NULL.
             * @param ref2 another #OstreeCollectionRef
             * @returns %TRUE if @ref1 and @ref2 are equal, %FALSE otherwise
             */
            equal(ref2: CollectionRef): boolean;
            /**
             * Free the given `ref`.
             */
            free(): void;
            /**
             * Hash the given `ref`. This function is suitable for use with #GHashTable.
             * `ref` must be non-%NULL.
             * @returns hash value for @ref
             */
            hash(): number;
        }

        /**
         * Structure representing an entry in the "ostree.sizes" commit metadata. Each
         * entry corresponds to an object in the associated commit.
         */
        class CommitSizesEntry {
            static $gtype: GObject.GType<CommitSizesEntry>;

            // Fields

            checksum: string;
            objtype: ObjectType;
            unpacked: number;
            archived: number;

            // Constructors

            constructor(checksum: string, objtype: ObjectType, unpacked: number, archived: number);
            _init(...args: any[]): void;

            static ['new'](checksum: string, objtype: ObjectType, unpacked: number, archived: number): CommitSizesEntry;

            // Methods

            /**
             * Create a copy of the given `entry`.
             * @returns a new copy of @entry
             */
            copy(): CommitSizesEntry | null;
            /**
             * Free given `entry`.
             */
            free(): void;
        }

        type ContentWriterClass = typeof ContentWriter;
        /**
         * An extensible options structure controlling diff dirs. Make sure
         * that owner_uid/gid is set to -1 when not used. This is used by
         * ostree_diff_dirs_with_options().
         */
        class DiffDirsOptions {
            static $gtype: GObject.GType<DiffDirsOptions>;

            // Fields

            owner_uid: number;
            owner_gid: number;
            unused_bools: boolean[];
            unused_ints: number[];
            unused_ptrs: any[];

            // Constructors

            _init(...args: any[]): void;
        }

        class DiffItem {
            static $gtype: GObject.GType<DiffItem>;

            // Fields

            refcount: number;
            src: Gio.File;
            target: Gio.File;
            src_info: Gio.FileInfo;
            target_info: Gio.FileInfo;
            src_checksum: string;
            target_checksum: string;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            ref(): DiffItem;
            unref(): void;
        }

        abstract class KernelArgs {
            static $gtype: GObject.GType<KernelArgs>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Frees the OstreeKernelArgs structure pointed by *loc
             * @param loc Address of an OstreeKernelArgs pointer
             */
            static cleanup(loc?: any | null): void;

            // Methods

            /**
             * Appends `arg` which is in the form of key=value pair to the hash table kargs->table
             * (appends to the value list if key is already in the hash table)
             * and appends key to kargs->order if it is not in the hash table already.
             * @param arg key or key/value pair to be added
             */
            append(arg: string): void;
            /**
             * Appends each value in `argv` to the corresponding value array and
             * appends key to kargs->order if it is not in the hash table already.
             * @param argv an array of key=value argument pairs
             */
            append_argv(argv: string[]): void;
            /**
             * Appends each argument that does not have one of the `prefixes` as prefix to the `kargs`
             * @param argv an array of key=value argument pairs
             * @param prefixes an array of prefix strings
             */
            append_argv_filtered(argv: string[], prefixes: string[]): void;
            /**
             * Appends `arg` which is in the form of key=value pair to the hash table kargs->table
             * (appends to the value list if key is not in the hash table)
             * and appends key to kargs->order if it is not in the hash table.
             * @param arg key or key/value pair to be added
             */
            append_if_missing(arg: string): void;
            /**
             * Appends the command line arguments in the file "/proc/cmdline"
             * that does not have "BOOT_IMAGE=" and "initrd=" as prefixes to the `kargs`
             * @param cancellable optional GCancellable object, NULL to ignore
             * @returns %TRUE on success, %FALSE on failure
             */
            append_proc_cmdline(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Search for `arg` which is in the form of key=value pair at the hash table kargs->table
             * and returns true if finds it.
             * @param arg key or key/value pair to check
             * @returns %TRUE if @arg is contained in @kargs, %FALSE otherwise.
             */
            contains(arg: string): boolean;
            /**
             * There are few scenarios being handled for deletion:
             *
             *  1: for input arg with a single key(i.e without = for split),
             *  the key/value pair will be deleted if there is only
             *  one value that is associated with the key
             *
             *  2: for input arg wth key/value pair, the specific key
             *  value pair will be deleted from the pointer array
             *  if those exist.
             *
             *  3: If the found key has only one value
             *  associated with it, the key entry in the table will also
             *  be removed, and the key will be removed from order table
             *
             *  Returns: %TRUE on success, %FALSE on failure
             *
             *  Since: 2019.3
             * @param arg key or key/value pair for deletion
             */
            ['delete'](arg: string): boolean;
            /**
             * Deletes `arg` which is in the form of key=value pair from the hash table kargs->table.
             * @param arg key or key/value pair to be deleted
             * @returns %TRUE on success, %FALSE on failure
             */
            delete_if_present(arg: string): boolean;
            /**
             * This function removes the key entry from the hashtable
             * as well from the order pointer array inside kargs
             *
             * Note: since both table and order inside kernel args
             * are with free function, no extra free functions are
             * being called as they are done automatically by GLib
             * @param key the key to remove
             * @returns %TRUE on success, %FALSE on failure
             */
            delete_key_entry(key: string): boolean;
            /**
             * Frees the kargs structure
             */
            free(): void;
            /**
             * Finds and returns the last element of value array
             * corresponding to the `key` in `kargs` hash table. Note that the application
             * will be terminated if the `key` is found but the value array is empty
             * @param key a key to look for in @kargs hash table
             * @returns %NULL if @key is not found in the @kargs hash table, otherwise returns last element of value array corresponding to @key
             */
            get_last_value(key: string): string | null;
            /**
             * This function implements the basic logic behind key/value pair
             * replacement. Do note that the arg need to be properly formatted
             *
             * When replacing key with exact one value, the arg can be in
             * the form:
             * key, key=new_val, or key=old_val=new_val
             * The first one swaps the old_val with the key to an empty value
             * The second and third replace the old_val into the new_val
             *
             * When replacing key with multiple values, the arg can only be
             * in the form of:
             * key=old_val=new_val. Unless there is a special case where
             * there is an empty value associated with the key, then
             * key=new_val will work because old_val is empty. The empty
             * val will be swapped with the new_val in that case
             * @param arg a string argument
             * @returns %TRUE on success, %FALSE on failure (and in some other instances such as: 1. key not found in @kargs 2. old value not found when @arg is in the form of key=old_val=new_val 3. multiple old values found when @arg is in the form of key=old_val)
             */
            new_replace(arg: string): boolean;
            /**
             * Parses `options` by separating it by whitespaces and appends each argument to `kargs`
             * @param options a string representing command line arguments
             */
            parse_append(options: string): void;
            /**
             * Finds and replaces the old key if `arg` is already in the hash table,
             * otherwise adds `arg` as new key and split_keyeq (arg) as value.
             * Note that when replacing old key value pair, the old values are freed.
             * @param arg key or key/value pair for replacement
             */
            replace(arg: string): void;
            /**
             * Finds and replaces each non-null arguments of `argv` in the hash table,
             * otherwise adds individual arg as new key and split_keyeq (arg) as value.
             * Note that when replacing old key value pair, the old values are freed.
             * @param argv an array of key or key/value pairs
             */
            replace_argv(argv: string): void;
            /**
             * Finds and replaces the old key if `arg` is already in the hash table,
             * otherwise adds `arg` as new key and split_keyeq (arg) as value.
             * Note that when replacing old key, the old values are freed.
             * @param arg key or key/value pair for replacement
             */
            replace_take(arg: string): void;
            /**
             * Extracts all key value pairs in `kargs` and appends to a temporary
             * GString in forms of "key=value" or "key" if value is NULL separated
             * by a single whitespace, and returns the temporary string with the
             * GString wrapper freed
             *
             * Note: the application will be terminated if one of the values array
             * in `kargs` is NULL
             * @returns a string of "key=value" pairs or "key" if value is NULL, separated by single whitespaces
             */
            to_string(): string;
            /**
             * Extracts all key value pairs in `kargs` and appends to a temporary
             * array in forms of "key=value" or "key" if value is NULL, and returns
             * the temporary array with the GPtrArray wrapper freed
             * @returns an array of "key=value" pairs or "key" if value is NULL
             */
            to_strv(): string[];
        }

        type MutableTreeClass = typeof MutableTree;
        class MutableTreeIter {
            static $gtype: GObject.GType<MutableTreeIter>;

            // Fields

            in_files: boolean;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This represents the configuration for a single remote repository. Currently,
         * remotes can only be passed around as (reference counted) opaque handles. In
         * future, more API may be added to create and interrogate them.
         */
        abstract class Remote {
            static $gtype: GObject.GType<Remote>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the human-readable name of the remote. This is what the user configured,
             * if the remote was explicitly configured; and will otherwise be a stable,
             * arbitrary, string.
             * @returns remote’s name
             */
            get_name(): string;
            /**
             * Get the URL from the remote.
             * @returns the remote's URL
             */
            get_url(): string | null;
            /**
             * Increase the reference count on the given `remote`.
             * @returns a copy of @remote, for convenience
             */
            ref(): Remote;
            /**
             * Decrease the reference count on the given `remote` and free it if the
             * reference count reaches 0.
             */
            unref(): void;
        }

        /**
         * An extensible options structure controlling checkout.  Ensure that
         * you have entirely zeroed the structure, then set just the desired
         * options.  This is used by ostree_repo_checkout_at() which
         * supercedes previous separate enumeration usage in
         * ostree_repo_checkout_tree() and ostree_repo_checkout_tree_at().
         */
        class RepoCheckoutAtOptions {
            static $gtype: GObject.GType<RepoCheckoutAtOptions>;

            // Fields

            mode: RepoCheckoutMode;
            overwrite_mode: RepoCheckoutOverwriteMode;
            enable_uncompressed_cache: boolean;
            enable_fsync: boolean;
            process_whiteouts: boolean;
            no_copy_fallback: boolean;
            force_copy: boolean;
            bareuseronly_dirs: boolean;
            force_copy_zerosized: boolean;
            process_passthrough_whiteouts: boolean;
            unused_bools: boolean[];
            subpath: string;
            unused_ints: number[];
            unused_ptrs: any[];
            filter: RepoCheckoutFilter;
            filter_user_data: any;
            sepolicy: SePolicy;
            sepolicy_prefix: string;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * This function simply assigns `cache` to the `devino_to_csum_cache` member of
             * `opts;` it's only useful for introspection.
             *
             * Note that cache does *not* have its refcount incremented - the lifetime of
             * `cache` must be equal to or greater than that of `opts`.
             * @param cache Devino cache
             */
            set_devino(cache?: RepoDevInoCache | null): void;
        }

        /**
         * A structure allowing control over commits.
         */
        class RepoCommitModifier {
            static $gtype: GObject.GType<RepoCommitModifier>;

            // Constructors

            constructor(flags: RepoCommitModifierFlags, commit_filter?: RepoCommitFilter | null);
            _init(...args: any[]): void;

            static ['new'](flags: RepoCommitModifierFlags, commit_filter?: RepoCommitFilter | null): RepoCommitModifier;

            // Methods

            ref(): RepoCommitModifier;
            /**
             * See the documentation for
             * `ostree_repo_devino_cache_new()`.  This function can
             * then be used for later calls to
             * `ostree_repo_write_directory_to_mtree()` to optimize commits.
             *
             * Note if your process has multiple writers, you should use separate
             * `OSTreeRepo` instances if you want to also use this API.
             *
             * This function will add a reference to `cache` without copying - you
             * should avoid further mutation of the cache.
             * @param cache A hash table caching device,inode to checksums
             */
            set_devino_cache(cache: RepoDevInoCache): void;
            /**
             * If `policy` is non-%NULL, use it to look up labels to use for
             * "security.selinux" extended attributes.
             *
             * Note that any policy specified this way operates in addition to any
             * extended attributes provided via
             * ostree_repo_commit_modifier_set_xattr_callback().  However if both
             * specify a value for "security.selinux", then the one from the
             * policy wins.
             * @param sepolicy Policy to use for labeling
             */
            set_sepolicy(sepolicy?: SePolicy | null): void;
            /**
             * In many cases, one wants to create a "derived" commit from base commit.
             * SELinux policy labels are part of that base commit.  This API allows
             * one to easily set up SELinux labeling from a base commit.
             * @param repo OSTree repo containing @rev
             * @param rev Find SELinux policy from this base commit
             * @param cancellable
             */
            set_sepolicy_from_commit(repo: Repo, rev: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * If set, this function should return extended attributes to use for
             * the given path.  This is useful for things like ACLs and SELinux,
             * where a build system can label the files as it's committing to the
             * repository.
             * @param callback Function to be invoked, should return extended attributes for path
             */
            set_xattr_callback(callback: RepoCommitModifierXattrCallback): void;
            unref(): void;
        }

        class RepoCommitTraverseIter {
            static $gtype: GObject.GType<RepoCommitTraverseIter>;

            // Fields

            initialized: boolean;
            dummy: any[];
            dummy_checksum_data: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    initialized: boolean;
                    dummy: any[];
                    dummy_checksum_data: number[];
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            static cleanup(p?: any | null): void;

            // Methods

            clear(): void;
            /**
             * Return information on the current directory.  This function may
             * only be called if %OSTREE_REPO_COMMIT_ITER_RESULT_DIR was returned
             * from ostree_repo_commit_traverse_iter_next().
             */
            get_dir(): [string, string, string];
            /**
             * Return information on the current file.  This function may only be
             * called if %OSTREE_REPO_COMMIT_ITER_RESULT_FILE was returned from
             * ostree_repo_commit_traverse_iter_next().
             */
            get_file(): [string, string];
            /**
             * Initialize (in place) an iterator over the root of a commit object.
             * @param repo A repo
             * @param commit Variant of type %OSTREE_OBJECT_TYPE_COMMIT
             * @param flags Flags
             */
            init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags | null): boolean;
            /**
             * Initialize (in place) an iterator over a directory tree.
             * @param repo A repo
             * @param dirtree Variant of type %OSTREE_OBJECT_TYPE_DIR_TREE
             * @param flags Flags
             */
            init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags | null): boolean;
            /**
             * Step the interator to the next item.  Files will be returned first,
             * then subdirectories.  Call this in a loop; upon encountering
             * %OSTREE_REPO_COMMIT_ITER_RESULT_END, there will be no more files or
             * directories.  If %OSTREE_REPO_COMMIT_ITER_RESULT_DIR is returned,
             * then call ostree_repo_commit_traverse_iter_get_dir() to retrieve
             * data for that directory.  Similarly, if
             * %OSTREE_REPO_COMMIT_ITER_RESULT_FILE is returned, call
             * ostree_repo_commit_traverse_iter_get_file().
             *
             * If %OSTREE_REPO_COMMIT_ITER_RESULT_ERROR is returned, it is a
             * program error to call any further API on `iter` except for
             * ostree_repo_commit_traverse_iter_clear().
             * @param cancellable Cancellable
             */
            next(cancellable?: Gio.Cancellable | null): RepoCommitIterResult;
        }

        class RepoDevInoCache {
            static $gtype: GObject.GType<RepoDevInoCache>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): RepoDevInoCache;

            // Methods

            ref(): RepoDevInoCache;
            unref(): void;
        }

        type RepoFileClass = typeof RepoFile;
        type RepoFinderAvahiClass = typeof RepoFinderAvahi;
        type RepoFinderConfigClass = typeof RepoFinderConfig;
        type RepoFinderInterface = typeof RepoFinder;
        type RepoFinderMountClass = typeof RepoFinderMount;
        type RepoFinderOverrideClass = typeof RepoFinderOverride;
        /**
         * #OstreeRepoFinderResult gives a single result from an
         * ostree_repo_finder_resolve_async() or ostree_repo_finder_resolve_all_async()
         * operation. This represents a single remote which provides none, some or all
         * of the refs being resolved. The structure includes various bits of metadata
         * which allow ostree_repo_pull_from_remotes_async() (for example) to prioritise
         * how to pull the refs.
         *
         * An #OstreeRepoFinderResult is immutable after construction.
         *
         * The `priority` is used as one input of many to ordering functions like
         * ostree_repo_finder_result_compare().
         *
         * `ref_to_checksum` indicates which refs (out of the ones queried for as inputs
         * to ostree_repo_finder_resolve_async()) are provided by this remote. The refs
         * are present as keys (of type #OstreeCollectionRef), and the corresponding values
         * are the checksums of the commits the remote currently has for those refs. (These
         * might not be the latest commits available out of all results.) A
         * checksum may be %NULL if the remote does not advertise the corresponding ref.
         * After ostree_repo_finder_resolve_async() has been called, the commit metadata
         * should be available locally, so the details for each checksum can be looked
         * up using ostree_repo_load_commit().
         *
         * `ref_to_timestamp` provides timestamps for the set of refs in
         * `ref_to_checksum`. The refs are keys (of type #OstreeCollectionRef) and the
         * values are guint64 pointers with the timestamp associated with the checksum
         * provided in `ref_to_checksum`. `ref_to_timestamp` can be %NULL, and when it's
         * not, the timestamps are zero when any of the following conditions are met:
         * (1) the override-commit-ids option was used on
         * ostree_repo_find_remotes_async (2) there was an error in trying to get the
         * commit metadata (3) the checksum for this ref is %NULL in `ref_to_checksum`.
         */
        class RepoFinderResult {
            static $gtype: GObject.GType<RepoFinderResult>;

            // Fields

            finder: RepoFinder;
            priority: number;
            summary_last_modified: number;

            // Constructors

            constructor(
                remote: Remote,
                finder: RepoFinder,
                priority: number,
                ref_to_checksum: { [key: string]: any } | GLib.HashTable<CollectionRef, string>,
                ref_to_timestamp: GLib.HashTable<CollectionRef, number> | null,
                summary_last_modified: number,
            );
            _init(...args: any[]): void;

            static ['new'](
                remote: Remote,
                finder: RepoFinder,
                priority: number,
                ref_to_checksum: { [key: string]: any } | GLib.HashTable<CollectionRef, string>,
                ref_to_timestamp: GLib.HashTable<CollectionRef, number> | null,
                summary_last_modified: number,
            ): RepoFinderResult;

            // Static methods

            /**
             * Free the given `results` array, freeing each element and the container.
             * @param results an #OstreeRepoFinderResult
             */
            static freev(results: RepoFinderResult[]): void;

            // Methods

            /**
             * Compare two #OstreeRepoFinderResult instances to work out which one is better
             * to pull from, and hence needs to be ordered before the other.
             * @param b an #OstreeRepoFinderResult
             * @returns <0 if @a is ordered before @b, 0 if they are ordered equally,    >0 if @b is ordered before @a
             */
            compare(b: RepoFinderResult): number;
            /**
             * Copy an #OstreeRepoFinderResult.
             * @returns a newly allocated copy of @result
             */
            dup(): RepoFinderResult;
            /**
             * Free the given `result`.
             */
            free(): void;
        }

        class RepoPruneOptions {
            static $gtype: GObject.GType<RepoPruneOptions>;

            // Fields

            flags: RepoPruneFlags;
            unused_bools: boolean[];
            unused_ints: number[];
            unused_ptrs: any[];

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A list of statistics for each transaction that may be
         * interesting for reporting purposes.
         */
        class RepoTransactionStats {
            static $gtype: GObject.GType<RepoTransactionStats>;

            // Fields

            metadata_objects_total: number;
            metadata_objects_written: number;
            content_objects_total: number;
            content_objects_written: number;
            content_bytes_written: number;
            devino_cache_hits: number;
            padding1: number;
            padding2: number;
            padding3: number;
            padding4: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    metadata_objects_total: number;
                    metadata_objects_written: number;
                    content_objects_total: number;
                    content_objects_written: number;
                    content_bytes_written: number;
                    devino_cache_hits: number;
                    padding1: number;
                    padding2: number;
                    padding3: number;
                    padding4: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        abstract class SignEd25519 {
            static $gtype: GObject.GType<SignEd25519>;

            // Constructors

            _init(...args: any[]): void;
        }

        class SignEd25519Class {
            static $gtype: GObject.GType<SignEd25519Class>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SignInterface = typeof Sign;
        class SysrootDeployTreeOpts {
            static $gtype: GObject.GType<SysrootDeployTreeOpts>;

            // Fields

            locked: boolean;
            unused_bools: boolean[];
            unused_ints: number[];
            override_kernel_argv: string;
            overlay_initrds: string;
            unused_ptrs: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    locked: boolean;
                    unused_bools: boolean[];
                    unused_ints: number[];
                    override_kernel_argv: string;
                    overlay_initrds: string;
                    unused_ptrs: any[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class SysrootWriteDeploymentsOpts {
            static $gtype: GObject.GType<SysrootWriteDeploymentsOpts>;

            // Fields

            do_postclean: boolean;
            disable_auto_early_prune: boolean;
            unused_bools: boolean[];
            unused_ints: number[];
            unused_ptrs: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    do_postclean: boolean;
                    disable_auto_early_prune: boolean;
                    unused_bools: boolean[];
                    unused_ints: number[];
                    unused_ptrs: any[];
                }>,
            );
            _init(...args: any[]): void;
        }

        module RepoFinder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface RepoFinderNamespace {
            $gtype: GObject.GType<RepoFinder>;
            prototype: RepoFinder;

            /**
             * A version of ostree_repo_finder_resolve_async() which queries one or more
             * `finders` in parallel and combines the results.
             * @param finders non-empty array of #OstreeRepoFinders
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_all_async(
                finders: RepoFinder[],
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<RepoFinder> | null,
            ): void;
            /**
             * Get the results from a ostree_repo_finder_resolve_all_async() operation.
             * @param result #GAsyncResult from the callback
             */
            resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];
        }
        interface RepoFinder extends GObject.Object {
            // Methods

            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
            ): Promise<RepoFinderResult[]>;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<RepoFinderResult[]> | void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             * @returns array of zero    or more results
             */
            resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];

            // Virtual methods

            /**
             * Find reachable remote URIs which claim to provide any of the given `refs`. The
             * specific method for finding the remotes depends on the #OstreeRepoFinder
             * implementation.
             *
             * Any remote which is found and which claims to support any of the given `refs`
             * will be returned in the results. It is possible that a remote claims to
             * support a given ref, but turns out not to — it is not possible to verify this
             * until ostree_repo_pull_from_remotes_async() is called.
             *
             * The returned results will be sorted with the most useful first — this is
             * typically the remote which claims to provide the most `refs,` at the lowest
             * latency.
             *
             * Each result contains a mapping of `refs` to the checksums of the commits
             * which the result provides. If the result provides the latest commit for a ref
             * across all of the results, the checksum will be set. Otherwise, if the
             * result provides an outdated commit, or doesn’t provide a given ref at all,
             * the checksum will not be set. Results which provide none of the requested
             * `refs` may be listed with an empty refs map.
             *
             * Pass the results to ostree_repo_pull_from_remotes_async() to pull the given
             * `refs` from those remotes.
             * @param refs non-empty array of collection–ref pairs to find remotes for
             * @param parent_repo the local repository which the refs are being resolved for,    which provides configuration information and GPG keys
             * @param cancellable a #GCancellable, or %NULL
             * @param callback asynchronous completion callback
             */
            vfunc_resolve_async(
                refs: CollectionRef[],
                parent_repo: Repo,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the results from a ostree_repo_finder_resolve_async() operation.
             * @param result #GAsyncResult from the callback
             */
            vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
        }

        export const RepoFinder: RepoFinderNamespace & {
            new (): RepoFinder; // This allows `obj instanceof RepoFinder`
        };

        module Sign {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface SignNamespace {
            $gtype: GObject.GType<Sign>;
            prototype: Sign;

            /**
             * Return an array with newly allocated instances of all available
             * signing engines; they will not be initialized.
             */
            get_all(): Sign[];
            /**
             * Create a new instance of a signing engine.
             * @param name the name of desired signature engine
             */
            get_by_name(name: string): Sign;
        }
        interface Sign extends GObject.Object {
            // Methods

            /**
             * Add the public key for verification. Could be called multiple times for
             * adding all needed keys to be used for verification.
             *
             * The `public_key` argument depends of the particular engine implementation.
             * @param public_key single public key to be added
             * @returns @TRUE in case if the key could be added successfully, @FALSE in case of error (@error will contain the reason).
             */
            add_pk(public_key: GLib.Variant): boolean;
            /**
             * Clear all previously preloaded secret and public keys.
             * @returns @TRUE in case if no errors, @FALSE in case of error
             */
            clear_keys(): boolean;
            /**
             * Add a signature to a commit.
             *
             * Depending of the signing engine used you will need to load
             * the secret key with #ostree_sign_set_sk.
             * @param repo an #OsreeRepo object
             * @param commit_checksum SHA256 of given commit to sign
             * @param cancellable A #GCancellable
             * @returns @TRUE if commit has been signed successfully, @FALSE in case of error (@error will contain the reason).
             */
            commit(repo: Repo, commit_checksum: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Verify if commit is signed with known key.
             *
             * Depending of the signing engine used you will need to load
             * the public key(s) for verification with #ostree_sign_set_pk,
             * #ostree_sign_add_pk and/or #ostree_sign_load_pk.
             * @param repo an #OsreeRepo object
             * @param commit_checksum SHA256 of given commit to verify
             * @param cancellable A #GCancellable
             * @returns @TRUE if commit has been verified successfully, @FALSE in case of error or no valid keys are available (@error will contain the reason).
             */
            commit_verify(repo: Repo, commit_checksum: string, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Sign the given `data` with pre-loaded secret key.
             *
             * Depending of the signing engine used you will need to load
             * the secret key with #ostree_sign_set_sk.
             * @param data the raw data to be signed with pre-loaded secret key
             * @param cancellable A #GCancellable
             * @returns @TRUE if @data has been signed successfully, @FALSE in case of error (@error will contain the reason).
             */
            data(data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): [boolean, GLib.Bytes];
            /**
             * Verify given data against signatures with pre-loaded public keys.
             *
             * Depending of the signing engine used you will need to load
             * the public key(s) with #ostree_sign_set_pk, #ostree_sign_add_pk
             * or #ostree_sign_load_pk.
             * @param data the raw data to check
             * @param signatures the signatures to be checked
             * @returns @TRUE if @data has been signed at least with any single valid key, @FALSE in case of error or no valid keys are available (@error will contain the reason).
             */
            data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant): [boolean, string];
            ed25519_add_pk(public_key: GLib.Variant): boolean;
            ed25519_clear_keys(): boolean;
            ed25519_data(
                data: GLib.Bytes | Uint8Array,
                signature: GLib.Bytes | Uint8Array,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            ed25519_data_verify(
                data: GLib.Bytes | Uint8Array,
                signatures: GLib.Variant,
                out_success_message: string,
            ): boolean;
            ed25519_get_name(): string;
            ed25519_load_pk(options: GLib.Variant): boolean;
            ed25519_metadata_format(): string;
            ed25519_metadata_key(): string;
            ed25519_set_pk(public_key: GLib.Variant): boolean;
            ed25519_set_sk(secret_key: GLib.Variant): boolean;
            /**
             * Return the pointer to the name of currently used/selected signing engine.
             * @returns pointer to the name @NULL in case of error (unlikely).
             */
            get_name(): string;
            /**
             * Load public keys for verification from anywhere.
             * It is expected that all keys would be added to already pre-loaded keys.
             *
             * The `options` argument depends of the particular engine implementation.
             *
             * For example, `ed2`5515 engine could use following string-formatted options:
             * - `filename` -- single file to use to load keys from
             * - `basedir` -- directory containing subdirectories
             *   'trusted.ed25519.d' and 'revoked.ed25519.d' with appropriate
             *   public keys. Used for testing and re-definition of system-wide
             *   directories if defaults are not suitable for any reason.
             * @param options any options
             * @returns @TRUE in case if at least one key could be load successfully, @FALSE in case of error (@error will contain the reason).
             */
            load_pk(options: GLib.Variant): boolean;
            /**
             * Return the pointer to the string with format used in (detached) metadata for
             * current signing engine.
             * @returns pointer to the metadata format, @NULL in case of error (unlikely).
             */
            metadata_format(): string;
            /**
             * Return the pointer to the name of the key used in (detached) metadata for
             * current signing engine.
             * @returns pointer to the metadata key name, @NULL in case of error (unlikely).
             */
            metadata_key(): string;
            /**
             * Set the public key for verification. It is expected what all
             * previously pre-loaded public keys will be dropped.
             *
             * The `public_key` argument depends of the particular engine implementation.
             * @param public_key single public key to be added
             * @returns @TRUE in case if the key could be set successfully, @FALSE in case of error (@error will contain the reason).
             */
            set_pk(public_key: GLib.Variant): boolean;
            /**
             * Set the secret key to be used for signing data, commits and summary.
             *
             * The `secret_key` argument depends of the particular engine implementation.
             * @param secret_key secret key to be added
             * @returns @TRUE in case if the key could be set successfully, @FALSE in case of error (@error will contain the reason).
             */
            set_sk(secret_key: GLib.Variant): boolean;
            /**
             * Add a signature to a summary file.
             * Based on ostree_repo_add_gpg_signature_summary implementation.
             * @param repo ostree repository
             * @param keys keys -- GVariant containing keys as GVarints specific to signature type.
             * @param cancellable A #GCancellable
             * @returns @TRUE if summary file has been signed with all provided keys
             */
            summary(repo: Repo, keys: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

            // Virtual methods

            /**
             * Add the public key for verification. Could be called multiple times for
             * adding all needed keys to be used for verification.
             *
             * The `public_key` argument depends of the particular engine implementation.
             * @param public_key single public key to be added
             */
            vfunc_add_pk(public_key: GLib.Variant): boolean;
            /**
             * Clear all previously preloaded secret and public keys.
             */
            vfunc_clear_keys(): boolean;
            /**
             * Sign the given `data` with pre-loaded secret key.
             *
             * Depending of the signing engine used you will need to load
             * the secret key with #ostree_sign_set_sk.
             * @param data the raw data to be signed with pre-loaded secret key
             * @param cancellable A #GCancellable
             */
            vfunc_data(data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): [boolean, GLib.Bytes];
            /**
             * Verify given data against signatures with pre-loaded public keys.
             *
             * Depending of the signing engine used you will need to load
             * the public key(s) with #ostree_sign_set_pk, #ostree_sign_add_pk
             * or #ostree_sign_load_pk.
             * @param data the raw data to check
             * @param signatures the signatures to be checked
             */
            vfunc_data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant): [boolean, string];
            /**
             * Return the pointer to the name of currently used/selected signing engine.
             */
            vfunc_get_name(): string;
            /**
             * Load public keys for verification from anywhere.
             * It is expected that all keys would be added to already pre-loaded keys.
             *
             * The `options` argument depends of the particular engine implementation.
             *
             * For example, `ed2`5515 engine could use following string-formatted options:
             * - `filename` -- single file to use to load keys from
             * - `basedir` -- directory containing subdirectories
             *   'trusted.ed25519.d' and 'revoked.ed25519.d' with appropriate
             *   public keys. Used for testing and re-definition of system-wide
             *   directories if defaults are not suitable for any reason.
             * @param options any options
             */
            vfunc_load_pk(options: GLib.Variant): boolean;
            /**
             * Return the pointer to the string with format used in (detached) metadata for
             * current signing engine.
             */
            vfunc_metadata_format(): string;
            /**
             * Return the pointer to the name of the key used in (detached) metadata for
             * current signing engine.
             */
            vfunc_metadata_key(): string;
            /**
             * Set the public key for verification. It is expected what all
             * previously pre-loaded public keys will be dropped.
             *
             * The `public_key` argument depends of the particular engine implementation.
             * @param public_key single public key to be added
             */
            vfunc_set_pk(public_key: GLib.Variant): boolean;
            /**
             * Set the secret key to be used for signing data, commits and summary.
             *
             * The `secret_key` argument depends of the particular engine implementation.
             * @param secret_key secret key to be added
             */
            vfunc_set_sk(secret_key: GLib.Variant): boolean;
        }

        export const Sign: SignNamespace & {
            new (): Sign; // This allows `obj instanceof Sign`
        };

        type RepoFinderResultv = RepoFinderResult;
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

    export default OSTree;
}

declare module 'gi://OSTree' {
    import OSTree10 from 'gi://OSTree?version=1.0';
    export default OSTree10;
}
// END
