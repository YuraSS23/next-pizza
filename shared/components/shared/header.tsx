import React from 'react';
import {cn} from "@/shared/lib/utils";
import {Container, SearchInput} from "@/shared/components/shared";
import Image from "next/image";
import {Button} from "@/shared/components/ui";
import {User} from "lucide-react";
import Link from "next/link";
import {CartButton} from "@/shared/components/shared/cart-button";

interface Props {
    hasSearch?: boolean;
    hasCart?: boolean;
    className?: string;
}

export const Header: React.FC<Props> = ({className, hasSearch = true, hasCart = true}) => {
    return (
        <header className={cn('border-b', className)}>
            <Container className={'flex items-center justify-between py-8'}>
                {/* Левая часть */}
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image src='/logo.png' alt='logo' width={35} height={35}/>
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                {/* Поиск */}

                {hasSearch && <div className="mx-10 flex-1">
                    <SearchInput/>
                </div>}


                {/* Правая часть */}

                <div className="flex items-center gap-3">
                    <Button variant='outline' className="flex items-center gap-1">
                        <User size={16}/>
                        Войти
                    </Button>

                    {hasCart && <CartButton/>}
                </div>


            </Container>
        </header>
    );
};