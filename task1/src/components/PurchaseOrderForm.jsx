// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Swal from "sweetalert2";

// const PurchaseOrderForm = () => {
//   const [formData, setFormData] = useState({
//     clientName: "",
//     poType: "",
//     poNumber: "",
//     receivedOn: "",
//     receivedFromName: "",
//     receivedFromEmail: "",
//     poStartDate: "",
//     poEndDate: "",
//     budget: "",
//     currency: "USD",
//     jobs: [
//       {
//         jobTitle: "",
//         jobId: "",
//       },
//     ],
//   });

//   const [errors, setErrors] = useState({});

//   // Generic input handler
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Job fields change
//   const handleJobChange = (index, field, value) => {
//     const updatedJobs = [...formData.jobs];
//     updatedJobs[index][field] = value;
//     setFormData({ ...formData, jobs: updatedJobs });
//   };

//   // Add Job block
//   const handleAddJob = () => {
//     setFormData({
//       ...formData,
//       jobs: [...formData.jobs, { jobTitle: "", jobId: "" }],
//     });
//   };

//   // Reset
//   const handleReset = () => {
//     setFormData({
//       clientName: "",
//       poType: "",
//       poNumber: "",
//       receivedOn: "",
//       receivedFromName: "",
//       receivedFromEmail: "",
//       poStartDate: "",
//       poEndDate: "",
//       budget: "",
//       currency: "USD",
//       jobs: [{ jobTitle: "", jobId: "" }],
//     });
//     setErrors({});
//   };

//   // Validation
//   const validate = () => {
//     let newErrors = {};
//     if (!formData.clientName) newErrors.clientName = "Client is required";
//     if (!formData.poType) newErrors.poType = "PO Type is required";
//     if (!formData.poNumber) newErrors.poNumber = "PO Number required";
//     if (!formData.receivedOn) newErrors.receivedOn = "Received On required";
//     if (!formData.receivedFromName) newErrors.receivedFromName = "Name required";
//     if (!formData.receivedFromEmail) newErrors.receivedFromEmail = "Email required";
//     if (!formData.poStartDate) newErrors.poStartDate = "Start Date required";
//     if (!formData.poEndDate) newErrors.poEndDate = "End Date required";
//     if (!formData.budget) newErrors.budget = "Budget required";
//     if (!formData.currency)newErrors.currency ="Currency required"

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form Submitted:", formData);
//       Swal.fire({
//         title: "Success!",
//         text: "Form submitted successfully 🎉",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className=" mt-4 mb-5">
//       <h5 className="mb-3">Purchase Order | New</h5>
//       <form onSubmit={handleSubmit}>
//         {/* Purchase Order Section */}
//         <div className="card p-3 mb-4 shadow-sm">
//           <h6>Purchase Order Details</h6>
//           <div className="row g-3">
//             <div className="col-md-4">
//               <label className="form-label">Client Name *</label>
//               <select
//                 className="form-select"
//                 name="clientName"
//                 value={formData.clientName}
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option value="Collabera">Collabera</option>
//                 <option value="ABC Corp">ABC Corp</option>
//               </select>
//               <div className="text-danger">{errors.clientName}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">Purchase Order Type *</label>
//               <select
//                 className="form-select"
//                 name="poType"
//                 value={formData.poType}
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option value="Group">Group PO</option>
//                 <option value="Individual">Individual PO</option>
//               </select>
//               <div className="text-danger">{errors.poType}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">PO Number *</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="poNumber"
//                 value={formData.poNumber}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.poNumber}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">Received On *</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 name="receivedOn"
//                 value={formData.receivedOn}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.receivedOn}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">Received From (Name)*</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="receivedFromName"
//                 value={formData.receivedFromName}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.receivedFromName}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">Received From (Email)*</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 name="receivedFromEmail"
//                 value={formData.receivedFromEmail}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.receivedFromEmail}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">PO Start Date *</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 name="poStartDate"
//                 value={formData.poStartDate}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.poStartDate}</div>
//             </div>

//             <div className="col-md-4">
//               <label className="form-label">PO End Date *</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 name="poEndDate"
//                 value={formData.poEndDate}
//                 min={formData.poStartDate}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.poEndDate}</div>
//             </div>

//             <div className="col-md-2">
//               <label className="form-label">Budget *</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="budget"
//                 value={formData.budget}
//                 onChange={handleChange}
//               />
//               <div className="text-danger">{errors.budget}</div>
//             </div>

