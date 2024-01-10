import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Button, Radio } from "native-base";
import { NEW_ANSWER_MUTATION } from "./queries";
import { useMutation } from "@apollo/client";
import { auth } from "../../auth";

const Form = ({ options, setIsVoted, id }) => {
  const [seleceted, setSelected] = useState("");
  console.log("uid",auth.currentUser?.uid)

  const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);

  const handleSubmit = async () => {
    if (!seleceted) {
      return;
    }
    await newAnswer({
      variables: {
        option_id: seleceted,
        user_id: auth.currentUser?.uid,
        question_id:id
      },
    });

    setIsVoted(true);
  };
  return (
    <Box py={"3"}>
      <Radio.Group value={seleceted} onChange={setSelected}>
        {options.map((option) => (
          <Radio key={option.id} value={option.id} my={1}>
            {option.text}
          </Radio>
        ))}
      </Radio.Group>
      <Button mt={5} onPress={handleSubmit} isLoading={loading}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;

const styles = StyleSheet.create({});
