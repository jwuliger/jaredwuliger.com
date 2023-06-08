export class Project {
    id?: string; // Optional id, Firestore will auto-generate this
    caption: string;
    description: string;
    image: string;
    thumbnail: string;
    title: string;

    constructor(
        caption: string,
        description: string,
        image: string,
        thumbnail: string,
        title: string
    ) {
        this.caption = caption;
        this.description = description;
        this.image = image;
        this.thumbnail = thumbnail;
        this.title = title;
    }
}
