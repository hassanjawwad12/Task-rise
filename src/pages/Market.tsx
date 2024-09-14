import React from 'react';
import { VStack, Text, Stack, HStack, Image } from '@chakra-ui/react';
import AnimatedNumber from '../Component/AnimatedCounter';
import ScrollReveal from '../Component/ScrollReveal';


interface Item {
    name: number;
    desc: string;
}

const items: Item[] = [
    { name: 150, desc: 'General Customer sales' },
    { name: 40, desc: 'Managed advertising budget' },
    { name: 2500, desc: 'Managed advertising budget' },
    { name: 1.2, desc: 'Generated new customers' }
];
//€40M+

export const Market: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <Stack
                    spacing={[4, 4, 8, 20]}
                    direction={['column', 'column', 'row', 'row']}
                    p={4}
                    mt={6}>
                    {items.map((item: Item, index: number) => (
                        <VStack key={index} align={'center'}>
                            <HStack
                                bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                                bgClip='text'
                                fontSize={["xl", "xl", "3xl", "3xl"]}
                                fontWeight={'bold'}
                            >
                                {(index !== 2 && index !== 3) && <Text>€</Text>}

                                <Text>
                                    <AnimatedNumber from={0} to={item.name} decimals={item.name % 1 === 0 ? 0 : 1} />
                                </Text>
                                {index !== 2 && <Text>M+</Text>}
                                {index === 2 && <Text>+</Text>}
                            </HStack>
                            <Text
                                fontSize={["sm", "sm", "md", "md"]}
                                color={'white'}
                            >
                                {item.desc}</Text>
                        </VStack>
                    ))}
                </Stack>
                <Text
                    bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                    bgClip='text'
                    fontSize={["md", "md", "lg", "lg"]}
                    fontWeight={'bold'}
                    mt={[4, 4, 8, 20]}
                >
                    Features
                </Text>
                <HStack
                    fontSize={["xl", "xl", "5xl", "5xl"]}
                    fontWeight={'bold'}
                    gap={4}
                >
                    <Text
                        color={'white'}
                        opacity={0.8}
                    >
                        Goal:
                    </Text>
                    <Text
                        color={'white'}
                    >
                        Market
                    </Text>
                    <Text
                        bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                        bgClip='text'
                    >
                        LEADERSHIP
                    </Text>
                </HStack>

                <Text
                    fontSize={16}
                    color={'white'}
                    opacity={0.8}
                    mt={4}
                    width={'50%'}
                    textAlign={'center'}
                >
                    You will learn practice, along with theory that is dissected from material from 4 years of business & management lectures from well-known universities.
                </Text>

                <Stack
                    spacing={[4, 4, 4, 10]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    align={'center'}
                    mt={6}>
                    <ScrollReveal duration={2}>
                        <Image src='ecom.png' alt="sales" height={['390', '550']} width={'auto'} />
                    </ScrollReveal>
                    <ScrollReveal duration={4}>
                    <Image src='growd.png' alt="sales" height={['390', '550']} width={'auto'} />
                    </ScrollReveal>

                </Stack>
            </VStack >
        </>
    );
};


/*
          </VStack>
        ))}
      </Stack>
    </VStack>
  );
};

export default Market; */