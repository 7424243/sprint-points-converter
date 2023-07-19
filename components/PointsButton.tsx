import { Button } from 'react-native';
import { IPointsButtonProps } from './types';

export const PointsButton = ({
  title, 
  setPoints, 
  value
}: IPointsButtonProps) => <Button title={title} onPress={() => setPoints(value)}/>;