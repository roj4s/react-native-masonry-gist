import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Masonry from './components/Masonry';


export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <Masonry />       
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center'
  }
});
