import { getStorage, ref, listAll, deleteObject } from "firebase/storage";
import { app } from "../../client/src/firebase";

export const checkStorage = async () => {
  const storage = getStorage(app);
  const storageRef = ref(storage);
  const data = await listAll(storageRef);
  const path = data.items;
  const today = Date.now();

  for (let i = 0; i < path.length; i++) {
    const name = path[i]._location.path;
    const deleteRef = ref(storage, `${name}`);
    const createdAt = path[i]._location.path.split("_")[0];
    const difference = today - createdAt;

    if (difference >= 7786000000) {
      deleteObject(deleteRef);
    }
  }
};
