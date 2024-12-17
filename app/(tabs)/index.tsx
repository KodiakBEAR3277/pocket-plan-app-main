import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image source={require('../../assets/images/wallet.png')} style={styles.logo} /> {/* Placeholder for the wallet icon */}
          </View>
        </View>
        <Text style={styles.title}>WELCOME TO POCKETPLAN</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#AAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AAA"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password? Click here</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button title="Log In" onPress={() => {}} color="#FFFFFF" />
        </View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>f</Text> {/* Placeholder for Facebook icon */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>G</Text> {/* Placeholder for Google icon */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.signUp}>Don't have an account? Click here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    backgroundColor: '#FF69B4',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoCircle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 10,
  },
  logo: {
    width: 50, // adjust the width as needed
    height: 50, // adjust the height as needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  forgotPassword: {
    color: '#FFFFFF',
    textAlign: 'right',
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#6200ee',
    marginBottom: 20,
    width: '100%',
  },
  orText: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 50,
    width: '45%',
    alignItems: 'center',
  },
  socialText: {
    color: '#FF69B4',
    fontSize: 18,
  },
  signUp: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
});
