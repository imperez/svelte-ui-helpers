interface Column {
    label: string
}

interface Cell {
    label: string
}

type Row = Array<Cell>;

interface LoaderData {
    endpoint: string,
    rowTransformer: (item: Object) => Row
}
