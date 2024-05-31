import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { images } from "@/constants";
import { useForm } from "react-hook-form";
import FormField from "@/components/global/FormField";
import Custombutton from "@/components/global/Custombutton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";
const formSchema = z.object({
  username: z.string().min(8, "Username must be at least 8 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { email, password, username } = data;
    setIsSubmitting(true);
    try {
      /*const result = await createUser({ email, password, username });
      console.log(result);*/
      router.replace("home");
    } catch (error: any) {
      Alert.alert("Error", error?.message);
    } finally {
      setIsSubmitting(false);
    }
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
            Sign up to Aora
          </Text>
          <View>
            <FormField
              containerClassName={"mt-10"}
              control={control}
              title={"Username"}
              name={"username"}
              placeholder="Username"
            />
            <FormField
              containerClassName={"mt-7"}
              control={control}
              title={"Email"}
              name={"email"}
              placeholder="Email"
            />
            <FormField
              containerClassName={"mt-7"}
              control={control}
              title={"Password"}
              name={"password"}
              placeholder="password"
            />
            <Custombutton
              title="Sign Up"
              handlePress={handleSubmit(onSubmit)}
              containerClassName="mt-7"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                have an account already ?
              </Text>
              <Link
                href={"/signIn"}
                className="text-lg font-psemibold text-secondary"
              >
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
