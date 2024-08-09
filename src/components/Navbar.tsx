import { HStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'


const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'></Image>
    </HStack>
  )
}

export default Navbar