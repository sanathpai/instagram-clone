import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import firebase from "firebase";
import { storage, db } from './firebase';

function ImageUpload({ username }) {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState('');
    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]); {/*get the first file that was selected */ }
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        })
                    });
                setProgress(0);
                setImage(null);
                setCaption('');
            }
        )
    }
    return (
        <div>
            <progress value={progress} max="100" />
            <input type="text" placeholder="Enter a caption!!!" onChange={(event) => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button className="imageupload__button" onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
