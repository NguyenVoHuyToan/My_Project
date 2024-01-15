// useData.js
import { useState, useEffect } from 'react';

const useData = (endpoint, requiresAuth = false) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {};

        if (requiresAuth) {
          const token = localStorage.getItem('token');

          if (!token) {
            console.error('No authentication token available');
            return;
          }

          headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(endpoint, {
          method: 'GET',
          headers,
        });

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [endpoint, requiresAuth]);

  return data;
};

export default useData;
