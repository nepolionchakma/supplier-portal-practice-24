import { createClient } from "@supabase/supabase-js";
import conf from "./conf";
import { Children, createContext, useContext, useEffect, useState } from "react";
import clsx from "clsx";
// console.log(conf.supabase_url, conf.supabase_key)
export const supabase = createClient(conf.supabase_url, conf.supabase_key);

const AuthCreateContext = createContext();
export const useAuthContext = () => useContext(AuthCreateContext);

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [useerData, setUsrData] = useState(null)
  const [error, setError] = useState(null)
  const [session, setSession] = useState(null)


  // Authentication Section
  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session)
        setIsLoading(false);
      })
    const { data: { subscription }, } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setIsLoading(false);
    })
    return () => subscription.unsubscribe()
  }, []);

  // Get Data
  useEffect(() => {
    const allUsers = async () => {
      try {
        const { data, error } = await supabase
          .from('def_persons')
          .select('*')
        if (error) setError(error)
        if (data) setData(data)
        setIsLoading(false)
      } catch (error) {
        throw error
      } finally {
        setIsLoading(false)
      }
    }
    allUsers()
  }, [data])

  // create users
  const signUp = async (email, password, full_name) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name
          }
        }
      })
      if (error) setError(error)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }

  }
  // Create a user
  const createUser = async (email, password, user_name, first_name, middle_name, last_name, job_title, org_type, org_id, org_id_column_name, org_id_table_name, domain_name) => {


    const { data, error } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            email, password, user_name, first_name, middle_name, last_name, job_title, org_type, org_id, org_id_column_name, org_id_table_name, domain_name
          }
        }
      }
    )
    console.log(data)
    console.log(error)
  }
  // signIn Function & invok it
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email, password
      })
      if (error) return setError(error)
      if (data) {
        setError('')
      }
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from('def_persons')
        .delete()
        .eq('id', id)
      if (error) setError(error)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  const updateUserData = async (user_name, first_name, middle_name, last_name, job_title, org_type, org_id, org_id_column_name) => {
    const { data, error } = await supabase
      .from('departments')
      .update({ user_name, first_name, middle_name, last_name, job_title, org_type, org_id, org_id_column_name })
      .eq('id', id)
  }


  const value = {
    signIn, signUp, createUser, data, isLoading, error, session, updateUserData, handleDelete,
  }
  return (
    <AuthCreateContext.Provider value={value}>
      {children}
    </AuthCreateContext.Provider>
  )
};