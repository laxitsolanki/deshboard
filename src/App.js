import './App.scss';
import Navleft from './Components/Navleft';
import Navtop from './Components/Navtop';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './pages/Company/Company';
import DistrictList from './pages/District/DistrictList'
import Adddistrict from './pages/District/Adddistrict'
import Editdistrict from './pages/District/Editdistrict'
import Viewdistrict from './pages/District/Viewdistrict'

import Driver from './pages/Driver/Driver';
import Customer from './pages/Customer/Customer';
import Dashboard from './pages/Dashboard/Dashboard';
import Advancepayment from './pages/AdvancePayment/Advancepayment';
import Driverattendance from './pages/DriverAttendance/Driverattendance';
import Drivergeolocation from './pages/DriverGeoLocation/Drivergeolocation';
import Expense from './pages/Expense/Expense';
import Expensecategory from './pages/ExpenseCategory/Expensecategory';
import Lead from './pages/Lead/Lead';
import Leadcategory from './pages/LeadCategory/Leadcategory';
import Site from './pages/Site/Site';
import Task from './pages/Task/Task';
import Taskcategory from './pages/TaskCategory/Taskcategory';
import Addcompany from './pages/Company/Add';
import Edit from './pages/Company/Edit';
import Viewcompany from './pages/Company/View';
import Viewdriver from './pages/Driver/Viewdriver';
import Adddriver from './pages/Driver/Adddriver';
import Editdriver from './pages/Driver/Editdriver';
import Viewcustomer from './pages/Customer/Viewcustomer';
import Addcustomer from './pages/Customer/Addcustomer';
import Editcustomer from './pages/Customer/Editcustomer';
import Viewdriverattendance from './pages/DriverAttendance/Viewdriverattendance';
import Adddriverattendance from './pages/DriverAttendance/Adddriverattendance';
import Editdriverattendance from './pages/DriverAttendance/Editdriverattendance';
import Viewdrivergeolocation from './pages/DriverGeoLocation/Viewdrivergeolocation';
import Adddrivergeolocation from './pages/DriverGeoLocation/Adddrivergeolocation';
import Editdrivergeolocation from './pages/DriverGeoLocation/Editdrivergeolocation';
import Addadvancepayment from './pages/AdvancePayment/Addadvancepayment';
import Viewadvancepayment from './pages/AdvancePayment/Viewadvancepayment';
import Editadvancepayment from './pages/AdvancePayment/Editadvancepayment';
import Viewtaskcategory from './pages/TaskCategory/Viewtaskcategory';
import Addtaskcategory from './pages/TaskCategory/Addtaskcategory';
import Edittaskcategory from './pages/TaskCategory/Edittaskcategory';
import Viewtask from './pages/Task/Viewtask'
import Addtask from './pages/Task/Addtask';
import Edittask from './pages/Task/Edittask';
import Viewexpensecategory from './pages/ExpenseCategory/Viewexpensecategory';
import Addexpensecategory from './pages/ExpenseCategory/Addexpensecategory';
import Editexpensecategory from './pages/ExpenseCategory/Editexpensecategory';
import Viewexpense from './pages/Expense/Viewexpense';
import Addexpense from './pages/Expense/Addexpense';
import Editexpense from './pages/Expense/Editexpense';
import Viewsite from './pages/Site/Viewsite';
import Addsite from './pages/Site/Addsite';
import Editsite from './pages/Site/Editsite';
import Viewleadcategory from './pages/LeadCategory/Viewleadcategory';
import Addleadcategory from './pages/LeadCategory/Addleadcategory';
import Editleadcategory from './pages/LeadCategory/Editleadcategory';
import Viewlead from './pages/Lead/Viewlead';
import Addlead from './pages/Lead/Addlead';
import Editlead from './pages/Lead/Editlead';


//backend k
import Talukoadd from './pages/taluko/Talukoadd';
import Talukoedit from './pages/taluko/Talukoedit';
import Talukolist from './pages/taluko/Talukolist';
import Talukoview from './pages/taluko/Talukoview';

