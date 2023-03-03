export class actionListResult{
    list!: Array<actionDetails>;
    page!: number;
    size!: number;
    count!: number;
}

export class actionDetails {
  createdDate!: string;
  description!: string;
}
