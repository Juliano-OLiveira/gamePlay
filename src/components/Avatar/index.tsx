import React from 'react';

import { View, Text,Image} from 'react-native'
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import {LinearGradient} from 'expo-linear-gradient';


type Props = {
   urlImage: string,
}

 export function Avatar({urlImage} :Props) {
   const {secundary50,secundary70 } = theme.colors;
    return(
      <LinearGradient      
      style={styles.container}
      colors={[secundary50, secundary70]}
      >
         <Image
            source={{uri :urlImage}}
            style={styles.avatar}
         />
      </LinearGradient>
    );
 }