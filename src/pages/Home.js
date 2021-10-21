import { useEffect, useState } from "react";

const Loader = () => {
  return(
    <div className="load-container">
      <div className="icecream">
        <div className="flavor">
          <div className="flavours"></div>
        </div>
      <div className="stick"></div>
      </div>
    </div>
  );
};

function Home (){
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/menuData').then(res => res.json()).then(data => {
          setArr(data);
          setIsLoading(false);
        });
      }, 3000);
    }, []);

    const hendleDelete = (id) => {
      fetch(`http://localhost:8000/menuData/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log(id + " id li post serverdan o`chirildi");
      });

      const newArr = arr.filter((el) => el.id !== id);
      setArr(newArr);
    };

    const iceList = arr.map(el => {
      return(
        <div className="ice-card" key={el.id}>
          <img className="img" src={`img/ice-cream-${el.iceCream.id}.svg`} alt={el.iceCream.name} />
          <h4 className="title"> {el.iceCream.name} </h4>
          <span className="sum"> $ {el.price} </span>
          <span className="circle"></span>
          <span className="pcs"> {el.quantity} in stock </span>
          <p className="description"> {el.description} </p>
          <button type="button" className="btn-delete" onClick={() => {hendleDelete(el.id)}}> Delete </button>
        </div>
      )
    })

    return (
      <section>
          {isLoading ? <Loader /> : <div className="hom-content"> <div className="container"> <div className="row">{iceList}</div> </div> </div>}
      </section>
    )
};

export default Home;