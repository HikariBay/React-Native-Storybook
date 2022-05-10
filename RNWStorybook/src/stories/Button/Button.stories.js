import React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  withKnobs,
  number,
  text,
  select,
  color,
  boolean,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Styles
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { BufferView } from "../decorators";
// import { ScrollView } from "react-native-web";

// const createText = () => (
//   <Text
//     value={createTextProp()}
//     disabled={createDisabledProp()}
//     onPress={action("OnPress!")}
//   />
// );

storiesOf("Button", module)
  .addDecorator(BufferView)
  .add("with text", () => (
    <ScrollView>
      <TouchableOpacity onPress={action("clicked-text")}>
        <Text>{text("Button text", "Hello Button")}</Text>
      </TouchableOpacity>
    </ScrollView>
  ));
