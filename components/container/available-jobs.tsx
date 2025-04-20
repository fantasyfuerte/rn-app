import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/app/(tabs)/index";

export default function AvailableJobs() {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <Text style={styles.title}>Jobs near me</Text>
        <TouchableOpacity>
          <Text style={{ color: "#999", fontSize: 16 }}>See all</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
