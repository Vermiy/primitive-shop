import React, {useState} from "react";
import Styles from './cart.module.scss';

import Header from "../../components/header/header";

import TMP_PNG from './assets/capsule.jpg';
import axios from "axios";


const UserInformation: React.FC = () => {
    return(
        <div className={Styles.UserInformation}>
            <div className={Styles.InputItem}>
                <h1>Name</h1>
                <input />
            </div>
            <div className={Styles.InputItem}>
                <h1>Email</h1>
                <input />
            </div>
            <div className={Styles.InputItem}>
                <h1>Phone</h1>
                <input />
            </div>
            <div className={Styles.InputItem}>
                <h1>Adress</h1>
                <input />
            </div>
        </div>
    )
}

interface OrderInformation {
    totalPrice: number;
    // Add other properties as needed
  }
  
  // Define initial state
  const initStore: OrderInformation = {
    totalPrice: 0,
    // Initialize other properties here
  };
  


const AppStateContext = React.createContext<{
    state: OrderInformation;
    setState: React.Dispatch<React.SetStateAction<OrderInformation>>;
  }>({
    state: initStore,
    setState: () => {},
  });

const StorageItem: React.FC = () => {

    const increaseCounter = () => {
        setItemAmount(prevAmount => prevAmount + 1);
        setState(prevState => ({
            ...prevState,
            totalPrice: prevState.totalPrice + itemPrice,
        }));
    };

    const decreaseCounter = () => {
        if (itemAmount > 1) {
            setItemAmount(prevAmount => prevAmount - 1);
            setState(prevState => ({
                ...prevState,
                totalPrice: prevState.totalPrice - itemPrice,
            }));
        }
    };

    const recalculatePrice = () => {

    }

    const [itemAmount, setItemAmount] = useState(1);
    const [itemPrice, setItemPrice] = useState(100);
    const {state, setState} = React.useContext(AppStateContext);


    return(
        <div className={Styles.StorageItem}>
            <div className={Styles.StorageItem__image}>
                <img src={TMP_PNG} alt="Product" />
            </div>

            <div>
                <div className={Styles.StorageItem__value}>
                    <h1>Paracetamol</h1>
                    <h2>{itemPrice * itemAmount} $</h2>
                </div>
                <div className={Styles.StorageItem__counter}>
                    <h3>{itemAmount}</h3>
                    <button onClick={increaseCounter}>More</button>
                    <button onClick={decreaseCounter}>Less</button>
                </div>
            </div>
        </div>
    )
}

const Storage: React.FC = () => {

    const [itemAmount, setItemAmount] = useState(5);

    return(
        <div className={Styles.Storage}>
                {Array.from({length: itemAmount}).map((_, index) => (
                    <StorageItem key={index}/>
                ))}
        </div>
    )
}

export default function ShopingCart(){

    const submitOrder = () => {
        // console.log()
       // axios.post('http://localhost:3001/new-order/');
       console.log(userInfo);
       if (userInfo.userAddress === '') {
        console.log('Adress is missing');
       }
    }

    const [state, setState] = useState<OrderInformation>(initStore);

    const [userInfo, setUserInfo] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userAddress: '',
    });
    
    return (
        <AppStateContext.Provider value={{ state, setState }}>
        <div>
            <Header />

                <div className={Styles.Submit}>
                    <h1>Price: {state.totalPrice}$</h1>
                    <button onClick={submitOrder}>Submit</button>
                </div>

                <div className={Styles.ShopingCart}>
                    <UserInformation />
                    <Storage />
                </div>
        </div>
        </AppStateContext.Provider>
    )
}