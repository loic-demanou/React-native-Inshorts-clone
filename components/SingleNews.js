import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { useContext } from 'react';
import { NewsContext } from '../API/Context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SingleNews = ({ item, index }) => {
    const { darkTheme } = useContext(NewsContext)
    return (
        <View
            style={{ width:windowWidth, 
                height:windowHeight, 
                transform: [{ scaleY: -1 }],
                
            }}
        >
            <Image source={{ uri: item.urlToImage }}
            style={{ height:'45%', resizeMode:'cover', width:windowWidth }} />
            <View
                style={{ 
                    ...styles.description,
                    backgroundColor: darkTheme ? "#282C35" : 'white',
                    
                }}>
                <Text style={{ ...styles.title, color:darkTheme ? 'white' : 'black' }}>{item.title}</Text>
                <Text style={{ ...styles.content, color:darkTheme ? 'white' : 'black' }}>{item.description}</Text>
                <Text style={{ color: darkTheme ? 'white' : 'black' }}>
                    Short by &nbsp;
                    <Text>{item.author ?? ' Unknow'}</Text>
                </Text>
                <ImageBackground
                blurRadius={30}
                source={{ uri: item.urlToImage }}
                style={styles.footer}
                >
                    <TouchableOpacity onPress={() => Linking.openURL(item.url) } >
                        <Text style={{ fontSize:15, color:'white'}}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{ fontSize:17, color:'white', fontWeight:'bold' }}>
                            Voir plus...
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

export default SingleNews

const styles = StyleSheet.create({
    title: {
        fontSize:25,
        fontWeight:'bold',
        paddingBottom:10,
    },
    content: {
        fontSize:18,
        paddingBottom:10,
    },
    footer: {
        height:80,
        position:'absolute',
        bottom:0,
        width:windowWidth,
        paddingHorizontal:20,
        backgroundColor: '#d7be69',
        justifyContent: 'center',
    },
    description: {
        padding:15,
        flex:1
    },
})