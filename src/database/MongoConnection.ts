import mongoose from "mongoose";
import { config } from '../config/Constants';

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.dbUri);
            console.log('Database conectado');
        } catch (error) {
            console.log(`ERRO: ${error}`);
            process.exit(1);
        }
    }
}