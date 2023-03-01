import { useEffect, useState } from "react";
import { Summary } from "../../components/Summary";
import { TableRow } from "../../components/TableRow";
import { API } from "../../services/axiosProvider";
import randomNumber from "../../util/randomNumber";
import "./style.scss";

export function Home() {
  const [cart, setCart] = useState([]);

  const productObject = {
    product: "Produto",
    category: "Categoria",
    price: randomNumber(90, 1200),
    quantity: 1
  }

  const fetchData = () => {
    API.get("/cart").then((response) => setCart(response.data));
  }

  const handleAddItem = () => {
    console.log("handleAddItem - Send request to API!");

    API.post("/cart", productObject).then(response => {
      console.log(response);
      fetchData();
    });
  }

  const handleRemoveItem = (item) => {
    console.log("handleRemoveItem - Send request to API!");

    API.delete(`/cart/${item._id}`).then(response => {
      console.log(response);
      fetchData();
    })
  }

  const handleUpdateItem = (item, action) => {
    console.log("handleUpdateItem - Send request to API!, ", item);
    let newQuantity = item.quantity;

    if(action === "increase") {
      newQuantity += 1;
    }

    if(action === "decrease") {
      if (newQuantity === 1) return;

      newQuantity -= 1;
    }

    const newData = {...item, quantity: newQuantity};
    delete newData._id;

    API.put(`/cart/${item._id}`, newData).then(response => {
      console.log(response);
      fetchData();
    });
  }

  const getTotal = () => {
    let sum = 0;

    for (let item of cart){
      sum += item.price * item.quantity;
    }

    return sum;
  }

  const cartTotal = getTotal();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="Home">
      <div className="page-title">Seu carrinho</div>
      <div className="content">
        <section>
          <button onClick={handleAddItem}>Adicionar produto</button>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preco</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => <TableRow key={item._id} data={ item } handleRemoveItem={handleRemoveItem}  handleUpdateItem={handleUpdateItem}/>)}
              {cart.length === 0 && 
                <tr>
                  <td colSpan={'5'} style={{textAlign: 'center', color: 'red'}}>
                    Nao existem produtos no seu carrinho.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </section>
        <aside>
          <Summary total={cartTotal}/>
        </aside>
      </div>
    </main>
  );
}
