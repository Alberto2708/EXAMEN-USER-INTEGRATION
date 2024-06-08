import user_photo from '../../../../src/assets/user_photo.svg'

const CardInfo = ({user}) =>{
return(

    <div class="flex flex-col justify-center bg-green-500/20 m-5 max-w-64 border-2 border-teal-700 rounded-xl
    overflow-auto">

        <img src={user_photo} class="w-10 h-10 ml-10"/>
        <div class="flex flex-row">
        <p class="text-lg text-black font-semibold ml-3">Nombre:</p>
        <p class="text-lg ml-1">{user.name}</p>
        </div>

        <div class="flex flex-row">
        <p class="text-lg text-black font-semibold ml-3">Email:</p>
        <p class="text-lg ml-1">{user.email}</p>
        </div>

        <div class="flex flex-row">
        <p class="text-lg text-black font-semibold ml-3">Matricula:</p>
        <p class="text-lg ml-1">{user.matricula}</p>
        </div>

        <div class="flex flex-row">
        <p class="text-lg text-black font-semibold ml-3">Teléfono:</p>
        <p class="text-lg ml-1">{user.cellphone}</p>
        </div>
        
        <div class="flex flex-row">
        <p class="text-lg text-black font-semibold ml-3">Semestre:</p>
        <p class="text-lg ml-1">{user.semester}</p>
        </div>

        <div class="flex flex-row">
        <p class="text-lg text-black font-semibold ml-3">Campus:</p>
        <p class="text-lg ml-1">{user.campus}</p>
        </div>


</div>
)



}

export default CardInfo;