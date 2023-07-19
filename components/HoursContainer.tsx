import { View, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../styles';
import { convertPtsToHrs } from '../utilities';
import { ReactElement } from 'react';
import { IHoursContainerProps } from './types';

export const HoursContainer = ({ pts }: IHoursContainerProps): ReactElement => (
  <View style={styles.container}>
    <Text style={[styles.text, globalStyles.text]}>{convertPtsToHrs(pts)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: '3%',
    backgroundColor: '#f4f1de', 
    flex: 1
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#81b29a'
  }
});