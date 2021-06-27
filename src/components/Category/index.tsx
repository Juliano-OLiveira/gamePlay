import React from 'react';
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean,
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    const { secundary40, secundary50, secundary70, secundary85 } = theme.colors;
    return (
        <RectButton {...rest} >
            <LinearGradient
                style={styles.container}
                colors={[secundary50, secundary70]}
            >
                <LinearGradient
                    style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? secundary85 : secundary50, secundary40]}
                >
                    {
                        hasCheckBox&&
                        <View
                            style={checked ? styles.checked : styles.check}
                        />
                    }

                    <Icon width={48} height={48} />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>

        </RectButton>
    );
}