import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronLeft, ChevronDown, Edit2, Plus, Tag, Receipt } from 'lucide-react-native';

const Cart = ({navigation}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDeliveryType, setSelectedDeliveryType] = useState(null);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      {/* <View className="flex-row items-center p-4 bg-white">
        <TouchableOpacity>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold ml-4">Bakingo</Text>
      </View> */}

      {/* Item Details Card */}
      <View className="bg-white m-4 p-4 rounded-xl">
        <View className="flex-row items-start">
          <View className="w-6 h-6 rounded-full border-2 border-green-500 mt-1" />
          <View className="flex-1 ml-2">
            <Text className="text-lg font-semibold">Biscoff Baked Cheesecake Slice</Text>
            <TouchableOpacity className="flex-row items-center mt-1">
              <Text className="text-gray-500">6 Inch Teddy Bear</Text>
              <ChevronDown size={20} color="#666" className="ml-1" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center bg-white border border-gray-200 rounded-lg">
            <TouchableOpacity 
              onPress={handleDecrement}
              className="px-3 py-1"
            >
              <Text className="text-green-500 text-xl">-</Text>
            </TouchableOpacity>
            <Text className="px-3 py-1">{quantity}</Text>
            <TouchableOpacity 
              onPress={handleIncrement}
              className="px-3 py-1"
            >
              <Text className="text-green-500 text-xl">+</Text>
            </TouchableOpacity>
          </View>
          <Text className="ml-3 text-lg font-semibold">₹498</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row mt-4 space-x-4">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 bg-white border border-gray-200 rounded-lg">
            <Edit2 size={18} color="#666" />
            <Text className="ml-2 text-gray-600">Cooking requests</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 bg-white border border-gray-200 rounded-lg">
            <Plus size={18} color="#666" />
            <Text className="ml-2 text-gray-600">Add more items</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Savings Corner */}
      <View className="bg-white mx-4 p-4 rounded-xl">
        <Text className="text-gray-500 font-semibold tracking-wider mb-2">SAVINGS CORNER</Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Tag size={24} color="#FF4500" />
            <View className="ml-3">
              <Text className="font-semibold">Save ₹120 on this order</Text>
              <TouchableOpacity>
                <Text className="text-gray-500">View all coupons &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity className="px-4 py-2 border border-orange-500 rounded-lg">
            <Text className="text-orange-500 font-semibold">Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Delivery Options */}
      <View className="bg-white mx-4 mt-4 rounded-xl">
        <View className="flex-row p-4 border-b border-gray-100">
          <TouchableOpacity className="px-4 py-2 bg-black rounded-full">
            <Text className="text-white">Delivery Type</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2">
            <Text className="text-gray-600">Tip</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2">
            <Text className="text-gray-600">Instructions</Text>
          </TouchableOpacity>
        </View>

        <View className="p-4">
          <TouchableOpacity 
            className="flex-row items-center mb-4"
            onPress={() => setSelectedDeliveryType('standard')}
          >
            <View className={`w-6 h-6 rounded-full border-2 ${selectedDeliveryType === 'standard' ? 'border-green-500' : 'border-gray-300'}`} />
            <View className="ml-3">
              <Text className="text-gray-600">Standard</Text>
              <Text className="text-gray-400">Add address to check delivery time</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            className="flex-row items-center"
            onPress={() => setSelectedDeliveryType('eco')}
          >
            <View className={`w-6 h-6 rounded-full border-2 ${selectedDeliveryType === 'eco' ? 'border-green-500' : 'border-gray-300'}`} />
            <View className="ml-3">
              <Text className="text-gray-600">Eco Saver</Text>
              <Text className="text-gray-400">Add address to check delivery time</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Summary */}
      <TouchableOpacity className="bg-white mx-4 mt-4 p-4 rounded-xl flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Receipt size={24} color="#22C55E" />
          <View className="ml-3">
            <Text className="font-semibold">To Pay ₹718</Text>
            <Text className="text-gray-500">Incl. all taxes & charges</Text>
          </View>
        </View>
        <ChevronDown size={24} color="#666" />
      </TouchableOpacity>

      {/* Almost There Section */}
      <View className="p-4 mt-4">
        <Text className="text-2xl font-bold">Almost There</Text>
        {/* <Text className="text-gray-500 mt-1">Login/Create Account quickly to place order</Text> */}
        
        <TouchableOpacity className="bg-orange-500 rounded-xl mt-4 p-4" onPress={()=>navigation.navigate("Checkout")}>
          <Text className="text-white text-center text-lg font-semibold">
            Checkout and Pay
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cart;