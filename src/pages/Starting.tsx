import React from 'react';
import { Button, HStack, VStack, Text, Stack } from '@chakra-ui/react';
import ReusableButton from '../Component/Button';
import newimage from "../assets/Morphline.svg"
import ScrollReveal from '../Component/ScrollReveal';

export const Starting: React.FC = () => {
    return (
        <>
            <Stack
                w={"100%"}
                height="92vh"
                mt={3}
            >
                <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" backgroundImage={newimage} >

                    <Button
                        variant={"outline"}
                        sx={{
                            border: "2px solid",
                            borderImageSlice: 1,
                            borderImageSource: "linear-gradient(to right, #CD43FF, #FD65A6, #FC9651, #FFBD72)",
                            background: "none",
                            color: "white",
                            px: 4,
                            py: 2,
                            rounded: 'full',
                            _hover: {
                                bg: "none",
                                color: "white",
                                borderImageSource: "linear-gradient(to right, #CD43FF, #FD65A6, #FC9651, #FFBD72)",
                                borderImageSlice: 1,
                            }
                        }}
                    >
                        #1 Top Notch Marketing Department
                    </Button>

                    <ScrollReveal duration={2}>
                        <HStack
                            fontSize={["2xl", "3xl", "4xl", "6xl"]}
                            fontWeight={'bold'}
                            gap={4}
                        >
                            <Text
                                color="white"
                            >
                                SOCIALSPHERE
                            </Text>
                            <Text
                                bgGradient='linear(to-r, #CD43FF,#FD65A6)'
                                bgClip='text'
                            >
                                BOOST:
                            </Text>
                        </HStack>
                    </ScrollReveal>



                    <ScrollReveal duration={3}>
                        <HStack
                            fontSize={["2xl", "3xl", "4xl", "6xl"]}
                            fontWeight={'bold'}
                            gap={4}
                        >
                            <Text
                                bgGradient='linear(to-r, #FC9651,#FFBD72)'
                                bgClip='text'
                            >
                                IGNITING YOUR
                            </Text>
                            <Text
                                color="white"
                            >
                                ONLINE
                            </Text>
                        </HStack>
                    </ScrollReveal>
                    <ScrollReveal duration={4}>
                    <Text
                        fontSize={["2xl", "3xl", "4xl", "6xl"]}
                        fontWeight={'bold'}
                        bgGradient='linear(to-r, white,gray.400)'
                        bgClip='text'
                    >
                        PRESENCE
                    </Text>
                    </ScrollReveal>

                    <Text
                        fontSize={16}
                        color={'white'}
                        opacity={0.8}
                        mt={4}
                        textAlign={'center'}
                    >
                        Wir sind eine Full-Service Agentur für eCommerce, Creator & Coaches, sowie B2B Unternehmen.
                    </Text>
                    <br />
                    <ReusableButton buttonName="Get Started - It’s Free" />

                    <Text
                        color={'white'}
                        mt={2}
                    >
                        ↗  Free slots are
                        <Text
                            as="span"
                            fontWeight={'bold'}
                            ml={1}
                        >
                            currently available
                        </Text>
                    </Text>
                </VStack>
            </Stack>
        </>
    );
};


