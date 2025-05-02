import React from "react";
import { Link } from "react-router-dom";
import imgg from "../assets/Home/Seat_Matrix.webp"
const Admissions = () => {
  return (
    <div className="p-6 my-10 max-w-4xl mx-auto bg-gray-800 text-white rounded-lg shadow-md space-y-6">
      <h1 className="text-2xl font-semibold text-blue-900">B.Tech </h1>

      <section>
        <h2 className="text-xl font-medium mb-2">Orientation Programme</h2>
        <p>Invitation for Orientation Programme of B.Tech 1st year (IT & CS)</p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">
          Information for Freshers 2024
        </h2>
        <p>Physical Reporting dates for B.Tech are as follows:</p>
        <ul className="list-disc list-inside pl-4">
          <li>
            22nd Aug 2024 – B.Tech (IT-60 students) + B.Tech (CSB - first 20
            students)
          </li>
          <li>
            23rd Aug 2024 – B.Tech (CS-60 students) + B.Tech (CSB - second 20
            students)
          </li>
          <li>
            24th Aug 2024 – B.Tech (CSAI-60 students) + B.Tech (CSB - last 20
            students)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Admission Process</h2>
        <p>
          Admissions to the four-year B.Tech. Program in CS branch of the
          Institute is made through Central Seat Allocation Board 2021
          (CSAB-2021), based on merit in JEE (Mains).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Reservation Policy</h2>
        <p>
          The Institute is open to all races, creeds, and classes including
          persons of either sex (including transgender). As a Central Education
          Institution, IIIT follows the Central Educational Institutions
          (Reservation in Admission) Act, 2006.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Seat Matrix</h2>
         <img src={imgg} ></img>
      </section>

     

     
    </div>
  );
};

export default Admissions;
