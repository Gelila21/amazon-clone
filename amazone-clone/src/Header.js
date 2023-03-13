import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='headerLogo' src = 'https://www.freepnglogos.com/images/amazon-png-logo-vector-6695.html'/>


        
       <div 
       className = "header__search" >
        <input className='header__searchInput' type ="text" >


        </input>
        
        </div>
  
        <div
            className = "header__nav" >
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                    Hello
                     </span>
                     <span className='header__optionLineThree'> 
                    Sign in
                     </span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineTwo'> 
                    Returns
                    </span>
                    <span className='header__optionLineThree'> 
                    & Orders
                    </span>

                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'> 
                    Your
                    </span>
                    <span className='header__optionLineOne'> 
                    Prime
                    </span>
                </div>
        </div>
    
        
        
        </div>
  )
}

export default Header