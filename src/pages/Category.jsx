import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        //get ref
        const listingRef = collection(db, listings);
        //create query
        const q = query(
          listingRef,
          where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc', limit(10))
        );
        //exec query
        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
          console.log(doc);
        });
      } catch (error) {}
    };

    fetchListings();
  });

  return <div>Category</div>;
}

export default Category;
