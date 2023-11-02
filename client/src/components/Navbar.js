import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button } from '@chakra-ui/react'



import {ChevronRightIcon} from '@chakra-ui/icons'


function Navbar(){
    return (
    <nav >
 
      

      <Breadcrumb alignContent={'centre'} textAlign={'centre'} spacing='18px' separator={<ChevronRightIcon />}>
        <BreadcrumbItem>
            <Button  variant={'solid'} colorScheme='green' >
                <Link to={'/'}>Home</Link>
            </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button colorScheme='green'>
            <Link to={'/about'}>About</Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button colorScheme={'green'}>
            <Link to={'/blogs'}>Blog</Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button colorScheme={'green'}>
            <Link to={'/signup'}>Signup</Link>
          </Button>
        </BreadcrumbItem>

        
      </Breadcrumb>

    

      <Outlet></Outlet>


     
    </nav>
  );

}
export default Navbar