export * from './liveStreamApi';
import { LiveStreamApi } from './liveStreamApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [LiveStreamApi];

export interface ICloudinaryUrlConfig {
cloudinaryUrl?: string;
basePath?: string;
}

export interface IConfig {
userName: string;
password: string;
basePath?: string;
}
