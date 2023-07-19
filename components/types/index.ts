export interface IPointsButtonProps {
  title: string;
  setPoints: (value: number | null) => void;
  value: number | null;
  activeValue: number | null;
  setActiveValue: (value: number | null) => void;
};

export interface IButtonContainerProps {
  onLayoutRootView: () => Promise<void>;
  setPts: (value: number | null) => void;
};

export interface IHoursContainerProps {
  pts: number | null;
};