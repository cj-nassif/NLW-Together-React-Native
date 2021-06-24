import React from "react";
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import { theme } from "../../globals/styles/theme";




export function ButtonAdd({ ...rest }: RectButtonProps) {


    return (
        <RectButton
            style={styles.container}
        >
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}