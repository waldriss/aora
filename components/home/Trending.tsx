import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}:{posts:any}) => {
  return (
    <FlatList 
    data={[{id:1},{id:2},{id:3}]}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
       <Text className='text-3xl text-white'>
        
        {item.id.toString()}
       </Text>
      )}
      horizontal
    />
  )
}

export default Trending