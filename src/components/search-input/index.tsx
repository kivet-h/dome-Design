import * as React from "react";

interface SearchInputProps {
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
    const {
        defaultValue,
        placeholder,
        onChange,
    } = props;

    const inputOnChange: React.ChangeEventHandler<HTMLInputElement>
        = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value, e);
        }
    }

    return (
        // 包裹
        <div>
            {/*存放icon*/}
            <div></div>
            {/* 输入框*/}
            <input defaultValue={defaultValue}
                   placeholder={placeholder}
                   onChange={inputOnChange}></input>
        </div>
    );
}
