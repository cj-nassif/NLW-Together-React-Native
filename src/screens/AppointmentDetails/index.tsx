import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { BackGround } from '../../components/BackGround';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import { theme } from '../../globals/styles/theme';
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Nassif',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Carlos',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline'
        }
    ]

    return (
        <BackGround>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title} >
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida
                    </Text>
                </View>

            </ImageBackground>
            <ListHeader
                title='Jogadores'
                subtitle='Total 3'
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon
                    title='Entrar na partida'
                />
            </View>


        </BackGround>
    )
}