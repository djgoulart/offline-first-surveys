import { firebaseApp } from '../../firebase/clientApp'
import { getFirestore, collection, addDoc, enableIndexedDbPersistence } from "firebase/firestore"
import { useCollection } from 'react-firebase-hooks/firestore';

export interface ISurvey {
  name: string;
  pet: string;
}

const db = getFirestore(firebaseApp);

enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log("Multiple tabs open, persistence can only be enabled \
          in one tab at a a time")
    } else if (err.code == 'unimplemented') {
      console.log("The current browser does not support all of the \
          features required to enable persistence")
    }
  });

export function listSurveys() {
  const [data, loading, error] = useCollection(
    collection(db, 'surveys'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return data?.docs;
}

export async function createSurvey({ name, pet }: ISurvey) {
  await addDoc(collection(db, 'surveys'), { name, pet })
}