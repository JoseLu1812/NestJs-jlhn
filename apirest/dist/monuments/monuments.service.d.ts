import { Monument } from "./monumentos.model";
export declare class MonumentsService {
    getAllMonuments(): string;
    getMonumentById(id: string): string;
    createMonument(monument: Monument): string;
    replaceMonument(id: string, monument: Monument): string;
    updateMonument(d: string, monument: Monument): string;
    deleteMonument(id: string, monument: Monument): string;
}
