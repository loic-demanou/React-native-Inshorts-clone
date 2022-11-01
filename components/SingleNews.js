import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const SingleNews = ({ item, index }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
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
                    backgroundColor: "#282C35",
                    
                }}>
                <Text style={{ ...styles.title, color:'white' }}>{item.title}</Text>
                <Text style={{ ...styles.content, color:'white' }}>{item.description}</Text>
                <Text style={{ color: 'white' }}>
                    Short by &nbsp;
                    <Text>{item.author ?? ' Unknow'}</Text>
                </Text>
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
    }
})