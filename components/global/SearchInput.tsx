import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { icons } from "@/constants";

const SearchInput = ({
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
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
       
          <View className={`${containerClassName} border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center`}>
            <TextInput
              className="text-white font-psemibold text-base flex-1 w-full "
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#7b7b8b"
              placeholder={placeholder}
            />
             <TouchableOpacity onPress={() => {}}>
            <Image
              source={icons.search}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
          </View>

         
  
      )}
    />
  );
};

export default SearchInput;
