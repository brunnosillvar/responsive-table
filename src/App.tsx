import { Table } from './components/Table';
import GlobalStyle from './styles/GlobalStyle';

const data = [
	{ name: 'Carolina', status: 'feito', nota: '7' },
	{ name: 'João', status: 'fazendo', nota: '10' },
	{ name: 'Jurema', status: 'fazendo', nota: '5' },
	{ name: 'Jacira', status: 'a fazer', nota: '6' },
	{ name: 'Enzo', status: 'feito', nota: '2' },
	{ name: 'Davi', status: 'feito', nota: '9' },
	{ name: 'Carlos', status: 'a fazer', nota: '8' },
	{ name: 'Camila', status: 'fazendo', nota: '3' },
];

function App() {
	return (
		<>
			<GlobalStyle />
			<Table
				isResponsive={true}
				head={['Aluno', 'Satus', 'Nota']}
				dataLabel={['Aluno', 'Satus', 'Nota']}
				body={data.map((e) => [e.name, e.status, e.nota])}
			/>
		</>
	);
}

export default App;
