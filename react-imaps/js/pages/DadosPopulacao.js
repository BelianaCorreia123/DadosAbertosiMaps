
class DadosPopulacao extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
	  return	<div className="qvobject"> 
	   					<a className="button" onClick={e => browserHistory.push(browserHistory.getCurrentLocation().pathname+'#populacao')}>
			          Pagina {this.props.pageParam ? this.props.pageParam : 'B'}
			      </a>
	  				</div>;
  }
}