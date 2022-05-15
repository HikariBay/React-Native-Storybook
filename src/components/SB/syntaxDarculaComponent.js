import React from 'react';
import {View, StyleSheet} from 'react-native';

import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

const SyntaxDarculaComponent = ({code}) => {
  return (
    <View>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        highlighter={'prism' || 'hljs'}>
        {code}
      </SyntaxHighlighter>

      <View style={Style.spacing} />
    </View>
  );
};

export default SyntaxDarculaComponent;

const Style = StyleSheet.create({
  spacing: {
    paddingVertical: 10,
  },
});
