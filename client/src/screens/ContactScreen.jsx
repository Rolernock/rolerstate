// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
// import { sendMessage } from '../slices/messageSlice'
// import ReadMessageScreen from './ReadMessagesScreen'

// export default function ContactScreen() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [errors, setErrors] = useState({})
//   const { name, email, message } = formData
//   const handleChange = evt => {
//     const { name, value } = evt.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async evt => {
//     evt.preventDefault()
//     try {
//       const data = await dispatch(sendMessage(formData)).unwrap()
//       data.msg && navigate('/')
//     } catch (errors) {
//       const errorMessages = errors.reduce((acc, err) => {
//         acc[err.path] = err.msg
//         return acc
//       }, {})
//       setErrors(errorMessages)
//     }
//   }

//   return (
//     <>
//       <div id='contact' className='py-5'>
//         <Container>
//           <Row className='text-center mb-5'>
//             <Col>
//               <h3>Contact Information</h3>
//               <p>
//                 Far far away, behind the word mountains, far from the countries
//                 Vokalia and Consonantia, there live the blind texts.
//               </p>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6} className='mb-3'>
//               <Card className='bg-primary text-white shadow-sm'>
//                 <Card.Body>
//                   <h4 className='mb-4'>Get in Touch</h4>
//                   <p>
//                     <strong>Address:</strong> Murang'a, 100m east of Magunas
//                     Supermarket, near the intersection of Muwasco and Rubis.
//                   </p>
//                   <p>
//                     <strong>Email:</strong> rolernockgoines@gmail.com
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> +254 791483839
//                   </p>
//                   <p>
//                     <strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 5:00
//                     PM
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={6}>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId='name' className='mb-3'>
//                   <Form.Control
//                     type='text'
//                     name='name'
//                     value={name}
//                     onChange={handleChange}
//                     placeholder='Enter Your Name'
//                     isInvalid={errors.name}
//                   />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.name}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId='emaill' className='mb-3'>
//                   <Form.Control
//                     type='email'
//                     name='email'
//                     value={email}
//                     onChange={handleChange}
//                     placeholder='Enter Your Email'
//                     isInvalid={errors.email}
//                   />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.email}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId='message' className='mb-3'>
//                   <Form.Control
//                     as='textarea'
//                     name='message'
//                     value={message}
//                     onChange={handleChange}
//                     rows={7}
//                     placeholder='Describe Your Issue or Question'
//                     isInvalid={errors.message}
//                   />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.message}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <Button variant='primary' type='submit'>
//                   Send Message
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { sendMessage } from '../slices/messageSlice'

export default function ContactScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const { name, email, message } = formData

  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const data = await dispatch(sendMessage(formData)).unwrap()
      data.msg && navigate('/')
    } catch (errors) {
      const errorMessages = errors.reduce((acc, err) => {
        acc[err.path] = err.msg
        return acc
      }, {})
      setErrors(errorMessages)
    }
  }

  return (
    <>
      <div id='contact' className='py-5'>
        <Container>
          <Row className='text-center mb-5'>
            <Col>
              <h3>Contact Information</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6} className='mb-3'>
              <Card className='shadow-sm text-white get-in-touch-card'>
                <Card.Body>
                  <h4 className='mb-4'>Get in Touch</h4>
                  <p>
                    <strong>Address:</strong> Murang'a, 100m east of Magunas
                    Supermarket, near the intersection of Muwasco and Rubis.
                  </p>
                  <p>
                    <strong>Email:</strong> rolernockgoines@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +254 791483839
                  </p>
                  <p>
                    <strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 5:00
                    PM
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='name' className='mb-3'>
                  <Form.Control
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    placeholder='Enter Your Name'
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='email' className='mb-3'>
                  <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='Enter Your Email'
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='message' className='mb-3'>
                  <Form.Control
                    as='textarea'
                    name='message'
                    value={message}
                    onChange={handleChange}
                    rows={7}
                    placeholder='Describe Your Issue or Question'
                    isInvalid={errors.message}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
