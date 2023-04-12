export const formatName = (name: string) => {
  const words = name.split('-');
  return words.reduce((acc, cur, index) => {
    acc = acc + cur.charAt(0).toUpperCase() + cur.slice(1);
    if (index !== words.length - 1) {
      acc += ' ';
    }
    return acc;
  }, '');
};
