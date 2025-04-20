import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "@/app/(tabs)/index";


export default function AvailableJobs() {
  return (
    <ScrollView>
      <Text style={styles.title}>Jobs near me</Text>
    </ScrollView>
  );
}
