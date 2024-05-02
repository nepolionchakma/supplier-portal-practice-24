import { createClient } from "@supabase/supabase-js";
import conf from "./conf";
import { Children, createContext, useContext, useEffect, useState } from "react";
import clsx from "clsx";
// console.log(conf.supabase_url, conf.supabase_key)
export const supabase = createClient(conf.supabase_url, conf.supabase_key);

const MyCreateContext = createContext();
export const useMyContext = () => useContext(MyCreateContext);

export const MyContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
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
          .from('departments')
          .select()
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
        .from('departments')
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
    signIn, signUp, data, isLoading, error, session, updateUserData, handleDelete
  }
  return (
    <MyCreateContext.Provider value={value}>
      {children}
    </MyCreateContext.Provider>
  )
};