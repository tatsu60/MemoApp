import React from 'react';
import { StyleSheet, View, Text } from 'react-native' ;

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#d6097b';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#d6097b'
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textColor}]}>
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
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  circleButtonTitle: {
    fontSize: 36,
    lineHeight: 40,
  },

});

export default CircleButton;
