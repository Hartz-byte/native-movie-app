import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";

var { width, height } = Dimensions.get("window");

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back and heart button */}
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

      {/* loading check */}
      {loading ? (
        <Loading />
      ) : (
        // person details
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            {/* person image */}
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                source={require("../assets/images/castImage2.png")}
                style={{ height: height * 0.43, width: width * 0.73 }}
              />
            </View>
          </View>

          <View className="mt-6">
            {/* person name */}
            <Text className="text-3xl text-white font-bold text-center">
              Keanu Reeves
            </Text>
            {/* person birth place */}
            <Text className="text-base text-neutral-500 text-center">
              London, United Kingdom
            </Text>
          </View>

          {/* person's info */}
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">28-11-1999</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">70.85</Text>
            </View>
          </View>

          {/* biography */}
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              Biography Biography Biography Biography Biography Biography
              Biography Biography Biography Biography Biography Biography
              Biography Biography Biography Biography Biography Biography
              Biography Biography Biography Biography Biography Biography
              Biography Biography
            </Text>
          </View>

          {/* movies */}
          <MovieList title={"Movies"} hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
};

export default PersonScreen;
