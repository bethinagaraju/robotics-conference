import React from 'react';
import ConferenceRegistration from '../components/ConferenceRegistration';
import Header from '../components/Header';
// import BiotechAgenda from '../components/BiotechAgenda';

function RegisterPage() {
  return (
    <div>
        <Header />
      {/* <BiotechAgenda /> */}
      <ConferenceRegistration />
    </div>
  );
}

export default RegisterPage;
