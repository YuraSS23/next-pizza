import React from 'react';
import {cn} from "@/lib/utils";
import {FilterCheckbox, Title} from "@/components/shared";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox />
                <FilterCheckbox />
            </div>

        </div>
    );
};