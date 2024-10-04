

type DetailValue = string;

interface Details {
   [key: string]: DetailValue; 
 }

interface DetailsProductsProps {
   details: Details;
 }

export function ProductEspecification({details}:DetailsProductsProps){
   return (
   <section className=" my-10 max-[768px]:mx-auto  max-[768px]:my-0">
      <h2 className="text-blue-800 text-2xl max-[768px]:text-center font-semibold">Especificaciones tecnicas</h2>
    <table className="text-lg text-black mt-5 w-full max-[768px]:text-center border-2 max-[768px]:text-base ">

      <tbody>
      {Object.entries(details).map(([key,value])=>(
         <tr key={key}>
          <td className="text-left text-blue-800 w-2/5 font-semibold pr-5 max-[768px]:p-5">{key}</td>
          <td className=" text-left pr-5 max-[768px]:p-0">{value}</td>
         </tr>
       ))}
      </tbody>
    </table>
   </section>
   );
}