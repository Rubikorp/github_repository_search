import { Repository } from '../types/repoSliceTypes'

export const sortRepositories = (
	repositories: Repository[],
	sortColumn: keyof Repository,
	sortDirection: 'asc' | 'desc'
): Repository[] => {
	return [...repositories].sort((a, b) => {
		const aValue = a[sortColumn]
		const bValue = b[sortColumn]

		const isANull = aValue === null
		const isBNull = bValue === null

		if (isANull && isBNull) return 0
		if (isANull) return sortDirection === 'asc' ? 1 : -1
		if (isBNull) return sortDirection === 'asc' ? -1 : 1

		if (typeof aValue === 'string' && typeof bValue === 'string') {
			return sortDirection === 'asc'
				? aValue.localeCompare(bValue)
				: bValue.localeCompare(aValue)
		}

		return sortDirection === 'asc'
			? (aValue as number) - (bValue as number)
			: (bValue as number) - (aValue as number)
	})
}
