## 1\. Introduction[](https://wicg.github.io/file-system-access/#introduction)

_This section is non-normative._

This API enables developers to build powerful apps that interact with other (non-Web) apps on the user's device via the device's file system. Prominent examples of applications where users expect this functionality are IDEs, photo and video editors, text editors, and more. After a user grants a web app access, this API allows the app to read or save changes directly to files and folders on the user's device. Beyond reading and writing files, this API provides the ability to open a directory and enumerate its contents. Additionally, web apps can use this API to store references to files and directories they've been given access to, allowing the web apps to later regain access to the same content without requiring the user to select the same file again.

This API is similar to [`<input type=file>`](<https://html.spec.whatwg.org/multipage/input.html#file-upload-state-(type=file)>) and [`<input type=file webkitdirectory>`](https://wicg.github.io/entries-api/#html-forms) [[entries-api]](https://wicg.github.io/file-system-access/#biblio-entries-api) in that user interaction happens through file and directory picker dialogs. Unlike those APIs, this API is currently purely a javascript API, and does not integrate with forms and/or input elements.

Additionally this API also makes it possible for websites to get access to some directory without having to first prompt the user for access. This enables use cases where a website wants to save data to disk before a user has picked a location to save to, without forcing the website to use a completely different storage mechanism with a different API for such files. It also makes it easier to write automated tests for code using this API. The entry point for this is the `[navigator.storage.getDirectory()](https://wicg.github.io/file-system-access/#dom-storagemanager-getdirectory)` method. This is similar to the temporary file system as defined in earlier drafts of [File API: Directories and System](https://wicg.github.io/file-system-access/#biblio-file-system-api).

## 2\. Files and Directories[](https://wicg.github.io/file-system-access/#files-and-directories)

### 2.1. Concepts[](https://wicg.github.io/file-system-access/#concepts)

An entry is either a [file entry](https://wicg.github.io/file-system-access/#file) or a [directory entry](https://wicg.github.io/file-system-access/#directory).

Each [entry](https://wicg.github.io/file-system-access/#entry) has an associated name (a [string](https://infra.spec.whatwg.org/#string)).

A valid file name is a [string](https://infra.spec.whatwg.org/#string) that is not an empty string, is not equal to "." or "..", and does not contain '/' or any other character used as path separator on the underlying platform.

Note: This means that '\' is not allowed in names on Windows, but might be allowed on other operating systems. Additionally underlying file systems might have further restrictions on what names are or aren't allowed, so a string merely being a [valid file name](https://wicg.github.io/file-system-access/#valid-file-name) is not a guarantee that creating a file or directory with that name will succeed.

[](https://wicg.github.io/file-system-access/#issue-58d5d75b) We should consider having further normative restrictions on file names that will never be allowed using this API, rather than leaving it entirely up to underlying file systems.

A valid suffix code point is a [code point](https://infra.spec.whatwg.org/#code-point) that is [ASCII alphanumeric](https://infra.spec.whatwg.org/#ascii-alphanumeric), U+002B (+), or U+002E (.).

Note: These code points were chosen to support most pre-existing file formats. The vast majority of file extensions are purely alphanumeric, but compound extensions (such as `.tar.gz`) and extensions such as `.c++` for C++ source code are also fairly common, hence the inclusion of + and . as allowed code points.

A file entry additionally consists of binary data (a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence)) and a modification timestamp (a number representing the number of milliseconds since the [Unix Epoch](https://w3c.github.io/FileAPI/#UnixEpoch)).

A directory entry additionally consists of a [set](https://infra.spec.whatwg.org/#ordered-set) of children, which are themselves [entries](https://wicg.github.io/file-system-access/#entry). Each member is either a [file](https://wicg.github.io/file-system-access/#file) or a [directory](https://wicg.github.io/file-system-access/#directory).

An [entry](https://wicg.github.io/file-system-access/#entry) *entry* should be [contained](https://infra.spec.whatwg.org/#list-contain) in the [children](https://wicg.github.io/file-system-access/#directory-entry-children) of at most one [directory entry](https://wicg.github.io/file-system-access/#directory), and that directory entry is also known as *entry*'s parent. An [entry](https://wicg.github.io/file-system-access/#entry)'s [parent](https://wicg.github.io/file-system-access/#entry-parent) is null if no such directory entry exists.

Note: Two different [entries](https://wicg.github.io/file-system-access/#entry) can represent the same file or directory on disk, in which case it is possible for both entries to have a different parent, or for one entry to have a parent while the other entry does not have a parent. Typically an entry does not have a parent if it was returned by `[navigator.storage.getDirectory()](https://wicg.github.io/file-system-access/#dom-storagemanager-getdirectory)` or one of the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories), and an entry will have a parent in all other cases.

[Entries](https://wicg.github.io/file-system-access/#entry) can (but don't have to) be backed by files on the host operating system's local file system, so it is possible for the [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data), [modification timestamp](https://wicg.github.io/file-system-access/#file-entry-modification-timestamp), and [children](https://wicg.github.io/file-system-access/#directory-entry-children) of entries to be modified by applications outside of this specification. Exactly how external changes are reflected in the data structures defined by this specification, as well as how changes made to the data structures defined here are reflected externally is left up to individual user-agent implementations.

An [entry](https://wicg.github.io/file-system-access/#entry) *a* is the same as an [entry](https://wicg.github.io/file-system-access/#entry) *b* if *a* is equal to *b*, or if *a* and *b* are backed by the same file or directory on the local file system.

[](https://wicg.github.io/file-system-access/#issue-88e7ec9d) TODO: Explain better how entries map to files on disk (multiple entries can map to the same file or directory on disk but an entry doesn't have to map to any file on disk).

To resolve an [entry](https://wicg.github.io/file-system-access/#entry) *child* relative to a [directory entry](https://wicg.github.io/file-system-access/#directory) *root*, run the following steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  If *child* is [the same as](https://wicg.github.io/file-system-access/#entry-the-same-as) *root*, [resolve](https://heycam.github.io/webidl/#resolve) *result* with an empty list, and abort.

    2.  Let *childPromises* be « ».

    3.  [For each](https://infra.spec.whatwg.org/#list-iterate) *entry* of *root*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry)'s [children](https://wicg.github.io/file-system-access/#directory-entry-children):

        1.  Let *p* be the result of [resolving](https://wicg.github.io/file-system-access/#entry-resolve) *child* relative to *entry*.

        2.  [Append](https://infra.spec.whatwg.org/#list-append) *p* to *childPromises*.

        3.  [Upon fulfillment](https://heycam.github.io/webidl/#upon-fulfillment) of *p* with value *path*:

            1.  If *path* is not null:

                1.  [Prepend](https://infra.spec.whatwg.org/#list-prepend) *entry*'s [name](https://wicg.github.io/file-system-access/#entry-name) to *path*.

                2.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with *path*.

    4.  [Wait for all](https://heycam.github.io/webidl/#wait-for-all) *childPromises*, with the following success steps:

        1.  If *result* hasn't been resolved yet, [resolve](https://heycam.github.io/webidl/#resolve) *result* with `null`.

3.  Return *result*.

### 2.2. Permissions[](https://wicg.github.io/file-system-access/#permissions)

The `"file-system"` [powerful feature](https://w3c.github.io/permissions/#dfn-powerful-feature)'s permission-related algorithms and types are defined as follows:

[permission descriptor type](https://w3c.github.io/permissions/#dfn-permission-descriptor-type)

`[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)`, defined as:

enum `FileSystemPermissionMode` {
`"read"`,
`"readwrite"`
};

dictionary `FileSystemPermissionDescriptor` : [PermissionDescriptor](https://w3c.github.io/permissions/#dom-permissiondescriptor) {
required [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) `handle`;
[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode) `mode` = "read";
};

[permission state constraints](https://w3c.github.io/permissions/#dfn-permission-state-constraints)

To determine [permission state constraints](https://w3c.github.io/permissions/#dfn-permission-state-constraints) for a `[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)` *desc*, run these steps:

1.  Let *entry* be *desc*.`[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)`'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

2.  If *entry* represents an [entry](https://wicg.github.io/file-system-access/#entry) in an [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system), this descriptor's [permission state](https://w3c.github.io/permissions/#dfn-permission-state) must always be `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`.

3.  Otherwise, if *entry*'s [parent](https://wicg.github.io/file-system-access/#entry-parent) is not null, this descriptor's [permission state](https://w3c.github.io/permissions/#dfn-permission-state) must be equal to the [permission state](https://w3c.github.io/permissions/#dfn-permission-state) for a descriptor with the same `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)`, and a `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` representing *entry*'s [parent](https://wicg.github.io/file-system-access/#entry-parent).

4.  Otherwise, if *desc*.`[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` is `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`:

    1.  Let *read state* be the [permission state](https://w3c.github.io/permissions/#dfn-permission-state) for a descriptor with the same `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)`, but `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` = `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)`.

    2.  If *read state* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, this descriptor's [permission state](https://w3c.github.io/permissions/#dfn-permission-state) must be equal to *read state*.

[permission request algorithm](https://wicg.github.io/permissions-request/#permission-request-algorithm)

Given a `[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)` *desc* and a `[PermissionStatus](https://w3c.github.io/permissions/#dom-permissionstatus)` *status*, run these steps:

1.  Run the boolean permission query algorithm on *desc* and *status*.

2.  If *status*.`[state](https://w3c.github.io/permissions/#dom-permissionstatus-state)` is not `["prompt"](https://w3c.github.io/permissions/#dom-permissionstate-prompt)`, abort.

3.  Let *settings* be *desc*.`[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)`'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

4.  Let *global* be *settings*'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).

5.  If *global* is not a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)`, throw a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

6.  If *global* does not have [transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation), throw a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

7.  If *settings*'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin) is not [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) with *settings*'s [top-level origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-top-level-origin), throw a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

8.  [Request permission to use](https://w3c.github.io/permissions/#dfn-request-permission-to-use) *desc*.

9.  Run the boolean permission query algorithm on *desc* and *status*.

[](https://wicg.github.io/file-system-access/#issue-88417955) Ideally this user activation requirement would be defined upstream. [<https://github.com/WICG/permissions-request/issues/2>](https://github.com/WICG/permissions-request/issues/2)

To query file system permission given a `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` *handle* and a `[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode)` *mode*, run these steps:

1.  Let *desc* be a `[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)`.

2.  Set *desc*.`[name](https://w3c.github.io/permissions/#dom-permissiondescriptor-name)` to `["file-system"](https://wicg.github.io/file-system-access/#dom-permissionname-file-system)`.

3.  Set *desc*.`[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` to *handle*.

4.  Set *desc*.`[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` to *mode*.

5.  Return *desc*'s [permission state](https://w3c.github.io/permissions/#dfn-permission-state).

To request file system permission given a `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` *handle* and a `[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode)` *mode*, run these steps:

1.  Let *desc* be a `[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)`.

2.  Set *desc*.`[name](https://w3c.github.io/permissions/#dom-permissiondescriptor-name)` to `["file-system"](https://wicg.github.io/file-system-access/#dom-permissionname-file-system)`.

3.  Set *desc*.`[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` to *handle*.

4.  Set *desc*.`[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` to *mode*.

5.  Let *status* be the result of running [create a PermissionStatus](https://w3c.github.io/permissions/#dfn-create-a-permissionstatus) for *desc*.

6.  Run the [permission request algorithm](https://wicg.github.io/permissions-request/#permission-request-algorithm) for the `["file-system"](https://wicg.github.io/file-system-access/#dom-permissionname-file-system)` feature, given *desc* and *status*.

7.  Return *desc*'s [permission state](https://w3c.github.io/permissions/#dfn-permission-state).

[](https://wicg.github.io/file-system-access/#issue-7fc2f5c7) Currently `[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode)` can only be `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)` or `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`. In the future we might want to add a "write" mode as well to support write-only handles. [<https://github.com/wicg/file-system-access/issues/119>](https://github.com/wicg/file-system-access/issues/119)

### 2.3. The `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` interface[](https://wicg.github.io/file-system-access/#api-filesystemhandle)

**⚠**MDN

dictionary `FileSystemHandlePermissionDescriptor` {
[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode) `mode` = "read";
};

enum `FileSystemHandleKind` {
`"file"`,
`"directory"`,
};

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext), [Serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable)]
interface `FileSystemHandle` {
readonly attribute [FileSystemHandleKind](https://wicg.github.io/file-system-access/#enumdef-filesystemhandlekind) [kind](https://wicg.github.io/file-system-access/#dom-filesystemhandle-kind);
readonly attribute [USVString](https://heycam.github.io/webidl/#idl-USVString) [name](https://wicg.github.io/file-system-access/#dom-filesystemhandle-name);

[Promise](https://heycam.github.io/webidl/#idl-promise)<[boolean](https://heycam.github.io/webidl/#idl-boolean)> [isSameEntry](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry)([FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) `other`[](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry-other-other));

[Promise](https://heycam.github.io/webidl/#idl-promise)<[PermissionState](https://w3c.github.io/permissions/#dom-permissionstate)> [queryPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission)(optional [FileSystemHandlePermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystemhandlepermissiondescriptor) `descriptor`[](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission-descriptor-descriptor) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[PermissionState](https://w3c.github.io/permissions/#dom-permissionstate)> [requestPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)(optional [FileSystemHandlePermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystemhandlepermissiondescriptor) `descriptor`[](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission-descriptor-descriptor) = {});
};

A `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` object represents an [entry](https://wicg.github.io/file-system-access/#entry). Each `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` object is associated with an entry (an [entry](https://wicg.github.io/file-system-access/#entry)). Multiple separate objects implementing the `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` interface can all be associated with the same [entry](https://wicg.github.io/file-system-access/#entry) simultaneously.

`[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)` objects are [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects).

**In the Origin Trial as available in Chrome 78, these objects are not yet serializable. In Chrome 82 they are.**

Their [serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps), given *value*, *serialized* and *forStorage* are:

1.  Set *serialized*.[[Origin]] to *value*'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin).

2.  Set *serialized*.[[Entry]] to *value*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

Their [deserialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#deserialization-steps), given *serialized* and *value* are:

1.  If *serialized*.[[Origin]] is not [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) with *value*'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin), then throw a `[DataCloneError](https://heycam.github.io/webidl/#datacloneerror)`.

2.  Set *value*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) to *serialized*.[[Entry]]

**⚠**MDN

*handle* . `[kind](https://wicg.github.io/file-system-access/#dom-filesystemhandle-kind)`

Returns `["file"](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-file)` if *handle* is a `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)`, or `["directory"](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-directory)` if *handle* is a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)`.

This can be used to distinguish files from directories when iterating over the contents of a directory.

**⚠**MDN

*handle* . `[name](https://wicg.github.io/file-system-access/#dom-filesystemhandle-name)`

Returns the [name](https://wicg.github.io/file-system-access/#entry-name) of the entry represented by *handle*.

The `kind` attribute must return `["file"](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-file)` if the associated [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is a [file entry](https://wicg.github.io/file-system-access/#file), and return `["directory"](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-directory)` otherwise.

The `name` attribute must return the [name](https://wicg.github.io/file-system-access/#entry-name) of the associated [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

#### 2.3.1. The `[isSameEntry()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry)` method[](https://wicg.github.io/file-system-access/#api-filesystemhandle-issameentry)

**⚠**MDN

*same* = await *handle1* . `[isSameEntry](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry)`( *handle2* )

Returns true if *handle1* and *handle2* represent the same file or directory.

**This method is first available in Chrome 82.**

The `isSameEntry(*other*)` method, when invoked, must run these steps:

1.  Let *realm* be [this](https://heycam.github.io/webidl/#this)'s [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm).

2.  Let *p* be [a new promise](https://heycam.github.io/webidl/#a-new-promise) in *realm*.

3.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  If [this](https://heycam.github.io/webidl/#this)'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is [the same as](https://wicg.github.io/file-system-access/#entry-the-same-as) *other*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry), [resolve](https://heycam.github.io/webidl/#resolve) *p* with `true`.

    2.  Else [resolve](https://heycam.github.io/webidl/#resolve) *p* with `false`.

4.  Return *p*.

#### 2.3.2. The `[queryPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission)` method[](https://wicg.github.io/file-system-access/#api-filesystemhandle-querypermission)

**⚠**MDN

*status* = await *handle* . `[queryPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission)`({ `[mode](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode)` : `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)` })

*status* = await *handle* . `[queryPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission)`

*status* = (await navigator.`[permissions](https://w3c.github.io/permissions/#dom-navigator-permissions)`.`[query](https://w3c.github.io/permissions/#dom-permissions-query)`({ `[name](https://w3c.github.io/permissions/#dom-permissiondescriptor-name)` : "file-system", `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` : *handle* })).`[state](https://w3c.github.io/permissions/#dom-permissionstatus-state)`

Queries the current state of the read permission of this handle. If this returns `"prompt"` the website will have to call `[requestPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)` before any operations on the handle can be done. If this returns `"denied"` any operations will reject.

Usually handles returned by the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories) will initially return `"granted"` for their read permission state, however other than through the user revoking permission, a handle retrieved from IndexedDB is also likely to return `"prompt"`.

*status* = await *handle* . `[queryPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission)`({ `[mode](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode)` : `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)` })

*status* = (await navigator.`[permissions](https://w3c.github.io/permissions/#dom-navigator-permissions)`.`[query](https://w3c.github.io/permissions/#dom-permissions-query)`({ `[name](https://w3c.github.io/permissions/#dom-permissiondescriptor-name)` : "file-system", `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` : *handle*, `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` : `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`}).`[state](https://w3c.github.io/permissions/#dom-permissionstatus-state)`

Queries the current state of the write permission of this handle. If this returns `"prompt"`, attempting to modify the file or directory this handle represents will require user activation and will result in a confirmation prompt being shown to the user. However if the state of the read permission of this handle is also `"prompt"` the website will need to call `[requestPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)`. There is no automatic prompting for read access when attempting to read from a file or directory.

**The integration with the permissions API's `[query()](https://w3c.github.io/permissions/#dom-permissions-query)` method is not yet implemented in Chrome.**

The `queryPermission(*descriptor*)` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Let *state* be the result of [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and *descriptor*.`[mode](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode)`.

    2.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with *state*.

3.  Return *result*.

#### 2.3.3. The `[requestPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)` method[](https://wicg.github.io/file-system-access/#api-filesystemhandle-requestpermission)

**⚠**MDN

*status* = await *handle* . `[requestPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)`({ `[mode](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode)` : `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)` })

*status* = await *handle* . `[requestPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)`

If the state of the read permission of this handle is anything other than `"prompt"`, this will return that state directly. If it is `"prompt"` however, user activation is needed and this will show a confirmation prompt to the user. The new read permission state is then returned, depending on the user's response to the prompt.

*status* = await *handle* . `[requestPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)`({ `[mode](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode)` : `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)` })

If the state of the write permission of this handle is anything other than `"prompt"`, this will return that state directly. If the status of the read permission of this handle is `"denied"` this will return that.

Otherwise the state of the write permission is `"prompt"` and this will show a confirmation prompt to the user. The new write permission state is then returned, depending on what the user selected.

The `requestPermission(*descriptor*)` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Let *state* be the result of [requesting file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and *descriptor*.`[mode](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode)`. If that throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

    2.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with *state*.

3.  Return *result*.

### 2.4. The `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` interface[](https://wicg.github.io/file-system-access/#api-filesystemfilehandle)

**⚠**MDN

dictionary `FileSystemCreateWritableOptions` {
[boolean](https://heycam.github.io/webidl/#idl-boolean) `keepExistingData` = false;
};

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext), [Serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable)]
interface `FileSystemFileHandle` : [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[File](https://w3c.github.io/FileAPI/#dfn-file)> [getFile](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-getfile)();
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)> [createWritable](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable)(optional [FileSystemCreateWritableOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemcreatewritableoptions) `options`[](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable-options-options) = {});
};

A `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)`'s associated [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) must be a [file entry](https://wicg.github.io/file-system-access/#file).

`[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` objects are [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects). Their [serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps) and [deserialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#deserialization-steps) are the same as those for `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)`.

**In the Origin Trial as available in Chrome 78, these objects are not yet serializable. In Chrome 82 they are.**

#### 2.4.1. The `[getFile()](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-getfile)` method[](https://wicg.github.io/file-system-access/#api-filesystemfilehandle-getfile)

**⚠**MDN

*file* = await *fileHandle* . `[getFile()](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-getfile)`

Returns a `[File](https://w3c.github.io/FileAPI/#dfn-file)` representing the state on disk of the entry represented by *handle*. If the file on disk changes or is removed after this method is called, the returned `[File](https://w3c.github.io/FileAPI/#dfn-file)` object will likely be no longer readable.

The `getFile()` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Let *permissionStatus* be the result of [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)`.

    2.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *result* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

    3.  Let *entry* be **[this](https://heycam.github.io/webidl/#this)**'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

    4.  Let *f* be a new `[File](https://w3c.github.io/FileAPI/#dfn-file)`.

    5.  Set *f*'s [snapshot state](https://w3c.github.io/FileAPI/#snapshot-state) to the current state of *entry*.

    6.  Set *f*'s underlying byte sequence to a copy of *entry*'s [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data).

    7.  Initialize the value of *f*'s `[name](https://w3c.github.io/FileAPI/#dfn-name)` attribute to *entry*'s [name](https://wicg.github.io/file-system-access/#entry-name).

    8.  Initialize the value of *f*'s `[lastModified](https://w3c.github.io/FileAPI/#dfn-lastModified)` attribute to *entry*'s [modification timestamp](https://wicg.github.io/file-system-access/#file-entry-modification-timestamp).

    9.  Initialize the value of *f*'s `[type](https://w3c.github.io/FileAPI/#dfn-type)` attribute to an implementation defined value, based on for example *entry*'s [name](https://wicg.github.io/file-system-access/#entry-name) and/or its file extension.

        [](https://wicg.github.io/file-system-access/#issue-1fb8bcae) The reading and snapshotting behavior needs to be better specified in the [[FILE-API]](https://wicg.github.io/file-system-access/#biblio-file-api) spec, for now this is kind of hand-wavy.

    10. [Resolve](https://heycam.github.io/webidl/#resolve) *result* with *f*.

3.  Return *result*.

#### 2.4.2. The `[createWritable()](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable)` method[](https://wicg.github.io/file-system-access/#api-filesystemfilehandle-createwritable)

**⚠**MDN

**In the Origin Trial as available in Chrome 82, createWritable replaces the createWriter method.**

*stream* = await *fileHandle* . `[createWritable()](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable)`

*stream* = await *fileHandle* . `[createWritable](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable)`({ `[keepExistingData](https://wicg.github.io/file-system-access/#dom-filesystemcreatewritableoptions-keepexistingdata)`: true/false })

Returns a `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` that can be used to write to the file. Any changes made through *stream* won't be reflected in the file represented by *fileHandle* until the stream has been closed. User agents try to ensure that no partial writes happen, i.e. the file represented by *fileHandle* will either contain its old contents or it will contain whatever data was written through *stream* up until the stream has been closed.

This is typically implemented by writing data to a temporary file, and only replacing the file represented by *fileHandle* with the temporary file when the writable filestream is closed.

If `[keepExistingData](https://wicg.github.io/file-system-access/#dom-filesystemcreatewritableoptions-keepexistingdata)` is `false` or not specified, the temporary file starts out empty, otherwise the existing file is first copied to this temporary file.

[](https://wicg.github.io/file-system-access/#issue-0693bc11) There has been some discussion around and desire for a "inPlace" mode for createWritable (where changes will be written to the actual underlying file as they are written to the writer, for example to support in-place modification of large files or things like databases). This is not currently implemented in Chrome. Implementing this is currently blocked on figuring out how to combine the desire to run malware checks with the desire to let websites make fast in-place modifications to existing large files. [<https://github.com/wicg/file-system-access/issues/67>](https://github.com/wicg/file-system-access/issues/67)

The `createWritable(*options*)` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Let *permissionStatus* be the result of [requesting file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`. If that throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

    2.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *result* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

    3.  Let *entry* be **[this](https://heycam.github.io/webidl/#this)**'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

    4.  Let *stream* be the result of [creating a new FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#create-a-new-filesystemwritablefilestream) for *entry* in **[this](https://heycam.github.io/webidl/#this)**'s [relevant realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm).

    5.  If *options*.`[keepExistingData](https://wicg.github.io/file-system-access/#dom-filesystemcreatewritableoptions-keepexistingdata)` is `true`:

        1.  Set *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) to a copy of *entry*'s [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data).

    6.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with *stream*.

3.  Return *result*.

### 2.5. The `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` interface[](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle)

**⚠**MDN

dictionary `FileSystemGetFileOptions` {
[boolean](https://heycam.github.io/webidl/#idl-boolean) `create` = false;
};

dictionary `FileSystemGetDirectoryOptions` {
[boolean](https://heycam.github.io/webidl/#idl-boolean) `create` = false;
};

dictionary `FileSystemRemoveOptions` {
[boolean](https://heycam.github.io/webidl/#idl-boolean) `recursive` = false;
};

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext), [Serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable)]
interface `FileSystemDirectoryHandle` : [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) {
async iterable<[USVString](https://heycam.github.io/webidl/#idl-USVString), [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)>;

[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)> [getFileHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle)([USVString](https://heycam.github.io/webidl/#idl-USVString) `name`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle-name-options-name), optional [FileSystemGetFileOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemgetfileoptions) `options`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle-name-options-options) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)> [getDirectoryHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle)([USVString](https://heycam.github.io/webidl/#idl-USVString) `name`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle-name-options-name), optional [FileSystemGetDirectoryOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemgetdirectoryoptions) `options`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle-name-options-options) = {});

[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [removeEntry](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry)([USVString](https://heycam.github.io/webidl/#idl-USVString) `name`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry-name-options-name), optional [FileSystemRemoveOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemremoveoptions) `options`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry-name-options-options) = {});

[Promise](https://heycam.github.io/webidl/#idl-promise)<[sequence](https://heycam.github.io/webidl/#idl-sequence)<[USVString](https://heycam.github.io/webidl/#idl-USVString)>?> [resolve](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve)([FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) `possibleDescendant`[](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve-possibledescendant-possibledescendant));
};

A `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)`'s associated [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) must be a [directory entry](https://wicg.github.io/file-system-access/#directory).

`[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` objects are [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects). Their [serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps) and [deserialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#deserialization-steps) are the same as those for `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)`.

**In the Origin Trial as available in Chrome 78, these objects are not yet serializable. In Chrome 82 they are.**

**In Chrome versions upto Chrome 85 `getFileHandle` and `getDirectoryHandle` where called `getFile` and `getDirectory` instead.**

#### 2.5.1. Directory iteration[](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle-asynciterable)

for await (let [*name*, *handle*] of *directoryHandle*) {}

for await (let [*name*, *handle*] of *directoryHandle* . entries()) {}

for await (let *handle* of *directoryHandle* . values()) {}

for await (let *name* of *directoryHandle* . keys()) {}

Iterates over all entries whose parent is the entry represented by *directoryHandle*. Entries that are created or deleted while the iteration is in progress might or might not be included. No guarantees are given either way.

**In Chrome this is currently implemented as a `directoryHandle.getEntries()` method that can be used in a `for await..of` loop. This `getEntries()` method returns more or less the same async iterable as what is returned by `values()` in this specification. The proper async iterable declaration is not yet implemented.**

[](https://wicg.github.io/file-system-access/#issue-cce0bb28) In the future we might want to add arguments to the async iterable declaration to support for example recursive iteration. [<https://github.com/wicg/file-system-access/issues/173>](https://github.com/wicg/file-system-access/issues/173)

The [asynchronous iterator initialization steps](https://heycam.github.io/webidl/#asynchronous-iterator-initialization-steps) for a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` *handle* ant its async iterator *iterator* are:

1.  Let *permissionStatus* be the result of [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission) given *handle* and `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)`.

2.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, throw a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)`.

3.  Set *iterator*'s past results to an empty [set](https://infra.spec.whatwg.org/#ordered-set).

To [get the next iteration result](https://heycam.github.io/webidl/#dfn-get-the-next-iteration-result) for a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` *handle* and its async iterator *iterator*:

1.  Let *promise* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Let *directory* be *handle*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

3.  Let *permissionStatus* be the result of [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission) given *handle* and `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)`.

4.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *promise* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and return *promise*.

5.  Let *child* be an [entry](https://wicg.github.io/file-system-access/#entry) in *directory*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children), such that *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) is not contained in *iterator*'s [past results](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle-iterator-past-results), or `null` if no such entry exists.

    Note: This is intentionally very vague about the iteration order. Different platforms and file systems provide different guarantees about iteration order, and we want it to be possible to efficiently implement this on all platforms. As such no guarantees are given about the exact order in which elements are returned.

6.  If *child* is `null`, then:

    1.  [Resolve](https://heycam.github.io/webidl/#resolve) *promise* with `undefined`.

7.  Otherwise:

    1.  [Append](https://infra.spec.whatwg.org/#set-append) *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) to *iterator*'s [past results](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle-iterator-past-results).

    2.  If *child* is a [file entry](https://wicg.github.io/file-system-access/#file):

        1.  Let *result* be a new `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` associated with *child*.

    3.  Otherwise:

        1.  Let *result* be a new `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` associated with *child*.

    4.  [Resolve](https://heycam.github.io/webidl/#resolve) *promise* with (_child_'s [name](https://wicg.github.io/file-system-access/#entry-name), *result*).

8.  Return *promise*.

#### 2.5.2. The `[getFileHandle()](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle)` method[](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle-getfilehandle)

**⚠**MDN

*fileHandle* = await *directoryHandle* . `[getFileHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle)`(_name_)

*fileHandle* = await *directoryHandle* . `[getFileHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle)`(_name_, { `[create](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create)`: false })

Returns a handle for a file named *name* in the directory represented by *directoryHandle*. If no such file exists, this rejects.

*fileHandle* = await *directoryHandle* . `[getFileHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle)`(_name_, { `[create](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create)`: true })

Returns a handle for a file named *name* in the directory represented by *directoryHandle*. If no such file exists, this creates a new file. If no file with named *name* can be created this rejects. Creation can fail because there already is a directory with the same name, because the name uses characters that aren't supported in file names on the underlying file system, or because the user agent for security reasons decided not to allow creation of the file.

This operation requires write permission, even if the file being returned already exists. If this handle doesn't already have write permission, this could result in a prompt being shown to the user. To get an existing file without needing write permission, call this method with `{ `[create](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create)`: false }`.

The `getFileHandle(*name*, *options*)` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  If *name* is not a [valid file name](https://wicg.github.io/file-system-access/#valid-file-name), [reject](https://heycam.github.io/webidl/#reject) *result* with a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)` and abort.

    2.  Let *entry* be **[this](https://heycam.github.io/webidl/#this)**'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

    3.  If *options*.`[create](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create)` is `true`:

        1.  Let *permissionStatus* be the result of [requesting file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`. If that throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

    4.  Otherwise:

        1.  Let *permissionStatus* be the result of [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)`.

    5.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *result* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

    6.  [For each](https://infra.spec.whatwg.org/#list-iterate) *child* of *entry*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children):

        1.  If *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) equals *name*:

            1.  If *child* is a [directory entry](https://wicg.github.io/file-system-access/#directory):

                1.  [Reject](https://heycam.github.io/webidl/#reject) *result* with a `[TypeMismatchError](https://heycam.github.io/webidl/#typemismatcherror)` and abort.

            2.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with a new `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` whose [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is *child* and abort.

    7.  If *options*.`[create](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create)` is `false`:

        1.  [Reject](https://heycam.github.io/webidl/#reject) *result* with a `[NotFoundError](https://heycam.github.io/webidl/#notfounderror)` and abort.

    8.  Let *child* be a new [file entry](https://wicg.github.io/file-system-access/#file).

    9.  Set *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) to *name*.

    10. Set *child*'s [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data) to an empty [byte sequence](https://infra.spec.whatwg.org/#byte-sequence).

    11. Set *child*'s [modification timestamp](https://wicg.github.io/file-system-access/#file-entry-modification-timestamp) to the current time.

    12. [Append](https://infra.spec.whatwg.org/#set-append) *child* to *entry*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children).

    13. If creating *child* in the underlying file system throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

        [](https://wicg.github.io/file-system-access/#issue-721a33e4) Better specify what possible exceptions this could throw. [<https://github.com/wicg/file-system-access/issues/68>](https://github.com/wicg/file-system-access/issues/68)

    14. [Resolve](https://heycam.github.io/webidl/#resolve) *result* with a new `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` whose [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is *child*.

3.  Return *result*.

#### 2.5.3. The `[getDirectoryHandle()](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle)` method[](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle-getdirectoryhandle)

**⚠**MDN

*subdirHandle* = await *directoryHandle* . `[getDirectoryHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle)`(_name_)

*subdirHandle* = await *directoryHandle* . `[getDirectoryHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle)`(_name_, { `[create](https://wicg.github.io/file-system-access/#dom-filesystemgetdirectoryoptions-create)`: false })

Returns a handle for a directory named *name* in the directory represented by *directoryHandle*. If no such directory exists, this rejects.

*subdirHandle* = await *directoryHandle* . `[getDirectoryHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle)`(_name_, { `[create](https://wicg.github.io/file-system-access/#dom-filesystemgetdirectoryoptions-create)`: true })

Returns a handle for a directory named *name* in the directory represented by *directoryHandle*. If no such directory exists, this creates a new directory. If creating the directory failed, this rejects. Creation can fail because there already is a file with the same name, or because the name uses characters that aren't supported in file names on the underlying file system.

This operation requires write permission, even if the directory being returned already exists. If this handle doesn't already have write permission, this could result in a prompt being shown to the user. To get an existing directory without needing write permission, call this method with `{ `[create](https://wicg.github.io/file-system-access/#dom-filesystemgetdirectoryoptions-create)`: false }`.

The `getDirectoryHandle(*name*, *options*)` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  If *name* is not a [valid file name](https://wicg.github.io/file-system-access/#valid-file-name), [reject](https://heycam.github.io/webidl/#reject) *result* with a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)` and abort.

    2.  Let *entry* be **[this](https://heycam.github.io/webidl/#this)**'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

    3.  If *options*.`[create](https://wicg.github.io/file-system-access/#dom-filesystemgetdirectoryoptions-create)` is `true`:

        1.  Let *permissionStatus* be the result of [requesting file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`. If that throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

    4.  Otherwise:

        1.  Let *permissionStatus* be the result of [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)`.

    5.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *result* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

    6.  [For each](https://infra.spec.whatwg.org/#list-iterate) *child* of *entry*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children):

        1.  If *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) equals *name*:

            1.  If *child* is a [file entry](https://wicg.github.io/file-system-access/#file):

                1.  [Reject](https://heycam.github.io/webidl/#reject) *result* with a `[TypeMismatchError](https://heycam.github.io/webidl/#typemismatcherror)` and abort.

            2.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with a new `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` whose [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is *child* and abort.

    7.  If *options*.`[create](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create)` is `false`:

        1.  [Reject](https://heycam.github.io/webidl/#reject) *result* with a `[NotFoundError](https://heycam.github.io/webidl/#notfounderror)` and abort.

    8.  Let *child* be a new [directory entry](https://wicg.github.io/file-system-access/#directory).

    9.  Set *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) to *name*.

    10. Set *child*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children) to an empty [set](https://infra.spec.whatwg.org/#ordered-set).

    11. [Append](https://infra.spec.whatwg.org/#set-append) *child* to *entry*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children).

    12. If creating *child* in the underlying file system throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

        [](https://wicg.github.io/file-system-access/#issue-721a33e4%E2%91%A0) Better specify what possible exceptions this could throw. [<https://github.com/wicg/file-system-access/issues/68>](https://github.com/wicg/file-system-access/issues/68)

    13. [Resolve](https://heycam.github.io/webidl/#resolve) *result* with a new `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` whose [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is *child*.

3.  Return *result*.

#### 2.5.4. The `[removeEntry()](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry)` method[](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle-removeentry)

**⚠**MDN

await *directoryHandle* . `[removeEntry](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry)`(_name_)

await *directoryHandle* . `[removeEntry](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry)`(_name_, { `[recursive](https://wicg.github.io/file-system-access/#dom-filesystemremoveoptions-recursive)`: false })

If the directory represented by *directoryHandle* contains a file named *name*, or an empty directory named *name*, this will attempt to delete that file or directory.

Attempting to delete a file or directory that does not exist is considered success, while attempting to delete a non-empty directory will result in a promise rejection.

await *directoryHandle* . `[removeEntry](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry)`(_name_, { `[recursive](https://wicg.github.io/file-system-access/#dom-filesystemremoveoptions-recursive)`: true })

Removes the entry named *name* in the directory represented by *directoryHandle*. If that entry is a directory, its contents will also be deleted recursively. recursively.

Attempting to delete a file or directory that does not exist is considered success.

The `removeEntry(*name*, *options*)` method, when invoked, must run these steps:

1.  Let *result* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  If *name* is not a [valid file name](https://wicg.github.io/file-system-access/#valid-file-name), [reject](https://heycam.github.io/webidl/#reject) *result* with a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)` and abort.

    2.  Let *entry* be **[this](https://heycam.github.io/webidl/#this)**'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

    3.  Let *permissionStatus* be the result of [requesting file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission) given **[this](https://heycam.github.io/webidl/#this)** and `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`. If that throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

    4.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *result* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

    5.  [For each](https://infra.spec.whatwg.org/#list-iterate) *child* of *entry*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children):

        1.  If *child*'s [name](https://wicg.github.io/file-system-access/#entry-name) equals *name*:

            1.  If *child* is a [directory entry](https://wicg.github.io/file-system-access/#directory):

                1.  If *child*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children) is not [empty](https://infra.spec.whatwg.org/#list-is-empty) and *options*.`[recursive](https://wicg.github.io/file-system-access/#dom-filesystemremoveoptions-recursive)` is `false`:

                    1.  [Reject](https://heycam.github.io/webidl/#reject) *result* with an `[InvalidModificationError](https://heycam.github.io/webidl/#invalidmodificationerror)` and abort.

            2.  [Remove](https://infra.spec.whatwg.org/#list-remove) *child* from *entry*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children).

            3.  If removing *child* in the underlying file system throws an exception, [reject](https://heycam.github.io/webidl/#reject) *result* with that exception and abort.

                Note: If `[recursive](https://wicg.github.io/file-system-access/#dom-filesystemremoveoptions-recursive)` is `true`, the removal can fail non-atomically. Some files or directories might have been removed while other files or directories still exist.

                [](https://wicg.github.io/file-system-access/#issue-721a33e4%E2%91%A1) Better specify what possible exceptions this could throw. [<https://github.com/wicg/file-system-access/issues/68>](https://github.com/wicg/file-system-access/issues/68)

            4.  [Resolve](https://heycam.github.io/webidl/#resolve) *result* with `undefined`.

    6.  [Reject](https://heycam.github.io/webidl/#reject) *result* with a `[NotFoundError](https://heycam.github.io/webidl/#notfounderror)`.

3.  Return *result*.

#### 2.5.5. The `[resolve()](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve)` method[](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle-resolve)

**⚠**MDN

*path* = await *directory* . `[resolve](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve)`( *child* )

If *child* is equal to *directory*, *path* will be an empty array.

If *child* is a direct child of *directory*, *path* will be an array containing *child*'s name.

If *child* is a descendant of *directory*, *path* will be an array containing the names of all the intermediate directories and *child*'s name as last element. For example if *directory* represents `/home/user/project` and *child* represents `/home/user/project/foo/bar`, this will return `['foo', 'bar']`.

Otherwise (*directory* and *child* are not related), *path* will be null.

This functionality can be useful if a web application shows a directory listing to highlight a file opened through a file picker in that directory listing.

**This method is first available in Chrome 82.**

[](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle-resolve-example)

// Assume we at some point got a valid directory handle.
const dir_ref = current_project_dir;
if (!dir_ref) return;

// Now get a file reference by showing a file picker:
const file_ref = await self.showOpenFilePicker();
if (!file_ref) {
// User cancelled, or otherwise failed to open a file.
return;
}

// Check if file_ref exists inside dir_ref:
const relative_path = await dir_ref.resolve(file_ref);
if (relative_path === null) {
// Not inside dir_ref
} else {
// relative_path is an array of names, giving the relative path
// from dir_ref to the file that is represented by file_ref:
assert relative_path.pop() === file_ref.name;

    let entry = dir_ref;
    for (const name of relative_path) {
        entry = await entry.getDirectory(name);
    }
    entry = await entry.getFile(file_ref.name);

    // Now |entry| will represent the same file on disk as |file_ref|.
    assert await entry.isSameEntry(file_ref) === true;

}

The `resolve(*possibleDescendant*)` method, when invoked, must return the result of [resolving](https://wicg.github.io/file-system-access/#entry-resolve) *possibleDescendant*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) relative to [this](https://heycam.github.io/webidl/#this)'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

### 2.6. The `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` interface[](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream)

**⚠**MDN

enum `WriteCommandType` {
`"write"`,
`"seek"`,
`"truncate"`,
};

dictionary `WriteParams` {
required [WriteCommandType](https://wicg.github.io/file-system-access/#enumdef-writecommandtype) `type`;
[unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long)? `size`;
[unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long)? `position`;
([BufferSource](https://heycam.github.io/webidl/#BufferSource) or [Blob](https://w3c.github.io/FileAPI/#dfn-Blob) or [USVString](https://heycam.github.io/webidl/#idl-USVString))? `data`;
};

typedef ([BufferSource](https://heycam.github.io/webidl/#BufferSource) or [Blob](https://w3c.github.io/FileAPI/#dfn-Blob) or [USVString](https://heycam.github.io/webidl/#idl-USVString) or [WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams)) `FileSystemWriteChunkType`;

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext)]
interface `FileSystemWritableFileStream` : [WritableStream](https://streams.spec.whatwg.org/#writablestream) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)([FileSystemWriteChunkType](https://wicg.github.io/file-system-access/#typedefdef-filesystemwritechunktype) `data`[](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write-data-data));
[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [seek](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek)([unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long) `position`[](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek-position-position));
[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [truncate](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate)([unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long) `size`[](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate-size-size));
};

A `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` has an associated [[file]] (a [file entry](https://wicg.github.io/file-system-access/#file)).

A `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` has an associated [[buffer]] (a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence)). It is initially empty.

Note: This buffer can get arbitrarily large, so it is expected that implementations will not keep this in memory, but instead use a temporary file for this. All access to [[buffer]] is done in promise returning methods and algorithms, so even though operations on it seem sync, implementations can implement them async.

A `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` has an associated [[seekOffset]] (a number). It is initially 0.

A `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` object is a `[WritableStream](https://streams.spec.whatwg.org/#writablestream)` object with additional convenience methods, which operates on a single file on disk.

Upon creation, an underlying sink will have been created and the stream will be usable. All operations executed on the stream are queuable and producers will be able to respond to backpressure.

The underlying sink's write method, and therefore `[WritableStreamDefaultWriter's write()](https://streams.spec.whatwg.org/#default-writer-write)` method, will accept byte-like data or `[WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams)` as input.

The `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` has a file position cursor initialized at byte offset 0 from the top of the file. When using `[write()](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)` or by using WritableStream capabilities through the `[WritableStreamDefaultWriter's write()](https://streams.spec.whatwg.org/#default-writer-write)` method, this position will be advanced based on the number of bytes written through the stream object.

Similarly, when piping a `[ReadableStream](https://streams.spec.whatwg.org/#readablestream)` into a `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` object, this position is updated with the number of bytes that passed through the stream.

`[getWriter()](https://streams.spec.whatwg.org/#ws-get-writer)` returns an instance of `[WritableStreamDefaultWriter](https://streams.spec.whatwg.org/#writablestreamdefaultwriter)`.

To create a new FileSystemWritableFileStream given a [file entry](https://wicg.github.io/file-system-access/#file) *file* in a [Realm](https://tc39.github.io/ecma262/#realm) *realm*, perform the following steps:

1.  Let *stream* be a [new](https://heycam.github.io/webidl/#new) `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` in *realm*.

2.  Set *stream*.[[[file]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-file) to *file*.

3.  Let *writeAlgorithm* be an algorithm which takes a *chunk* argument and returns the result of running the [write a chunk](https://wicg.github.io/file-system-access/#write-a-chunk) algorithm with *stream* and *chunk*.

4.  Let *closeAlgorithm* be the following steps:

    1.  Let *closeResult* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

    2.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

        1.  Let *permissionStatus* be the [permission state](https://w3c.github.io/permissions/#dfn-permission-state) for a `[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)` with `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` representing *stream*.[[[file]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-file), and `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` = `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`.

        2.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *closeResult* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

        3.  Perform user agent-specific [malware scans and safe browsing checks](https://wicg.github.io/file-system-access/#wellknowndirectory-malware-scans-and-safe-browsing-checks). If these checks fail, [reject](https://heycam.github.io/webidl/#reject) *closeResult* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

        4.  Set *stream*.[[[file]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-file)'s [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data) to *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer). If that throws an exception, [reject](https://heycam.github.io/webidl/#reject) *closeResult* with that exception and abort.

            Note: It is expected that this atomically updates the contents of the file on disk being written to.

        5.  [Resolve](https://heycam.github.io/webidl/#resolve) *closeResult* with `undefined`.

    3.  Return *closeResult*.

5.  Let *highWaterMark* be 1.

6.  Let *sizeAlgorithm* be an algorithm that returns `1`.

7.  [Set up](https://streams.spec.whatwg.org/#writablestream-set-up) *stream* with [_writeAlgorithm_](https://streams.spec.whatwg.org/#writablestream-set-up-writealgorithm) set to *writeAlgorithm*, [_closeAlgorithm_](https://streams.spec.whatwg.org/#writablestream-set-up-closealgorithm) set to *closeAlgorithm*, [_highWaterMark_](https://streams.spec.whatwg.org/#writablestream-set-up-highwatermark) set to *highWaterMark*, and [_sizeAlgorithm_](https://streams.spec.whatwg.org/#writablestream-set-up-sizealgorithm) set to *sizeAlgorithm*.

8.  Return *stream*.

The write a chunk algorithm, given a `[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)` *stream* and *chunk*, runs these steps:

1.  Let *input* be the result of [converting](https://infra.spec.whatwg.org/#javascript-string-convert) *chunk* to a `[FileSystemWriteChunkType](https://wicg.github.io/file-system-access/#typedefdef-filesystemwritechunktype)`. If this throws an exception, then return [a promise rejected with](https://heycam.github.io/webidl/#a-promise-rejected-with) that exception.

2.  Let *p* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

3.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Let *permissionStatus* be the [permission state](https://w3c.github.io/permissions/#dfn-permission-state) for a `[FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor)` with `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` representing *stream*.[[[file]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-file), and `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` = `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`.

    2.  If *permissionStatus* is not `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`, reject *p* with a `[NotAllowedError](https://heycam.github.io/webidl/#notallowederror)` and abort.

    3.  Let *command* be *input*.`[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)` if *input* is a `[WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams)`, and `["write"](https://wicg.github.io/file-system-access/#dom-writecommandtype-write)` otherwise.

    4.  If *command* is `["write"](https://wicg.github.io/file-system-access/#dom-writecommandtype-write)`:

        1.  Let *data* be *input*.`[data](https://wicg.github.io/file-system-access/#dom-writeparams-data)` if *input* is a `[WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams)`, and *input* otherwise.

        2.  If *data* is `undefined`, reject *p* with a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)` and abort.

        3.  Let *writePosition* be *stream*.[[[seekOffset]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-seekoffset).

        4.  If *input* is a `[WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams)` and *input*.`[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)` is not `undefined`, set *writePosition* to *input*.`[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)`.

        5.  Let *oldSize* be *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer)'s [length](https://infra.spec.whatwg.org/#byte-sequence-length).

        6.  If *data* is a `[BufferSource](https://heycam.github.io/webidl/#BufferSource)`, let *dataBytes* be [a copy of](https://heycam.github.io/webidl/#dfn-get-buffer-source-copy) *data*.

        7.  Else if *data* is a `[Blob](https://w3c.github.io/FileAPI/#dfn-Blob)`:

            1.  Let *dataBytes* be the result of performing the [read operation](https://w3c.github.io/FileAPI/#readOperation) on *data*. If this throws an exception, [reject](https://heycam.github.io/webidl/#reject) *p* with that exception and abort.

        8.  Else:

            1.  [Assert](https://infra.spec.whatwg.org/#assert): *data* is a `[USVString](https://heycam.github.io/webidl/#idl-USVString)`.

            2.  Let *dataBytes* be the result of [UTF-8 encoding](https://encoding.spec.whatwg.org/#utf-8-encode) *data*.

        9.  If *writePosition* is larger than *oldSize*, append *writePosition* - *oldSize* `0x00` (NUL) bytes to the end of *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer).

            Note: Implementations are expected to behave as if the skipped over file contents are indeed filled with NUL bytes. That doesn't mean these bytes have to actually be written to disk and take up disk space. Instead most file systems support so called sparse files, where these NUL bytes don't take up actual disk space.

        10. Let *head* be a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) containing the first *writePosition* bytes of *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer).

        11. Let *tail* be an empty [byte sequence](https://infra.spec.whatwg.org/#byte-sequence).

        12. If *writePosition* + *data*.[length](https://infra.spec.whatwg.org/#byte-sequence-length) is smaller than *oldSize*:

            1.  Let *tail* be a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) containing the last *oldSize* - (*writePosition* + *data*.[length](https://infra.spec.whatwg.org/#byte-sequence-length)) bytes of *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer).

        13. Set *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) to the concatenation of *head*, *data* and *tail*.

        14. If the operations modifying *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) in the previous steps failed due to exceeding the [storage quota](https://storage.spec.whatwg.org/#storage-quota), [reject](https://heycam.github.io/webidl/#reject) *p* with a `[QuotaExceededError](https://heycam.github.io/webidl/#quotaexceedederror)` and abort, leaving *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) unmodified.

            Note: [Storage quota](https://storage.spec.whatwg.org/#storage-quota) only applies to files stored in the [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system). However this operation could still fail for other files, for example if the disk being written to runs out of disk space.

        15. Set *stream*.[[[seekOffset]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-seekoffset) to *writePosition* + *data*.[length](https://infra.spec.whatwg.org/#byte-sequence-length).

        16. [Resolve](https://heycam.github.io/webidl/#resolve) *p*.

    5.  Else if *command* is `["seek"](https://wicg.github.io/file-system-access/#dom-writecommandtype-seek)`:

        1.  If *chunk*.`[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)` is `undefined`, [reject](https://heycam.github.io/webidl/#reject) *p* with a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)` and abort.

        2.  Set *stream*.[[[seekOffset]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-seekoffset) to *chunk*.`[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)`.

        3.  [Resolve](https://heycam.github.io/webidl/#resolve) *p*.

    6.  Else if *command* is `["truncate"](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate)`:

        1.  If *chunk*.`[size](https://wicg.github.io/file-system-access/#dom-writeparams-size)` is `undefined`, [reject](https://heycam.github.io/webidl/#reject) *p* with a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)` and abort.

        2.  Let *newSize* be *chunk*.`[size](https://wicg.github.io/file-system-access/#dom-writeparams-size)`.

        3.  Let *oldSize* be *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer)'s [length](https://infra.spec.whatwg.org/#byte-sequence-length).

        4.  If *newSize* is larger than *oldSize*:

            1.  Set *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) to a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) formed by concating *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) with a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) containing *newSize*-*oldSize* `0x00` bytes.

            2.  If the operation in the previous step failed due to exceeding the [storage quota](https://storage.spec.whatwg.org/#storage-quota), [reject](https://heycam.github.io/webidl/#reject) *p* with a `[QuotaExceededError](https://heycam.github.io/webidl/#quotaexceedederror)` and abort, leaving *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) unmodified.

                Note: [Storage quota](https://storage.spec.whatwg.org/#storage-quota) only applies to files stored in the [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system). However this operation could still fail for other files, for example if the disk being written to runs out of disk space.

        5.  Else if *newSize* is smaller than *oldSize*:

            1.  Set *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer) to a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) containing the first *newSize* bytes in *stream*.[[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer).

        6.  If *stream*.[[[seekOffset]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-seekoffset) is bigger than *newSize*, set *stream*.[[[seekOffset]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-seekoffset) to *newSize*.

        7.  [Resolve](https://heycam.github.io/webidl/#resolve) *p*.

4.  Return *p*.

#### 2.6.1. The `[write()](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)` method[](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream-write)

await *stream* . `[write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)`(_data_)

await *stream* . `[write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)`({ `[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)`: `["write"](https://wicg.github.io/file-system-access/#dom-writecommandtype-write)`, `[data](https://wicg.github.io/file-system-access/#dom-writeparams-data)`: *data* })

Writes the content of *data* into the file associated with *stream* at the current file cursor offset.

No changes are written to the actual file on disk until the stream has been closed. Changes are typically written to a temporary file instead.

await *stream* . `[write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)`({ `[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)`: `["write"](https://wicg.github.io/file-system-access/#dom-writecommandtype-write)`, `[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)`: *position*, `[data](https://wicg.github.io/file-system-access/#dom-writeparams-data)`: *data* })

Writes the content of *data* into the file associated with *stream* at *position* bytes from the top of the file. Also updates the current file cursor offset to the end of the written data.

No changes are written to the actual file on disk until the stream has been closed. Changes are typically written to a temporary file instead.

await *stream* . `[write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)`({ `[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)`: `["seek"](https://wicg.github.io/file-system-access/#dom-writecommandtype-seek)`, `[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)`: *position* })

Updates the current file cursor offset the *position* bytes from the top of the file.

await *stream* . `[write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)`({ `[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)`: `["truncate"](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate)`, `[size](https://wicg.github.io/file-system-access/#dom-writeparams-size)`: *size* })

Resizes the file associated with *stream* to be *size* bytes long. If *size* is larger than the current file size this pads the file with null bytes, otherwise it truncates the file.

The file cursor is updated when `[truncate](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate)` is called. If the offset is smaller than offset, it remains unchanged. If the offset is larger than *size*, the offset is set to *size* to ensure that subsequent writes do not error.

No changes are written to the actual file until on disk until the stream has been closed. Changes are typically written to a temporary file instead.

**⚠**MDN

The `write(*data*)` method, when invoked, must run these steps:

1.  Let *writer* be the result of [getting a writer](https://streams.spec.whatwg.org/#writablestream-get-a-writer) for [this](https://heycam.github.io/webidl/#this).

2.  Let *result* be the result of [writing a chunk](https://streams.spec.whatwg.org/#writablestreamdefaultwriter-write-a-chunk) to *writer* given *data*.

3.  [Release](https://streams.spec.whatwg.org/#writablestreamdefaultwriter-release) *writer*.

4.  Return *result*.

#### 2.6.2. The `[seek()](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek)` method[](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream-seek)

await *stream* . `[seek](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek)`(_position_)

Updates the current file cursor offset the *position* bytes from the top of the file.

**⚠**MDN

The `seek(*position*)` method, when invoked, must run these steps:

1.  Let *writer* be the result of [getting a writer](https://streams.spec.whatwg.org/#writablestream-get-a-writer) for [this](https://heycam.github.io/webidl/#this).

2.  Let *result* be the result of [writing a chunk](https://streams.spec.whatwg.org/#writablestreamdefaultwriter-write-a-chunk) to *writer* given «[ "`[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)`" → `["seek"](https://wicg.github.io/file-system-access/#dom-writecommandtype-seek)`, "`[position](https://wicg.github.io/file-system-access/#dom-writeparams-position)`" → *position* ]».

3.  [Release](https://streams.spec.whatwg.org/#writablestreamdefaultwriter-release) *writer*.

4.  Return *result*.

#### 2.6.3. The `[truncate()](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate)` method[](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream-truncate)

await *stream* . `[truncate](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate)`(_size_)

Resizes the file associated with *stream* to be *size* bytes long. If *size* is larger than the current file size this pads the file with null bytes, otherwise it truncates the file.

The file cursor is updated when `[truncate](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate)` is called. If the offset is smaller than offset, it remains unchanged. If the offset is larger than *size*, the offset is set to *size* to ensure that subsequent writes do not error.

No changes are written to the actual file until on disk until the stream has been closed. Changes are typically written to a temporary file instead.

**⚠**MDN

The `truncate(*size*)` method, when invoked, must run these steps:

1.  Let *writer* be the result of [getting a writer](https://streams.spec.whatwg.org/#writablestream-get-a-writer) for [this](https://heycam.github.io/webidl/#this).

2.  Let *result* be the result of [writing a chunk](https://streams.spec.whatwg.org/#writablestreamdefaultwriter-write-a-chunk) to *writer* given «[ "`[type](https://wicg.github.io/file-system-access/#dom-writeparams-type)`" → `["truncate"](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate)`, "`[size](https://wicg.github.io/file-system-access/#dom-writeparams-size)`" → *size* ]».

3.  [Release](https://streams.spec.whatwg.org/#writablestreamdefaultwriter-release) *writer*.

4.  Return *result*.

## 3\. Accessing Local File System[](https://wicg.github.io/file-system-access/#local-filesystem)

enum [WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory) {
["desktop"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-desktop),
["documents"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-documents),
["downloads"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-downloads),
["music"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-music),
["pictures"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-pictures),
["videos"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-videos),
};

typedef ([WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory) or [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)) `StartInDirectory`;

dictionary `FilePickerAcceptType` {
[USVString](https://heycam.github.io/webidl/#idl-USVString) `description`;
[record](https://heycam.github.io/webidl/#idl-record)<[USVString](https://heycam.github.io/webidl/#idl-USVString), ([USVString](https://heycam.github.io/webidl/#idl-USVString) or [sequence](https://heycam.github.io/webidl/#idl-sequence)<[USVString](https://heycam.github.io/webidl/#idl-USVString)>)> `accept`;
};

dictionary `FilePickerOptions` {
[sequence](https://heycam.github.io/webidl/#idl-sequence)<[FilePickerAcceptType](https://wicg.github.io/file-system-access/#dictdef-filepickeraccepttype)> `types`;
[boolean](https://heycam.github.io/webidl/#idl-boolean) `excludeAcceptAllOption` = false;
[DOMString](https://heycam.github.io/webidl/#idl-DOMString) `id`;
[StartInDirectory](https://wicg.github.io/file-system-access/#typedefdef-startindirectory) `startIn`;
};

dictionary `OpenFilePickerOptions` : [FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions) {
[boolean](https://heycam.github.io/webidl/#idl-boolean) `multiple` = false;
};

dictionary `SaveFilePickerOptions` : [FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions) {
[USVString](https://heycam.github.io/webidl/#idl-USVString)? `suggestedName`;
};

dictionary `DirectoryPickerOptions` {
[DOMString](https://heycam.github.io/webidl/#idl-DOMString) `id`;
[StartInDirectory](https://wicg.github.io/file-system-access/#typedefdef-startindirectory) `startIn`;
};

[[SecureContext](https://heycam.github.io/webidl/#SecureContext)]
partial interface [Window](https://html.spec.whatwg.org/multipage/window-object.html#window) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[sequence](https://heycam.github.io/webidl/#idl-sequence)<[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)>> [showOpenFilePicker](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)(optional [OpenFilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-openfilepickeroptions) `options`[](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker-options-options) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)> [showSaveFilePicker](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)(optional [SaveFilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-savefilepickeroptions) `options`[](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker-options-options) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)> [showDirectoryPicker](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker)(optional [DirectoryPickerOptions](https://wicg.github.io/file-system-access/#dictdef-directorypickeroptions) `options`[](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker-options-options) = {});
};

The `[showOpenFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)`, `[showSaveFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)` and `[showDirectoryPicker()](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker)` methods are together known as the local file system handle factories.

Note: What is referred to as the "local file system" in this spec, does not have to strictly refer to the file system on the local device. What we call the local file system could just as well be backed by a cloud provider. For example on Chrome OS these file pickers will also let you pick files and directories on Google Drive.

**In Chrome versions earlier than 85, this was implemented as a generic `chooseFileSystemEntries` method.**

### 3.1. Local File System Permissions[](https://wicg.github.io/file-system-access/#local-file-system-permissions)

The fact that the user picked the specific files returned by the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories) in a prompt should be treated by the user agent as the user intending to grant read access to the website for the returned files. As such, at the time the promise returned by one of the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories) resolves, [permission state](https://w3c.github.io/permissions/#dfn-permission-state) for a descriptor with `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` set to the returned handle, and `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` set to `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)` should be `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`.

Additionally for calls to `[showSaveFilePicker](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)` the [permission state](https://w3c.github.io/permissions/#dfn-permission-state) for a descriptor with `[handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle)` set to the returned handle, and `[mode](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode)` set to `[readwrite](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)` should be `["granted"](https://w3c.github.io/permissions/#dom-permissionstate-granted)`.

To verify that an *environment* is allowed to show a file picker, run these steps:

1.  If *environment*'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin) is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), return [a promise rejected with](https://heycam.github.io/webidl/#a-promise-rejected-with) a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

2.  If *environment*'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin) is not [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) with *environment*'s [top-level origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-top-level-origin), return [a promise rejected with](https://heycam.github.io/webidl/#a-promise-rejected-with) a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

3.  Let *global* be *environment*'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).

4.  If *global* does not have [transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation), throw a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

### 3.2. File picker options[](https://wicg.github.io/file-system-access/#api-filepickeroptions)

#### 3.2.1. Accepted file types[](https://wicg.github.io/file-system-access/#api-filepickeroptions-types)

The `[showOpenFilePicker(options)](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)` and `[showSaveFilePicker(options)](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)` methods accept a `[FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions)` argument, which lets the website specify the types of files the file picker will let the user select.

Each entry in `[types](https://wicg.github.io/file-system-access/#dom-filepickeroptions-types)` specifies a single user selectable option for filtering the files displayed in the file picker.

Each option consists of an optional `[description](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-description)` and a number of MIME types and extensions (specified as a mapping of MIME type to a list of extensions). If no description is provided one will be generated. Extensions have to be strings that start with a "." and only contain [valid suffix code points](https://wicg.github.io/file-system-access/#valid-suffix-code-point). Additionally extensions are limited to a length of 16 code points.

In addition to complete MIME types, "_" can be used as the subtype of a MIME type to match for example all image formats with "image/_".

Websites should always provide both MIME types and file extensions for each option. On platforms that only use file extensions to describe file types user agents can match on the extensions, while on platforms that don't use extensions, user agents can match on MIME type.

By default the file picker will also include an option to not apply any filter, letting the user select any file. Set `[excludeAcceptAllOption](https://wicg.github.io/file-system-access/#dom-filepickeroptions-excludeacceptalloption)` to `true` to not include this option in the file picker.

For example , the following options will let the user pick one of three different filters. One for text files (either plain text or HTML), one for images, and a third one that doesn't apply any filter and lets the user select any file.

[](https://wicg.github.io/file-system-access/#filepickeroptions-types-example1)const options = {
`[types](https://wicg.github.io/file-system-access/#dom-filepickeroptions-types)`: [
{
`[description](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-description)`: 'Text Files',
`[accept](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept)`: {
'text/plain': ['.txt', '.text'],
'text/html': ['.html', '.htm']
}
},
{
`[description](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-description)`: 'Images',
`[accept](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept)`: {
'image/\*': ['.png', '.gif', '.jpeg', '.jpg']
}
}
],
};

On the other hand, the following example will only let the user select SVG files. The dialog will not show an option to not apply any filters.

[](https://wicg.github.io/file-system-access/#filepickeroptions-types-example2)const options = {
`[types](https://wicg.github.io/file-system-access/#dom-filepickeroptions-types)`: [
{
`[accept](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept)`: {
'image/svg+xml': '.svg'
}
},
],
`[excludeAcceptAllOption](https://wicg.github.io/file-system-access/#dom-filepickeroptions-excludeacceptalloption)`: true
};

To process accept types, given `[FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions)` *options*, run these steps:

1.  Let *accepts options* be a empty [list](https://infra.spec.whatwg.org/#list) of [pairs](https://infra.spec.whatwg.org/#pair).

2.  [For each](https://infra.spec.whatwg.org/#list-iterate) *type* of *options*.`[types](https://wicg.github.io/file-system-access/#dom-filepickeroptions-types)`:

    1.  Let *description* be *type*.`[description](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-description)`.

    2.  [For each](https://infra.spec.whatwg.org/#map-iterate) *typeString* → *suffixes* of *type*.`[accept](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept)`:

        1.  Let *parsedType* be the result of [parse a MIME type](https://mimesniff.spec.whatwg.org/#parse-a-mime-type) with *typeString*.

        2.  If *parsedType* is failure, throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

        3.  If *parsedType*'s [parameters](https://mimesniff.spec.whatwg.org/#parameters) are not empty, throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

        4.  If *suffixes* is a string:

            1.  [Validate a suffix](https://wicg.github.io/file-system-access/#validate-a-suffix) given *suffixes*.

        5.  Otherwise, [for each](https://infra.spec.whatwg.org/#list-iterate) *suffix* of *suffixes*:

            1.  [Validate a suffix](https://wicg.github.io/file-system-access/#validate-a-suffix) given *suffix*.

    3.  Let *filter* be the following steps, given a *filename* (a [string](https://infra.spec.whatwg.org/#string)), and a *type* (a [MIME type](https://mimesniff.spec.whatwg.org/#mime-type)):

        1.  [For each](https://infra.spec.whatwg.org/#map-iterate) *typeString* → *suffixes* of *type*.`[accept](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept)`:

        2.  Let *parsedType* be the result of [parse a MIME type](https://mimesniff.spec.whatwg.org/#parse-a-mime-type) with *typeString*.

            1.  If *parsedType*'s [subtype](https://mimesniff.spec.whatwg.org/#subtype) is "\*":

                1.  If *parsedType*'s [type](https://mimesniff.spec.whatwg.org/#type) is "\*", return `true`.

                2.  If *parsedType*'s [type](https://mimesniff.spec.whatwg.org/#type) is *type*'s [type](https://mimesniff.spec.whatwg.org/#type), return `true`.

            2.  _parsedType_'s [essence](https://mimesniff.spec.whatwg.org/#mime-type-essence) is *type*'s [essence](https://mimesniff.spec.whatwg.org/#mime-type-essence), return `true`.

            3.  If *suffixes* is a string, set *suffixes* to « *suffixes* ».

            4.  [For each](https://infra.spec.whatwg.org/#list-iterate) *suffix* of *suffixes*:

                1.  If *filename* ends with *suffix*, return `true`.

        3.  Return `false`.

    4.  If *description* is an empty string, set *description* to some user understandable string describing *filter*.

    5.  [Append](https://infra.spec.whatwg.org/#list-append) *description*/*filter* to *accepts options*.

3.  If either *accepts options* is [empty](https://infra.spec.whatwg.org/#list-empty), or *options*.`[excludeAcceptAllOption](https://wicg.github.io/file-system-access/#dom-filepickeroptions-excludeacceptalloption)` is `false`:

    1.  Let *description* be a user understandable string describing "all files".

        1.  Let *filter* be an algorithm that returns `true`.

        2.  [Append](https://infra.spec.whatwg.org/#list-append) *description*/*filter* to *accepts options*.

4.  If *accepts options* is empty, throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

5.  Return *accepts options*.

To validate a suffix *suffix*, run the following steps:

1.  If *suffix* does not [start with](https://infra.spec.whatwg.org/#string-starts-with) ".", throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

2.  If *suffix* contains any [code points](https://infra.spec.whatwg.org/#code-point) that are not [valid suffix code points](https://wicg.github.io/file-system-access/#valid-suffix-code-point), throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

3.  If *suffix* ends with ".", throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

4.  If *suffix*'s [length](https://infra.spec.whatwg.org/#string-length) is more than 16, throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

#### 3.2.2. Starting Directory[](https://wicg.github.io/file-system-access/#api-filepickeroptions-starting-directory)

The `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` and `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` fields can be specified to suggest the directory in which the file picker opens.

If neither of these options are specified, the user agent remembers the last directory a file or directory was picked from, and new pickers will start out in that directory. By specifying an `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` the user agent can remember different directories for different IDs (user agents will only remember directories for a limited number of IDs).

[](https://wicg.github.io/file-system-access/#filepickeroptions-starting-directory-example1)// If a mapping exists from this ID to a previousy picked directory, start in
// this directory. Otherwise, a mapping will be created from this ID to the
// directory of the resulting file picker invocation.
const options = {
`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`: 'foo',
};

Specifying `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` as a `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` will result in the dialog starting in the parent directory of that file, while passing in a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` will result in the dialog to start in the passed in directory. These take precedence even if an explicit `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` is also passed in.

For example, given a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` *project_dir*, the following will show a file picker that starts out in that directory:

[](https://wicg.github.io/file-system-access/#filepickeroptions-starting-directory-example2)// The picker will open to the directory of |project_dir| regardless of whether
// 'foo' has a valid mapping.
const options = {
`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`: 'foo',
`[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)`: |project_dir|,
};

The `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` and `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` fields control only the directory the picker opens to. In the above example, it cannot be assumed that the `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` 'foo' will map to the same directory as *project_dir* once the file picker operation has completed.

Specifying `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` as a `[WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory)` will result in the dialog starting in that directory, unless an explicit `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` was also passed in which has a mapping to a valid directory.

Below is an example of specifying both an `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` and `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` as a `[WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory)`. If there is an existing mapping from the given ID to a path, this mapping is used. Otherwise, the path suggested via the `[WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory)` is used.

[](https://wicg.github.io/file-system-access/#filepickeroptions-starting-directory-example3)// First time specifying the ID 'foo'. It is not mapped to a directory.
// The file picker will fall back to opening to the Downloads directory. TODO: link this.
const options = {
`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`: 'foo', // Unmapped.
`[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)`: `["downloads"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-downloads)`, // Start here.
};

// Later...

// The ID 'foo' might or might not be mapped. For example, the mapping for this ID
// might have been evicted.
const options = {
`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`: 'foo', // Maybe mapped. If so, start here.
`[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)`: `["downloads"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-downloads)`, // Otherwise, start here.
};

**The `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` and `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` options were first introduced in Chrome 91.**

A user agent holds a recently picked directory map, which is a [map](https://infra.spec.whatwg.org/#ordered-map) of [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) to [path id maps](https://wicg.github.io/file-system-access/#path-id-map).

A path id map is a [map](https://infra.spec.whatwg.org/#ordered-map) of [valid path ids](https://wicg.github.io/file-system-access/#valid-path-id) to paths.

A valid path id is a [string](https://infra.spec.whatwg.org/#string) where each character is [ASCII alphanumeric](https://infra.spec.whatwg.org/#ascii-alphanumeric) or "\_" or "-".

To prevent a [path id map](https://wicg.github.io/file-system-access/#path-id-map) from growing without a bound, user agents should implement some mechanism to limit how many recently picked directories will be remembered. This can for example be done by evicting least recently used entries. User agents should allow at least 16 entries to be stored in a [path id map](https://wicg.github.io/file-system-access/#path-id-map).

The `WellKnownDirectory` enum lets a website pick one of several well-known directories. The exact paths the various values of this enum map to is [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) (and in some cases these might not even represent actual paths on disk). The following list describes the meaning of each of the values, and gives possible example paths on different operating systems:

`"desktop"`

The user's Desktop directory, if such a thing exists. For example this could be `C:\Documents and Settings\username\Desktop`, `/Users/username/Desktop`, or `/home/username/Desktop`.

`"documents"`

Directory in which documents created by the user would typically be stored. For example `C:\Documents and Settings\username\My Documents`, `/Users/username/Documents`, or `/home/username/Documents`.

`"downloads"`

Directory where downloaded files would typically be stored. For example `C:\Documents and Settings\username\Downloads`, `/Users/username/Downloads`, or `/home/username/Downloads`.

`"music"`

Directory where audio files would typically be stored. For example `C:\Documents and Settings\username\My Documents\My Music`, `/Users/username/Music`, or `/home/username/Music`.

`"pictures"`

Directory where photos and other still images would typically be stored. For example `C:\Documents and Settings\username\My Documents\My Pictures`, `/Users/username/Pictures`, or `/home/username/Pictures`.

`"videos"`

Directory where videos/movies would typically be stored. For example `C:\Documents and Settings\username\My Documents\My Videos`, `/Users/username/Movies`, or `/home/username/Videos`.

To determine the directory the picker will start in, given an optional [string](https://infra.spec.whatwg.org/#string) *id*, an optional `[StartInDirectory](https://wicg.github.io/file-system-access/#typedefdef-startindirectory)` *startIn* and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) *environment*, run the following steps:

1.  If *id* given, and is not a [valid path id](https://wicg.github.io/file-system-access/#valid-path-id), throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

2.  If *id*'s [length](https://infra.spec.whatwg.org/#string-length) is more than 32, throw a `[TypeError](https://heycam.github.io/webidl/#exceptiondef-typeerror)`.

3.  Let *origin* be *environment*'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin).

4.  If *startIn* is a `[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)`:

    1.  Let *entry* be *startIn*'s [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry).

    2.  If *entry* does not represent an [entry](https://wicg.github.io/file-system-access/#entry) in an [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system):

        1.  If *entry* is a [file entry](https://wicg.github.io/file-system-access/#file), and a path on the local file system corresponding to the parent directory if *entry* can be determined, then return that path.

        2.  If *entry* is a [directory entry](https://wicg.github.io/file-system-access/#directory), and a path on the local file system corresponding to *entry* can be determined, then return that path.

5.  If *id* is non-empty:

    1.  If [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[*origin*] [exists](https://infra.spec.whatwg.org/#map-exists):

        1.  Let *path map* be [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[*origin*].

        2.  If *path map*[*id*] [exists](https://infra.spec.whatwg.org/#map-exists), then return *path map*[*id*].

6.  If *startIn* is a `[WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory)`:

    1.  Return a user agent defined path corresponding to the `[WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory)` value of *startIn*.

7.  If *id* is not specified, or is an empty string:

    1.  If [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[*origin*] [exists](https://infra.spec.whatwg.org/#map-exists):

        1.  Let *path map* be [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[*origin*].

        2.  If *path map*[""] [exists](https://infra.spec.whatwg.org/#map-exists), then return *path map*[""].

8.  Return a default path in a user agent specific manner.

To remember a picked directory, given an optional [string](https://infra.spec.whatwg.org/#string) *id*, an [entry](https://wicg.github.io/file-system-access/#entry) *entry*, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) *environment*, run the following steps:

1.  Let *origin* be *environment*'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin).

2.  If [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[*origin*] does not [exist](https://infra.spec.whatwg.org/#map-exists), then set [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[*origin*] to an empty [path id map](https://wicg.github.io/file-system-access/#path-id-map).

3.  If *id* is not specified, let *id* be an empty string.

4.  Set [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map)[_origin_][*id*] to the path on the local file system corresponding to *entry*, if such a path can be determined.

### 3.3. The `[showOpenFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)` method[](https://wicg.github.io/file-system-access/#api-showopenfilepicker)

**⚠**MDN

[ *handle* ] = await window . `[showOpenFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)`

[ *handle* ] = await window . `[showOpenFilePicker](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)`({ `[multiple](https://wicg.github.io/file-system-access/#dom-openfilepickeroptions-multiple)`: false })

Shows a file picker that lets a user select a single existing file, returning a handle for the selected file.

handles = await window . `[showOpenFilePicker](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)`({ `[multiple](https://wicg.github.io/file-system-access/#dom-openfilepickeroptions-multiple)`: true })

Shows a file picker that lets a user select multiple existing files, returning handles for the selected files.

Additional options can be passed to `[showOpenFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)` to indicate the types of files the website wants the user to select and the directory in which the file picker will open. See [§ 3.2 File picker options](https://wicg.github.io/file-system-access/#api-filepickeroptions) for details.

The `showOpenFilePicker(*options*)` method, when invoked, must run these steps:

1.  Let *environment* be **[this](https://heycam.github.io/webidl/#this)**'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

2.  Let *accepts options* be the result of [processing accept types](https://wicg.github.io/file-system-access/#process-accept-types) given *options*.

3.  Let *starting directory* be the result of [determining the directory the picker will start in](https://wicg.github.io/file-system-access/#wellknowndirectory-determine-the-directory-the-picker-will-start-in) given *options*.`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`, *options*.`[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` and *environment*.

4.  Let *global* be *environment*'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).

5.  Verify that *environment* [is allowed to show a file picker](https://wicg.github.io/file-system-access/#is-allowed-to-show-a-file-picker).

6.  Let *p* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

7.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Optionally, wait until any prior execution of this algorithm has terminated.

    2.  Display a prompt to the user requesting that the user pick some files. If *options*.`[multiple](https://wicg.github.io/file-system-access/#dom-openfilepickeroptions-multiple)` is false, there must be no more than one file selected; otherwise any number may be selected.

        The displayed prompt should let the user pick one of the *accepts options* to filter the list of displayed files. Exactly how this is implemented, and what this prompt looks like is [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined).

        When possible, this prompt should start out showing *starting directory*.

    3.  Wait for the user to have made their selection.

    4.  If the user dismissed the prompt without making a selection, [reject](https://heycam.github.io/webidl/#reject) *p* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

    5.  Let *entries* be a [list](https://infra.spec.whatwg.org/#list) of [file entries](https://wicg.github.io/file-system-access/#file) representing the selected files or directories.

    6.  Let *result* be a empty [list](https://infra.spec.whatwg.org/#list).

    7.  [For each](https://infra.spec.whatwg.org/#list-iterate) *entry* of *entries*:

        1.  If *entry* is deemed [too sensitive or dangerous](https://wicg.github.io/file-system-access/#wellknowndirectory-too-sensitive-or-dangerous) to be exposed to this website by the user agent:

            1.  Inform the user that the selected files or directories can't be exposed to this website.

            2.  At the discretion of the user agent, either go back to the beginning of these [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps, or [reject](https://heycam.github.io/webidl/#reject) *p* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

        2.  Add a new `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` associated with *entry* to *result*.

    8.  [Remember a picked directory](https://wicg.github.io/file-system-access/#wellknowndirectory-remember-a-picked-directory) given *options*.`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`, *entries*[0] and *environment*.

    9.  Perform the [activation notification](https://html.spec.whatwg.org/multipage/interaction.html#activation-notification) steps in *global*'s [browsing context](https://html.spec.whatwg.org/multipage/window-object.html#window-bc).

        Note: This lets a website immediately perform operations on the returned handles that might require user activation, such as requesting more permissions.

    10. [Resolve](https://heycam.github.io/webidl/#resolve) *p* with *result*.

8.  Return *p*.

### 3.4. The `[showSaveFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)` method[](https://wicg.github.io/file-system-access/#api-showsavefilepicker)

**⚠**MDN

*handle* = await window . `[showSaveFilePicker](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)`( *options* )

Shows a file picker that lets a user select a single file, returning a handle for the selected file. The selected file does not have to exist already. If the selected file does not exist a new empty file is created before this method returns, otherwise the existing file is cleared before this method returned.

*handle* = await window . `[showSaveFilePicker](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)`({ `[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)`: "README.md" })

Shows a file picker with the suggested "README.md" file name pre-filled as the default file name to save as.

Additional *options* can be passed to `[showSaveFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)` to indicate the types of files the website wants the user to select and the directory in which the file picker will open. See [§ 3.2 File picker options](https://wicg.github.io/file-system-access/#api-filepickeroptions) for details.

**The `[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)` option was first introduced in Chrome 91.**

The `showSaveFilePicker(*options*)` method, when invoked, must run these steps:

1.  Let *environment* be **[this](https://heycam.github.io/webidl/#this)**'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

2.  Let *accepts options* be the result of [processing accept types](https://wicg.github.io/file-system-access/#process-accept-types) given *options*.

3.  Let *starting directory* be the result of [determining the directory the picker will start in](https://wicg.github.io/file-system-access/#wellknowndirectory-determine-the-directory-the-picker-will-start-in) given *options*.`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`, *options*.`[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` and *environment*.

4.  Let *global* be *environment*'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).

5.  Verify that *environment* [is allowed to show a file picker](https://wicg.github.io/file-system-access/#is-allowed-to-show-a-file-picker).

6.  Let *p* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

7.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Optionally, wait until any prior execution of this algorithm has terminated.

    2.  Display a prompt to the user requesting that the user pick exactly one file. The displayed prompt should let the user pick one of the *accepts options* to filter the list of displayed files. Exactly how this is implemented, and what this prompt looks like is [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined). If *accepts options* are displayed in the UI, the selected option should also be used to suggest an extension to append to a user provided file name, but this is not required. In particular user agents are free to ignore potentially dangerous suffixes such as those ending in `".lnk"` or `".local"`.

        When possible, this prompt should start out showing *starting directory*.

        If *options*.`[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)` is specified and not null, the file picker prompt will be pre-filled with the *options*.`[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)` as the default name to save as. The interaction between the `[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)` and *accepts options* is [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined). If the `[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)` is deemed too dangerous, user agents should ignore or sanitize the suggested file name, similar to the sanitization done when fetching something [as a download](https://html.spec.whatwg.org/multipage/links.html#as-a-download).

        Note: A user agent could for example pick whichever option in *accepts options* that matches `[suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname)` as the default filter.

    3.  Wait for the user to have made their selection.

    4.  If the user dismissed the prompt without making a selection, [reject](https://heycam.github.io/webidl/#reject) *p* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

    5.  Let *entry* be a [file entry](https://wicg.github.io/file-system-access/#file) representing the selected file.

    6.  If *entry* is deemed [too sensitive or dangerous](https://wicg.github.io/file-system-access/#wellknowndirectory-too-sensitive-or-dangerous) to be exposed to this website by the user agent:

        1.  Inform the user that the selected files or directories can't be exposed to this website.

        2.  At the discretion of the user agent, either go back to the beginning of these [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps, or [reject](https://heycam.github.io/webidl/#reject) *p* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

    7.  Set *entry*'s [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data) to an empty [byte sequence](https://infra.spec.whatwg.org/#byte-sequence).

    8.  Set *result* to a new `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` associated with *entry*.

    9.  [Remember a picked directory](https://wicg.github.io/file-system-access/#wellknowndirectory-remember-a-picked-directory) given *options*.`[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)`, *entry* and *environment*.

    10. Perform the [activation notification](https://html.spec.whatwg.org/multipage/interaction.html#activation-notification) steps in *global*'s [browsing context](https://html.spec.whatwg.org/multipage/window-object.html#window-bc).

        Note: This lets a website immediately perform operations on the returned handles that might require user activation, such as requesting more permissions.

    11. [Resolve](https://heycam.github.io/webidl/#resolve) *p* with *result*.

8.  Return *p*.

### 3.5. The `[showDirectoryPicker()](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker)` method[](https://wicg.github.io/file-system-access/#api-showdirectorypicker)

**⚠**MDN

*handle* = await window . `[showDirectoryPicker()](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker)`

Shows a directory picker that lets the user select a single directory, returning a handle for the selected directory.

The `[id](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-id)` and `[startIn](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-startin)` fields behave identically to the `[id](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id)` and `[startIn](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin)` fields, respectively. See [§ 3.2.2 Starting Directory](https://wicg.github.io/file-system-access/#api-filepickeroptions-starting-directory) for details on how to use these fields.

The `showDirectoryPicker(*options*)` method, when invoked, must run these steps:

1.  Let *environment* be **[this](https://heycam.github.io/webidl/#this)**'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

2.  Let *starting directory* be the result of [determining the directory the picker will start in](https://wicg.github.io/file-system-access/#wellknowndirectory-determine-the-directory-the-picker-will-start-in) given *options*.`[id](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-id)`, *options*.`[startIn](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-startin)` and *environment*.

3.  Let *global* be *environment*'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).

4.  Verify that *environment* [is allowed to show a file picker](https://wicg.github.io/file-system-access/#is-allowed-to-show-a-file-picker).

5.  Let *p* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

6.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Optionally, wait until any prior execution of this algorithm has terminated.

    2.  Display a prompt to the user requesting that the user pick a directory.

        When possible, this prompt should start out showing *starting directory*.

    3.  Wait for the user to have made their selection.

    4.  If the user dismissed the prompt without making a selection, [reject](https://heycam.github.io/webidl/#reject) *p* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

    5.  Let *entry* be a [directory entry](https://wicg.github.io/file-system-access/#directory) representing the selected directory.

    6.  If *entry* is deemed [too sensitive or dangerous](https://wicg.github.io/file-system-access/#wellknowndirectory-too-sensitive-or-dangerous) to be exposed to this website by the user agent:

        1.  Inform the user that the selected files or directories can't be exposed to this website.

        2.  At the discretion of the user agent, either go back to the beginning of these [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps, or [reject](https://heycam.github.io/webidl/#reject) *p* with an `[AbortError](https://heycam.github.io/webidl/#aborterror)` and abort.

    7.  Set *result* to a new `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` associated with *entry*.

    8.  [Remember a picked directory](https://wicg.github.io/file-system-access/#wellknowndirectory-remember-a-picked-directory) given *options*.`[id](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-id)`, *entry* and *environment*.

    9.  Perform the [activation notification](https://html.spec.whatwg.org/multipage/interaction.html#activation-notification) steps in *global*'s [browsing context](https://html.spec.whatwg.org/multipage/window-object.html#window-bc).

        Note: This lets a website immediately perform operations on the returned handles that might require user activation, such as requesting more permissions.

        [](https://wicg.github.io/file-system-access/#issue-923f3009) Rather than requiring the website to prompt separately for a writable directory, we should provide some kind of API to request a writable directory in one step. [<https://github.com/wicg/file-system-access/issues/89>](https://github.com/wicg/file-system-access/issues/89)

    10. [Resolve](https://heycam.github.io/webidl/#resolve) *p* with *result*.

7.  Return *p*.

### 3.6. Drag and Drop[](https://wicg.github.io/file-system-access/#drag-and-drop)

partial interface [DataTransferItem](https://html.spec.whatwg.org/multipage/dnd.html#datatransferitem) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)?> [getAsFileSystemHandle](https://wicg.github.io/file-system-access/#dom-datatransferitem-getasfilesystemhandle)();
};

During a *drag-and-drop operation*, dragged file and directory items are associated with [file entries](https://wicg.github.io/file-system-access/#file) and [directory entries](https://wicg.github.io/file-system-access/#directory) respectively.

*handle* = await item . `[getAsFileSystemHandle()](https://wicg.github.io/file-system-access/#dom-datatransferitem-getasfilesystemhandle)`

Returns a `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` object if the dragged item is a file and a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` object if the dragged item is a directory.

**⚠**MDN

The `getAsFileSystemHandle()` method steps are:

1.  If the `[DataTransferItem](https://html.spec.whatwg.org/multipage/dnd.html#datatransferitem)` object is not in the [read/write mode](https://html.spec.whatwg.org/multipage/dnd.html#concept-dnd-rw) or the [read-only mode](https://html.spec.whatwg.org/multipage/dnd.html#concept-dnd-ro), return [a promise resolved with](https://heycam.github.io/webidl/#a-promise-resolved-with) `null`.

2.  If the [the drag data item kind](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-item-kind) is not *File*, then return [a promise resolved with](https://heycam.github.io/webidl/#a-promise-resolved-with) `null`.

3.  Let *p* be [a new promise](https://heycam.github.io/webidl/#a-new-promise).

4.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

    1.  Let *entry* be the [entry](https://wicg.github.io/file-system-access/#entry) representing the dragged file or directory.

    2.  If *entry* is a [file entry](https://wicg.github.io/file-system-access/#file):

        1.  Let *handle* be a `[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)` associated with *entry*.

    3.  Else if *entry* is a [directory entry](https://wicg.github.io/file-system-access/#directory):

        1.  Let *handle* be a `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)` associated with *entry*.

    4.  [Resolve](https://heycam.github.io/webidl/#resolve) *p* with *entry*.

5.  Return *p*.

[](https://wicg.github.io/file-system-access/#draganddrop-example)Handling drag and drop of files and directories:

elem.addEventListener('dragover', (e) => {
// Prevent navigation.
e.preventDefault();
});
elem.addEventListener('drop', async (e) => {
// Prevent navigation.
e.preventDefault();

// Process all of the items.
for (const item of e.dataTransfer.items) {
// kind will be 'file' for file/directory entries.
if (item.kind === 'file') {
const entry = await item.getAsFileSystemHandle();
if (entry.kind === 'file') {
handleFileEntry(entry);
} else if (entry.kind === 'directory') {
handleDirectoryEntry(entry);
}
}
}
});

[](https://wicg.github.io/file-system-access/#issue-8306b646) This currently does not block access to [too sensitive or dangerous](https://wicg.github.io/file-system-access/#wellknowndirectory-too-sensitive-or-dangerous) directories, to be consistent with other APIs that give access to dropped files and directories. This is inconsistent with the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories) though, so we might want to reconsider this.

## 4\. Accessing the Origin Private File System[](https://wicg.github.io/file-system-access/#sandboxed-filesystem)

The origin private file system is a [storage endpoint](https://storage.spec.whatwg.org/#storage-endpoint) whose [identifier](https://storage.spec.whatwg.org/#storage-endpoint-identifier) is `"fileSystem"`, [types](https://storage.spec.whatwg.org/#storage-endpoint-types) are `« "local" »`, and [quota](https://storage.spec.whatwg.org/#storage-endpoint-quota) is null.

[](https://wicg.github.io/file-system-access/#issue-9c98e739) Storage endpoints should be defined in [[storage]](https://wicg.github.io/file-system-access/#biblio-storage) itself, rather than being defined here. So merge this into the table there.

Note: While user agents will typically implement this by persisting the contents of this [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system) to disk, it is not intended that the contents are easily user accessible. Similarly there is no expectation that files or directories with names matching the names of children of the [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system) exist.

[[SecureContext](https://heycam.github.io/webidl/#SecureContext)]
partial interface [StorageManager](https://storage.spec.whatwg.org/#storagemanager) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)> [getDirectory](https://wicg.github.io/file-system-access/#dom-storagemanager-getdirectory)();
};

**In Chrome this functionality was previously exposed as `FileSystemDirectoryHandle.getSystemDirectory({type: "sandbox"})`. This new method is available as of Chrome 85.**

*directoryHandle* = await navigator . storage . `[getDirectory()](https://wicg.github.io/file-system-access/#dom-storagemanager-getdirectory)`

Returns the root directory of the origin private file system.

The `getDirectory()` method, when invoked, must run these steps:

1.  Let *environment* be the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object).

2.  Let *map* be the result of running [obtain a local storage bottle map](https://storage.spec.whatwg.org/#obtain-a-local-storage-bottle-map) with *environment* and `"fileSystem"`. If this returns failure, return [a promise rejected with](https://heycam.github.io/webidl/#a-promise-rejected-with) a `[SecurityError](https://heycam.github.io/webidl/#securityerror)`.

3.  If *map*["root"] does not [exist](https://infra.spec.whatwg.org/#map-exists):

    1.  Let *dir* be a new [directory entry](https://wicg.github.io/file-system-access/#directory).

    2.  Set *dir*'s [name](https://wicg.github.io/file-system-access/#entry-name) to `""`.

    3.  Set *dir*'s [children](https://wicg.github.io/file-system-access/#directory-entry-children) to an empty [set](https://infra.spec.whatwg.org/#ordered-set).

    4.  Set *map*["root"] to *dir*.

4.  Return [a promise resolved with](https://heycam.github.io/webidl/#a-promise-resolved-with) a new `[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)`, whose associated [entry](https://wicg.github.io/file-system-access/#filesystemhandle-entry) is *map*["root"].

Note: In Chrome the directory entry returned by the above algorithm refers to the same storage as the [temporary file system](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html#dfn-temporary) as used to be defined in [File API: Directories and System](https://wicg.github.io/file-system-access/#biblio-file-system-api).

## 5\. Accessibility Considerations[](https://wicg.github.io/file-system-access/#accessibility-considerations)

_This section is non-normative._

When this specification is used to present information in the user interface, implementors will want to follow the OS level accessibility guidelines for the platform.

## 6\. Privacy Considerations[](https://wicg.github.io/file-system-access/#privacy-considerations)

_This section is non-normative._

This API does not give websites any more read access to data than the existing `<input type=file>` and `<input type=file webkitdirectory>` APIs already do. Furthermore similarly to those APIs, all access to files and directories is explicitly gated behind a file or directory picker.

There are however several major privacy risks with this new API:

### 6.1. Users giving access to more, or more sensitive files than they intended.[](https://wicg.github.io/file-system-access/#privacy-wide-access)

This isn't a new risk with this API, but user agents should try to make sure that users are aware of what exactly they're giving websites access to. This is particularly important when giving access to a directory, where it might not be immediately clear to a user just how many files actually exist in that directory.

A related risk is having a user give access to particularly sensitive data. This could include some of a user agent's configuration data, network cache or cookie store, or operating system configuration data such as password files. To protect against this, user agents are encouraged to restrict which directories a user is allowed to select in a directory picker, and potentially even restrict which files the user is allowed to select. This will make it much harder to accidentally give access to a directory that contains particularly sensitive data. Care must be taken to strike the right balance between restricting what the API can access while still having the API be useful. After all, this API intentionally lets the user use websites to interact with some of their most private personal data.

Examples of directories that user agents might want to restrict as being too sensitive or dangerous include:

- The directory or directories containing the user agent itself.

- Directories where the user agent stores [website storage](https://storage.spec.whatwg.org/#site-storage).

- Directories containing system files (such as `C:\Windows` on Windows).

- Directories such as `/dev/`, `/sys`, and `/proc` on Linux that would give access to low-level devices.

- A user's entire "home" directory. Individual files and directories inside the home directory should still be allowed, but user agents should not generally let users give blanket access to the entire directory.

- The default directory for downloads, if the user agent has such a thing. Individual files inside the directory again should be allowed, but the whole directory would risk leaking more data than a user realizes.

- Files with names that end in `.lnk`, when selecting a file to write to. Writing to these files on Windows is similar to creating symlinks on other operating systems, and as such can be used to attempt to trick users into giving access to files they didn't intend to expose.

- Files with names that end in `.local`, when selecting a file to write to. Windows uses these files to decide what DLLs to load, and as such writing to these files could be used to cause code to be executed.

### 6.2. Websites trying to use this API for tracking.[](https://wicg.github.io/file-system-access/#privacy-tracking)

This API could be used by websites to track the user across clearing browsing data. This is because, in contrast with existing file access APIs, user agents are able to grant persistent access to files or directories and can re-prompt. In combination with the ability to write to files, websites will be able to persist an identifier on the users' disk. Clearing browsing data will not affect those files in any way, making these identifiers persist through those actions.

This risk is somewhat mitigated by the fact that clearing browsing data will clear all handles that a website had persisted (for example in IndexedDB), so websites won't have any handles to re-prompt for permission after browsing data was cleared. Furthermore user agents are encouraged to make it clear what files and directories a website has access to, and to automatically expire permission grants except for particularly well trusted origins (for example persistent permissions could be limited to "installed" web applications).

User agents also are encouraged to provide a way for users to revoke permissions granted. Clearing browsing data is expected to revoke all permissions as well.

### 6.3. First-party vs third-party contexts.[](https://wicg.github.io/file-system-access/#privacy-third-party)

In third-party contexts (e.g. an iframe whose origin does not match that of the top-level frame) websites can't gain access to data they don't already have access to. This includes both getting access to new files or directories via the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories), as well as requesting more permissions to existing handles via the `[requestPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)` API.

Handles can also only be post-messaged to same-origin destinations. Attempts to send a handle to a cross-origin destination will result in a `[messageerror](https://html.spec.whatwg.org/multipage/indices.html#event-messageerror)` event.

## 7\. Security Considerations[](https://wicg.github.io/file-system-access/#security-considerations)

_This section is non-normative._

This API gives websites the ability to modify existing files on disk, as well as write to new files. This has a couple of important security considerations:

### 7.1. Malware[](https://wicg.github.io/file-system-access/#security-malware)

This API could be used by websites to try to store and/or execute malware on the users system. To mitigate this risk, this API does not provide any way to mark files as executable (on the other hand files that are already executable likely remain that way, even after the files are modified through this API). Furthermore user agents are encouraged to apply things like Mark-of-the-Web to files created or modified by this API.

Finally, user agents are encouraged to verify the contents of files modified by this API via malware scans and safe browsing checks, unless some kind of external strong trust relation already exists. This of course has effects on the performance characteristics of this API.

### 7.2. Ransomware attacks[](https://wicg.github.io/file-system-access/#security-ransomware)

Another risk factor is that of ransomware attacks. The limitations described above regarding blocking access to certain sensitive directories helps limit the damage such an attack can do. Additionally user agents can grant write access to files at whatever granularity they deem appropriate.

### 7.3. Filling up a users disk[](https://wicg.github.io/file-system-access/#filling-up-disk)

Other than files in the [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system), files written by this API are not subject to [storage quota](https://storage.spec.whatwg.org/#storage-quota). As such websites can fill up a users disk without being limited by quota, which could leave a users device in a bad state (do note that even with storage that is subject to [storage quota](https://storage.spec.whatwg.org/#storage-quota) it is still possible to fill up, or come close to filling up, a users disk, since [storage quota](https://storage.spec.whatwg.org/#storage-quota) in general is not dependent on the amount of available disk space).

Without this API websites can write data to disk not subject to quota limitations already by triggering downloads of large files (potentially created client side, to not incur any network overhead). While the presence of `[truncate()](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate)` and writing at a potentially really large offset past the end of a file makes it much easier and lower cost to create large files, on most file systems such files should not actually take up as much disk space as most commonly used file systems support sparse files (and thus wouldn't actually store the NUL bytes generated by resizing a file or seeking past the end of it).

Whatever mitigations user agents use to guard against websites filling up a disk via either quota managed storage or the existing downloads mechanism should also be employed when websites use this API to write to disk.

## Conformance[](https://wicg.github.io/file-system-access/#w3c-conformance)

### Document conventions[](https://wicg.github.io/file-system-access/#w3c-conventions)

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [[RFC2119]](https://wicg.github.io/file-system-access/#biblio-rfc2119)

Examples in this specification are introduced with the words "for example" or are set apart from the normative text with `class="example"`, like this:

[](https://wicg.github.io/file-system-access/#w3c-example)

This is an example of an informative example.

Informative notes begin with the word "Note" and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

### Conformant Algorithms[](https://wicg.github.io/file-system-access/#w3c-conformant-algorithms)

Requirements phrased in the imperative as part of algorithms (such as "strip any leading space characters" or "return false and abort these steps") are to be interpreted with the meaning of the key word ("must", "should", "may", etc) used in introducing the algorithm.

Conformance requirements phrased as algorithms or specific steps can be implemented in any manner, so long as the end result is equivalent. In particular, the algorithms defined in this specification are intended to be easy to understand and are not intended to be performant. Implementers are encouraged to optimize.

## Index[](https://wicg.github.io/file-system-access/#index)

### Terms defined by this specification[](https://wicg.github.io/file-system-access/#index-defined-here)

- [accept](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept), in § 3
- [binary data](https://wicg.github.io/file-system-access/#file-entry-binary-data), in § 2.1
- [[[buffer]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-buffer), in § 2.6
- [children](https://wicg.github.io/file-system-access/#directory-entry-children), in § 2.1
- create
  - [dict-member for FileSystemGetDirectoryOptions](https://wicg.github.io/file-system-access/#dom-filesystemgetdirectoryoptions-create), in § 2.5
  - [dict-member for FileSystemGetFileOptions](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create), in § 2.5
- [create a new FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#create-a-new-filesystemwritablefilestream), in § 2.6
- [createWritable()](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable), in § 2.4.2
- [createWritable(options)](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable), in § 2.4.2
- [data](https://wicg.github.io/file-system-access/#dom-writeparams-data), in § 2.6
- [description](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-description), in § 3
- ["desktop"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-desktop), in § 3.2.2
- [determine the directory the picker will start in](https://wicg.github.io/file-system-access/#wellknowndirectory-determine-the-directory-the-picker-will-start-in), in § 3.2.2
- ["directory"](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-directory), in § 2.3
- [directory](https://wicg.github.io/file-system-access/#directory), in § 2.1
- [directory entry](https://wicg.github.io/file-system-access/#directory), in § 2.1
- [DirectoryPickerOptions](https://wicg.github.io/file-system-access/#dictdef-directorypickeroptions), in § 3
- ["documents"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-documents), in § 3.2.2
- ["downloads"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-downloads), in § 3.2.2
- entry
  - [definition of](https://wicg.github.io/file-system-access/#entry), in § 2.1
  - [dfn for FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle-entry), in § 2.3
- [excludeAcceptAllOption](https://wicg.github.io/file-system-access/#dom-filepickeroptions-excludeacceptalloption), in § 3
- ["file"](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-file), in § 2.3
- [[[file]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-file), in § 2.6
- [file](https://wicg.github.io/file-system-access/#file), in § 2.1
- [file entry](https://wicg.github.io/file-system-access/#file), in § 2.1
- [FilePickerAcceptType](https://wicg.github.io/file-system-access/#dictdef-filepickeraccepttype), in § 3
- [FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions), in § 3
- ["file-system"](https://wicg.github.io/file-system-access/#dom-permissionname-file-system), in § 2.2
- [FileSystemCreateWritableOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemcreatewritableoptions), in § 2.4
- [FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle), in § 2.5
- [FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle), in § 2.4
- [FileSystemGetDirectoryOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemgetdirectoryoptions), in § 2.5
- [FileSystemGetFileOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemgetfileoptions), in § 2.5
- [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle), in § 2.3
- [FileSystemHandleKind](https://wicg.github.io/file-system-access/#enumdef-filesystemhandlekind), in § 2.3
- [FileSystemHandlePermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystemhandlepermissiondescriptor), in § 2.3
- [FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor), in § 2.2
- [FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode), in § 2.2
- [FileSystemRemoveOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemremoveoptions), in § 2.5
- [FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream), in § 2.6
- [FileSystemWriteChunkType](https://wicg.github.io/file-system-access/#typedefdef-filesystemwritechunktype), in § 2.6
- [getAsFileSystemHandle()](https://wicg.github.io/file-system-access/#dom-datatransferitem-getasfilesystemhandle), in § 3.6
- [getDirectory()](https://wicg.github.io/file-system-access/#dom-storagemanager-getdirectory), in § 4
- [getDirectoryHandle(name)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle), in § 2.5.3
- [getDirectoryHandle(name, options)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle), in § 2.5.3
- [getFile()](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-getfile), in § 2.4.1
- [getFileHandle(name)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle), in § 2.5.2
- [getFileHandle(name, options)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle), in § 2.5.2
- [handle](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle), in § 2.2
- id
  - [dict-member for DirectoryPickerOptions](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-id), in § 3
  - [dict-member for FilePickerOptions](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id), in § 3
- [is allowed to show a file picker](https://wicg.github.io/file-system-access/#is-allowed-to-show-a-file-picker), in § 3.1
- [isSameEntry(other)](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry), in § 2.3.1
- [keepExistingData](https://wicg.github.io/file-system-access/#dom-filesystemcreatewritableoptions-keepexistingdata), in § 2.4
- [kind](https://wicg.github.io/file-system-access/#dom-filesystemhandle-kind), in § 2.3
- [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories), in § 3
- [malware scans and safe browsing checks](https://wicg.github.io/file-system-access/#wellknowndirectory-malware-scans-and-safe-browsing-checks), in § 7.1
- mode
  - [dict-member for FileSystemHandlePermissionDescriptor](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode), in § 2.3
  - [dict-member for FileSystemPermissionDescriptor](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode), in § 2.2
- [modification timestamp](https://wicg.github.io/file-system-access/#file-entry-modification-timestamp), in § 2.1
- [multiple](https://wicg.github.io/file-system-access/#dom-openfilepickeroptions-multiple), in § 3
- ["music"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-music), in § 3.2.2
- name
  - [attribute for FileSystemHandle](https://wicg.github.io/file-system-access/#dom-filesystemhandle-name), in § 2.3
  - [dfn for entry](https://wicg.github.io/file-system-access/#entry-name), in § 2.1
- [OpenFilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-openfilepickeroptions), in § 3
- [origin private file system](https://wicg.github.io/file-system-access/#wellknowndirectory-origin-private-file-system), in § 4
- [parent](https://wicg.github.io/file-system-access/#entry-parent), in § 2.1
- [past results](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle-iterator-past-results), in § 2.5.1
- [path id map](https://wicg.github.io/file-system-access/#path-id-map), in § 3.2.2
- ["pictures"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-pictures), in § 3.2.2
- [position](https://wicg.github.io/file-system-access/#dom-writeparams-position), in § 2.6
- [process accept types](https://wicg.github.io/file-system-access/#process-accept-types), in § 3.2.1
- [query file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission), in § 2.2
- [querying file system permission](https://wicg.github.io/file-system-access/#querying-file-system-permission), in § 2.2
- [queryPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission), in § 2.3.2
- [queryPermission(descriptor)](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission), in § 2.3.2
- ["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read), in § 2.2
- ["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite), in § 2.2
- [recently picked directory map](https://wicg.github.io/file-system-access/#recently-picked-directory-map), in § 3.2.2
- [recursive](https://wicg.github.io/file-system-access/#dom-filesystemremoveoptions-recursive), in § 2.5
- [remember a picked directory](https://wicg.github.io/file-system-access/#wellknowndirectory-remember-a-picked-directory), in § 3.2.2
- [removeEntry(name)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry), in § 2.5.4
- [removeEntry(name, options)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry), in § 2.5.4
- [request file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission), in § 2.2
- [requesting file system permission](https://wicg.github.io/file-system-access/#requesting-file-system-permission), in § 2.2
- [requestPermission()](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission), in § 2.3.3
- [requestPermission(descriptor)](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission), in § 2.3.3
- [resolve](https://wicg.github.io/file-system-access/#entry-resolve), in § 2.1
- [resolve(possibleDescendant)](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve), in § 2.5.5
- [SaveFilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-savefilepickeroptions), in § 3
- ["seek"](https://wicg.github.io/file-system-access/#dom-writecommandtype-seek), in § 2.6
- [[[seekOffset]]](https://wicg.github.io/file-system-access/#filesystemwritablefilestream-seekoffset), in § 2.6
- [seek(position)](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek), in § 2.6.2
- [showDirectoryPicker()](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker), in § 3.5
- [showDirectoryPicker(options)](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker), in § 3.5
- [showOpenFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker), in § 3.3
- [showOpenFilePicker(options)](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker), in § 3.3
- [showSaveFilePicker()](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker), in § 3.4
- [showSaveFilePicker(options)](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker), in § 3.4
- [size](https://wicg.github.io/file-system-access/#dom-writeparams-size), in § 2.6
- startIn
  - [dict-member for DirectoryPickerOptions](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-startin), in § 3
  - [dict-member for FilePickerOptions](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin), in § 3
- [StartInDirectory](https://wicg.github.io/file-system-access/#typedefdef-startindirectory), in § 3
- [suggestedName](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname), in § 3
- [the same as](https://wicg.github.io/file-system-access/#entry-the-same-as), in § 2.1
- [too sensitive or dangerous](https://wicg.github.io/file-system-access/#wellknowndirectory-too-sensitive-or-dangerous), in § 6.1
- ["truncate"](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate), in § 2.6
- [truncate(size)](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate), in § 2.6.3
- [type](https://wicg.github.io/file-system-access/#dom-writeparams-type), in § 2.6
- [types](https://wicg.github.io/file-system-access/#dom-filepickeroptions-types), in § 3
- [validate a suffix](https://wicg.github.io/file-system-access/#validate-a-suffix), in § 3.2.1
- [valid file name](https://wicg.github.io/file-system-access/#valid-file-name), in § 2.1
- [valid path id](https://wicg.github.io/file-system-access/#valid-path-id), in § 3.2.2
- [valid suffix code point](https://wicg.github.io/file-system-access/#valid-suffix-code-point), in § 2.1
- ["videos"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-videos), in § 3.2.2
- [WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory), in § 3.2.2
- ["write"](https://wicg.github.io/file-system-access/#dom-writecommandtype-write), in § 2.6
- [write a chunk](https://wicg.github.io/file-system-access/#write-a-chunk), in § 2.6
- [WriteCommandType](https://wicg.github.io/file-system-access/#enumdef-writecommandtype), in § 2.6
- [write(data)](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write), in § 2.6.1
- [WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams), in § 2.6

### Terms defined by reference[](https://wicg.github.io/file-system-access/#index-defined-elsewhere)

- [ECMASCRIPT] defines the following terms:
  - realm
- [ENCODING] defines the following terms:
  - utf-8 encode
- [FILE-API] defines the following terms:
  - Blob
  - File
  - lastModified
  - name
  - read operation
  - snapshot state
  - type
  - unix epoch
- [HTML] defines the following terms:
  - DataTransferItem
  - Serializable
  - Window
  - activation notification
  - as a download
  - browsing context
  - current settings object
  - deserialization steps
  - environment settings object
  - global object
  - in parallel
  - messageerror
  - opaque origin
  - origin (for environment settings object)
  - read-only mode
  - read/write mode
  - relevant realm
  - relevant settings object
  - same origin
  - serializable objects
  - serialization steps
  - the drag data item kind
  - top-level origin
  - transient activation
- [INFRA] defines the following terms:
  - append (for set)
  - ascii alphanumeric
  - assert
  - byte sequence
  - code point
  - contain
  - convert
  - empty
  - exist
  - for each (for map)
  - implementation-defined
  - is empty
  - length (for string)
  - list
  - map
  - pair
  - prepend
  - remove
  - set
  - starts with
  - string
- [MIMESNIFF] defines the following terms:
  - essence
  - mime type
  - parameters
  - parse a mime type
  - subtype
  - type
- [permissions] defines the following terms:
  - PermissionDescriptor
  - PermissionState
  - PermissionStatus
  - create a permissionstatus
  - granted
  - name
  - permission descriptor type
  - permission state
  - permission state constraints
  - permissions
  - powerful feature
  - prompt
  - query()
  - request permission to use
  - state
- [PERMISSIONS-REQUEST] defines the following terms:
  - permission request algorithm
- [storage] defines the following terms:
  - StorageManager
  - identifier
  - obtain a local storage bottle map
  - quota
  - storage
  - storage endpoint
  - storage quota
  - types
- [STREAMS] defines the following terms:
  - ReadableStream
  - WritableStream
  - WritableStreamDefaultWriter
  - closealgorithm
  - getWriter()
  - getting a writer
  - highwatermark
  - release
  - set up
  - sizealgorithm
  - write()
  - writealgorithm
  - writing a chunk
- [WebIDL] defines the following terms:
  - AbortError
  - BufferSource
  - DOMString
  - DataCloneError
  - Exposed
  - InvalidModificationError
  - NotAllowedError
  - NotFoundError
  - Promise
  - QuotaExceededError
  - SecureContext
  - SecurityError
  - TypeError
  - TypeMismatchError
  - USVString
  - a new promise
  - a promise rejected with
  - a promise resolved with
  - asynchronous iterator initialization steps
  - boolean
  - get a copy of the buffer source
  - get the next iteration result
  - new
  - record
  - reject
  - resolve
  - sequence
  - this
  - undefined
  - unsigned long long
  - upon fulfillment
  - wait for all

## References[](https://wicg.github.io/file-system-access/#references)

### Normative References[](https://wicg.github.io/file-system-access/#normative)

[ECMASCRIPT]

[_ECMAScript Language Specification_](https://tc39.es/ecma262/multipage/). URL: <https://tc39.es/ecma262/multipage/>

[ENCODING]

Anne van Kesteren. [_Encoding Standard_](https://encoding.spec.whatwg.org/). Living Standard. URL: <https://encoding.spec.whatwg.org/>

[FILE-API]

Marijn Kruisselbrink; Arun Ranganathan. [_File API_](https://www.w3.org/TR/FileAPI/). 4 June 2021. WD. URL: <https://www.w3.org/TR/FileAPI/>

[HTML]

Anne van Kesteren; et al. [_HTML Standard_](https://html.spec.whatwg.org/multipage/). Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

[INFRA]

Anne van Kesteren; Domenic Denicola. [_Infra Standard_](https://infra.spec.whatwg.org/). Living Standard. URL: <https://infra.spec.whatwg.org/>

[MIMESNIFF]

Gordon P. Hemsley. [_MIME Sniffing Standard_](https://mimesniff.spec.whatwg.org/). Living Standard. URL: <https://mimesniff.spec.whatwg.org/>

[PERMISSIONS]

Marcos Caceres; Micheal Taylor; Jeffrey Yasskin. [_Permissions_](https://www.w3.org/TR/permissions/). 7 September 2021. WD. URL: <https://www.w3.org/TR/permissions/>

[PERMISSIONS-REQUEST]

[_Requesting Permissions_](https://wicg.github.io/permissions-request/). cg-draft. URL: <https://wicg.github.io/permissions-request/>

[RFC2119]

S. Bradner. [_Key words for use in RFCs to Indicate Requirement Levels_](https://datatracker.ietf.org/doc/html/rfc2119). March 1997. Best Current Practice. URL: <https://datatracker.ietf.org/doc/html/rfc2119>

[STORAGE]

Anne van Kesteren. [_Storage Standard_](https://storage.spec.whatwg.org/). Living Standard. URL: <https://storage.spec.whatwg.org/>

[STREAMS]

Adam Rice; et al. [_Streams Standard_](https://streams.spec.whatwg.org/). Living Standard. URL: <https://streams.spec.whatwg.org/>

[WebIDL]

Boris Zbarsky. [_Web IDL_](https://heycam.github.io/webidl/). 15 December 2016. ED. URL: <https://heycam.github.io/webidl/>

### Informative References[](https://wicg.github.io/file-system-access/#informative)

[ENTRIES-API]

[_File and Directory Entries API_](https://wicg.github.io/entries-api/). cg-draft. URL: <https://wicg.github.io/entries-api/>

[FILE-SYSTEM-API]

Eric Uhrhane. [_File API: Directories and System_](https://www.w3.org/TR/file-system-api/). 24 April 2014. NOTE. URL: <https://www.w3.org/TR/file-system-api/>

## IDL Index[](https://wicg.github.io/file-system-access/#idl-index)

enum [`FileSystemPermissionMode`](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode) {
[`"read"`](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read),
[`"readwrite"`](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)
};

dictionary [`FileSystemPermissionDescriptor`](https://wicg.github.io/file-system-access/#dictdef-filesystempermissiondescriptor) : [PermissionDescriptor](https://w3c.github.io/permissions/#dom-permissiondescriptor) {
required [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) [`handle`](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-handle);
[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode) [`mode`](https://wicg.github.io/file-system-access/#dom-filesystempermissiondescriptor-mode) = "read";
};

dictionary [`FileSystemHandlePermissionDescriptor`](https://wicg.github.io/file-system-access/#dictdef-filesystemhandlepermissiondescriptor) {
[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode) [`mode`](https://wicg.github.io/file-system-access/#dom-filesystemhandlepermissiondescriptor-mode) = "read";
};

enum [`FileSystemHandleKind`](https://wicg.github.io/file-system-access/#enumdef-filesystemhandlekind) {
[`"file"`](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-file),
[`"directory"`](https://wicg.github.io/file-system-access/#dom-filesystemhandlekind-directory),
};

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext), [Serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable)]
interface [`FileSystemHandle`](https://wicg.github.io/file-system-access/#filesystemhandle) {
readonly attribute [FileSystemHandleKind](https://wicg.github.io/file-system-access/#enumdef-filesystemhandlekind) [kind](https://wicg.github.io/file-system-access/#dom-filesystemhandle-kind);
readonly attribute [USVString](https://heycam.github.io/webidl/#idl-USVString) [name](https://wicg.github.io/file-system-access/#dom-filesystemhandle-name);

[Promise](https://heycam.github.io/webidl/#idl-promise)<[boolean](https://heycam.github.io/webidl/#idl-boolean)> [isSameEntry](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry)([FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) [`other`](https://wicg.github.io/file-system-access/#dom-filesystemhandle-issameentry-other-other));

[Promise](https://heycam.github.io/webidl/#idl-promise)<[PermissionState](https://w3c.github.io/permissions/#dom-permissionstate)> [queryPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission)(optional [FileSystemHandlePermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystemhandlepermissiondescriptor) [`descriptor`](https://wicg.github.io/file-system-access/#dom-filesystemhandle-querypermission-descriptor-descriptor) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[PermissionState](https://w3c.github.io/permissions/#dom-permissionstate)> [requestPermission](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission)(optional [FileSystemHandlePermissionDescriptor](https://wicg.github.io/file-system-access/#dictdef-filesystemhandlepermissiondescriptor) [`descriptor`](https://wicg.github.io/file-system-access/#dom-filesystemhandle-requestpermission-descriptor-descriptor) = {});
};

dictionary [`FileSystemCreateWritableOptions`](https://wicg.github.io/file-system-access/#dictdef-filesystemcreatewritableoptions) {
[boolean](https://heycam.github.io/webidl/#idl-boolean) [`keepExistingData`](https://wicg.github.io/file-system-access/#dom-filesystemcreatewritableoptions-keepexistingdata) = false;
};

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext), [Serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable)]
interface [`FileSystemFileHandle`](https://wicg.github.io/file-system-access/#filesystemfilehandle) : [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[File](https://w3c.github.io/FileAPI/#dfn-file)> [getFile](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-getfile)();
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemWritableFileStream](https://wicg.github.io/file-system-access/#filesystemwritablefilestream)> [createWritable](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable)(optional [FileSystemCreateWritableOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemcreatewritableoptions) [`options`](https://wicg.github.io/file-system-access/#dom-filesystemfilehandle-createwritable-options-options) = {});
};

dictionary [`FileSystemGetFileOptions`](https://wicg.github.io/file-system-access/#dictdef-filesystemgetfileoptions) {
[boolean](https://heycam.github.io/webidl/#idl-boolean) [`create`](https://wicg.github.io/file-system-access/#dom-filesystemgetfileoptions-create) = false;
};

dictionary [`FileSystemGetDirectoryOptions`](https://wicg.github.io/file-system-access/#dictdef-filesystemgetdirectoryoptions) {
[boolean](https://heycam.github.io/webidl/#idl-boolean) [`create`](https://wicg.github.io/file-system-access/#dom-filesystemgetdirectoryoptions-create) = false;
};

dictionary [`FileSystemRemoveOptions`](https://wicg.github.io/file-system-access/#dictdef-filesystemremoveoptions) {
[boolean](https://heycam.github.io/webidl/#idl-boolean) [`recursive`](https://wicg.github.io/file-system-access/#dom-filesystemremoveoptions-recursive) = false;
};

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext), [Serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable)]
interface [`FileSystemDirectoryHandle`](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle) : [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) {
async iterable<[USVString](https://heycam.github.io/webidl/#idl-USVString), [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)>;

[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)> [getFileHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle)([USVString](https://heycam.github.io/webidl/#idl-USVString) [`name`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle-name-options-name), optional [FileSystemGetFileOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemgetfileoptions) [`options`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle-name-options-options) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)> [getDirectoryHandle](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle)([USVString](https://heycam.github.io/webidl/#idl-USVString) [`name`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle-name-options-name), optional [FileSystemGetDirectoryOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemgetdirectoryoptions) [`options`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle-name-options-options) = {});

[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [removeEntry](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry)([USVString](https://heycam.github.io/webidl/#idl-USVString) [`name`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry-name-options-name), optional [FileSystemRemoveOptions](https://wicg.github.io/file-system-access/#dictdef-filesystemremoveoptions) [`options`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry-name-options-options) = {});

[Promise](https://heycam.github.io/webidl/#idl-promise)<[sequence](https://heycam.github.io/webidl/#idl-sequence)<[USVString](https://heycam.github.io/webidl/#idl-USVString)>?> [resolve](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve)([FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle) [`possibleDescendant`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-resolve-possibledescendant-possibledescendant));
};

enum [`WriteCommandType`](https://wicg.github.io/file-system-access/#enumdef-writecommandtype) {
[`"write"`](https://wicg.github.io/file-system-access/#dom-writecommandtype-write),
[`"seek"`](https://wicg.github.io/file-system-access/#dom-writecommandtype-seek),
[`"truncate"`](https://wicg.github.io/file-system-access/#dom-writecommandtype-truncate),
};

dictionary [`WriteParams`](https://wicg.github.io/file-system-access/#dictdef-writeparams) {
required [WriteCommandType](https://wicg.github.io/file-system-access/#enumdef-writecommandtype) [`type`](https://wicg.github.io/file-system-access/#dom-writeparams-type);
[unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long)? [`size`](https://wicg.github.io/file-system-access/#dom-writeparams-size);
[unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long)? [`position`](https://wicg.github.io/file-system-access/#dom-writeparams-position);
([BufferSource](https://heycam.github.io/webidl/#BufferSource) or [Blob](https://w3c.github.io/FileAPI/#dfn-Blob) or [USVString](https://heycam.github.io/webidl/#idl-USVString))? [`data`](https://wicg.github.io/file-system-access/#dom-writeparams-data);
};

typedef ([BufferSource](https://heycam.github.io/webidl/#BufferSource) or [Blob](https://w3c.github.io/FileAPI/#dfn-Blob) or [USVString](https://heycam.github.io/webidl/#idl-USVString) or [WriteParams](https://wicg.github.io/file-system-access/#dictdef-writeparams)) [`FileSystemWriteChunkType`](https://wicg.github.io/file-system-access/#typedefdef-filesystemwritechunktype);

[[Exposed](https://heycam.github.io/webidl/#Exposed)=(Window,Worker), [SecureContext](https://heycam.github.io/webidl/#SecureContext)]
interface [`FileSystemWritableFileStream`](https://wicg.github.io/file-system-access/#filesystemwritablefilestream) : [WritableStream](https://streams.spec.whatwg.org/#writablestream) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [write](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write)([FileSystemWriteChunkType](https://wicg.github.io/file-system-access/#typedefdef-filesystemwritechunktype) [`data`](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-write-data-data));
[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [seek](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek)([unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long) [`position`](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-seek-position-position));
[Promise](https://heycam.github.io/webidl/#idl-promise)<[undefined](https://heycam.github.io/webidl/#idl-undefined)> [truncate](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate)([unsigned long long](https://heycam.github.io/webidl/#idl-unsigned-long-long) [`size`](https://wicg.github.io/file-system-access/#dom-filesystemwritablefilestream-truncate-size-size));
};

enum [WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory) {
["desktop"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-desktop),
["documents"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-documents),
["downloads"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-downloads),
["music"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-music),
["pictures"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-pictures),
["videos"](https://wicg.github.io/file-system-access/#dom-wellknowndirectory-videos),
};

typedef ([WellKnownDirectory](https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory) or [FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)) [`StartInDirectory`](https://wicg.github.io/file-system-access/#typedefdef-startindirectory);

dictionary [`FilePickerAcceptType`](https://wicg.github.io/file-system-access/#dictdef-filepickeraccepttype) {
[USVString](https://heycam.github.io/webidl/#idl-USVString) [`description`](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-description);
[record](https://heycam.github.io/webidl/#idl-record)<[USVString](https://heycam.github.io/webidl/#idl-USVString), ([USVString](https://heycam.github.io/webidl/#idl-USVString) or [sequence](https://heycam.github.io/webidl/#idl-sequence)<[USVString](https://heycam.github.io/webidl/#idl-USVString)>)> [`accept`](https://wicg.github.io/file-system-access/#dom-filepickeraccepttype-accept);
};

dictionary [`FilePickerOptions`](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions) {
[sequence](https://heycam.github.io/webidl/#idl-sequence)<[FilePickerAcceptType](https://wicg.github.io/file-system-access/#dictdef-filepickeraccepttype)> [`types`](https://wicg.github.io/file-system-access/#dom-filepickeroptions-types);
[boolean](https://heycam.github.io/webidl/#idl-boolean) [`excludeAcceptAllOption`](https://wicg.github.io/file-system-access/#dom-filepickeroptions-excludeacceptalloption) = false;
[DOMString](https://heycam.github.io/webidl/#idl-DOMString) [`id`](https://wicg.github.io/file-system-access/#dom-filepickeroptions-id);
[StartInDirectory](https://wicg.github.io/file-system-access/#typedefdef-startindirectory) [`startIn`](https://wicg.github.io/file-system-access/#dom-filepickeroptions-startin);
};

dictionary [`OpenFilePickerOptions`](https://wicg.github.io/file-system-access/#dictdef-openfilepickeroptions) : [FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions) {
[boolean](https://heycam.github.io/webidl/#idl-boolean) [`multiple`](https://wicg.github.io/file-system-access/#dom-openfilepickeroptions-multiple) = false;
};

dictionary [`SaveFilePickerOptions`](https://wicg.github.io/file-system-access/#dictdef-savefilepickeroptions) : [FilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-filepickeroptions) {
[USVString](https://heycam.github.io/webidl/#idl-USVString)? [`suggestedName`](https://wicg.github.io/file-system-access/#dom-savefilepickeroptions-suggestedname);
};

dictionary [`DirectoryPickerOptions`](https://wicg.github.io/file-system-access/#dictdef-directorypickeroptions) {
[DOMString](https://heycam.github.io/webidl/#idl-DOMString) [`id`](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-id);
[StartInDirectory](https://wicg.github.io/file-system-access/#typedefdef-startindirectory) [`startIn`](https://wicg.github.io/file-system-access/#dom-directorypickeroptions-startin);
};

[[SecureContext](https://heycam.github.io/webidl/#SecureContext)]
partial interface [Window](https://html.spec.whatwg.org/multipage/window-object.html#window) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[sequence](https://heycam.github.io/webidl/#idl-sequence)<[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)>> [showOpenFilePicker](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker)(optional [OpenFilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-openfilepickeroptions) [`options`](https://wicg.github.io/file-system-access/#dom-window-showopenfilepicker-options-options) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemFileHandle](https://wicg.github.io/file-system-access/#filesystemfilehandle)> [showSaveFilePicker](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker)(optional [SaveFilePickerOptions](https://wicg.github.io/file-system-access/#dictdef-savefilepickeroptions) [`options`](https://wicg.github.io/file-system-access/#dom-window-showsavefilepicker-options-options) = {});
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)> [showDirectoryPicker](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker)(optional [DirectoryPickerOptions](https://wicg.github.io/file-system-access/#dictdef-directorypickeroptions) [`options`](https://wicg.github.io/file-system-access/#dom-window-showdirectorypicker-options-options) = {});
};

partial interface [DataTransferItem](https://html.spec.whatwg.org/multipage/dnd.html#datatransferitem) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemHandle](https://wicg.github.io/file-system-access/#filesystemhandle)?> [getAsFileSystemHandle](https://wicg.github.io/file-system-access/#dom-datatransferitem-getasfilesystemhandle)();
};

[[SecureContext](https://heycam.github.io/webidl/#SecureContext)]
partial interface [StorageManager](https://storage.spec.whatwg.org/#storagemanager) {
[Promise](https://heycam.github.io/webidl/#idl-promise)<[FileSystemDirectoryHandle](https://wicg.github.io/file-system-access/#filesystemdirectoryhandle)> [getDirectory](https://wicg.github.io/file-system-access/#dom-storagemanager-getdirectory)();
};

## Issues Index[](https://wicg.github.io/file-system-access/#issues-index)

We should consider having further normative restrictions on file names that will never be allowed using this API, rather than leaving it entirely up to underlying file systems.[ ↵](https://wicg.github.io/file-system-access/#issue-58d5d75b)

TODO: Explain better how entries map to files on disk (multiple entries can map to the same file or directory on disk but an entry doesn't have to map to any file on disk).[ ↵](https://wicg.github.io/file-system-access/#issue-88e7ec9d)

Ideally this user activation requirement would be defined upstream. [<https://github.com/WICG/permissions-request/issues/2>](https://github.com/WICG/permissions-request/issues/2)[ ↵](https://wicg.github.io/file-system-access/#issue-88417955)

Currently `[FileSystemPermissionMode](https://wicg.github.io/file-system-access/#enumdef-filesystempermissionmode)` can only be `["read"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-read)` or `["readwrite"](https://wicg.github.io/file-system-access/#dom-filesystempermissionmode-readwrite)`. In the future we might want to add a "write" mode as well to support write-only handles. [<https://github.com/wicg/file-system-access/issues/119>](https://github.com/wicg/file-system-access/issues/119)[ ↵](https://wicg.github.io/file-system-access/#issue-7fc2f5c7)

The reading and snapshotting behavior needs to be better specified in the [[FILE-API]](https://wicg.github.io/file-system-access/#biblio-file-api) spec, for now this is kind of hand-wavy.[ ↵](https://wicg.github.io/file-system-access/#issue-1fb8bcae)

There has been some discussion around and desire for a "inPlace" mode for createWritable (where changes will be written to the actual underlying file as they are written to the writer, for example to support in-place modification of large files or things like databases). This is not currently implemented in Chrome. Implementing this is currently blocked on figuring out how to combine the desire to run malware checks with the desire to let websites make fast in-place modifications to existing large files. [<https://github.com/wicg/file-system-access/issues/67>](https://github.com/wicg/file-system-access/issues/67)[ ↵](https://wicg.github.io/file-system-access/#issue-0693bc11)

In the future we might want to add arguments to the async iterable declaration to support for example recursive iteration. [<https://github.com/wicg/file-system-access/issues/173>](https://github.com/wicg/file-system-access/issues/173)[ ↵](https://wicg.github.io/file-system-access/#issue-cce0bb28)

Better specify what possible exceptions this could throw. [<https://github.com/wicg/file-system-access/issues/68>](https://github.com/wicg/file-system-access/issues/68)[ ↵](https://wicg.github.io/file-system-access/#issue-721a33e4)

Better specify what possible exceptions this could throw. [<https://github.com/wicg/file-system-access/issues/68>](https://github.com/wicg/file-system-access/issues/68)[ ↵](https://wicg.github.io/file-system-access/#issue-721a33e4%E2%91%A0)

Better specify what possible exceptions this could throw. [<https://github.com/wicg/file-system-access/issues/68>](https://github.com/wicg/file-system-access/issues/68)[ ↵](https://wicg.github.io/file-system-access/#issue-721a33e4%E2%91%A1)

Rather than requiring the website to prompt separately for a writable directory, we should provide some kind of API to request a writable directory in one step. [<https://github.com/wicg/file-system-access/issues/89>](https://github.com/wicg/file-system-access/issues/89)[ ↵](https://wicg.github.io/file-system-access/#issue-923f3009)

This currently does not block access to [too sensitive or dangerous](https://wicg.github.io/file-system-access/#wellknowndirectory-too-sensitive-or-dangerous) directories, to be consistent with other APIs that give access to dropped files and directories. This is inconsistent with the [local file system handle factories](https://wicg.github.io/file-system-access/#local-file-system-handle-factories) though, so we might want to reconsider this.[ ↵](https://wicg.github.io/file-system-access/#issue-8306b646)

Storage endpoints should be defined in [[storage]](https://wicg.github.io/file-system-access/#biblio-storage) itself, rather than being defined here. So merge this
