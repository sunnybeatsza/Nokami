import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to a different route within the app
    navigate("/");
  }, [navigate]);

  return <div>Payment Completed</div>;
};
