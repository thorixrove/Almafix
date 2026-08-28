import { Feather } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { useColorScheme } from "nativewind";
import {
  useEffect,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import { Alert, Pressable, ScrollView, Switch, Text, View } from "react-native";

import SafeAreaScreen from "@/components/ui/safe-area-screen";
import { AuthSession } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { useAppThemeColor } from "@/theme/app-theme";


export default function ProfilePage() {
  const { data } = authClient.useSession()

  const signOut = async () => {
    const { error } = await authClient.signOut();
    //router.replace("/sign-in");
    if (error) {
      Alert.alert("Could not sign out", error.message);
    }
  };

  const confirmDelete = () =>
    Alert.alert(
      "Delete your account?",
      "Your profile, workouts, and history will be permanently deleted. This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete Account",
          style: "destructive",
          onPress: () =>
            Alert.alert(
              "Connect the API",
              "The delete-account endpoint must be connected before release.",
            ),
        },
      ],
    );


  return (
    <SafeAreaScreen>
      <ScrollView>
        <Section title="Account">
          <Row icon="log-out" label="Sign Out" onPress={signOut} />
          <Row
            danger
            icon="trash-2"
            label="Delete Account"
            onPress={confirmDelete}
          />
        </Section>
      </ScrollView>
    </SafeAreaScreen>
  )
}

function Section({ children, title }: { children: ReactNode; title: string }) {
  return (
    <View className="mt-6">
      <Text className="mb-2 ml-1 font-inter-semibold text-[12px] uppercase tracking-wide text-muted-foreground">
        {title}
      </Text>
      <View className="overflow-hidden rounded-xl border border-border bg-card">
        {children}
      </View>
    </View>
  );
}


type RowProps = {
  danger?: boolean;
  icon: ComponentProps<typeof Feather>["name"];
  label: string;
  onPress?: () => void;
  right?: ReactNode;
  value?: string;
};


function Row({ danger, icon, label, onPress, right, value }: RowProps) {
  const muted = useAppThemeColor("mutedForeground");
  const color = danger ? "#EF4444" : muted;

  return (
    <Pressable
      className="min-h-16 flex-row items-center border-b border-border px-4 active:bg-muted"
      disabled={!onPress}
      onPress={onPress}
    >
      <Feather color={color} name={icon} size={19} />
      <Text
        className={`ml-3 flex-1 font-inter-medium text-[14px] ${danger ? "text-destructive" : "text-foreground"}`}
      >
        {label}
      </Text>
      {value && (
        <Text className="font-inter text-[12px] text-muted-foreground">
          {value}
        </Text>
      )}
      {right}
      {onPress && !right && (
        <Feather color={muted} name="chevron-right" size={19} />
      )}
    </Pressable>
  );
}

