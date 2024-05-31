import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { icons } from "@/constants";

const FormField = ({
  control,
  title,
  name,
  containerClassName,
  placeholder,
}: {
  control: any;
  title: string;
  name: string;
  containerClassName?: string;
  placeholder: string;
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View className={`space-y-2 ${containerClassName}`}>
          <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
          <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center">
            <TextInput
              className="text-white font-psemibold text-base flex-1 w-full"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#7b7b8b"
              secureTextEntry={name === "password" && !showPassword}
              placeholder={placeholder}
            />
            {name === "password" && <TouchableOpacity
            onPress={()=>setshowPassword((prevShowPassword)=>!prevShowPassword)}
            >
              <Image source={!showPassword?icons.eye:icons.eyeHide} className="w-6 h-6" />
              </TouchableOpacity >}
          </View>

          {error && <Text className="text-red-600">{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default FormField;
