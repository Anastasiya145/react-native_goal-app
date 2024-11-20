import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable, FlatList, Image } from "react-native";
import uuid from "react-native-uuid";
import TaskItem from "./components/TaskItem";
import CustomTextInput from "./components/TextInput";
import CustomButton from "./components/CustomButton";
import { colors } from "./colors";
import { StatusBar } from "expo-status-bar";

export type Task = {
  text: string;
  key: string;
};

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addNewGoal = () => {
    if (query?.trim()) {
      setTaskList((prev) => [...prev, { text: query.trim(), key: uuid.v4() }]);
      setQuery("");
    }
  };

  const deleteGoal = (key: Task["key"]) => {
    setTaskList((prev) => prev.filter((item) => item.key !== key));
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View>
          <Image style={styles.image} source={require("./assets/splash-icon.png")} />

          <View style={styles.inputContainer}>
            <CustomTextInput query={query} setQuery={setQuery} />
            <CustomButton isDisabled={!query} onPress={addNewGoal} />
          </View>
          {taskList.length > 0 && (
            <View style={styles.tasksContainer}>
              <Text style={styles.textHeader}>Task List:</Text>
              <FlatList
                data={taskList}
                renderItem={(itemData) => <TaskItem itemData={itemData} deleteGoal={deleteGoal} />}
                style={styles.tasksListContainer}
              />
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingBottom: 50,
    paddingHorizontal: 16,
    height: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  image: {
    margin: "auto",
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  tasksContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 16,
  },
  tasksListContainer: {
    overflow: "hidden",
    maxHeight: "100%",
    display: "flex",
  },
});
