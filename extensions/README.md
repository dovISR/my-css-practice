# Extensions

Part of [CSS Practice](../README.md). VS Code extensions for this course. Install Live Server before you preview a practice page.

## Contents

| Extension | What it is for |
| --- | --- |
| [Live Server](#live-server) | Open `index.html` in the browser and reload it when you save `style.css` |

## Live Server

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) by Ritwick Dey serves the folder you have open. Saving `style.css` reloads the browser, so you can check the color, border, and layout the test describes.

The extension id is `ritwickdey.LiveServer`. This repository recommends it in [`.vscode/extensions.json`](../.vscode/extensions.json). When you open the folder, VS Code can offer to install recommended extensions.

### Install

1. Open this repository folder in VS Code.
2. Open the Extensions view: **View → Extensions**, or `Cmd+Shift+X` on macOS and `Ctrl+Shift+X` on Windows and Linux.
3. Search for `Live Server`.
4. Install **Live Server** by Ritwick Dey.

You can also install it from a terminal:

```bash
code --install-extension ritwickdey.LiveServer
```

### Review a practice

Each exercise brief linked from [practices/README.md](../practices/README.md) ends with a Preview step. Follow that step after the test passes.

1. Open the exercise `index.html`.
2. Click **Go Live** on the status bar. You can also right-click the file and choose **Open with Live Server**.
3. The browser opens the page, usually at `http://127.0.0.1:5500/`.
4. Save `style.css`. The browser reloads.
5. Click the port on the status bar when you want to stop the server.

Run the exercise test from the repository root as well. Live Server shows the page. The test checks the computed style and, for float and flex, where the boxes sit.

Leave `index.html` as it is. The rules belong in `style.css`.
