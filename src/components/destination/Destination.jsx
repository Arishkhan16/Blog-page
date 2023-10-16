import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import destinationsData from '../../data/destinationsData.json';
import './destination.css'

const Destination = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

  return (
    <section className="dest-sec">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="dest-head">
                        <h2>Top Destinations</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quaerat quam. Excepturi rem modi praesentium, veritatis ad laudantium placeat.</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <div className="dest-slider">
                        <Slider {...settings}>
                            {destinationsData.map((destination) => (
                                <div className="dest-card" key={destination.id}>
                                    <img src={require(`../../${destination.image}`)} alt={destination.name} className="img-fluid" />
                                    <div className="dest-txt">
                                        <span>{destination.name}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Destination;