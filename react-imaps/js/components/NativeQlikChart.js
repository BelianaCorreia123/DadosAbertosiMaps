var browserHistory = ReactRouter.browserHistory;


class NativeQlikChart extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.props.app.getObject(this.props.chartId, this.props.qlikId);
	}


	render() {

	  return	<div className="qvobject" id={this.props.chartId} />;
  }
}