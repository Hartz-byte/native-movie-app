import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";

var { width, height } = Dimensions.get("window");

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4 my-20"
        }
      >
        {/* back btn */}
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>

        {/* heart icon */}
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon size="35" color={isFavorite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PersonScreen;
