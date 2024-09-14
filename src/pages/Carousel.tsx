import React, { useState } from 'react';
import { VStack, Button, Text, Stack, Image, HStack, Box,Spacer } from '@chakra-ui/react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ScrollReveal from '../Component/ScrollReveal';

interface Item {
    review: string;
    author: string;
}

const items: Item[] = [
    { review: 'The beautiful homes, peaceful surroundings, and welcoming atmosphere create an unparalleled living experience. The attention to detail and top-notch amenities make it a truly remarkable place to call home.', author: 'John Doe' },
    { review: 'The stunning architecture, serene environment, and warm community spirit combine to offer an exceptional lifestyle. The meticulous craftsmanship and exceptional facilities make it an extraordinary place to reside.', author: 'Yin Doe' },
    { review: 'The picturesque residences, tranquil ambiance, and friendly community create an unparalleled living experience. The exquisite design and world-class amenities make it a truly exceptional place to call home.', author: 'Clark Michael' },
]

export const Carousel: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" py={10} >
                <Stack
                    spacing={[4, 4, 8, 20]}
                    direction={['column', 'column', 'row', 'row']}
                    width={'100%'}
                    mt={6}>
                    <Image src='light.png' alt="company1" height={450} width={500} />
                    <VStack
                        width={['95%', '95%', '100%', '100%']}
                        align={'flex-start'}
                        pl={[2, 2, 0, 16]}
                    >
                        <Image src='comma.png' alt="sales" height={'auto'} width={100} />
                        <ScrollReveal duration={3}>
                        <Box
                            mt={10}
                            gap={4}
                            color={'white'}
                            opacity={0.8}
                            width={['100%', '100%', '90%', '60%']}
                            fontSize={["lg", "lg", "2xl", "2xl"]}
                        >
                            <Text>{items[currentIndex].review}</Text>
                        </Box>
                        </ScrollReveal>
                        <HStack
                          mt={6}
                          width={['100%', '100%', '90%', '60%']}
                        >
                               <Text 
                               color={'white'}
                               opacity={0.8}
                                 fontSize={["md", "md", "2xl", "2xl"]}
                               >{items[currentIndex].author}</Text>
                               <Spacer />
                            <Button
                                onClick={handlePrev}
                                bg='transparent'
                                color={'white'}
                                border='1px solid white'
                                rounded={'full'}
                                _hover={{
                                    bg: 'linear-gradient(to right, #CD43FF, #FD65A6, #FC9651, #FFBD72)',
                                    color: 'white'
                                }}
                            >
                                <IoIosArrowBack />
                            </Button>
                            <Button
                                rounded={'full'}
                                bg='transparent'
                                color={'white'}
                                border='1px solid white'
                                onClick={handleNext}
                                _hover={{
                                    bg: 'linear-gradient(to right, #CD43FF, #FD65A6, #FC9651, #FFBD72)',
                                    color: 'white'
                                }}
                            >
                                <IoIosArrowForward />
                            </Button>
                        </HStack>
                    </VStack>
                </Stack>
            </VStack>
        </>
    );
};


