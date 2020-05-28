import React, { Component } from 'react';
import {
  View, Image, StyleSheet, ScrollView, Dimensions
} from 'react-native';


export default class Masonry extends Component {

    constructor(props){
        super(props);

        this.vpWidth = Dimensions.get('window').width;
        this.vpHeight = Dimensions.get('window').height;
        
        this.state = {data: [], containerHeight: 0};

        this.styles = StyleSheet.create({    
            container: {
                width: this.vpWidth
            },
            view: {
                margin: 8,
                width: this.vpWidth *.5 - 15,  
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

    }

    generateData(){

        let data = [];
        let sumHeight = 0;
        for(let i=0; i<50; i++){
            const height = parseInt(Math.max(0.3, Math.random()) * this.vpWidth);
            sumHeight += height; 
            data.push({
              id: `${i}`,
              image_url: `https://i.picsum.photos/id/${parseInt(Math.random() * 200)}/300/400.jpg`,
              height: height
            });
        }

        //const margin = this.styles.view.margin ;
        //sumHeight += margin * data.length;

        let finalHeight = this.state.containerHeight + sumHeight / 2 + this.vpHeight;
        
        this.setState({
            data: [...this.state.data, ...data],
            containerHeight: finalHeight
        });

    }

    componentDidMount(){

        this.generateData();

    }

    render(){

            return (
                <ScrollView 
                    style={this.styles.container}        
                    >
                    <View 
                        style={{
                                height: this.state.containerHeight,
                                flexWrap: 'wrap',
                                width: this.vpWidth
                            }}>
                        {
                            this.state.data.map((item)=>
                            <View 
                                style={{
                                    ...this.styles.view,
                                    height: item.height
                                }} 
                                key={item.id}>
                                <Image                        
                                    style={this.styles.img} 
                                    source={{uri: item.image_url}} 
                                    />
                            </View>
                                )
                    }        
                </View>
            </ScrollView>
        );
    }
}


