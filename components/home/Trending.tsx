import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { TVideo } from '@/lib/types'
import * as Animatable from 'react-native-animatable'
import { icons } from '@/constants'
import {Video,ResizeMode} from 'expo-av'
const zoomIn={
  0:{
    opacity:1,
    scale:0.9
  },
  1:{
    opacity:1,
    scale:1.05
  }
}
const zoomOut={
  0:{
    opacity:1,
    scale:1.05
  },
  1:{
    opacity:1,
    scale:0.9
  }
}
const TrendingItem=({activeItem,item}:{activeItem:string,item:TVideo})=>{
  const [play,setPlay]=useState(false)
  return (
    <Animatable.View
      animation={activeItem==item.$id?zoomIn:zoomOut}
      className='mr-5'
      duration={300}>
        {play?(
           <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if(status.isLoaded){
              if (status.didJustFinish) {
                setPlay(false);
              }

            }
           
          }}
        />
        ):(
          <TouchableOpacity className='relative justify-center items-center'
          activeOpacity={0.7} onPress={()=>setPlay(true)}
          >
            <ImageBackground source={{uri:item.thumbnail}}
            className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
            resizeMode='cover'
            />
            <Image source={icons.play} className='w-12 h-12 absolute'/>

          </TouchableOpacity>
        )}

    </Animatable.View>
  )
}
const Trending = ({posts}:{posts:TVideo[]}) => {
  const [activeItem,setActiveItem]=useState(posts[1].$id);
  const handlechanges=({viewableItems}:any)=>{
 
    if(viewableItems?.length>0){
      setActiveItem(viewableItems[0].key)

    }

  }
  return (
    <FlatList 
    data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
       <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={handlechanges}
      viewabilityConfig={{itemVisiblePercentThreshold:70}}
      contentOffset={{x:170,y:0}}
    />
  )
}

export default Trending