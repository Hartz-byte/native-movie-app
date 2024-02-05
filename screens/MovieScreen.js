import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);

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
            "absolute z-20 w-full flex-row justify-between items-center px-4 mt-3"
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
            <HeartIcon
              size="35"
              color={isFavorite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          {/* movie screen poster */}
          <Image
            source={require("../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.55 }}
          />

          {/* linear gradient */}
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
