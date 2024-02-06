import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api";

const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();

    if (data && data.results) {
      setTrending(data.results);
    }
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();

    if (data && data.results) {
      setUpcoming(data.results);
    }
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();

    if (data && data.results) {
      setTopRated(data.results);
    }
  };

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
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* loading check */}
      {loading ? (
        <Loading />
      ) : (
        // scroll view
        <ScrollView
          showsVerticalIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          className="mx-2"
        >
          {/* trending movies section */}
          {trending.length > 0 && <TrendingMovies data={trending} />}

          {/* upcmonig movies */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* top rated movies */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
