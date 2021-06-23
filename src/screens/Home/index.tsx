import React, { useEffect } from 'react'
import { useState } from 'react';

import { View, FlatList, Text } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles'

export function Home() {
    const [category, setCategory] = useState('');

    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Noobe',
                icon: null,
                owner: true
            },
            category: '2',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '3',
            guild: {
                id: '3',
                name: 'Padawan',
                icon: null,
                owner: true
            },
            category: '3',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '4',
            guild: {
                id: '4',
                name: 'Expert',
                icon: null,
                owner: true
            },
            category: '4',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
    ]

    function handlaCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);


    }

    return (
        <View>
            <View style={styles.hader}>
                <Profile />
                <ButtonAdd />

            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handlaCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appoinments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />

                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}

                />
            </View>

        </View>
    );
}