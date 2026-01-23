import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(count + 1);
  }

  useEffect(function () {
    let clock = setInterval(function () {

      setCount(count => count + 1);
    }, 1000);
    
    return function(){
      clearInterval(clock)
    }
  }, []);

  return (
    <div className="text-center text-2xl mt-10">
      <h3>{count}</h3>
      <div className="flex gap-2 justify-center">
        <button
          onClick={increasecount}
          className="hover:cursor-pointer border p-1"
        >
          increase count
        </button>
        <br />
      </div>
    </div>
  );
}

export default App