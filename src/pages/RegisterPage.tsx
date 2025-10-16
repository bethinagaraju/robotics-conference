import React from 'react';
import ConferenceRegistration from '../components/ConferenceRegistration';
import Header from '../components/Header';
import WhopRegisterPage from '../components/WhopRegisterPage';
// import BiotechAgenda from '../components/BiotechAgenda';

function RegisterPage() {
  return (
    <div>
        <Header />
      {/* <BiotechAgenda /> */}
      {/* <ConferenceRegistration /> */}
      <WhopRegisterPage />
      <RegisterPage />
    </div>
  );
}

export default RegisterPage;
