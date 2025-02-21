import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Bookmark, Minus, Plus, Star } from 'lucide-react-native';

interface FoodItemProps {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller: boolean;
  isCustomisable?: boolean;
}

export default function FoodItem({
  name,
  price,
  rating,
  reviews,
  description,
  image,
  isVeg,
  isBestseller,
  isCustomisable = true,
}: FoodItemProps) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <View className="flex-row justify-between p-4 border-b border-gray-100">
      <View className="flex-1 pr-4">
        {/* Veg indicator and bestseller tag */}
        <View className="flex-row items-center mb-1">
          <View className="w-4 h-4 border border-green-600 p-0.5">
            <View className="w-full h-full rounded-full bg-green-600" />
          </View>
          {isBestseller && (
            <View className="flex-row items-center ml-2">
              <Star className="w-4 h-4" />
              <Text className="text-[#EE9C9C] text-sm ml-1">Bestseller</Text>
            </View>
          )}
        </View>

        {/* Item name */}
        <Text className="text-lg font-semibold text-gray-800 mb-1">
          {name}
        </Text>

        {/* Price */}
        <Text className="text-base mb-1">
          ₹{price}
        </Text>

        {/* Rating */}
        <View className="flex-row items-center mb-2">
          <Text className="text-green-700">★ {rating}</Text>
          <Text className="text-gray-500 ml-1">({reviews})</Text>
        </View>

        {/* Save to Eatlist button */}
        <TouchableOpacity 
          className="flex-row items-center bg-pink-50 self-start px-3 py-1.5 rounded-md mb-2"
        >
          <Bookmark size={16} color="#FF7CA3" />
          <Text className="text-[#FF7CA3] ml-1 text-sm">
            Save to Eatlist
          </Text>
        </TouchableOpacity>

        {/* Description */}
        <View>
          <Text className="text-gray-500 text-sm" numberOfLines={2}>
            {description}
          </Text>
          <Text className="text-gray-600 text-sm">more</Text>
        </View>
      </View>

      {/* Right section with image and add button */}
      <View className="w-32">
        <Image
          source={ image }
          className="w-full h-24 rounded-lg mb-2"
          resizeMode="cover"
        />
        
        {quantity === 0 ? (
          <TouchableOpacity
            onPress={handleIncrement}
            className="bg-white border border-green-500 rounded-lg py-2"
          >
            <Text className="text-green-500 text-center font-semibold">
              ADD
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row items-center justify-between bg-white border border-green-500 rounded-lg py-1 px-2">
            <TouchableOpacity onPress={handleDecrement}>
              <Minus size={20} color="#22C55E" />
            </TouchableOpacity>
            <Text className="text-green-500 font-semibold">
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Plus size={20} color="#22C55E" />
            </TouchableOpacity>
          </View>
        )}

        {isCustomisable && (
          <Text className="text-gray-400 text-xs text-center mt-1">
            Customisable
          </Text>
        )}
      </View>
    </View>
  );
}

