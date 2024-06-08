import Form from "../../../Form/Components/Form";
import formimagen from "../../../../assets/formimagen.svg"
import NavigationBar from "../../../../shared/NavigationBar";

const Register = () => {
    return (
        <div className="flex flex-col justify-center bg-green-100">
            <div>
            <NavigationBar/>
            </div>
            <div>
            </div>
            <div class="flex flex-row">
            <div>
                <img src={formimagen} alt="A"/>
            </div>
            <div >
                <Form />
            </div>
            </div>
        </div>
    
      )
}

export default Register;