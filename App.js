import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchWrapper}>
          <Text>Search</Text>
        </View>
        <View style={styles.mainWrapper}>
          <Text>main</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  searchWrapper: {
    padding: 16,
    backgroundColor: 'red'

  },
  mainWrapper: {
    flex: 1,
    padding: 16
  }
});
