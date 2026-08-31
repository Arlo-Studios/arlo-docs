---
title: Managing Files
description: Learn how to manage files on your Arlo Hosting server using the File Manager or SFTP.
---

# Managing Files

The **File Manager** allows you to manage the files stored on your Arlo Hosting server directly from the Arlo Hosting Panel.

You can also use **SFTP** to transfer and manage files from your computer.

## Opening the File Manager

1. Open the **[Arlo Hosting Panel](https://panel.arlostudios.dev)**.
2. Select your server.
3. Open the **Files** tab.

You'll see the files and folders currently stored on your server.

## Uploading files

To upload files:

1. Open the directory where you want to upload the files.
2. Select **Upload**.
3. Choose the files from your device.
4. Wait for the upload to complete.

Once uploaded, the files will appear in the selected directory.

::: tip
If you're uploading an application, make sure your files are placed in the correct directory before starting the server.
:::

## Creating files and folders

You can create new files and folders directly from the File Manager.

This can be useful for creating configuration files or organising your application.

Select **Create** and choose the type of item you want to create.

## Editing files

Text-based files can be edited directly in the File Manager.

This is useful for configuration files such as:

- `.env`
- `config.json`
- `package.json`
- `requirements.txt`

After making changes, save the file before restarting your application.

::: warning
Be careful when editing configuration files. Incorrect configuration can prevent your application from starting correctly.
:::

## Downloading files

You can download files from your server to your device through the File Manager.

This can be useful for keeping a local copy of important files or transferring files between environments.

## Deleting files

Files and folders can be deleted from the File Manager.

Deleted files may not be recoverable unless they are included in a backup.

::: danger
Deleting files is permanent unless you have a backup containing the deleted data. Make sure you are deleting the correct files before confirming.
:::

## Using SFTP

You can also manage your server files using **SFTP** (SSH File Transfer Protocol).

SFTP is useful when transferring multiple files, uploading larger files, or managing server files directly from your computer.

### Finding your SFTP details

1. Open the **[Arlo Hosting Panel](https://panel.arlostudios.dev)**.
2. Select your server.
3. Open the **Settings** tab.
4. Find the **SFTP Details** section.

Your SFTP connection details will be displayed there.

### Connecting with an SFTP client

You can use a compatible SFTP client such as **FileZilla** or another SFTP application.

Enter the connection details shown in the Panel when configuring your client.

Your SFTP password is your **Arlo Hosting Panel password**.

::: warning
Never share your SFTP credentials with anyone. Anyone with access to your SFTP account can access files on your server.
:::

::: tip
For occasional file changes, the built-in File Manager is usually quicker. SFTP is recommended when transferring a large number of files or working with files directly from your computer.
:::

## File permissions

Pterodactyl manages the permissions required for your server to access its files.

If your application reports a permission error, do not attempt to change permissions unless you know what the application requires.

If you're unsure, contact **Arlo Support** for assistance.