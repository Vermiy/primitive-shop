import React, {useState, useEffect} from "react";
import Styles from './home.module.scss';
import Header from '../../components/header/header';
import DrugPreview from './assets/capsule.jpg';

import axios from "axios";

// const Menu: React.FC = () => {

interface Shop {
    shop_id: number;
    shop_name: string;
}

interface ShowItems {
    Items: [],
}

const Menu: React.FC = () => {



    // state = {
    //     stores: [],
    // }

    const [shops, setShops] = useState<Shop[]>([]);

    const [activeShop, setActiveShop] = useState<string>('');

    useEffect(() => {
        axios.get<Shop[]>('http://localhost:3001/stores')
        .then(response => {
            setShops(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching stores:', error);
        });
    }, []);

    const showShopName = (shopName: string) => {
        // Update activeShop state when a shop is clicked
        setActiveShop(shopName);
        console.log(shopName);
    }
    

    return (
        <div className={Styles.Menu}>
           <h1>Shops</h1>
                <div className={Styles.Menu__ShopList}>
                {shops.map(shop => (
                  <button key={shop.shop_id} onClick={() => console.log(shop.shop_name)}>
                  {shop.shop_name}
              </button>
                ))}
                </div>
        </div>
    )
  
}

interface Props {
    DrugName : string;
}

const DrugItem: React.FC<Props> = ({DrugName}) => {

    const tmp_price = 50;

    return (
        <div className={Styles.DrugItem}>
                <div> <img src={DrugPreview} alt="Drug Image" />  </div>
                <div> 
                    <h1>{DrugName}</h1> 
                    <h4>{tmp_price}$</h4> 
                </div>
                <div className={Styles.CenterButton}>  
                    <button> Add to cart</button> 
                </div>
        </div>
    )
}

const DrugsList: React.FC = () => {
    return(
        <div className={Styles.DrugsList}>
            <div className={Styles.GridWrapper}>
                <DrugItem DrugName="Paracetamol"/>
                <DrugItem DrugName="Paracetamol"/>
                <DrugItem DrugName="Paracetamol"/>
                <DrugItem DrugName="Paracetamol"/>
                <DrugItem DrugName="Paracetamol"/>
            </div>
        </div>
    )
}

export default function Home(){
    return(
        <>
            <Header />
                <div className={Styles.Home}>
                    <Menu />
                    <DrugsList />
                </div>
        </>
    )
}