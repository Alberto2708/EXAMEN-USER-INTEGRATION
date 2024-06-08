import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import NavigationBar from "../../../shared/NavigationBar";

const Dashboard = ()  => {

    const [Users, setUsers] = useState ([]);
    const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async() =>{
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };
  useEffect(() =>{
    fetchUsers(); 
  }, [])

  const filteredNames = Users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
    <div class="flex flex-col">
      <div>
        <NavigationBar/>
      </div>
      <div class="mt-3">
      <input onChange={(e) =>setSearchTerm(e.target.value)} type="text" placeholder="Filtrar"
      class="ml-5 border-2 border-teal-900 rounded-lg max-w-32 justify-center items-center"/>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-2xl text-black font-semibold ml-3">DASHBOARD DE USUARIOS</p>
      </div>

      <div class="flex flex-col justify-center">
            {filteredNames.map((user) => (
                <div class="flex-row justify-center" key={user.id}>
                    <Card user={user} />
                </div>
            ))}
        </div>
      


    </div>
   
    )
}

export default Dashboard;