import {ScrollView, Text, View} from "react-native";
import {ArrowRightIcon, ChevronRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRows = ({id, title, description, featuredCategory}) => {
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
                <RestaurantCard
                    id = {123}
                    imageUrl = "https://links.papareact.com/gn7"
                    title = "Sushi shop"
                    rating = {4.5}
                    genre = "Japenese"
                    address = "123 Main St."
                    short_description = "This is test description"
                    dishes = {[]}
                    lat = {20}
                    long = {0}
                />

                <RestaurantCard
                    id = {123}
                    imageUrl = "https://links.papareact.com/gn7"
                    title = "Sushi shop"
                    rating = {4.5}
                    genre = "Japenese"
                    address = "123 Main St."
                    short_description = "This is test description"
                    dishes = {[]}
                    lat = {20}
                    long = {0}
                />

                <RestaurantCard
                    id = {123}
                    imageUrl = "https://links.papareact.com/gn7"
                    title = "Sushi shop"
                    rating = {4.5}
                    genre = "Japenese"
                    address = "123 Main St."
                    short_description = "This is test description"
                    dishes = {[]}
                    lat = {20}
                    long = {0}
                />

                <RestaurantCard
                    id = {123}
                    imageUrl = "https://links.papareact.com/gn7"
                    title = "Sushi shop"
                    rating = {4.5}
                    genre = "Japenese"
                    address = "123 Main St."
                    short_description = "This is test description"
                    dishes = {[]}
                    lat = {20}
                    long = {0}
                />

            </ScrollView>
        </View>
    )
}

export default FeatureRows;