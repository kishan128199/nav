import React, { useEffect } from "react";
import { useState } from "react";
import "../product/productStyle.css";
import productData from "./ProductData";

export default function Product() {
  let [index, setIndex] = useState(0);
  let [isSuffle, setIsSuffle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index == productData.length - 1) {
        setIsSuffle(isSuffle ? false : true);
        setIndex(() => {
          index = 1;
        });
      } else {
        setIndex(index++);
        console.log(index);
      }
    }, 2000);
    console.log(isSuffle);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="product-section">
        <div className="product-title">
          <p>Work</p>
          <div className="product-line"></div>
        </div>
        <div className="product-contnr">
          {productData.map((data, ind) => {
            return (
              <div className="product-img-group" key={ind}>
                <>
                  {isSuffle ? (
                    <>
                      <img
                        src={require(`../../img/product-img/${data.img}`)}
                        alt=""
                        className={
                          index > ind
                            ? " product-img visible"
                            : "product-img hide"
                        }
                      />
                      <img
                        src={require(`../../img/product-img/${data.imgSuffle}`)}
                        alt=""
                        className={
                          index > ind
                            ? "product-img suffle hide"
                            : "product-img suffle visible"
                        }
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={require(`../../img/product-img/${data.imgSuffle}`)}
                        alt=""
                        className={
                          index > ind
                            ? " product-img visible"
                            : "product-img hide"
                        }
                      />
                      <img
                        src={require(`../../img/product-img/${data.img}`)}
                        alt=""
                        className={
                          index > ind
                            ? "product-img suffle hide"
                            : "product-img suffle visible"
                        }
                      />
                    </>
                  )}
                </>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
