# Internet Improver
Improve your surfing experience with multiple tweaks in all websites on your browser.

## Create XPI
1. Add changes to addon
2. Increment Version in manifest.json
3. Move to the project root directory
4. Get your API Key and Secret from https://addons.mozilla.org/de/developers/addon/api/key/
5. Run `web-ext sign --api-key user:***:*** --api-secret *** -a artifacts/`

## Install on Firefox
1. Move to `about:addons`
2. Click the settings button
3. Choose `Add-on aus Datei installieren...`
4. Choose file `xxx-x.x-an+fx.xpi` to install as an Add-on