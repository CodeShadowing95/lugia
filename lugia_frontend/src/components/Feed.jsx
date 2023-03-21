import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  // Get the id of the category in the url each time a category change
  const { categoryId } = useParams();

  // Render each time the appropriate category when categoryId change through url
  useEffect(() => {
    setLoading(true);

    if(categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
  }, [categoryId])
  

  if(loading) return (<Spinner message="We are adding new ideas to your feed..." />);

  return (
    <div className="mt-5">
      {pins && <MasonryLayout pins={pins} /> }
    </div>
  )
}

export default Feed;