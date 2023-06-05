import {ScrollView, Text, View} from "react-native";
import {ArrowRightIcon, ChevronRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import client from "../sanity";

const FeatureRows = ({id, title, description}) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=> {
        console.log('asdf');
        console.log(id);
        client.fetch(`*[_type == "featured" && _id == $id] {
          ...,
          restaurants[]-> {
            ...,
            dishes[]->,
            type -> {
              name
            }
          }
          }[0]`, {id: id}).then(data=> {
            setRestaurants(data?.restaurants);
            console.log('sssss');
        })
    }, []);

    return (
        <View className = "px-3 pt-4">
            <View className="flex-1 flex-row justify-between">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" size={20}/>
            </View>
            <Text className="text-gray-500 text-sm">{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className= "pt-4"
            >
                {restaurants?.map(restaurant => (
                    <RestaurantCard
                        key = {restaurant._id}
                        id = {restaurant._id}
                        imageUrl ={restaurant.image}
                        title ={restaurant.name}
                        rating ={restaurant.rating}
                        genre ={restaurant.type?.name}
                        address = {restaurant.address}
                        short_description ={restaurant.short_description}
                        dishes = {restaurant.dishes}
                        lat ={restaurant.lat}
                        long = {restaurant.long}
                    />
                ))}

            </ScrollView>
        </View>
    )
}

export default FeatureRows;