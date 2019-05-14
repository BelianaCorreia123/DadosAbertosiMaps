class PieChart extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	} 

	render() {
		var options = {
        			    title : {
        			        text: 'Open Cases by Age',
        			        x:'center'
        			    },
        			    tooltip : {
        			        trigger: 'item',
        			        formatter: "{a} <br/>{b} : {c} ({d}%)"
        			    },
        			    series : [
        			        {
        			            name: 'Cases Timetable',
        			            type: 'pie',
        			            radius : '55%',
        			            center: ['50%', '60%'],
        			            data:this.props.data,
        			            itemStyle: {
        			                emphasis: {
        			                    shadowBlur: 0,
        			                    shadowOffsetX: 0,
        			                    shadowColor: 'rgba(0, 0, 0, 0)'
        			                }
        			            }
        			        }
        			    ]
        			};

    return <GenericChart chartId="pieChart" options={options}/>;
  }
}
