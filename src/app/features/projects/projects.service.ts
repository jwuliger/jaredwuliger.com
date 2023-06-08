import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Project } from './projects-model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor(private firestore: AngularFirestore) {}

    // Create a new document in the 'projects' collection
    createProject(project: Project) {
        return this.firestore.collection('projects').add({ ...project });
    }

    // Read a document from the 'projects' collection
    readProject(id: string) {
        return this.firestore
            .collection('projects')
            .doc<Project>(id)
            .valueChanges();
    }

    // Update a document in the 'projects' collection
    updateProject(id: string, data: Partial<Project>) {
        return this.firestore.collection('projects').doc(id).update(data);
    }

    // Delete a document from the 'projects' collection
    deleteProject(id: string) {
        return this.firestore.collection('projects').doc(id).delete();
    }

    // Get all documents from the 'projects' collection
    getProjects() {
        return this.firestore.collection<Project>('projects').snapshotChanges();
    }
}
