import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center px-4">
      {/* Logo Placeholder */}
      <View className="bg-gray-200 rounded-full h-20 w-20 mb-6 items-center justify-center">
        <Text className="text-2xl font-bold">Logo</Text>
      </View>

      {/* Welcome Text */}
      <Text className="text-lg font-semibold text-gray-600">WELCOME TO</Text>
      <Text className="text-3xl font-bold text-pink-600">POCKETPLAN</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        className="w-full bg-gray-100 p-4 rounded-lg mt-6 text-gray-800"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        className="w-full bg-gray-100 p-4 rounded-lg mt-4 text-gray-800"
      />

      {/* Forgot Password Link */}
      <TouchableOpacity className="self-end mt-2">
        <Text className="text-pink-500 text-sm">Forgot password? Click here</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity className="w-full bg-pink-500 py-4 rounded-lg mt-6 items-center">
        <Text className="text-white text-lg font-semibold">Log In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex-row items-center my-6">
        <View className="flex-1 h-[1px] bg-gray-300" />
        <Text className="mx-4 text-gray-500">or</Text>
        <View className="flex-1 h-[1px] bg-gray-300" />
      </View>

      {/* Social Media Buttons Placeholder */}
      <View className="flex-row space-x-4">
        <View className="bg-gray-100 p-4 rounded-full">
          <Text className="text-gray-400">FB</Text>
        </View>
        <View className="bg-gray-100 p-4 rounded-full">
          <Text className="text-gray-400">G</Text>
        </View>
      </View>

      {/* Sign Up Link */}
      <TouchableOpacity className="mt-6">
        <Text className="text-gray-500 text-sm">
          Don’t have an account? <Text className="text-pink-500">Click here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
