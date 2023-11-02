import React, { useEffect, useState } from "react";


import {Card, CardBody, Heading,Text,
  Stack,  Divider, Button
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import TryComments from "./Comments";

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
      <Card alignItems={"center"} alignContent={"center"} p={4}>
        <>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading color={"orange.500"} size="lg">
                {singleBlog.blog_title}
              </Heading>

              <Text>Blog Body: {singleBlog.blog_body}</Text>
              <Text textAlign={"right"}>Authored By: {singleBlog.author}</Text>
            </Stack>
          </CardBody>
          <Button colorScheme="red" textAlign={'right'}>Delete Blog</Button>
          <Divider />
          <Heading size={"sm"}>Comments</Heading>
          {singleBlog.comments.map((comment) => (
            <div key={comment.id}>
              <Text> {comment.user.name} </Text>

              <Text>{comment.comment_body} </Text>
            </div>
          ))}
        </>
      </Card>

      <TryComments user={user} singleBlog={singleBlog} />
    </div>
  );
}

export default BlogDisplay;
