import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home, ShoppingBag, CreditCard, Store, UtensilsCrossed } from 'lucide-react-native';

export default function BottomNav() {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <View className="flex-row justify-between px-4 py-2">
        <TouchableOpacity className="items-center">
          <Home size={24} color="#fc8019" />
          <Text className="text-xs mt-1">Swiggy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <UtensilsCrossed size={24} color="#6B7280" />
          <Text className="text-xs mt-1">Food</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Store size={24} color="#6B7280" />
          <Text className="text-xs mt-1">Instamart</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <ShoppingBag size={24} color="#6B7280" />
          <Text className="text-xs mt-1">Dineout</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <CreditCard size={24} color="#6B7280" />
          <Text className="text-xs mt-1">Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}