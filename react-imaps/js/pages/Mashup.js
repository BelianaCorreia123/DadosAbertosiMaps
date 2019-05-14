var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;


class Mashup extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		var me = this;
		var app = this.props.app;

		app.createCube(this.pieChartHyperCube(),res => me.getPieChartsObjects(app))

	}

	getPieChartsObjects(app){
		var me = this;
	  app.visualization.get("PAppmU").then( (res) => {
	  	var layout = res.model.layout;
	     let matrix = layout.qHyperCube.qDataPages[0].qMatrix;
	     var data = [];
	     matrix.forEach(function(row, id){
	     	data.push({name:row[0].qText, value:row[1].qText});
	     });


	     me.setState({pieChartsData:data});
	 })
	}

	pieChartHyperCube(){
		return {
	    "qStateName": "",
	    "qDimensions": [
	      {
	        "qLibraryId": "",
	        "qDef": {
	          "qGrouping": "N",
	          "qFieldDefs": [
	            "Case Timetable"
	          ],
	          "qFieldLabels": [
	            ""
	          ],
	          "qSortCriterias": [
	            {
	              "qSortByState": 0,
	              "qSortByFrequency": 0,
	              "qSortByNumeric": 0,
	              "qSortByAscii": 1,
	              "qSortByLoadOrder": 1,
	              "qSortByExpression": 0,
	              "qExpression": {
	                "qv": ""
	              },
	              "qSortByGreyness": 0
	            }
	          ],
	          "qNumberPresentations": [],
	          "qReverseSort": false,
	          "qActiveField": 0,
	          "qLabelExpression": "",
	          "autoSort": true,
	          "cId": "ZPMVHbm",
	          "othersLabel": "Others"
	        },
	        "qNullSuppression": true,
	        "qIncludeElemValue": false,
	        "qOtherTotalSpec": {
	          "qOtherMode": "OTHER_COUNTED",
	          "qOtherCounted": {
	            "qv": "10"
	          },
	          "qOtherLimit": {
	            "qv": "0"
	          },
	          "qOtherLimitMode": "OTHER_GE_LIMIT",
	          "qSuppressOther": false,
	          "qForceBadValueKeeping": true,
	          "qApplyEvenWhenPossiblyWrongResult": true,
	          "qGlobalOtherGrouping": false,
	          "qOtherCollapseInnerDimensions": false,
	          "qOtherSortMode": "OTHER_SORT_DESCENDING",
	          "qTotalMode": "TOTAL_OFF",
	          "qReferencedExpression": {
	            "qv": ""
	          }
	        },
	        "qShowTotal": false,
	        "qShowAll": false,
	        "qOtherLabel": {
	          "qv": ""
	        },
	        "qTotalLabel": {
	          "qv": ""
	        },
	        "qCalcCond": {
	          "qv": ""
	        },
	        "qAttributeExpressions": [],
	        "qAttributeDimensions": [],
	        "qCalcCondition": {
	          "qCond": {
	            "qv": ""
	          },
	          "qMsg": {
	            "qv": ""
	          }
	        }
	      }
	    ],
	    "qMeasures": [
	      {
	        "qLibraryId": "MPcQeZ",
	        "qDef": {
	          "qLabel": "",
	          "qDescription": "",
	          "qTags": [],
	          "qGrouping": "N",
	          "qDef": "",
	          "qNumFormat": {
	            "qType": "U",
	            "qnDec": 10,
	            "qUseThou": 0,
	            "qFmt": "",
	            "qDec": "",
	            "qThou": ""
	          },
	          "qRelative": false,
	          "qBrutalSum": false,
	          "qAggrFunc": "",
	          "qAccumulate": 0,
	          "qReverseSort": false,
	          "qActiveExpression": 0,
	          "qExpressions": [],
	          "qLabelExpression": "",
	          "autoSort": true,
	          "cId": "SdSNjp"
	        },
	        "qSortBy": {
	          "qSortByState": 0,
	          "qSortByFrequency": 0,
	          "qSortByNumeric": -1,
	          "qSortByAscii": 0,
	          "qSortByLoadOrder": 1,
	          "qSortByExpression": 0,
	          "qExpression": {
	            "qv": ""
	          },
	          "qSortByGreyness": 0
	        },
	        "qAttributeExpressions": [
	          {
	            "qExpression": "If([Case Timetable Rank]=2, green(),\nIf([Case Timetable Rank]=3, green(),\nIf([Case Timetable Rank]=4, yellow(),\nIf([Case Timetable Rank]=5, yellow(),\nIf([Case Timetable Rank]=6, red(),\nIf([Case Timetable Rank]=7, red()\n\n\n))))))\n\n",
	            "qLibraryId": "",
	            "qAttribute": false,
	            "id": "colorByExpression"
	          }
	        ],
	        "qAttributeDimensions": [],
	        "qCalcCond": {
	          "qv": ""
	        },
	        "qCalcCondition": {
	          "qCond": {
	            "qv": ""
	          },
	          "qMsg": {
	            "qv": ""
	          }
	        },
	        "showInPercent": false
	      }
	    ],
	    "qInterColumnSortOrder": [
	      0,
	      1
	    ],
	    "qSuppressZero": false,
	    "qSuppressMissing": true,
	    "qInitialDataFetch": [
	      {
	        "qLeft": 0,
	        "qTop": 0,
	        "qWidth": 10,
	        "qHeight": 500
	      }
	    ],
	    "qReductionMode": "N",
	    "qMode": "S",
	    "qPseudoDimPos": -1,
	    "qNoOfLeftDims": -1,
	    "qAlwaysFullyExpanded": false,
	    "qMaxStackedCells": 5000,
	    "qPopulateMissing": false,
	    "qShowTotalsAbove": false,
	    "qIndentMode": false,
	    "qCalcCond": {
	      "qv": ""
	    },
	    "qSortbyYValue": 0,
	    "qTitle": {
	      "qv": ""
	    },
	    "qCalcCondition": {
	      "qCond": {
	        "qv": ""
	      },
	      "qMsg": {
	        "qv": ""
	      }
	    },
	    "qColumnOrder": [],
	    "qLayoutExclude": {}
	  }
  
	}


	getObjects(app){
	  var me = this;
	  app.visualization.get("jTuCwkB").then( (res) => {
	     let dataPages = res.model.layout.qHyperCube.qDataPages[0];
	     let hyperCube = res.model.layout.qHyperCube;

	     me.setState({val:dataPages.qMatrix[0][0].qText});
	 })
	}

	render() {
		var charts = [];


	 	var divs =  [	<NativeQlikChart chartId="bananinha" app={this.props.csApp} key="QV03" qlikId='WJYuPN' />,
              		<NativeQlikChart chartId="QV04" app={this.props.app} key="QV04" qlikId='xfvKMP' />,
              		<NativeQlikChart chartId="QV05" app={this.props.app} key="QV05" qlikId='hRZaKk' />];
		if(this.state.pieChartsData){
			charts.push(<PieChart key="pieChart" data={this.state.pieChartsData}/>);
		}
		charts.push(<LineChart key="hahaha" chartId="coxinhadodelio" data={[820, 932, 901, 934, 1290, 1330, 1320]}/>);
		
		return	<div style={{heigth: '100%'}}> 
							<HomeBoxes boxId="box-01" meta="95" qlikData="75 anos" prog="24%" icon="favorite" desc="Expectativa de vida" title="Saúde" />
							<HomeBoxes boxId="box-02" meta="sdfsd" qlikData="85%" prog="35%" icon="school" desc="Alfabetização" title="Educação" />
							<HomeBoxes boxId="box-03" meta="random" qlikData="R$ 3,200" prog="67%" icon="business_center" desc="Salário Médio" title="Emprego" />
							<HomeBoxes boxId="box-04" meta="dado x" qlikData="37" prog="4%" icon="security" desc="Homic" title="Segurança" />
							<HomeBoxes boxId="box-05" meta="36465" qlikData="R$ 39k" prog="28%" icon="trending_up" desc="PIB per cápita" title="Economia" />
							<HomeBoxes boxId="box-06" meta="completo" qlikData="R$ 72mil" prog="89%" icon="monetization_on" desc="Invesitmento" title="Finanzas Públicas" />




	    				{/* {charts} */}
	    				
	  					{/* {divs} */}
	  				</div>;
  }
}

