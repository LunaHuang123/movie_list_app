import React from 'react';
import BlockedListComponent from '../components/likeBlockList/like_block_list';
import FROM_LIST from '../constants/from_list';

export default function BlockedMoviesListPage({setShowDetail}) {
  return (
    <div>
      <h2>Blocked Movies List</h2>
      <BlockedListComponent fromList={FROM_LIST.blockedList} setShowDetail={setShowDetail}/>
    </div>
  );
}