import React from 'react';
import LikedListComponent from '../components/likeBlockList/like_block_list';
import FROM_LIST from '../constants/from_list';

export default function LikedMoviesListPage({setShowDetail}) {
  return (
    <div>
      <h2>Liked Movies List</h2>
      <LikedListComponent fromList={FROM_LIST.likedList} setShowDetail={setShowDetail}/>
    </div>
  );
}