import * as Tp from '@radix-ui/react-tooltip';
import { cva, VariantProps } from 'class-variance-authority';
import React, { FC } from 'react';

const getContentStyle = cva(' p-2 rounded', {
    variants: {
        intent: {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-gray-500 text-white',
            danger: 'bg-red-500 text-white',
        },
        size: {
            small: 'text-sm',
            base: 'text-base',
            large: 'text-lg',
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'base',
    },
    compoundVariants: [
        {
            intent: 'danger',
            size: 'large',
            className: 'font-bold uppercase',
        },
    ],
});

const getArrowStyle = cva('fill-white', {
    variants: {
        intent: {
            primary: 'fill-blue-500',
            secondary: 'fill-gray-500',
            danger: 'fill-red-500',
        },
    },
    defaultVariants: {
        intent: 'primary',
    },
});

type Props = VariantProps<typeof getContentStyle> & {
    children: React.ReactNode;
    title?: string;
};

const Tooltip: FC<Props> = ({ children, title, size, intent }) => {
    return (
        <Tp.Provider delayDuration={0}>
            <Tp.Root>
                <Tp.Trigger asChild>{children}</Tp.Trigger>

                <Tp.Content
                    side="bottom"
                    className={getContentStyle({ intent, size })}>
                    {title}
                    <Tp.Arrow className={getArrowStyle({ intent })} />
                </Tp.Content>
            </Tp.Root>
        </Tp.Provider>
    );
};

export default Tooltip;
