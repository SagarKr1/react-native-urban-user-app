import { View, Text,Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createCategoryStyle } from '@/assets/style/Category.style';
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Category = () => {
    const {colors} = useTheme();
    const styles=createCategoryStyle(colors);
    const data:{
        name:string,
        path:ImageSourcePropType,
        totalService:string
    }[]=[
        {
            name:"Cleaning Services",
            path:require("@/assets/images/c1.jpg"),
            totalService:"7 services"
        },
        {
            name:"Washing Services",
            path:require("@/assets/images/w1.jpg"),
            totalService:"7 services"
        },
        {
            name:"Electrician Services",
            path:require("@/assets/images/e1.jpg"),
            totalService:"7 services"
        },
        {
            name:"Plumbing services",
            path:require("@/assets/images/p1.jpg"),
            totalService:"7 services"
        }
    ]

    return (
        <View style={styles.category}>
            <Text style={styles.categoryText}>All Category</Text>
            <View style={styles.categoryCardContainer}>
                {
                    data.map((item,index)=>{
                        return(
                            <LinearGradient
                            key={index}
                            colors={colors.gradients.background}
                            style={styles.categoryCard}
                            >
                                <View>
                                    <Image
                                    source={item.path}
                                    style={styles.categoryImage}
                                    />
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.categoryCardText}>{item.name}</Text>
                                    <Text style={styles.categoryCardTextMuted}>{item.totalService}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.available}>Available</Text>
                                    <Text style={styles.categoryCardTextMuted}>Near You</Text>
                                </View>
                            </LinearGradient>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Category