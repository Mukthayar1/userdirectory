import { Linking } from "react-native";

const handleEmailPress = (email) => {
    try {
        Linking.openURL(`mailto:${email}`);
    } catch (error) {
        console.log('handleEmailPress=>', error);
    }
};

const callUser = (phone) => {
    try {
        Linking.openURL(`tel:${phone}`);

    } catch (error) {
        console.log('callUser=>', error);

    }
};

const visitWebsite = (website) => {
    try {
        Linking.openURL(`https://${website}`);

    } catch (error) {
        console.log('error', error);
    }
};


export {
    handleEmailPress,
    callUser,
    visitWebsite
}