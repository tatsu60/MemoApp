import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class  MemoList extends React.Component {
  render() {
    return (

      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>自己分析</Text>
            <Text style={styles.memoDate}>2020/05/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>求人検索とピックアップ</Text>
            <Text style={styles.memoDate}>2020/05/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>比較検討</Text>
            <Text style={styles.memoDate}>2020/05/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>応募書類作成</Text>
            <Text style={styles.memoDate}>2020/05/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>面接対策</Text>
            <Text style={styles.memoDate}>2020/05/10</Text>
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
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

});

export default MemoList;
