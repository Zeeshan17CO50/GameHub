import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CritricScore from './CritricScore';
import getCroppedImageUrl from '../services/image-ul';

interface Props {
    game: Game;
}

const GameCard = ({game} : Props) => {

  return (
    <Card width="300px" borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
         <Heading fontSize='2xl'>{game.name}</Heading>
         <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CritricScore score={game.metacritic} />
         </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard