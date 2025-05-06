import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./logo.png')} alt='' style={styles.image} />
            <Text style={styles.text}> Sweet Slice</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#111818'
    },
    image: { width: 40, height: 40 }
})