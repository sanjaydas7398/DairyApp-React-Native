import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import {Ionicons } from "@expo/vector-icons";


type DashboardRoute = "/screens/CollectionScreen" | "/screens/FoodScreen" | "/screens/LoanScreen" | "/screens/InvoiceScreen" | "/screens/NoticeBoardScreen" | "/screens/MyHerdsScreen" | "/screens/FarmersScreen";
interface DashboardItem {
  name: string;
  icon: any;
  route?: DashboardRoute;
}

const dashboardItems :DashboardItem[]= [
  { name: "Collection", icon: require("../../assets/icons/icons-1.png"), route:"/screens/CollectionScreen" },
  { name: "Food", icon: require("../../assets/icons/icons-2.png"), route: "/screens/FoodScreen" },
  { name: "Loan", icon: require("../../assets/icons/icons-3.png"), route: "/screens/LoanScreen" },
  { name: "Invoice", icon: require("../../assets/icons/icons-4.png"),route: "/screens/InvoiceScreen"  },
  { name: "Notice Board", icon: require("../../assets/icons/icons-5.png"),route: "/screens/NoticeBoardScreen" },
  { name: "My Herds", icon: require("../../assets/icons/icons-6.png"),route: "/screens/MyHerdsScreen" },
  { name: "Farmers", icon: require("../../assets/icons/icons-7.png"),route: "/screens/FarmersScreen" },
  // { name: "Rate Chart", icon: require("../../assets/icons/icons-8.png") },
  // { name: "Reports", icon: require("../../assets/icons/reports.png.png") },
  // { name: "Annual Bonus", icon: require("../../assets/icons/Annual.png") },
  // { name: "Milk Collection", icon: require("../../assets/icons/milk.png.png") },
];




const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-whiteColor">
        <View className="flex-row items-center justify-between px-4 py-5">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          
          <Text className="text-lg font-poppinsMedium">eDairy</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/Setting.png")}
              className="w-[20px] h-[20px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

       
        <View className="flex-row items-center justify-between px-4 h-[80px] w-full  bg-white"
        style={{
          shadowColor: "#00000040", 
          shadowOffset: { width: 0, height: 4 }, 
          shadowOpacity: 0.25, 
          shadowRadius: 8, 
          elevation: 5, 
        }}
        >
          <View>
            <Text className="text-lg font-poppinsMedium text-BlackColor">
              Jai Shriram Milk Collection Center
            </Text>
            <Text className="text-xs font-poppinsMedium text-BlackColor">Limb, Satara</Text>
          </View>

          <TouchableOpacity className="flex items-center justify-center" onPress={() => router.push("/screens/profile")}>
            <Image
              source={require("../../assets/images/Avtar.png")}
              className="w-[40px] h-[40px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <ScrollView className="mt-6 px-4">
          <View className="flex flex-wrap flex-row justify-between">
            {dashboardItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-[30%] bg-whiteColor shadow-md rounded-lg p-3 mb-4 items-center"
                style={{
                  shadowColor: "#000", 
                  shadowOffset: { width: 0, height: 4 }, 
                  shadowOpacity: 0.25, 
                  shadowRadius: 4, 
                  elevation: 4, 
                }}
                onPress={() => {
                  if (item.route) {
                    router.push(item.route as DashboardRoute);
                  } else {
                    console.warn("No route defined for this item");
                  }
                }}
              >
                <View className="flex items-center justify-center">
                  <Image source={item.icon} className="w-20 h-20" />
                </View>
                <Text className="mt-2 text-center text-BlackColor font-medium">
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <Text className="text-center text-BlackColor text-sm mt-4 mb-4">
          App Version 1.0.2
        </Text>
      </View>
    </>
  );
};

export default Dashboard;
