export class Adventurer {
    id: number;
    level: number;
    exp: number;
    missions: {
        finished: number[];
        doing: number[];
    }
    achievements: number[];
    name: string;
    photo_id: number;
    description: string;
    skills: string;
}