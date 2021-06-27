import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';


export type MemberProps ={
    id: string;
    username: string;
    avatar_url:string;
    status:string;
}

type Props = {
    data: MemberProps,
}

export function Member({data}:Props) {
const isOline = data.status === 'online';
const {on, primary} = theme.colors;

    return (
        <View
            style={styles.container}

        >
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>
                    {data.username}

                </Text>
                <View style={styles.status}>
                    <View style={[
                        styles.bulletStatus,
                        {
                            backgroundColor: isOline ? on : primary
                        }
                    ]}/>

                    <Text style={styles.nameStatus}>
                        {isOline ? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>
            </View>

        </View>

    );
}