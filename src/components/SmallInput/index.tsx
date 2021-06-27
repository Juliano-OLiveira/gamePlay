import React from 'react';

import { TextInputProps, TextInput, Image } from 'react-native'

import { styles } from './styles';

export function SmallInput ({...rest}: TextInputProps) {

    return (
        <TextInput
        style={styles.container}
        keyboardType="numeric"
        {...rest}
        >

        </TextInput>
    );
}