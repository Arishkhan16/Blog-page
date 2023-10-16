import { Col, Container, Row } from 'react-bootstrap';
import listData from '../../data/listCard.json';
import './bloglist.css';

const BlogList = () => {
    return (
        <section className="list-sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="list-head">
                            <h2>Trendings</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {listData.map((item) => (
                        <Col key={item.id} lg={6} md={6} sm={12} xs={12}>
                        <div className="list-card">
                            <div className="list-img">
                                <img src={require(`../../${item.image}`)} alt="" className="img-fluid" />
                            </div>
                            <div className="list-txt">
                                <div className="list-sm-txt">
                                    <small>{item.category}</small>
                                </div>
                                <span>{item.title}</span>
                                <div className="list-bottom">
                                    <span className="list-auth-img">
                                    <img src={require(`../../${item.authorImg}`)} alt="" className="img-fluid" />
                                    </span>
                                    <span className="auth-name">{item.author}</span>
                                    <span className="auth-date">{item.date}</span>
                                </div>
                            </div>
                        </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
}

export default BlogList;