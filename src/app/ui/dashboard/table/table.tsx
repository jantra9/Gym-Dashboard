import React from 'react'

interface TableProps {
  headers: (string | { label: string, colspan: number })[],
  list: string[]
}
const Table:React.FC<TableProps> = ({headers, list}) => {

  return (
    <div className='text-sm pb-32 overflow-x-auto sm:w-full flex justify-center sm:pb-3 sm:text-base'>
      <table className='w-full table-row sm:max-w-screen-lg'>
        <thead>
          <tr><th colSpan={9} className='bg-black text-white text-left rounded-t-lg h-10 pl-5'>MEMBER MANAGEMENT</th></tr>
          <tr className='bg-gray-300 min-w-full h-10'>
          {headers.map((header, index) => (
              <th className='px-5' key={index} colSpan={typeof header === 'object' ? header.colspan : 1}>
                {typeof header === 'object' ? header.label : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-gray-100'>
          {[...Array(9)].map((_,i)=>(
          <tr className='border-b'>
                <td className='p-2 px-4'>
                  <input type='checkbox' />
                </td>            
                {list.map(item=>(
                <th className='font-normal py-1'>{item}</th>
                ))}
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default Table