import Zoneadd from './pages/zone/Zoneadd';
import Zoneedit from './pages/zone/Zoneedit';
import Zonelist from './pages/zone/Zonelist';
import Zoneview from './pages/zone/Zoneview';

import Businesstypeadd from './pages/Business_type/Businesstypeadd';
import Businesstypeedit from './pages/Business_type/Businesstypeedit';
import Businesstypelist from './pages/Business_type/Businesstypelist';
import Businesstypeview from './pages/Business_type/Businesstypeview';

import Powersupplyadd from './pages/Power_Supply/Powersupplyadd';
import Powersupplyedit from './pages/Power_Supply/Powersupplyedit';
import Powersupplylist from './pages/Power_Supply/Powersupplylist';
import Powersupplyview from './pages/Power_Supply/Powersupplyview';

import Associationedit from './pages/Association/Associationedit';
import Associationlist from './pages/Association/Associationlist';

import Useradd from './pages/user/Useradd';
import Userlist from './pages/user/Userlist';
import Userview from './pages/user/Userview';

import Memberadd from './pages/Member/Memberadd';
import Memberedit from './pages/Member/Memberedit';
import Memberlist from './pages/Member/Memberlist';
import Memberview from './pages/Member/Memberview';

import Login from './pages/login/Login';
import Signup from './pages/signUp/Signup'

import Verification from './pages/Verification/Verification';

