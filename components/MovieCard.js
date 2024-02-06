import { TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import React from "react";
import { image500 } from "../api";

var { width, height } = Dimensions.get("window");

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{uri: image500(item.poster_path)}}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
