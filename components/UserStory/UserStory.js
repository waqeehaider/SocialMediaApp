import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import UserStyle from './style';
import UserProfile from '../UserProfileImage/UserProfile';
const UserStory = props => {
  return (
    <View style={UserStyle.styleContainer}>
      <UserProfile profileImage={props.profileImage} />
      <Text style={UserStyle.fname}>{props.firstName}</Text>
    </View>
  );
};
UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
  // require(...) returns a number on bundled images; PropTypes.any is appropriate here
};
export default UserStory;
