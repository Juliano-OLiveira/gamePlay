import React, { useState } from 'react';
import {
    View, Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Modal
} from 'react-native';

import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { ModalView } from '../../components/ModalView';

import { CategorySelect } from '../../components/CategorySelect';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { GuilProps } from '../../components/Guild';


export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuilsModa, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuilProps>({} as GuilProps);

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleGuildSelect(guildSelect: GuilProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <ScrollView>
                <Background>
                    <Header title="Agendar Pardita"
                    />

                    <Text style={[
                        styles.label,
                        { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon
                                        ? <GuildIcon />
                                        : <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name 
                                        ? guild.name 
                                        : 'Selecione um servidor'}
                                    </Text>

                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}

                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>


                            </View>
                            <View>
                                <Text style={styles.label}>
                                    Horário e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>


                            </View>

                        </View>
                        <View style={[styles.field, { marginBottom: 5 }]} >
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caractere}>
                                Max 100 carateres
                            </Text>

                        </View>
                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />
                        <View style={styles.footer}>
                            <Button title="Agendar" />
                        </View>
                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openGuilsModa}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}

