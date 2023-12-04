import { useEffect, useState } from 'react'
import { token } from '../config.js';

export default function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{

            setLoading(true);
            try {
                const res = await fetch(url, {
                    headers:{Authorization: `Bearer ${token}`}
                })
                const result = await res.json();
                if(!res.ok){
                    throw new Error(result.message + 'emoji')
                }

                setData(result.data);
                setLoading(false);
                
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        }
        fetchData();
    },[url])
  return {data, loading, error}
}
