---
title: Console & Logs
description: Learn how to use the Pterodactyl console to monitor and troubleshoot your Arlo Hosting server.
---

# Console & Logs

The **Console** is one of the most useful tools in the Arlo Hosting Panel for monitoring your server.

It displays output from your server in real time, allowing you to see what your application is doing and identify errors when something goes wrong.

## Viewing the console

1. Open the **[Arlo Hosting Panel](https://panel.arlostudios.dev)**.
2. Select your server.
3. Open the **Console** tab.

Once your server is running, new output will appear in the console automatically.

## Starting, stopping, and restarting

The server controls are available from the Panel and can be used to manage your server.

You can:

- **Start** the server
- **Restart** the server
- **Stop** the server

When a server is started, its startup output will appear in the console.

::: warning
Stopping or restarting your server will stop your application. If you're hosting a Discord bot, it will disconnect while the server is stopped.
:::

## Sending commands

If your server is running, you can enter commands directly into the console.

The commands available depend on the application you're running.

For example, Minecraft servers provide their own server commands, while a Discord bot may not accept commands through the console unless the application has been designed to do so.

## Reading errors

The console is often the first place to look when your application isn't working correctly.

Look for:

- Error messages
- Stack traces
- Failed dependencies
- Invalid configuration
- Permission errors
- Application crashes

When troubleshooting, the **first error** in the console is often more useful than the errors that appear afterwards.

## Console output and support

If you contact Arlo Support about a problem, you may be asked to provide relevant console output.

Only provide the parts of the console that are relevant to the issue.

::: warning
Never share passwords, API keys, Discord bot tokens, or other sensitive information from your console or configuration files.
:::
