import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ onPress,icon_name }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Ionicons name={icon_name} size={30} />
    </TouchableOpacity>
  )
}

export default IconButton;