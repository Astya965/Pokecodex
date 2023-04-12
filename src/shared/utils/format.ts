const formatName = (name: string) => {
  const words = name.split('-');
  return words.reduce((acc, cur, index) => {
    let capitalizedName = acc + cur.charAt(0).toUpperCase() + cur.slice(1);
    if (index !== words.length - 1) {
      capitalizedName += ' ';
    }
    return capitalizedName;
  }, '');
};

export default formatName;
