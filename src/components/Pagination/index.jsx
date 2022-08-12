import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { getCharacter } from '../../API/characters'

export const Pagination = ({ onFetch, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  useEffect(() => {
    isLoading(true)
    fetchCharacter()
  }, [currentPage])

  const fetchCharacter = async () => {
    const { info, results } = await getCharacter(currentPage)
    setTotalPage(info.pages)
    onFetch(results)
    isLoading(false)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px'}}>
      {currentPage > 1 && (
        <div>
          <Button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </Button>
        </div>
      )}
      {currentPage > 1 && (
        <div className='bg-primary text-white text-center p-1' style={{ borderRadius: '5px', boxShadow: '0.5px 0.5px 0.5px 0.5px rgb(255, 255, 255, 0.2)' }}>
          <div style={{ marginTop: '5px' }}>
            Page {currentPage} of {totalPage}
          </div>
        </div>
      )}
      {currentPage < totalPage && (
        <Button onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </Button>
      )}
    </div>
  )
}
