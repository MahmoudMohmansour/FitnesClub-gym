import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile=window.innerWidth<=768?true:false
  const[menuOpend ,setMenuOpend]=useState(false)
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt=''/>
        {(menuOpend===false && mobile===true)?(
          <div style={{backgroundColor:'var(--appColor)' , padding:'0.5rem' , borderRadius:'5px'}}
          onClick={()=>setMenuOpend(true)}
          >
            <img src={Bars} style={{width:'1.5rem' , height:'1.5rem'}}/>
          </div>
        ):(
          <ul className='header-menu'>
          <li ><Link
          to='Home'
          onClick={()=>setMenuOpend(false)}
          span={true}
          smooth={true}
          activeClass='active'

          >Home</Link></li>
          <li><Link
          to='program'
          onClick={()=>setMenuOpend(false)}
          span={true}
          smooth={true}
          >Programes</Link></li>
          <li ><Link
          to='join-us'
          onClick={()=>setMenuOpend(false)}
          span={true}
          smooth={true}
          >Why Us</Link></li>
          <li ><Link
          to='plans'
          onClick={()=>setMenuOpend(false)}
          span={true}
          smooth={true}
          >Plans</Link></li>
          <li ><Link to='testemonials'
          onClick={()=>setMenuOpend(false)}
          span={true}
          smooth={true}
          >Testemonials</Link></li>
          
      </ul>
        )}
       
    </div>
  )
}

export default Header