import React from 'react';

import { View, Text, FlatList } from 'react-native'
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { GuilProps } from '../../components/Guild';



type Props = {
  handleGuildSelect: (guild: GuilProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'img.png',
      owner: true
    },
    {
      id: '2',
      name: 'Platina',
      icon: 'img.png',
      owner: true
    },
    {
      id: '3',
      name: 'Lendários',
      icon: 'img.png',
      owner: true
    },
    {
      id: '4',
      name: 'Platina',
      icon: 'img.png',
      owner: true
    }, {
      id: '5',
      name: 'Lendários',
      icon: 'img.png',
      owner: true
    },
    {
      id: '6',
      name: 'Platina',
      icon: 'img.png',
      owner: true
    }
  ]

  return (
    <View
      style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 69,paddingTop:104 }}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        style={styles.guilds}
      />

    </View>
  );
}