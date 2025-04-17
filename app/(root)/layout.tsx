import type {Metadata} from "next";
import {Header} from "@/shared/components/shared";

export const metadata: Metadata = {
    title: "Next Pizza | Главная",
};

export default function HomeLayout({
                                       children,
                                       modal
                                   }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className={'min-h-screen'}>
                <div className="flex flex-col rounded-lg gap-4 overflow-hidden [@media(max-width:1300px)]:px-4">
                    {/* Header с нижним бордером на всю ширину экрана */}
                    <div className="w-full">
                        <Header/>
                    </div>

                    {/* Основной контент (children и modal) */}
                    <div className="w-full flex flex-col gap-4">
                        {children}
                        {modal && (
                            <div className="w-full">
                                {modal}
                            </div>
                        )}
                    </div>
                </div>
        </main>
    )
        ;
}
