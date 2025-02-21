import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Zap } from 'lucide-react-native';

export default function Categories({navigation}) {
  return (
    <View className="flex-row flex-wrap justify-between">
      <TouchableOpacity className="w-[48%] bg-white rounded-lg p-4 mb-4" onPress={()=>navigation.navigate("Menu")}>
        <Text className="font-bold text-lg">FOOD DELIVERY</Text>
        <Text className="text-gray-500">MAAAAD DEALS</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-[#fc8019]">🎄 LIVE NOW</Text>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="h-32 w-full rounded-lg mt-2"
        />
      </TouchableOpacity>

      <TouchableOpacity className="w-[48%] bg-white rounded-lg p-4 mb-4">
        <Text className="font-bold text-lg">FOOD DELIVERY</Text>
        <Text className="text-gray-500">MAAAAD DEALS</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-[#fc8019]">🎄 LIVE NOW</Text>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="h-32 w-full rounded-lg mt-2"
        />
      </TouchableOpacity>

      <TouchableOpacity className="w-[48%] bg-white rounded-lg p-4 mb-4">
        <Text className="font-bold text-lg">FOOD DELIVERY</Text>
        <Text className="text-gray-500">MAAAAD DEALS</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-[#fc8019]">🎄 LIVE NOW</Text>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="h-32 w-full rounded-lg mt-2"
        />
      </TouchableOpacity>

      <TouchableOpacity className="w-[48%] bg-white rounded-lg p-4 mb-4">
        <Text className="font-bold text-lg">FOOD DELIVERY</Text>
        <Text className="text-gray-500">MAAAAD DEALS</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-[#fc8019]">🎄 LIVE NOW</Text>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="h-32 w-full rounded-lg mt-2"
        />
      </TouchableOpacity>
    </View>
  );
}