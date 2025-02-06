import { useState} from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
 
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <div>
        <button onClick={sumar}>+</button>
        {contador}
        <button onClick={restar}>-</button>
      </div>
    </>
  );
};
