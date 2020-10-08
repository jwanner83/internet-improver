# Internet Improver
Improve your surfing experience with multiple tweaks in all websites on your browser.

## Build
### Build JavaScript
1. `npm i`
2. `npm run build`

### Create XPI
1. Add changes to addon
2. Increment Version in manifest.json
3. Move to the project root directory
4. Get your API Key and Secret from https://addons.mozilla.org/de/developers/addon/api/key/
5. Run `web-ext sign --api-key user:***:*** --api-secret *** -a artifacts/`