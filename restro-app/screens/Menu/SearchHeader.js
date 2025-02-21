import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { ArrowLeft, Search, Mic, ShoppingBag } from 'lucide-react-native';

export default function SearchHeader({navigation}) {
  return (
    <View className="flex-row items-center bg-gray-100 px-2 py-2">
      
      <TouchableOpacity>
        <Mic size={24} color="#FC8019" />
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center bg-white rounded-md mx-2 px-3">
        <Search size={20} color="#6B7280" />
        <TextInput
          className="flex-1 ml-2 text-base"
          placeholder="Search in Menu"
          placeholderTextColor="#6B7280"
        />
      </View>

      
      <TouchableOpacity>
        <ShoppingBag size={24} color="#FC8019" onPress={()=> navigation.navigate("Cart")} />
      </TouchableOpacity>
    </View>
  );
}

