import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>メモリスト</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default Appbar;
