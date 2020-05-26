import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Masonry from './components/Masonry';


export default function App() {

  let data = [];

  for(let i=0; i<20; i++){
      data.push({
          id: `${i}`,
          image_url: `https://i.picsum.photos/id/${parseInt(Math.random() * 1084)}/300/400.jpg`
        });
  }

  return (
    <SafeAreaView style={styles.container}> 
      <Masonry
        data={data}
       />       
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center'
  }
});
