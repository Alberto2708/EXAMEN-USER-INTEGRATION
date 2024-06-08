import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PrevDescription from "./Components/PrevDescription";
import CardInfo from "../views/dashboard/components/Cardinfo";
import NavigationBar from "../shared/NavigationBar";


const Users = () =>{

    const { id } = useParams();

    const [form, setForm] = useState({

        description: '',
        prescription: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [descriptions, setDescriptions]=useState([]);
    const [user, setUser] =useState([]);

    const fetchDescription = async () =>{
        console.log("ID from users", id)
        console.log("fetching description")
        const response = await fetch("http://localhost:3000/description/" + id);
        const data = await response.json();
        console.log(data)
        setDescriptions(data)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const newForm = {
            ...form,
            [name] : value
        }
        setForm(newForm)
    }
    

    const fetchUserbyID = async () => {
        const response = await fetch('http://localhost:3000/users/' + id);
        const data = await response.json();
        console.log(data);
        setUser(data);
        return data;
    };

    const handleGenerateHelp = async () =>{
        const message = {
            message: form.description,
        };
        setIsLoading(true);
        try{
            const response = await fetch('http://localhost:3000/chat/context', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message),
            });
            const data = await response.json();
            setForm({ ...form, prescription: data.response });
            console.log(data);
            return data;
        } catch(error){
            console.log(error);
        }
        setIsLoading(false);
    };

    const handlePrescription = async () =>{
      const res = await fetch('http://localhost:3000/description/'+id,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    return res.status ===201? alert('Registro exitoso') : alert('Error al recibir')

    }


    useEffect(() => {
        fetchUserbyID();
        fetchDescription();
    },[])

    return (
      <div>
        <div class="max-h-24">
          <NavigationBar/>
        </div>  
        <div class="flex flex-col">
            <PrevDescription descriptions={descriptions}/>
        </div>


          <div class="grid grid-cols-3 mt-7 items-left">
            <div >
            <CardInfo user={user}/>
            </div>
            
            <div class="flex flex-col items-center">
                <div class>
                    <p class="text-lg text-black font-semibold ml-3">Pregunta algo sobre el código de ética</p>
                </div>
                <div>
                    <textarea
                    label="Descripción"
                    value={form.description}
                    name="description"
                    onChange={handleInputChange}
                    class="min-h-80 min-w-96 border-2 border-teal-900"
                    />
                </div>
                <button onClick={handleGenerateHelp} 
                class="bg-green-950 text-lg text-white font-semibold w-1/3 h-1/6 rounded-2xl"
                >
                    Generar respuesta
                </button>

            </div>

            <div class="flex flex-col items-center">
                <div class>
                    <p class="text-lg text-black font-semibold ml-3">Respuesta generada</p>
                </div>
                <div>
                    <textarea
                    label="Respuesta"
                    value={form.prescription}
                    name="prescription"
                    onChange={handleInputChange}
                    class="min-h-80 min-w-96 border-2 border-teal-900"
                    />
                </div>
                <button onClick={handlePrescription} 
                class="bg-green-950 text-lg text-white font-semibold w-1/3 h-1/6 rounded-2xl"
                >
                    Guardar repuesta
                </button>

            </div>
            
          </div>

          <div class> 

          </div>

          





      </div>
      );
    };
    
    export default Users;