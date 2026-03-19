import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;


const moderateScale = (size, factor = 0.5) => {
    const scale = width / BASE_WIDTH;
    return size + (scale * size - size) * factor;
};


const verticalScale = (size) => {
    return (height / BASE_HEIGHT) * size;
};

const textScale = (size) => {
    const scale = width / BASE_WIDTH;
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};


export {
    width,
    height,
    moderateScale,
    verticalScale,
    textScale
}