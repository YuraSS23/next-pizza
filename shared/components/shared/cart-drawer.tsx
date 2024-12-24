import React from 'react';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/components/ui/sheet';

interface Props {
    className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({className, children}) => {
    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                    <SheetHeader>
                        <SheetTitle>
                            В корзине <span className="font-bold">3 товара</span>
                        </SheetTitle>
                    </SheetHeader>

                    {/* Items */}

                </SheetContent>
            </Sheet>
        </div>
    );
};