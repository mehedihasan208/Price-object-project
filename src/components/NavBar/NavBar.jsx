import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
 
     const [open,setOpen]  = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];    

    return (
        <nav className="text-white">
    <div className="md:hidden" onClick={()=>setOpen(!open)}>
        {
        open === true ? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu></AiOutlineMenu>
        }
       
    </div>
    <ul className={`md:flex bg-red-600 duration-1000 absolute 
    ${open ? 'top-18' : '-top-80'}
   md:static p-8 shadow-lg`}>
    {
    routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;