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

export default function Choose() {
  const [tabIndex, setTabIndex] = useState(0);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [sliderData, setSliderData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [openEditPopup, setOpenEditPopup] = useState(false);

  useEffect(() => {
    getChoose();
  }, []);

  const getChoose = async () => {
    try {
      const response = await instance.get(`/landing/admin/WhyChoose`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData) {
        await instance.put(`/landing/admin/WhyChoose/${editData.id}`, {
          title: formData.title,
          subTitle: formData.subTitle,
        });
      } else {
        await instance.post(`/landing/admin/WhyChoose`, {
          title: formData.title,
          subTitle: formData.subTitle,
        });
      }

      getChoose();
      setSuccessOpen(true);
      handleClosePopup();
    } catch (error) {
      console.error("Error submitting slider:", error);
      setFailureOpen(true);
    }
  };

const deleteChoose = async (id) => {
    try {
      const response = await instance.delete(`/landing/admin/WhyChoose/deletechoose/${id}`);
      if (response.status === 200) {
        getChoose();
        setSuccessOpen(true);
      } else {
        setFailureOpen(true);
      }
    } catch (error) {
      console.error("Error deleting slider:", error);
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
    setFormData({ title: "", subTitle: "" });
    setImageFile(null);
  };

  return (
    <AdminContentPart>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}>
        <Tab label="Create Choose" />
        <Tab label="Manage Choose" />
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
            <TableHead sx={{ backgroundColor: "#121472", color: "#fff" }}>
              <TableRow>
                <TableCell sx={{color: "#fff"}}>Title</TableCell>
                <TableCell sx={{color: "#fff"}}>Subtitle</TableCell>
                <TableCell sx={{color: "#fff"}}>Edit</TableCell>
                <TableCell sx={{color: "#fff"}}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sliderData.map((slider) => (
                <TableRow key={slider.id}>
                  <TableCell>{slider.title}</TableCell>
                  <TableCell>{slider.subTitle}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(slider)}>Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => deleteChoose(slider.id)}>Delete</Button>
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
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "20px",
              width: "100%",
            }}
          >
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
   padding: 30px 30px;
   margin-top: 30px;
  background-color: #f3f3f3;
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
