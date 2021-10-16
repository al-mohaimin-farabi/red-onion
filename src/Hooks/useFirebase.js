import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';

const useFirebase = () => {
    const profileUpdate = name => {
        updateProfile(getAuth().currentUser, { displayName: name })
            .catch(err => alert(err.message))
    }

    const createUser = (name, email, password) => {
        return createUserWithEmailAndPassword(getAuth(), email, password)
            .then(() => {
                profileUpdate(name)
            })
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(getAuth(), email, password)
    }

    const logout = () => signOut(getAuth());

    return { createUser, login, logout }
}

export default useFirebase;