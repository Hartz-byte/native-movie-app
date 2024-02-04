import { TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";

var { width, height } = Dimensions.get("window");

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <Image
        source={require("../assets/images/moviePoster1.png")}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
