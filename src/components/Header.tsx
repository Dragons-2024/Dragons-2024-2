import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../assets/magisterlogoblanco.png'
export function Header() {
    return (
        <header>
            <section className='flex gap-2 md:h-24 items-center bg-[#1E2759] gap-12' >
                <div className='h-full py-0 px-0 ml-4 md:h-4/5 items-center py-2 px-8 mr-8'   >
                    <Link to="#">
                        <img className="h-full w-auto" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className='hidden md:flex flex-1 items-center max-w-screen-sm gap-2'>
                    <input className='rounded-2xl h-8 w-full px-4' type="text" placeholder="Buscar" />
                    <button className='bg-[#4A5FD9] rounded-2xl px-6 py-3 text-white hover:bg-[#F2F2F2] hover:text-black' ><FaSearch /></button>
                </div>
                <nav className=''>
                    <ul className='flex items-center gap-2 md:gap-8 ml-8 ' >
                        <li className="text-white hover:text-black "><a className="flex items-center gap-2" href="#"><i ></i>
                            <FaUser />
                            Mi Cuenta</a></li>
                        <li className="text-white hover:text-black"><a className="flex items-center gap-2" href="#"><i></i><FaShoppingCart />Carrito</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}
