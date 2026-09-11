import { WorkoutDraftProvider } from "@/contexts/workout-draft-context";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function WorkoutLayout() {
  return (

    <SafeAreaProvider>
        <WorkoutDraftProvider>
            <Stack
            screenOptions={{
                headerShown: false,
            }}
            >

            <Stack.Screen
            name="create"
            />

            <Stack.Screen
            name="[id]/index"/>

            <Stack.Screen
            name="[id]/active"
            options={{
                animation: "fade",
            }}
            />

            <Stack.Screen
            name="exercises/index"
            />

            <Stack.Screen
            name="exercises/[id]"
            />
            </Stack>
        </WorkoutDraftProvider>
    </SafeAreaProvider>
  )
}