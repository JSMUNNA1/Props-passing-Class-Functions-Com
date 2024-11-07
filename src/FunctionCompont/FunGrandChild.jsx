export default function FunGrandChild(fun) {
  return (
    <>
      <button onClick={fun.fun}>ChangeNameUsingGrandChild</button>
    </>
  );
}
