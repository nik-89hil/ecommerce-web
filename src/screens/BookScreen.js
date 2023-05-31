import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../components/home.css"


const BookScreen = ({book}) => {
   


  return (
    <>

        
        
        <Card className='cardSetting'md={6}>
            <Link to={`/books/${book._id}`}>
                <Card.Img className="imageCard" src={book.imageLink}/>

            </Link>
            <Card.Body>
            <Link to={`/books/${book._id}`}>
                <Card.Title  as="div">
                    <h5 className='bookName'>{book.title}</h5>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>
                    <p className='rateBook'>${book.pages}</p>
                </div>
            </Card.Text>
            <Card.Text>
                <div className="my-3">
                    Author : {book.author}({book.year})<br/>
                    Language : {book.language}
                </div>
            </Card.Text>

            </Card.Body>

        </Card>
      
    </>
  )
}

export default BookScreen
