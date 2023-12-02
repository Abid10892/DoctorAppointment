import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader.js'

export default function Login() {

  const [loading, setLoading] =useState(false);
  const navigate = useNavigate();
  const {state, dispatch} = useContext(authContext);
  const [formData, setFormData] = useState({
    email:'',
    password: '',
  })


  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const submitHandler = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await res.json();

      if(!res.ok) {
        throw new Error(result.message)
      }

      dispatch({type: 'LOGIN_SUCCESS', payload: {user: result.data, role: result.role, token: result.token}});
      console.log(result.data, "login");
      setLoading(false);
      toast.success(result.message);
      navigate('/home');

    } catch (err) {
        toast.error(err.message);
        setLoading(false);

    }
  }

  return (
    <section className='px-5 lg:px-0'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className='text-primaryColor'>Welcome</span> Back 
        </h3>

        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className="mb-5">
            <input className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer' type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="mb-5">
            <input className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer' type="password" placeholder='Enter Password' name='password' value={formData.password} onChange={handleInputChange} required />
          </div>

          <div className="mt-7">
            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
              { loading ? <HashLoader size={25} color='#fff' />  : 'Login'}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account ? <Link to='/register' className='text-primaryColor'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}
