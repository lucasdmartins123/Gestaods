import { useState } from "react";
import {
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { db } from "../Firebase/config";

const usePatients = () => {
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const loadPatients = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "patients"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPatients(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const editPatient = async (id, data) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "patients", id), data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deletePatient = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "patients", id));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addPatient = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "patients"), data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    addPatient,
    loadPatients,
    editPatient,
    deletePatient,
    patients,
    loading,
  };
};
export default usePatients;
