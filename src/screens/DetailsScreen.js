import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const DetailsScreen = ({ route, navigation }) => {
    const { darkModeEnabled, colors } = useContext(ThemeContext);
    const theme = darkModeEnabled ? colors.dark : colors.light;
    const { itemId, itemName } = route.params;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: theme.background,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            color: theme.text,
        },
        text: {
            fontSize: 16,
            marginBottom: 10,
            color: theme.text,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <Text style={styles.text}>Item ID: {itemId}</Text>
            <Text style={styles.text}>Item Name: {itemName}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button
                title="Update Params"
                onPress={() =>
                    navigation.setParams({
                        itemName: 'Updated Item',
                    })
                }
            />
        </View>
    );
};

export default DetailsScreen;
