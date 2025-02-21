import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Zap } from 'lucide-react-native';

export default function Hotel() {
  return (
    <View className="items-center py-8 space-y-4">
      <View className="flex-row items-center">
        <Text className="text-2xl font-bold">Vasu Gadagi Hotel</Text>
        <Zap size={24} color="#fc8019" fill="#fc8019" style={{ marginLeft: 4 }} />
      </View>
      <View>
        <Text className="text-3xl font-bold text-center">
          Freshly{'\n'}prepared
        </Text>
      </View>
      <TouchableOpacity className="bg-[#fc8019] px-8 py-3 rounded-full">
        <Text className="text-white font-semibold">ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

