import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import {
  TextField,
  TextareaAutosize,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { instance } from "../../utils/api";

export default function Story() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [aboutData, setAboutData] = useState({
    id: null,
    title: "",
    subTitle: "",
    image: "",
  });

  // Fetch existing story data
  const getAboutData = async () => {
    try {
      const response = await instance.get(`/landing/admin/Story`);
      if (response.status === 200) {
        const data = response.data[0] || {
          id: null,
          title: "",
          subTitle: "",
          image: "",
        };
        setAboutData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setAboutData((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", aboutData.title);
    formData.append("subTitle", aboutData.subTitle);
    if (image) formData.append("image", image);

    try {
      if (aboutData.id === null) {
        await instance.post(`/landing/admin/Story`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await instance.put(`/landing/admin/Story/${aboutData.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await getAboutData();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      setFailureOpen(true);
    }
  };

  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  return (
    <AdminContentPart>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Story Section
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Enter Title"
            name="title"
            value={aboutData.title}
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            minRows={6}
            placeholder="Enter Subtitle"
            name="subTitle"
            value={aboutData.subTitle}
            onChange={handleFormChange}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background: "#f9f9f9",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ marginBottom: "8px" }}>
            {aboutData.image
              ? `Current Image: ${aboutData.image.split("/").pop()}`
              : image
              ? `Selected Image: ${image.name}`
              : "No image uploaded"}
          </Typography>
          <TextField fullWidth type="file" onChange={handleImageChange} />
        </Grid>
        <Grid item xs={12}>
          <SubmitButton onClick={handleSubmit}>
            {aboutData.id === null ? "Create" : "Update"}
          </SubmitButton>
        </Grid>
      </Grid>

      {/* Popups */}
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
  padding: 30px;
  margin-top: 30px;
  min-height: 600px;
`;

const SubmitButton = styled(Button)`
  && {
    background-color: #e12323;
    color: white;
    font-weight: bold;
    width: 10rem;
    padding: 10px;
    margin: 15px 0;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
