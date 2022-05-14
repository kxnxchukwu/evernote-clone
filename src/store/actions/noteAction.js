import { toast } from 'react-toastify';

export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes')
        .add({
            ...note,
            favorite: false,
            createdAt: new Date()
        })
        .then(() => {
            toast.success("Note Added Successfully.", {
                className: 'toast-success-container toast-success-container-after'
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {

        const firestore = getFirestore();

        firestore.collection('notes').doc(note.id).delete()
        .then(() => {
            toast.warning("Note Deleted Successfully.", {
                className: 'toast-warning-container toast-warning-container-after'
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const taggleFavorite = (note) => {
    return(dispatch, getState, {getFirestore}) => {

        const favoriteStatus = !note.favorite;
        const firestore = getFirestore();

        firestore.collection('notes').doc(note.id).update({
            favorite: favoriteStatus
        }).then(() => {
            toast.info("Toggle Favorite Successful.", {
                className: 'toast-info-container toast-info-container-after'
            });
        }).catch(err => {
            console.log(err)
        })
    }
}

export const updateNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {

        const firestore = getFirestore();

        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        }).then(() => {
            toast.success("Update Note Successful", {
                className: 'toast-success-container toast-success-container-after'
            });
        }).catch(err => {
            console.log(err);
        })
    }
}