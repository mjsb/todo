import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from './styles';
import { useState } from 'react';

type Props = {
    description: string;
    onRemove: () => void;
    onDone: () => void;
    done: boolean;
}

export function Task({description, onRemove, done, onDone}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.check} onPress={onDone}>
                {done === true ?
                    <Image
                        source={require('../../../assets/checked.png')}
                    />
                    :
                    <Image
                        source={require('../../../assets/check.png')}
                    />
                }
            </TouchableOpacity>

            <Text style={styles.description}>
                {description}
            </Text>

            <TouchableOpacity style={styles.trash} onPress={onRemove}>
                <Image
                    source={require('../../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}