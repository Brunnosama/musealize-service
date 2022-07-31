import {createUserWithEmailAndPassword} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { Company } from "../entities/Company"
import { auth, db } from "./firebase"

type NewCompanyInput ={
    name: string
    email: string
    phone: string
    password: string
}

export const createCompany = async ({email, password, name, phone}: NewCompanyInput) : Promise<Company> => {
   const result = await createUserWithEmailAndPassword(auth, email, password)
   await setDoc(doc(db, 'companies', result.user.uid), {
    name,
    email,
    phone
   })
   return {
    id: result.user.uid,
    name,
    email,
    phone
   }
}