import { StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, Button, Heading, Input, useToast } from "native-base";
import { ADD_NEW_QUESTION_MUTATION } from "./queries"
import { useMutation } from "@apollo/client";
import { auth } from "../../../auth";

const AddNewModal = ({closeModal}) => {
  const toast = useToast();

  const [addNewQuestion, { loading, error}] = useMutation(ADD_NEW_QUESTION_MUTATION);

  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([{ text: "" }, { text: "" }]);

  const handleOptionChange=(val, i)=> {
    const data =[...options];
    data[i].text = val;
    setOptions(data);
  }

  const handleNewOption=()=> {
    if (options.length >= 5) {
        return;
    }
    setOptions((prev) => [...prev, {text:""}]);
  }

  const handleSubmit = async()=>{
    const options_data = options.filter((item) => item.text !== "");

    if (!title || options_data.length<2) {
      return;
    }

    await addNewQuestion({
      variables: {
        title,
        options: options_data,
        user_id: auth.currentUser?.uid
      }
    });

    closeModal();

    toast.show({
      title: "Question Added!",
      placement:"bottom",
      status:"success",
    })

  }
  return (
    <Box backgroundColor="#ddd" flex={1}>
      <Box p={6} flex={1}>
        <Heading size={"lg"} mb={2} color={"#184e63"}>Question</Heading>
        <Input
          placeholder="Enter a new question..."
          fontSize={20}
          borderColor="#686565"
          value={title}
          onChangeText={setTitle}
        />
        <Heading mt={6} mb={2} color={"#184e63"}>
          Options
        </Heading>

        {options.map((item, i) => (
          <Input
            placeholder="Enter a new option..."
            fontSize={18}
            borderColor="#686565"
            mb={2}
            key={i}
            value={item.text}
            onChangeText={(val) => handleOptionChange(val,i)}
          />
        ))}
        <Box mt="2" alignItems={{ base: "flex-end" }}>
          <Button
            size="xs"
            colorScheme={"coolGray"}
            disabled={options.length >= 5}
            onPress={handleNewOption}
            leftIcon={<Ionicons name="add-circle" size={24} color={"#fff"} />}
          />
        </Box>
      </Box>
      <Box>
        <Button onPress={handleSubmit} isLoading={loading}>Save</Button>
      </Box>
    </Box>
  );
};

export default AddNewModal;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
