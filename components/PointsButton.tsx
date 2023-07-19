import { Text, Pressable, StyleSheet, Platform } from 'react-native';
import { IPointsButtonProps } from './types';

export const PointsButton = ({
  title, 
  setPoints, 
  value,
  activeValue,
  setActiveValue,
}: IPointsButtonProps) => {
  const handleOnPress = (ptsValue: number | null) => {
    setPoints(ptsValue);
    setActiveValue(ptsValue);
  }

  return (
    <Pressable 
      onPress={() => handleOnPress(value)} 
      style={[styles.button, activeValue === value && { borderColor: '#3d405b', borderWidth: 2}]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e07a5f',
    width: 65,
    height: 65,
    margin: '5%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
      },
      android: {
        elevation:5,
      },
    }),
  },
  text: {
    fontFamily: 'Raleway_400Regular', 
    fontSize: 30,
    color: '#f4f1de'
  }
});