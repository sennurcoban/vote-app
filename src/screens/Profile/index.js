import { Box, Button, Heading, Text } from "native-base";
import React from "react";
import { auth } from "../../auth";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <Box justifyContent={"center"} alignItems={"center"} flex={1}>
      <Heading size={"md"}>Welcome, {auth.currentUser?.email}</Heading>
      <Box mt={3} >
        <Button size="lg" onPress={handleSignOut} >
        Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
