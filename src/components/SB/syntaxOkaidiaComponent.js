import React from 'react';
import {View, StyleSheet} from 'react-native';

import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

const SyntaxOkaidiaComponent = ({code}) => {
  return (
    <View>
      <SyntaxHighlighter
        language="javascript"
        style={okaidia}
        highlighter={'prism' || 'hljs'}>
        {code}
      </SyntaxHighlighter>

      <View style={Style.spacing} />
    </View>
  );
};

export default SyntaxOkaidiaComponent;

const Style = StyleSheet.create({
  spacing: {
    paddingVertical: 10,
  },
});
