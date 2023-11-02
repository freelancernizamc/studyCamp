import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";




const MyCollege = () => {
 
    const {user} = useContext(AuthContext)
    const collegeData = useLoaderData();
    const admitClg = useLoaderData()
    const [college, setCollege] = useState([])
  

    useEffect(()=>{
    fetch(`https://study-camp-server.vercel.app/mycollege?email=${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        setCollege(data)
    })
    } ,[user])


   

    return (
        <>
          <Helmet>
            <title>StudyCamp | My College</title>
          </Helmet>
          <div>
            <div className="hero min-h-[500px] bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                {user && (
                  <img
                    src={user.photoURL}
                    className="min-w-[400px] h-[400px] rounded-lg shadow-2xl"
                  />
                )}
                <div>
                  <h1 className="text-5xl font-bold">MY COLLEGE</h1>
                  <h1 className="text-5xl font-bold">I Am {user.displayName}</h1>
                  {/* Render the list of colleges here */}
                </div>
              </div>
            </div>
            
            
            {college.map((clg, index) => (
              <div className="college-container flex justify-between items-center" key={clg._id}>
                <div className="college-image w-1/2 my-2">
                  <img className="w-full rounded-full" src={clg.image} alt="" />
                </div>
            
                <div className="college-details w-1/2 ml-5">
                  <div className="college-name">
                    <div className="text-3xl font-bold">Student Name: {clg.name}</div>
                  </div>
                  <div className="college-info">
                    <div>Email: {clg.email}</div>
                    <div className="text-2xl">
                      <h1>Subject: {clg.subject}</h1> 
                      <h1>College Name: {clg.clgName}</h1>
                    </div>
                    <div>Date of Birth: {clg.birth}</div>
                    <div>
                      <p>Address: {clg.address}</p> 
                      <p></p> Phone Number: {clg.phone}
                    </div>
                  </div>
                  <div className="college-actions my-5">
                    
                    <button
                      onClick={() => window.my_modal_5.showModal()}
                      className="btn bg-gradient-to-br from-purple-500 to-pink-500 border-0 ps-3 pe-3"
                    >
                      Pay Fee
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
         
        </>
      );
    };
    
    export default MyCollege;
