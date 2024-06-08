import React from 'react';
import { useNavigate } from 'react-router-dom';
import user_photo from '../../../../src/assets/user_photo.svg'


const Card = ({user}) =>{

    const navigate = useNavigate();
    const handleClick = () =>{
        console.log(user.id);
        navigate('/users/'+user.id);
    };

    return(
        <div>
        <div 
        class=" bg-green-300  mt-2 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
        

        onClick={handleClick}
        >
            <div className=" flex flex-row pt-2 mt-2 text-center space-y-2 sm:text-left">
            <img src={user_photo} class="h-10 w-10 mr-5 mt-2" />
            <div class="flex flex-col">
            <p class="text-lg text-black font-semibold">{user.name}</p> 
            <p>{user.email}</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Card;