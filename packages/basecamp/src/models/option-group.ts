import type { Option } from "./option";

export interface OptionGroup {
    type: "group";
    label: string;
    options: Option[]
}