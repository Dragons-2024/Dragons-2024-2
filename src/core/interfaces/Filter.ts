
export interface FilterOption {
    label: string;
    count: number;
}

export interface FilterCategory {
    name: string;
    options: FilterOption[];
}
