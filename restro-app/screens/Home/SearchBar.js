import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Search, Mic } from 'lucide-react-native';

export default function SearchBar() {
  return (
    <View className="relative">
      <View className="flex-row items-center bg-white rounded-full border border-gray-300">
        <View className="pl-4 py-3">
          <Search size={16} color="#6B7280" />
        </View>
        <TextInput
          className="flex-1 pl-2 pr-10 py-2 text-base"
          placeholder="Search for 'Today's Special'"
          placeholderTextColor="#6B7280"
        />
        <TouchableOpacity className="absolute right-4 top-3">
          <Mic size={20} color="#fc8019" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
