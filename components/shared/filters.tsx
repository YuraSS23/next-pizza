'use client';

import React, {useEffect} from 'react';
import {FilterCheckbox, Title} from "@/components/shared";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";
import {useSet} from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, loading, onAddId, selectedIngredients} = useFilterIngredients()

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))



    const [prices, setPrice] = React.useState<PriceProps>({priceFrom: 0, priceTo: 5000});

    const onChangeSetPrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        })
    }

    useEffect(() => {
        console.log({prices, pizzaTypes, sizes, selectedIngredients})
    }, [prices, pizzaTypes, sizes, selectedIngredients]);

    const items = ingredients.map(item => ({value: String(item.id), text: item.name}));

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            {/* Верхние чекбоксы */}
            {/*<div className="flex flex-col gap-4">
                <FilterCheckbox  name={'rwerew'} text="Можно собирать" value="1"/>
                <FilterCheckbox  name={'erewrwrwr'} text="Новинки" value="2"/>
            </div>*/}

            <CheckboxFiltersGroup
                name={'pizzaTypes'}
                title="Тип теста"
                className="mb-5"
                selected={pizzaTypes}
                onClickCheckbox={togglePizzaTypes}
                items={[
                    {text: 'Тонкое', value: '1'},
                    {text: 'Традиционное', value: '2'},
                ]}
            />

            <CheckboxFiltersGroup
                name={'sizes'}
                title="Размеры"
                className="mb-5"
                selected={sizes}
                onClickCheckbox={toggleSizes}
                items={[
                    {text: '20 см', value: '20'},
                    {text: '30 см', value: '30'},
                    {text: '40 см', value: '40'},
                ]}
            />

            {/* Фильтр цен */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} value={String(prices.priceFrom)}
                           onChange={(e) => onChangeSetPrice('priceFrom', Number(e.target.value))}/>
                    <Input type="number" placeholder="1000" min={100} max={1000} value={String(prices.priceTo)}
                           onChange={(e) => onChangeSetPrice('priceTo', Number(e.target.value))}/>
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[prices.priceFrom, prices.priceTo]}
                             onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}/>
            </div>

            <CheckboxFiltersGroup title="Ингридиенты"
                                  className="mt-5"
                                  limit={6}
                                  defaultItems={items.slice(0, 6)}
                                  items={items}
                                  loading={loading}
                                  onClickCheckbox={onAddId}
                                  selected={selectedIngredients}
                                  name={'ingredients'}
            />
        </div>
    );
};