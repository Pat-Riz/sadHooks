import { expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import React, { useState } from "react";
import "react-native";
import { View, TextInput } from "react-native";

const RNcomponent = () => {
  const [someValue, setSomeValue] = useState<string>("default");
  return (
    <View>
      <TextInput
        value={someValue}
        placeholder='INPUT'
        testID='INPUT'
        onChangeText={(value) => setSomeValue(value)}
      ></TextInput>
    </View>
  );
};

it("RN render correctly", async () => {
  const { getByText, toJSON, getByPlaceholderText, debug } = render(
    RNcomponent()
  );
});