function App() {
  const [sidebar, setSidebar] = useState(true)

  const [isLogin, setIsLogin] = useState();


  useEffect(() => {
    setIsLogin(localStorage.getItem('token') && localStorage.getItem('token') != null ? true : false);
  }, [])
  return (
    <BrowserRouter>

      {isLogin != null && <>
        {!isLogin && <Routes>
          <Route path='/' element={<Login loginHandler={(e) => setIsLogin(e)} />} />
          <Route path='/verification' element={<Verification />} />
        </Routes>}
        {isLogin &&
          <div className={`main ${sidebar ? 'msb-x' : ''}`}>
            <div className="msb" id="msb">
              <Navleft />
            </div>
            <div className="mcw">
              <Navtop side={setSidebar} sidebar={sidebar} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/company' element={<Company />} />
                <Route path='/addcompany' element={<Addcompany />} />
                <Route path='/viewcompany' element={<Viewcompany />} />
                <Route path='/edit' element={<Edit />} />

                <Route path="/districtlist" element={<DistrictList />} />
                <Route path="/adddistrict" element={<Adddistrict />} />
                <Route path="/editdistrict/:id" element={<Editdistrict />} />
                <Route path="/viewdistrict/:id" element={<Viewdistrict />} />

                <Route path="/driver" element={<Driver />} />
                <Route path="/viewdriver" element={<Viewdriver />} />
                <Route path="/adddriver" element={<Adddriver />} />
                <Route path="/editdriver" element={<Editdriver />} />

                <Route path="/customer" element={<Customer />} />
                <Route path="/viewcustomer" element={<Viewcustomer />} />
                <Route path="/addcustomer" element={<Addcustomer />} />
                <Route path="/editcustomer" element={<Editcustomer />} />

                <Route path="/driverattendance" element={<Driverattendance />} />
                <Route path="/viewdriverattendance" element={<Viewdriverattendance />} />
                <Route path="/adddriverattendance" element={<Adddriverattendance />} />
                <Route path="/editdriverattendance" element={<Editdriverattendance />} />

                <Route path="/drivergeolocation" element={<Drivergeolocation />} />
                <Route path="/viewdrivergeolocation" element={<Viewdrivergeolocation />} />
                <Route path="/adddrivergeolocation" element={<Adddrivergeolocation />} />
                <Route path="/editdrivergeolocation" element={<Editdrivergeolocation />} />

                <Route path="/advancepayment" element={<Advancepayment />} />
                <Route path="/addadvancepayment" element={<Addadvancepayment />} />
                <Route path="/viewadvancepayment" element={<Viewadvancepayment />} />
                <Route path="/editadvancepayment" element={<Editadvancepayment />} />

                <Route path="/taskcategory" element={<Taskcategory />} />
                <Route path="/viewtaskcategory" element={<Viewtaskcategory />} />
                <Route path="/addtaskcategory" element={<Addtaskcategory />} />
                <Route path="/Edittaskcategory" element={<Edittaskcategory />} />

                <Route path="/task" element={<Task />} />
                <Route path="/viewtask" element={<Viewtask />} />
                <Route path="/addtask" element={<Addtask />} />
                <Route path="/edittask" element={<Edittask />} />

                <Route path="/expensecategory" element={<Expensecategory />} />
                <Route path="/viewexpensecategory" element={<Viewexpensecategory />} />
                <Route path="/addexpensecategory" element={<Addexpensecategory />} />
                <Route path="/editexpensecategory" element={<Editexpensecategory />} />

                <Route path="/expense" element={<Expense />} />
                <Route path="/viewexpense" element={<Viewexpense />} />
                <Route path="/addexpense" element={<Addexpense />} />
                <Route path="/editexpense" element={<Editexpense />} />

                <Route path="/site" element={<Site />} />
                <Route path="/viewsite" element={<Viewsite />} />
                <Route path="/addsite" element={<Addsite />} />
                <Route path="/editsite" element={<Editsite />} />

                <Route path="/leadcategory" element={<Leadcategory />} />
                <Route path="/viewleadcategory" element={<Viewleadcategory />} />
                <Route path="/addleadcategory" element={<Addleadcategory />} />
                <Route path="/editleadcategory" element={<Editleadcategory />} />

                <Route path="/lead" element={<Lead />} />
                <Route path="/viewlead" element={<Viewlead />} />
                <Route path="/addlead" element={<Addlead />} />
                <Route path="/editlead" element={<Editlead />} />



                <Route path="/Talukoadd" element={<Talukoadd />} />
                <Route path="/Talukolist" element={<Talukolist />} />
                <Route path="/Talukoedit/:id" element={<Talukoedit />} />
                <Route path="/Talukoview/:id" element={<Talukoview />} />

                <Route path='/Zoneadd' element={<Zoneadd/>} />
                <Route path='/Zonelist' element={<Zonelist/>} />
                <Route path='/Zoneedit/:id' element={< Zoneedit/>} />
                <Route path='/Zoneview/:id' element={<Zoneview/>} />  

                <Route path='/Businessstypeadd' element={<Businesstypeadd/>} />
                <Route path='/Businesstypelist' element={<Businesstypelist/>} />
                <Route path='/Businesstypeedit/:id' element={<Businesstypeedit/>} />
                <Route path='/Businesstypeview/:id' element={<Businesstypeview/>} />

                <Route path='/Powersupplyadd' element={< Powersupplyadd/>} />
                <Route path='/Powersupplylist' element={<Powersupplylist/>} />
                <Route path='/Powersupplyedit/:id' element={<Powersupplyedit/>} />
                <Route path='/Powersupplyview/:id' element={<Powersupplyview/>} />

                <Route path='/Associationedit/:id' element={<Associationedit/>} /> 
                <Route path='/Associationlist' element={<Associationlist/>} />

                <Route path='/Useradd' element={<Useradd/>} />
                <Route path='/Userlist' element={<Userlist/>} />
                <Route path='/Userview/:id' element={<Userview/>} />

                <Route path='/Memberadd' element={<Memberadd/>} />
                <Route path='/Memberlist' element={<Memberlist/>} />
                <Route path='/Memberedit/:id' element={<Memberedit/>} />
                <Route path='/Memberview/:id' element={<Memberview/>} />
 
              </Routes>
            </div>
          </div>}
      </>}
    </BrowserRouter>
  );
}

export default App;
