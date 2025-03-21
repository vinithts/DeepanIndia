import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Url } from "../../../utils/api";
import { Divider } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

// Styled Components (Optional)
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "15px auto",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export default function Cards({ e }) {
  const { description, subTitle, title, image } = e || {};
  const navigate = useNavigate();
  const imageSrc =
    typeof e?.image === "object"
      ? URL.createObjectURL(e.image)
      : e?.image
        ? `${Url}${e.image}`
        : "/static/images/cards/contemplative-reptile.jpg";

  const handleReadMore = () => {
    navigate(`/details/${e?.id || "default"}`);
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="180"
        image={imageSrc}
        alt={title || "Card Image"}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography sx={{ fontSize: "26px", fontWeight: 600, color: "black" }}>
          {subTitle || "Default Title"}
        </Typography>
        {/* <StyledDivider /> */}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(78, 75, 75, 0.6)",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            overflow: "hidden",
          }}
        >
          {description || "No description available."}
        </Typography>
      </CardContent>
      <StyledDivider />
      <CardActions>
        <Button
          size="small"
          sx={{
            textTransform: "none",
            color: "rgba(58, 57, 59, 0.7)",
            fontWeight: 500,
            "&:hover": { color: "rgba(58, 57, 59, 1)" },
          }}
          endIcon={<ArrowRightAltIcon />}
          onClick={handleReadMore}
        >
          Read More
        </Button>
      </CardActions>
    </StyledCard>
  );
}

const StyledDivider = styled(Divider)`
  border-width: 1px;
  border-style: solid;
  border-color: rgba(50, 8, 99, 0.12);
  background-color: rgba(50, 8, 99, 0.12);
  width: 100%;
`;
