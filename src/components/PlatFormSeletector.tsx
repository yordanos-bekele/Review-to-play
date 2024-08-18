import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsCaretDownFill } from 'react-icons/bs'
import usePlatForm from '../hooks/usePlatforms'

function PlatFormSeletector() {
    const {data} = usePlatForm();
  return (
    <div className='my-5'>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsCaretDownFill/>}>
            PlatForms
        </MenuButton>
        <MenuList>
            {data.map(platform=>(
                <MenuItem key={platform.id}>
                    {platform.name}
                </MenuItem>
            ))}
        </MenuList>

      </Menu>
    </div>
   
  )
}

export default PlatFormSeletector