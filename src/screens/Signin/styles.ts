import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';
 


 export const  styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    content:{
        marginTop: -40,
        paddingHorizontal:50
    }
    ,
    image:{
        width:'100%',
        height:360
    },
    title:{
        color:theme.colors.heading,
        fontSize:40,
        textAlign:'center',
        marginBottom:16,
        fontFamily:theme.fonts.title700,
        lineHeight:40
    },
    subTitle:{
        color:theme.colors.heading,
        fontSize:15,
        marginBottom:45,
        textAlign:'center',
        fontFamily:theme.fonts.title500,
        lineHeight:25
    }
    
  });

   