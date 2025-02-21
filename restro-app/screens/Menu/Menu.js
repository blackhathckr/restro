import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import SearchHeader from './SearchHeader';
import FilterChips from './FilterChips';
import FoodItem from './FoodItem';
import food from '../../assets/food/food.jpeg'
import { ArrowUp, ArrowUpWideNarrow } from 'lucide-react-native';

const FOOD_ITEMS = [
  {
    id: 1,
    name: 'Biscoff Baked Cheesecake Slice',
    price: 199,
    rating: 4.5,
    reviews: 75,
    description: 'A classic Belgian Biscoff cheesecake in slice form with a buttery biscuit base, creamy filling, and Biscoff spread topping.',
    image: food,
    isVeg: true,
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Choco Truffle Pastry',
    price: 99,
    rating: 4.6,
    reviews: 652,
    description: 'A moist chocolate sponge cake is topped with a rich chocolate ganache and decorated with chocolate shavings.',
    image: food,
    isVeg: true,
    isBestseller: true,
  },
  {
    id: 3,
    name: 'Choco Truffle Cake',
    price: 529,
    rating: 4.7,
    reviews: 620,
    description: 'A decadent chocolate cake layered with rich chocolate ganache and decorated with chocolate shavings.',
    image: food,
    isVeg: true,
    isBestseller: true,
  },
];

export default function Menu({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <SearchHeader navigation={navigation} />
      <FilterChips />
      
      <ScrollView>
        <View className="py-4">
          <Text className="text-xl font-semibold px-4 mb-2">
            Top Picks
          </Text>
          <View className="flex-row items-center justify-between px-4 mb-4">
            <Text className="text-2xl font-bold">
              Recommended (20)
            </Text>
          </View>

          {FOOD_ITEMS.map(item => (
            <FoodItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

