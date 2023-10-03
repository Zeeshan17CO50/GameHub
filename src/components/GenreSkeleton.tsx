import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreSkeleton = () => {
  return (
    <HStack>
        <Skeleton startColor='pink.900' endColor='orange.50' boxSize='32px' borderRadius={8} objectFit='cover' />
        {/* <Skeleton height='25px' flexGrow="100" /> */}
        <SkeletonText startColor='blue.900' endColor='green.50' noOfLines={2} skeletonHeight='3' flexGrow="100" />
    </HStack>
  )
}

export default GenreSkeleton