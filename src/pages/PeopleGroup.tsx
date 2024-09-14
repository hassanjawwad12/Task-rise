import React from 'react';
import { VStack, Stack, Text, Image, HStack } from '@chakra-ui/react';
import {chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {

    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const People: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="white" >
                <Stack
                    spacing={[4, 4, 8, 6]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    mt={6}
                    width={['100%', '100%', '100%', '85%']}
                >
                    <Text
                        color={'black'}
                        width={['100%', '100%', '100%', '50%']}
                        fontSize={["xl", "xl", "5xl", "5xl"]}
                        textAlign={['center', 'center', 'center', 'left']}
                    >
                        THIS IS <Text
                            as='span'
                            color={'black'}
                            opacity={0.7}
                            px={3}
                        >
                            HOW WE
                        </Text>
                        MAKE YOU THE
                        <Text
                            bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                            bgClip='text'
                            as='span'
                            ml={2}
                        >
                            MARKET LEADER
                        </Text>
                    </Text>
                    <Text
                        mt={4}
                        color={'black'}
                        opacity={0.9}
                        width={['100%', '100%', '100%', '40%']}
                        textAlign={['center', 'center', 'center', 'left']}
                    >
                        10 years experience. More than 250+ million euros in generated sales. We play in the Champions League in these disciplines.
                    </Text>
                </Stack>
                
                <Stack
                    spacing={[4, 4, 8, 6]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    mt={6}
                    width={['100%', '100%', '100%', '85%']}
                    align={'center'}
                >
                    <VStack
                        width={[350, 350, 412, 412]}
                        height={150}
                        bgGradient={'linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'}
                        rounded={16}
                        p={4}
                        fontSize={'small'}
                        color={'white'}
                        align={'flex-start'}
                        gap={4}
                    >
                        <HStack>
                            <Image src="round.png" alt="Leader" width="30px" height="auto" />
                            <Text
                                fontSize={20}
                            >
                                PERFORMANCE MARKETING
                            </Text>

                        </HStack>
                        <Text
                            opacity={0.75}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                        </Text>
                    </VStack>

                   <ChakraBox
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                    }}
                    width={[350, 350, 412, 412]}
                    height={150}
                    bg={'transparent'}
                    p={4}
                    rounded={16}
                    fontSize={'small'}
                    color={'black'}
                    align={'flex-start'}
                    gap={4}
                    border = "1px solid #A9A9A9	"
                >
                    <HStack>
                        <Image src="bubble.png" alt="Leader" width="30px" height="auto" />
                        <Text
                            fontSize={20}
                        >
                            PERFORMANCE ADCRE
                            <Text
                                bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                                bgClip='text'
                                as='span'
                            >
                                ATIVES
                            </Text>
                        </Text>

                    </HStack>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                    </Text>
                </ChakraBox>

                    <VStack
                        width={[350, 350, 412, 412]}
                        height={150}
                        bg={'transparent'}
                        p={4}
                        fontSize={'small'}
                        color={'black'}
                        align={'flex-start'}
                        gap={4}
                    >
                        <HStack>
                            <Image src="crown.png" alt="Leader" width="30px" height="auto" />
                            <Text
                                fontSize={20}
                            >
                                OUTSTANDING
                                <Text
                                    bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                                    bgClip='text'
                                    as='span'
                                    ml={2}
                                >
                                    BRANDING
                                </Text>
                            </Text>

                        </HStack>
                        <Text
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                        </Text>

                    </VStack>

                </Stack>
                <Image src="people.png" alt="Leader" width="105%" height="auto" />
            </VStack>
        </>
    );
};

/*<ChakraBox
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                    }}
                    width={[350, 350, 412, 412]}
                    height={150}
                    bg={'transparent'}
                    p={4}
                    fontSize={'small'}
                    color={'black'}
                    align={'flex-start'}
                    gap={4}
                    border = "1px solid #A9A9A9	"
                >
                    <HStack>
                        <Image src="bubble.png" alt="Leader" width="30px" height="auto" />
                        <Text
                            fontSize={20}
                        >
                            PERFORMANCE ADCRE
                            <Text
                                bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                                bgClip='text'
                                as='span'
                            >
                                ATIVES
                            </Text>
                        </Text>

                    </HStack>
                    <Text

                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                    </Text>
                </ChakraBox>
 */