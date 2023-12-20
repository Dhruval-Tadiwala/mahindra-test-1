import React, { useState } from 'react'
import DataTable from './DataTable'
import { userDetails, branchDetails, typeDetails, statusDetails } from "../constant/constant";

const AdminPanel = () => {
  const [userData, setUserData] = useState(userDetails)
  const [fromDate, setFromDate] = useState("")
  
  const handleSearch= (event) => {
    let searchValue = event.target.value;
    if(searchValue !== '') {
        const newUserDetailsArray = userDetails && userDetails?.filter((user) => String(user?.id)?.includes(searchValue));
        setUserData(newUserDetailsArray)
    } else {
        setUserData(userDetails)
    }
  }

  const handleBranch = (event) => {
    let branchValue = event.target.value;
    
    if(branchValue !== '') {
        const newUserDetailsArray = userDetails && userDetails?.filter((user) => user?.branch === branchValue);
        setUserData(newUserDetailsArray)
    } else {
        setUserData(userDetails)
    }
  }
  
  const handleType = (event) => {
    let typeValue = event.target.value;
    if(typeValue !== '') {
        const newUserDetailsArray = userDetails && userDetails?.filter((user) => user?.type === typeValue);
        setUserData(newUserDetailsArray)
    } else {
        setUserData(userDetails)
    }
  }

  const handleStatus = (event) => {
    let statusValue = event.target.value;
    if(statusValue !== '') {
        const newUserDetailsArray = userDetails && userDetails?.filter((user) => user?.status === statusValue);
        setUserData(newUserDetailsArray)
    } else {
        setUserData(userDetails)
    }
  }

  const handleFromDate = (event) => {
    let fromValue = event.target.value;
    setFromDate(fromValue)
    if(fromValue !== '') {
        const newUserDetailsArray = userDetails && userDetails?.filter((user) => user?.date >= fromValue);
        setUserData(newUserDetailsArray)
    } else {
        setUserData(userDetails)
    }
  }
  
  const handleToDate = (event) => {
    let toValue = event.target.value;
    if(toValue !== '') {
        const newUserDetailsArray = userDetails && userDetails?.filter((user) => user?.date <= toValue);
        setUserData(newUserDetailsArray)
    } else {
        setUserData(userDetails)
    }
  }
  
  return (
    <>
        <div className='row mb-3'>
            <div className='col-md-10'>
                <h5>Total ({userData.length})</h5>
            </div>
            <div className='col-md-2'>
                <input type="text" className="form-control" placeholder="Search By Id" name="search" onChange={handleSearch} />
            </div>
        </div>
        
        <div className='d-flex justif-content-between mb-5'>
            <div className='me-3'>
                <label for="from" className="form-label">From</label>
                <input type="date" className="form-control" placeholder="From Date" onChange={handleFromDate} />
            </div>
            <div className='me-3'>
                <label for="to" className="form-label">To</label>
                <input type="date" className="form-control" placeholder="To Date" onChange={handleToDate} min={fromDate} />
            </div>
            <div className='me-3'>
                <label for="branch" className="form-label">Branch</label>
                <select className="form-select" aria-label="Branch" onChange={handleBranch}>
                    <option value={''} selected>Select Branch</option>
                    {
                        branchDetails && branchDetails?.map((branch, index) => {
                            return (
                                <option value={branch} key={index}>{branch}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='me-3'>
                <label for="type" className="form-label">Type</label>
                <select className="form-select" aria-label="Type" onChange={handleType}>
                    <option value={''} selected>Select Type</option>
                    {
                        typeDetails && typeDetails?.map((type, index) => {
                            return (
                                <option value={type} key={index}>{type}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='me-3'>
                <label for="status" className="form-label">Status</label>
                <select className="form-select" aria-label="Status" onChange={handleStatus}>
                    <option value={''} selected>Select Status</option>
                    {
                        statusDetails && statusDetails?.map((status, index) => {
                            return (
                                <option value={status} key={index}>{status}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
        
        <div className='row'>
            <DataTable userData={userData} setUserData={setUserData} />
        </div>
    </>
  )
}

export default AdminPanel