import {ScrollView, Text, View} from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = ()=> {
    return(
        <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal : 15,
                        paddingTop: 10
                    }}
        >
            <CategoryCard imageUrl = "https://links.papareact.com/gn7" title="hello" />
            <CategoryCard imageUrl = "https://links.papareact.com/gn7" title="hello" />
            <CategoryCard imageUrl = "https://links.papareact.com/gn7" title="hello" />
            <CategoryCard imageUrl = "https://links.papareact.com/gn7" title="hello" />
            <CategoryCard imageUrl = "https://links.papareact.com/gn7" title="hello" />
        </ScrollView>
    )
}

export default Categories;