import { useState} from "react"
import { useHistory } from "react-router-dom";


const Adddetails=()=>{
    let history=useHistory()

    const [ename,setname]=useState("")
    const [email,setemail]=useState("")
    const [designation,setdesignation]=useState("")
    const [status,setstatus]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();

        let newdata={ename , email, designation, status}

        fetch(" http://localhost:4100/employee",
        {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newdata)
        })
        .then(()=>{
            history.push("/emplist")
        })
    }
    return(
        <div>
            <h3>Add Employees</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name:</label> <input type="text" placeholder="Enter name" onChange={(e)=>{setname(e.target.value)}} /> <br />
                <label htmlFor="">Email:</label> <input type="email" placeholder="Enter mailId" onChange={(e)=>{setemail(e.target.value)}}/> <br />
                <label htmlFor="">Designation:</label> <input type="text" placeholder="Enter designation" onChange={(e)=>{setdesignation(e.target.value)}}/> <br />
                <label htmlFor="">Status:</label> <input type="text" placeholder="Enter status" onChange={(e)=>{setstatus(e.target.value)}} /> <br />
                <input type="submit"/>
            </form>   
        </div>
    )
}
export default Adddetails;
