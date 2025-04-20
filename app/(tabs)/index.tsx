import AvailableJobs from "@/components/container/available-jobs";
import Header from "@/components/ui/header";
import SwitchScreen from "@/components/ui/switch-screen";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const [selected, setSelected] = useState<"available-jobs" | "my-jobs">(
    "available-jobs"
  );

  return (
    <SafeAreaView>
      <Header />
      <SwitchScreen selected={selected} setSelected={setSelected} />
      {selected == "available-jobs" && <AvailableJobs />}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    margin: 24,
    color: "#fff",
  },
});
