import FunGrandChild from "./FunGrandChild";

export default function FunChild({ name, age, fun }) {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={fun}>Change</button>
      <FunGrandChild fun={fun}></FunGrandChild>   
      {/* we can also change the props values and also say we can communicate with the parent using CallBack Function and passing the function in Event  */}
    </>
  );
}
