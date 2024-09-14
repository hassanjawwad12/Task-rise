import React from 'react';
import { VStack, Stack, Text, Image } from '@chakra-ui/react';

export const Partners: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="white" >
                <VStack
                    spacing={[4, 4, 8, 6]}
                    p={4}
                    mt={6}
                >
                    <Text
                        bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                        bgClip='text'
                        fontSize={["lg", "lg", "xl", "xl"]}
                        fontWeight={'bold'}
                    >
                        PARTNERS
                    </Text>
                    <Text
                        color={'black'}
                        fontSize={["xl", "xl", "5xl", "5xl"]}
                        textAlign={['center', 'center', 'center', 'left']}
                        fontWeight={'bold'}
                    >
                        Worth
                        <Text
                            as='span'
                            color={'black'}
                            px={3}
                            opacity={1}

                        >
                            From our
                        </Text>
                        <Text
                            bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                            bgClip='text'
                            as='span'
                            ml={2}
                        >
                            PARTNERS
                        </Text>
                    </Text>
                    <Text
                        color={'black'}
                        opacity={0.9}
                        width={['100%', '100%', '100%', '80%']}
                        textAlign={'center'}
                    >
                        We don't have any customers. We build strong partnerships in which we trust each other blindly and achieve extraordinary things together.
                    </Text>
                </VStack>
                <Stack
                    spacing={[4, 4, 8, 6]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    mt={6}
                    align={'center'}
                    py={10}
                >
                    <Image src="person1.png" alt="Leader" width={600} height="auto" />
                    <Image src="person2.png" alt="Leader" width={600} height="auto" />
                </Stack>
            </VStack>
        </>
    );
};