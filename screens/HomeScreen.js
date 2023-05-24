import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRows from "../components/FeatureRows";

const HomeScreen = ()=> {
    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
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

                <FeatureRows
                    id = "1"
                    title="Featured"
                    description = "Paid placements from our partners"
                    featuredCategory = "featured"
                />

                <FeatureRows
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
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;