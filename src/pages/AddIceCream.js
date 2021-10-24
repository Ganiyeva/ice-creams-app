import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

const AddIceCream = () => {
  
  let history = useHistory();

  const [image, setImage] = useState(0);
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const hendleSubmit = (event) => {
    event.preventDefault();

    const newObj = {
      iceCream: {
        id: image,
        name
      },
      quantity: count,
      price,
      description
    };

    fetch('http://localhost:8000/menuData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    }).then(response => {
      toast.success('Post qo`shildi!', {
        position: "bottom-right",
        autoClose: 2000
      });
      history.push('/');
    });

      setImage('');
      setName('');
      setCount('');
      setPrice('');
      setDescription('');
  };

    return (
      <div className="ice-content">
        <div className="box">
          <form onSubmit ={hendleSubmit}>
            <label for="image" className="lable"> Choose image </label>
            <input type="number" className="input" id="image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
            <label for="name" className="lable"> Ice cream name </label>
            <input type="text" className="input" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <label for="pcs" className="lable"> Quantity </label>
            <input type="number" className="input" id="pcs" value={count} onChange={(e) => {setCount(e.target.value)}}/>
            <label for="price" className="lable"> Price </label>
            <input type="number" className="input" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
            <label for="text" className="lable"> Description </label>
            <input type="text" className="input" id="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <button type="submit" className="btn-submit"> Add </button>
          </form>
        </div>
      </div>
    );
}

export default AddIceCream;