import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import SearchInput from '@/components/global/SearchInput'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SafeAreaView } from 'react-native-safe-area-context';
import Trending from '@/components/home/Trending';
import EmptyState from '@/components/home/EmptyState';
import { usegetAllPosts } from '@/lib/react-query/queries';
import { TVideo } from '@/lib/types';
import VideoCard from '@/components/home/VideoCard';
const formSchema = z.object({
  query: z.string().optional(),
});
const Home = () => {

const {data:posts,isLoading}=usegetAllPosts()







  const { control, handleSubmit } = useForm({
    defaultValues: { query: "",},resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    
  };

  const [refreshing,setRefreshing]=useState(false);
  const onRefresh=async()=>{
    setRefreshing(true);
    //api call
    setRefreshing(false);


  }


  return (
    <SafeAreaView className="bg-primary h-full ">
    <FlatList
      data={posts as TVideo[]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (<VideoCard video={item}/>
      )}
      ListHeaderComponent={() => (
        <View className="flex my-6 px-4 space-y-6">
          <View className="flex justify-between items-start flex-row mb-6">
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome Back
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                JSMastery
              </Text>
            </View>

            <View className="mt-1.5">
              <Image
                source={images.logoSmall}
                className="w-9 h-10"
                resizeMode="contain"
              />
            </View>
          </View>

          <SearchInput containerClassName={''} control={control} title={"query"} name={"query"} placeholder='Search for a video topic'  />


          <View className="w-full flex-1 pt-3 pb-8">
            <Text className="text-lg font-pregular text-gray-100 mb-3">
              Latest Videos
            </Text>

            <Trending posts={[{id:1},{id:2},{id:3}]??[]}/>

           
          </View>
        </View>
      )}
      ListEmptyComponent={()=>
        <EmptyState
        title="No Videos Found"
        subtitle="No videos created yet"
      />
      }
     
    />
  </SafeAreaView>)
}

export default Home