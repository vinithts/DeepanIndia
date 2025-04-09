import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextField, TextareaAutosize, Grid, Button } from "@mui/material";
import { instance } from "../../utils/api";

export default function Story() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [aboutData, setAboutData] = useState({
    id: null,
    title: "",
    subTitle: "",
  });

  // Handle image change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Create new About data
  const createAboutData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", aboutData.title);
      formData.append("subTitle", aboutData.subTitle);
      if (image) formData.append("image", image);

      await instance.post(`/landing/admin/Story`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await getAboutData();
      setSuccessOpen(true);
    } catch (error) {
      console.error(
        "Error creating about:",
        error.response?.data || error.message
      );
      setFailureOpen(true);
    }
  };

  // Update existing About data
  const updateAboutData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", aboutData.title);
      formData.append("subTitle", aboutData.subTitle);
      if (image) formData.append("image", image);

      await instance.put(`/landing/admin/Story/${aboutData.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await getAboutData();
      setSuccessOpen(true);
    } catch (error) {
      console.error(
        "Error updating about:",
        error.response?.data || error.message
      );
      setFailureOpen(true);
    }
  };
  
  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch about data
  const getAboutData = async () => {
    try {
      const response = await instance.get(`/landing/admin/Story`);
      if (response.status === 200) {
        const data = response.data[0] || {
          id: null,
          title: "",
          subTitle: "",
        };
        setAboutData(data);
      }
    } catch (error) {
      console.error(
        "Error fetching about data:",
        error.response?.data || error.message
      );
    }
  };

  // Close popups
  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  return (
    <AdminContentPart>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <TextField
                className="my-3"
                fullWidth
                label="Enter Title"
                name="title"
                value={aboutData.title}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextareaAutosize
                className="my-3"
                minRows={6}
                placeholder="Enter subTitle"
                name="subTitle"
                value={aboutData.subTitle}
                onChange={handleFormChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  background: "#f3f3f3",
                }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField fullWidth type="file" onChange={handleImageChange} />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-start" className="my-5">
            <Grid item>
              {aboutData.id === null ? (
                <SubmitButton type="submit" onClick={createAboutData}>
                  Create
                </SubmitButton>
              ) : (
                <SubmitButton type="submit" onClick={updateAboutData}>
                  Update
                </SubmitButton>
              )}
            </Grid>
          </Grid>
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
        message="Something went wrong. Please try again!"
        onClose={handleClose}
      />
    </AdminContentPart>
  );
}

const AdminContentPart = styled.div`
  background-color: #f3f3f3;
  padding: 30px 15px;
  height: 600px;
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
    background-color: #0056b3;
  }
`;