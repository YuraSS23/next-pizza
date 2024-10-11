import {axiosInstance} from "@/services/instances";
import {Ingredient} from "@prisma/client";
import {ApiRoutes} from "@/services/constants";

export const getAll = async () => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}