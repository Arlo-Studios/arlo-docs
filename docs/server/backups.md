---
title: Backups
description: Learn how backups work on your Arlo Hosting server.
---

# Backups

Backups allow you to keep copies of your server data so it can be restored if something goes wrong.

The number of backups available to you depends on your hosting plan.

## Viewing your backups

1. Open the **[Arlo Hosting Panel](https://panel.arlostudios.dev)**.
2. Select your server.
3. Open the **Backups** tab.

Your available backups will be displayed there.

## Creating a backup

To create a backup:

1. Open your server in the Panel.
2. Open the **Backups** tab.
3. Select **Create Backup**.
4. Wait for the backup to finish.

The time required to create a backup depends on the amount of data stored on your server.

::: tip
It's a good idea to create a backup before making significant changes to your server, such as updating an application or changing important configuration files.
:::

## Downloading a backup

We recommend downloading important backups and keeping them somewhere separate from the Arlo Hosting Panel.

Downloaded backups are provided as a **`.tar.gz` archive**.

You can store the archive on your computer, an external storage device, or another trusted storage service.

Keeping a copy away from the Panel gives you an additional layer of protection if your server or Panel account becomes unavailable.

::: tip
For important servers, we recommend keeping at least one recent backup outside of Arlo Hosting.
:::

## Restoring a backup

If you need to restore your server to an earlier state, you can use one of your available backups.

Select the backup you want to restore and follow the instructions shown in the Panel.

::: warning
Restoring a backup can overwrite current server data. Make sure you have a recent copy of anything you want to keep before restoring an older backup.
:::

## Backup limits

Each hosting plan includes a set number of backup slots.

Once you've reached your backup limit, you may need to delete an existing backup before creating another one.

The number of backups included with your plan can be found on the Arlo Hosting website or in your account.

::: danger
Backups should not be considered a replacement for keeping important data elsewhere. Always keep additional copies of critical data when possible.
:::
