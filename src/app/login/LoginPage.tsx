// pages/LoginPage.tsx
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>Account</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {/* Returning Customer Section */}
        <div style={{ width: '45%' }}>
          <h2>Returning Customer</h2>
          <p>We will send you an email to reset your password.</p>
          <input
            type="email"
            placeholder="Email"
            style={{ width: '100%', padding: '10px', marginTop: '10px', border: '1px solid #ccc' }}
          />
          <button
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
          <a href="#" style={{ marginLeft: '10px', color: 'gray' }}>Cancel</a>
        </div>

        {/* OR Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '10%' }}>
          <span>OR</span>
        </div>

        {/* New Customer Section */}
        <div style={{ width: '45%' }}>
          <h2>New Customer</h2>
          <p>Register with us for a faster checkout, to track the status of your order and more.</p>
          <Link href="/CreateAccountPage">
            <button
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Create an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}