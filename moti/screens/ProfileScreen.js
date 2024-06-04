import { BlurView } from "expo-blur";
import { View, Text, StyleSheet} from "react-native";


const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Profile screen</Text>

        </View>

    );
};


export default ProfileScreen;


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





