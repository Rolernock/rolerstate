import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Card, ListGroup, Button, Container } from 'react-bootstrap'
import { FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { readMessages, deleteMessage } from '../slices/messageSlice'
import Spinner from '../components/Spinner'
import DeleteMessageModal from '../components/DeletMessageModal'

export default function ReadMessageScreen() {
  const dispatch = useDispatch()
  const { msg } = useSelector(state => state.messages)
  const [showModal, setShowModal] = useState(false)
  const [messageToDelete, setMessageToDelete] = useState(null)

  const handleCloseModal = () => {
    setShowModal(false)
    setMessageToDelete(null)
  }
  const handleShowModal = msgId => {
    setMessageToDelete(msgId)
    setShowModal(true)
  }

  useEffect(() => {
    dispatch(readMessages())
  }, [dispatch])

  const handleDelete = async () => {
    if (messageToDelete) {
      await dispatch(deleteMessage(messageToDelete))
      await dispatch(readMessages())
      handleCloseModal()
    }
  }

  return (
    <>
      {!msg ? (
        <Spinner />
      ) : msg.length === 0 ? (
        <h2 className='fw-bold text-center mt-5'>Not messages yet!</h2>
      ) : (
        <Container>
          <h2 className='fw-bold text-center'>Messages</h2>
          <Row>
            {msg.map(sms => (
              <Col lg={4} md={6} key={sms._id}>
                <Card className='my-3'>
                  <Card.Body>
                    <Card.Title>{sms.name}</Card.Title>
                    <Card.Subtitle>{sms.email}</Card.Subtitle>
                    <Card.Text>{sms.message}</Card.Text>
                  </Card.Body>
                  <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                      sent On:{' '}
                      <small className='text-muted'>
                        <FaRegCalendarAlt className='mx-1 mb-1' />
                        {format(sms.createdAt, 'MMMM dd, yyyy hh:mm a')}
                      </small>
                      <Button
                        className='btn-sm'
                        variant='danger'
                        onClick={() => handleShowModal(sms._id)} // Pass the correct message ID here
                      >
                        <FaTrashAlt />
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Modal */}
          <DeleteMessageModal
            show={showModal}
            handleClose={handleCloseModal}
            handleConfirm={handleDelete} // Use handleDelete directly
          />
        </Container>
      )}
    </>
  )
}
