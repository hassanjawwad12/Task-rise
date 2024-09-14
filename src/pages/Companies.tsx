import React from 'react';
import { VStack, Text, Stack, Image, Spacer } from '@chakra-ui/react';
import ReusableButton from '../Component/Button';
import ScrollReveal from '../Component/ScrollReveal';

export const Companies: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <Text
                    fontSize={16}
                    color={'white'}
                    opacity={0.8}
                    mt={4}
                    textAlign={'center'}
                >
                    Join 4,000+ companies already growing
                </Text>
                <Stack
                    spacing={[4, 4, 8, 20]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    mt={6}>
                    <Image src='epic.png' alt="company1" height={8} width={'auto'} />
                    <Image src='data.png' alt="company1" height={8} width={'auto'} />
                    <Image src='starup.png' alt="company1" height={8} width={'auto'} />
                    <Image src='ex.png' alt="company1" height={8} width={'auto'} />
                    <Image src='self.png' alt="company1" height={8} width={'auto'} />
                    <Image src='nike.png' alt="company1" height={8} width={'auto'} />
                </Stack>

                <Spacer />

                <Stack
                    spacing={[4, 4, 8, 20]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    width={'90%'}
                    mt={6}>

                    <ScrollReveal duration={2}>
                        <Image src='sales.png' alt="sales" height={600} width={'auto'} />
                    </ScrollReveal>

                    <VStack
                        width={['100%', '100%', '100%', '40%']}
                        align={['center', 'center', 'center', 'flex-start']}
                        gap={2}
                        mt={4}
                    >
                        <Text
                            bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                            bgClip='text'
                            fontSize={["md", "md", "lg", "lg"]}
                            fontWeight={'bold'}
                        >
                            serveprenure
                        </Text>
                        <Text
                            fontSize={["xl", "xl", "3xl", "5xl"]}
                            fontWeight={'bold'}
                            color={'white'}
                        >
                            German's most
                            <Text
                                ml={2}
                                mr={2}
                                as={'span'}
                                fontWeight={'bold'}
                                bgGradient='linear(to-r, white,gray.400)'
                                bgClip='text'>
                                user-friendly
                            </Text>business
                        </Text>
                        <Text
                            bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                            bgClip='text'
                            fontSize={["xl", "xl", "5xl", "5xl"]}
                            fontWeight={'bold'}
                        >
                            Marketing platform.
                        </Text>
                        <Text
                            fontSize={16}
                            color={'white'}
                            opacity={0.8}
                            mt={4}

                        >
                            The blueprint program was built by Raymond Chin & Team from the ups and downs of building a business for 8 years.
                        </Text>
                        <Text
                            fontSize={16}
                            color={'white'}
                            opacity={0.8}
                            mt={4}

                        >
                            You will learn practice, along with theory that is dissected from material from 4 years of business & management lectures from well-known universities.
                        </Text>

                        <br />
                        <ReusableButton buttonName="Learn the program" />

                    </VStack>


                </Stack>

            </VStack>
        </>
    );
};