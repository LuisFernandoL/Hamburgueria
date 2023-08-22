import { StyleSumItensCar } from "./StyleSumItensCar";

export const SumItensCar = ({ carts }) => {
  const sumTotal = carts.reduce((acc, sum) => acc + sum.price, 0);

  return (
    <StyleSumItensCar>
      <h2>Total</h2>
      <p>{`R$ ${sumTotal},00`}</p>
    </StyleSumItensCar>
  );
};
