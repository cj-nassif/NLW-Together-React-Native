import React, { useState } from "react";
import { View, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";


import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from '../../components/Profile'
import { ListHeader } from "../../components/ListHeader";
import { BackGround } from '../../components/BackGround';
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";



import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida',
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida',
        }
    ]

    function handleCategory(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppoitmentDetails');
    }

    function handleAppointmentCreate() {

        navigation.navigate('AppointmentCreate');
    }

    return (

        <BackGround>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleAppointmentCreate}
                />
            </View>


            <CategorySelect
                categorySelected={category}
                setCategory={handleCategory}
            />


            <ListHeader
                title='Partidas agendadas'
                subtitle='Total 6'
            />
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.match}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ marginBottom: 69 }}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
            />



        </BackGround>


    )
}