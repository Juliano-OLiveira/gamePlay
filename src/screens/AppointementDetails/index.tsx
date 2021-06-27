

import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';

// import { Container } from './styles';
import { Fontisto } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/Buttonicon';



import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { styles } from './styles';

export function AppointementDetails() {
    const members = [
        {
            id: '1',
            username: 'Juliano Oliveira',
            avatar_url: 'https://github.com/Juliano-Oliveira.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Juliano Oliveira',
            avatar_url: 'https://github.com/Juliano-Oliveira.png',
            status: 'offline'
        },
    ]
    return (
        <Background>
            <Header title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos ao challenger sem peder uma partida md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na Partida" />
            </View>
        </Background>
        
    );
}

