export interface Role {
    imageUrl: string;
    name: string;
    discription: string;
    highlightText: string;
    slug: string;
    accordianData: AccordianData[];
    accordianImageUrl: string;
}

export interface AccordianData {
    title: string;
    summary: string;
}   
