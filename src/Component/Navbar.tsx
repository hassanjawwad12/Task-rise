import { HStack, Text, Box, Image, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import ReusableButton from "./Button";

export const Navbar: React.FC = () => {
    const [navTranslation, setNavTranslation] = useState("translateX(-100%)");

    const toggleNav = () => {
        navTranslation === "translateX(-100%)"
            ? setNavTranslation("translateX(0)")
            : setNavTranslation("translateX(-100%)");
    };

    return (
        <HStack
            width={"100%"}
            justifyContent={'center'}
            bg="#010101"
        >
            <HStack
                width={"90%"}
                display={{ base: "block", lg: "flex" }}
                justifyContent={"center"}
                align={"center"}
                px={4}
                bg="#010101"
                mt={4}
            >
                <HStack width={["100%",'100%','100%', '44%']} justifyContent={"space-between"}>
                    <Link to="/">
                        <Image src='/logo.png' h={'55'} w={60} pt={2} />
                    </Link>
                    <Box display={{ base: "block", lg: "none" }}>
                        <RxHamburgerMenu size={30} color="white" onClick={toggleNav} />
                    </Box>
                </HStack>
                <HStack
                    spacing={10}
                    display={{ base: "block", lg: "flex" }}
                    alignItems={"center"}
                    position={{ base: "absolute", lg: "initial" }}
                    left={0}
                    top={0}
                    gap={2}
                    fontWeight={"normal"}
                    zIndex={20}
                    padding={{ base: 10, lg: 0 }}
                    background={"brand.main"}
                    shadow={{ base: "xl", lg: "none" }}
                    minHeight={{ base: "100vh", lg: "fit-content" }}
                    transform={{ base: navTranslation, lg: "translateX(0)" }}
                    transition={"transform 200ms linear"}
                    bg={['white', 'black']}
                    textColor={['black', 'white']}
                    cursor={'pointer'}
                >
                    <Text>Services 🔻  </Text>
                    <Text ml={['', '2']}>Join us now</Text>
                    <Box display={{ base: "block", lg: "none" }}>
                        <ReusableButton buttonName="Free AUDIT" />
                    </Box>
                </HStack>
                <Spacer />
                <Box display={{ base: "none", lg: "block" }}>
                    <ReusableButton buttonName="Free AUDIT" />
                </Box>
            </HStack>
        </HStack>
    );
};
