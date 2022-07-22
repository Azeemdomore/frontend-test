import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <HomeRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
