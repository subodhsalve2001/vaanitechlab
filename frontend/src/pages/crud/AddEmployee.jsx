import React from 'react'

export default function AddEmployee() {
    // const handleclick=()=>{
    //     console.log();
    // }
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">Add Employee</div>
                    <div className="card-body">
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' placeholder='Name' />
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" className='form-control' placeholder='Mobile Number' />
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' placeholder='Email' />
                        <br />
                        <button className='btn btn-success form-control' >Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
