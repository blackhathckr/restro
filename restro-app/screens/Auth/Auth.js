import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Mail, Lock, ChevronLeft, Eye, EyeOff } from 'lucide-react-native';

const Auth = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle authentication logic here
    console.log('Submit:', { email, password });
    navigation.navigate("Home");
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1">
        {/* Header with Back Button */}
        <View className="p-4">
          <TouchableOpacity>
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Logo and Branding Section */}
        <View className="items-center justify-center py-8">
          <View className="w-24 h-24 bg-orange-100 rounded-full items-center justify-center mb-4">
            <Text className="text-4xl">🍽️</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-800">Vasu Gadagi Hotel</Text>
          <Text className="text-base text-gray-500 mt-2">Delicious food at your doorstep</Text>
        </View>

        {/* Auth Form */}
        <View className="px-6 pt-8">
          <Text className="text-3xl font-bold text-gray-800 mb-6">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </Text>

          {/* Email Input */}
          <View className="mb-4">
            <Text className="text-gray-700 mb-2 font-medium">Email Address</Text>
            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 h-12">
              <Mail size={20} className="text-gray-400" />
              <TextInput
                className="flex-1 ml-3 text-base"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="text-gray-700 mb-2 font-medium">Password</Text>
            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 h-12">
              <Lock size={20} className="text-gray-400" />
              <TextInput
                className="flex-1 ml-3 text-base"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-400" />
                ) : (
                  <Eye size={20} className="text-gray-400" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          {isLogin && (
            <TouchableOpacity className="mb-6">
              <Text className="text-orange-500 text-right font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}

          {/* Submit Button */}
          <TouchableOpacity 
            onPress={handleSubmit}
            className="bg-orange-500 rounded-xl py-4 mb-4"
          >
            <Text className="text-white text-center font-bold text-lg">
              {isLogin ? 'Login' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-4">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-4 text-gray-500">or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Social Login Buttons */}
          <View className="space-y-3">
            <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-xl py-3">
              <Image 
                source={{ uri: '/api/placeholder/20/20' }}
                className="w-5 h-5 mr-3"
              />
              <Text className="text-gray-700 font-medium">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-xl py-3">
              <Image 
                source={{ uri: '/api/placeholder/20/20' }}
                className="w-5 h-5 mr-3"
              />
              <Text className="text-gray-700 font-medium">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Toggle Auth Mode */}
          <View className="flex-row justify-center mt-6 mb-8">
            <Text className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </Text>
            <TouchableOpacity onPress={toggleAuthMode}>
              <Text className="text-orange-500 font-medium">
                {isLogin ? 'Sign Up' : 'Login'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Optional: Separate Forgot Password Screen
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <View className="flex-1 bg-white p-6">
      <TouchableOpacity className="mb-6">
        <ChevronLeft size={24} color="#000" />
      </TouchableOpacity>

      <Text className="text-3xl font-bold text-gray-800 mb-4">
        Reset Password
      </Text>
      
      <Text className="text-gray-500 mb-8">
        Enter your email address and we'll send you instructions to reset your password.
      </Text>

      <View className="mb-6">
        <Text className="text-gray-700 mb-2 font-medium">Email Address</Text>
        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 h-12">
          <Mail size={20} className="text-gray-400" />
          <TextInput
            className="flex-1 ml-3 text-base"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      <TouchableOpacity className="bg-orange-500 rounded-xl py-4">
        <Text className="text-white text-center font-bold text-lg">
          Send Reset Link
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { Auth, ForgotPassword };