import React, { useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import Container from "./Container";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
   const navigate = useNavigate();
   useEffect(() => {
      getCurrentUser().catch(() => {
         navigate("/profile");
      });
   }, [navigate]);
   return (
      <Container>
         <h1>Protected Route</h1>
      </Container>
   );
};

export default Protected;
