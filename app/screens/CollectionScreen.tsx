import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";


export default function CollectionScreen() {
     const router = useRouter();
    const data = [
        {
            id: 1,
            time: "Morning",
            date: "01/07/2024",
            animal: "Cow",
            fat: "3.5",
            snf: "8.5",
            price: "1044.90 Rs.",
            quantity: "27.0 × 38.70 Ltr",
            timeImage: require("../../assets/icons/Sun.png"),
            animalImage: require("../../assets/icons/Cow.png"),
        },
        {
            id: 2,
            time: "Evening",
            date: "01/07/2024",
            animal: "Cow",
            fat: "3.5",
            snf: "8.5",
            price: "1044.90 Rs.",
            quantity: "27.0 × 38.70 Ltr",
            timeImage: require("../../assets/icons/moon.png"),
            animalImage: require("../../assets/icons/Cow.png"),
        },
        {
            id: 3,
            time: "Morning",
            date: "01/07/2024",
            animal: "Buffalo",
            fat: "3.5",
            snf: "8.5",
            price: "1044.90 Rs.",
            quantity: "27.0 × 38.70 Ltr",
            timeImage: require("../../assets/icons/Sun.png"),
            animalImage: require("../../assets/icons/buff.png"),
        },
    ];


    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View className="flex-1 bg-white">
                <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-200">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-lg font-poppinsMedium">Collection</Text>

                    <TouchableOpacity>
                        <Image
                            source={require("../../assets/images/Setting.png")}
                            className="w-5 h-5"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-start p-3 mx-4 mt-3 mb-3">
                    <Image
                        source={require("../../assets/icons/Date.png")}
                        className="w-[20px] h-[20px]"
                        resizeMode="contain"
                    />
                    <Text className="text-BlackColor text-lg ml-5">01 July 2024 - 15 Jul 2024</Text>
                </View>

                <View className="flex-row justify-between items-center px-2 py-4 bg-whiteColor shadow-lg mx-6 rounded-lg"
                style={{
                    shadowColor: "#000", 
                    shadowOffset: { width: 0, height: 4 }, 
                    shadowOpacity: 0.25, 
                    shadowRadius: 4, 
                    elevation: 4, 
                  }}
                >
                    <View className="flex-row items-center space-x-1">
                        <Image
                            source={require("../../assets/icons/Sun.png")}
                            className="w-[32px] h-[24px]"
                            resizeMode="contain"
                        />
                        <Text className="text-sm font-poppinsRegular">Morning</Text>
                    </View>

                    <View className="flex-row items-center space-x-1">
                        <Image
                            source={require("../../assets/icons/moon.png")}
                            className="w-[30px] h-[20px]"
                            resizeMode="contain"
                        />
                        <Text className="text-sm font-poppinsRegular">Evening</Text>
                    </View>

                 
                    <View className="flex-row items-center space-x-1">
                        <Image
                            source={require("../../assets/icons/buff.png")}
                            className="w-[30px] h-[20px]"
                            resizeMode="contain"
                        />
                        <Text className="text-sm font-poppinsRegular ml-1">Buffalo</Text>
                    </View>

                    <View className="flex-row items-center space-x-1">
                        <Image
                            source={require("../../assets/icons/Cow.png")}
                            className="w-[30px] h-[20px]"
                            resizeMode="contain"
                        />
                        <Text className="text-sm font-poppinsRegular ml-1">Cow</Text>
                    </View>
                </View>


                <ScrollView className="mt-5 ">
                    {data.map((item) => (
                        <View
                            key={item.id}
                            className="flex-row items-center justify-between mx-6 py-0 border-b border-gray-300  mt-5"
                        >
                            <View className="flex-row items-center space-x-2 px-2">
                                <View className="flex gap-2 mr-4">
                                    <Image
                                        source={item.timeImage}
                                        className="w-[32px] h-[24px]"
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={item.animalImage}
                                        className="w-[32px] h-[24px]"
                                        resizeMode="contain"
                                    />
                                </View>
                                <View className="flex gap-3">
                                    <Text className="text-sm font-poppinsLight">{item.date}</Text>
                                    <Text className="text-sm text-[#626262]">
                                        FAT: {item.fat} | SNF: {item.snf}
                                    </Text>
                                </View>
                            </View>

                            <View className="flex gap-3">
                                <Text className="text-sm font-poppinsLight">{item.price}</Text>
                                <Text className="text-sm text-PrimaryColor">{item.quantity}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <Text className="text-center text-sm text-BlackColor py-4">
                    App Version 1.0.2
                </Text>
            </View>
        </>
    );
}
