import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Flex } from '@chakra-ui/react'



import {ChevronRightIcon} from '@chakra-ui/icons'


function Navbar(){
    return (
    <nav >
 
 <Flex justifyContent="flex-end" paddingRight="30px">

      <Breadcrumb  spacing='18px' separator={<ChevronRightIcon />}>
        <BreadcrumbItem >
            <Button _hover={{ bg: 'black' }} cursor="pointer" size={'sm'} variant={'solid'} colorScheme='blue' >
                <Link to={'/'}>Home</Link>
            </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button _hover={{ bg: 'black' }}  size={'sm'} colorScheme='blue'>
            <Link to={'/about'}>About</Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button _hover={{ bg: 'black' }}   size={'sm'} colorScheme={'blue'}>
            <Link to={'/blogs'}>Blog</Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button _hover={{ bg: 'black' }}   size={'sm'} colorScheme={'blue'}>
            <Link to={'/signup'}>Signup</Link>
          </Button>
        </BreadcrumbItem>

      </Breadcrumb>

      </Flex>

    

      <Outlet></Outlet>


     
    </nav>
  );

}
export default Navbar