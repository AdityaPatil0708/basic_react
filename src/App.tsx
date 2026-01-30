import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(count + 1);
  }
  function decreasecount(){
    setCount(count - 1);
  }
  function resetcount (){
    setCount(0)
  }

  useEffect(function(){
    setInterval(function(){
      setCount(c => c+1)
    },1000)
  },[]);

  return (
    <div className="bg-amber-500">
   

<h2 className="text-2xl text-black font-bold font-serif animate-pulse"> Hello World  </h2>

    </div>
  );
}

export default App