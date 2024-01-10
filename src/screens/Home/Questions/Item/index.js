import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box } from "native-base";
import DeleteButton from "./DeleteButton";
import { auth } from "../../../../auth";

const Item = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Box style={styles.item}>
      <TouchableOpacity
        style={styles.titleBtn}
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      >
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
      {auth.currentUser.uid === item.user_id && (
        <DeleteButton id={item.id} />
      )}
    </Box>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding:5,
    margin:5,
    borderRadius:10
  },
  text: {
    fontSize: 18,
  },
  titleBtn: {
    flex: 1,
    padding: 10,
  },
});
