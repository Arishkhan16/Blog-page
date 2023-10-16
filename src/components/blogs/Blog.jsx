import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './blog.css';
import jsonData from '../../data/cardData.json';

const Blog = () => {
    // Initialize state variables
    const [visibleCards, setVisibleCards] = useState(6);
    const [showAllCards, setShowAllCards] = useState(false);
    
    // Function to show more cards when the "View More Articles" button is clicked
    const handleShowMoreCards = () => {
        if (visibleCards + 3 <= jsonData.length) {
        setVisibleCards(visibleCards + 3);
        } else {
        setShowAllCards(true);
        }
    };

    return (
        <section className="blog-sec">
            <Container>
            <Row>
                {jsonData.slice(0, showAllCards ? jsonData.length : visibleCards).map((item) => (
                    <Col key={item.id} lg={4} md={6} sm={6} xs={12}>
                        <div className="blog-card">
                            <div className="blog-img">
                            <img src={require(`../../${item.image}`)} alt="" className="img-fluid" />
                            </div>
                            <div className="blog-txt">
                                <div className="blog-sm-txt">
                                    <small>{item.category}</small>
                                </div>
                                <span>{item.title}</span>
                            </div>
                            <div className="blog-bottom">
                                <div className="blog-auth-img">
                                    <img src={require(`../../${item.authorImg}`)} alt="" className="img-fluid" />
                                </div>
                                <span className="auth-name">{item.author}</span>
                                <span className="blog-date">{item.date}</span>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {!showAllCards && (
            <Row>
                <Col lg={12}>
                <div className="more-btn">
                    <button onClick={handleShowMoreCards}>
                        View More Articles
                    </button>
                </div>
                </Col>
            </Row>
            )}
            </Container>
        </section>
    )
}

export default Blog;