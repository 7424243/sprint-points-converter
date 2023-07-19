export interface IPointsButtonProps {
  title: string;
  setPoints: (value: number | null) => void;
  value: number | null;
  activeValue: number | null;
  setActiveValue: (value: number | null) => void;
};