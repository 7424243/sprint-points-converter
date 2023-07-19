export const convertPtsToHrs = (points: number | null): string => {
  switch (points) {
    case 1:
      return '0 - 6 Hours';
    case 2:
      return '7 - 12 Hours';
    case 3:
      return '13 - 18 Hours';
    case 5:
      return '19 - 30 Hours';
    case 8:
      return '31 - 48 Hours';
    case 13:
      return '49 - 78 Hours';
    default:
      return 'Task needs to be broken down and refined.';
  };
};