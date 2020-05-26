import React from 'react';
import {
  View, Image, StyleSheet, ScrollView
} from 'react-native';


export default function Masonry({data}) {
  return (
    <ScrollView style={styles.container}>
        <View>
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

const styles = StyleSheet.create({    
    view: {
        margin: 8,
        alignContent: 'center',
        alignItems: 'center'        
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 5
    }
});