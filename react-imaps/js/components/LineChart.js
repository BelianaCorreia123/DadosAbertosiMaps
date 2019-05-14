class LineChart extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	} 

	render() {
		var  options = {
									    xAxis: {
									        type: 'category',
									        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
									    },
									    yAxis: {
									        type: 'value'
									    },
									    series: [{
									        data: this.props.data,
									        type: 'line'
									    }]
									};

    return <GenericChart chartId={this.props.chartId} options={options}/>;
  }
}
