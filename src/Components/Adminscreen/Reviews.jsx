import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { Grid, TextField, Button, Dialog, Box } from "@mui/material";
import { MdEdit } from "react-icons/md";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { instance } from "../../utils/api";
import Card from "react-bootstrap/Card";

export default function Reviews() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [reviewDetailsData, setReviewDetailsData] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
  });
  const [editingCardId, setEditingCardId] = useState(null);

  // Fetch Reviews Data
  const getReviewData = async () => {
    try {
      const response = await instance.get("/landing/admin/Reviews");
      if (response.status === 200) {
        setReviewDetailsData(response.data || []);
      } else {
        setReviewDetailsData([]);
      }
    } catch (error) {
      console.error(
        "Error fetching review data:",
        error.response?.data || error.message
      );
    }
  };

  // Create Review
  const createReviewData = async () => {
    try {
      await instance.post("/landing/admin/Reviews", formData);
      await getReviewData();
      setSuccessOpen(true);
      setCardOpen(false);
    } catch (error) {
      console.error(
        "Error creating review:",
        error.response?.data || error.message
      );
      setFailureOpen(true);
    }
  };

  // Update Review
  const updateReviewData = async () => {
    try {
      await instance.put(`/landing/admin/Reviews/${editingCardId}`, formData);
      await getReviewData();
      setSuccessOpen(true);
      setCardOpen(false);
    } catch (error) {
      console.error(
        "Error updating review:",
        error.response?.data || error.message
      );
      setFailureOpen(true);
    }
  };

  // Form Change Handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset Form
  const resetForm = () => {
    setFormData({ title: "", subTitle: "", description: "" });
    setEditingCardId(null);
  };

  // Handle Add Button
  const handleOpen = () => {
    resetForm();
    setCardOpen(true);
  };

  // Handle Edit Button
  const handleOpenEditModal = (id) => {
    const review = reviewDetailsData.find((review) => review.id === id);
    if (review) {
      setFormData({
        title: review.title,
        subTitle: review.subTitle,
        description: review.description,
      });
      setEditingCardId(id);
      setCardOpen(true);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    editingCardId ? updateReviewData() : createReviewData();
  };

  // Close Dialog
  const handleCloseDialog = () => {
    resetForm();
    setCardOpen(false);
  };

  // Close Popups
  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  // Fetch Reviews on Mount
  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <AdminContentPart>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          startIcon={<ControlPointIcon />}
          onClick={handleOpen}
        >
          Add Review
        </Button>
      </Box>
      <Dialog
        open={cardOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <Box sx={{ padding: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Review Title"
                  name="title"
                  fullWidth
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Customer Name"
                  name="subTitle"
                  fullWidth
                  value={formData.subTitle}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Customer Details"
                  name="description"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12} textAlign="right">
                <SubmitButton type="submit">
                  {editingCardId ? "Update" : "Create"}
                </SubmitButton>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {reviewDetailsData.map((review) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
            <StyledCard>
              <StyledCardBody>
                <Card.Title>{review.title}</Card.Title>
                <Card.Subtitle>{review.subTitle}</Card.Subtitle>
                <Card.Text>{review.description}</Card.Text>
                <Editbtn
                  aria-label="Edit Review"
                  onClick={() => handleOpenEditModal(review.id)}
                >
                  <MdEdit />
                </Editbtn>
              </StyledCardBody>
            </StyledCard>
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
  padding: 10px 20px;
  border: none;
  background: rgb(225, 35, 35);
  border-radius: 4px;
  cursor: pointer;
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
  position: absolute;
  right: 5px;
  bottom: 5px;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #013396;
  }
`;
const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const StyledCardBody = styled(Card.Body)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
