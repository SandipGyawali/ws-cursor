import type WebSocket from "ws";

/**
 * Connection records for the users with it's uuid objects
 */
export const connections: { [uuid: string]: WebSocket } = {};
