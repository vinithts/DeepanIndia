import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { Url } from "../../../utils/api";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  margin: "15px auto",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(73, 50, 107, 0.15)",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  backgroundColor: "#fff",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 32px rgba(73, 50, 107, 0.25)",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

const StyledDivider = styled(Divider)`
  border-width: 1px;
  border-style: solid;
  border-color: #e6e0fa;
  background-color: #e6e0fa;
  width: 100%;
`;

export default function Cards({ e }) {
  const { title, metaDescription, intro, image } = e || {};
  const navigate = useNavigate();
  const imageSrc =
    typeof image === "object"
      ? URL.createObjectURL(image)
      : image?.includes("static") || image?.includes("assets")
      ? image
      : `${Url}${image}`;

  const handleReadMore = () => {
    navigate(`/details/${e?.id || "default"}`);
  };

  return (
    <StyledCard role="article" aria-labelledby={`card-title-${e?.id}`}>
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={title || "Blog Image"}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      />
      <CardContent sx={{ backgroundColor: "#fff", padding: "20px" }}>
        <Typography
          id={`card-title-${e?.id}`}
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#49326b",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            marginBottom: "12px",
          }}
        >
          {title || "Default Title"}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#6b5b95",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            lineHeight: 1.6,
          }}
        >
          {metaDescription || "No description available."}
        </Typography>
      </CardContent>
      <StyledDivider />
      <CardActions sx={{ padding: "16px", justifyContent: "flex-end" }}>
        <Button
          size="medium"
          sx={{
            textTransform: "none",
            color: "#49326b",
            fontWeight: 600,
            fontSize: "16px",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#49326b",
              borderRadius: "8px",
            },
            padding: "8px 16px",
          }}
          endIcon={<ArrowRightAltIcon sx={{ fontSize: "20px" }} />}
          onClick={handleReadMore}
          aria-label={`Read more about ${title || "this blog"}`}
        >
          Read More
        </Button>
      </CardActions>
    </StyledCard>
  );
}