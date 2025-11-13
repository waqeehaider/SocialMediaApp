import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styleProfile from './style';
const UserProfile = props => {
  return (
    <View style={styleProfile.imageBorder}>
      <Image style={styleProfile.image} source={props.profileImage} />
    </View>
  );
};
UserProfile.propTypes = {
  profileImage: PropTypes.any.isRequired,
};
export default UserProfile;
