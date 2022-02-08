export interface Contract {
    status: "OnRisk" | "Cancelled" | "NTU" | "Declined";
    premium: number;
    startDate: Date;
    endDate: Date;
    policy: string;
    phone: string;
    imei: string;
    owner: "AUT" | "BGR" | "SVN" | "HRV";
    contractType: "HSI01_1" | "HSI01_2" | "HSI01_3";
    customer: {
        id: string;
        name: string
    };
    device: {
        id: string;
        name: string;
        price: number;
    }
}
