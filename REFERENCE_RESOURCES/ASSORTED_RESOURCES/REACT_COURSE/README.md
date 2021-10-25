VS Code is a highly extensible code editor with a massive marketplace of extensions to supercharge your workflow. But there are plenty of powerful settings and customizations that are available out-of-the-box that make VS Code work better for you.

How to edit your settings Your VS Code settings are conveniently stored in a JSON file called settings.json. To edit your settings in settings.json, start by opening the Command Palette with CMD/CTRL + SHIFT + P.

From the Command Palette, you have a choice between two commands that edit your settings:

The Open Settings (JSON) command will let you directly edit the settings JSON file.

The Open Settings (UI) command will open a user-friendly UI to edit the settings JSON file indirectly.

Both options work equally well and present the same options. Once you're in the settings tab, you can edit either user or workspace settings. User settings apply globally for any VS Code instance, while workspace settings only apply to the workspace you are currently working in. Workspace settings override user settings.

Save time by automatically formatting pasted code If you use a formatter, such as Prettier or Beautify, you can force VS Code to format text whenever its pasted into a file by changing the editor's format on paste setting to true: "editor.formatOnPaste": true By automatically formatting, you can save yourself an extra click with every paste.

Save even more time by automatically formatting on save In addition to being able to format on paste, VS Code lets you format each time you save a file. Similar to formatting pasted text, formatting on save requires a formatter, such as Prettier or Beautify. "editor.formatOnSave": true Saving on format also ensures consistent styling across your files. Worry less about properly formatting your code and let a formatter do the heavy lifting with every save.

Make code more concise with font ligatures Ligatures occur when two or more characters are combined into a single character. For example, <= will be converted to ≤. In many scenarios, ligatures can help make code more readable.

Adding ligatures to VS Code is straightforward. To do so, you'll need to update two settings.

First, make sure you're using a font that supports ligatures and add that to the editor's font family setting. Fira Code is a popular font that will work and has instructions on how to download it in the GitHub repo. "editor.fontFamily": "Fira Code" Once you have a font that you like, simply change the value to true for the font ligatures setting. "editor.fontLigatures": true Now you'll have access to helpful multi-character combinations to make your code even faster to read. Below are the types of ligatures you can expect from Fira Code:

Fira Code

The ligatures available with Fira Code Quickly find your unsaved work by highlighting modified tabs VS Code places a small dot in the editor's tabs next to files that have been edited but have not yet been saved. Changing your editor's settings to highlight modified tabs puts a colorful line at the top of the tab. "workbench.editor.highlightModifiedTabs": true The dots can be more difficult to find, especially if you have many tabs open, but updating this setting makes unsaved files stand out for easier navigation.

highlight modified tab

Note the blue line at the top of the tab Don't lose your working by turning on autosave If you'd rather not have to juggle modified tabs, files can be automatically saved after a delay, when the focus leaves the editor of the dirty file, or when the focus leaves the VS Code window.

To do so, change the auto save setting from off to afterDelay, onFocusChange, or onWindowChange. "files.autoSave": "afterDelay" Autosave isn't ideal for everyone or for all projects, but it can be nice to toggle when needed or in specific workspaces.

Supercharge the file explorer by sorting your files by type or recent changes By default, VS Code will sort files in the file explorer alphabetically, but there are other options available as well.

Changing the sorting order to type will group files with similar extensions together, while changing the sorting order to modified will put your most recently modified files at the top. "explorer.sortOrder": "type" Another option is filesFirst which sorts everything alphabetically, but puts files before folders. Depending on the size and complexity of your project, sorting files can make navigating more intuitive for your workflow.

Change things up by customizing your cursor We spend a lot of time staring at our cursors. Why not customize it?

The cursor can be changed to any of the following shapes: block, block-outline, line, line-thin, underline, or underline-thin. Change the cursor style to whichever shape you'd like: "editor.cursorStyle": "block" The blinking animation can be changed as well to blink, smooth, phase, expand, or solid. Simply update the cursor blinking setting: "editor.cursorBlinking": "smooth" Clean up your files and trim extra newlines When a file is saved, VS Code will trim any extra newlines at the end of the file. "files.trimFinalNewlines": true I'm guilty of accumulating empty lines at the end of files, so it's great to have things automatically cleaned up.

Enter a new line without accepting a suggestion By default, VS Code allows you to accept suggestions using either the Enter or Tab key.

Accepting suggestions with Enter can be turned off (or changed to smart which accepts a suggestion with Enter when it makes a textual change). "editor.acceptSuggestionOnEnter": "off" The switch can help avoid ambiguity between inserting new lines and accepting suggestions.

Save your settings and discover other features Now that you've customized your settings, you can save your settings using the extension Settings Sync. Settings Sync works by using GitHub and gists to sync customized settings in VS Code.

If you're looking for a few more ideas, the VS Code documentation makes a few helpful suggestions. Another site, aptly named VS Code can do that?! has a curated list of valuable tips.
