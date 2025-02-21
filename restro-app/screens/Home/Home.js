import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import Hotel from './Hotel';
import Categories from './Categories';
import Offer from './Offer';
import BottomNav from './BottomNav';

export default function Home({navigation}) {
  return (
    <View className="flex-1 bg-gray-50">
      <Header navigation={navigation}/>
      <ScrollView className="flex-1">
        <View className="px-4 py-2 space-y-4">
          <SearchBar />
          <Hotel />
          <Categories navigation={navigation}/>
          <Offer />
          <View className="h-20" />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}