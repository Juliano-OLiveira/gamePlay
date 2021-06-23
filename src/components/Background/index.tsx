import React, {ReactNode} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
}


export function Background({children} : Props) {
    const {secundary80,secundary100 } = theme.colors;
    return(
        <LinearGradient      
        style={styles.container}
        colors={[secundary80, secundary100]}
        >
            {children}
        </LinearGradient>
    )
    
}