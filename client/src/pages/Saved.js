import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

function Saved() {
  const [state, setState] = useState({
    books: []
  });

  useEffect(() => {
    getSavedBooks();
  },[])

  const getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        setState({
          ...state,
          books: res.data
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleBookDelete = id => {
    API.deleteBook(id).then(res => getSavedBooks());
  };


    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results" icon="fa fa-bookmark">
              {state.books.length ? (
                <List>
                  {state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      // authors={book.volumeInfo.authors.join(", ")}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => handleBookDelete(book._id)}
                          className="btn btn-primary ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">There is no saved books! Search Books!</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  
}

export default Saved;