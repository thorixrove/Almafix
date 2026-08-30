import { useQuery } from "@tanstack/react-query";
import { addWeeks, startOfDay, startOfWeek, subWeeks } from "date-fns";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

// import HomeStats from "@/components/home/home-stats";
// import MyWorkouts from "@/components/home/my-workouts";
// import RecentWorkout from "@/components/home/recent-workout";
// import WorkoutTemplates from "@/components/home/workout-templates";
import SafeAreaScreen from "@/components/ui/safe-area-screen";
import WeekCalendar from "@/components/week-calendar";
// import { useStreak } from "@/contexts/streak-context";
import { getHomeStatsQueryFn, getWorkoutCalendarDatesQueryFn } from "@/lib/api";


const logo = require("../../../../assets/images/app-images/logo.png");
const streakIcon = require("../../../../assets/images/app-images/streak-icon.png");

export default function HomePage() {
  const [ selectDate, setSelectedDate] = useState(startOfDay(new Date()))

  const currentWeekStart = startOfWeek(new Date())
  const calenderStart = subWeeks(currentWeekStart, 2)
  const calenderEnd = addWeeks(currentWeekStart, 1)

  const { data: stats, isPending } = useQuery({
    queryKey: [
      "wokout-calendar",
      calenderStart.toISOString(),
      calenderEnd.toISOString(),
    ],
    queryFn: () => getHomeStatsQueryFn(selectDate),
  })
  const { data} = useQuery({
    queryKey: [
      "workout-calendar",
      calenderStart.toISOString(),
      calenderEnd.toISOString(),
    ],
    queryFn: () => getWorkoutCalendarDatesQueryFn(calenderStart, calenderEnd)
  })
  
  const workoutDates = data?.workoutDates
    ? data.workoutDates.map((dateStr) => new Date(dateStr))
    : undefined

  return (
    <View>
      <Text>HomePage</Text>
    </View>
  )
}