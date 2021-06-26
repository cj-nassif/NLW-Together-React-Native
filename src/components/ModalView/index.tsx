import React, { ReactNode } from "react";
import { Modal, ModalProps, View, TouchableWithoutFeedback } from "react-native";

import { BackGround } from "../BackGround";


import { styles } from './styles'

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ children,
    closeModal,
    ...rest
}: Props) {



    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <BackGround>
                            <View style={styles.bar} />

                            {children}
                        </BackGround>

                    </View>

                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}