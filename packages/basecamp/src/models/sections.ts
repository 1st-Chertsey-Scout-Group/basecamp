import type { ImageMetadata } from "astro";


export interface Section {
    image: ImageMetadata;
    name: string;
    age: string;
    meetingDay: string;
    meetingStartTime: string;
    meetingEndTime: string;
}