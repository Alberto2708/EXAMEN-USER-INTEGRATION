import {Routes, Route} from 'react-router-dom';
import Register from './views/dashboard/Register/Components/Register';
import Dashboard from './views/dashboard/components/Dashboard';
import Users from './Users/Users';
import RagModel from './views/RAG/rag';

function App() {
    return(
        <Routes>
            /* Users */
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Users/:id" element={<Users/>}/>
            <Route path="rag" element={<RagModel/>}/>
        </Routes>
    )
}

export default App;