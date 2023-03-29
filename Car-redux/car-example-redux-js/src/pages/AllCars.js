import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCar,
  fetchALLCars,
  getAllCars,
  getLoading,
} from "../features/cars/carslice";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

import React from 'react'

const AllCars = () => {
    const allCars = useSelector(getAllCars);
    const apiStatus = useSelector(getLoading);
    const dispatch = useDispatch();
    // let contentToRender = "";
    const navigate = useNavigate();
    const [itemToDeleteId, setItemToDeleteId] = useState(0);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (allCars.length === 0) {
          dispatch(fetchALLCars());
        }
      }, [allCars.length, dispatch]);
    
    const openDeleteModalHandler = (id) => {
        setShowModal(true);
        setItemToDeleteId(id);
    };
    
    const hideDeleteModalHandler = () => {
        setShowModal(false);
        setItemToDeleteId(0);
    };
    
    const confirmDeleteModalHandler = () => {
        dispatch(deleteCar(itemToDeleteId))
          .unwrap()
          .then(() => {
            setShowModal(false);
            setItemToDeleteId(0);
          });
    };

  return (
    <div>
        <DeleteConfirmation
          title="Delete Confirmation!"
          body="Are sure to delete this item"
          showModal={showModal}
          apiStatus={apiStatus}
          hideDeleteModalHandler={hideDeleteModalHandler}
          confirmDeleteModalHandler={confirmDeleteModalHandler}
        ></DeleteConfirmation>
        <Container className="mt-2">
        <Row>
          <Col className="col-md-4 offset-md-4">
            <Button
              variant="dark"
              type="button"
              onClick={() => {
                navigate("/add-car");
              }}
            >
              Add New Car
            </Button>
          </Col>
        </Row>
        <Row>
        {
            apiStatus === "pending" ? (
                <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                </div>
              ) : (
                <div>
                <Row xs={1} md={3} className="g-4">
                        {allCars.map((car) => {
                            return(
                          <Col key={car?.id}>
                            <Card>
                              <Card.Img variant="top" src={car?.attributes?.imageUrl} alt={car?.attributes?.name} />
                              <Card.Body>
                                <Card.Title>{car?.attributes?.name}</Card.Title>
                                <Card.Text>Model Year - {car?.attributes?.year}</Card.Text>
                                <Button
                                  variant="dark"
                                  type="button"
                                  onClick={() => {
                                    navigate(`/edit-car/${car?.id}`);
                                  }}
                                >
                                  Edit
                                </Button>
                                |
                                <Button
                                  variant="danger"
                                  type="button"
                                  onClick={() => {
                                    openDeleteModalHandler(car?.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        )})}
                      </Row>
                </div>
              )
        }
        </Row>
        </Container>
    </div>
  )
}

export default AllCars