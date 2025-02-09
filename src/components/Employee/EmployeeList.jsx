import React, { useState } from "react";
import "./employee.css"; 
import HeaderTitle from "../Common/HeaderTitle";
import { SEARCH } from "../../utils/constants";
import ActionButton from "../Common/ActionButton";
import { useNavigate } from "react-router-dom";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const employeeData = {
  tableHeader:[" ","Name","Joining Date","Designations","Status","Options"],
  tableContent :[
    { id: "11D001", name: "MAGESH", email: "magesh@Dotcod.in", joinDate: "2023-04-12", designation: "Software Engineer", status: "Confirmed",createdDate:"2023-04-14",releivedDate:"2023-04-14",salaryHikeDate:"2023-04-14" },
    { id: "11D002", name: "Tesla", email: "Rashull@Dotcod.in", joinDate: "2023-05-15", designation: "Software Engineer", status: "Probation",createdDate:"2023-04-17",releivedDate:"2023-04-14",salaryHikeDate:"2023-04-14" },
    { id: "11D003", name: "GM", email: "gm@Dotcod.in", joinDate: "2023-04-19", designation: "Software Engineer", status: "Confirmed",createdDate:"2023-04-20",releivedDate:"2023-04-14",salaryHikeDate:"2023-04-14" },
    { id: "11D004", name: "AARP", email: "aarp@Dotcod.in", joinDate: "2023-01-02", designation: "Software Engineer", status: "Probation",createdDate:"2024-01-05",releivedDate:"2023-04-14",salaryHikeDate:"2023-04-14" },
    { id: "11D005", name: "Disney", email: "disney@Dotcod.in", joinDate: "2023-09-04", designation: "Software Engineer", status: "Confirmed",createdDate:"2023-09-06",releivedDate:"2023-04-14",salaryHikeDate:"2023-04-14" }
  ]
};

const EmployeeList = () => {
  const [employees, setEmployees] = useState(employeeData.tableContent);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Toggle state for sorting
  const [statusFilter, setStatusFilter] = useState(""); // Filter by status
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate('/employee/add');
  };

  // Function to handle sorting toggle
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
      (statusFilter === "" || employee.status === statusFilter)
    );
  });

  return (
    <div className="table-container">
      <div className="header">
        <HeaderTitle title={'Employee'}/>
        <div className="buttons">
          <ActionButton btnName={'+ Import Excel'} backgroundColor={'#000'} textColor={'#fff'} onClick={()=>{}}/>
          <ActionButton btnName={'+ Add Employee'} backgroundColor={'#fff'} textColor={'#000'} onClick={handleAddButtonClick}/>
        </div>
      </div>

      <div className="controls">
        <div className="employee-count">
          <p>Employee  <span>{filteredEmployees.length}</span></p>
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
          />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th></th>
              <th onClick={() => handleSort("name")} className="sort-dropdown">
                Name
                {sortBy === "name" ? (sortOrder === "asc" ? <FaSortUp className='sort-icon'/> : <FaSortDown className='sort-icon'/>) : <FaSort className='sort-icon'/>}
              </th>
              <th>
                <select className="sort-dropdown" onChange={(e) => handleSort(e.target.value)}>
                  <option value="joinDate">Joined Date</option>
                  <option value="createdDate">Created Date</option>
                  <option value="relievedDate">Relieved Date</option>
                  <option value="salaryHikeDate">Salary Hike Date</option>
                </select>
              </th>
              <th onClick={() => handleSort("designation")} className="sort-dropdown">
                Designation
                {sortBy === "designation" ? (sortOrder === "asc" ? <FaSortUp className='sort-icon'/> : <FaSortDown className='sort-icon'/>) : <FaSort className='sort-icon'/>}
              </th>
              <th>
                <select className="sort-dropdown"  onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="">All Status</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Probation">Probation</option>
                </select>
              </th>
              <th className="sort-dropdown">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>
                  <input type="radio" name="select" />
                  <span className="emp-id">{employee.id}</span>
                </td>
                <td>
                  <div>
                    <p className="emp-name">{employee.name}</p>
                    <p className="emp-email">{employee.email}</p>
                  </div>
                </td>
                <td>{employee.joinDate}</td>
                <td>{employee.designation}</td>
                <td>{employee.status}</td>
                <td className="options-btn">
                  <button>...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
