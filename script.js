const firstName = "Raisin";
const lastName = "Girl";
const age = "get better with age";
const birthPlace = "Jupiter";
const hobby = "run naked through the streets without my mask on";
const favouriteHolidayPlace = "Strawberry Fields.. every day";

const textAddedToHtml = document.getElementById('text');

textAddedToHtml.innerHTML = `I'm ${firstName} ${lastName}, like wine, I ${age}. As the story goes, I was born on ${birthPlace}. My hobby is to ${hobby}. I do not remember what going on holiday is, but the best place to go will always be ${favouriteHolidayPlace}.`

console.log(`I'm ${firstName} ${lastName}, like wine, I ${age}. As the story goes, I was born on ${birthPlace}. My hobby is to ${hobby}. I do not remember what going on holiday is, but the best place to go will always be ${favouriteHolidayPlace}.`);
