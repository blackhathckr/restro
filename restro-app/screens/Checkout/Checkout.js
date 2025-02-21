import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { ChevronLeft, Receipt, Tag, AlertCircle } from 'lucide-react-native';

const Checkout = ({navigation}) => {
  const orderItems = [
    {
      id: 1,
      name: 'Biscoff Baked Cheesecake Slice',
      variant: '6 Inch Teddy Bear',
      price: 498,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Choco Truffle Pastry',
      variant: 'Regular',
      price: 99,
      quantity: 2,
    }
  ];

  const taxes = [
    { name: 'GST (5%)', amount: 35.85 },
    { name: 'Delivery Charges', amount: 49 },
    { name: 'Platform Fee', amount: 15 }
  ];

  // Calculate subtotal
  const subtotal = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Calculate total taxes
  const taxTotal = taxes.reduce((acc, tax) => acc + tax.amount, 0);
  
  // Calculate grand total
  const grandTotal = subtotal + taxTotal;

  // Calculate savings (if any)
  const savings = 120;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      {/* <View className="flex-row items-center p-4 bg-white border-b border-gray-100">
        <TouchableOpacity>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold ml-4">Order Summary</Text>
      </View> */}

      <ScrollView className="flex-1">
        {/* Order Items */}
        <View className="bg-white p-4 mt-2">
          <Text className="text-lg font-semibold mb-4">Order Details</Text>
          {orderItems.map((item, index) => (
            <View key={item.id} className="mb-4">
              <View className="flex-row items-start justify-between">
                <View className="flex-1">
                  <Text className="font-semibold text-base">{item.name}</Text>
                  <Text className="text-gray-500 text-sm mt-1">{item.variant}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-gray-500 mr-3">×{item.quantity}</Text>
                  <Text className="font-semibold">₹{item.price * item.quantity}</Text>
                </View>
              </View>
              {index !== orderItems.length - 1 && (
                <View className="h-[1px] bg-gray-100 mt-4" />
              )}
            </View>
          ))}
        </View>

        {/* Bill Details */}
        <View className="bg-white p-4 mt-2">
          <Text className="text-lg font-semibold mb-4">Bill Details</Text>
          
          {/* Subtotal */}
          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-600">Item Total</Text>
            <Text className="font-semibold">₹{subtotal}</Text>
          </View>

          {/* Savings */}
          {savings > 0 && (
            <View className="flex-row items-center justify-between mb-3 bg-orange-50 p-2 rounded-lg">
              <View className="flex-row items-center">
                <Tag size={16} className="text-orange-600" />
                <Text className="text-orange-600 ml-2">Total Savings</Text>
              </View>
              <Text className="text-orange-600 font-semibold">-₹{savings}</Text>
            </View>
          )}

          {/* Taxes and Charges */}
          {taxes.map((tax, index) => (
            <View key={index} className="flex-row justify-between mb-3">
              <Text className="text-gray-600">{tax.name}</Text>
              <Text className="font-semibold">₹{tax.amount}</Text>
            </View>
          ))}

          <View className="h-[1px] bg-gray-200 my-3" />

          {/* Grand Total */}
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold">Grand Total</Text>
            <Text className="text-lg font-bold">₹{grandTotal}</Text>
          </View>
        </View>

        {/* Payment Method */}
        <View className="bg-white p-4 mt-2">
          <Text className="text-lg font-semibold mb-4">Payment Method</Text>
          <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 p-4 rounded-lg">
            <View className="flex-row items-center">
              <Receipt size={20} className="text-gray-600" />
              <Text className="ml-3 font-medium">UPI / Cards / Netbanking</Text>
            </View>
            <ChevronLeft size={20} className="text-gray-600 transform rotate-180" />
          </TouchableOpacity>
        </View>

        {/* Additional Info */}
        <View className="flex-row items-start p-4">
          <AlertCircle size={16} className="text-gray-400 mt-1" />
          <Text className="text-gray-400 text-sm ml-2 flex-1">
            By proceeding to pay, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Payment Button */}
      <View className="bg-white p-4 border-t border-gray-100">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-600">Total Amount</Text>
          <Text className="text-xl font-bold">₹{grandTotal}</Text>
        </View>
        <TouchableOpacity className="bg-orange-500 rounded-xl p-4">
          <Text className="text-white text-center text-lg font-semibold">
            Pay ₹{grandTotal}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;