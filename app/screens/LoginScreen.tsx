

import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";


const LoginScreen = () => {
    const router = useRouter();
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 bg-whiteColor"
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex-1">
                        <Stack.Screen options={{ headerShown: false }} />
                        <View className="flex-1 bg-whiteColor px-6 py-10 justify-center">
                            <View className=" w-[228px] h-[131px] top-[30px] left-[45px] mb-3">
                                <Text className="text-[25px] font-poppinsBold text-center text-BlackColor">
                                    Login here
                                </Text>
                                <Text className="text-lg font-poppinsSemiBold text-center text-blackColor mt-5 text-BlackColor">
                                    Welcome back! You’ve been missed!
                                </Text>
                            </View>

                            <View className="mt-5 space-y-2.5">
                                <TextInput
                                    placeholder="Email"
                                    className={`w-full py-4  border ${isFocused ? "border-PrimaryColor" : "border-gray-300"
                                        } bg-TBBackgroundColor rounded-lg px-4 py-3 text-base font-poppinsRegular`}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    placeholderTextColor="#626262"
                                />


                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry
                                    className={`w-full py-4 mt-6 border ${isPasswordFocused ? "border-PrimaryColor" : "border-gray-300"
                                        } bg-TBBackgroundColor rounded-lg px-4 py-3 mt-4 text-base font-poppinsRegular`}
                                    onFocus={() => setIsPasswordFocused(true)}
                                    onBlur={() => setIsPasswordFocused(false)}
                                    placeholderTextColor="#626262"
                                />
                            </View>

                            <Text className="text-right text-[14px] font-poppinsSemiBold leading-[21px] text-BlackColor mt-5">
                                Forgot your password?
                            </Text>

                            <TouchableOpacity
                                className="bg-PrimaryColor py-4 rounded-lg mt-6"
                                onPress={() => router.push("/screens/DashboardScreen")}
                            >
                                <Text className="text-center text-whiteColor font-poppinsSemiBold text-lg">
                                    Sign in
                                </Text>
                            </TouchableOpacity>

                            <Link href="/screens/SignupScreen" asChild>
                                <TouchableOpacity>
                                    <Text className="text-center text-[14px] font-poppinsSemiBold leading-[21px] text-[#494949] mt-5">
                                        Create new account
                                    </Text>
                                </TouchableOpacity>
                            </Link>


                            <View className="flex-1 bg-whiteColor px-6 py-10 justify-center relative">
                                <View className="absolute w-[400px] h-[450px] bg-[#FC6868] rounded-full -left-[190px] top-[100px] opacity-80 z-0" />
                                <View className="absolute w-[450px] h-[450px] bg-[#F88B8B] rounded-full right-[-190px] top-[20px] opacity-90 z-10" />

                                <View className="mt-6 flex items-center z-10">
                                    <Image
                                        source={require("../../assets/images/cow_img 1.png")}
                                        className="w-[300px] h-[150px]"
                                        resizeMode="contain"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    );
};

export default LoginScreen;
