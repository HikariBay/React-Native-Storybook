import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import {name as appName} from '../app.json';
import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
