import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { darkModeEnabled, colors } = useContext(ThemeContext);
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
        input: {
            borderWidth: 1,
            borderColor: theme.border,
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            marginBottom: 20,
            color: theme.text,
            backgroundColor: theme.background,
        },
        text: {
            fontSize: 16,
            color: theme.text,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor={theme.text}
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <Text style={styles.text}>Searching for: {searchQuery}</Text>
        </View>
    );
};

export default SearchScreen;
