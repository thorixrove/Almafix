import AiCoachModal from "@/components/exercises/ai-coach-modal";
import Button from "@/components/ui/button";
import SafeAreaScreen from "@/components/ui/safe-area-screen";
import Skeleton from "@/components/ui/skeleton";
import { getExerciseQueryFn } from "@/lib/api";
import { useAppThemeColor } from "@/theme/app-theme";
import { Feather } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const SingleExercise = () => {
  return (
    <View>
      <Text>SingleExercise</Text>
    </View>
  )
}

export default SingleExercise