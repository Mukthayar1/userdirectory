import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../constants/colors';
import { moderateScale, textScale } from '../../utils/responsive';
import { handleEmailPress } from "../../utils/helpers"

const UserCard = memo(({ user, onPress }) => {

  const avatarUrl = `https://i.pravatar.cc/150?u=${user.email}`;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.company}>{user.company.name}</Text>
        <TouchableOpacity onPress={() => handleEmailPress(user.email)}>
          <Text style={styles.email}>{user.email}</Text>
        </TouchableOpacity>
        <Text style={styles.city}>{user.address.city}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: moderateScale(10),
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  avatar: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    marginRight: moderateScale(12),
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: textScale(16),
    fontWeight: 'bold',
    color: '#000000',
  },
  company: {
    fontSize: textScale(14),
    color: '#666666',
  },
  email: {
    fontSize: textScale(14),
    color: colors.theme,
    textDecorationLine: 'underline',
    width:moderateScale(200)
  },
  city: {
    fontSize: textScale(14),
    color: '#999999',
  },
});

export default UserCard;