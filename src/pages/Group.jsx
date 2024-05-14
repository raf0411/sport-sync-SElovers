import React from 'react';
import SearchBar from '../components/search-bar/SearchBar.jsx';
import GroupComponent from '../components/group-component/GroupComponent.jsx';
import { Groups } from '../dummyData.js';

export default function Group() {
  return (
    <div>
      <SearchBar />
      {Groups.map((g) => (
        <GroupComponent key={g.id} group={g} />
      ))}
    </div>
  )
}
