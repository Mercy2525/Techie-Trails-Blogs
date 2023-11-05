import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Flex } from "@chakra-ui/react";
import { useSnackbar, enqueueSnackbar } from "notistack";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Navbar({ isLoggedIn, setIsLoggedIn, user }) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/logout`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoggedIn(false);
        enqueueSnackbar(data.message)
        console.log(data)});
        
         navigate("/");
    
  }
  console.log(user);

  return (
    <nav>
      <Flex justifyContent="flex-end" paddingRight="30px">
        <Breadcrumb spacing="18px" separator={<ChevronRightIcon />}>
          <BreadcrumbItem>
            <Button
              _hover={{ bg: "black" }}
              cursor="pointer"
              size={"sm"}
              variant={"solid"}
              colorScheme="blue"
            >
              <Link to={"/"}>Home</Link>
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button _hover={{ bg: "black" }} size={"sm"} colorScheme="blue">
              <Link to={"/about"}>About</Link>
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button _hover={{ bg: "black" }} size={"sm"} colorScheme={"blue"}>
              <Link to={isLoggedIn ? "/blogs" : "/signup"}>Blog</Link>
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            {isLoggedIn ? (
              <div>
                <Button
                  onClick={logout}
                  _hover={{ bg: "black" }}
                  size={"sm"}
                  colorScheme={"blue"}
                >
                  <Link to={"/"}>Log Out</Link>
                </Button>{" "}
                <p> {user.name} </p>
              </div>
            ) : (
              <Button _hover={{ bg: "black" }} size={"sm"} colorScheme={"blue"}>
                <Link to={"/signup"}>Signup</Link>
              </Button>
            )}
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Outlet></Outlet>
    </nav>
  );
}
export default Navbar;
