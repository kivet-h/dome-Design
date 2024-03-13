import * as React from "react";
interface DrSearchInputProps {
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const DrSearchInput: React.FC<DrSearchInputProps>;
export { DrSearchInput };