//             <div className="col-md-2">
//               <label className="form-label">Currency *</label>
//               <select
//                 className="form-select"
//                 name="currency"
//                 value={formData.currency}
//                 onChange={handleChange}
//               >
//                 <option value="USD">USD - Dollar</option>
//                 <option value="INR">INR - Rupee</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Talent Section */}
//         <div className="card p-3 mb-4 shadow-sm">
//           <h6>Talent Detail</h6>
//           {formData.jobs.map((job, index) => (
//             <div key={index} className="border p-3 mb-3 rounded">
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <label className="form-label">Job Title / REQ Name *</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={job.jobTitle}
//                     onChange={(e) => handleJobChange(index, "jobTitle", e.target.value)}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label">Job ID / REQ ID *</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={job.jobId}
//                     onChange={(e) => handleJobChange(index, "jobId", e.target.value)}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}

//           {formData.poType === "Group" && (
//             <button
//               type="button"
//               className="btn btn-outline-primary"
//               onClick={handleAddJob}
//             >
//               + Add Another
//             </button>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="d-flex justify-content-end gap-2">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={handleReset}
//           >
//             Reset
//           </button>
//           <button type="submit" className="btn btn-primary">
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PurchaseOrderForm;




import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const PurchaseOrderForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    poType: "",
    poNumber: "",
    receivedOn: "",
    receivedFromName: "",
    receivedFromEmail: "",
    poStartDate: "",
    poEndDate: "",
    budget: "",
    currency: "USD",
    jobs: [
      {
        jobTitle: "",
        jobId: "",
        talents: [
          {
            name: "",
            contractDuration: "",
            billRate: "",
            billCurrency: "USD",
            stdTimeBR: "",
            stdTimeCurrency: "USD",
            overTimeBR: "",
            overTimeCurrency: "USD",
          },
        ],
      },
    ],
  });

  const [errors, setErrors] = useState({});

  // ---- SIMPLE VALIDATION ----
  const validate = () => {
    let newErrors = {};

    if (!formData.clientName.trim())
      newErrors.clientName = "Client Name is required";
    if (!formData.poType) newErrors.poType = "Purchase Order Type is required";
    if (!formData.poNumber.trim())
      newErrors.poNumber = "Purchase Order Number is required";
    if (!formData.receivedOn)
      newErrors.receivedOn = "Received On date is required";
    if (!formData.receivedFromName.trim())
      newErrors.receivedFromName = "Received From Name is required";
    if (!formData.receivedFromEmail.trim())
      newErrors.receivedFromEmail = "Email is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.receivedFromEmail)) {
        newErrors.receivedFromEmail = "Enter a valid email address";
      }
    }
    if (!formData.poStartDate)
      newErrors.poStartDate = "PO Start Date is required";
    if (!formData.poEndDate) newErrors.poEndDate = "PO End Date is required";
    else if (formData.poEndDate < formData.poStartDate) {
      newErrors.poEndDate = "End Date cannot be before Start Date";
    }
    if (!formData.budget) newErrors.budget = "Budget is required";

    formData.jobs.forEach((job, jIndex) => {
      if (!job.jobTitle.trim())
        newErrors[`jobTitle_${jIndex}`] = "Job Title is required";
      if (!job.jobId.trim())
        newErrors[`jobId_${jIndex}`] = "Job ID is required";

      job.talents.forEach((talent, tIndex) => {
        if (!talent.name.trim())
          newErrors[`talentName_${jIndex}_${tIndex}`] =
            "Talent Name is required";
        if (!talent.contractDuration.trim())
          newErrors[`contractDuration_${jIndex}_${tIndex}`] =
            "Contract Duration is required";
        if (!talent.billRate)
          newErrors[`billRate_${jIndex}_${tIndex}`] = "Bill Rate is required";
        if (!talent.stdTimeBR)
          newErrors[`stdTimeBR_${jIndex}_${tIndex}`] =
            "Standard Time Bill Rate is required";
        if (!talent.overTimeBR)
          newErrors[`overTimeBR_${jIndex}_${tIndex}`] =
            "Overtime Bill Rate is required";
      });
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---- HANDLERS ----
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleJobChange = (index, field, value) => {
    const updatedJobs = [...formData.jobs];
    updatedJobs[index][field] = value;
    setFormData({ ...formData, jobs: updatedJobs });
  };

  const handleTalentChange = (jobIndex, talentIndex, field, value) => {
    const updatedJobs = [...formData.jobs];
    updatedJobs[jobIndex].talents[talentIndex][field] = value;
    setFormData({ ...formData, jobs: updatedJobs });
  };

  const handleAddJob = () => {
    setFormData({
      ...formData,
      jobs: [
        ...formData.jobs,
        {
          jobTitle: "",
          jobId: "",
          talents: [
            {
              name: "",
              contractDuration: "",
              billRate: "",
              billCurrency: "USD",
              stdTimeBR: "",
              stdTimeCurrency: "USD",
              overTimeBR: "",
              overTimeCurrency: "USD",
            },
          ],
        },
      ],
    });
  };

  const handleAddTalent = (jobIndex) => {
    const updatedJobs = [...formData.jobs];
    updatedJobs[jobIndex].talents.push({
      name: "",
      contractDuration: "",
      billRate: "",
      billCurrency: "USD",
      stdTimeBR: "",
      stdTimeCurrency: "USD",
      overTimeBR: "",
      overTimeCurrency: "USD",
    });
    setFormData({ ...formData, jobs: updatedJobs });
  };

  const handleReset = () => {
    setFormData({
      clientName: "",
      poType: "",
      poNumber: "",
      receivedOn: "",
      receivedFromName: "",
      receivedFromEmail: "",
      poStartDate: "",
      poEndDate: "",
      budget: "",
      currency: "USD",
      jobs: [
        {
          jobTitle: "",
          jobId: "",
          talents: [
            {
              name: "",
              contractDuration: "",
              billRate: "",
              billCurrency: "USD",
              stdTimeBR: "",
              stdTimeCurrency: "USD",
              overTimeBR: "",
              overTimeCurrency: "USD",
            },
          ],
        },
      ],
    });
    setErrors({});
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    console.log("Form Submitted:", formData);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Form submitted successfully!",
      confirmButtonColor: "#3085d6",
    });
  }
};

  return (
    <div className="mt-4 mb-5">
      <h5 className="mb-3">Purchase Order | New</h5>
      <form onSubmit={handleSubmit}>
        {/* Purchase Order Section */}
        <div className="card p-3 mb-4 shadow-sm">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Client Name *</label>
              <input
                type="text"
                name="clientName"
                className="form-control"
                value={formData.clientName}
                onChange={handleChange}
                style={{ backgroundColor: "#fff" }}
              />
              {errors.clientName && (
                <small className="text-danger">{errors.clientName}</small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Purchase Order Type *</label>
              <select
                className="form-select"
                name="poType"
                value={formData.poType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Group">Group PO</option>
                <option value="Individual">Individual PO</option>
              </select>
              {errors.poType && (
                <small className="text-danger">{errors.poType}</small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Purchase Order No *</label>
              <input
                type="text"
                className="form-control"
                name="poNumber"
                value={formData.poNumber}
                onChange={handleChange}
                style={{ backgroundColor: "#fff" }}
              />
              {errors.poNumber && (
                <small className="text-danger">{errors.poNumber}</small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Received On *</label>
              <input
                type="date"
                className="form-control"
                name="receivedOn"
                value={formData.receivedOn}
                onChange={handleChange}
              />
              {errors.receivedOn && (
                <small className="text-danger">{errors.receivedOn}</small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Received From (Name)*</label>
              <input
                type="text"
                className="form-control"
                name="receivedFromName"
                value={formData.receivedFromName}
                onChange={handleChange}
                style={{ backgroundColor: "#fff" }}
              />
              {errors.receivedFromName && (
                <small className="text-danger">{errors.receivedFromName}</small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Received From (Email)*</label>
              <input
                type="email"
                className="form-control"
                name="receivedFromEmail"
                value={formData.receivedFromEmail}
                onChange={handleChange}
                style={{ backgroundColor: "#fff" }}
              />
              {errors.receivedFromEmail && (
                <small className="text-danger">
                  {errors.receivedFromEmail}
                </small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">PO Start Date *</label>
              <input
                type="date"
                className="form-control"
                name="poStartDate"
                value={formData.poStartDate}
                onChange={handleChange}
              />
              {errors.poStartDate && (
                <small className="text-danger">{errors.poStartDate}</small>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">PO End Date *</label>
              <input
                type="date"
                className="form-control"
                name="poEndDate"
                value={formData.poEndDate}
                onChange={handleChange}
                min={formData.poStartDate}
              />
              {errors.poEndDate && (
                <small className="text-danger">{errors.poEndDate}</small>
              )}
            </div>
            <div className="col-md-2">
              <label className="form-label">Budget *</label>
              <input
                type="text"
                className="form-control"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              />
              {errors.budget && (
                <small className="text-danger">{errors.budget}</small>
              )}
            </div>
            <div className="col-md-2">
              <label className="form-label">Currency *</label>
              <select
                className="form-select"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="USD">USD - Dollar</option>
                <option value="INR">INR - Rupee</option>
              </select>
            </div>
          </div>
        </div>

        {/* Talent Section */}
        {formData.jobs.map((job, jobIndex) => (
          <div key={jobIndex} className="card p-3 mb-4 shadow-sm">
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Job Title/REQ Name *</label>
                <input
                  type="text"
                  className="form-control"
                  value={job.jobTitle}
                  onChange={(e) =>
                    handleJobChange(jobIndex, "jobTitle", e.target.value)
                  }
                />
                {errors[`jobTitle_${jobIndex}`] && (
                  <small className="text-danger">
                    {errors[`jobTitle_${jobIndex}`]}
                  </small>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Job ID/REQ ID *</label>
                <input
                  type="text"
                  className="form-control"
                  value={job.jobId}
                  onChange={(e) =>
                    handleJobChange(jobIndex, "jobId", e.target.value)
                  }
                />
                {errors[`jobId_${jobIndex}`] && (
                  <small className="text-danger">
                    {errors[`jobId_${jobIndex}`]}
                  </small>
                )}
              </div>
            </div>

            {job.talents.map((talent, talentIndex) => (
              <div
                key={talentIndex}
                className="border rounded p-3 mb-3 bg-light"
              >
                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label">Talent Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={talent.name}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "name",
                          e.target.value
                        )
                      }
                    />
                    {errors[`talentName_${jobIndex}_${talentIndex}`] && (
                      <small className="text-danger">
                        {errors[`talentName_${jobIndex}_${talentIndex}`]}
                      </small>
                    )}
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Contract Duration *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Months"
                      value={talent.contractDuration}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "contractDuration",
                          e.target.value
                        )
                      }
                    />
                    {errors[`contractDuration_${jobIndex}_${talentIndex}`] && (
                      <small className="text-danger">
                        {
                          errors[`contractDuration_${jobIndex}_${talentIndex}`]
                        }
                      </small>
                    )}
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Bill Rate *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={talent.billRate}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "billRate",
                          e.target.value
                        )
                      }
                    />
                    {errors[`billRate_${jobIndex}_${talentIndex}`] && (
                      <small className="text-danger">
                        {errors[`billRate_${jobIndex}_${talentIndex}`]}
                      </small>
                    )}
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Bill Currency</label>
                    <select
                      className="form-select"
                      value={talent.billCurrency}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "billCurrency",
                          e.target.value
                        )
                      }
                    >
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Standard Time BR *</label>
                    <input
                      type="number"
                      className="form-control"
                      value={talent.stdTimeBR}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "stdTimeBR",
                          e.target.value
                        )
                      }
                    />
                    {errors[`stdTimeBR_${jobIndex}_${talentIndex}`] && (
                      <small className="text-danger">
                        {errors[`stdTimeBR_${jobIndex}_${talentIndex}`]}
                      </small>
                    )}
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">ST Currency</label>
                    <select
                      className="form-select"
                      value={talent.stdTimeCurrency}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "stdTimeCurrency",
                          e.target.value
                        )
                      }
                    >
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Overtime BR *</label>
                    <input
                      type="number"
                      className="form-control"
                      value={talent.overTimeBR}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "overTimeBR",
                          e.target.value
                        )
                      }
                    />
                    {errors[`overTimeBR_${jobIndex}_${talentIndex}`] && (
                      <small className="text-danger">
                        {errors[`overTimeBR_${jobIndex}_${talentIndex}`]}
                      </small>
                    )}
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">OT Currency</label>
                    <select
                      className="form-select"
                      value={talent.overTimeCurrency}
                      onChange={(e) =>
                        handleTalentChange(
                          jobIndex,
                          talentIndex,
                          "overTimeCurrency",
                          e.target.value
                        )
                      }
                    >
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => handleAddTalent(jobIndex)}
            >
              + Add Talent
            </button>
          </div>
        ))}

        {formData.poType === "Group" && (
          <button
            type="button"
            className="btn btn-outline-dark mb-4"
            onClick={handleAddJob}
          >
            + Add Another Job
          </button>
        )}

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseOrderForm;
