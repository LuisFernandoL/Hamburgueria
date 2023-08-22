import { useState } from "react";
import imgSearch from "../../assets/button-disable.png";
import { Modal } from "../Modal/index";
import { StyledContainer } from "../../styles/grid";
import { StyleHeader } from "./StyleHeader";
import { BsCartFill } from "react-icons/bs";

export const Header = ({ setInputSearch, carts, setCarts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyleHeader>
      <StyledContainer className="DivHeader">
        <span>
          <h1>Burguer Kenzie</h1>
          <button onClick={() => setIsOpen(true)}>
            <BsCartFill />
          </button>
        </span>
        <div className="divInput">
          <form onSubmit={searchSubmit}>
            {isOpen ? (
              <Modal carts={carts} setCarts={setCarts} setIsOpen={setIsOpen}>
                {" "}
                teste
              </Modal>
            ) : null}

            <input
              type="text"
              placeholder="Buscar..."
              src={imgSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </form>
        </div>
      </StyledContainer>
    </StyleHeader>
  );
};
