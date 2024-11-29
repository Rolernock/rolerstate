import { Carousel } from 'react-bootstrap'

export default function HomeScreen() {
  const slides = [
    {
      image: '4.jpg',
      caption: 'Discover your dream home',
      description: 'Spacious and modern properties tailored for you.'
    },
    {
      image: '2.jpg',
      caption: 'Live in luxury',
      description: 'Experience comfort and elegance like never before.'
    },
    {
      image: '1.jpg',
      caption: 'Find your perfect space',
      description: 'Affordable homes in prime locations.'
    },
    {
      image: '3.jpg',
      caption: 'Step into your future',
      description: 'Premium homes designed to fit your lifestyle.'
    }
  ]

  return (
    <Carousel>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={`/images/properties/${slide.image}`}
            className='d-block w-100 carousel-image'
            alt={`Slide ${idx + 1}`}
          />
          <Carousel.Caption className='carousel-caption-bg'>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
