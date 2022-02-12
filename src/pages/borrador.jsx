const storeImage = (image) => {
  if (!image) return;

  const storage = getStorage();
  const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
  const storageRef = ref(storage, 'images/' + fileName);

  const uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        default:
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
      });
    }
  );
};
