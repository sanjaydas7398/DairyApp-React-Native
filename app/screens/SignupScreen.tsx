import { Stack } from "expo-router";
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

const SignupScreen = () => {
    const [focusedInput, setFocusedInput] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-whiteColor"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1">
                    <Stack.Screen options={{ headerShown: false }} />
                    <View className="flex-1 justify-center items-center px-6 py-10 relative">
                        <View className="absolute w-[450px] h-[450px] bg-[#FC6868] rounded-full -left-[190px] top-[600px] opacity-80" />
                        <View className="absolute w-[450px] h-[450px] bg-[#F88B8B] rounded-full -right-[180px] top-[500px] opacity-90" />

                        <View className="w-full max-w-md bg-whiteColor p-1 rounded-xl">
                            <Text className="text-[25px] font-poppinsBold text-center text-BlackColor mt-5">
                                Create Account
                            </Text>

                            {["Name", "Email", "Mobile No", "Password", "Confirm Password"].map(
                                (placeholder, index) => (
                                    <TextInput
                                        key={index}
                                        placeholder={placeholder}
                                        secureTextEntry={placeholder.includes("Password")}
                                        className={`w-full px-4 py-4 rounded-lg border ${focusedInput === placeholder
                                                ? "border-PrimaryColor"
                                                : "border-gray-300"
                                            } bg-[#F1F4FF] text-BlackColor outline-none mt-3`}
                                        onFocus={() => setFocusedInput(placeholder)}
                                        onBlur={() => setFocusedInput("")}
                                        placeholderTextColor="#626262"
                                    />
                                )
                            )}

                            <TouchableOpacity className="w-full bg-PrimaryColor py-4 rounded-lg mt-6">
                                <Text className="text-center text-whiteColor font-poppinsSemiBold text-lg">Sign up</Text>
                            </TouchableOpacity>

                            <Text className="text-center text-[13px] font-poppinsSemiBold leading-[21px] text-[#494949] mt-5">
                                Already have an account
                            </Text>
                        </View>

                        <View className="relative mt-10">
                            <Image
                                source={require("../../assets/images/cow_img 1.png")}
                                className="w-[300px] h-[150px] mt-5"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignupScreen;
