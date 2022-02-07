export interface Contract {
    status: "OnRisk" | "Cancelled";
    premium: number;
    startDate: Date;
    endDate: Date;
    customer: {
        id: string;
        firstname: string;
        lastname: string;
    };
    device: {
        id: string;
        name: string;
        price: number;
    }
}
