import "./Product.css";
import axios from "axios";
import imagenotfound from '../Images/imagenotfound.jpg';
import React, { useState, useEffect } from "react";
import ProdDesp from './ProdDesp'
import isLoadingGif from "./../Images/isLoading.gif"
const Product = () => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState();
    const [view, setView] = useState(false);

    const [pdata, setPdata] = useState();
    console.log('data', pdata)

    const setProd = (pro) => {
        setView(true);
        // if (!view) {
        //     document.body.style.overflow = "hidden"
        // }
        if (view === false) { document.body.style.overflow = "hidden" }
        setPdata(pro);

    };
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products`).then((res) => {
            const responseData = res.data;
            setProducts(responseData);
            // console.log(responseData)
        });
    }, []);
    return (
        <>
            <div className="card" >
                {products && products.slice(0, 21).map(pro => {
                    return (
                        <div className="cardItem" key={pro.id} >
                            <div className="container">
                                <div key={pro.id} className="prodComp" >
                                    {isLoading && <img className="productImage" src={isLoadingGif} alt="Loading..." />}
                                    <img className="productImage" src={pro.images[1] ? pro.images[1] : imagenotfound} onLoad={() => setLoading(false)} />
                                </div>
                            </div>
                            <div className="prodesc"> <span className="protitle">{pro.title}</span><br>
                            </br><span className="proprice"><b>${pro.price}</b> /mo</span>
                                {/* <a href={pro.images} target="_blank"> */}
                                {/* <a href={pro.images[0]}>View Product</a> */}
                                <div display="flex">
                                    <button className="button" onClick={() => setProd(pro)}><b> View Product</b></button>
                                    <button className="button_cart" onClick={() => setProd(pro)}><b> Add to Cart</b> </button>
                                </div>
                                {/* <h5>{pro.description}</h5> */}

                            </div>

                        </div>

                    )
                })
                }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {
                    view ?
                        <ProdDesp data={pdata} setView={setView} />
                        // console.log('object', data)
                        : ''
                }


            </div>
        </>
    )
};
export default Product;