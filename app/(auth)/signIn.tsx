import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { images } from "@/constants";
import { useForm } from "react-hook-form";
import FormField from "@/components/global/FormField";
import Custombutton from "@/components/global/Custombutton";
import { Link, router } from "expo-router";
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const SignIn = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    router.replace('/home')
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <View>
          <FormField containerClassName={'mt-7'} control={control} title={"Email"} name={"email"} placeholder="email"  />
          <FormField containerClassName={'mt-7'} control={control} title={"Password"} name={"password"} placeholder="password"  />
          <Custombutton title="Sign In" handlePress={handleSubmit(onSubmit)} containerClassName="mt-7" />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account ?
            </Text>
            <Link href={"/signUp"} className="text-lg font-psemibold text-secondary">
              Sign Up
            </Link>

          </View>


          </View>

          
        </View>
        

       
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
