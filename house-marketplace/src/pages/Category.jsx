import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where, orderBy, linit, startAfter} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'

function Category() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] =useState(true)

  const params = useParams()

  return (
    <div>Categories</div>
  )
}

export default Category