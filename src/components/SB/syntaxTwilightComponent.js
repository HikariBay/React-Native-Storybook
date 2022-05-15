import React from 'react';
import {View, StyleSheet} from 'react-native';

import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

const SyntaxTwilightComponent = ({code}) => {
  return (
    <View>
      <SyntaxHighlighter
        language="javascript"
        style={twilight}
        highlighter={'prism' || 'hljs'}>
        {code}
      </SyntaxHighlighter>

      <View style={Style.spacing} />
    </View>
  );
};

export default SyntaxTwilightComponent;

const Style = StyleSheet.create({
  spacing: {
    paddingVertical: 10,
  },
});
