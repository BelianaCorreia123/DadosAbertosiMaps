class GenericChart extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
				this.renderChart();

	}

	renderChart(){
		var element = document.getElementById(this.props.chartId);
    if(element){
			var myChart = echarts.init(element);
      myChart.setOption(this.props.options);
    }
	}

	render() {
		this.renderChart();

    return <div id={this.props.chartId} style={{backgroundColor:'#eee', height: 400, width:600}}></div>;
  }
}
