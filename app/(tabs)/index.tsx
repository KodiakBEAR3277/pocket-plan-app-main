import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

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

        <View style={styles.titleContainer}>
          <Text style={styles.welcomeText}>WELCOME TO</Text>
          <Text style={styles.pocketText}>
            POCKET<Text style={styles.planText}>PLAN</Text>
          </Text>
        </View>

        <View style={styles.formContainer}>
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
          
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password? </Text>
            <TouchableOpacity>
              <Text style={styles.clickHereText}>Click here</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <Link href="/(tabs)/dashboard" asChild>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

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
          
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.clickHereText}>Click here</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    maxHeight: '90%',
    alignItems: 'center',
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
    marginTop: 80,
    alignItems: 'center',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    alignItems: 'stretch',  // Changed from 'center' to 'stretch'
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
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',  // Changed from 'flex-end' to 'flex-start'
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
  },
  clickHereText: {
    color: '#424242',
    fontWeight: '500',
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
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',  // Changed from 'center' to 'flex-start'
    justifyContent: 'flex-start',  // Added to ensure left alignment
  },
  signUpText: {
    color: '#FFFFFF',
  },
});