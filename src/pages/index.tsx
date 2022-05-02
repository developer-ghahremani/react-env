import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "routes";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
