import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import MainLayout from '@/components/layouts/MainLayout'
import Logo from '@/atoms/Logo'
import HorizontalScroll from '@/components/layouts/HorizontalScroll'
import ScrollCard from '@/atoms/ScrollCard'

const Overview = () => {
    const pageData = useMemo(() => {
        return {
            overview: [
                {
                    title: 'Total Salary',
                    ammount: 1289.38
                },
                {
                    title: 'Total Expense',
                    ammount: 283.38
                },
                {
                    title: 'Monthly Income',
                    ammount: 4000.38
                },

            ]
        }
    }, [])
    return (
        <MainLayout>
            <HorizontalScroll>
                {pageData.overview.map((item, key) => {
                    return <ScrollCard
                        key={key}
                        title={item.title}
                        ammount={item.ammount}
                    />
                })}
            </HorizontalScroll>
        </MainLayout>
    )
}

export default Overview

const styles = StyleSheet.create({})