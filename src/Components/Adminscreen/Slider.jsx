// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { TextField, TextareaAutosize, Grid } from "@mui/material";
// import SuccessPopup from "./Successpop";
// import FailurePopup from "./Failurepop";
// import { instance } from "../../utils/api";

// export default function Slider() {
//   const [successOpen, setSuccessOpen] = useState(false);
//   const [failureOpen, setFailureOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     subTitle: "",
//     description: "",
//     button_name: "",
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [sliderData, setSliderData] = useState(null);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const getHeader = async () => {
//     try {
//       const response = await instance.get(`/landing/admin/Header`);
//       if (response.status === 200 && response.data.length > 0) {
//         setSliderData(response.data[0]);
//         setFormData(response.data[0]);
//       } else {
//         setSliderData(null);
//       }
//     } catch (error) {
//       console.error("Error fetching header data:", error);
//     }
//   };

//   // Create new slider data
//   const createHeader = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("subTitle", formData.subTitle);
//       data.append("description", formData.description);
//       data.append("button_name", formData.button_name);
//       if (imageFile) data.append("images", imageFile);

//       await instance.post(`/landing/admin/Header`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       await getHeader();
//       setSuccessOpen(true);
//     } catch (error) {
//       console.error("Error creating header:", error);
//       setFailureOpen(true);
//     }
//   };

//   const updateHeader = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("subTitle", formData.subTitle);
//       data.append("description", formData.description);
//       data.append("button_name", formData.button_name);
//       if (imageFile) data.append("images", imageFile);

//       await instance.put(`/landing/admin/Header/1`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       await getHeader();
//       setSuccessOpen(true);
//     } catch (error) {
//       console.error("Error updating header:", error);
//       setFailureOpen(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     if (sliderData) {
//       updateHeader(e);
//     } else {
//       createHeader(e);
//     }
//   };

//   useEffect(() => {
//     getHeader();
//   }, []);

//   const handleClose = () => {
//     setSuccessOpen(false);
//     setFailureOpen(false);
//   };

//   return (
//     <AdminContentPart>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item md={12} xs={12}>
//                 <TextField
//                   className="my-3"
//                   fullWidth
//                   label="Enter Title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </Grid>
//               <Grid item md={12} xs={12}>
//                 <TextField
//                   className="my-3"
//                   fullWidth
//                   label="Enter Subtitle"
//                   name="subTitle"
//                   value={formData.subTitle}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </Grid>
//               <Grid item md={12} xs={12}>
//                 <TextareaAutosize
//                   className="my-3"
//                   minRows={6}
//                   placeholder="Enter Description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleFormChange}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     fontSize: "16px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                     background: "#f3f3f3",
//                   }}
//                   required
//                 />
//               </Grid>
//               <Grid item md={12} xs={12}>
//                 <TextField
//                   className="my-3"
//                   fullWidth
//                   label="Enter Button Name"
//                   name="button_name"
//                   value={formData.button_name}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </Grid>
//               <Grid item md={12} xs={12}>
//                 <TextField
//                   className="my-3"
//                   fullWidth
//                   name="images"
//                   type="file"
//                   onChange={handleImageChange}
//                 />
//               </Grid>
//             </Grid>
//             <Grid container justifyContent="flex-start" className="my-5">
//               <Grid item>
//                 <SubmitButton type="submit">
//                   {sliderData ? "Update" : "Create"}
//                 </SubmitButton>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>

//       {/* Success and Failure Popups */}
//       <SuccessPopup
//         open={successOpen}
//         message="Form submitted successfully!"
//         onClose={handleClose}
//       />
//       <FailurePopup
//         open={failureOpen}
//         message="Form submission failed. Please try again."
//         onClose={handleClose}
//       />
//     </AdminContentPart>
//   );
// }

// const AdminContentPart = styled.div`
//   background-color: #f3f3f3;
//   padding: 30px 15px;
// `;

// const SubmitButton = styled.button`
//   color: #fff;
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 10px 10px;
//   border: 1px solid;
//   margin: 10px 15px;
//   text-align: center;
//   width: 10rem;
//   cursor: pointer;
//   background: rgb(225, 35, 35);
//   transition: all 0.5s ease-in-out;

//   &:hover {
//     background-color: #013396;
//   }
// `;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  TextField,
  TextareaAutosize,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Tabs,
  Tab,
  Dialog,
  Typography,
  Box,
} from "@mui/material";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import { instance } from "../../utils/api";

