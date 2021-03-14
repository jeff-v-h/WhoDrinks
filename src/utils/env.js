import base64 from 'base-64';

export const API_HOST = process.env['API_HOST'];
const API_USERNAME = process.env['API_USERNAME'];
const API_PASSWORD = process.env['API_PASSWORD'];
export const API_TOKEN = base64.encode(`${API_USERNAME}:${API_PASSWORD}`);
