import React from 'react';
import BlockedListComponent from '../components/likeBlockList/like_block_list';
import FROM_LIST from '../constants/from_list';
import './page.css';

export default function BlockedMoviesListPage({setShowDetail}) {
  return (
    <div className='likeblock-page'>
      <h2>Blocked Movies List</h2>
      <BlockedListComponent fromList={FROM_LIST.blockedList} setShowDetail={setShowDetail}/>
    </div>
  );
}