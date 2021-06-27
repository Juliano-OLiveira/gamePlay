import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    hader:{
        width: '100%',
        padding:24,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: getStatusBarHeight() + 3,
        marginBottom:42,
    },
    matches:{
        marginLeft: 24,
        marginTop: 25,
        marginVertical:15
        
        
    }
});