import ChampionType from '../types/ChampionType.ts';
import BuildDataType from '../types/BuildDataType.ts';

export const getBuildData = (
  slot: (ChampionType | null)[],
): BuildDataType[] => {
  const validChampions = slot.filter((champ) => champ !== null);

  let storedData: BuildDataType[] =
    JSON.parse(<string>localStorage.getItem('buildData')) || [];

  validChampions.sort(
    (champion1: ChampionType, champion2: ChampionType) =>
      +champion1.price - +champion2.price,
  );

  const uniqueChampions: (ChampionType | null)[] = [...new Set(validChampions)];

  if (uniqueChampions.length > 10) {
    while (uniqueChampions.length > 10) {
      uniqueChampions.pop();
    }
  } else if (uniqueChampions.length < 10) {
    while (uniqueChampions.length < 10) {
      uniqueChampions.push(null);
    }
  }

  const newEntry: BuildDataType = {
    id: Date.now(),
    fullList: slot,
    uniqueList: uniqueChampions,
  };

  storedData.push(newEntry);

  return storedData;
};
