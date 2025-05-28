import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Skeleton } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { instance } from "../../../utils/api";
import { Url } from "../../../utils/api";
import { defaultCards } from "./DefaultCard";
import Instagram from "../../../assets/instagram_3938036.png";
import LinkedIn from "../../../assets/linkedin_3992606.png";
import Youtube from "../../../assets/play_10090287.png";
import Mail from "../../../assets/mail-icon_11720354.png";
import Whatsapp from "../../../assets/whatsapp-removebg-preview.png";
import facebook from "../../../assets/Facebook_icon.svg.png";
import twitter from "../../../assets/twitter.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

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

const CardDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await instance.get(`/landing/customer/Blogs/${id}`);
        if (response.status === 200 && response.data) {
          setData(response.data);
        } else {
          const fallback = defaultCards.find(
            (card) => String(card.id) === String(id)
          );
          if (fallback) {
            setData(fallback);
          } else {
            setError("No details found!");
          }
        }
      } catch (err) {
        const fallback = defaultCards.find(
          (card) => String(card.id) === String(id)
        );
        if (fallback) {
          setData(fallback);
        } else {
          setError("Failed to fetch data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <MainBox image={aboutImg1}>
          <ContentBox>
            <Skeleton
              variant="text"
              width="60%"
              height={60}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mx: "auto" }}
            />
            <Skeleton
              variant="text"
              width="80%"
              height={30}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mx: "auto" }}
            />
          </ContentBox>
        </MainBox>
        <Main2Box>
          <Container maxWidth="xl">
            <Content1Box>
              <ImageBox>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={400}
                  sx={{ borderRadius: "12px" }}
                />
              </ImageBox>
              <Skeleton variant="text" width="90%" height={80} />
              <ContentSection>
                <Skeleton variant="text" width="40%" height={40} />
                <Skeleton variant="text" width="100%" height={100} />
                <StyledList>
                  {[...Array(3)].map((_, idx) => (
                    <li key={idx}>
                      <Skeleton variant="text" width="80%" height={30} />
                    </li>
                  ))}
                </StyledList>
              </ContentSection>
              <AuthorBox image={aboutImg1}>
                <Box>
                  <Skeleton
                    variant="text"
                    width={150}
                    height={30}
                    sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }}
                  />
                  <Skeleton
                    variant="text"
                    width={100}
                    height={30}
                    sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }}
                  />
                  <Skeleton
                    variant="text"
                    width={120}
                    height={30}
                    sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }}
                  />
                </Box>
              </AuthorBox>
            </Content1Box>
          </Container>
        </Main2Box>
      </>
    );
  }

  if (error) {
    return (
      <Typography variant="h5" color="#49326b">
        {error}
      </Typography>
    );
  }

  if (!data) {
    return (
      <Typography variant="h5" color="#49326b">
        No details found!
      </Typography>
    );
  }

  const imageSrc =
    typeof data?.image === "object"
      ? URL.createObjectURL(data?.image)
      : data?.image?.includes("static") || data?.image?.includes("assets")
        ? data?.image
        : data?.image
          ? `${Url}${data?.image}`
          : defaultCards.find((card) => String(card.id) === String(id))?.image;

  const getIconStyle = (isHovered) => ({
    width: "25px",
    height: "25px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    transform: isHovered ? "scale(1.2)" : "scale(1)",
    filter: isHovered ? "brightness(0.8)" : "brightness(1)",
  });

  return (
    <>
      <MainBox image={aboutImg1}>
        <ContentBox>
          <Typography variant="h3" className="title">
            {data.title.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1" className="subtitle">
            {data.intro}
          </Typography>
        </ContentBox>
      </MainBox>
      <Main2Box>
        <Container maxWidth="lg">
          <Content1Box>
            <ImageBox>
              <StyledImage src={imageSrc} alt="blog" />
            </ImageBox>
            <Typography variant="body1" className="metaDescription">
              {data.metaDescription}
            </Typography>
            {Array.isArray(data.content) && data.content.length > 0 ? (
              data.content.map((section, index) => (
                <ContentSection key={index}>
                  <Typography variant="h4" className="sectionHeading">
                    {section.heading}
                  </Typography>
                  {section.paragraph && (
                    <Typography variant="body2" className="sectionParagraph">
                      {section.paragraph}
                    </Typography>
                  )}
                  {section.items && (
                    <StyledList>
                      {section.items.map((item, idx) => (
                        <li key={idx}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <>
                              <strong>{item.title}</strong>: {item.description}
                            </>
                          )}
                        </li>
                      ))}
                    </StyledList>
                  )}
                </ContentSection>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: "#616161", mt: 2 }}>
                No additional content available.
              </Typography>
            )}
            {data.author && (
              <AuthorBox image={aboutImg1}>
                <Box>
                  <Typography sx={{ color: "#e4d4fa", fontSize: "1rem" }}>
                    Written by {data?.author?.name}
                  </Typography>
                  <Typography sx={{ color: "#e4d4fa", fontSize: "1rem" }}>
                    {data?.author?.company}
                  </Typography>
                  <Typography sx={{ color: "#e4d4fa", fontSize: "1rem" }}>
                    {data?.author?.code}
                  </Typography>
                </Box>
                {/* <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: "20px 0 0 0",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "flex-start",
                  }}
                >
                  <li>
                    <a
                      // href="https://www.instagram.com/deepanindia?igsh=MXNyNXh3a256NGNneg=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={facebook}
                        alt="facebook"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={getIconStyle(hovered)}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      // href="http://www.youtube.com/@deepanindiafinancialservices"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Whatsapp}
                        alt="Whatsapp"
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}
                        style={getIconStyle(hovered1)}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vidya-shree-sr-b9102b302"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={LinkedIn}
                        alt="LinkedIn"
                        onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)}
                        style={getIconStyle(hovered2)}
                      />
                    </a>
                  </li>
                  <li>
                     <a 
                    // href="mailto:Deepanindiafinancialservices@gmail.com"
                    > 
                      <img
                        src={twitter}
                        alt="twitter"
                        onMouseEnter={() => setHovered3(true)}
                        onMouseLeave={() => setHovered3(false)}
                        style={getIconStyle(hovered3)}
                      />
                    </a>
                  </li>
                </ul> */}
              </AuthorBox>
            )}
          </Content1Box>
        </Container>
      </Main2Box>
    </>
  );
};

// Styled components remain unchanged
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  padding: 40px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: ${slideIn} 0.8s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`;

const Main2Box = styled(Box)`
  padding: 80px 0;
  background-color: #f9f3fe;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

const ContentBox = styled(Box)`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 20px;

  .title {
    font-size: 3.5rem;
    font-weight: 900;
    color: #f9f3fe;
    margin-bottom: 16px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 900px) {
      font-size: 2.5rem;
    }

    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: #f9f3fe;
    margin: 0 auto;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Content1Box = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  .metaDescription {
    font-size: 1.1rem;
    font-weight: 500;
    color: #616161;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const StyledImage = styled("img")`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;

  @media (max-width: 600px) {
    border-radius: 8px;
  }
`;

const ContentSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .sectionHeading {
    font-size: 1.8rem;
    font-weight: 700;
    color: #49326b;
  }

  .sectionParagraph {
    font-size: 1rem;
    color: #616161;
    line-height: 1.6;
  }
`;

const StyledList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    font-size: 1rem;
    color: #49326b;
    position: relative;
    padding-left: 24px;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #e4d4fa;
      font-size: 1.5rem;
    }
  }
`;

const AuthorBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 20px;
  background-attachment: fixed;
  animation: ${slideIn} 0.8s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`;

export default CardDetails;
