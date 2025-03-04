import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function profile() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-whiteColor">
        <View className="flex-row items-center justify-between px-4 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-poppinsMedium">Profile</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/Setting.png")}
              className="w-[20px] h-[20px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-4">
          <View className="bg-[#F88B8B] p-6 rounded-lg items-center mt-4 mx-3">
            <View className="w-16 h-16 rounded-full items-center justify-center">
              <Image
                source={require("../../assets/images/Avtar.png")}
                className="w-[50px] h-[50px]"
                resizeMode="contain"
              />
            </View>
            <Text className="text-lg font-poppinsSemiBold text-BlackColor mt-2">John Doe</Text>
            <Text className="text-sm font-poppinsMedium mt-2">97432244223</Text>
          </View>

          <View className="mt-6 space-y-3 mx-3 gap-3">
            {[
              "Language",
              "Change Password",
              "Change Mobile",
              "Logout",
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white p-4 rounded-lg flex-row items-center justify-between"
                style={{
                  shadowColor: "#000", 
                  shadowOffset: { width: 0, height: 4 }, 
                  shadowOpacity: 0.25, 
                  shadowRadius: 8, 
                  elevation: 5, 
                }}
              >
                <Text className="text-BlackColor font-poppinsSemiBold text-base">{item}</Text>
                <Ionicons name="arrow-forward" size={20} color="gray" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Footer */}
        <Text className="text-center text-gray-400 my-4">App Version 1.0.2</Text>
      </View>
    </>
  );
}
