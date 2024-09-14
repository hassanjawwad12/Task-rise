import React from 'react';
import { VStack,HStack,Text,Image,Spacer,Stack } from '@chakra-ui/react';
export const Footer: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <Image src="logo.png" alt="trumpet" width={['200px','200px']} height={'auto'}/>
                <Stack
                width={['90%','90%','90%', '40%']}
                color={'white'}
                fontSize={['3xl','3xl','4xl','lg']}
                mt={6}
                direction={['column', 'column', 'column', 'row']}
                gap={['5','20']}
                cursor={'pointer'}
                align={['center','center','center','flex-start']}
                 >
                    <Text>Overview</Text>
                    <Text>Features</Text>
                    <Text>Pricing</Text>
                    <Text>Careers</Text>
                    <Text>Help</Text>
                    <Text>Privacy</Text>
                </Stack>
                <HStack
                    width={['90%','90%','90%', '80%']}
                    color={'white'}
                    fontSize={['xs','lg']}
                    fontWeight={'light'}
                    mt={10}
                    py={2}
                >
                    <Text>© 2024 Task Rise GmbH. All rights reserved.</Text>
                    <Spacer />
                    <Text>Terms</Text>
                    <Text>Privacy</Text>
                    <Text>Cookies</Text>
                </HStack>
            </VStack>
        </>
    );
};