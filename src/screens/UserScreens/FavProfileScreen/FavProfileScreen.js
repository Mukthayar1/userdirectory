import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { useUsers } from '../../../hooks/useUsers';
import UserCard from '../../../components/UserCard/UserCard';
import colors from '../../../constants/colors';
import { moderateScale, textScale } from '../../../utils/responsive';

const FavProfileScreen = ({ navigation }) => {

    const { users, favoriteUserIds } = useUsers();
    const favUsers = users.filter(user => favoriteUserIds.includes(user.id));

    const goToProfile = (user) => {
        navigation.navigate('ProfileScreen', { user });
    };

    const renderItem = ({ item }) => (
        <UserCard user={item} onPress={() => goToProfile(item)} />
    );

    const getKey = (item) => item.id.toString();

    if (favUsers.length == 0) {
        return (
            <View style={styles.emptyBox}>
                <Text style={styles.emptyHeading}>No Favorites Yet</Text>
                <Text style={styles.emptyMessage}>
                    Tap the heart icon on a user's profile to add them to your favorites
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>Favorite Users</Text>
                <Text style={styles.totalCount}>{favUsers.length} users</Text>
            </View>
            <FlatList
                data={favUsers}
                renderItem={renderItem}
                keyExtractor={getKey}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(12),
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    pageTitle: {
        fontSize: textScale(18),
        fontWeight: '600',
        color: '#000',
    },
    totalCount: {
        fontSize: textScale(14),
        color: '#000',
    },
    emptyBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(20),
        backgroundColor: colors.background,
    },
    emptyHeading: {
        fontSize: textScale(18),
        fontWeight: '600',
        color: '#000',
        marginBottom: moderateScale(8),
    },
    emptyMessage: {
        fontSize: textScale(14),
        color: '#000',
        textAlign: 'center',
    },
});

export default FavProfileScreen;