// pages/CreateAccountPage.tsx
import React from 'react';

const CreateAccountPage =()=>{
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Create an Account</h1>
      <hr style={{ margin: '20px 0' }} />
      <p>Sign up for free account for Khas store</p>

      <form>
        <label style={{ display: 'block', marginTop: '10px' }}>Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}
        />

        <label style={{ display: 'block', marginTop: '10px' }}>Your Email Address</label>
        <input
          type="email"
          placeholder="Your Email Address"
          style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}
        />

        <label style={{ display: 'block', marginTop: '10px' }}>Your Last Name</label>
        <input
          type="text"
          placeholder="Your Last Name"
          style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}
        />

        <label style={{ display: 'block', marginTop: '10px' }}> YOUR PASSWORD</label>
        <input
          type="text"
          placeholder="Your Last Name"
          style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '20px',
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Create an Account
        </button>
      </form>
    </div>
  );
}
export default CreateAccountPage;