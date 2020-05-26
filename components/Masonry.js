import React from 'react';
import {
  View, Image, StyleSheet, ScrollView, Dimensions
} from 'react-native';


export default function Masonry({data}) {
  return (
    <ScrollView style={styles.container}>
        <View 
            style={{
                    height: vpHeight * data.length / 3,
                    flexWrap: 'wrap'
                }}>
            {
                data.map((item)=>
                <View 
                    style={styles.view} 
                    key={item.id}>
                    <Image                        
                        style={styles.img} 
                        source={{uri: item.image_url}} 
                        />
                </View>
                    )
           }        
        </View>
    </ScrollView>
 );
}

const vpWidth = Dimensions.get('window').width;
const vpHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({    
    view: {
        margin: 8             
    },
    img: {
        width: vpWidth / 2 - 15,
        height: vpWidth,
        borderRadius: 5
    }
});