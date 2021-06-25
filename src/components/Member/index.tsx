import React from "react";
import { View, Text } from "react-native";

import { styles } from './styles';

import { Avatar } from "../Avatar";
import { theme } from "../../globals/styles/theme";

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export function Member({ data }: Props) {

    const isOnLine = data.status === 'online';
    const { on, primary } = theme.colors;

    return (
        <View style={styles.container}>

            <Avatar
                urlImage={data.avatar_url}
            />
            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>
                <View style={styles.status}>
                    <View
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnLine ? on : primary
                            }
                        ]}
                    />
                    <Text style={styles.nameStatus}>
                        {isOnLine ? 'Disponível' : 'Ocupado'}
                    </Text>

                </View>
            </View>
        </View>


    )
}