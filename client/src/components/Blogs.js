import React from 'react'
import { Card, CardBody,Heading,Box,Text,Stack,StackDivider, Button, SimpleGrid, Flex } from '@chakra-ui/react'
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
        <Heading textAlign={'center'} size='lg' textTransform='uppercase' >All Blogs</Heading>

        <Card  borderRadius="lg"  boxShadow="lg" p={5}
            bgColor="gray.300" >
                <CardBody  >
                    <Stack divider={<StackDivider />} spacing='4'>

                        <SimpleGrid  columns={4} spacingX='40px' spacingY='20px' >

                        {blogs.map((blog)=>(
                            <Box  borderWidth="1px" borderRadius="lg"   boxShadow="lg"
                            p={10}  bgColor="whiteAlpha.800"  border="2px white"   maxW={'sm'} key={blog.id}>

                                <Heading textAlign={'center'} color={'orange.500'} size='xs' textTransform='uppercase'>
                                    Blog Title: {blog.blog_title}
                                </Heading>
                              

                                <Text pt='2' fontSize='sm'>
                                    Written By: {blog.author}
                                </Text>
                            
                                <Link to={`/blog/${blog.id}`}>
                                <Flex paddingRight="30px" justifyContent="flex-end">

                                    <Button size={'sm'} variant='ghost' colorScheme='blue'>
                                            Read More...
                                    </Button>
                                </Flex> 

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