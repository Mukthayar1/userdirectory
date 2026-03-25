import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import UserCard from '../../../components/UserCard/UserCard';
import HomeScreenSkeleton from '../../../components/CustomSkeleton/HomeScreenSkeleton';
import ErrorView from '../../../components/ErrorView/ErrorView';
import { useAuth } from '../../../hooks/useAuth';
import { useUsers } from '../../../hooks/useUsers';
import { fetchUsers } from '../../../store/redux/actions/userActions';
import colors from '../../../constants/colors';
import { moderateScale, textScale, verticalScale } from '../../../utils/responsive';

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const { logoutUser } = useAuth();
    const { users, error, clearUsers } = useUsers();

    const [refreshing, setRefreshing] = useState(false);
    const [initialLoading, setInitialLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useFocusEffect(
        useCallback(() => {
            setPage(1);
            dispatch(fetchUsers(users?.length > 0 ? setRefreshing : setInitialLoading, 1, false));
        }, [])
    );

    const handleRefresh = useCallback(() => {
        setPage(1);
        dispatch(fetchUsers(setRefreshing, 1, false));
    }, [dispatch]);

    const handleLoadMore = () => {
        if (loadingMore || search.length > 0) return;
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(fetchUsers(setLoadingMore, nextPage, true));
    };

    const filteredUsers = useMemo(() => {
        if (!search) return users;
        return users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const handleRetry = useCallback(() => {
        dispatch(fetchUsers(setRefreshing, 1, false));
    }, [dispatch]);

    const handleLogout = useCallback(() => {
        clearUsers()
        logoutUser();
    }, [dispatch, logoutUser]);

    const handleUserPress = useCallback(user => {
        navigation.navigate('ProfileScreen', { user });
    }, [navigation]);

    const renderItem = useCallback(
        ({ item }) => (
            <UserCard user={item} onPress={() => handleUserPress(item)} />
        ),
        [handleUserPress]
    );

    const keyExtractor = useCallback(item => item.id.toString(), []);

    const renderFooter = () => {
        if (!loadingMore) return null;
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>Loading more...</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Users Directory</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search users..."
                    value={search}
                    onChangeText={setSearch}
                    style={styles.searchInput}
                />
            </View>

            <FlatList
                data={filteredUsers}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[colors.theme]}
                    />
                }
                ListEmptyComponent={() => {
                    if (error && users.length === 0) {
                        return <ErrorView message={error} onRetry={handleRetry} />;
                    }
                }}
            />
            {initialLoading && <HomeScreenSkeleton />}
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
        borderBottomColor: colors.lightGrey,
    },
    title: {
        fontSize: textScale(20),
        fontWeight: 'bold',
        color: '#000000',
    },
    logout: {
        fontSize: textScale(16),
        color: colors.red,
        fontWeight: '600',
    },
    footer: {
        justifyContent: "center",
        alignItems: 'center',
        padding: verticalScale(10)
    }
});

export default HomeScreen;