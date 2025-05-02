import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/utils/colors'
import { Wallet } from 'lucide-react-native'
import { dropShadow } from '@/utils/constants'

interface ScrollCardProps {
    title: string,
    ammount: number,
}

const ScrollCard = ({
    title,
    ammount,
}: ScrollCardProps) => {
    return (
        <Pressable style={styles.container}>
            <Wallet width={30} height={30} strokeWidth={2} color='#000' />
            <Text style={styles.title} >{title}</Text>

            <Text style={styles.ammount}>${ammount}</Text>
        </Pressable>
    )
}

export default ScrollCard

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginLeft: 10,
        width: 150,
        height: 170,
        borderRadius: 16,
        padding: 16,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: '#00000080',
        ...dropShadow,
    },
    title: {
        fontSize: 16,
        fontWeight: '400'
    },
    ammount: {
        fontSize: 18,
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end'
    }
})