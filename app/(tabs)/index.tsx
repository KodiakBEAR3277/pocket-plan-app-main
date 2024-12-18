import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function Login() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image
              source={require('../../assets/images/wallet.png')}
              style={styles.logo}
            />
          </View>
        </View>

        {/* Layered Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeText}>WELCOME TO</Text>
          <Text style={styles.pocketText}>
            POCKET<Text style={styles.planText}>PLAN</Text>
          </Text>
        </View>

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

        {/* Login Button with Link */}
        <View style={styles.buttonWrapper}>
          <Link href="/(tabs)/dashboard" asChild>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Lines with OR */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Social Media Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/facebook.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/google.png')}
              style={styles.socialIcon}
            />
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
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    backgroundColor: '#FC1B60',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    top: -60,
    alignItems: 'center',
    width: '100%',
  },
  logoCircle: {
    backgroundColor: '#EBEBEB',
    borderRadius: 90,
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
  titleContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '400',
    marginBottom: 3,
  },
  pocketText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  planText: {
    color: '#424242',
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
    alignSelf: 'flex-end',
  },
  buttonWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#FC1B60',
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
  },
  orText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: 60,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signUp: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
});
