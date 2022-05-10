import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import {name as appName} from '../app.json';
import './rn-addons';
import {withKnobs} from '@storybook/addon-knobs';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../src/stories');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
