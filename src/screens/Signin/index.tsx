import React from 'react';
import { useState } from 'react';
import { View, 
    Text,
    TextInput,
    Image,
    StatusBar } from 'react-native';
import { styles} from '../styles';

import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png';




export function Sigin(){
    const [texte, SetText] = useState('');
    console.log(texte);
    
    return(
        <View style={styles.container}>
            <StatusBar barStyle = "light-content"
            backgroundColor="transparent" 
            translucent
            />

            <Image source={IllustrationImg}
            style={styles.image}
            resizeMode="stretch"
            /> 

            <View>
                <Text style={styles.title}>
                Conecte-se {`\n`}
                e organize suas  {`\n`}
                jogatinas   
                </Text>
                <Text style={styles.subTitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
                </Text>
            </View>
            <ButtonIcon title="Entra com Discord"
            activeOpacity={0.7}
            />
        </View>
        
    )
}