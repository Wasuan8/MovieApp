import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'


var { width, height } = Dimensions.get('window');

export default function MoviesList({ title, data, hideSeeAll }) {
    let moviename = 'Ant-Man and the wasp: Qunatum';
    const navigation = useNavigation();
    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center" >
                <Text className="text-white text-xl">{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styles.text} className="text-lg">See All</Text>
                        </TouchableOpacity>

                    )
                }


            </View>
            {/* Movie row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    data.map((item, index) => {

                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.push('Movie', item)}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image
                                        source={require('../assets/images/moviePoster2.png')}
                                        className="rounded-3xl"
                                        style={{
                                            width: width * 0.33,
                                            height: height * 0.22
                                        }}
                                    />
                                    <Text className="text-neutral-300 ml--1">
                                        {
                                            moviename.length > 14 ? moviename.slice(0, 14) + '...' : moviename
                                        }
                                    </Text>
                                </View>


                            </TouchableWithoutFeedback>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}


