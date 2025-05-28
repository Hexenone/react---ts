import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <p>Наш счёт: {count}</p>

        <button onClick={handleIncrement}>+ 1</button>
    </div>
  );
}

export default Counter;