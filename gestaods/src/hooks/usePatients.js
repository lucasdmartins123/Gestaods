import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { db } from "../Firebase/config";
import { PatientsContext } from "../Context/PatientsContext";

const usePatients = () => {
  const [loading, setLoading] = useState(false);
  const { patients, setPatients } = useContext(PatientsContext);

  const addPatient = async (data) => {
    setLoading(true);
    try {
      const res = await addDoc(collection(db, "patients"), data);
      setPatients([...patients, { id: res.id, ...data }]);
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
      const updatedPatients = patients.map((patient) =>
        patient.id === id ? { ...patient, ...data } : patient
      );
      setPatients(updatedPatients);
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
      const updatedPatients = patients.filter((patient) => patient.id !== id);
      setPatients(updatedPatients);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    addPatient,
    editPatient,
    deletePatient,
    loading,
  };
};
export default usePatients;
