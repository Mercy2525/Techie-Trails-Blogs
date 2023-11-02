import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Input } from '@chakra-ui/react'

function TryComments({singleBlog}) {

    const {id} =useParams()

    const [comment, setComment] = useState([]);
    const [users, setUsers] = useState([]);
    const[commentBody,setCommentBody]=useState('')


  //fetch comments
    useEffect(()=>{
        fetch(`/comment/${id}`)
        .then(res=>res.json())
        .then(data=>setComment(data))
        .catch(e=>console.log(e))
    },[id])

    //fetch users

    useEffect(()=>{
      fetch(`/users`)
      .then(res=>res.json())
      .then(data=> setUsers(data))
      .catch(e=>console.log(e))
     },[])

  return (
    <div>
        <h4>Add comment</h4>
        {users.map((user)=>(
          <h6>{user.name}</h6>
        ))}

        <form>
            <Input onChange={(e)=>setCommentBody(e.target.value)} placeholder='Blogbody' />

            {/* <Select onChange={(e)=>setRestaurant(e.target.value)}  placeholder='Select Your Name'>
                    {users.map((pizza)=>(                
                            <option key={pizza.id} value={pizza.restaurant.id}>{pizza.restaurant.name}</option>
                    ))}
                </Select> */}
            

           
           
            
            <Button type='submit'>Add comment</Button>
        </form>
        

    </div>
  )
}

export default TryComments