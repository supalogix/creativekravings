import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";
import LandingPage from "./LandingPage";
import { faBlog, faCog, faHome, faSignHanging, faSignIn, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const theme = createTheme({

});

/*
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/">Menu</Link> </li>
                <li> <Link to="/">Nav 2</Link> </li>
                <li> <Link to="/">Nav 3</Link> </li>
*/
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header>
          <div id="header-container">
            <div class="logo">
              <h1>Creative<br/> Kravings</h1>
            </div>
            <nav>
              <div class="hamburger-menu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <ul class="menu">
                <li>
                  <FontAwesomeIcon icon={faHome} />
                  <a href="#">Home</a>
                </li>

                <li>
                  <FontAwesomeIcon icon={faCog} />
                  <a href="#">Sevices</a>
                  <div class="mega-menu">
                    <div class="mega-menu-column">
                      <h3>Personal Clients</h3>
                      <ul>
                        <li><a href="#">Meal Subscriptions</a></li>
                        <li><a href="#">A la Carte Orders</a></li>
                        <li><a href="#">Customized Meal Plans</a></li>
                        <li><a href="#">Catering Services</a></li>
                      </ul>

                      <h3>Corporate Clients</h3>
                      <ul>
                        <li><a href="#">Corporate Partnerships</a></li>
                        <li><a href="#">Catering Services</a></li>
                        <li><a href="#">Meal Plans</a></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <FontAwesomeIcon icon={faBlog} />
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
            <div class="action-buttons">
              <a href="#">
              <FontAwesomeIcon fontSize="1.25em" icon={faSignInAlt} />
              </a>
              &nbsp;
              &nbsp;
              <a href="#" class="cta-button">Try Our Meals</a>
            </div>
          </div>
          <div class="breadcrumbs">
            <a href="#">Home</a> *
            <a href="#">Products</a> *
            <a href="#">About Product</a>
          </div>
        </header>
        <main>
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
          </Routes>
        </Container>
        </main>
      </Router>
      <footer class="footer">
        <div class="footer-content">
          <h3>Subscribe for Events and Special Offers</h3>
          <p>Stay updated with our latest events and special promotions by subscrbing to our newsletter.</p>
          <form class="suscribe-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>&copy; Creative Kravings 2024 Copyright. All Rights Reserved.</p>
      </footer>
    </ThemeProvider>
  );
};

export default App;