import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import MoviesList from '../components/moviesList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';


export default function HomeScreen() {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();

  }, [])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log('got trending Movies:',data);
    if (data && data.results) setTrending(data.results);
    setLoading(false);

  }
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    // console.log('got upcoming Movies:',data);
    if (data && data.results) setUpcoming(data.results);
    setLoading(false);

  }
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log('got TopRated Movies:',data);
    if (data && data.results) setTopRated(data.results);
    setLoading(false);

  }
  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search Barand logo */}
      <SafeAreaView className="mb-2  ">
        <StatusBar style='light' />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color='white' />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>

        </View>
      </SafeAreaView>
      {
        loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {/* Trending Movies Carousel */}
            {trending.length > 0 && <TrendingMovies data={trending} />}

            {/* Upcoming Movies row */}
            {upcoming.length > 0 && <MoviesList title="Upcoming" data={upcoming} />}

            {/* Top Rated  Movies row */}
            {topRated.length > 0 && <MoviesList title="Top Rated" data={topRated} />}

          </ScrollView>

        )
      }

    </View>
  )
}


