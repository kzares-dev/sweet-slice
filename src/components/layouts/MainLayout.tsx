import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/utils/colors'

const MainLayout = ({ children, bg = colors.bgSecondary, spacing = 16, bottomComponent }: { children: React.ReactNode, spacing?: number, bottomComponent?: React.ReactNode, bg?: string }) => {
    return (
        <View style={[styes.container, { backgroundColor: bg,}]}>
            <View style={styes.container}>
                <ScrollView style={{
                    height: '100%',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 40,
                    gap: 16,
                    padding: spacing,
                    backgroundColor: bg,
                }}>
                    <View style={{ paddingBottom: 40 }}>
                        {children}
                    </View>
                </ScrollView>
            </View>
            {bottomComponent && bottomComponent}
        </View>


    )
}

const styes = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1,
    }
})

export default MainLayout