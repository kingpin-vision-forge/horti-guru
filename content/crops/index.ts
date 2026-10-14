import type { CropId } from "@/content/crops";
import arecanut from "./arecanut";
import banana from "./banana";
import ginger from "./ginger";
import pepper from "./pepper";
import turmeric from "./turmeric";
import type { CropData } from "./types";

export const cropData: Record<CropId, CropData> = { ginger, turmeric, arecanut, banana, pepper };
