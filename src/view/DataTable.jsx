import React from 'react'
import { FaSort  } from "react-icons/fa";
import { AiFillCloseCircle  } from "react-icons/ai";

const DataTable = (props) => {
  const {userData, setUserData} = props
  const deleteDetail = (id) => {
    const newUserDetailsArray = userData && userData?.filter((user) => user?.id !== id);
    setUserData(newUserDetailsArray)
  }

  return (
    <>
        {
            userData && userData?.length > 0 ?
            <div className='table-responsive'>
                <table className='table'>
                    <thead className='table-light'>
                        <tr>
                        <th width={'70px'}>ID</th>
                        <th width={'70px'}>DATE <FaSort className='cursor-pointer' /></th>
                        <th width={'100px'}>BRANCH</th>
                        <th width={'70px'}>TYPE</th>
                        <th width={'100px'}>AMOUNT (IN RUPEES)</th>
                        <th width={'120px'}>BANK</th>
                        <th width={'100px'}>REQUESTED BY (EMPLOYEE CODE)</th>
                        <th width={'70px'}>STATUS</th>
                        <th width={'20px'}></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            userData?.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='fw-bold'>{data?.id}</td>
                                        <td className=''>{data?.date}</td>
                                        <td className=''>{data?.branch}</td>
                                        <td className=''>{data?.type}</td>
                                        <td className=''>{data?.amount}</td>
                                        <td className=''>{data?.bank}</td>
                                        <td className=''>
                                            <p className='mb-1'>
                                                {data?.requestedBy}                                        
                                            </p>
                                            <p className='mb-0'>
                                                {data?.employeeCode}
                                            </p>
                                        </td>
                                        {/* <td className=''>{data?.employeeCode}</td> */}
                                        <td className=''>{data?.status}</td>
                                        <td className=''><AiFillCloseCircle fill='red' size={'20px'} className='cursor-pointer' onClick={() => deleteDetail(data?.id)} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> : 
            <>
                <h2>No Data Found!</h2>
            </>
        }
    </>
  )
}

export default DataTable