import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import MoviesList from '../components/moviesList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';


export default function HomeScreen  () {
  const [trending, setTrending] = useState([1,2,3]);
  const [upcoming, setUpcoming] = useState([1,2,3]);
  const [topRated, setTopRated] = useState([1,2,3,]);
  const [loading, setLoading] = useState(false);
  const navigation= useNavigation();
    return (
    <View className="flex-1 bg-neutral-800">
        {/* Search Barand logo */}
        <SafeAreaView className="mb-2  ">
            <StatusBar style='light'/>
            <View className="flex-row justify-between items-center mx-4">
              <Bars3CenterLeftIcon size="30" strokeWidth={2} color='white'/>
              <Text className="text-white text-3xl font-bold">
                <Text style={styles.text}>M</Text>ovies
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
              </TouchableOpacity>

            </View>
        </SafeAreaView>
        {
          loading? (
            <Loading/>
          ):(
            <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        >
          {/* Trending Movies Carousel */}
          <TrendingMovies data={trending}/>

          {/* Upcoming Movies row */}
          <MoviesList title="Upcoming" data={upcoming}/>

           {/* Top Rated  Movies row */}
           <MoviesList title="Top Rated" data={topRated}/>

        </ScrollView>

          )
        }
        
    </View>
  )
}


