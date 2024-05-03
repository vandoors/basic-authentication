import React from "react";
import Container from "./Container";

const About = () => {
   return (
      <Container>
         <h1>About</h1>
         <p>
            This is a demo application using AWS Amplify and React. AWS Cognito
            is used for authentication and React's browser router is used for
            routing.
         </p>
         <p>
            This /about route is another example of a public route (no user
            authentication needed).
         </p>
      </Container>
   );
};

export default About;
