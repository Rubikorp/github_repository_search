import React from 'react'
import {
	Pagination,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	SelectChangeEvent,
} from '@mui/material'

interface SortAndPaginationProps {
	page: number
	rowsPerPage: number
	totalItems: number
	onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void
	onRowsPerPageChange: (event: SelectChangeEvent<number>) => void 

}

const SortAndPagination: React.FC<SortAndPaginationProps> = ({
	page,
	rowsPerPage,
	totalItems,
	onPageChange,
	onRowsPerPageChange,
}) => {
	return (
		<div>
			<Pagination
				count={Math.ceil(totalItems / rowsPerPage)}
				page={page}
				onChange={onPageChange}
				variant='outlined'
				shape='rounded'
			/>
			<FormControl variant='outlined' style={{ margin: '16px' }}>
				<InputLabel id='rows-per-page-label'>На странице</InputLabel>
				<Select
					labelId='rows-per-page-label'
					value={rowsPerPage}
					onChange={onRowsPerPageChange}
				>
					<MenuItem value={5}>5</MenuItem>
					<MenuItem value={10}>10</MenuItem>
					<MenuItem value={20}>20</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}

export default SortAndPagination
