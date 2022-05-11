/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {number, text, select, color, boolean} from '@storybook/addon-knobs';

// Styles
import {BufferView} from '../decorators';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

// Strings

// Components

// import { ScrollView } from "react-native-web";

storiesOf('Summary', module)
  .addDecorator(BufferView)
  .add('welcome', () => (
    <View>
      <Text>hh</Text>
    </View>
  ));
