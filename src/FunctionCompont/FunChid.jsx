import FunGrandChild from "./FunGrandChild";

export default function FunChild({ name, age, fun }) {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={fun}>Change</button>
      <FunGrandChild fun={fun}></FunGrandChild>
    </>
  );
}
