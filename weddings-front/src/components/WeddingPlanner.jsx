// import React from "react";
// import styled from "styled-components";

// // Styled Components
// const Section = styled.section`
//   background-color: #fff7e9;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 80px;
//   border-radius: 20px;
// `;

// const Left = styled.div`
//   flex: 1;
//   padding-right: 40px;
// `;

// const Right = styled.div`
//   flex: 1;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;

//   img {
//     width: 100%;
//   }

//   /* Applying the unique border-radius for each image */
//   img:nth-child(1) {
//     border-top-left-radius: 20px;
//     border-bottom-right-radius: 20px;
//   }
//   img:nth-child(2) {
//     border-top-right-radius: 0px;
//     border-bottom-left-radius: 0px;
//   }
//   img:nth-child(3) {
//     border-bottom-left-radius: 20px;
//     border-top-right-radius: 20px;
//   }
//   img:nth-child(4) {
//     border-bottom-right-radius: 20px;
//     border-top-left-radius: 20px;
//   }
// `;

// const Title = styled.h1`
//   color: #1e1e1e;
//   font-size: 3rem;
// `;

// const Subtitle = styled.p`
//   color: #5f5f5f;
//   font-size: 1.1rem;
//   margin-top: 20px;
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
//   margin-top: 40px;
// `;

// const Feature = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// const IconWrapper = styled.div`
//   background-color: ${(props) => props.bgColor || "#ff7f7f"};
//   width: 50px;
//   height: 50px;
//   border-radius: 12px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Icon = styled.img`
//   width: 24px;
//   height: 24px;
// `;

// const FeatureText = styled.div`
//   h4 {
//     margin: 0;
//     color: #1e1e1e;
//     font-size: 1.2rem;
//   }

//   p {
//     margin: 5px 0 0;
//     color: #5f5f5f;
//     font-size: 0.9rem;
//   }
// `;

// // Data
// const features = [
//   {
//     title: "Personalized Dashboard",
//     description: "Organize every wedding detail",
//     icon: "../src/assets/images/person.svg",
//     bgColor: "#ff7f7f",
//   },
//   {
//     title: "Budget & Expense Tracker",
//     description: "Organize every wedding detail",
//     icon: "../src/assets/images/vector.svg",
//     bgColor: "#ff7f7f",
//   },
//   {
//     title: "Vendor Booking System",
//     description: "Find top-rated vendors to bring your vision to life.",
//     icon: "../src/assets/images/Group.svg",
//     bgColor: "#ffb347",
//   },
//   {
//     title: "Guest List & RSVP Manager",
//     description: "Streamline invitations, track responses, and many more.",
//     icon: "../src/assets/images/speaker.png",
//     bgColor: "#ffb347",
//   },
//   {
//     title: "Live Tracking & Updates",
//     description: "Organize every wedding detail",
//     icon: "../src/assets/images/world.svg",
//     bgColor: "#ff7f7f",
//   },
//   {
//     title: "Live Chat & Notifications",
//     description: "Get instant updates and chat with guests.",
//     icon: "../src/assets/images/chat_icon.svg",
//     bgColor: "#ffb347",
//   },
// ];

// const images = [
//   "../src/assets/images/image 15.svg",
//   "../src/assets/images/image (1).svg",
//   "../src/assets/images/image 16.svg",
//   "../src/assets/images/image 14.svg",
// ];

// const WeddingPlanner = () => {
//   return (
//     <Section>
//       <Left>
//         <Title>The Only Wedding Planning Tool You’ll Ever Need</Title>
//         <Subtitle>
//           Plan, organize, and track your wedding stress-free with our all-in-one
//           dashboard. Manage vendors, guests, and your budget—all in one place!
//         </Subtitle>

//         <FeaturesGrid>
//           {features.map((feature, index) => (
//             <Feature key={index}>
//               <IconWrapper bgColor={feature.bgColor}>
//                 <Icon src={feature.icon} alt={feature.title} />
//               </IconWrapper>
//               <FeatureText>
//                 <h4>{feature.title}</h4>
//                 <p>{feature.description}</p>
//               </FeatureText>
//             </Feature>
//           ))}
//         </FeaturesGrid>
//       </Left>

//       {/* Right Section - Image Grid */}
//       <Right>
//         {images.map((image, index) => (
//           <img src={image} alt={`Wedding ${index + 1}`} key={index} />
//         ))}
//       </Right>
//     </Section>
//   );
// };

// export default WeddingPlanner;

// import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fdefda;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 0px; /* Removed the spacing */
  width: 80%;
  max-width: 900px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px; /* 👈 Fixed height added to maintain consistent image layout */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Styling individual images */
  &:nth-child(1) img {
    border-top-left-radius: 40px;
  }

  &:nth-child(2) img {
    border-top-right-radius: 40px;
  }
`;

const images = [
  "../src/assets/images/Group 8.png",
  "../src/assets/images/image (2).svg",
];

const WeddingPlanner = () => {
  return (
    <Section>
      <ImageGrid>
        {images.map((src, index) => (
          <ImageWrapper key={index}>
            <img src={src} alt={`Wedding ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </Section>
  );
};

export default WeddingPlanner;
