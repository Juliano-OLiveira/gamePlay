import {StyleSheet} from 'react-native';
import { theme } from '../global/theme';
 


 export const  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
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
        marginBottom:16
    },
    subTitle:{
        color:theme.colors.heading,
        fontSize:15,
        marginBottom:64,
        textAlign:'center'
    }
    
  });

   