import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/config";
import { useToast } from "@chakra-ui/react";

export const PatientsContext = createContext();
export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [searchPatients, setSearchPatients] = useState([]);
  const toast = useToast();
  const loadPatients = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "patients"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchPatients = (name) => {
    const searchResult = patients.filter((patient) => {
      return patient.patient.toLowerCase().includes(name.toLowerCase());
    });
    if (searchResult.length > 0) {
      setSearchPatients(searchResult);
    } else {
      setSearchPatients([]);
      toast({
        title: "Nenhum paciente encontrado",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadPatients();
      setPatients(data);
    };
    fetchData();
  }, []);
  return (
    <PatientsContext.Provider
      value={{ patients, setPatients, handleSearchPatients, searchPatients }}
    >
      {children}
    </PatientsContext.Provider>
  );
};
