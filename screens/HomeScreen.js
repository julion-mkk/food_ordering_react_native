import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useLayoutEffect, useState} from "react";
import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRows from "../components/FeatureRows";
import client from "../sanity";
import 'react-native-url-polyfill/auto';
import category from "../food-ordering/schemas/category";

const HomeScreen = ()=> {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);


    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(()=> {
        client.fetch(`*[_type == "featured"] {
          ...,
          restaurants[]-> {
            ...,
            dish[]->
          }
        }`).then((data) => {
            setFeaturedCategories(data);
            console.log(featuredCategories);
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 pt-4">
            {/*header*/}
            <View className="flex-row items-center px-4 space-x-2 mb-4">
                <Image
                    source={{uri: "https://links.papareact.com/wru"}}
                    className="w-7 h-7 bg-gray-700 rounded-full p-4"
                />

                <View className="flex-1 flex-column">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB"/>
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB"/>
            </View>

            {/*Search*/}
            <View className="flex-row items-center pb-2 space-x-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput
                        placeholder="Restaurants and shops"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsHorizontalIcon color="#00CCBB" />
            </View>

            {/*body*/}
            <ScrollView>
                <Categories />

                {featuredCategories?.map(category=> (
                    <FeatureRows
                        key = {category._id}
                        id = {category._id}
                        title={category.name}
                        description = {category.short_description}
                    />
                ))}

                {/*<FeatureRows
                    id = "2"
                    title="Tasty Discounts"
                    description = "Everyone's been enjoying these juicy discounts"
                    featuredCategory = "discounts"
                />

                <FeatureRows
                    id= "3"
                    title="Offers near you!"
                    description = "Why not support your local restaurants?"
                    featuredCategory = "offers"
                />*/}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;