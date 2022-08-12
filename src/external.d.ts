// less模块声明
declare module '*.module.less' {
    const content: { [className: string]: string };
    export = content;
}
