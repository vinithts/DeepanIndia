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
import DeleteIcon from "@mui/icons-material/Delete";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";

export default function Cardss() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [cardDetailsData, setCardDetailsData] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    image: null,
    metaDescription: "",
    content: "",
    author: "",
    company:"",
    code: "",
  });
  const [editingCardId, setEditingCardId] = useState(null);
  const [quillContent, setQuillContent] = useState("");

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
    // Validate content
    if (!quillContent.trim()) {
      setFailureOpen(true);
      return;
    }
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("metaDescription", formData.metaDescription);
      data.append("content", quillContent); 
      data.append("author", formData.author);
      data.append("company", formData.company);
      data.append("code", formData.code);
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

  const deleteBlog = async (id) => {
    try {
      const response = await instance.delete(
        `/landing/admin/Blogs/deleteblog/${id}`
      );
      if (response.status === 200) {
        getCardDetails();
        setSuccessOpen(true);
      } else {
        setFailureOpen(true);
      }
    } catch (error) {
      console.error("Error deleting slider:", error);
      setFailureOpen(true);
    }
  };

  const handleOpen = () => {
    setCardOpen(true);
    setFormData({
      title: "",
      subTitle: "",
      image: null,
      metaDescription: "",
      content: "",
      author: "",
      company: "",
      code: "",
    });
    setImageFile(null);
    setEditingCardId(null);
    setQuillContent("");
  };

  const handleOpenEditModal = (id) => {
    const cardToEdit = cardDetailsData.find((card) => card.id === id);
    setFormData({
      title: cardToEdit.title,
      subTitle: cardToEdit.subTitle,
      image: cardToEdit.image,
      metaDescription: cardToEdit.metaDescription || "",
      content: cardToEdit.content || "",
      author: cardToEdit.author || "",
      company: cardToEdit.company || "",
      code: cardToEdit.code || "",
    });
    setEditingCardId(id);
    setCardOpen(true);
    setQuillContent(cardToEdit.content || ""); // Load content as HTML
  };

  const UpdateHeader = async (id) => {
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("metaDescription", formData.metaDescription);
      data.append("content", quillContent); // Send HTML content
      data.append("author", formData.author);
      data.append("company", formData.company);
      data.append("code", formData.code);
      if (imageFile) data.append("image", imageFile);

      await instance.put(`/landing/admin/Blogs/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getCardDetails();
      setSuccessOpen(true);
      setCardOpen(false);
    } catch (error) {
      console.error("Error updating header:", error);
      setFailureOpen(true);
    }
  };

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
    setQuillContent("");
  };

  const handleQuillChange = (content) => {
    setQuillContent(content); 
    setFormData((prev) => ({
      ...prev,
      content: content,
    }));
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
        maxWidth="md"
        fullWidth
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
                      minRows={3}
                      placeholder="Enter Meta Description"
                      name="metaDescription"
                      value={formData.metaDescription}
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
                  <Grid item xs={12}>
                    <ReactQuill
                      theme="snow"
                      value={quillContent}
                      placeholder="Enter content"
                      onChange={handleQuillChange}
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, 4, false] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["link"],
                          ["clean"],
                        ],
                      }}
                      style={{ height: "200px", marginBottom: "40px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      minRows={4}
                      placeholder="Enter Author"
                      name="author"
                      value={formData.author}
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
                   <Grid item xs={12}>
                      <TextField
                      fullWidth
                      label="Enter Company"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      required
                    />
                  </Grid>
                   <Grid item xs={12}>
                  <TextField
                      fullWidth
                      label="Enter Code"
                      name="code"
                      value={formData.code}
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
                      required={!editingCardId}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-start" className="my-5">
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
        {cardDetailsData.map((e) => (
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
                {e.author && (
                  <Card.Text style={{ fontSize: "12px", color: "#777" }}>
                    Author: {e.author}
                  </Card.Text>
                )}
              </Card.Body>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Editbtn1 onClick={() => deleteBlog(e.id)}>
                  <DeleteIcon />
                </Editbtn1>
                <Editbtn onClick={() => handleOpenEditModal(e.id)}>
                  <MdEdit />
                </Editbtn>
              </Box>
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
  padding: 30px 30px;
  margin-top: 30px;
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
  background: rgb(114, 128, 248);
  transition: all 0.5s ease-in-out;
  right: 5px;
  bottom: 5px;

  &:hover {
    background-color: #0a1f4b;
  }
`;

const Editbtn1 = styled.button`
  padding: 5px;
  color: #fff;
  border: none;
  background: rgb(225, 35, 35);
  transition: all 0.5s ease-in-out;
  right: 5px;
  bottom: 5px;

  &:hover {
    background-color: #e28924;
  }
`;