import { useState } from "react";
import { useEffect } from "react";

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        matricula: '',
        cellphone: '',
        semester: '',
        campus: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        const newForm = {
            ...form,
            [name]: value,
        };
        setForm(newForm);
        console.log(newForm);
    };
    
    const handleSubmitForm = async() =>{
        const res = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        return res.status ===201? alert('Registro exitoso') : alert('Error al recibir')

    }

    return(
        <div>
            <h1 class="text-lg text-black font-semibold">Registrar usuario</h1>
            <form class="flex flex-col justify-center w-[300px]">
                <input class="m-2  border-2 border-green-400"
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                />
                <input class="m-2 border-2 border-green-400"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                />
                <input class="m-2 border-2 border-green-400"
                type="text"
                name="matricula"
                placeholder="Matricula"
                onChange={handleChange}
                />
                <input class="m-2 border-2 border-green-400"
                type="text"
                name="cellphone"
                placeholder="Celular"
                onChange={handleChange}
                />
                <input class="m-2 border-2 border-green-400"
                type="text"
                name="semester"
                placeholder="Semestre"
                onChange={handleChange}
                />
                <input class="m-2 border-2 border-green-400"
                type="text"
                name="campus"
                placeholder="Campus"
                onChange={handleChange}
                />
                <button class="border-2 border-teal-900 bg-teal-900 text-white"
                onClick={handleSubmitForm}
                type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Form;