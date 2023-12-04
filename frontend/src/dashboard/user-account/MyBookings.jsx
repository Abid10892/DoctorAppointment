import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';
import DoctorCard from '../../components/doctors/DoctorCard.jsx'

export default function MyBookings() {

  const{data:appointments, loading, error} = useFetchData(`${BASE_URL}/api/v1/users/appointment/my-appointment`);

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMsg={error} />}

      {!loading && !error && <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          appointments.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />)
        }
        </div>}

        {!loading && !error && appointments.length===0 && <h2 className='mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor'>You did not book any doctor yet!</h2>}
    </div>
  )
}
