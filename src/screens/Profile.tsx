import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function Profile({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const [boards, setBoards] = useState<{name: string; description: string}[]>(
    [],
  );

  useEffect(() => {
    if (route.params?.newBoard) {
      setBoards(prevBoards => [...prevBoards, route.params.newBoard]);
      navigation.setParams({newBoard: null}); // Clear params to avoid duplicate additions
    }
  }, [route.params?.newBoard, navigation]);

  return (
    <View style={style.profileBg}>
      {/* Edit Button */}
      <TouchableOpacity
        onPress={() => {
          console.log('Edit Profile');
        }}>
        <Text style={style.editText}>Edit</Text>
      </TouchableOpacity>

      {/* User Profile Section */}
      <View style={style.userPf}>
        <Image
          source={{uri: 'https://via.placeholder.com/100'}}
          style={style.profileImage}
        />
        <View style={style.textContainer}>
          <Text style={style.userIntro}>Hi,</Text>
          <Text style={style.userName}>Gabrielle!</Text>
        </View>
      </View>

      {/* Content Section */}
      <ScrollView style={style.scrollContainer}>
        <Text style={style.longContent}>
          Your ideas, moods, and dreams all in one place.
        </Text>
        <Text style={style.moodTxt}>Mood Board</Text>

        {/* Render Boards */}
        {boards.length === 0 ? (
          <View style={style.createBoardSection}>
            <Text style={style.createBoardText}>Create a Board</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Create Board')}>
              <Image
                source={require('../assets/icons/create.png')}
                style={style.iconImg}
              />
            </TouchableOpacity>
          </View>
        ) : (
          boards.map((board, index) => (
            <View key={index} style={style.boardCard}>
              <Text style={style.boardName}>{board.name}</Text>
              <Text style={style.boardDescription}>{board.description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  profileBg: {
    flex: 1,
    backgroundColor: '#F79D7D',
  },
  userPf: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  userIntro: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#F4F5F7',
    textAlign: 'left',
    marginBottom: 2,
    lineHeight: 50,
  },
  userName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#F4F5F7',
    textAlign: 'left',
    lineHeight: 50,
    width: '100%',
    paddingRight: 10,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  longContent: {
    fontSize: 16,
    color: '#FFF',
  },
  moodTxt: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  editText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 20,
  },
  createBoardSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  createBoardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 40,
  },
  iconImg: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  boardCard: {
    backgroundColor: '#E8EAF6',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  boardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  boardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Profile;
