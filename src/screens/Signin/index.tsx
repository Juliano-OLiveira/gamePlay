import React from 'react';


import { useState } from 'react';
import { View, 
    Text,
    TextInput,
    Image,
    } from 'react-native';
import { styles} from './styles';

import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png';
import { useNavigation } from '@react-navigation/native';





export function Sigin(){
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }
    const [texte, SetText] = useState('');
    console.log(texte);
    
    return(
        <View style={styles.container}>
          
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
            <ButtonIcon title="Entrar com Discord"
           
            onPress={handleSignIn}
            />
        </View>
        
    )
}