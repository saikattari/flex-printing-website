import {
  Routes,
  Route
} from "react-router-dom"

import { Helmet } from "react-helmet"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Whatsapp from "./components/Whatsapp"

import Admin from "./components/Admin"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function HomePage() {

  return (

    <>

      <Helmet>

        <title>
          Flex Printing Services Vijayawada
        </title>

        <meta
          name="description"
          content="Best flex printing services in Vijayawada including banners, standees and digital printing."
        />

      </Helmet>

      <Header />

      <Hero />

      <Services />

      <About />

      <Gallery />

      <Pricing />

      <Testimonials />

      <Contact />

      <Footer />

      <Whatsapp />

    </>

  )
}

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>

            <Admin />

          </ProtectedRoute>
        }
      />

    </Routes>

  )
}

export default App