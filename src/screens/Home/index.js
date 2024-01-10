import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Questions from "./Questions";
import AddNewModal from "./Questions/AddNewModal";
import IconButton from "../../components/IconButton";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon_name={"md-add-outline"} onPress={() => setModalVisible((prev) => !prev)} />
      ),
      headerLeft: () => (
        <IconButton icon_name={"person-circle-outline"} onPress={() => navigation.navigate("Profile")} />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Questions />
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle={"pageSheet"}
        onRequestClose={() => setModalVisible(false)}
      >
        <AddNewModal closeModal={()=> setModalVisible(false)}/>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
