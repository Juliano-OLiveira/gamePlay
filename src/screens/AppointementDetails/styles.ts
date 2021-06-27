import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: '100%',
        height: 234,
        
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subtitle: {
        fontSize: 15,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    members: {
        marginLeft: 27,
        marginTop: 27
    },
    footer: {
        paddingVertical: 20,
        paddingHorizontal: 18,
       
        marginBottom: getBottomSpace(),
    }

});
