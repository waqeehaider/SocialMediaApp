import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from './assets/Styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
function App() {
  const userStoriesData = [
    {
      firstName: 'Owais',
      id: 1,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Bhatti',
      id: 2,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Iqra',
      id: 3,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Usama',
      id: 4,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Javeria',
      id: 5,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Ridah',
      id: 6,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Amber',
      id: 7,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Sajeel',
      id: 8,
      profileImage: require('./assets/images/avatar.png'),
    },
    {
      firstName: 'Samra',
      id: 9,
      profileImage: require('./assets/images/avatar.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={GlobalStyle.header}>
        <Title title={'Let’s Explore '} />
        <TouchableOpacity style={GlobalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#787ca0ff'} />
          <View style={GlobalStyle.messageNotification}>
            <Text style={{ color: 'white', fontSize: 6, fontFamily: 'Inter' }}>
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={GlobalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesData}
          renderItem={({ item }) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
