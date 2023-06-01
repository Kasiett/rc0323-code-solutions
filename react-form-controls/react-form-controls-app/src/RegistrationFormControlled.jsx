import { useState } from 'react';

function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username: username, password: password });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign up!</button>
      </form>
    </>
  );
}

export default RegistrationFormControlled;
