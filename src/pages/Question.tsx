import React from 'react';
import {
    VStack, Stack, Text, HStack, Spacer, Button, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';


interface FAQs {
    id: number;
    name: string;
    features: string;
}

const FAQS: FAQs[] = [
    {
        id: 1,
        name: "Is it I’ll get my Whole analytics of Business?",
        features:
            "Dummy Text",
    },
    {
        id: 2,
        name: "Can I customise my Marketing channel?",
        features: "Dummy answer",
    },
    {
        id: 3,
        name: "I can apply for Partnership?",
        features: "Dummy answer",
    },
    {
        id: 4,
        name: "This service is for Germany only or Worldwide?",
        features: "Dummy answer",
    },
    {
        id: 5,
        name: "I can have meet with Team?",
        features: "Dummy answer",
    },

];

export const Question: React.FC = () => {
    return (
        <>
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <Stack
                    spacing={[4, 4, 8, 6]}
                    direction={['column', 'column', 'column', 'row']}
                    p={4}
                    mt={6}
                    width={['100%', '100%', '100%', '80%']}
                >
                    <VStack

                        align={'start'}
                        width={['100%','100%','100%', '40%']}
                        gap={4}
                    >
                        <HStack
                            fontSize={["4xl", "4xl", "4xl", "4xl"]}
                            space-x={4}
                        >
                            <Text
                                color={'white'}
                            >
                                Any Questions
                                <Text
                                    as={'span'}
                                    color={'white'}
                                    opacity={0.7}
                                    pl={2}
                                >
                                    Cater
                                </Text>
                                <Spacer />
                                To Your
                                <Text
                                    as={'span'}
                                    bgGradient='linear(to-r, #CD43FF,#FD65A6,#FC9651,#FFBD72)'
                                    bgClip='text'
                                    pl={2}
                                >
                                    Convinence
                                </Text>
                            </Text>
                        </HStack>
                        <Text
                            color={'white'}
                            fontSize={["xl", "xl", "xl", "xl"]}
                            opacity={0.6}
                            textAlign={['center','left']}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </Text>
                        <Button
                            variant={"outline"}
                            alignSelf={'center'}
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
                            Learn More ⏩
                        </Button>
                    </VStack>
                    <VStack
                        width={['100%','100%','100%', '60%']}
                        gap={0.2}       
                    >
                        {FAQS.map((FAQS) => (
                            <Accordion
                                allowMultiple
                                width={["90%", "80%"]}
                                alignSelf="center"
                                bg="#010101"
                                key={FAQS.id}
                                borderY={'0.5px solid #35373D'}
                            >
                                <AccordionItem p={2}>                
                                        <AccordionButton
                                            color={'white'}
                                        >
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                                fontSize={["lg", "lg", "xl", "xl"]}
                                                color="white"
                                                fontWeight="light"
                                            >
                                                {FAQS.name}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>                          
                                    <AccordionPanel pb={2} color="white" fontWeight="light"
                                    >
                                        {FAQS.features}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </VStack>
                </Stack>
            </VStack>
        </>
    );
};

