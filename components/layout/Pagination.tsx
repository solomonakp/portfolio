import React from 'react'
import { range } from '@utils/functions'
import useTheme from '@hooks/useTheme'
import Link from 'next/link'

// import { useRouter } from 'next/router'

interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  currentPage: number
  pageNeighbours: 0 | 1 | 2
}

const Pagination = (props: PaginationProps) => {
  const { itemsPerPage, totalItems, currentPage, pageNeighbours } = props

  const {
    colors: { btnColor, primary, lightColor },
    border: { buttonBorder },
    media: { maxXs, maxSm },
    radius: { paginationRadius },
  } = useTheme()

  let pageNumbers
  // finding the median of maxValue if there are total items else total pages = 1
  const totalPages = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1
  // setting range of neighbour to a range between 0-2
  const neighbours =
    typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0
  /* total number is gotten from neighbour which is btwn 0 and 2 
       I multiplied that value by 2 to account for numbers on each side 
       while 3 is added to account for the number itself
        the first number and the last number 
    */
  const totalNumbers = neighbours * 2 + 3

  // const totalBlocks = totalNumbers + 2;

  if (totalPages > totalNumbers) {
    const LEFT_PAGE = 'LEFT'

    const RIGHT_PAGE = 'RIGHT'
    //  start page either 2 or currentPage - neighbour
    const startPage = Math.max(2, currentPage - neighbours)
    //  start page either second to the last page or currentPage + neighbour
    const endPage = Math.min(totalPages - 1, currentPage + neighbours)
    // getting available range of pages
    let pages = range(startPage, endPage)
    // adding first and last page
    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    /* if pages are greater than 2 which is the heights
     neighbours then hasLeftSpill is true else false */
    const hasLeftSpill = startPage > 2
    /*  if total pages minus the current last neighbour  is 
    greater than 1 then true else false  */
    const hasRightSpill = totalPages - endPage > 1
    /*  spillOffset is the total number of pages either to left or right
     it is gotten by totalNUmbers minus pageLength plus 1 which accounts 
     for either first or last page 
    */
    const spillOffset = totalNumbers - (pages.length + 1)
    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range(startPage - spillOffset, startPage - 1)
        pages = [LEFT_PAGE, ...extraPages, ...pages]
        break
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range(endPage + 1, endPage + spillOffset)
        pages = [...pages, ...extraPages, RIGHT_PAGE]
        break
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
        break
      }
    }
    pageNumbers = [1, ...pages, totalPages]
  } else {
    pageNumbers = range(1, totalPages)
  }

  return (
    <nav className="container-xl">
      <ul className="pagination-container d-flex flex-wrap justify-content-center">
        {pageNumbers.map((number) => {
          if (typeof number !== 'number') {
            return (
              <li
                key={number}
                className="page-item mx-1 d-flex align-items-center"
              >
                ...
              </li>
            )
          }
          return (
            <li key={number} className="page-item">
              <Link as={`/blog?page=${number}`} href={`/blog?page=${number}`}>
                <a
                  className={`pagination-link ${
                    number === currentPage ? 'active' : ''
                  }`}
                >
                  {number}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        .pagination-container {
          list-style-type: none;
          padding-left: 0;
          margin: 5rem 0 6.25rem 0;
          @media (${maxSm}) {
            margin-top: 5rem;
          }
          li:not(:last-of-type) {
            margin-right: 0.625rem;
            color: ${primary};
          }

          .pagination-link {
            background-color: transparent;
            width: 40px;
            height: 40px;
            display: flex;
            text-align: center;
            font-size: 20px;
            justify-content: center;
            align-items: center;
            border: ${buttonBorder};
            color: ${btnColor};
            transition: all 300ms ease-out;
            border-radius: ${paginationRadius};
            background-color: transparent;
            @media (${maxXs}) {
              width: 25px;
              height: 25px;
              font-size: 18px;
              border-radius: 4px;
            }

            &.active {
              transition: all 300ms ease-in;
              background: ${primary};
              border: ${primary};
              color: ${lightColor};
            }
            &:hover {
              transition: border 300ms ease-in;
              border: 1px solid ${primary};
            }
          }
        }
      `}</style>
    </nav>
  )
}

export default Pagination
