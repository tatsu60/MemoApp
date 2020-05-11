import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>メモリスト</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>メモのタイトル</Text>
          <Text style={styles.memoDate}>2020/05/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>メモのタイトル</Text>
          <Text style={styles.memoDate}>2020/05/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>メモのタイトル</Text>
          <Text style={styles.memoDate}>2020/05/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>メモのタイトル</Text>
          <Text style={styles.memoDate}>2020/05/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>メモのタイトル</Text>
          <Text style={styles.memoDate}>2020/05/10</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 60,
    height: 60,
    backgroundColor: '#d6097b',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  memoAddButtonTitle: {
    fontSize: 36,
    color: '#fff',
    lineHeight: 40,
  },
  memoList:{
    width: '100%',
    flex: 1,
    paddingTop: 80,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height:80,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 24,
  },
});
