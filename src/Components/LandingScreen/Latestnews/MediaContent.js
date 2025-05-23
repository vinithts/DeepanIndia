import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  Play,
  ArrowRight,
  Building2,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const fallbackData = [
  {
    subTitle: "Case Study 1",
    title: "How ABC Corp Transformed Finance",
    description:
      "ABC Corp used our platform to automate financial workflows and cut costs by 30%. Their journey from manual processes to full automation showcases the power of modern fintech solutions.",
    icon: Building2,
    url: "https://www.youtube.com/watch?v=FFgwSwzSiyw",
    metrics: { savings: "30%", time: "60%" },
  },
  {
    subTitle: "Case Study 2",
    title: "Scaling Fund Management at XYZ Ltd.",
    description:
      "XYZ Ltd. improved fund transparency and reduced errors using our analytics suite. Real-time insights transformed their decision-making process completely.",
    icon: TrendingUp,
    url: "https://www.youtube.com/watch?v=_hqedAS6n3Q",
    metrics: { accuracy: "95%", efficiency: "40%" },
  },
  {
    subTitle: "Case Study 3",
    title: "Real-Time Insights for PQR Finance",
    description:
      "PQR Finance achieved real-time insights and faster decision making with our dashboards. Data visualization became their competitive advantage.",
    icon: BarChart3,
    url: "https://www.youtube.com/watch?v=NcC7yTBBOe4",
    metrics: { speed: "75%", insights: "50%" },
  },
];

const MediaContent = ({ data }) => {
  const caseStudyData = data?.caseStudyData?.length
    ? data.caseStudyData
    : fallbackData;
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (caseStudyData.length) {
      setProgress(new Array(caseStudyData.length).fill(0));
    }
  }, [caseStudyData.length]);

  useEffect(() => {
    if (!caseStudyData.length || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[slideIndex] += 2;

        if (newProgress[slideIndex] >= 100) {
          const resetProgress = new Array(caseStudyData.length).fill(0);
          const nextIndex = (slideIndex + 1) % caseStudyData.length;
          setSlideIndex(nextIndex);
          return resetProgress;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [slideIndex, caseStudyData.length, isPlaying]);

  const handleProgressClick = (index) => {
    setSlideIndex(index);
    setProgress(new Array(caseStudyData.length).fill(0));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <StyledSection>
      <Container>
        <HeaderSection>
          <MainTitle>Finance Leaders Trust Us</MainTitle>
          <Subtitle>
            Discover how industry leaders transformed their operations
          </Subtitle>
        </HeaderSection>

        <SliderContainer>
          {caseStudyData.map((item, index) => {
            const IconComponent = item.icon || Building2;
            return (
              <Slide key={index} active={index === slideIndex}>
                <SlideContent>
                  <VisualSection>
                    <VideoPreview>
                      <PlayButton
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play size={32} />
                      </PlayButton>
                      <VideoOverlay />
                    </VideoPreview>
                  </VisualSection>
                  <ContentSection>
                    <IconWrapper>
                      <IconComponent size={48} />
                    </IconWrapper>
                    <TextContent>
                      <SubTitle>{item.subTitle}</SubTitle>
                      <Title>{item.title}</Title>
                      <Description>{item.description}</Description>

                      {item.metrics && (
                        <MetricsContainer>
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <Metric key={key}>
                              <MetricValue>{value}</MetricValue>
                              <MetricLabel>{key}</MetricLabel>
                            </Metric>
                          ))}
                        </MetricsContainer>
                      )}

                      <ActionButton
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play size={16} />
                        Watch Case Study
                        <ArrowRight size={16} />
                      </ActionButton>
                    </TextContent>
                  </ContentSection>
                </SlideContent>
              </Slide>
            );
          })}
        </SliderContainer>

        <ControlsContainer>
          <ProgressContainer>
            {progress.map((value, index) => (
              <ProgressBar
                key={index}
                onClick={() => handleProgressClick(index)}
                active={index === slideIndex}
                progress={index === slideIndex ? value : 0}
              />
            ))}
          </ProgressContainer>

          <PlayPauseButton onClick={togglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </PlayPauseButton>
        </ControlsContainer>
      </Container>
    </StyledSection>
  );
};

