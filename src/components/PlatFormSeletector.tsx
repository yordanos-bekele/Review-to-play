import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsCaretDownFill } from 'react-icons/bs'
import usePlatForm from '../hooks/usePlatforms'
import platForms from '../interfaces/PlateForm';
interface Props {
  handlePlatform : (platform: platForms)=>void
}
function PlatFormSeletector({handlePlatform}:Props) {
    const {data} = usePlatForm();
  return (
    <div className='my-5'>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsCaretDownFill/>}>
            PlatForms
        </MenuButton>
        <MenuList>
            {data.map(platform=>(
                <MenuItem key={platform.id} onClick={()=>handlePlatform(platform)}>
                    {platform.name}
                </MenuItem>
            ))}
        </MenuList>

      </Menu>
    </div>
   
  )
}

export default PlatFormSeletector