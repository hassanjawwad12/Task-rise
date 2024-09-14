import React from 'react';
import { VStack, Stack, Image, Text } from '@chakra-ui/react';
import ScrollReveal from '../Component/ScrollReveal';

export const Leader: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <Stack
                    spacing={[4, 4, 8, 6]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    mt={6}
                    width={['100%', '100%', '100%', '85%']}
                >
                    <Text
                        color={'white'}
                        width={['100%', '100%', '100%', '40%']}
                        textAlign={['center', 'center', 'center', 'left']}
                        fontSize={["xl", "xl", "5xl", "5xl"]}
                    >
                        THIS IS <Text
                            as='span'
                            color={'white'}
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
                        color={'white'}
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
                    width='100%'
                    position={'relative'}
                >

                    <Image src="Union.png" alt="Leader" width="95%" height="auto" zIndex={2} display={['none', 'none', 'none', 'block']} position={'absolute'} />

                    <VStack
                        width={['100%', '100%', '100%', '39%']}
                        align={['center', 'flex-start']}
                        pl={[0, 0, 0, 8]}
                        mt={4}
                    >
                        <ScrollReveal duration={2}>
                            <Image src="emotional.png" alt="Leader" width="20%" height="auto" />
                            <Text
                                color={'white'}
                                fontSize={["xl", "xl", "2xl", "2xl"]}
                                textAlign={['center', 'center', 'left', 'left']}
                            >
                                Lightning fast to implement
                            </Text>
                            <Text
                                color={'white'}
                                opacity={0.8}
                                textAlign={['center', 'center', 'left', 'left']}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of .
                            </Text>
                        </ScrollReveal>

                        <ScrollReveal duration={3}>
                            <Image src="trackrecord.png" alt="Leader" width="20%" height="auto" mt={10} />
                            <Text
                                color={'white'}
                                fontSize={["xl", "xl", "2xl", "2xl"]}
                                textAlign={['center', 'center', 'left', 'left']}
                            >
                                Team of absolute experts with a track record
                            </Text>
                            <Text
                                color={'white'}
                                opacity={0.8}
                                textAlign={['center', 'center', 'left', 'left']}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                        </ScrollReveal>
                    </VStack>
                    <Image src="intense.png" alt="Leader" width="50%" height="auto" zIndex={4} mt={3} display={['none', 'none', 'none', 'block']} />
                </Stack>
            </VStack>
        </>
    );
};
