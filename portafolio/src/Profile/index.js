import React, { useState } from 'react';

function Profile() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>clicks {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  );
}
export default Profile;