import{
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  Button,
  TextInput,
  StatusBar,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Settings,

} from 'react-native';


import { BlurView } from 'expo-blur';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import AddMovie from './screens/AddMovie';
import { Ionicons } from '@expo/vector-icons';



import Entypo from '@expo/vector-icons/Entypo';

import ChatScreen from './screens/ChatScreen';



/* tabBarBadge:3 - задает круг нужен для уведомлений */
/* headerShown: false, - убирает заголовок название вкладки */


const Tab = createBottomTabNavigator();




export default function App() {

  return (
      <View style={styles.container}>
       
        
        <NavigationContainer >
          <Tab.Navigator screenOptions={{ backgroundColor: "" ,headerShown: false, tabBarStyle:{position:"absolute"}, tabBarShowLabel: false, tabBarBackground: () => (<BlurView tint="light" intensity={20} style={StyleSheet.absoluteFill} />) }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color }) =><Ionicons name="home" size={20} color={color}/>,}}/>
            <Tab.Screen name="addmovie" component={AddMovie} options={{tabBarIcon: ({ color }) =><Ionicons size={20}><Entypo name="circle-with-plus" size={20} color={color} /></Ionicons>}}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{tabBarIcon: ({ color }) =><Ionicons size={20}><Entypo name="chat" size={24} color={color} /></Ionicons>, tabBarBadge:3 }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({ color }) =><Ionicons name="person" color={color} size={20}/>}}/>
          </Tab.Navigator>
        </NavigationContainer>

        








      </View>
    
  );
}

const styles = StyleSheet.create({
  navigation:{
    backgroundColor: '#000',
  },
  container:{
    flex: 1,
    backgroundColor: '#000',
    
  },

});
