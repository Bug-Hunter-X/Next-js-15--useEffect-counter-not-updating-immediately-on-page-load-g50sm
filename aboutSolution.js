```javascript
// pages/aboutSolution.js
import {useLayoutEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>The count is: {count}</p>
    </div>
  );
}
```