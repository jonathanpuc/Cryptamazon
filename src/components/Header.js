import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
    <View style={headerContainer}>
        <Text style={headerTitle}>Cryptamazon</Text>
        </View>
);

const styles = {
    headerContainer: {
        display: "flex",
        marginTop: 25,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold"
    }
}

const { headerContainer, headerTitle } = styles;

export default Header;