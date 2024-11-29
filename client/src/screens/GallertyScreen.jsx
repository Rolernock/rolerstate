import { Container, Row, Col, Card } from 'react-bootstrap'

export default function GalleryScreen() {
  const images = [
    {
      src: '/images/properties/1.jpg',
      title: 'Modern Living',
      description: 'Experience comfort and style in every corner.'
    },
    {
      src: '/images/properties/2.jpg',
      title: 'Elegant Design',
      description: 'Homes that redefine sophistication.'
    },
    {
      src: '/images/properties/3.jpg',
      title: 'Spacious Interiors',
      description: 'Room for every moment and memory.'
    },
    {
      src: '/images/properties/4.jpg',
      title: 'Breathtaking Views',
      description: 'Homes with scenic surroundings.'
    },
    {
      src: '/images/properties/5.jpg',
      title: 'Affordable Luxury',
      description: 'Luxury living within reach.'
    }
  ]

  return (
    <Container className='my-5'>
      <h2 className='text-center fw-bold mb-4'>Gallery</h2>
      <Row className='g-4'>
        {images.map((image, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className='gallery-card shadow'>
              <Card.Img
                variant='top'
                src={image.src}
                className='gallery-card-img'
              />
              <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
                <Card.Title className='text-white fw-bold'>
                  {image.title}
                </Card.Title>
                <Card.Text className='text-white'>
                  {image.description}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
