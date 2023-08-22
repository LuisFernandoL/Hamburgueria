import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { CardProducts } from "../../components/CardProducts";
import { FeedMain } from "./Feed";
import { StyledContainer } from "../../styles/grid";

export const Feed = () => {
  const [products, setProdcts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputsearch, setInputsearch] = useState("");
  const [carts, setCarts] = useState([]);

  const addcart = (productId) => {
    const product = products.find((item) => item.id === productId);
    const producFindCart = carts.find((item) => item.id === productId);
    if (!producFindCart) {
      setCarts([...carts, product]);
    } else {
      console.log("alert");
    }
  };

  const filterProducts = products.filter((product) =>
    product.name.toUpperCase().includes(inputsearch.toUpperCase())
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        setProdcts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header
        addcart={addcart}
        setCarts={setCarts}
        carts={carts}
        setInputSearch={setInputsearch}
      />
      <FeedMain>
        <StyledContainer>
          <ul>
            {filterProducts.map((product) => (
              <CardProducts addcart={addcart} key={product.id} {...product} />
            ))}
          </ul>
        </StyledContainer>
      </FeedMain>
    </>
  );
};
