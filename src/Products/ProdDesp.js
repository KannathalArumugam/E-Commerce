import "../Products/ProDesp.css";
import React from "react";
const ProdDesp = (props) => {
    const { id, images, title, price } = props.data;
    const setView = props.setView;
    console.log("object", id, images);

    // window.scroll = function (setView) {
    //     var hidediv = document.getElementById('div1');
    //     document.onclick = function (div) {
    //         setView(false)
    //         if (div.target.id !== 'div1') {
    //             hidediv.style.display = 'none';
    //         }
    //     }
    // }

    const closebutton = () => {
        document.body.style.overflow = "unset"
        setView(false);

        // useEffect(() => {
        //     setView(true)
        // }, []);
    };
    return (

        <div
            style={{
                minHeight: "100%",
                minWidth: "100%",
                position: "fixed",
                top: "0rem",
                left: "0rem",
                background: "rgba(128, 128, 128, 0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "3"
            }}
        >
            <div key={id} style={{ width: "30rem", height: "30rem" }}>


                <button
                    type="button"
                    className="cancel_button"
                    onClick={() => closebutton()}
                >
                    Close
                </button>
                <img
                    className="productImage"
                    src={images[1] ? images[1] : "imagenotfound"}
                />
                <span className="protitle_style">{title + " - " + "Rs." + price}</span>

            </div>
        </div>
    );
};

export default ProdDesp;
