import React from "react";

function Bicycles(props) {
  return (
    <div className="product">
      <div className="container">
        <div className="product-inner">
          {props.product.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="card-title">
                  <h3>{item.name}</h3>
                </div>
                <div className="card-proc">
                  <div className="card-proc__buttons">
                    <button>-</button>
                    <input type="text" value={0} />
                    <button>+</button>
                  </div>
                  <div className="card-proc__price">
                    <h3>{item.price} $</h3>
                  </div>
                </div>
                <button id="buy-Button">Buy now</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bicycles;
