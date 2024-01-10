import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSubscription } from "@apollo/client";
import { GET_QUESTIONS_SUBSCRIPTION } from "./queries";
import Loading from "../../../components/Loading";
import List from "./List";
import EmptyList from "../../../components/EmptyList"

const Questions = () => {
  const { loading, error, data } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);
  console.log(data);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text> {JSON.stringify(error)}</Text>;
  }

  return (
    <>
      {data.questions.length > 0 ? (
        <List data={data.questions} />
      ) : (
        <EmptyList message={"No surveys yet."} />
      )}
    </>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: "row",
  },
});
