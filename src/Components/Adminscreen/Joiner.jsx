import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextField, Grid } from "@mui/material";
import { instance } from "../../utils/api";

export default function Joiner() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    button_name1: "",
    button_name2: "",
  });
  const [joinData, setJoinData] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const getJoinUS = async () => {
    try {
      const response = await instance.get(`/landing/admin/JoinUs`);
      if (response.status === 200 && response.data.length > 0) {
        setJoinData(response.data[0]);
        setFormData(response.data[0]);
      } else {
        setJoinData(null);
      }
    } catch (error) {
      console.error("Error fetching JoinUs data:", error);
    }
  };

  const createJoinUs = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("button_name1", formData.button_name1);
      data.append("button_name2", formData.button_name2);
      if (imageFile) data.append("image", imageFile);

      await instance.post(`/landing/admin/JoinUs`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getJoinUS();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error creating JoinUs:", error);
      setFailureOpen(true);
    }
  };

  const updateJoinUs = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("button_name1", formData.button_name1);
      data.append("button_name2", formData.button_name2);
      if (imageFile) data.append("image", imageFile);

      await instance.put(`/landing/admin/JoinUs/1`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getJoinUS();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error updating header:", error);
      setFailureOpen(true);
    }
  };

  const handleSubmit = (e) => {
    if (joinData) {
      updateJoinUs(e);
    } else {
      createJoinUs(e);
    }
  };

  useEffect(() => {
    getJoinUS();
  }, []);

  // Close popups
  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  return (
    <AdminContentPart>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  label="Enter Title"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  label="Enter First Button Name"
                  name="button_name1"
                  value={formData.button_name1}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  label="Enter Second Button Name"
                  name="button_name2"
                  value={formData.button_name2}
                  onChange={handleFormChange}
                  required
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  name="image"
                  type="file"
                  onChange={handleImageChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" className="my-5">
              <Grid item>
                <SubmitButton type="submit">
                  {joinData ? "Update" : "Create"}
                </SubmitButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {/* Success and Failure Popups */}
      <SuccessPopup
        open={successOpen}
        message="Form submitted successfully!"
        onClose={handleClose}
      />
      <FailurePopup
        open={failureOpen}
        message="Form submission failed. Please fill all required fields."
        onClose={handleClose}
      />
    </AdminContentPart>
  );
}

const AdminContentPart = styled.div`
  background-color: #f3f3f3;
  padding: 30px 15px;
`;
const SubmitButton = styled.button`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 10px;
  border: 1px solid;
  margin: 10px 15px;
  text-align: center;
  width: 10rem;
  cursor: pointer;
  background: rgb(225, 35, 35);
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #013396;
  }
`;
