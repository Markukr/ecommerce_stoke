import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
   const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

   useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      runFireworks();
   }, []);

   return (
      <div className="success-wrapper">
         <div className="success">
            <p className="icon">
               <BsBagCheckFill />
            </p>
            <h2>Tak for din ordre!</h2>
            <p className="email-msg">Tjek din e-mail-indbakke for kvitteringen.</p>
            <p className="description">
               Hvis du har spørgsmål, bedes du sende en e-mail
               <a className="email" href="mailto:order@example.com">
                  order@example.com
               </a>
            </p>
            <Link href="/">
               <button type="button" width="300px" className="btn">
                  Fortsætte med at handle
               </button>
            </Link>
         </div>
      </div>
   )
}

export default Success