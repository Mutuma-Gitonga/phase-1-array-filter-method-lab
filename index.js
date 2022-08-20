// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];



const findMatching = (driver, string) => {
  return driver.filter(x => {
    return x.toLowerCase() === string.toLowerCase();
  });
}


const fuzzyMatch = (driver, string) => {
  return driver.filter(x => {
    return (
      x.startsWith(string) &&
      x.charAt(x.length-1) !== string &&
      !x.substring(1, x.length-1).includes(string)
    );
  });
} 


const matchName = (driver, string) => {
  return driver.filter(x => {
    return x.name === string;
  });
}