import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import MoviesList from '../components/moviesList';
import Loading from '../components/loading';



var { width, height } = Dimensions.get('window');
export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies]= useState([1,2,3,4])
    const [loading, setLoading] = useState(false);


    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 20 }}>
            {/* back button */}
            <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4 my-3">
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1" >
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} >
                    <HeartIcon size="35" color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>
            {/* Person Detail */}
            {
                loading?
                (
                    <Loading/>

                ):
                (
                    <View>
                <View
                    className="flex-row justify-center"
                    style={{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 1,
                    }}
                >
                    <View
                        className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                        <Image
                            source={require('../assets/images/castImage2.png')}
                            // source={{ uri: image342(person?.profile_path) || fallbackPersonImage }}
                            style={{ height: height * 0.43, width: width * 0.74 }}
                        />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        Kenu Reeves
                    </Text>
                    <Text className="text-base text-neutral-300  text-center">
                        London, United Kingdom

                    </Text>

                </View>
                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">

                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold "> Gender</Text>
                        <Text className="text-neutral-300 text-sm ">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold "> Birthday</Text>
                        <Text className="text-neutral-300 text-sm ">1964-09-02</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold ">Known For</Text>
                        <Text className="text-neutral-300 text-sm ">Acting</Text>
                    </View>
                    <View className=" px-2 items-center">
                        <Text className="text-white font-semibold ">Popularity</Text>
                        <Text className="text-neutral-300 text-sm ">100</Text>
                    </View>

                </View>
                <View className="my-6 space-y-2 ">
                    <Text className="text-white text-lg">
                        Biograpy
                    </Text>
                    <Text className="text-neutral-400 tracking-wide">
                    Keanu Charles Reeves, whose first name means "cool breeze over the mountains" in Hawaiian, was born September 2, 1964 in Beirut, Lebanon. He is the son of Patricia Taylor, a showgirl and costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's father was born in Hawaii, of British, Portuguese, Native Hawaiian, and Chinese ancestry, and Keanu's mother is originally from England. After his parents' marriage dissolved, Keanu moved with his mother and younger sister, Kim Reeves, to New York City, then Toronto. 
                    </Text>
                </View>
                {/* MOvies */}
            <MoviesList title={'Movies'}  hideSeeAll={true} data={personMovies}/>

            </View>


                )
            }
            
            
        </ScrollView>
    )
}