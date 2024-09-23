import { Link } from "react-router-dom";

type breaditem={
    id:number;
    name:string;
 }

 type breadcrumbPropsType={
    blinks:breaditem[];
 }



export function Breadcrumb({blinks}:breadcrumbPropsType){
   return(
      <div className="m-5 text-sm">
         <Link className="text-[#0073e6] no-underline hover:underline md:text-lg" 
         to="/Dragons-2024-2/">Inicio</Link>
         {blinks?.map((links)=>(
           <>
             &gt; <Link key={links.id} to={`/${links.name}`} className="text-[#0073e6] no-underline
             hover:underline">{links.name}</Link>
           </>
         ))}
     </div>
   );
}