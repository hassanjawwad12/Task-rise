import React from 'react';
import { VStack, Stack, Text, Image } from '@chakra-ui/react';

interface Item {
    name: string;
    desc: string;
    image: string;
}

const items: Item[] = [
    { name: 'World-class learning from millions of sales', desc: 'Simply dummy text of the printing and typesetting industry.', image: 'accent.png' },
    { name: '27 / 7 availability for partners', desc: 'Simply dummy text of the printing and typesetting industry.', image: 'voice.png' },
    { name: 'Insights from Holistic approaches', desc: 'Simply dummy text of the printing and typesetting industry.', image: 'newvoice.png' },
];

export const Features: React.FC = () => {
    return (
        <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" p={4}>
            <Stack
                spacing={[4, 4, 8, 20]}
                direction={['column', 'column', 'row', 'row']}
                mt={6}
                width={['100%', '100%', '85%', '75%']}
                >
                {items.map((item: Item, index: number) => (
                    <VStack key={index} align={['center', 'center', 'flex-start', 'flex-start']}
                    >
                        <Image src={item.image} boxSize="60px" objectFit="cover" />
                        <Text
                            width={['100%', '100%', '100%', '60%']}
                            fontSize={["md", "md", "xl", "xl"]}
                            color={'white'}
                            textAlign={['center', 'center', 'left', 'left']}
                        >
                            {item.name}
                        </Text>
                        <Text
                            fontSize={["sm", "sm", "md", "md"]}
                            color={'white'}
                            opacity={0.6}
                            textAlign={['center', 'center', 'left', 'left']}
                        >
                            {item.desc}
                        </Text>
                    </VStack>
                ))}
            </Stack>
        </VStack>
    );
};