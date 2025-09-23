export const uploadImageToIndexedDb = async (file) => {
  const db = await new Promise((resolve, reject) => {
    const request = indexedDB.open("ImageStorage", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  const transaction = db.transaction("images", "readwrite");
  const store = transaction.objectStore("images");

  await new Promise((resolve, reject) => {
    const addRequest = store.put({ id: "uploadedImage", file });

    addRequest.onsuccess = () => resolve();
    addRequest.onerror = () => reject(addRequest.error);
  });

  const blobUrl = await new Promise((resolve, reject) => {
    const transaction = db.transaction("images", "readonly");
    const store = transaction.objectStore("images");

    const getRequest = store.get("uploadedImage");
    getRequest.onsuccess = () => {
      const result = getRequest.result;
      if (result) {
        resolve(URL.createObjectURL(result.file));
      } else {
        resolve("");
      }
    };
    getRequest.onerror = () => reject(getRequest.error);
  });

  return blobUrl;
};
