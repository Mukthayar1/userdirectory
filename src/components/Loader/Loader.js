import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { height, width } from '../../theme/size';
import colors from "../../theme/colors"

const Loader = () => {
    return (
        <View style={styles.Loader}>
            <ActivityIndicator color={colors.theme} size={'large'} />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    Loader: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: height,
        width: width,
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
        alignItems: "center"
    }
})