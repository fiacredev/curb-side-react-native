import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { signupDriver } from "../services/authService";
import { useRouter } from "expo-router";

const DriverSignupScreen = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const result = await signupDriver(name, email, password);
      router.push("/screens/DriverLoginScreen");
      console.log(result);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Driver Signup</Title>

      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSignup}>
        Sign Up
      </Button>
    </View>
  );
};

export default DriverSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
});