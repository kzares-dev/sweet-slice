import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import MainLayout from '@/components/layouts/MainLayout'
import { House } from 'lucide-react-native'
import Entry from '@/components/atoms/Entry'
import { globalStyles } from '@/utils/styles'
import { colors } from '@/utils/colors'


const Entries = () => {
  const latestEnties = useMemo(() => (
    [
      {
        Icon: House,
        title: 'Rent',
        date: '20 feb 2024',
        value: 300,
        taxes: .2,
        paymentMethod: 'Cash'
      },
      {
        Icon: House,
        title: 'Rent',
        date: '20 feb 2024',
        value: 300,
        taxes: .2,
        paymentMethod: 'Cash'
      },
      {
        Icon: House,
        title: 'Rent',
        date: '20 feb 2024',
        value: 300,
        taxes: .2,
        paymentMethod: 'Cash'
      }
    ]
  ), []);
  const filters = useMemo(() => ['Incomes', 'Entries', 'Expenses'], [])
  const [activeFilter, setActiveFilter] = useState('Entries')

  const handleFilterPress = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, [activeFilter])

  return (
    <MainLayout>
      <View style={styles.header}>
        {filters.map((item, key) => (
          <TouchableOpacity onPress={() => handleFilterPress(item)} style={item === activeFilter ? styles.filterActive : {}}>
            <Text style={item === activeFilter ? styles.filterActiveText : globalStyles.title} key={key}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.container}>
        {latestEnties.map((entry, key) => (
          <Entry entry={entry} key={key} />
        ))}
      </View>
    </MainLayout>
  )
}

export default Entries

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingTop: 16,
    marginBottom: 20,

  },
  container: {
    display: 'flex',
    gap: 20,
  },
  filterActive: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    borderWidth: .5,
    borderColor: '#000'
  },
  filterActiveText: {
    color: '#000',
    fontSize: 20,
  }
})