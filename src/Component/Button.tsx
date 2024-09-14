import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
    buttonName: string;
}
const ReusableButton: React.FC<CustomButtonProps> = ({ buttonName, ...rest }) => {
    return (
        <Button
            bgGradient='linear(to-r, #CD43FF, #FD65A6,#FC9651,#FFBD72)'
            variant={"solid"}
            fontSize={14}
            color="white"
            px={6}
            py={4}
            rounded = "full"
            _hover={{
                bg: "green",
                color: "white",
                transition: "0.5s",
            }}
            {...rest}
        >
            {buttonName}
        </Button>
    );
};

export default ReusableButton;