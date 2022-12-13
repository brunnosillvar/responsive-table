import { FC } from 'react';
import { StyledTable } from './style';

interface TableProps {
	children?: any;
	head: Array<any>;
	body: Array<Array<any>>;
	dataLabel: Array<any>;
	isResponsive: boolean;
}

export const Table: FC<TableProps> = (props) => {
	console.log('Body =====================', props.body);
	console.log('Head =====================', props.head);

	return (
		<>
			<StyledTable isResponsive={props.isResponsive} className={props.isResponsive ? 'table-responsive' : 'table-desk'}>
				<thead>
					<tr>
						{props.head.map((e, ind) => (
							<th scope="col" key={ind}>
								{e}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{props.body.map((e, i) => (
						<tr key={i}>
							{e.map((ele, ind) => (
								<td data-label={props.dataLabel[ind]} key={ind}>
									{ele === 'a fazer' ? (
										<span style={{ color: 'red' }}>{ele}</span>
									) : ele === 'feito' ? (
										<span style={{ color: 'green' }}>{ele}</span>
									) : ele === 'fazendo' ? (
										<span style={{ color: 'yellow' }}>{ele}</span>
									) : (
										ele
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</>
	);
};
