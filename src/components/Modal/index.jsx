import { useEffect, useRef } from "react";
import { SumItensCar } from "../SumItensCar";
import { ItensModal } from "./ItensModal";
import { ModalConteiner } from "./ModalConteiner";

export const Modal = ({ carts, setCarts, setIsOpen }) => {
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const removeItem = (itemId) => {
    if (confirm("Deseja mesmo remover o item do seu carrinho ?")) {
      setCarts(carts.filter((cart) => cart.id !== itemId));
    }
  };

  return (
    <ModalConteiner role="dialog">
      <section ref={modalRef}>
        <header>
          <p>Carrinho de compras</p>
          <button ref={buttonRef} onClick={() => setIsOpen(false)}>
            X
          </button>
        </header>
        <ItensModal removeItem={removeItem} carts={carts} />
        <SumItensCar carts={carts} />
      </section>
    </ModalConteiner>
  );
};
