import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextField, TextareaAutosize, Grid, Button, Box } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { instance, Url } from "../../utils/api";
import Dialog from "@mui/material/Dialog";
import Card from "react-bootstrap/Card";
import { MdEdit } from "react-icons/md";

export default function Cardss() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [cardDetailsData, setCardDetailsData] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = React.useState({
    title: "",
    subTitle: "",
    description: "",
    image: null,
  });
  const [editingCardId, setEditingCardId] = useState(null);

  const getCardDetails = async () => {
    try {
      const response = await instance.get(`/landing/admin/Blogs`);
      if (response.status === 200 && response.data.length > 0) {
        setCardDetailsData(response.data);
      }
    } catch (error) {
      console.error("Error fetching header data:", error);
    }
  };

  const createHeader = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("description", formData.description);
      // data.append('image', formData.image);
      if (imageFile) data.append("image", imageFile);

      await instance.post(`/landing/admin/Blogs`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getCardDetails();
      setSuccessOpen(true);
      setCardOpen(false);
    } catch (error) {
      console.error("Error creating header:", error);
      setFailureOpen(true);
    }
  };
  const handleOpen = () => {
    setCardOpen(true);
    setFormData({
      title: "",
      subTitle: "",
      description: "",
      image: null,
    });
    setEditingCardId(null);
  };
  const handleOpenEditModal = (id) => {
    const cardToEdit = cardDetailsData.find((card) => card.id === id);
    setFormData({
      title: cardToEdit.title,
      subTitle: cardToEdit.subTitle,
      description: cardToEdit.description,
      image: cardToEdit.image,
    });
    setEditingCardId(id);
    setCardOpen(true);
  };
  const UpdateHeader = async (id) => {
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("description", formData.description);
      // data.append('image', formData.image);
      if (imageFile) data.append("image", imageFile);

      await instance.put(`/landing/admin/Blogs/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getCardDetails();
      setSuccessOpen(true);
      setCardOpen(false);
    } catch (error) {
      console.error("Error creating header:", error);
      setFailureOpen(true);
    }
  };

  // Close popups
  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
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
  const handleCloses = () => {
    setCardOpen(false);
  };
  useEffect(() => {
    getCardDetails();
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
        <Button
          variant="outlined"
          startIcon={<ControlPointIcon />}
          onClick={handleOpen}
          disabled={cardOpen}
        >
          Add Cards
        </Button>
      </Box>
      <Dialog
        open={cardOpen}
        onClose={handleCloses}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <form
                onSubmit={
                  editingCardId
                    ? (e) => {
                        e.preventDefault();
                        UpdateHeader(editingCardId);
                      }
                    : createHeader
                }
              >
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
                      label="Enter subTitle"
                      name="subTitle"
                      value={formData.subTitle}
                      onChange={handleFormChange}
                      required
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <TextareaAutosize
                      className="my-3"
                      minRows={6}
                      placeholder="Enter Paragraph"
                      name="description"
                      value={formData.description}
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
                  {/* <Grid item> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <SubmitButton type="submit">
                      {editingCardId ? "Update" : "Save"}
                    </SubmitButton>
                    <SubmitButton onClick={handleCloses}>Cancel</SubmitButton>
                  </Box>
                  {/* </Grid> */}
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
      >
        {cardDetailsData.map((e, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={e.id}>
            <Card>
              <Card.Img
                variant="top"
                className="cardHeight"
                src={
                  typeof e?.image === "object"
                    ? URL.createObjectURL(e.image)
                    : Url + e.image
                }
              />
              <Card.Body className="cardbody">
                <Card.Title>{e.subTitle}</Card.Title>
                <Card.Text style={{ fontWeight: "900", fontSize: "18px" }}>
                  {e.description}
                </Card.Text>
                <Editbtn onClick={() => handleOpenEditModal(e.id)}>
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
        message="Form submission failed. Please fill all required fields."
        onClose={handleClose}
      />
    </AdminContentPart>
  );
}

const AdminContentPart = styled.div`
  background-color: #f3f3f3;
  padding: 30px 15px;
  .cardbody {
    position: relative;
  }
  .cardHeight {
    height: 200px;
  }
`;
const SubmitButton = styled.button`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 10px;
  border: 1px solid;
  margin: 5px 5px;
  text-align: center;
  width: 10rem;
  cursor: pointer;
  background: rgb(225, 35, 35);
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #013396;
  }
`;
const Editbtn = styled.button`
  padding: 5px;
  color: #fff;
  border: none;
  background: rgb(225, 35, 35);
  transition: all 0.5s ease-in-out;
  position: absolute;
  right: 5px;
  bottom: 5px;

  &:hover {
    background-color: #013396;
  }
`;
