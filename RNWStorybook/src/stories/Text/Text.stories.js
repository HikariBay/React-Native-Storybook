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
import { BufferView } from "../decorators";
import Text from "../../components/Text/Text";

const createTextProp = () => text("Value", "Hello World!");
const createDisabledProp = () => boolean("Disabled", false);

const createText = () => (
  <Text
    value={createTextProp()}
    disabled={createDisabledProp()}
    onPress={action("OnPress!")}
  />
);

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .addDecorator(BufferView)
  .add("default", () => createText());
