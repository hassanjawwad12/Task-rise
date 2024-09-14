import React, { useEffect, useState } from 'react';
import { MotionBox } from './MotionBox';

interface AnimatedNumberProps {
    from: number;
    to: number;
    decimals?: number; // Optional prop to specify the number of decimal places
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ from, to, decimals = 0 }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let start: number | null = null;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / 4000, 1);
            const value = from + (to - from) * progress;
            setCount(value);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [from, to]);

    const formattedCount = count.toFixed(decimals);

    return (
        <MotionBox
            as="span"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
        >
            {formattedCount}
        </MotionBox>
    );
};

export default AnimatedNumber;