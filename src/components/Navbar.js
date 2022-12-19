import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

//import navbarButtons
import { navbarBtn } from '../utils/constant';

const Navbar = () => {
  const [sideBar,setSideBar]=useState(true);
  const sidebarHandler=(e)=>{
    if(sideBar){
      const nav=document.getElementById('nav');
   /*    list.className='nav-list sideBarList' */
      nav.className='sidebar';
      setSideBar(false);
      return;
    }
    if(!sideBar){
      const nav=document.getElementById('nav');
      nav.className='navbar';
      setSideBar(true);
      return;
    }
  }
  return (
    <div className='main'>
        <div id='nav' className='navbar' >
      <button className='navBTN' onClick={sidebarHandler} >
        <span>
          {sideBar?<MenuIcon />:<CloseIcon/>}
        </span>
      </button>
        <h1>lekanM</h1>
        <ul>
            {
                navbarBtn.map((Btn,key)=>(
                    <li className='navbarli' key={key}><a href={Btn.path} >{Btn.name}</a></li>
                ))
            }
        </ul>
    </div>
    </div>
  )
}

export default Navbar