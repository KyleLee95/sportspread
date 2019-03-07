import React from "react";
import { Button } from "react-native";
import axios from "axios";
import { sortGames } from "./algorithm";

export const GetGameButton = () => {
  //on press fire algorithm
  //on press fire axios request
  return <Button title="Show Me The Games" onPress={sortGames} />;
};

export default GetGameButton;
