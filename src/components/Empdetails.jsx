
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Empdetails=()=>{

    let history=useHistory()
    const [data,setdata]=useState(null)
    const [pending,setpending]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(" http://localhost:4100/employee")
            .then((res)=>res.json())
            .then((data)=>{setdata(data);setpending(true)})
        },500)
    },[])
    history.push("/emplist")
    
    return(
        <div>
            <h1>List of Employees</h1>
            <Link to={"/addemp"}> <button>ADD</button></Link>
            {pending && 
            <div>
                <table border="2px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((newemp)=>(
                            <tr>
                                <td>{newemp.ename}</td>
                                <td>{newemp.email}</td>
                                <td>{newemp.designation}</td>
                                <td>{newemp.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>       
            }
        </div>
        )}

export default Empdetails;