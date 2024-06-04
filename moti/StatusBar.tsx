import React, {useState} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type {StatusBarStyle} from 'react-native';




const STYLES = ['default', 'dark-content', 'light-content'] as const;


const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );


  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };


  return (
    
    <SafeAreaView>

    <StatusBar animated={true} backgroundColor="#61dafb" barStyle={statusBarStyle} hidden={hidden}/>
    
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


});

export default App;