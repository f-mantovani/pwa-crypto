import { DataRow } from "./types";

export const columns = [
	{
		id: 'price',
		name: 'PRICE',
		selector: (row: DataRow) => row.price,
		sortable: true,
	},
	{
		id: 'quantity',
		name: 'QUANTITY',
		selector: (row: DataRow) => row.quantity,
		sortable: true,
	},
	{
		id: 'time',
		name: 'TIME',
		selector: (row: DataRow) => row.time,
		sortable: true,
	},
]