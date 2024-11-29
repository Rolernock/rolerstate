import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function BlogScreen() {
  const blogs = [
    {
      id: 1,
      title: 'The Future of Real Estate',
      date: 'November 29, 2024',
      image: '/images/blog/1.jpg',
      description:
        'Discover how technology is reshaping the real estate industry, from virtual tours to AI-driven analytics.'
    },
    {
      id: 2,
      title: 'Design Trends in Modern Homes',
      date: 'November 15, 2024',
      image: '/images/blog/2.jpg',
      description:
        'Explore the latest trends in home design that combine functionality with aesthetics.'
    },
    {
      id: 3,
      title: 'Sustainable Living Spaces',
      date: 'October 30, 2024',
      image: '/images/blog/3.jpg',
      description:
        'Learn how to create eco-friendly homes that are both energy-efficient and stylish.'
    },
    {
      id: 4,
      title: 'Investment Tips for First-Time Buyers',
      date: 'October 10, 2024',
      image: '/images/blog/4.jpg',
      description:
        'Practical advice for new buyers on navigating the property market and making informed decisions.'
    }
  ]

  return (
    <Container className='my-5'>
      <h2 className='text-center fw-bold mb-4'>Blog</h2>
      <Row className='g-4'>
        {blogs.map(blog => (
          <Col md={6} lg={4} key={blog.id}>
            <Card className='shadow h-100'>
              <Card.Img
                variant='top'
                src={blog.image}
                className='blog-card-img'
              />
              <Card.Body>
                <Card.Title className='fw-bold'>{blog.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {blog.date}
                </Card.Subtitle>
                <Card.Text>{blog.description}</Card.Text>
                <Button variant='primary' className='mt-2'>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