export default MediaContent;

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const StyledSection = styled.section`
  background: linear-gradient(135deg, #fffcfc 0%, #f8f4f4 100%);
  padding: clamp(20px, 5vw, 40px) clamp(10px, 3vw, 16px);
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 0, 0, 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 0, 0, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: clamp(16px, 4vw, 24px) clamp(8px, 2vw, 12px);
  }

  @media (max-width: 480px) {
    padding: clamp(12px, 3vw, 16px) clamp(6px, 1.5vw, 8px);
  }
`;

const Container = styled.div`
  max-width: clamp(320px, 90vw, 1200px);
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: clamp(20px, 4vw, 40px);
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 768px) {
    margin-bottom: clamp(16px, 3vw, 32px);
  }

  @media (max-width: 480px) {
    margin-bottom: clamp(12px, 2.5vw, 24px);
  }
`;

const MainTitle = styled.h1`
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #f33d25 0%, rgb(19, 18, 117) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: clamp(8px, 1.5vw, 12px);
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: #666;
  font-weight: 400;
  max-width: clamp(300px, 80vw, 500px);
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: clamp(0.7rem, 1.8vw, 0.9rem);
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: clamp(300px, 80vw, 450px);
  margin-bottom: clamp(16px, 3vw, 32px);

  @media (max-width: 768px) {
    min-height: clamp(250px, 70vw, 400px);
    margin-bottom: clamp(12px, 2.5vw, 24px);
  }

  @media (max-width: 480px) {
    min-height: clamp(200px, 60vw, 300px);
    margin-bottom: clamp(8px, 2vw, 16px);
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: translateX(${(props) => (props.active ? "0" : "10px")});
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  z-index: ${(props) =>
    props.active ? 1 : 0}; /* Ensure active slide is on top */
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: clamp(10px, 2vw, 16px);
  width: 100%;
  align-items: center;
  background: rgba(255, 252, 252, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: clamp(12px, 3vw, 20px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 5px solid red;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: clamp(8px, 2vw, 12px);
    padding: clamp(10px, 2.5vw, 16px);
  }

  @media (max-width: 480px) {
    padding: clamp(8px, 2vw, 12px);
    gap: clamp(6px, 1.5vw, 10px);
  }
`;

const ContentSection = styled.div`
 /* order: 1; */
  flex: 1;
  animation: ${slideIn} 0.6s ease-out;
`;

const IconWrapper = styled.div`
  width: clamp(40px, 8vw, 60px);
  height: clamp(40px, 8vw, 60px);
  background: linear-gradient(135deg, red, #cc0000);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffcfc;
  margin-bottom: clamp(8px, 1.5vw, 16px);
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.2);

  svg {
    width: clamp(24px, 5vw, 36px);
    height: clamp(24px, 5vw, 36px);
  }

  @media (max-width: 480px) {
    width: clamp(36px, 7vw, 48px);
    height: clamp(36px, 7vw, 48px);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 1.5vw, 12px);

  @media (max-width: 768px) {
    a[href][target="_blank"][rel="noopener noreferrer"] {
      display: none;
    }
  }
`;
const SubTitle = styled.span`
  font-size: clamp(0.6rem, 1.5vw, 0.8rem);
  font-weight: 600;
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const Title = styled.h2`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 800;
  color: rgb(155, 13, 13);
  line-height: 1.3;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(1rem, 2vw, 1.4rem);
  }
`;

const Description = styled.p`
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  color: rgb(170, 64, 64);
  line-height: 1.5;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  }
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(8px, 1.5vw, 16px);
  margin: clamp(8px, 1.5vw, 16px) 0;

  @media (max-width: 480px) {
    gap: clamp(6px, 1vw, 12px);
  }
`;

const Metric = styled.div`
  text-align: center;
  flex: 1;
  min-width: 80px;
`;

const MetricValue = styled.div`
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 900;
  color: red;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: clamp(1rem, 2vw, 1.4rem);
  }
`;

const MetricLabel = styled.div`
  font-size: clamp(0.6rem, 1.2vw, 0.7rem);
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: clamp(6px, 1vw, 8px);
  background: linear-gradient(135deg, red, #cc0000);
  color: #fffcfc;
  padding: clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 16px);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: clamp(4px, 1vw, 8px);
  touch-action: manipulation;
  min-height: 44px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(255, 0, 0, 0.3);
  }

  svg {
    width: clamp(12px, 1.8vw, 14px);
    height: clamp(12px, 1.8vw, 14px);
  }
`;

const VisualSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  order: 1; 

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: clamp(8px, 2vw, 12px);
  }
`;

const VideoPreview = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: 100%;
  /* max-height: clamp(150px, 35vh, 220px); */
  background: linear-gradient(135deg, #f5f5f5, #e5e5e5);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

  /* @media (max-width: 768px) {
    max-height: clamp(120px, 30vh, 180px);
  }

  @media (max-width: 480px) {
    max-height: clamp(100px, 25vh, 140px);
  } */
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.1),
    rgba(204, 0, 0, 0.1)
  );
`;

const PlayButton = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(40px, 8vw, 60px);
  height: clamp(40px, 8vw, 60px);
  background: rgba(255, 252, 252, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
  touch-action: manipulation;
  min-height: 44px;

  &:hover {
    animation: ${pulse} 1s infinite;
    background: #fffcfc;
    transform: translate(-50%, -50%) scale(1.1);
  }

  svg {
    width: clamp(20px, 4vw, 24px);
    height: clamp(20px, 4vw, 24px);
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 1.5vw, 12px);
  flex-wrap: wrap;
  margin-top: clamp(8px, 2vw, 16px);
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    flex-direction: row; /* Keep row layout for controls */
    gap: clamp(6px, 1vw, 8px);
    margin-top: clamp(30vh, 1.5vw, 12px);
    padding: 0 clamp(4px, 1vw, 8px);
  }

  @media (max-width: 480px) {
    gap: clamp(4px, 0.8vw, 6px);
    margin-top: clamp(30vh, 1vw, 8px);
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  gap: clamp(4px, 1vw, 6px);
  justify-content: center;
  width: 100%; /* Ensure it takes full width for centering */
  max-width: clamp(
    200px,
    50vw,
    300px
  ); /* Limit width for better mobile display */

  @media (max-width: 480px) {
    gap: clamp(3px, 0.8vw, 5px);
    max-width: clamp(150px, 40vw, 200px);
  }
`;

const ProgressBar = styled.div`
  width: clamp(25px, 5vw, 40px);
  height: 4px;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scaleY(1.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progress}%;
    background: linear-gradient(90deg, red, #cc0000);
    border-radius: 2px;
    transition: width 0.1s linear;
  }

  @media (max-width: 480px) {
    width: clamp(20px, 4vw, 30px);
  }
`;

const PlayPauseButton = styled.button`
  background: transparent;
  border: 2px solid red;
  color: red;
  padding: clamp(6px, 1vw, 8px) clamp(8px, 1.2vw, 10px);
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  transition: all 0.3s ease;
  touch-action: manipulation;
  min-height: 36px;

  &:hover {
    background: red;
    color: #fffcfc;
  }

  @media (max-width: 480px) {
    padding: clamp(4px, 0.8vw, 6px) clamp(6px, 1vw, 8px);
    font-size: clamp(0.6rem, 1.2vw, 0.7rem);
  }
`;
