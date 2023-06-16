import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {urlFor} from "../sanity";
import {ArrowLeftIcon, ChevronRightIcon} from "react-native-heroicons/outline";
import {MapPinIcon, QuestionMarkCircleIcon, StarIcon} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

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
    console.log('asdfsssdf');
    console.log(dishes);
    return (
        <>
            <BasketIcon/>
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

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row space-x-1 items-center">
                                <StarIcon color="green" opacity={0.3} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> . {genre}
                                </Text>
                            </View>

                            <View className="flex-row space-x-1 items-center">
                                <MapPinIcon color="gray" opacity={0.3} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-500">Nearby</Text> . {address}
                                </Text>
                            </View>
                        </View>

                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" size={22} opacity={0.5}/>
                        <Text className="pl-2 flex-1 text-md font-bold ">
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color='#00CCBB' size={22}/>
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                    {/*Dishes*/}
                    {dishes?.map(dish => (
                        <DishRow
                            key = {dish._id}
                            id = {dish._id}
                            name = {dish.name}
                            description = {dish.short_description}
                            price = {dish.price}
                            image = {dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen;