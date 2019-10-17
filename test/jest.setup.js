import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
const path = require('path');
const devices = require('puppeteer/DeviceDescriptors');

const STORYBOOK_OUTPUT_DIRECTORY = `file://${path.resolve(__dirname, '../public')}`;
const OUTPUT_DIRECTORY = path.resolve(__dirname, '../src/__image_snapshots__');
const DEVICE_DESKTOP = 'desktop';

const DEVICES_TO_TEST = [
    'iPad Pro',
    'iPad Pro landscape',
    'iPhone 6',
    'iPhone 6 landscape',
    'iPhone X',
    'iPhone X landscape',
    'Pixel 2',
    'Pixel 2 landscape'
];

// configure Jest to work with Webpack's require.context() - storyshot is running under Jest so need to polyfill it
registerRequireContextHook();

const run = device => {
    initStoryshots({
        suite: 'Storyshots',
        test: imageSnapshot({
            // could be a running one as well, e.g. storybookUrl: 'http://localhost:9001',
            storybookUrl: STORYBOOK_OUTPUT_DIRECTORY,

            // set page for puppeteer
            customizePage: page => device !== DEVICE_DESKTOP ? page.emulate(devices[device]) : page,

            // jest-image-snapshot configuration
            getMatchOptions: ({ context: { kind, story }}) => ({
                failureThreshold: 0.01,
                failureThresholdType: 'percent',
                customSnapshotsDir: OUTPUT_DIRECTORY,

                // use custom file name. Extension will be added by jest-image-snapshot
                customSnapshotIdentifier:
                    `${kind}-${story}--${device}`
                        .replace(/[^a-z0-9]/gi, '_') // replace anything other than basic letters or numbers with '_'
                        .replace(/_+/g, '_') // replace any number of sequential underscores with a single underscore
                        .toLowerCase()
            })
        }),
    });
}

// uncomment this to run on multiple devices
// for (const device of DEVICES_TO_TEST) {
//   run(device);
// }

// running on desktop only
run(DEVICE_DESKTOP);