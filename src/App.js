import React from 'react'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div>
      <h1>Hello Will, I'm AWS Amplify</h1>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
