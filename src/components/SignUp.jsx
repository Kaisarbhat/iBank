
import styles from '../style';
import React,{useState} from 'react';
import axios from 'axios';

function SignUp() {
  const [user, setUser] = useState({
    firstname:"",lastname:"",email:"",city:"",state:"",zip:""
  });
  
  let name,value;
  const handleInputs = (event) =>{
    console.log(event)
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value})
  }

  const PostData = async (event)=>{
      event.preventDefault();
      const {firstname,lastname,email,city,state,zip} = user;
     const res = await axios.post(
        "http://localhost:5000/api/saveData",
        {
          firstname,
          lastname,
          email,
          city,
          state,
          zip,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        )
        .then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        });
       
        
    
      // if(res.status===422 || !res.data){
      //   window.alert("Invalid data")
      //   console.log("Invalid data")
      // }
      // else{
      //   window.alert("Success")
      //   console.log("Success")
      // }
  }
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:5000/thankYou';
  };

  return (
    <div className='flex flex-row'>
      <div >
        <form className="w-full max-w-lg" method='POST' onSubmit={PostData} >
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="firstname" placeholder="Kaisar"
      value={user.firstname}
      onChange={handleInputs}
      />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name='lastname'  placeholder="Bhat"
      value={user.lastname}
      onChange={handleInputs}
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" name='email'  placeholder="kaisar@inzoo.com"
      value={user.email}
      onChange={handleInputs}
      />
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='city'  placeholder="Baramulla"
      value={user.city}
      onChange={handleInputs}/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="state"
        value={user.state}
        onChange={handleInputs} >
          <option>Kashmir</option>
          <option>Tamil Nadu</option>
          <option>Tokyo</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" name="zip" placeholder="193301"
      value={user.zip}
      onChange={handleInputs}
      />
    </div>
  </div>
  <button type='submit' className={`py-4 px-6 bg-blue-gradient rounded-[8px] font-poppins font-medium text-[18px] text-primary outline-none ${styles} mt-6`} onClick={handleButtonClick}>Start Banking With Us</button>
 
</form>
      </div>
    </div>
  )
}

export default SignUp