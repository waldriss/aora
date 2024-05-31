import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Custombutton = ({title,handlePress,containerClassName,isLoading,textClasssName}:{title:string,handlePress:()=>void,containerClassName?:string,isLoading?:boolean,textClasssName?:string}) => {
   
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`${containerClassName}  bg-secondary rounded-xl min-h-[62px] justify-center items-center ${isLoading?'opacity-50':''}`}>
        <Text className={`text-primary font-psemibold text-lg ${textClasssName}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Custombutton