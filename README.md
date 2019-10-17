Example repo for visual testing React apps with storyshots-puppeteer

Install dependencies:
```
yarn
```

### Run visual tests

Build with storybook + run ui snapshot tests:
```
npm test
```

This will place images currently in `src/__image_snapshots__` based on the stories described in storybook stories.

If any of the files are changed (e.g. related styles in `styles.css`) the related test may break (depending on the threshold of the difference check) and there will be an additional folder with the visual diff of the base and the new images in `src/__image_snapshots__/__diff_output__`.

### For dev

Webpack dev server (with live reload)
```
npm start 
```

Storybook (with live reload)
```
npm run storybook 
```

### Notes

`test/jest.setup.js` runs only on desktop (via puppeteer) by default, device emulation (apple and android devices) can be added if the commented part at the bottom is uncommented. 
After this device emulation is added the device related image snapshots will contain the suffix of the device name.
This way e.g. media-queries can be checked or device related functionality (code based on UA, etc).

Because I wanted to keep it light everything is very basic and currently only `.css` files are supported.

`styleMock.js` is needed to mock styles
