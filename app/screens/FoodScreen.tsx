import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const FoodScreen = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-poppinsMedium">Food</Text>

        <TouchableOpacity>
          <Image
            source={require("../../assets/images/Setting.png")}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View className='flex items-center justify-center'>
        <Text >FoodScreen</Text>
      </View>
    </>
  )
}

export default FoodScreen

const styles = StyleSheet.create({})