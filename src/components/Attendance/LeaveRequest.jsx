import React, { useState } from 'react'
import HeaderTitle from '../Common/HeaderTitle'
import AttendanceCard from '../Dashboard/AttendanceCard'
import { SEARCH } from '../../utils/constants';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

const attendanceData = {
  // tableHeader:[" ","Name","Joining Date","Designations","Status","Options"],
  tableContent :[
    {  name: "MAGESH", email: "magesh@Dotcod.in", requestDate: "2023-04-12",leaveType:"casual leave",reason:"fever",daysCount:'01',  status: "Approved" },
    {  name: "Tesla", email: "Rashull@Dotcod.in", requestDate: "2023-05-15",leaveType:"earned leave",reason:"casual",daysCount:'01',  status: "Pending" },
    {  name: "GM", email: "gm@Dotcod.in", requestDate: "2023-04-19",leaveType:"casual leave",reason:"vacation",daysCount:'01',  status: "Approved" },
    {  name: "AARP", email: "aarp@Dotcod.in", requestDate: "2023-01-02",leaveType:"permission",reason:"permission",daysCount:'01',  status: "Rejected" },
    {  name: "Disney", email: "disney@Dotcod.in", requestDate: "2023-09-04",leaveType:"sick leave",reason:"sick",daysCount:'01',  status: "Pending" }
  ]
};
const LeaveRequest = () => {
  const [employees, setEmployees] = useState(attendanceData.tableContent);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Toggle state for sorting
  const [statusFilter, setStatusFilter] = useState(""); // Filter by status
  const detail = [
    {title:"Casual Leave",count:'04', backgroundColor: "#FFEFE7",percentage:"+2% Jan month"},
    {title:"Emergency Leave",count:'06', backgroundColor: "#FDEBF9",percentage:"+2% Jan month"},
    {title:"Total Leave Jan",count:10, backgroundColor: "#E8F0FB",percentage:"+2% Jan month"},
    {title:"Today Leave",count:'02', backgroundColor: "#FDEBF9",percentage:"23/01 Monday"},
]
  // Function to handle sorting
  const handleSort = (field) => {
    const newOrder = sortBy === field && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(field);
    setSortOrder(newOrder);

    const sortedEmployees = [...employees].sort((a, b) => {
      if (a[field] && b[field]) {
        if (newOrder === "asc") {
          return a[field].localeCompare(b[field]);
        } else {
          return b[field].localeCompare(a[field]);
        }
      }
      return 0;
    });

    setEmployees(sortedEmployees);
  };

  // Function to filter employees based on search and status
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "" || employee.status === statusFilter || employee.leaveType === statusFilter)
    );
  });

  return (
    <div className="leave-request-section">
      <div className="leave-request-title">
        <HeaderTitle title={'Leave Request'}/>
      </div>
      <div className="leave-request-attendance" style={{width:"90%"}}>
        <AttendanceCard detail={detail} />
      </div>
      <div className="controls" style={{marginTop:"2%"}}>
              <div className="employee-count">
                <p>Attendances  <span>{attendanceData.tableContent.length}</span></p>
              </div>
              <div className="emp-search-section">
                <div className="search-icon">
                  <img src={SEARCH} alt="" />
                  
                  </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="search-input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="table-wrapper">
              <table className="employee-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort("name")} className="sort-dropdown">
                      Name
                      {sortBy === "name" ? (sortOrder === "asc" ? <FaSortUp className='sort-icon'/> : <FaSortDown className='sort-icon'/>) : <FaSort className='sort-icon'/>}
                    </th>
                    <th>
                      <select className="sort-dropdown"  onChange={(e) => handleSort(e.target.value)}>
                        <option value="joinDate">Request Date</option>
                      </select>
                    </th>
                    <th>
                      <select className="sort-dropdown"  onChange={(e) => setStatusFilter(e.target.value)}>
                      <option value="">All Leaves</option>
                      {[...new Set(employees.map((item) => item.leaveType))].map((leaveType, index) => (
                          <option key={index} value={leaveType}>{leaveType}</option>
                        ))}
                      </select>
                      {sortBy === "leaveType" ? (sortOrder === "asc" ? <FaSortUp className='sort-icon'/> : <FaSortDown className='sort-icon'/>) : <FaSort className='sort-icon'/>}
                    </th>
                    <th onClick={() => handleSort("reason")} className="sort-dropdown">
                        Reason
                      {sortBy === "reason" ? (sortOrder === "asc" ? <FaSortUp className='sort-icon'/> : <FaSortDown className='sort-icon'/>) : <FaSort className='sort-icon'/>}
                    </th>
                    <th>
                      <select className="sort-dropdown"  onChange={(e) => handleSort(e.target.value)}>
                        <option value="daysCount">No Days</option>
                      </select>
                      {sortBy === "daysCount" ? (sortOrder === "asc" ? <FaSortUp className='sort-icon'/> : <FaSortDown className='sort-icon'/>) : <FaSort className='sort-icon'/>}
                    </th>
                    <th>
                      <select className="sort-dropdown"  onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="">All Status</option>
                        {[...new Set(employees.map((item) => item.status))].map((status, index) => (
                          <option key={index} value={status}>{status}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                    <select className="sort-dropdown" >
                        <option value="actions">Actions</option>
                      </select>
                    </th>
                  </tr>
                  
                </thead>
                <tbody>
                  {filteredEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>
                        <div>
                          <p className="emp-name">{employee.name}</p>
                          <p className="emp-email">{employee.email}</p>
                        </div>
                      </td>
                      <td>{employee.requestDate}</td>
                      <td>{employee.leaveType}</td>
                      <td>{employee.reason}</td>
                      <td>{employee.daysCount}</td>
                      <td>{employee.status}</td>
                      <td className="options-btn">
                        <button >...</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>  
    </div>
  )
}

export default LeaveRequest
