import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import blogImage from "../../../assets/blog.jpg";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import { instance } from "../../../utils/api";
import { Url } from "../../../utils/api";

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

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await instance.get(`/landing/customer/Blogs/${id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h5">{error}</Typography>;
  if (!data) return <Typography variant="h5">No details found!</Typography>;

  const imageSrc =
     typeof data?.image === "object"
       ? URL.createObjectURL(data.image)
       : data?.image
         ? `${Url}${data.image}`
         : "/static/images/cards/contemplative-reptile.jpg";

  return (
    <>
      <MainBox image={blogImage}>
        {/* Slide Content */}
        <ContentBox>
          <Typography variant="h2" className="subTitle">
            {data.title.toUpperCase()}
          </Typography>
        </ContentBox>
      </MainBox>
      <Main2Box image={backImage}>
        <Content1Box>
          <ImageBox>
            <StyledImage src={imageSrc} alt="blog" />
          </ImageBox>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#616161",
              marginTop:"30px"
            }}
          >
            {data.description}
          </Typography>
        </Content1Box>
      </Main2Box>
    </>
  );
};

export default CardDetails;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;

  @media (max-width: 900px) {
    height: 200px;
  }
`;
const Main2Box = styled(Box)`
  position: relative;
  width: 100%;
  height: 700px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* filter: blur(8px); */
  /* -webkit-filter: blur(8px); */
  @media (max-width: 900px) {
    height: 1200px;
  }
`;
const ContentBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 10%;
  right: 10%;
  color: white;
  text-align: left;
  z-index: 1;

  .subTitle {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 8px;
    color: #23395d;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  .title {
    font-size: 12px;
    margin-bottom: 8px;
    color: black;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
const Content1Box = styled(Box)`
  position: absolute;
  color: white;
  text-align: left;
  z-index: 1;
  padding: 50px;
`;

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`;
const StyledImage = styled("img")`
  width: 100%;
  height: 500px;
  /* object-fit: cover; */

  @media (max-width: 600px) {
    height: auto;
  }
`;
