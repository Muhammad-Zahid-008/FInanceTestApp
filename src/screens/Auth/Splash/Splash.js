import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, StatusBar } from 'react-native';
import { appIcons, appImages, HP, WP } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

const Splash = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const navigateTimer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={appImages.bgImg}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View
            style={[
              styles.logoContainer,
              {
                opacity: isVisible ? 1 : 0,
              },
            ]}
          >
            <Image
              source={appIcons.appIcon}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
