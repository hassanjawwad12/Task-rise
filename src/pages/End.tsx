import React from 'react';
import { VStack, Text, HStack, Image } from '@chakra-ui/react';
import ScrollReveal from '../Component/ScrollReveal';

export const End: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <ScrollReveal duration={2}>
                    <HStack
                        fontSize={["2xl", "3xl", "4xl", "7xl"]}
                        fontWeight={'bold'}
                        gap={6}
                    >
                        <Text
                            color="white"
                        >
                            LET'S
                        </Text>
                        <Text
                            bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                            bgClip='text'
                        >
                            COMBINE
                        </Text>
                        <Text
                            color="white"
                        >
                            OUR
                        </Text>
                    </HStack>
                </ScrollReveal>

                <Text
                    color="white"
                    fontSize={["2xl", "3xl", "4xl", "7xl"]}
                    fontWeight={'bold'}
                    zIndex={4}
                >
                    STRENGTHS
                </Text>

                <Image src="baja.png" alt="trumpet" width={['300px', '550px']} height={'auto'}
                    transform={['translateY(-40px)', 'translateY(-80px)']}
                    transformOrigin="center"
                    ml={5}
                />
            </VStack>
        </>
    );
};