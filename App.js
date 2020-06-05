import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Image
} from 'react-native';

//import Masonry from './components/Masonry';
import Masonry from 'react-native-infinite-masonry';


export default function App() {  

  return (
    <SafeAreaView style={styles.container}> 
      <Masonry
        itemsProvider={dataItemProvider}
        renderItem={Item}
        pageSize={10} 
      />       
    </SafeAreaView>
 );
}

const vpWidth = Dimensions.get('window').width;


function Item(dataItem, key){

  return ( 
    <View 
      key={key}
      style={{
          ...styles.card,
          height: dataItem.height
      }}
      >                                       
      <Image                        
        style={styles.img} 
        source={{uri: dataItem.image_url}} 
        />
    </View>
    );
}

function dataItemProvider(pageSize=10){

  return [...Array(pageSize).keys()].map((i) => {
    return {
      image_url: `https://i.picsum.photos/id/${parseInt(Math.random() * 200)}/300/400.jpg`,
      height: parseInt(Math.max(0.3, Math.random()) * vpWidth),
      key:i
      };    
    });

}


const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center'
  },
  card: {
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
