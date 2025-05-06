import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LucideIcon } from 'lucide-react-native'
import { colors, dropShadow } from '@/utils/colors'
import { globalStyles } from '@/utils/styles'

export interface Entry {
    Icon: LucideIcon,
    title: string,
    date: string,
    value: number,
    paymentMethod: string,
    taxes: number,
}

const Entry = ({
    entry
}: { entry: Entry }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.iconContainer}>
                    <entry.Icon color='#000' />
                </View>
                <View>
                    <Text style={globalStyles.text}>{entry.title}</Text>
                    <Text style={globalStyles.textSecondary}>{entry.date}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={globalStyles.text}> {entry.value > 0 && '+'}${entry.value} - ${entry.value * entry.taxes}</Text>
                <Text style={globalStyles.textSecondary}>{entry.paymentMethod}</Text>
            </View>
        </View>
    )
}

export default Entry

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    leftContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexDirection: 'row',
    },
    iconContainer: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00000080',
        backgroundColor: colors.primary,
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'flex-end',
    }
})