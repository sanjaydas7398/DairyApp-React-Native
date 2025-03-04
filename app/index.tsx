

import { Stack, Redirect } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Redirect href="/screens/LoginScreen" />
    </>
  );
}

