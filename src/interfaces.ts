"use strict";

import * as express from "express";

export interface Warrior {
    fight(): string;
    sneak(): string;
}

export interface Weapon {
    hit(): string;
}

export interface ThrowableWeapon {
    throw(): string;
}

export interface IDatabase {
    connect(url: string): Promise<any>;
    getApiKey(apiKey: string): Promise<any>;
    getProjects(apiKey: string): Promise<any>;
}

export interface IApp {
    express: express.Application;
}

export interface IEndpoint {
    bind(express: express.Application);
}