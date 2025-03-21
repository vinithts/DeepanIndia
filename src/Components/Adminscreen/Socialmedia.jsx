import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextField, Grid, Box, Button, Dialog } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { instance } from "../../utils/api";
import Card from "react-bootstrap/Card";

export default function Socialmedia() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    url: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [socialData, setSocialData] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);

  const getSocialData = async () => {
    try {
      const response = await instance.get(`/landing/admin/CaseStudy`);
      if (response.status === 200) {
        setSocialData(response.data || []);
      } else {
        setSocialData([]);
      }
    } catch (error) {
      console.error("Error fetching social data:", error.response || error);
    }
  };

  const createSocialMedia = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("description", formData.description);
      data.append("url", formData.url);
      if (imageFile) data.append("image", imageFile);

      await instance.post(`/landing/admin/CaseStudy`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getSocialData();
      setSuccessOpen(true);
      setCardOpen(false);
    } catch (error) {
      console.error("Error creating social media:", error.response || error);
      setFailureOpen(true);
    }
  };

  const updateSocialMedia = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("description", formData.description);
      data.append("url", formData.url);
      if (imageFile) {
        data.append("image", imageFile);
      }

      const response = await instance.put(
        `/landing/admin/CaseStudy/${editingCardId}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        await getSocialData();
        setSuccessOpen(true);
        setCardOpen(false);
      } else {
        setFailureOpen(true);
      }
    } catch (error) {
      console.error("Error updating social media:", error.response || error);
      setFailureOpen(true);
    }
  };

  const handleOpen = () => {
    setCardOpen(true);
    setFormData({
      title: "",
      subTitle: "",
      description: "",
      url: "",
    });
    setImageFile(null);
    setEditingCardId(null);
  };

  const handleOpenEditModal = (id) => {
    const cardToEdit = socialData.find((card) => card.id === id);
    if (cardToEdit) {
      setFormData({
        title: cardToEdit.title,
        subTitle: cardToEdit.subTitle,
        description: cardToEdit.description,
        url: cardToEdit.url,
      });
      setImageFile(null); // Reset the image file input
      setEditingCardId(id);
      setCardOpen(true);
    }
  };

  const handleSubmit = (e) => {
    if (editingCardId) {
      updateSocialMedia(e);
    } else {
      createSocialMedia(e);
    }
  };

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

  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  useEffect(() => {
    getSocialData();
  }, []);

  return (
    <AdminContentPart>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined" onClick={handleOpen} disabled={cardOpen}>
          Add Media
        </Button>
        <Dialog open={cardOpen} onClose={() => setCardOpen(false)}>
          <Box sx={{ padding: "20px" }}>
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
                  <TextField
                    fullWidth
                    label="Enter Description"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="image"
                    type="file"
                    onChange={handleImageChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter YouTube Link"
                    name="url"
                    value={formData.url}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2,
                }}
              >
                <SubmitButton type="submit">
                  {editingCardId ? "Update" : "Save"}
                </SubmitButton>
                <SubmitButton type="button" onClick={() => setCardOpen(false)}>
                  Cancel
                </SubmitButton>
              </Box>
            </form>
          </Box>
        </Dialog>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ marginTop: 2, display: "flex", alignItems: "stretch" }}
      >
        {socialData.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={card.id}
            style={{ display: "flex" }}
          >
            <Card
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: "300px",
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Card.Body
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title>{card.subTitle}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Editbtn onClick={() => handleOpenEditModal(card.id)}>
                  <MdEdit />
                </Editbtn>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid>

      <SuccessPopup
        open={successOpen}
        message="Form submitted successfully!"
        onClose={handleClose}
      />
      <FailurePopup
        open={failureOpen}
        message="Form submission failed. Please try again."
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
  padding: 10px;
  margin: 5px;
  background: rgb(225, 35, 35);
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #013396;
  }
`;

const Editbtn = styled.button`
  padding: 5px;
  color: #fff;
  border: none;
  background: rgb(225, 35, 35);
  cursor: pointer;
  position: absolute;
  right: 5px;
  bottom: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #013396;
  }
`;
