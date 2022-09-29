import { SORT_TYPE } from '../components/utils/constants';
import { getSortFunction } from '../components/utils/sort';


function testSorting () {
  let moviesList = [{
    "adult": false,
    "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
    "id": 616037,
    "title": "Thor: Love and Thunder",
    "original_language": "en",
    "original_title": "Thor: Love and Thunder",
    "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "media_type": "movie",
    "genre_ids": [
      14,
      28,
      35
    ],
    "popularity": 4156.973,
    "release_date": "2022-07-06",
    "video": false,
    "vote_average": 6.803,
    "vote_count": 3470
  },
  {
    "adult": false,
    "backdrop_path": "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
    "id": 532639,
    "title": "Pinocchio",
    "original_language": "en",
    "original_title": "Pinocchio",
    "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
    "poster_path": "/h32gl4a3QxQWNiNaR4Fc1uvLBkV.jpg",
    "media_type": "movie",
    "genre_ids": [
      14,
      12,
      10751
    ],
    "popularity": 7483.014,
    "release_date": "2022-09-07",
    "video": false,
    "vote_average": 6.82,
    "vote_count": 535
  },
  {
    "adult": false,
    "backdrop_path": "/nC3IjYhUgZWgfKfFX0ygMigFwgc.jpg",
    "genre_ids": [
      28,
      18,
      36
    ],
    "id": 14537,
    "original_language": "ja",
    "original_title": "切腹",
    "overview": "Down-on-his-luck veteran Tsugumo Hanshirō enters the courtyard of the prosperous House of Iyi. Unemployed, and with no family, he hopes to find a place to commit seppuku—and a worthy second to deliver the coup de grâce in his suicide ritual. The senior counselor for the Iyi clan questions the ronin’s resolve and integrity, suspecting Hanshirō of seeking charity rather than an honorable end. What follows is a pair of interlocking stories which lay bare the difference between honor and respect, and promises to examine the legendary foundations of the Samurai code.",
    "popularity": 14.35,
    "poster_path": "/w7pWcLaYQkbtRUn99K6ome0DblL.jpg",
    "release_date": "1962-09-15",
    "title": "Harakiri",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 672
  }];
  console.log(SORT_TYPE.titleAscend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.titleAscend)).map(a => a.title));
  console.log(SORT_TYPE.titleDecend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.titleDecend)).map(a => a.title));
  console.log(SORT_TYPE.voteAverageAscend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.voteAverageAscend)).map(a => a.vote_average));
  console.log(SORT_TYPE.voteAverageDescend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.voteAverageDescend)).map(a => a.vote_average));
  console.log(SORT_TYPE.voteCountAscend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.voteCountAscend)).map(a => a.vote_count));
  console.log(SORT_TYPE.voteCountDescend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.voteCountDescend)).map(a => a.vote_count));
  console.log(SORT_TYPE.releaseDateAscend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.releaseDateAscend)).map(a => a.release_date));
  console.log(SORT_TYPE.releaseDateDescend);
  console.log(moviesList.map(a => a).sort(getSortFunction(SORT_TYPE.releaseDateDescend)).map(a => a.release_date));
}

export {testSorting};
