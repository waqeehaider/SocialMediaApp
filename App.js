import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from './assets/Styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

function App() {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRendered, setUserStoriesRendered] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRendered, setUserPostRendered] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

  const pagination = (dataBase, currentpage, pageSize) => {
    console.log('current page', currentpage);
    const startIndex = (currentpage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= dataBase.length) {
      return [];
    }
    return dataBase.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    console.log('setLoading', setIsLoadingUserStories);
    const getInitialData = pagination(userStoriesData, 1, userStoriesPageSize);
    console.log('getInitialData', getInitialData);
    setUserStoriesRendered(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

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
  const userPosts = [
    {
      firstName: 'Hamza',
      lastName: ' Ahmad',
      likes: 1120,
      location: 'Sabzazar,Lahore ,Pakistan',
      comments: 24,
      bookmarks: 55,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/avatar.png'),

      id: 1,
    },
    {
      firstName: 'Asad',
      lastName: ' Ahmad',
      likes: 1020,
      location: 'Canal View,Lahore ,Pakistan',
      comments: 26,
      bookmarks: 5,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/avatar.png'),

      id: 2,
    },
    {
      firstName: 'Ali',
      lastName: ' Haider',
      likes: 11,
      location: 'Green City,Lahore ,Pakistan',
      comments: 2,
      bookmarks: 7,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/avatar.png'),

      id: 3,
    },
    {
      firstName: 'Waqee',
      lastName: ' Haider',
      likes: 120,
      location: 'Kashmir Block,Lahore ,Pakistan',
      comments: 14,
      bookmarks: 15,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/avatar.png'),

      id: 4,
    },
    {
      firstName: 'Rijja',
      lastName: ' Zahid',
      likes: 13,
      location: 'Izmir Town,Lahore ,Pakistan',
      comments: 2,
      bookmarks: 4,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/avatar.png'),

      id: 5,
    },
  ];
  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={GlobalStyle.header}>
                <Title title={'Let’s Explore '} />
                <TouchableOpacity style={GlobalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color={'#787ca0ff'}
                  />
                  <View style={GlobalStyle.messageNotification}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 6,
                        fontFamily: 'Inter',
                      }}
                    >
                      2
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={GlobalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStoriesData,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      // contentToAppend is an array of items; spread it so we keep a flat array
                      console.log('content: ', contentToAppend);
                      setUserStoriesRendered(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                      console.log(
                        'userStories in content',
                        userStoriesCurrentPage,
                      );
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRendered}
                  renderItem={({ item }) => (
                    <UserStory
                      key={'UserStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={userPosts}
          renderItem={({ item }) => (
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              location={item.location}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
