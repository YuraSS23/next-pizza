import {axiosInstance} from "@/shared/services/instances";
import {Ingredient} from "@prisma/client";
import {ApiRoutes} from "@/shared/services/constants";

export const getAll = async () => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}