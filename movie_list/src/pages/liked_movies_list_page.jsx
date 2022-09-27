import React from 'react';
import LikedListComponent from '../components/likeBlockList/like_bock_list';
import FROM_LIST from '../constants/from_list';

export default function LikedMoviesListPage() {
  return (
    <div>
      <h2>Liked Movies List</h2>
      <LikedListComponent fromList={FROM_LIST.likedList}/>
    </div>
  );
}