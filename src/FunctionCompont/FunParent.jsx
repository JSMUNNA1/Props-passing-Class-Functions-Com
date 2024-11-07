import { useEffect, useState } from "react";
import FunChild from "./FunChid";

const FunParent = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState("munna");
  }, []);
  function fun() {
    setState("ChangedName");
  }
  return (
    <>
      <h1>{state}</h1>

      <FunChild name={state} age={22} fun={fun}></FunChild>
    </>
  );
};
export default FunParent;