export default function Slider() {
  const [tabIndex, setTabIndex] = useState(0);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    button_name: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [sliderData, setSliderData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [openEditPopup, setOpenEditPopup] = useState(false);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    try {
      const response = await instance.get(`/landing/admin/Header`);
      if (response.status === 200) {
        setSliderData(response.data);
      }
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (imageFile) data.append("images", imageFile);

      if (editData) {
        await instance.put(`/landing/admin/Header/${editData.id}`, data);
      } else {
        await instance.post(`/landing/admin/Header`, data);
      }

      getSliders();
      setSuccessOpen(true);
      handleClosePopup();
    } catch (error) {
      console.error("Error submitting slider:", error);
      setFailureOpen(true);
    }
  };

  const handleEdit = (slider) => {
    setEditData(slider);
    setFormData(slider);
    setOpenEditPopup(true);
  };

  const handleClosePopup = () => {
    setOpenEditPopup(false);
    setEditData(null);
    setFormData({ title: "", subTitle: "", description: "", button_name: "" });
    setImageFile(null);
  };

  return (
    <AdminContentPart>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}>
        <Tab label="Create Slider" />
        <Tab label="Manage Sliders" />
      </Tabs>
      {tabIndex === 0 && (
        <Grid container spacing={3} marginTop={"20px"}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Title"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Subtitle"
                    name="subTitle"
                    value={formData.subTitle}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    minRows={6}
                    placeholder="Enter Description"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                    style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Button Name"
                    name="button_name"
                    value={formData.button_name}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    onChange={handleImageChange}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" className="my-5">
                <Grid item>
                  <SubmitButton type="submit">
                    {editData ? "Update" : "Create"}
                  </SubmitButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      )}
      {tabIndex === 1 && (
        <TableContainer component={Paper} marginTop={"20px"}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Subtitle</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Button Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sliderData.map((slider) => (
                <TableRow key={slider.id}>
                  <TableCell>{slider.title}</TableCell>
                  <TableCell>{slider.subTitle}</TableCell>
                  <TableCell>{slider.description}</TableCell>
                  <TableCell>{slider.button_name}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(slider)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Dialog open={openEditPopup} onClose={handleClosePopup}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Edit Slider
        </Typography>

        <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Title"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Subtitle"
                name="subTitle"
                value={formData.subTitle}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                minRows={4}
                placeholder="Enter Description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                required
                style={{ width: "100%", padding: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Button Name"
                name="button_name"
                value={formData.button_name}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type="file" onChange={handleImageChange} />
            </Grid>
          </Grid>
          <Box sx={{display: "flex",flexDirection:"row", justifyContent: "space-between", marginTop: "20px", width:"100%"}}>
          <Submit1Button onClick={handleClosePopup}>Close</Submit1Button>
          <SubmitButton type="submit">Update</SubmitButton>
          </Box>
        </form>
      </Dialog>
      <SuccessPopup
        open={successOpen}
        message="Form submitted successfully!"
        onClose={() => setSuccessOpen(false)}
      />
      <FailurePopup
        open={failureOpen}
        message="Form submission failed. Please try again."
        onClose={() => setFailureOpen(false)}
      />
    </AdminContentPart>
  );
}

const AdminContentPart = styled.div`
  padding: 30px 15px;
`;
const SubmitButton = styled.button`
  color: #fff;
  background: red;
  padding: 10px;
  width: 10rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: blue;
  }
`;

const Submit1Button = styled.button`
  color: #110f0f;
  background: #a8d9f5;
  padding: 10px;
  width: 10rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: blue;
  }
`;