import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfileImage/UserProfile';
import userStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBookBookmark,
  faComment,
  faEllipsisH,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
const UserPost = props => {
  return (
    <View>
      <View style={userStyle.postContainer}>
        <View style={{ flexDirection: 'row' }}>
          <UserProfile profileImage={props.profileImage} imageDimensions={48} />
          <View style={userStyle.Names}>
            <Text>
              {props.firstName}
              {props.lastName}
            </Text>
            <Text>{props.location}</Text>
          </View>
        </View>

        <FontAwesomeIcon size={24} icon={faEllipsisH} />
      </View>
      <View style={userStyle.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 40,
            marginTop: 20,
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
          <Text style={{ marginLeft: 3 }}>{props.likes}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 40,
            marginTop: 20,
          }}
        >
          <FontAwesomeIcon icon={faComment} />
          <Text style={{ marginLeft: 3 }}>{props.comments}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 40,
            marginTop: 20,
          }}
        >
          <FontAwesomeIcon icon={faBookmark} />
          <Text style={{ marginLeft: 3 }}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.prototypes = {
  firtName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
