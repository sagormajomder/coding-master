import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../../Common/Colors';

export default function SearchBar({ onSearchText }) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <View style={styles.searchContainer}>
      <Ionicons name='search-circle' size={40} color={Colors.PRIMARY} />
      <TextInput
        placeholder='Search'
        maxLength={40}
        onChangeText={value => setSearchInput(value)}
        onSubmitEditing={() => onSearchText(searchInput)}
        style={styles.inputStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    padding: 3,
  },
  inputStyle: {
    fontSize: 18,
    width: '83%',
  },
});
