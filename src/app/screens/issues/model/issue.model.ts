export class issueListResult{
    list!: Array<issue>;
    page!: number;
    size!: number;
    count!: number;
}
export class issue{
    id!:string;
    projectName!: string;
    equipmentName!: string;
    creationDate!: Date;
}
