import React, { useEffect,useState } from 'react'
import { Button } from '@chakra-ui/react'

function TryComments({singleBlog, user}) {

    const [comment, setComment] = useState([]);
    const[addComment,setAddComment]=useState('')
   

  //fetch comments
    useEffect(()=>{
        fetch(`/comments`)
        .then(res=>res.json())
        .then(data=>setComment(data))
        .catch(e=>console.log(e))
    },[])

  
    function handleAdd(newComment){
      setComment([...comment,newComment])
    }

    function submitComment(e){
      e.preventDefault()

      fetch('/comments',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment_body:addComment,
          user_id:user.id,
          blog_id:singleBlog.id
        })
      })
      .then(res=>res.json())
      .then(data=>handleAdd(data))
      .catch(e=>console.log(e))

    }

   
  return (
    <div>
        <h4>Add comment</h4>
        <form onSubmit={submitComment}>
            <textarea
              placeholder="Leave a comment..."
              // value={comment}
              onChange={(e) => setAddComment(e.target.value)}
            />           
            <Button type='submit'>Add comment</Button>
        </form>
    </div>
  )
}

export default TryComments