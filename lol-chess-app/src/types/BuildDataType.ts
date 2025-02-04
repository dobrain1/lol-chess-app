import ChampionType from './ChampionType.ts';

export default interface BuildDataType {
  id: number;
  fullList: (ChampionType | null)[];
  uniqueList: (ChampionType | null)[];
}
