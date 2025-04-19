import Header from "@/components/ui/header";
import SwitchScreen from "@/components/ui/switch-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [selected, setSelected] = useState<"available-jobs" | "my-jobs">(
    "available-jobs"
  );

  return (
    <SafeAreaView>
      <Header />
      <SwitchScreen selected={selected} setSelected={setSelected} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
