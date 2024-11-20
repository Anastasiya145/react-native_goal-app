import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../colors";

export type CustomButtonProps = {
  onPress: () => {};
  isDisabled?: boolean;
};

export default function CustomButton<CustomButtonProps>({ onPress, isDisabled }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.customButton,
        pressed && styles.customButtonPressed,
        isDisabled && styles.customButtonDisabled,
      ]}
      disabled={isDisabled}
    >
      <Text style={styles.customButtonText}>Add new</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  customButton: {
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  customButtonPressed: {
    backgroundColor: colors.primary,
  },
  customButtonDisabled: {
    opacity: 0.8,
  },
  customButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
