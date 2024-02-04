import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";

var { width, height } = Dimensions.get("window");

const MovieScreen = () => {
  const { params: item } = useRoute();

  useEffect(() => {
    //  call the api
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* back btn and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            "z-20 w-full flex-row justify-between items-center px-4 mt-3"
          }
        >
          {/* back btn */}
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          {/* heart/ like icon */}
          <TouchableOpacity>
            <HeartIcon size="35" color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
