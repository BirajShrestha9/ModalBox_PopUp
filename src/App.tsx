import { useState } from "react";

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cName, setCName] = useState("");
  function changeCName() {
    console.log("how are you");
    setIsOpen(false);
  }
  return (
    <div>
      <div className="cName">
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere
          laborum veniam beatae earum facilis libero unde animi similique ut
          voluptatibus nihil, quae quod autem officia fugiat voluptates
          reiciendis aliquam. beatae earum facilis libero unde animi similique
          ut voluptatibus nihil, quae quod autem officia fugiat voluptates
          reiciendis aliquam.
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere
          laborum veniam beatae earum facilis libero unde animi similique ut
          voluptatibus nihil, quae quod autem officia fugiat voluptates
          reiciendis aliquam. beatae earum facilis libero unde animi similique
          ut voluptatibus nihil, quae quod autem officia fugiat voluptates
          reiciendis aliquam.
        </p>
      </div>
      <button className="openButton" onClick={() => setIsOpen(!isOpen)}>
        Click Me
      </button>
      {isOpen && (
        <div className="clickHere">
          <div
            className="helloClick"
            onClick={() => {
              setIsOpen(false);
            }}
          ></div>
          <div className="modalBox">
            <div className="header">
              <h1>Modal Header</h1>
              <button
                className="closeButton"
                onClick={() => {
                  setIsOpen(!isOpen);

                  setCName("helloClick");
                }}
              >
                &#10005;
              </button>
            </div>

            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              facere laborum veniam beatae earum facilis libero unde animi
              similique ut voluptatibus nihil, quae quod autem officia fugiat
              voluptates reiciendis aliquam. beatae earum facilis libero unde
              animi similique ut voluptatibus nihil, quae quod autem officia
              fugiat voluptates reiciendis aliquam.
            </p>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              facere laborum veniam beatae earum facilis libero unde animi
              similique ut voluptatibus nihil, quae quod autem officia fugiat
              voluptates reiciendis aliquam. beatae earum facilis libero unde
              animi similique ut voluptatibus nihil, quae quod autem officia
              fugiat voluptates reiciendis aliquam.
            </p>

            <button className="cancelbtn">Cancel</button>
            <button className="submitbtn">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
