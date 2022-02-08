export interface ITableConfig {
    selectable: boolean;
    header: ITableHeaderConfig[];
}

export interface ITableHeaderConfig {
    key: string;
    title: string;

}