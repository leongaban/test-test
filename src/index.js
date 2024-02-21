import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [textField, setTextField] = useState('');

  useEffect(() => {
    console.log('USEEFFECT')
    if (comment) {
      let newArray = [...comments]
      newArray.push(comment)

      setComments(newArray)
    }

    console.log('comment', comment)
    console.log('comments', comments)
  }, [comment])

  const handleClick = () => {
    if (textField) {
      setComment(textField);
    }
    setTextField('')
  }

  const handleChange = (event) => {
    setTextField(event.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" value={textField} onChange={handleChange}/>
        <input type="button" value="Post" onClick={handleClick}/> 
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  )
}

document.body.innerHTML = "<div id='root'></div>";

const root = createRoot(document.getElementById('root'))
root.render(<CommentList />)
