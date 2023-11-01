import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Box,Text,Stack,StackDivider, Button, Divider, ButtonGroup } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogForm from './BlogForm'

function Blogs() {

    const [blogs,setBlogs]=useState([])
    

    function handleAdd(addedBlog){
        setBlogs([...blogs,addedBlog])
    }

    useEffect(()=>{

        fetch('/blogs')
        .then(res=>res.json())
        .then(data=>{setBlogs(data)
        console.log(data)})
        .catch(e=>console.log(e))
    },[])


  return (
    <div>
        <Heading textAlign={'center'}>All Blogs</Heading>

        <Card alignItems={'center'} alignContent={'center'} p={4}>
            {blogs.map((blog)=>(
                <> 
                <CardBody>
  
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Author: {blog.author}</Heading>
                  <Text>
                    Blog Title: {blog.blog_title} {blog.blog_body}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                <Link to={`/blog/${blog.id}`}>
                <Button variant='solid' colorScheme='blue'>
                        Read More...
                    </Button>

                </Link>
                    
                
                </ButtonGroup>
              </CardFooter>

              </>
            ))}
        </Card>

        <BlogForm handleAdd={handleAdd}/>


    </div>
  )
}

export default Blogs