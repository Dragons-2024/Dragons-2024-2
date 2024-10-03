

type DetailValue = string;

interface Details {
   [key: string]: DetailValue; 
 }

interface DetailsProductsProps {
   details: Details;
 }

export function ProductEspecification({details}:DetailsProductsProps){
   var color:string;
   return (
   <section className=" my-10 max-[768px]:mx-auto">
      <h2 className="text-blue-800 text-2xl max-[768px]:text-center font-semibold">Especificaciones tecnicas</h2>
    <table className="text-lg text-black mt-10 w-4/5 ">
      <thead>
         <tr>
            <th className="border-2 border-blue-950 border-r-white bg-blue-950 text-center 
            text-white p-5">Especificacion</th>
            <th className="border-2 border-blue-950 bg-blue-950 text-center 
            text-white p-5">Valor</th>
         </tr>
      </thead>
      <tbody>
      {Object.entries(details).map(([key,value])=>(
         <tr key={key}>
          <td className="border-2 border-blue-950 bg-blue-200 text-center p-5">{key}</td>
          <td className="border-2 border-blue-950 bg-blue-200 text-center p-5" border-2 border-blue-950 bg-blue-200 text-center>{value}</td>
         </tr>
       ))}
      </tbody>
    </table>
   </section>
   );
}