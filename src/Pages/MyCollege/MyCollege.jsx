import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const MyCollege = () => {
  const { user, id } = useContext(AuthContext);
  const [college, setCollege] = useState([]);
  const collegeData = useLoaderData();

  useEffect(() => {
    fetch(`https://study-camp-server.vercel.app/mycollege?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, [user]);

  const onSubmit = () => {
    console.log(collegeData);
    const modifiedCollegeData = { ...collegeData };
    modifiedCollegeData._id = id;

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(modifiedCollegeData),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
  };

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
                  <p>Phone Number: {clg.phone}</p>
                  <p>Tuition Fee: {collegeData.fee}</p>
                </div>
              </div>
              <div className="college-actions my-5">
                <button
                  onClick={() => onSubmit()}
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
