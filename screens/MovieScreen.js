import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MoviesList from '../components/moviesList';
import Loading from '../components/loading';

var { width, height } = Dimensions.get('window');
export default function MovieScreen() {
    let moviename = 'Ant-Man and the wasp: Qunatum';
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false)
    const navigation = useNavigation();
    const [cast, setCast] = useState([1, 2, 3, 4, 5,]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5,]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

    }, [item])
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900 "

        >
            {/* back button and movie poster */}
            <View className="w-full">

                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1" >
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} >
                        <HeartIcon size="35" color={isFavourite ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                {
                    loading ? (
                        <Loading />
                    ) :
                        (
                            <View >
                                <Image
                                    source={require('../assets/images/moviePoster2.png')}
                                    style={{ width, height: height * 0.55 }}
                                />
                                <LinearGradient
                                    colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                                    style={{ width, height: height * 0.40 }}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    className="absolute bottom-0"
                                />

                            </View>

                        )
                }



            </View>
            {/* Movie Detais */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-widest">
                    {moviename}
                </Text>
                {/* Status, release, runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released  •  2023  •  170 min
                </Text>
                {/* Genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action •

                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill •

                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy

                    </Text>
                </View>
                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    During her days of entrapment in the Quantum Realm, Janet van Dyne encounters an exiled traveler named Kang. In the present day, after the Avengers' battle against Thanos, Scott Lang has become a successful memoirist and has been living happily with his girlfriend, Hope van Dyne.
                </Text>

            </View>
            {/* Cast */}
            <Cast navigation={navigation} cast={cast} />
            {/* Similar movies */}
            <MoviesList title="Similar Movies" hideSeeAll={true} data={similarMovies} />


        </ScrollView>
    )
}