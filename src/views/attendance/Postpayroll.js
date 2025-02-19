// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PostPayroll = () => {
//   const [employees, setEmployees] = useState([]);
//   const [salaries, setSalaries] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://10.0.0.183/api/payroll")
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching employees:", error);
//       });
//   }, []);

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-semibold mb-6 text-gray-800">
//         Payroll Calculation
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="w-full table-fixed border border-gray-300 rounded-lg shadow-md">
//           <thead className="bg-blue-500 text-white text-sm uppercase">
//             <tr>
//               {[
//                 "ID",
//                 "Name",
//                 "Gross Salary",
//                 "Paid Leaves",
//                 "Total Leaves",
//                 "Bonus",
//                 "Adjustments",
//                 "Net Salary",
//               ].map((header) => (
//                 <th key={header} className="border px-4 py-3 text-center whitespace-nowrap">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-gray-50 divide-y divide-gray-200">
//             {employees.map((employee, index) => (
//               <tr
//                 key={employee.employeeId}
//                 className={`${
//                   index % 2 === 0 ? "bg-white" : "bg-gray-100"
//                 } text-center`}
//               >
//                 <td className="border px-4 py-3 whitespace-nowrap">{employee.employeeId}</td>
//                 <td className="border px-4 py-3 whitespace-nowrap">{employee.fullName}</td>
//                 <td className="border px-4 py-3 font-medium text-gray-700 whitespace-nowrap">
//                   ₹{employee.totalSalary}
//                 </td>
//                 <td className="border px-4 py-3 whitespace-nowrap">{employee.paidLeaves}</td>
//                 <td className="border px-4 py-3 whitespace-nowrap">{employee.totalLeaves || "--"}</td>
//                 <td className="border px-4 py-3 whitespace-nowrap">
//                   ₹{employee.bonus || "--"}
//                 </td>
//                 <td className="border px-4 py-3 whitespace-nowrap">
//                   ₹{employee.adjustments || "--"}
//                 </td>
//                 <td className="border px-4 py-3 font-bold text-green-600 whitespace-nowrap">
//                   {salaries[employee.employeeId] ? `₹${salaries[employee.employeeId]}` : "--"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PostPayroll;
