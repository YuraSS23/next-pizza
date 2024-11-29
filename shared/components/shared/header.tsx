import React from 'react';
import {cn} from "@/shared/lib/utils";
import {Container, SearchInput} from "@/shared/components/shared";
import Image from "next/image";
import {Button} from "@/shared/components/ui";
import {ArrowRight, ShoppingCart, User} from "lucide-react";
import Link from "next/link";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className={'flex items-center justify-between py-8'}>
                {/* Левая часть */}
                <Link href="/public">
                    <div className="flex items-center gap-4">
                        <Image src='/logo.png' alt='logo' width={35} height={35}/>
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                {/* Поиск */}

                <div className="mx-10 flex-1">
                    <SearchInput/>
                </div>


                {/* Правая часть */}

                <div className="flex items-center gap-3">
                    <Button variant='outline' className="flex items-center gap-1">
                        <User size={16}/>
                        Войти
                    </Button>

                    <div>
                        <Button className={'group relative'}>
                            <b>520 USD</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"/>
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="relative"/>
                                <b>3</b>
                            </div>
                            <ArrowRight size={20}
                                        className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
                        </Button>
                    </div>
                </div>


            </Container>
        </header>
    );
};