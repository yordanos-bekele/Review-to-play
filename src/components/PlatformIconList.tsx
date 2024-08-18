import {FaWindows, FaPlaystation, FaXbox,FaApple,FaLinux, FaAndroid} from "react-icons/fa";
import { MdPhoneAndroid,MdPhoneIphone } from "react-icons/md";
import {SiNintendo} from "react-icons/si"
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../interfaces/Games";
import { IconType } from "react-icons";
const iconMap : {[key:string] : IconType} = {
  windows: FaWindows,
  playstation: FaPlaystation,
  xbox:FaXbox,
  mac: FaApple,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web:BsGlobe,
  linux: FaLinux,
  nintendo: SiNintendo

}
interface Props{
    platforms: Platform[]
}
function PlatformIconList({platforms}: Props) {
  return (
    <HStack marginY={1}>
        {platforms.map((platform)=>(
                    <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'>{platform.name}</Icon> 
                ))} 
    </HStack>
  )
}

export default PlatformIconList