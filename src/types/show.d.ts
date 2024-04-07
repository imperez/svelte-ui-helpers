interface Angle {
    id: string,
    name: string,
    code: string,
    description?: string,
    type: Type,
    location?: string,
    structure?: string,
    deletedAt?: Date
}

interface Match {
    id: string,
    name: string,
    code: string,
    gimmicks: Array<Gimmick>
    structure?: string,
    deletedAt?: Date
}

interface Gimmick {
    id: string,
    name: string,
    code: string,
    finishes: Array<Finish>
    structure?: string,
    deletedAt?: Date
}

interface Finish {
    id: string,
    name: string,
    code: string,
    deletedAt?: Date
}
