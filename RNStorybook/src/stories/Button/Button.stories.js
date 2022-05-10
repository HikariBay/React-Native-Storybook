import {action} from '@storybook/addon-actions';
import {
  withKnobs,
  number,
  text,
  select,
  color,
  boolean,
} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BufferView} from '../decorators';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('with text', () => (
    <TouchableOpacity onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </TouchableOpacity>
  ));
