import ChampionType from '../types/ChampionType.ts';

export const getTftCode = (slot: (ChampionType | null)[]): string => {
  const championsOnDesk = slot.filter(
    (champion: ChampionType | null) => champion !== null,
  );

  championsOnDesk.sort(
    (champion1: ChampionType, champion2: ChampionType) =>
      +champion1.price - +champion2.price,
  );

  const indexArray = championsOnDesk.map(
    (champion: ChampionType) => champion.id,
  );

  const finalArray = [...new Set(indexArray)];

  if (finalArray.length > 10) {
    while (finalArray.length > 10) {
      finalArray.pop();
    }
  } else if (finalArray.length < 10) {
    while (finalArray.length < 10) {
      finalArray.push('00');
    }
  }

  return '01' + finalArray.join('') + 'TFTSet13';
};
