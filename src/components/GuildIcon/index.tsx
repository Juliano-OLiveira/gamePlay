import React from 'react';

import { View, Image} from 'react-native'
import { styles } from './styles';





 export function GuildIcon() {
   const uri = 'http://1.bp.blogspot.com/_67YWDX97X2A/TBt1n-oMX5I/AAAAAAAAADM/rS2Sp4IDanw/s1600/padawan.jpg'

    return(
        <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
        >
            
        </Image>
       );
     

     
 }