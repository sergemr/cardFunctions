let count = 0;
const cardsFunctions = {
  countCards: (card) => {
    // Only change code below this line
    let increment = 0;

    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        increment = 1;
        break;
      case 7:
      case 8:
      case 9:
        increment = 0;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        increment = -1;
        break;
      default:
        increment = 0;
        break;
    }

    count = count + increment;
    let hold = "Hold";
    let bet = "Bet";
    let returnMesg = `${count} ${count > 0 ? bet : hold}`;
 
    return returnMesg;
    // Only change code above this line
  },
};
module.exports = cardsFunctions
//cc(2); cc(3); cc(7); cc('K'); cc('A');

//cc(2); cc(3); cc(4); cc(5); cc(6);
