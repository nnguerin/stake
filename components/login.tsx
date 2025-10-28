import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          left={<TextInput.Icon icon="email" color="#2C2C2C" />}
          label={<Text style={{ color: "#2C2C2C" }}>Email</Text>}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="email@address.com"
          textColor="#2C2C2C"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          left={<TextInput.Icon icon="lock" color="#2C2C2C" />}
          label={<Text style={{ color: "#2C2C2C" }}>Password</Text>}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          textColor="#2C2C2C"
        />
      </View>
      <View style={styles.buttons}>
        <View>
          <Button
            mode="text"
            disabled={loading}
            onPress={() => signInWithEmail()}
            textColor="#2C2C2C"
          >
            Sign In
          </Button>
        </View>
        <View>
          <Button
            disabled={loading}
            onPress={() => signUpWithEmail()}
            buttonColor="#d06a3ab0"
            textColor="#2C2C2C"
          >
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  buttons: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  input: {
    marginTop: 12,
    backgroundColor: "#F4EFE7",
  },
});
