import React from 'react';
import {
  View, Image, StyleSheet
} from 'react-native';


export default function Masonry() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.img} 
            source={{uri: `https://i.picsum.photos/id/${parseInt(Math.random() * 1084)}/300/400.jpg`}} />
    </View>
 );
}


const styles = StyleSheet.create({
    container: {
        width: 300, 
        height: 300,
        
    },
    img: {
        flex:1,
        borderRadius: 5
    }
});