import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc,desc1} = item;
        return (
          <article key={id} className="menu-item">
           <div> <img src={img} alt={title} className="photo"/>
            <div className="item-info">
              <header>
                <h3>{title}</h3>
              </header>
              </div>
              <div>
              <button style= {{background:'rgb(19, 18, 18)',color:'white',borderWidth:'0',fontWeight:'bold',width:'150px',textAlign:"left",padding:'6px',borderRadius:'10px',height:'50px'}} className="item-text">{desc}<br/>{desc1}</button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;