import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createOn: new Date(),
    })
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={70}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          autoFocus = {true}
          placeholder = 'やることを入力してください。'
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
          textAlignVertical="top"
        />
        <CircleButton name="check" onPress={this.handlePress.bind(this)} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },

});

export default MemoCreateScreen;
