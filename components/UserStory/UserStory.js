import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import UserStyle from './style';
const UserStory = props => {
  return (
    <View style={UserStyle.styleContainer}>
      <View style={UserStyle.imageBorder}>
        <Image style={UserStyle.image} source={props.ProfileImage} />
      </View>
      <Text style={UserStyle.fname}>{props.firstName}</Text>
    </View>
  );
};
UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  // require(...) returns a number on bundled images; PropTypes.any is appropriate here
  ProfileImage: PropTypes.any.isRequired,
};
export default UserStory;
