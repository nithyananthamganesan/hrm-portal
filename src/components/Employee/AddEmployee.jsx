import React, { useState } from 'react'
import Accordion from './Accordion';
import ActionButton from '../Common/ActionButton';
import { useNavigate } from 'react-router-dom';
import employeeDetails  from '../../utils/config/employeeData.json';

const AddEmployee = () => {
  const [employeeList, setEmployeeList] = useState(employeeDetails);
  const [employeeData, setEmployeeData] = useState({
    empName: "",
    empNumber: "",
    empMobileNumber: "",
    empEmail: "",
    empJoiningDate: "",
    empStatus: "",
    dateOfBirth:"",
    gender:"",
    maritalStatus:"",
    isPhysicalChallenged:"",
    bloodGroup:"",
    personalEmailId:""
  });
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setEmployeeData((prev) => ({ ...prev, [key]: value }));
  };

  const employeeDetail = {
    title: "Add details of an employee",
    employeeDetails: [
      { labelName: "Employee Name", inputType: "text", placeholder: "Enter Employee Name", isMandatory: true, getter: employeeData.empName, setter: (val) => handleChange("empName", val),errorMessage:"Enter employee name" },
      { labelName: "Employee Number", inputType: "text", placeholder: "Enter Employee Number", isMandatory: true, getter: employeeData.empNumber, setter: (val) => handleChange("empNumber", val),errorMessage:"Enter employee number" },
      { labelName: "Date of Joining", inputType: "date", placeholder: "Select joining date", isMandatory: true, getter: employeeData.empJoiningDate, setter: (val) => handleChange("empJoiningDate", val),errorMessage:"Enter employee joining date" },
      { labelName: "divider" },
      { labelName: "Email Id", inputType: "email", placeholder: "Enter Email Id", isMandatory: true, getter: employeeData.empEmail, setter: (val) => handleChange("empEmail", val),errorMessage:"Enter email id" },
      { labelName: "Mobile Number", inputType: "number", placeholder: "Enter Mobile Number", isMandatory: true, getter: employeeData.empMobileNumber, setter: (val) => handleChange("empMobileNumber", val),errorMessage:"Enter mobile number" },
      { labelName: "Employee Status", inputType: "select", placeholder: "Employee Status", isMandatory: true, getter: employeeData.empStatus, setter: (val) => handleChange("empStatus", val),errorMessage:"Enter employee status", config: ["Confirmed", "Probation", "Internship"] }
    ],
  };
  const personalDetail = {
    title:"Personal details",
    employeeDetails:[
      {labelName:"Date of Birth",inputType:"date",placeholder:"Enter Date of Birth",isMandatory:true,getter:employeeData.dateOfBirth,setter:(val) => handleChange("dateOfBirth",val),errorMessage:"Enter date of birth",},
      {labelName:"Gender",inputType:"select",placeholder:"Gender",isMandatory:true,getter:employeeData.gender,setter:(val) => handleChange("gender",val),errorMessage:"Enter gender",config:['Male','Female','Others']},
      {labelName:"Marital Status",inputType:"select",placeholder:"Marital Status",isMandatory:true,getter:employeeData.maritalStatus,setter:(val) => handleChange("maritalStatus",val),errorMessage:"Enter marital status",config:['Single','Married', 'Widowed']},
      {labelName:"divider"},
      {labelName:"Is Physical Challenged",inputType:"select",placeholder:"Yes",isMandatory:true,getter:employeeData.isPhysicalChallenged,setter:(val) => handleChange("isPhysicalChallenged",val),errorMessage:"Please select a value",config:['Yes','No']},
      {labelName:"Blood Group",inputType:"select",placeholder:"O+",isMandatory:true,getter:employeeData.bloodGroup,setter:(val) => handleChange("bloodGroup",val),errorMessage:"Enter blood group",config:['A+','B+','O+', 'AB+','A-','B-','O-','AB-']},
      {labelName:"Personal Email Id",inputType:"email",placeholder:"Enter Email Id",isMandatory:true,getter:employeeData.personalEmailId,setter:(val) => handleChange("personalEmailId",val),errorMessage:"Enter email id",},
    ]
  }
  const departmentDetail = {
    title:"Department",
    employeeDetails:[]
  }
  const configurationDetail = {
    title:"Configuration",
    employeeDetails:[]
  }

  const handleCloseClick = (e) => {
    e.preventDefault();
    navigate('/employee/list')
  }
  const handleFormSave = async (e) => {
    e.preventDefault();
  
    try {
      const updatedList = [...employeeList, employeeData];
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      setEmployeeList(updatedList);
      console.log("updatedList",updatedList);
      
  
      console.log("Success: Employee data saved!");
  
      navigate('/employee/list');
    } catch (error) {
      console.error("Error saving employee data:", error);
    }
  };
  
  

  return (
    <div className="add-employee-section">
      <form type='submit'>
        <div className="form-details">
          <Accordion details={employeeDetail} />
        </div>
        <div className="form-details">
          <Accordion details={personalDetail} />
        </div>
        <div className="form-details">
          <Accordion details={departmentDetail} />
        </div>
        <div className="form-details">
          <Accordion details={configurationDetail} />
        </div>
      <div className="form-buttons">
        <div className="form-button">
        <ActionButton btnName={'close'} onClick={handleCloseClick} backgroundColor={'#fff'} textColor={'#000'}/>
        </div>
        
        <div className="form-button">
        <ActionButton btnName={'save'} onClick={handleFormSave} backgroundColor={'#000'} textColor={'#fff'}/>
        </div>
        
      </div>
      </form>
    </div>
  )
}

export default AddEmployee
