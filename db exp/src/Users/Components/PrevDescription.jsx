/* eslint-disable react/prop-types */

const PrevDescription = ({ descriptions }) => {
    console.log(descriptions);
    return (
    <div class="flex flex-col justify-center overflow-x-auto mt-5 ml-5">
      <div class=" flex flex-col p-6 border border-black bg-white rounded-xl 
      shadow-lg justify-left overflow-auto text-balance max-h-40 w-1/5">
        <div>
        <p class="text-s font-medium text-black">Pregunta</p>
        {descriptions?.map((des, idx) => (
          <p key={idx} class="text-xs display:inline">{des.description}</p>
        ))}
        <p class="text-s font-medium text-black">Respuesta</p>
        {descriptions?.map((des, idx)=>(
            <p key={idx} class="text-xs display:inline"> {des.prescription}</p> 

        ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default PrevDescription;