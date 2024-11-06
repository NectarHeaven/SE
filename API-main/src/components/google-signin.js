import React, { useEffect } from 'react';

const GoogleSignInButton = () => {
  // Handle the credential response from Google
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    // TODO: Send the JWT to your backend server for verification
  };

  useEffect(() => {
    // Ensure that the Google API is available
    if (window.google) {
      // Initialize the Google Sign-In client
      window.google.accounts.id.initialize({
        client_id: '186582209770-5dimkv22me3t08rihhcrfo4k4dio5bge.apps.googleusercontent.com',  // Replace with your actual Client ID
        callback: handleCredentialResponse,
        ux_mode: 'popup',  // Use 'popup' or 'redirect' depending on your preference
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      // Render the Google Sign-In button
      window.google.accounts.id.renderButton(
        document.getElementById('google-sign-in-button'),
        {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
        }
      );

      // Optionally, prompt the user to select an account
      // window.google.accounts.id.prompt();
    }
  }, []);

  return (
    <div>
      <div id="google-sign-in-button"></div>
    </div>
  );
};

export default GoogleSignInButton;
