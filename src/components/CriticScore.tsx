import { Badge, Text } from '@chakra-ui/react'

interface Props{
    metaCritic:number
}

function CriticScore({metaCritic}:Props) {
    let badgeTextColor = metaCritic > 75 ? "green" : metaCritic >60 ? "yellow" : "";
    

  return (
    <Badge ><Text color={badgeTextColor} fontSize={'14px'} paddingX={2}>{metaCritic}</Text></Badge>
  )
}

export default CriticScore