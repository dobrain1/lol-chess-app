import BuildDataType from '../types/BuildDataType.ts';

export const getBuilds = (): BuildDataType[] => {
  return (
    (JSON.parse(
      localStorage.getItem('buildData') as string,
    ) as BuildDataType[]) || []
  );
};
