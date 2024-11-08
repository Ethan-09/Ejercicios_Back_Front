import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import PatientList from '../pages/PatientList';
import AddPatient from '../pages/AddPatient';
import UpdatePatient from '../pages/UpdatePatient';
const Router = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/patients/new" element={<AddPatient />} />
        <Route path="/patients/update" element={<UpdatePatient />} />
    </Routes>
    </BrowserRouter>
);

export default Router;