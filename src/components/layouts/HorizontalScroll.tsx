import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {children}
        </ScrollView>
    )
}

export default HorizontalScroll

const styles = StyleSheet.create({})