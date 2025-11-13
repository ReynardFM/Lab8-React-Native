import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ProfileScreen = ({ navigation }) => {
    const { darkModeEnabled, colors } = useContext(ThemeContext);
    const theme = darkModeEnabled ? colors.dark : colors.light;

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
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.text}>User: John Doe</Text>
            <Text style={styles.text}>Email: john@example.com</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default ProfileScreen;
