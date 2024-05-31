import Custombutton from "@/components/global/Custombutton";
import { images } from "@/constants";
import { router,Redirect } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from 'expo-status-bar'
import 'react-native-url-polyfill/auto'

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView >
        <View className="w-full justify-center items-center min-h-[85vh]  px-4">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Image
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
            source={images.cards}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              className="w-[136px] h-[15px] absolute -bottom-[10px] -right-8"
              resizeMode="contain"
              source={images.path}
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            {" "}
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aor{" "}
          </Text>
          <Custombutton title="Continue with Email" handlePress={()=>{router.push('/home')}} containerClassName={"w-full mt-7"}/>
        </View>
        
      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light" />

    </SafeAreaView>
  );
}
