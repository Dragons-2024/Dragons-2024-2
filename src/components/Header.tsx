

import { Link } from 'react-router-dom';
import Logo from '../assets/magisterlogoblanco.png'
export function Header() {
    return (
        <header>
            <section className='flex h-24 items-center bg-[#1E2759]' >
                <div className='flex-1 h-4/5 items-center py-2 px-8'   >
                    <Link to="#">
                        <img className="h-full w-auto" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className=' flex flex-1 hmax-w-screen-md '>
                    <input className='rounded-2xl h-8 w-full px-4' type="text" placeholder="Buscar" />
                    <button className='bg-[#4A5FD9] rounded-2xl px-4 py-2 text-white' >Buscar</button>
                </div>
                <nav className='flex-1'>
                    <ul className='flex'>
                        <li className=""><a href="#"><i ></i>Mi Cuenta</a></li>
                        <li  className=""><a href="#"><i></i>Carrito</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}
