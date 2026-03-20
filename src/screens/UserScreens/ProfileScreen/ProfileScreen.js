import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';

import { useUsers } from '../../../hooks/useUsers';
import colors from '../../../constants/colors';
import { moderateScale, textScale, verticalScale } from '../../../utils/responsive';
import { heartFillIcon } from '../../../constants/images';
import { callUser, handleEmailPress, visitWebsite } from '../../../utils/helpers';

const ProfileScreen = ({ route }) => {

  const { user } = route.params;
  const { isFavorite, addToFavorites } = useUsers();
  const isUserFavorite = isFavorite(user.id);

  const toggleFavorite = () => {
    addToFavorites(user.id);
  };

  const avatarUrl = `https://i.pravatar.cc/300?u=${user.email}`;

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={toggleFavorite} style={styles.heartBtn}>
          <Image source={heartFillIcon} tintColor={!isUserFavorite ? colors.lightGrey : null} resizeMode='contain' style={styles.heartImg} />
        </TouchableOpacity>
      </View>

      <View style={styles.topSection}>
        <Image source={{ uri: avatarUrl }} style={styles.profilePic} />
        <Text style={styles.name}>{user.name} - {user.username}</Text>
      </View>


      <View style={styles.mainBox}>
        <Text style={styles.heading}>Contact</Text>
        <TouchableOpacity onPress={()=>handleEmailPress(user?.email)} style={styles.row}>
          <Text style={styles.rowText}>{user.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>callUser(user.phone)} style={styles.row}>
          <Text style={styles.rowText}>{user.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>visitWebsite(user.website)} style={styles.row}>
          <Text style={styles.rowText}>{user.website}</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Address</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {user.address.street}, {user.address.suite}
            {'\n'}
            {user.address.city}, {user.address.zipcode}
          </Text>
        </View>

        <Text style={styles.heading}>Company</Text>
        <View style={styles.row}>
          <View style={styles.companyBox}>
            <Text style={styles.companyName}>{user.company.name}</Text>
            <Text style={styles.companyTag}>"{user.company.catchPhrase}"</Text>
            <Text style={styles.companyDesc}>{user.company.bs}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heartImg: {
    height: verticalScale(45),
    width: verticalScale(35)
  },
  header: {
    backgroundColor: colors.theme,
    paddingRight: moderateScale(16),
    alignItems: 'flex-end',
  },
  heartBtn: {
    padding: moderateScale(8),
  },
  topSection: {
    alignItems: 'center',
    marginTop: -moderateScale(40),
    marginBottom: moderateScale(20),
  },
  profilePic: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: textScale(24),
    fontWeight: 'bold',
    color: '#000000',
    marginTop: moderateScale(8),
  },
  mainBox: {
    backgroundColor: '#fff',
    padding: moderateScale(16),
    marginHorizontal: moderateScale(16),
    marginBottom: moderateScale(16),
    borderRadius: moderateScale(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heading: {
    fontSize: textScale(18),
    fontWeight: '600',
    color: '#000000',
    marginVertical: moderateScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  rowText: {
    fontSize: textScale(14),
    color: '#000',
    marginLeft: moderateScale(12),
    flex: 1,
  },
  companyBox: {
    marginLeft: moderateScale(12),
    flex: 1,
  },
  companyName: {
    fontSize: textScale(16),
    fontWeight: '600',
    color: "#000",
    marginBottom: moderateScale(4),
  },
  companyTag: {
    fontSize: textScale(14),
    color: "#000",
    marginBottom: moderateScale(4),
  },
  companyDesc: {
    fontSize: textScale(12),
    color: "#000",
  },
});

export default ProfileScreen;