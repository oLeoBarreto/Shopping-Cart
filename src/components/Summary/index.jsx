import "./style.scss";

export function Summary({total}) {
    return (
        <>
            <div className="box">
                <div className="head">Resumo da compra</div>
                <div className="info">
                    <div>
                        <span>Sub-total</span>
                        <span>R${total}</span>
                    </div>
                    <div>
                        <span>Frete</span>
                        <span>R00,00</span>
                    </div>
                    <div>
                        <button className="discount-btn">
                            Adicionar cupom de desconto
                        </button>
                    </div>  
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>R${total}</span> 
                </div>
            </div>
            <button className="buy-btn">Finalizar compra</button>
        </>
    )
}