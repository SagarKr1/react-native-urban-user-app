import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createSplashStyle = (colors:ColorScheme)=>{
    const styles = StyleSheet.create({
        main:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:colors.surface
        },
        logonText:{
            fontSize:35,
            fontWeight:"bold",
            color:colors.text
        }
    });
    return styles;
}