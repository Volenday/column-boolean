import React from 'react';
import { Checkbox, Radio } from 'antd';

export default ({ editable = false, id, onChange, ...defaultProps }) => {
	return {
		...defaultProps,
		Cell: ({ row, value }) => {
			if (typeof value == 'undefined') return null;

			if (editable)
				return <Checkbox checked={value} onChange={e => onChange({ Id: row.Id, [id]: e.target.checked })} />;

			const icon = value ? { symbol: 'check', color: '#55b65c' } : { symbol: 'times', color: '#dc3545' };
			return <i class={`fa fa-${icon.symbol}-circle`} style={{ color: `${icon.color}` }} />;
		},
		Filter: ({ column: { filterValue, setFilter } }) => {
			return (
				<Radio.Group
					onChange={e => setFilter(e.target.value)}
					value={typeof filterValue !== 'undefined' ? filterValue : ''}>
					<Radio value="">All</Radio>
					<Radio value={true}>
						<i class="fa fa-check-circle" style={{ color: '#55b65c' }} />
					</Radio>
					<Radio value={false}>
						<i class="fa fa-times-circle" style={{ color: '#dc3545' }} />
					</Radio>
				</Radio.Group>
			);
		}
	};
};
