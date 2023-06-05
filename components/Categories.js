import {ScrollView, Text, View} from "react-native";
import CategoryCard from "./CategoryCard";
import {useEffect, useState} from "react";
import client from "../sanity";

const Categories = ()=> {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        client.fetch(`*[_type == "category"]`).then(data => {
            setCategories(data);
            console.log('asdfass');
            console.log('asdfss' , categories);
        })
    }, []);

    return(
        <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal : 15,
                        paddingTop: 10
                    }}
        >
            {categories.map(category => (
                <CategoryCard key={category._id} imageUrl ={category.image} title={category.name} />
            ))}
        </ScrollView>
    )
}

export default Categories;