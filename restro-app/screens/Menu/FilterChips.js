import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

export default function FilterChips() {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      className="px-4 py-2"
    >
      <TouchableOpacity className="flex-row items-center bg-white border border-gray-200 rounded-full px-4 py-2 mr-2">
        <View className="w-4 h-4 border border-green-600 p-0.5 mr-2">
          <View className="w-full h-full rounded-full bg-green-600" />
        </View>
        <ChevronDown size={16} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center bg-white border border-gray-200 rounded-full px-4 py-2 mr-2">
      <View className="w-4 h-4 border border-red-600 p-0.5 mr-2">
          <View className="w-full h-full rounded-full bg-red-600" />
        </View>
        <ChevronDown size={16} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity className="bg-white border border-gray-200 rounded-full px-4 py-1 mr-2">
        <Text>Ratings 4.0+</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white border border-gray-200 rounded-full px-4 py-1 mr-2">
        <Text>Bestseller</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

