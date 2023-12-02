import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/doctor-img01.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'

export default function Signup() {

  const [selectedFile, setSelectedFile] =useState(null);
  const [previewURL, setPreviewURL] =useState('');
  const [loading, setLoading] =useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password: '',
    photo:'',
    gender:'',
    role:'patient'
  });

  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileInputChange = async (e)=>{
      const file = e.target.files[0];
      // cloudinary to upload images
      const data = await uploadImageToCloudinary(file);
      
      setPreviewURL(data.url);
      setSelectedFile(data.url);
      setFormData({...formData, photo:data.url});
      console.log(data);
  }

  const submitHandler = async (e) => {
    console.log(formData);
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const {message} = await res.json();

      if(!res.ok) {
        throw new Error(message)
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');

    } catch (err) {
        toast.error(err.message);
        setLoading(false);

    }
  }

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] max-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* -------img box------------- */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>


          {/* -----------sign up form ------------ */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3>Create an <span className='text-primaryColor'>account</span>
            </h3>

            <form onSubmit={submitHandler}>
            <div className="mb-5">
            <input value={formData.name} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer' type="text" placeholder='Enter your Full Name' name='name' required />
          </div>
            <div className="mb-5">
            <input value={formData.email} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer' type="email" placeholder='Enter your Email' name='email' required />
          </div>
          <div className="mb-5">
            <input value={formData.password} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer' type="password" placeholder='Enter your Password' name='password' required />
          </div>

          <div className="mb-5 flex items-center justify-between">
            <label className='text-headingColor font-bold text-[16px] leading-7'>
              Are You a
              <select value={formData.role} onChange={handleInputChange} name='role' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                <option value='patient'>Patient</option>
                <option value='doctor'>Doctor</option>
              </select>
            </label>
            <label className='text-headingColor font-bold text-[16px] leading-7'>
              Gender:
              <select value={formData.gender} onChange={handleInputChange} name='gender' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </label>
          </div>


          <div className="mb-5 flex items-center gap-3">
            {selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={previewURL} alt="" className='w-full rounded-full' />
            </figure>}

            <div className='relative w-[160px] h-[50px]'>
              <input type="file" name='photo' id='customFile' onChange={handleFileInputChange} accept='.jpg, .png' className='absolute top-0 left-0 w-full opacity-0 cursor-pointer' />
              <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                Upload Photo
              </label>
            </div>
          </div>

          <div className="mt-7">
            <button disabled={loading && true} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
              {loading ? <HashLoader size={35} color='#ffffff'></HashLoader> : 'Sign Up'}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Already have an account ? <Link to='/login' className='text-primaryColor'>Login</Link>
          </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
