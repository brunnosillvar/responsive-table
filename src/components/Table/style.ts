import styled from 'styled-components';

interface TableProps {
	isResponsive: boolean;
}

export const StyledTable = styled.table<TableProps>`
	border: 1px solid #ccc;
	border-collapse: collapse;
	margin: 0;
	padding: 0;
	width: 100%;
	bottom: fixed;

	caption {
		font-size: 1.5em;
		margin: 0.5em 0 0.75em;
	}

	tr {
		background-color: #f8f8f8;
		border: 1px solid #ddd;
		padding: 0.35em;
	}

	th,
	td {
		padding: 0.62em;
		text-align: center;
	}

	th {
		font-size: 0.85em;
		letter-spacing: 0.1em;
		/* text-transform: uppercase; */
	}

	td .action {
		border: 0;
		padding: 5px;
		margin-right: 2px;
		align-items: center;
		display: inline-block;
		border-radius: 4px;
	}

	td .action svg {
		vertical-align: middle;
	}

	td .badge {
		padding: 3px;
		border-radius: 3px;
		color: #fff;
	}

	/* --------------------------------------------------------------------------------------- */

	@media screen and (max-width: ${(props) => (props.isResponsive ? '600px' : '1px')}) {
		border: 0;

		caption {
			font-size: '1.3rem';
		}

		thead {
			border: none;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		tr {
			border-bottom: 3px solid #ddd;
			display: block;
			margin-bottom: 0.65em;
		}

		td {
			border-bottom: 1px solid #ddd;
			display: block;
			font-size: 0.8em;
			text-align: right;
		}

		td:before {
			content: attr(data-label);
			float: left;
			font-weight: bold;
			/* text-transform: ${(props) => (props.isResponsive ? 'uppercase' : '')}; */
		}

		td:last-child {
			border-bottom: 0;
		}
	}
`;

export const StyledTr = styled.tr``;
export const StyledTd = styled.td``;
export const StyledTh = styled.th``;
