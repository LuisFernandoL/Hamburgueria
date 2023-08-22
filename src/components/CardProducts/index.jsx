import { StyleCardProducts } from "./CardProducts";

export const CardProducts = ({ img, name, category, price, addcart, id }) => {
  return (
    <StyleCardProducts>
      <div className="divImg">
        <img src={img} alt={`Imagem do ${name}`} />
      </div>
      <h2>{name}</h2>
      <span>{category}</span>
      <p>{`R$ ${price},00`} </p>
      <button
        type="button"
        onClick={() => {
          addcart(id);
        }}
      >
        Adicionar
      </button>
    </StyleCardProducts>
  );
};
