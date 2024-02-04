import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View className="flex-1 bg-neutral-800">
      {/* top head section */}
      <SafeAreaView className="mb-3 mx-2">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx4">
          {/* options icon */}
          <TouchableOpacity>
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
          {/* "movies" text */}
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          {/* search icon */}
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* scrollview */}
      <ScrollView
        showsVerticalIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="mx-2"
      >
        {/* trending movies section */}
        <TrendingMovies data={trending} />

        {/* upcmonig movies */}
        <MovieList title="Upcoming" data={upcoming} />

        {/* top rated movies */}
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
