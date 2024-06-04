import { View, Text, StyleSheet} from "react-native";


const AddMovie = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add Movie</Text>
        </View>

    );
};


export default AddMovie;


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

