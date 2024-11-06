// src/OAuth2Callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuth2Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Parse the query string for token data
    const params = new URLSearchParams(window.location.search);
    const token = params.get('code'); // OAuth code in the response

    if (token) {
      console.log('OAuth token:', token);

      // You can also handle the token, like sending it to your backend server
      // for verification and exchanging for user data.

      // Redirect the user or show a success message after logging the token
      // For example, navigate to the homepage
      navigate('/');
    } else {
      console.error('No token found in the response.');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Logging OAuth Response</h2>
    </div>
  );
};

export default OAuth2Callback;
