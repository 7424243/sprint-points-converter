import { ReactElement, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { PointsButton } from './PointsButton';
import { globalStyles } from '../styles';
import { IButtonContainerProps } from './types';

export const ButtonContainer = ({
    onLayoutRootView, 
    setPts,
}: IButtonContainerProps): ReactElement => {
  const [activeValue, setActiveValue] = useState<number | null>(0);

  return (
    <View 
      style={styles.container} 
      onLayout={onLayoutRootView} 
    >
      <Text style={[styles.text, globalStyles.text]}>Sprint Points</Text>
      <View style={styles.buttonContainer}>
        <PointsButton 
          title='1' 
          setPoints={setPts} 
          value={1} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
        <PointsButton 
          title='2' 
          setPoints={setPts} 
          value={2} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
        <PointsButton 
          title='3' 
          setPoints={setPts} 
          value={3} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
        <PointsButton 
          title='5' 
          setPoints={setPts} 
          value={5} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
        <PointsButton 
          title='8' 
          setPoints={setPts} 
          value={8} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
        <PointsButton 
          title='13' 
          setPoints={setPts} 
          value={13} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
        <PointsButton 
          title='> 13' 
          setPoints={setPts} 
          value={null} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: '3%',
      flex: 2,
      backgroundColor: '#81b29a', 
      zIndex: 99,
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
    buttonContainer: {
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
    },
    text: {
      fontSize: 40,
      textAlign: 'center',
      color: '#f4f1de', 
      marginBottom: 10
    }
  });