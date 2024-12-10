import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function CreateBoard({navigation}: {navigation: any}): React.JSX.Element {
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');

  return (
    <View style={style.board}>
      {/* Header */}
      <Text style={style.boardTxt}>Create a</Text>
      <Text style={style.boardTxt2}>Board</Text>

      {/* Board Name */}
      <View>
        <Text style={style.txt}>Board Name</Text>
      </View>
      <TextInput
        style={style.inputBox}
        placeholder="Name this board"
        placeholderTextColor="darkgrey"
        value={boardName}
        onChangeText={setBoardName}
      />

      {/* Description of Board */}
      <View>
        <Text style={style.txt}>Describe the purpose of this board:</Text>
      </View>
      <TextInput
        style={style.inputBox2}
        placeholder="Dreams & Goals, Manifest your future self..."
        placeholderTextColor="darkgrey"
        value={boardDescription}
        onChangeText={setBoardDescription}
        multiline
      />

      {/* Buttons */}
      <View style={style.btnContainer}>
        {/* Cancel Button */}
        <TouchableOpacity
          style={style.submitBtn}
          onPress={() => {
            setBoardName('');
            setBoardDescription('');
            navigation.goBack();
          }}>
          <Text style={style.submitBtnTxt}>Cancel</Text>
        </TouchableOpacity>

        {/* Create Button */}
        <TouchableOpacity
          style={style.submitBtn}
          onPress={() => {
            if (boardName.trim() && boardDescription.trim()) {
              navigation.navigate('Profile', {
                newBoard: {name: boardName, description: boardDescription},
              });
            } else {
              console.log('Board Name and Description are required.');
            }
          }}>
          <Text style={style.submitBtnTxt}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  // Main Board Style
  board: {
    backgroundColor: '#F7BC7D',
    flex: 1,
  },
  boardTxt: {
    fontSize: 45,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontFamily: 'Montserrat',
  },
  boardTxt2: {
    fontSize: 45,
    color: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontFamily: 'Montserrat',
  },

  // Input Text and Box Style
  txt: {
    fontSize: 15,
    color: '#3A3B45',
    paddingLeft: 20,
    paddingTop: 10,
  },
  inputBox: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 18,
    paddingLeft: 10,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#F79D7D',
    borderWidth: 2.5,
    fontSize: 16,
  },
  inputBox2: {
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 18,
    paddingLeft: 10,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#F79D7D',
    borderWidth: 2.5,
    fontSize: 16,
    textAlignVertical: 'top', // Aligns multiline text at the top
  },

  // Button Styles
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  submitBtn: {
    backgroundColor: '#F79D7D',
    width: 100,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnTxt: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default CreateBoard;
