import React from "react";
import Styles from './header.module.scss';

export default function Header(){
    return (
        <div className={Styles.Header}>
                <ul>
                    <a href="/">Shop</a>
                    <a href="/cart">Shoping Cart</a>
                </ul>
        </div>
    )
}