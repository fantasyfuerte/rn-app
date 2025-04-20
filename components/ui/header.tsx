import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Heading } from "@/components/ui/heading";

export default function Header() {
  return (
    <View style={styles.header}>
      <Heading size="xl" bold>
        WorkersHub
      </Heading>
      <View style={styles.headerButtons}>
        <TouchableOpacity>
          <FontAwesome name="search" size={20} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="filter" size={20} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
  headerButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
