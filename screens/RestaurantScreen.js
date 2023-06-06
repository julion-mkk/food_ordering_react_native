import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {urlFor} from "../sanity";
import {ArrowLeftIcon} from "react-native-heroicons/outline";

const RestaurantScreen = ()=> {
    const navigation = useNavigation();
    const {params :{
        id,
        imageUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        lat,
        long
    }} = useRoute();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{uri: urlFor(imageUrl).url()}}
                    className="w-full bg-green-50 h-60 p-4"
                />

                <TouchableOpacity
                    onPress={navigation.goBack}
                    className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                    <ArrowLeftIcon size={25} color='#00CCBB'/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen;