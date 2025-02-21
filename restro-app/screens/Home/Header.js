import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ChevronDown, User2 } from 'lucide-react-native';

export default function Header({navigation}) {
  return (
    <View className="border-b border-gray-200 bg-white">
      <View className="p-4">
        <View className="flex-row items-center justify-between">
          <View className="space-y-1">
            <View className="flex-row items-center">
              <Text className="text-2xl font-bold">
                <Text className="text-[#fc8019]">⌂ </Text> Home
              </Text>
              <ChevronDown size={16} color="#6B7280" style={{ marginLeft: 4 }} />
            </View>
            <Text className="text-sm text-gray-500">
              #1910, 2nd Main, Stage I, Kengeri Satellite Town, Be...
            </Text>
          </View>
          <TouchableOpacity 
            className="h-10 w-10 rounded-full items-center justify-center" onPress={()=>navigation.navigate("Profile")}
          >
            <User2 size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}