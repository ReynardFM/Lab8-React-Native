import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

// Updated list of screens with explicit navigator paths for nested screens
const SEARCHABLE_SCREENS = [
    { id: '1', name: 'Home', route: 'HomeStack' },
    { id: '2', name: 'Details', route: 'HomeStack', screen: 'Details' },
    { id: '3', name: 'Profile', route: 'HomeStack', screen: 'Profile' },
];

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { darkModeEnabled, colors } = useContext(ThemeContext);
    const theme = darkModeEnabled ? colors.dark : colors.light;

    const filteredScreens = searchQuery
        ? SEARCHABLE_SCREENS.filter(screen =>
            screen.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        header: {
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: theme.border,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: theme.text,
            marginBottom: 20,
        },
        input: {
            borderWidth: 1,
            borderColor: theme.border,
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            color: theme.text,
            backgroundColor: theme.background,
        },
        resultItem: {
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme.border,
        },
        resultText: {
            fontSize: 18,
            color: theme.text,
        },
        noResultsText: {
            textAlign: 'center',
            marginTop: 20,
            color: theme.text,
        },
    });

    const handleNavigation = (item) => {
        if (item.screen) {
            // It's a nested screen
            let params = {};
            if (item.screen === 'Details') {
                params = { itemId: 1, itemName: 'From Search' };
            }
            navigation.navigate(item.route, { screen: item.screen, params });
        } else {
            // It's a top-level screen/tab
            navigation.navigate(item.route);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Search Screens</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Search for a screen..."
                    placeholderTextColor={darkModeEnabled ? '#999' : '#888'}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <FlatList
                data={filteredScreens}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.resultItem}
                        onPress={() => handleNavigation(item)}>
                        <Text style={styles.resultText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    searchQuery.length > 0 && <Text style={styles.noResultsText}>No screens found</Text>
                )}
            />
        </View>
    );
};

export default SearchScreen;
