import React from 'react';
import { StyleSheet, View, Text } from 'react-native' ;

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
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
  circleButtonTitle: {
    fontSize: 36,
    color: '#fff',
    lineHeight: 40,
  },

});

export default CircleButton;
