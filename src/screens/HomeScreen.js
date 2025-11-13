import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity
                style={styles.block}
                onPress={() => navigation.navigate('Details', {
                    itemId: 42,
                    itemName: 'Sample Item',
                })}>
                <Text style={styles.blockText}>Go to Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.block}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.blockText}>Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.block}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.blockText}>Go to Search</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    block: {
        backgroundColor: '#3498db',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },
    blockText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
