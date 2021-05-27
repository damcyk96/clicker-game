import React, { useEffect } from "react";
import axios from "axios";

useEffect(() => {
  const click_count = { amount: 7 };
  axios
    .patch("https://localhost:5000/api/v1/progress", click_count)
    .then()
    .catch();
});

/* Nie wiem czy tutaj chodzi o coś bardziej skomplikowanego :) */
