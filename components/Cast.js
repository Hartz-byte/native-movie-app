import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { fallbackPersonImage, image185 } from "../api";

const Cast = ({ cast, navigation }) => {

  return (
    <View className="mx-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.navigate("Person", person)}
              >
                {/* cast image */}
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    source={{uri: image185(person?.profile_path) || fallbackPersonImage}}
                    className="rounded-2xl h-24 w-20"
                  />
                </View>

                {/* character name */}
                <Text className="text-white text-xs mt-1">
                  {person?.character.length > 10
                    ? person?.character.slice(0, 10) + "..."
                    : person?.character}
                </Text>

                {/* person name */}
                <Text className="text-neutral-400 text-xs mt-1">
                  {person?.original_name.length > 10
                    ? person?.original_name.slice(0, 10) + "..."
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
