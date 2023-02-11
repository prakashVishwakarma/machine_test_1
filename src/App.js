import React, { useEffect, useState } from "react";
import { useGetAllPostQuery } from './redux/services/post'



function App() {

  const [data, setData] = useState([])

  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  const response = useGetAllPostQuery()
  // console.log('response',response)
  // console.log('response data',response?.data?.data)
  // if(response.isLoading) return <div>Loading...</div>

  useEffect(() => {
    setData(response?.data?.data)
    // console.log('data', data)
  }, [])
  // console.log('data1', data)



  return (<>
    {
      response?.data?.data?.map((value, i, arr) => {
        let time = [...new Set(value?.appointmentDate)];
        // return arr[0].filter((item, index) => arr.indexOf(item) === index);
        console.log('time', time)
        if (value?.appointmentDate === '12 Feb 2023') {
          console.log('value?.appointmentDate', value?.appointmentDate)
        }
        return (<>
          <h1>{i} - {value?.appointmentEndingDate} -{value?.appointmentDate}</h1>
        </>)
      })
    }
  </>
  );
}

export default App;
