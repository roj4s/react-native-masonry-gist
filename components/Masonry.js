import React, { Component } from 'react';
import {
  View, Image, StyleSheet, ScrollView, Dimensions
} from 'react-native';


export default class Masonry extends Component {

    constructor(props){
        super(props);

        this.vpWidth = Dimensions.get('window').width;
        this.vpHeight = Dimensions.get('window').height;

        this.pageSize = 50;

        this.handleScroll = this.handleScroll.bind(this);
        
        this.state = {
            dataA: [],
            dataB: [], 
            containerHeight: 0,
            lastKey: 0
        };

        this.styles = StyleSheet.create({    
            container: {
                width: this.vpWidth,
                flexDirection: 'row'
            },
            card: {
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
            viewContainer: {
                width: this.vpWidth * 0.5,
            },
            img: {
                borderRadius: 5,
                flex: 1,
            }
        });

    }

    generateData(){

        let dataA = [];
        let dataB = [];
        let sumHeightA = 0;
        let sumHeightB = 0;

        for(let i=0; i < this.pageSize; i++){
        
            const height = parseInt(Math.max(0.3, Math.random()) * this.vpWidth);
            const info = {
                id: `${this.state.lastKey + i}`,
                image_url: `https://i.picsum.photos/id/${parseInt(Math.random() * 200)}/300/400.jpg`,
                height: height
            };

            if(i < this.pageSize / 2){
                console.log('Pushing to A');
                sumHeightA += height; 
                dataA.push(info);
            }
            else{
                console.log('Pushing to B');
                sumHeightB += height;
                dataB.push(info);
            }

        }
        console.log(dataA);

        let finalHeight = this.state.containerHeight + Math.max(sumHeightA, sumHeightB);
               
        this.setState({
            dataA: [...this.state.dataA, ...dataA],
            dataB: [...this.state.dataB, ...dataB],
            containerHeight: finalHeight,
            lastKey: this.state.lastKey + this.pageSize
        });

        

    }

    handleScroll(e){

            const y = e.nativeEvent.contentOffset.y;
            const lastScreenOffset = this.state.containerHeight - this.vpHeight * 3;
            if(y >= lastScreenOffset){
                this.generateData();
            }
        
    }

    componentDidMount(){

        this.generateData();

    }

    render(){

        console.log(this.state);

            const m = (
                <ScrollView 
                    onScroll={this.handleScroll}        
                    >
                     <View 
                        style={{
                                ...this.styles.container,
                                height: this.state.containerHeight
                            }}
                        >
                            <View 
                                style={{
                                        ...this.styles.viewContainer,
                                        height: this.state.containerHeight,
                                    }}>
                                {
                                    this.state.dataA.map((item)=>
                                    <View 
                                        style={{
                                            ...this.styles.card,
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

                            <View 
                                style={{
                                        ...this.styles.viewContainer,
                                        height: this.state.containerHeight,
                                    }}>
                                {
                                    this.state.dataB.map((item)=>
                                    <View 
                                        style={{
                                            ...this.styles.card,
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

                    </View>
            </ScrollView>
        );
        console.log(m);
        return m;
    }
}


