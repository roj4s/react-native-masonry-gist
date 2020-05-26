import React from 'react';
import {
  View, Image, StyleSheet, ScrollView, Dimensions
} from 'react-native';


export default function Masonry({data}) {
  return (
    <ScrollView style={styles.container}>
        <View 
            style={{
                    height: vpHeight * data.length / 6,
                    flexWrap: 'wrap',
                    width: vpWidth
                }}>
            {
                data.map((item)=>
                <View 
                    style={{
                        ...styles.view,
                        height: parseInt(Math.max(0.3, Math.random()) * vpWidth)
                    }} 
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
    container: {
        width: vpWidth
    },
    view: {
        margin: 8,
        width: vpWidth *.5 - 15,  
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
        backgroundColor: 'white',
        borderRadius: 5,     
    },
    img: {
        borderRadius: 5,
        flex: 1,
    }
});