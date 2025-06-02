import React, { useEffect, useState } from "react";
import { styled, keyframes } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Container,
  Divider,
  Pagination,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { defaultCards } from "./DefaultCard";
import { instance, Url } from "../../../utils/api";
import Instagram from "../../../assets/instagram_3938036.png";
import LinkedIn from "../../../assets/linkedin_3992606.png";
import Whatsapp from "../../../assets/whatsapp-removebg-preview.png";
import facebook from "../../../assets/Facebook_icon.svg.png";
import { X } from "lucide-react";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

// Keyframes for animations
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
const MainBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  background: "linear-gradient(135deg, #f9f3fe 0%, #e8e0ff 100%)",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "16px",
  overflow: "hidden",
  border: `2px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  marginBottom: "32px",
  padding: "24px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const BlogListBox = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.grey[100],
  borderRadius: "12px",
  padding: "0px 16px 0px 16px",
  maxHeight: "600px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    borderRadius: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "400px",
  },
}));

const BlogItem = styled(Box)(({ theme, selected }) => ({
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "8px",
  cursor: "pointer",
  border: "2px solid #49326b",
  backgroundColor: selected ? "#49326b" : "transparent",
  color: selected
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: selected
      ? theme.palette.primary.dark
      : theme.palette.grey[200],
    transform: "translateY(-2px)",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  maxHeight: "400px",
  borderRadius: "12px",
  objectFit: "cover",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
  animation: `${fadeIn} 0.5s ease-in`,
  [theme.breakpoints.down("sm")]: {
    maxHeight: "300px",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: "32px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  animation: `${slideIn} 0.8s ease-in-out`,
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
  },
}));

const AuthorBox = styled(Box)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "12px",
  padding: "24px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.common.white,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
    borderRadius: "12px",
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

const SocialIcon = styled("img")(({ theme }) => ({
  width: "32px",
  height: "32px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));

const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const sliderData = data?.length > 0 ? data : defaultCards;
  const [selectedBlog, setSelectedBlog] = useState(sliderData[0] || null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    // Scroll to top of BlogListBox
    document
      .querySelector("#blog-list-box")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const BlogDetails = async () => {
    try {
      const response = await instance.get("/landing/customer/Blogs");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  const imageSrc =
    typeof selectedBlog?.image === "object"
      ? URL.createObjectURL(selectedBlog?.image)
      : selectedBlog?.image?.includes("static") ||
          selectedBlog?.image?.includes("assets")
        ? selectedBlog?.image
        : selectedBlog?.image
          ? `${Url}${selectedBlog?.image}`
          : defaultCards.find((card) => String(card.id) === String(id))?.image;

  // Calculate paginated data
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = sliderData.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(sliderData.length / itemsPerPage);

  // Placeholder for social media icons
  const socialIcons = {
    facebook: facebook,
    whatsapp: Whatsapp,
    linkedin: LinkedIn,
    twitter: <X />,
    instagram: Instagram,
  };

 useEffect(() => {
  BlogDetails();
}, []);

  return (
    <MainBox>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "24px", md: "48px" } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledCard>
                {/* Blog List with Pagination */}
                <Grid item xs={12} md={8}>
                  <BlogListBox id="blog-list-box">
                    {paginatedData.map((blog, index) => (
                      <BlogItem
                        key={blog.id}
                        selected={selectedBlog?.id === blog.id}
                        onClick={() => handleSelectBlog(blog)}
                        role="button"
                        aria-label={`Select blog: ${blog.title || "Blog"}`}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                          }}
                        >
                          {startIndex + index + 1}.{" "}
                          {blog.title || "Default Title"}
                        </Typography>
                      </BlogItem>
                    ))}
                  </BlogListBox>
                  {pageCount > 1 && (
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                    >
                      <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        size="small"
                        sx={{
                          "& .MuiPaginationItem-root": {
                            color: "#49326b",
                            "&:hover": {
                              backgroundColor: "#e8e0ff",
                            },
                            "&.Mui-selected": {
                              backgroundColor: "#49326b",
                              color: "#fff",
                            },
                          },
                        }}
                      />
                    </Box>
                  )}
                </Grid>

                {/* Blog Details */}
                <Grid item xs={12} md={4}>
                  {selectedBlog ? (
                    <Box>
                      <StyledImage
                        src={imageSrc}
                        alt={selectedBlog.title}
                        loading="lazy"
                      />
                    </Box>
                  ) : (
                    <Typography variant="body1" color="text.secondary">
                      Select a blog to view details.
                    </Typography>
                  )}
                </Grid>
              </StyledCard>
            </Grid>

            {/* Blog Content */}
            {selectedBlog && (
              <Grid item xs={12}>
                <ContentBox>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#49326b", mb: 2 }}
                  >
                    {selectedBlog.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "#49326b",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {selectedBlog.metaDescription}
                  </Typography>
                  <Typography
                    component="div"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    sx={{ color: "#49326b", lineHeight: 1.8 }}
                  />
                  <AuthorBox image={aboutImg1}>
                    <Box>
                      {/* <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Written by {selectedBlog?.author}
                      </Typography> */}
                      <Typography
                        component="div"
                        dangerouslySetInnerHTML={{
                          __html: `Written by${selectedBlog.author}`,
                        }}
                        sx={{ color: "#49326b", lineHeight: 1.8 }}
                      />
                      <Typography variant="body2">
                        {selectedBlog?.company}
                      </Typography>
                      <Typography variant="body2">
                        {selectedBlog?.code}
                      </Typography>
                    </Box>
                    {/* <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Share on Facebook"
                      >
                        <SocialIcon src={socialIcons.facebook} alt="Facebook" />
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          `${selectedBlog?.title} ${window.location.href}`
                        )}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Share on WhatsApp"
                      >
                        <SocialIcon src={socialIcons.whatsapp} alt="WhatsApp" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Share on LinkedIn"
                      >
                        <SocialIcon src={socialIcons.linkedin} alt="LinkedIn" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=${encodeURIComponent(selectedBlog?.title)}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Share on Twitter"
                      >
                        <X/>
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Share on Instagram"
                        onClick={() =>
                          alert(
                            "To share on Instagram, screenshot this page and post it to your Instagram feed or story!"
                          )
                        }
                      >
                        <SocialIcon src={socialIcons.instagram} alt="Instagram" />
                      </a>
                    </Box> */}
                  </AuthorBox>
                </ContentBox>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </MainBox>
  );
};

export default Blogs;
