import Switchscreen from "@/components/ui/switch-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [selected, setSelected] = useState<0 | 1>(0);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>WorkersHub</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity>
            <FontAwesome name="search" size={20} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="filter" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <Switchscreen selected={selected} setSelected={setSelected} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 24,
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
