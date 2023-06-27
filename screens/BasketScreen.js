import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import {removeFromBasket, selectBasketItems} from "../features/basketSlice";
import {useEffect, useMemo, useState} from "react";
import {XCircleIcon} from "react-native-heroicons/mini";
import {urlFor} from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    console.log('asssas');
    console.log(restaurant.title);
    useEffect(()=> {
        const groupItems = items.reduce((results, item)=> {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        },{})
        setGroupItemsInBasket(groupItems);
    }, [items]);

    console.log(groupItemsInBasket);
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="bg-gray-100 flex-1">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-500">{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full absolute top-2 right-2 bg-gray-100"
                    >
                        <XCircleIcon color="#00CCBB" height={50} width={50}/>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-4">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

                    <Text className="flex-1">Deliver in 50-55 mins</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center bg-white space-x-5 py-2 px-5">
                            <Text>{items.length} x</Text>
                            <Image
                                source={{uri: urlFor(items[0]?.image).url()}}
                                className="h-12 w-12 rounded-full"/>
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">
                                <Currency quantity={items[0]?.price} currency="MMK"/>
                            </Text>
                            <TouchableOpacity>
                                <Text className="text-[#00CCBB] text-xs" onPress={()=> dispatch(removeFromBasket({id: key}))}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen;