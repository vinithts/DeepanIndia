import React, { useEffect, useState } from "react";
import { instance } from "../../utils/api";
import { SlideShowBar } from "./Slider/SlideShowBar";
import { About } from "./About/About";
import { Joiningpart } from "./Joining/Joiningpart";
import Cardpart from "./Cards/Cardpart";
import Reviews from "./Review/Reviews";
import MediaContent from "./Latestnews/MediaContent";
import Tabscontent from "./Tobs/Tabssection";
import Services from "./Serivces/Services";
import Choose from "./WhyChoose/Choose";
import Calculator from "./Calculator/Calculator";
import OurStory from "./story/OurStory";
import Wealthy from "./WealthHelp/Wealthy";

const LandingScreen = () => {
  const [head, setHead] = useState([]);
  const [AboutUs, setAbout] = useState([]);
  const [JoinUs, setJoinUs] = useState([]);
  const [Blogs, setBlogs] = useState([]);
  const [review, setReview] = useState([]);
  const [media, setSocialMedia] = useState([]);

  // Fetch Landing Screen Data
  const LandingScreenDetails = async () => {
    try {
      const endpoints = [
        { url: `/landing/customer/Header`, setState: setHead },
        { url: `/landing/customer/About`, setState: setAbout },
        { url: `/landing/customer/Blogs`, setState: setBlogs },
        {
          url: `/landing/customer/JoinUs`,
          setState: (data) => setJoinUs(data.joinUsData),
        },
        { url: `/landing/customer/Reviews`, setState: setReview },
        { url: `/landing/customer/CaseStudy`, setState: setSocialMedia },
      ];

      const responses = await Promise.all(
        endpoints.map((endpoint) =>
          instance.get(endpoint.url).catch((err) => err)
        )
      );

      responses.forEach((response, index) => {
        if (response?.status === 200) {
          const { setState } = endpoints[index];
          setState(response.data);
        } else {
          console.error(
            `Request failed for endpoint: ${endpoints[index].url}, Status: ${response?.status}`
          );
        }
      });
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    LandingScreenDetails();
  }, []);

  return (
    <>
      <SlideShowBar data={head} />
      <Choose/>
      <Wealthy/>
      <OurStory/>
      <About data={AboutUs} />
      <Tabscontent />
      <Services/>
      <Cardpart data={Blogs} />
     <Joiningpart data={JoinUs} />
      <MediaContent data={media} />
      <Calculator/>
      {/* <Reviews data={review} /> */}
    </>
  );
};

export default LandingScreen;
