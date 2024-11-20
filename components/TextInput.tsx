import { TextInput, StyleSheet } from "react-native";
import { colors } from "../colors";

export type CustomTextInputProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function CustomTextInput<CustomTextInputProps>({ query, setQuery }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Enter your goal"
      value={query}
      onChangeText={setQuery}
      placeholderTextColor={colors.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    flex: 1,
    fontSize: 16,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  },
});
