import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import visa from "../assets/visa.png"
import mastecard from "../assets/mastercard.png"
import amex from "../assets/americanexpress.png"
import { Link } from 'react-router-dom';


export function Footer() {
    return (
        <footer className="font-poppins bg-[#1E2759] text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" bg-[#2E3A69] p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Magister</h3>
            <p>Nit. 163.74048.25-4</p>
          </div>
          <div className="bg-[#2E3A69] p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Redes Sociales</h3>
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={24}/>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                 <FaTwitter size={24}/>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                 <FaInstagram size={24}/>
                </a>
              </li>
            </ul>
          </div>
          <div className=" bg-[#2E3A69] p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Medios de pago</h3>
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#">
                  <img src={visa} alt="visa" className="w-16 h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={mastecard} alt="mastercard" className="w-16 h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={amex} alt="americanexpress" className="w-16 h-10 object-contain" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#4A5FD9] mt-4 pt-4 flex flex-col md:flex-row justify-center gap-6">
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-[#647dec]">Inicio</a></li>
            <li><a href="#" className="hover:text-[#647dec]">Computadores</a></li>
            <li><a href="#" className="hover:text-[#647dec]">Carrito</a></li>
          </ul>
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-[#647dec]">Contacto</a></li>
            <li><a href="#" className="hover:text-[#647dec]">Políticas de Privacidad</a></li>
            <li><a href="#" className="hover:text-[#647dec]">Términos y Condiciones</a></li>
          </ul>
        </div>
      </footer>
    );
}
