import { base_url } from "./pb_config";
import PocketBase from "pocketbase";

export const PB = new PocketBase(base_url);
