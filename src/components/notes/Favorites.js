import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from './NoteList';

const Favorites = () => {
  
  useFirestoreConnect([{collection:'notes', where:['favorite', '==', true], orderBy: ['createdAt', 'desc'], storeAs:'favoriteNotes'}])

  const favoriteNotes = useSelector(state => state.firestore.ordered.favoriteNotes);


  return (
      <NoteList notes={favoriteNotes} />
  )
}

export default Favorites;