import "./style.scss";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

export function TableRow({ data, handleRemoveItem, handleUpdateItem}) {
    return (
        <tr>
            <td>
                <div className="product">
                    <img src="https://images.unsplash.com/photo-1676901594376-03912b93660e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="produto"/>
                    <div className="info">
                        <div className="name">{data.product}</div>
                        <div className="category">{data.category}</div>
                    </div>
                </div>  
            </td>
            <td>R$ {data.price}</td>
            <td>
                <div className="quanty">
                    <button onClick={() => {
                        handleUpdateItem(data, "increase");
                    }}>
                        <FiPlus/>
                    </button>
                    <span>{data.quantity}</span>
                    <button onClick={() => {
                        handleUpdateItem(data, "decrease");
                    }}>
                        <FiMinus/>
                    </button>
                </div>
            </td>
            <td>R$ {data.price * data.quantity}</td>
            <td>
                <button className="remove" onClick={() => {
                    handleRemoveItem(data)
                }}>
                    <FiX/>
                </button>
            </td>
        </tr>
    )
}