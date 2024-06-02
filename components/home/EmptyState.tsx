import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants';
import Custombutton from '../global/Custombutton';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }:{title:string,subtitle:string}) => {
    return (
      <View className="flex justify-center items-center px-4">
        <Image
          source={images.empty}
          resizeMode="contain"
          className="w-[270px] h-[216px]"
        />
  
        <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
        <Text className="text-xl text-center font-psemibold text-white mt-2">
          {subtitle}
        </Text>
  
        <Custombutton
          title="Back to Explore"
          handlePress={() => router.push("/home")}
          containerClassName="w-full my-5"
        />
      </View>
    );
  };
  
export default EmptyState