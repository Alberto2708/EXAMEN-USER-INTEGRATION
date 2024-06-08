import { useNavigate } from "react-router"


const NavigationBar = ({children}) => {

    const navigate = useNavigate();

    const goHome = () =>{
        navigate("/")
    }
    const goRegister = () =>{
        navigate("/register")
    }

    const goRAG = () =>{
        navigate("/rag")
    }

    return(
        <div  class="rounded-xl mt-2 bg-teal-800 text-black h-10 justify-center w-auto ml-5 mr-5">
            <div class="flex flex-row justify-left">
                <button onClick={goHome} class="ml-10 mt-2 w-24 bg-green-300 rounded-lg" >Dashboard</button>
                <button onClick={goRegister} class="ml-10 mt-2 w-24 bg-green-300 rounded-lg">Registro</button>
            </div>  
            {children}
        </div>
        
    )
}

export default NavigationBar