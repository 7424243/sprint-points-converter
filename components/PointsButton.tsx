import { Text, Pressable, StyleSheet } from 'react-native';
import { IPointsButtonProps } from './types';

export const PointsButton = ({
  title, 
  setPoints, 
  value
}: IPointsButtonProps) => (
  <Pressable onPress={() => setPoints(value)} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e07a5f',
    width: 60,
    height: 60,
    margin: '5%',
  },
  text: {
    fontFamily: 'Raleway_400Regular', 
    fontSize: 30,
    color: '#f4f1de'
  }
});