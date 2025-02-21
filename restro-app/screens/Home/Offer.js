import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Offer() {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#FFFFFF', '#FFF3E0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="rounded-lg p-4 relative overflow-hidden"
      >
        <View>
          <Text className="text-2xl font-bold text-[#fc8019]">CREDIT CARD</Text>
          <Text className="text-gray-600 mt-1">
            FIRST YEAR FREE, JUST FOR YOU
          </Text>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="absolute right-0 bottom-0 w-32 h-20"
          resizeMode="contain"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}