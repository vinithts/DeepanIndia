import { Box, Typography, Grid, Divider, Container } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import AlbumIcon from '@mui/icons-material/Album';
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import financial1 from "../../../assets/sl_022321_41020_27-removebg-preview.png";
import financial2 from "../../../assets/f57b10ed-08f4-4064-a94f-5ba2d10792d8-removebg-preview.png";
import financial3 from "../../../assets/4012590-removebg-preview.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const TrainingInFinancialMarketing = ({ serviceName }) => {
  const courses = [
    {
      title: "Wise Investor Course",
      description:
        "Beginner-friendly course covering savings, budgeting, mutual funds, and basic stock investing.",
      audience: "Perfect for: Students, Working Professionals, Housewives, Retirees",
      img: financial1,
      alt: "Student at laptop learning finance",
    },
    {
      title: "Smart Trading for Wealth",
      description:
        "Intermediate-level program focusing on stock & index trading, technical analysis, charting tools, and risk management.",
      audience: "Includes hands-on learning with live market sessions.",
      img: financial2,
      alt: "Candlestick chart with annotations",
    },
    {
      title: "Pro Trader for Full-time Career",
      description:
        "Advanced training in professional trading systems, trader psychology, capital management, and option strategies.",
      audience:
        "Covers derivatives, intraday/swing trading, and includes mentorship & placement support.",
      img: financial3,
      alt: "Dual-screen setup, trader analyzing markets",
    },
  ];

  return (
    <Box sx={{ px: 2, py: 4 }}>
       <Container maxWidth="xl">
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <InfoCard image={aboutImg1}>
              <ImageWrapper>
                <img style={
                  {
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    animation: `${imageFloat} 3s ease-in-out infinite alternate`,
                    sm: {
                      width: "100%",
                      height: "auto",
                    },
                }}
                  src={course.img}
                  alt={course.alt}
                />
              </ImageWrapper>
                <StyledDivider  style={{marginTop:"20px"}}/>
              <Typography variant="h5" fontWeight="bold" color="white" sx={{ mt: 2 }}>
                <AlbumIcon style={{paddingRight:"10px"}}/>{course.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}>
                <ArrowForwardIosIcon style={{paddingRight:"10px",color:"white"}}/>
              <Typography sx={{ mt: 1,color:"white" }}>{course.description}</Typography>
              </Box>
               <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}>
                <ArrowForwardIosIcon style={{paddingRight:"10px",color:"white"}}/>
              <Typography sx={{ mt: 1,color:"white" }}>{course.audience}</Typography>
               </Box>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default TrainingInFinancialMarketing;

const fadeIn = keyframes`
  0% {
    transform: scale(1.02);
    /* opacity: 0.7; */
  }
  50% {
    transform: scale(1.03);
    /* opacity: 0.9; */
  }
  100% {
    transform: scale(1);
    /* opacity: 1; */
  }
`;

const imageFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const InfoCard = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "30px",
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,

  "&:hover": {
    transition: "all 0.55s ease-in",
    boxShadow: `0 20px 40px #49326b`,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  "@media (max-width: 600px)": {
    padding: "20px 10px",
  },
}));

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const StyledDivider = styled(Divider)`
  background-color: #ffffff;
  height: 6px;
  /* margin: 50px; */
  width: 100%;
`;