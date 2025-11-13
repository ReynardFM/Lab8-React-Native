import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
    const { darkModeEnabled, toggleDarkMode, colors } = useContext(ThemeContext);
    const theme = darkModeEnabled ? colors.dark : colors.light;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: theme.background,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            color: theme.text,
        },
        settingRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme.border,
        },
        settingText: {
            fontSize: 16,
            color: theme.text,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <View style={styles.settingRow}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch
                    value={darkModeEnabled}
                    onValueChange={toggleDarkMode}
                />
            </View>
        </View>
    );
};

export default SettingsScreen;