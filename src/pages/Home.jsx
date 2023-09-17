import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../api/config";
import axios from "axios";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Spinner from "../utils/Spinner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import Card from "../components/Card";

function Home() {
  const [heroMovies, setHeroMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en=US&page=1`
        );

        setHeroMovies(response.data.results.slice(0, 5));
        console.log(heroMovies);
        setFeaturedMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
  }, []);

  function percentage() {
    return Math.floor(Math.random() * (100 - 70 + 1)) + 70;
  }

  return (
    <div>
      <Navbar />
      {isLoading && <Spinner />}
      {!isLoading && !error && (
        <div>
          <Hero data={heroMovies} />

          <div className="cc-container d-flex justify-content-between mt-5 align-items-center ">
            <h2 className="mb-0">Featured movie</h2>
            <Link className="see-more mb-0">
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0">See More</p>
                <FaGreaterThan className="mb-0" color="#be123c" />
              </div>
            </Link>
          </div>
          <div className="mt-4 cc-container">
            <Row className=" card-gap">
              {featuredMovies.map((each) => (
                <Col key={each.id} xs={6} md={4} xl={3}>
                  <Card data={each} percentage={percentage} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
