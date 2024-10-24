import React from 'react';
import  './creditCardFormStyle.css'
import {useForm} from "react-hook-form";
import {ICard} from "../../models/ICard";
import {joiResolver} from "@hookform/resolvers/joi";
import { cardResolver } from '../../validators/card.joi.validator';

const CreditCardForm = () => {
    const {handleSubmit,register} = useForm<ICard>({mode:'all',resolver:joiResolver(cardResolver)});
    const creditCardSaver = async  (cardData:ICard):Promise<void> =>{
        console.log(cardData);
    }
    return (
        <div id={'holder'}>
            <form className="visa-card" onSubmit={handleSubmit(creditCardSaver)}>
                <div className="logoContainer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="23"
                        height="10"
                        viewBox="0 0 48 48"
                        className="svgLogo"
                    >
                        <path
                            fill="#ff9800"
                            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        ></path>
                        <path
                            fill="#d50000"
                            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        ></path>
                        <path
                            fill="#ff3d00"
                            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        ></path>
                    </svg>
                </div>
                <div className="number-container">
                    <label className="input-label" >CARD NUMBER</label>
                    <input
                        className="inputstyle"
                        id="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        type="text"
                        {...register('cardNumber')}
                    />
                </div>

                <div className="name-date-cvv-container">
                    <div className="name-wrapper">
                        <label className="input-label" >CARD HOLDER</label>
                        <input
                            className="inputstyle"
                            id="holderName"
                            placeholder="NAME"
                            type="text"
                            {...register('name')}
                        />
                    </div>

                    <div className="expiry-wrapper">
                        <label className="input-label" >VALID THRU</label>
                        <input className="inputstyle" id="expiry" placeholder="MM/YY" type="text" {...register('monthAndYear')} />
                    </div>
                    <div className="cvv-wrapper">
                        <label className="input-label" >CVV</label>
                        <input
                            className="inputstyle"
                            placeholder="***"
                            id="cvv"
                            type="password"
                            {...register('cvv')}
                        />
                    </div>
                </div>
                <button>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="30"
                                height="30"
                                className="icon"
                            >
                                <path
                                    d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>Save</span>
                </button>
            </form>


        </div>
    );
};

export default CreditCardForm;