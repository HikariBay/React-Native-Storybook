/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {number, text, select, color, boolean} from '@storybook/addon-knobs';

// Styles
import {BufferView, SBStyle} from '../decorators';
import {
  twilight,
  darcula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {mSize, mColor, mFont, mOS, mStyle} from '../../helpers/appStyle';

// Strings
import {UsageWithText} from './usage';
import {ComWithText} from './componentsStrings';

// Components
import Button from '../../components/button/button';

// import { ScrollView } from "react-native-web";

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('with text', () => (
    <ScrollView>
      <Text style={SBStyle.title}>Button With Text</Text>

      <Button
        onPress={action('clicked-text')}
        small
        backgroundColor={select('Small Button Color', mColor, 'black')}
        color={select('Small Text Color', mColor, 'white')}
        buttonText={text('Small Button text', 'Small Button')}
      />

      <SyntaxHighlighter
        language="javascript"
        style={twilight}
        highlighter={'prism' || 'hljs'}>
        {UsageWithText.smallButton}
      </SyntaxHighlighter>

      <View style={SBStyle.hairline} />

      <Button
        onPress={action('clicked-text')}
        medium
        backgroundColor={select('Medium Button Color', mColor, 'black')}
        color={select('Medium Text Color', mColor, 'white')}
        buttonText={text('Medium Button text', 'Medium Button')}
      />

      <SyntaxHighlighter
        language="javascript"
        style={twilight}
        highlighter={'prism' || 'hljs'}>
        {UsageWithText.mediumButton}
      </SyntaxHighlighter>

      <View style={SBStyle.hairline} />

      <Button
        onPress={action('clicked-text')}
        big
        backgroundColor={select('Big Button Color', mColor, 'black')}
        color={select('Big Text Color', mColor, 'white')}
        buttonText={text('Big Button text', 'Big Button')}
      />

      <SyntaxHighlighter
        language="javascript"
        style={twilight}
        highlighter={'prism' || 'hljs'}>
        {UsageWithText.bigButton}
      </SyntaxHighlighter>

      <View style={SBStyle.hairline} />

      <Text style={SBStyle.subTitleStyle}>Component Code (Button.js)</Text>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        highlighter={'prism' || 'hljs'}>
        {ComWithText.code}
      </SyntaxHighlighter>

      <View style={SBStyle.hairline} />

      <Text style={[SBStyle.subTitleStyle]}>
        Component StyleSheet (Button.js)
      </Text>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        highlighter={'prism' || 'hljs'}>
        {ComWithText.stylesheet}
      </SyntaxHighlighter>

      {/* <Button
        onPress={action('clicked-text')}
        small
        backgroundColor={select('Disabled Button Color', mColor, 'gray')}
        color={select('Disabled Text Color', mColor, 'white')}
        buttonText={text('Disabled Button text', 'Disabled Button')}
        disabled
      /> */}
    </ScrollView>
  ));
