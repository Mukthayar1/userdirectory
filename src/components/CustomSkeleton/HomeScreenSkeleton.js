import React from 'react';
import { View, StyleSheet } from 'react-native';
import { height, moderateScale, width } from '../../utils/responsive'
import colors from '../../constants/colors'
import CustomSkeleton from "./CustomSkeleton"

const HomeScreenSkeleton = () => {
  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4, 5, 6].map((val) => <View style={styles.userCardContainer} key={val?.toString()}>
        <CustomSkeleton style={styles.avatar} />
        <View style={styles.content}>
          <CustomSkeleton style={styles.name} />
          <CustomSkeleton style={styles.company} />
          <CustomSkeleton style={styles.email} />
          <CustomSkeleton style={styles.city} />
        </View>
      </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: height,
    width: width,
  },
  userCardContainer: {
    flexDirection: 'row',
    padding: moderateScale(16),
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
    width: '60%',
    height: moderateScale(20),
    borderRadius: moderateScale(4),
    marginBottom: moderateScale(8),
  },
  company: {
    width: '40%',
    height: moderateScale(16),
    borderRadius: moderateScale(4),
    marginBottom: moderateScale(6),
  },
  email: {
    width: '70%',
    height: moderateScale(16),
    borderRadius: moderateScale(4),
    marginBottom: moderateScale(6),
  },
  city: {
    width: '30%',
    height: moderateScale(16),
    borderRadius: moderateScale(4),
  },
  // Profile Skeleton Styles
  profileContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileHeader: {
    height: moderateScale(100),
    backgroundColor: colors.theme,
    width: '100%',
  },
  profileAvatar: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    alignSelf: 'center',
    marginTop: -moderateScale(40),
    marginBottom: moderateScale(10),
  },
  profileName: {
    width: '50%',
    height: moderateScale(24),
    alignSelf: 'center',
    marginBottom: moderateScale(8),
  },
  profileUsername: {
    width: '30%',
    height: moderateScale(18),
    alignSelf: 'center',
    marginBottom: moderateScale(20),
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    padding: moderateScale(16),
    marginHorizontal: moderateScale(16),
    marginBottom: moderateScale(16),
    borderRadius: moderateScale(8),
  },
  sectionTitle: {
    width: '40%',
    height: moderateScale(20),
    marginBottom: moderateScale(12),
  },
  infoRow: {
    width: '100%',
    height: moderateScale(20),
    marginBottom: moderateScale(10),
  },
});

export default HomeScreenSkeleton;