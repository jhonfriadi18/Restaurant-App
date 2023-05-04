import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React, { useRef } from 'react';

const SlidePict = () => {
  const images = new Array(1).fill(
    'https://i.pinimg.com/564x/88/21/3c/88213cea7f2d9787d3e082f8fac1eebd.jpg'
  );
  images.push('https://media.istockphoto.com/id/1446622466/id/foto/closeup-burger-keju-dan-kentang-goreng-lezat-yang-disajikan-di-atas-nampan-kayu.jpg?s=612x612&w=0&k=20&c=G4ikCeF-no8CdaOnoNo9fqKl_4c08mbKc5tA0Ci11Zw=')
  images.push('https://media.istockphoto.com/id/1446622466/id/foto/closeup-burger-keju-dan-kentang-goreng-lezat-yang-disajikan-di-atas-nampan-kayu.jpg?s=612x612&w=0&k=20&c=G4ikCeF-no8CdaOnoNo9fqKl_4c08mbKc5tA0Ci11Zw=')
  images.push('https://media.istockphoto.com/id/1212296691/id/foto/pemandangan-dari-dekat-burger-lezat-segar-di-atas-nampan-kayu-dan-kentang-goreng.jpg?s=612x612&w=0&k=20&c=ZITgixss9TOlX3WmqhvI1kbSDNA8sEqG0wvJKQaJdbY=')
  images.push('https://media.istockphoto.com/id/1446622466/id/foto/closeup-burger-keju-dan-kentang-goreng-lezat-yang-disajikan-di-atas-nampan-kayu.jpg?s=612x612&w=0&k=20&c=G4ikCeF-no8CdaOnoNo9fqKl_4c08mbKc5tA0Ci11Zw=')
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ], { useNativeDriver: false })}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{ width: windowWidth, height: 210 }} key={imageIndex}>
                <ImageBackground source={{ uri: image }} style={styles.card}>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 232,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ed7801',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    color:'#32cd32',
    position:'relative',
    top:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SlidePict