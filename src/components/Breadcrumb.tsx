import { Link } from "react-router-dom";

type breaditem = {
   id: number;
   name: string;
   link: string;
}

type breadcrumbPropsType = {
   blinks: breaditem[];
}



export function Breadcrumb({blinks}:breadcrumbPropsType){
   return(
      <div className="px-4 font-poppins m-5 text-xs md:text-lg 2xl:text-2xl ">
         <Link className="text-[#0073e6] no-underline hover:underline" 
         to="/">Inicio</Link>
         {blinks?.map((links)=>(
           <>
              {" "}&gt; <Link key={links.id} to={links.link ? "#": `/${links.link}`} 
              className="text-[#0073e6] no-underline hover:underline"
              state={{name:links.name,link:links.link}}
             onClick={(e) => {
               if (links.link === "#") { // Solo prevenir si es "#"
                  e.preventDefault();
              }
             }}>{links.name}</Link>
           </>
         ))}
      </div>
   );
}