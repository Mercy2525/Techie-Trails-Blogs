import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Flex } from '@chakra-ui/react'



import {ChevronRightIcon} from '@chakra-ui/icons'


function Navbar({isLoggedIn, setIsLoggedIn}){
 const navigate = useNavigate()
 
  const handleLogout = async () => {
    try {
      // Send a GET request to the server to log the user out
      const response = await fetch('/logout', {
        method: 'GET',
      });

  if (response.ok) {
    // Successful logout
    setIsLoggedIn(false);
  
    navigate('/'); //Redirect to appropriate route
  } else {
    // Handle logout failure
    console.error('Logout failed');
  }
} catch (error) {
  console.error('Error during logout:', error);
}
  };

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
          {isLoggedIn ? (<Button onClick={handleLogout}  _hover={{ bg: 'black' }}   size={'sm'} colorScheme={'blue'}>
            <Link to={'/'}>LOG OUT</Link>
          </Button>)  :(<Button _hover={{ bg: 'black' }}   size={'sm'} colorScheme={'blue'}>
            <Link to={'/signup'}>Signup</Link>
          </Button>)}
        </BreadcrumbItem>

      </Breadcrumb>

      </Flex>

    

      <Outlet></Outlet>


     
    </nav>
  );

}
export default Navbar