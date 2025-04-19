import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface Props {
  selected: number;
  setSelected: (selected: 0 | 1) => void;
}

export default function Switchscreen({ selected, setSelected }: Props) {
  return (
    <View style={styles.switch}>
      <TouchableOpacity
        style={
          selected == 0 ? styles.selectedSwitchButton : styles.switchButton
        }
        onPress={() => setSelected(0)}
      >
        <Text
          style={selected == 0 ? styles.selectedSwitchText : styles.switchText}
        >
          Available Jobs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          selected == 1 ? styles.selectedSwitchButton : styles.switchButton
        }
        onPress={() => setSelected(1)}
      >
        <Text
          style={selected == 1 ? styles.selectedSwitchText : styles.switchText}
        >
          My Jobs
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2f2f2f",
    borderRadius: 10,
    margin: 16,
    marginVertical: 24,
  },
  switchButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexBasis: "50%",
    padding: 5,
  },
  selectedSwitchButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexBasis: "50%",
    backgroundColor: "#3f3f3f",
    borderRadius: 10,
    padding: 2,
  },
  switchText: {
    color: "#888",
    fontSize: 15,
    fontWeight: "600",
  },
  selectedSwitchText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
