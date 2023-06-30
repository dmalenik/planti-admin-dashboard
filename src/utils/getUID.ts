const getUID = (units: number): string[] => {
  const arr: string[] = [];

  for (let i = 1; i <= units; i++) {
    arr.push(crypto.randomUUID());
  }

  return arr;
};

export default getUID;
