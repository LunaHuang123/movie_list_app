import { SORT_TYPE, SORT_BUTTON_TYPE } from './constants'

function getSortFunction(type) {
  switch (type) {
    case (SORT_TYPE.titleAscend): 
      return (a, b) => a.title.localeCompare(b.title);
    case (SORT_TYPE.titleDecend): 
      return (a, b) => b.title.localeCompare(a.title);
    case (SORT_TYPE.voteAverageAscend):
      return (a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average);
    case (SORT_TYPE.voteAverageDescend):
      return (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average);
    case (SORT_TYPE.voteCountAscend):
      return (a, b) => parseInt(a.vote_count) - parseInt(b.vote_count);
    case (SORT_TYPE.voteCountDescend):
      return (a, b) => parseFloat(b.vote_count) - parseFloat(a.vote_count);
    case (SORT_TYPE.releaseDateAscend):
      return (a, b) => compareDate(a, b);
    case (SORT_TYPE.releaseDateDescend):
      return (a, b) => compareDate(b, a);
    default:
      return () => 0;
  }
}

function mapOptionToType (option) {
  switch (option.type) {
    case (SORT_BUTTON_TYPE.title):
      return option.isAscending? SORT_TYPE.titleAscend: SORT_TYPE.titleDecend;
    case (SORT_BUTTON_TYPE.release_date):
      return option.isAscending? SORT_TYPE.releaseDateAscend: SORT_TYPE.releaseDateDescend;
    case (SORT_BUTTON_TYPE.vote_count):
      return option.isAscending? SORT_TYPE.voteCountAscend: SORT_TYPE.voteCountDescend;
    case (SORT_BUTTON_TYPE.average_score):
      return option.isAscending? SORT_TYPE.voteAverageAscend: SORT_TYPE.voteAverageDescend;
    default:
      return '';
  }
}

function getParsedDate(date) {
  try {
    let i = date.indexOf('-');
    let j = date.indexOf('-', i+1);
    let year = parseInt(date.substring(0, i));
    let month = parseInt(date.substring(i+1, j));
    let day = parseInt(date.substring(j+1));
    if (j <= i || isNaN(year) || isNaN(month) || isNaN(day)) throw Error('could not recognize date format');
    return {year, month, day};
  } catch (err) {
    console.log(err);
    return {year: 1, month: 1, day: 1};
  }
}

function compareDate(a, b) {
  const dateA = getParsedDate(a.release_date);
  const dateB = getParsedDate(b.release_date);
  return (
    dateA.year === dateB.year
    ?dateA.month === dateB.month
      ?dateA.day - dateB.day
      :dateA.month - dateB.month
    :dateA.year - dateB.year
  );
}

export { getSortFunction };
export default function getSortFunctionFromOption(option) {
  return getSortFunction(mapOptionToType(option));
};

