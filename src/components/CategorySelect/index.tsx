import React from 'react';
import { ScrollView, Text } from 'react-native'


import { styles } from './sytles';
import { categories } from '../../utils/categories'
import { Category } from '../../components/Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}


export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) {

    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }

        </ScrollView>
    );
}