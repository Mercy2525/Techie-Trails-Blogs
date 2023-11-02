import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Box,Text,Stack,StackDivider, Button, Divider, ButtonGroup,SimpleGrid } from '@chakra-ui/react'
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
        .then(data=>{setBlogs(data)})
        .catch(e=>console.log(e))
    },[])


  return (
    <div>
        <Heading textAlign={'right'} size='lg' textTransform='uppercase' >All Blogs</Heading>

        <Card >
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>

                        <SimpleGrid  columns={4} spacingX='40px' spacingY='20px' >

                        {blogs.map((blog)=>(
                            <Box p={4} border="2px solid rgba(0, 0, 0, 0.2)"   maxW={'sm'} key={blog.id}>

                                <Heading textAlign={'center'} color={'orange.500'} size='xs' textTransform='uppercase'>
                                     {blog.blog_title}
                                </Heading>
                              

                                <Text pt='2' fontSize='sm'>
                                    Author: {blog.author}
                                </Text>
                            
                                <Link to={`/blog/${blog.id}`}>
                                    <Button size={'xs'} textAlign={'right'} variant='outline' colorScheme='blue'>
                                            Read More...
                                    </Button>

                                </Link>

                            </Box> 
                        ))}
                        </SimpleGrid>
                    </Stack>
                </CardBody>
            </Card>

        <BlogForm blogs={blogs} handleAdd={handleAdd}/>


    </div>
  )
}

export default Blogs