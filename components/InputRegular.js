import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../assets/colors";
const { red, regularGrey, lightGrey, darkGrey, white } = colors;

const InputRegular = ({ placeholder, type, setFunction }) => {
   return (
      <TextInput
         style={styles.input}
         placeholder={placeholder}
         onChangeText={(text) => setFunction(text)}
         textContentType={type}
         keyboardType={type === "emailAddress" ? "email-address" : "default"}
      />
   );
};

const styles = StyleSheet.create({
   input: {
      color: darkGrey,
      fontSize: 18,
      fontWeight: "500",
      paddingVertical: 8,
      borderBottomColor: red,
      borderBottomWidth: 1,
      marginVertical: 16,
   },
});

export default InputRegular;
