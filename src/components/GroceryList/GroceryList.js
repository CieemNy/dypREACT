 import React, {useState, useRef, useEffect} from "react";
 import { getList, setItem } from '../../services/list'
 import './GroceryList.css';
 
 export default function GroceryList(){
    const [alert, setAlert] = useState(false);
    const [list, setList] = useState([]);
    const [itemInput, setItemInput] = useState('');
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        if(list.length && !alert){
        return;
        }
        getList()
        .then(items => {
            if(mounted.current){
            setList(items)
            }
        })
        return () => mounted.current = false;
    }, [alert, list])

    useEffect(() => {
        if(alert){
        setTimeout(() => {
            if(mounted.current){
            setAlert(false);
            }
        }, 1000)
        }
    }, [alert])

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(itemInput)
        .then(() => {
        if(mounted.current){
            setItemInput(' ');
            setAlert(true);
        }
        })
    };

    return(
        <div className="wrapper">
            <h1>My Grocery List</h1>
            <ul>
                {list.map(item => <li key={item.item}>{item.item}</li>)}
            </ul>
            {alert && <h2>Submit Successful!</h2>}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>New Item</p>
                    <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
 }