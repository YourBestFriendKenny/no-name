import { View, Text, StyleSheet, Button, Image} from "react-native";

import FeedScreen from "./FeedScreen";




const HomeScreen = () => {
    return(
        <View style={styles.container}>          
            
            <FeedScreen />

            
        

            



        </View>

    );
};


export default HomeScreen;


const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
        fontSize:24,
        fontWeight: 'bolt',
        marginBottom: 16,
    },
});

