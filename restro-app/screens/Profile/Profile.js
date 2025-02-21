import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { 
  User, 
  MapPin, 
  Heart, 
  Clock, 
  Gift, 
  Settings, 
  HelpCircle, 
  ChevronRight, 
  LogOut,
  CreditCard,
  Bell,
  Share2,
  Star
} from 'lucide-react-native';

const Profile = ({navigation}) => {
  const userProfile = {
    name: 'Neeraj',
    email: 'neeraj@gmail.com',
    phone: '+919513881008',
    address: 'Home',
    memberSince: 'October 2023'
  };

  const logoutHandler = () =>
  {
    navigation.navigate("Auth");
  }

  const menuSections = [
    {
      title: 'Food & Orders',
      items: [
        {
          icon: <Clock size={22} className="text-gray-600" />,
          title: 'Your Orders',
          subtitle: 'Check your order history',
        },
        {
          icon: <Heart size={22} className="text-gray-600" />,
          title: 'Favorite Orders',
          subtitle: 'Your favorite meals',
        },
        {
          icon: <MapPin size={22} className="text-gray-600" />,
          title: 'Addresses',
          subtitle: 'Manage your delivery locations',
        }
      ]
    },
    {
      title: 'Payments & Credits',
      items: [
        {
          icon: <CreditCard size={22} className="text-gray-600" />,
          title: 'Saved Cards',
          subtitle: 'Manage your payment methods',
        },
        {
          icon: <Gift size={22} className="text-gray-600" />,
          title: 'FoodieRewards',
          subtitle: '350 points available',
          badge: 'NEW',
        }
      ]
    },
    {
      title: 'Settings & Preferences',
      items: [
        {
          icon: <Bell size={22} className="text-gray-600" />,
          title: 'Notifications',
          subtitle: 'Manage your alerts',
        },
        {
          icon: <Settings size={22} className="text-gray-600" />,
          title: 'Settings',
          subtitle: 'App preferences & account settings',
        }
      ]
    }
  ];

  const MenuItem = ({ item }) => (
    <TouchableOpacity className="flex-row items-center p-4 bg-white">
      <View className="w-8">{item.icon}</View>
      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <Text className="text-base font-semibold text-gray-800">{item.title}</Text>
          {item.badge && (
            <View className="bg-orange-100 px-2 py-1 rounded-full ml-2">
              <Text className="text-xs text-orange-500 font-medium">{item.badge}</Text>
            </View>
          )}
        </View>
        <Text className="text-sm text-gray-500 mt-1">{item.subtitle}</Text>
      </View>
      <ChevronRight size={20} className="text-gray-400" />
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Profile Header */}
      <View className="bg-orange-500 pt-12 pb-6 px-4">
        <View className="flex-row items-center">
          <View className="w-20 h-20 rounded-full bg-white items-center justify-center">
            <Text className="text-3xl">👤</Text>
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-xl font-bold text-white">{userProfile.name}</Text>
            <Text className="text-white opacity-90 mt-1">{userProfile.phone}</Text>
            <Text className="text-white opacity-80 text-sm mt-1">{userProfile.email}</Text>
          </View>
          <TouchableOpacity className="bg-white/20 p-2 rounded-full">
            <Share2 size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        {/* Membership Status */}
        <View className="mt-6 bg-white/10 rounded-xl p-3 flex-row items-center">
          <Star size={20} color="white" fill="white" />
          <Text className="text-white ml-2 flex-1">Premium Member</Text>
          <Text className="text-white opacity-80">Since {userProfile.memberSince}</Text>
        </View>
      </View>

      {/* Quick Stats */}
      <View className="flex-row bg-white py-4 px-2 mb-4">
        <View className="flex-1 items-center border-r border-gray-200">
          <Text className="text-2xl font-bold text-orange-500">12</Text>
          <Text className="text-sm text-gray-600 mt-1">Orders</Text>
        </View>
        <View className="flex-1 items-center border-r border-gray-200">
          <Text className="text-2xl font-bold text-orange-500">350</Text>
          <Text className="text-sm text-gray-600 mt-1">Points</Text>
        </View>
        <View className="flex-1 items-center">
          <Text className="text-2xl font-bold text-orange-500">4</Text>
          <Text className="text-sm text-gray-600 mt-1">Addresses</Text>
        </View>
      </View>

      {/* Menu Sections */}
      {menuSections.map((section, index) => (
        <View key={index} className="mb-4">
          <Text className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {section.title}
          </Text>
          <View className="bg-white">
            {section.items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <MenuItem item={item} />
                {itemIndex !== section.items.length - 1 && (
                  <View className="h-[1px] bg-gray-100 ml-16" />
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
      ))}

      {/* Help & Support */}
      <View className="bg-white mb-4">
        <TouchableOpacity className="flex-row items-center p-4">
          <HelpCircle size={22} className="text-gray-600" />
          <Text className="ml-3 text-base text-gray-800">Help & Support</Text>
          <ChevronRight size={20} className="ml-auto text-gray-400" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity className="mx-4 mb-8" onPress={logoutHandler}>
        <View className="flex-row items-center justify-center bg-gray-100 rounded-xl p-4">
          <LogOut size={20} className="text-red-500" />
          <Text className="ml-2 text-red-500 font-medium">Log Out</Text>
        </View>
      </TouchableOpacity>

      {/* App Version */}
      <View className="items-center pb-8">
        <Text className="text-gray-400 text-sm">Version 2.4.1</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;