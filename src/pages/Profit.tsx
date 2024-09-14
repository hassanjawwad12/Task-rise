import React from 'react';
import { HStack, VStack, Text, Stack, Image } from '@chakra-ui/react';
import newimage from "../assets/Morphline.svg"
import ScrollReveal from '../Component/ScrollReveal';

export const Profit: React.FC = () => {
    return (
        <>
            <Stack
                w={"100%"}
                height="110vh"
                mt={3}
                py={4}
            >
                <VStack
                    width="100%" height="full" align='center' justifyContent='center' bg="#010101" backgroundImage={newimage} >
                    <Text
                        bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                        bgClip='text'
                        fontSize={["lg", "lg", "xl", "xl"]}
                        fontWeight={'bold'}
                    >
                        PROFITS
                    </Text>
                    <HStack
                        fontSize={["xl", "xl", "3xl", "5xl"]}
                        fontWeight={'bold'}
                        gap={4}
                    >
                        <Text
                            color={'white'}
                            opacity={0.8}
                        >
                            Profitable
                        </Text>
                        <Text
                            color={'white'}
                        >
                            Sales Im
                        </Text>
                        <Text
                            bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                            bgClip='text'
                        >
                            SEKUNDENTAKT
                        </Text>
                    </HStack>

                    <Text
                        fontSize={16}
                        color={'white'}
                        opacity={0.8}
                        mt={4}
                        textAlign={'center'}
                        w={['80%', '80%', '50%', '50%']}
                    >
                        We don't have any customers. We build strong partnerships in which we trust each other blindly and achieve extraordinary things together.
                    </Text>

                    <ScrollReveal duration={4}>
                        <Image mt={4} src='profit.png' alt='profit' width={420} />
                    </ScrollReveal>

                </VStack>

            </Stack>
        </>
    );
};


