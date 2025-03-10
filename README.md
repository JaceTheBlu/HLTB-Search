# Firefox Extension for "How Long to Beat" Search

This Firefox extension allows users to quickly search for game completion times on the "How Long to Beat" website directly from the browser's search bar. By typing a specific query format, users can easily access game information.

## Features

- Redirects search queries in the format `@hltb <game_name>` to the "How Long to Beat" website.
- Simple and user-friendly interface.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the extension directory:
   ```
   cd firefox-extension
   ```

3. Load the extension in Firefox:
   - Open Firefox and go to `about:debugging#/runtime/this-firefox`.
   - Click on "Load Temporary Add-on".
   - Select the `manifest.json` file from the `src` directory.

## Usage

- In the Firefox search bar, type `@hltb <game_name>` (e.g., `@hltb farcry`) and hit enter.
- You will be redirected to the "How Long to Beat" page for the specified game.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
