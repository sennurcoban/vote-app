import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Input } from "native-base";
import { auth } from "../../auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    });
    return unsubscribe;
  },[])

  const handleSignUp = () => {
    if (!email || !password) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("user", user);
      })
      .catch((error) => console.log(error.message));
  };

  const handleLogin =()=> {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("loggedUser", user);
    })
  }
  return (
    <Box p={6}>
      <Box mb={2}>
        <Heading mb={2} size={"md"}>
          E-mail
        </Heading>
        <Input
          placeholder="Please enter your e-mail..."
          fontSize={18}
          borderColor="#686565"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={"none"}
        />
      </Box>
      <Box mb={2}>
        <Heading mb={2} size={"md"}>
          Password
        </Heading>
        <Input
          placeholder="Enter password..."
          fontSize={18}
          borderColor="#686565"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Box>
      <Box mt={4}>
        <Button size="lg" onPress={handleLogin}>Login</Button>
      </Box>
      <Box mt={3}>
        <Button size="lg" variant={"outline"} onPress={handleSignUp}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
