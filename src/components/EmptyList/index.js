import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, Image } from "native-base";

const EmptyList = ({ message }) => {
  return (
    <Box w={"100%"} h={"100%"} justifyContent="center" alignItems={"center"}>
      <Image source={require('./empty.png')} />
      <Heading size={"md"} fontWeight={"normal"}>{message}</Heading>
    </Box>
  );
};

export default EmptyList;
