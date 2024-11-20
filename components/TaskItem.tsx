import { StyleSheet, Text, View, Pressable, ListRenderItemInfo, Task } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../colors";
// import Animated, { FadeOut } from "react-native-reanimated";

type TaskItemProps = {
  itemData: ListRenderItemInfo<Task>;
  deleteGOal: (key: string) => void;
};

export default function TaskItem({ itemData, deleteGoal }) {
  return (
    <View
      key={itemData.item.key}
      style={styles.taskElement}
      // exiting={FadeOut.duration(300)}
    >
      <Text style={styles.taskText}>{itemData.item.text}</Text>
      <Pressable
        onPress={() => deleteGoal(itemData.item.key)}
        style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed]}
      >
        <Icon name="delete" color={colors.primary} size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskElement: {
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  iconButton: {
    padding: 8,
    borderRadius: 50,
  },
  iconButtonPressed: {
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  },
});
