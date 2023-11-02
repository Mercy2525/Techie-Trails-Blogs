import React, { useEffect, useState } from "react";


import {Card, CardBody, Heading,Text,
  Stack,  Divider, Button, Flex, Box
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import Comments from "./Comments";

function BlogDisplay({user}) {
  const { id } = useParams();

  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    fetch(`/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlog(data);
      })
      .catch((e) => console.log(e));
  }, [id]);



  if (!singleBlog.comments) {
    return <div>No Comments available for this blog.</div>;
  }

  return (
    <div>
    
        <Box p={5}> 
            <Card borderRadius="lg" boxShadow="lg" p={5} bgColor="gray.300"  >
              <>
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading textAlign={"center"} color={"orange.500"} size="lg">
                      {singleBlog.blog_title}
                    </Heading>

                    <Text>Blog Body: {singleBlog.blog_body}</Text>
                    <Heading size={'md'}>Authored By: {singleBlog.author}</Heading>
                    
                  </Stack>
                </CardBody>

                <Flex paddingRight="30px" justifyContent="flex-end">
                    <Button _hover={{ bg:'red' }} size={"sm"} style={{ marginLeft: 'auto' }} colorScheme="blue">Delete Blog</Button>
                </Flex>
                
                <Divider p={2} />
                <Heading p={3} size={"sm"}>Blog Comments</Heading>
                {singleBlog.comments.map((comment) => (
                  <div key={comment.id}>

                    <Flex paddingLeft="30px" justifyContent="flex-start">            

                      <Text>{comment.comment_body}.  
                      <Box fontWeight="bold" as="span" color="orange.500"> comment by: </Box>
                      {comment.user.name}
                      </Text>
                     </Flex>
                  </div>
                ))}
              </>
            </Card>
          </Box>

      <Comments user={user} singleBlog={singleBlog} />
    </div>
  );
}

export default BlogDisplay;
