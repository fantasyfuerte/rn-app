import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
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
  const theme = useTheme();
  console.log(theme);

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
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
