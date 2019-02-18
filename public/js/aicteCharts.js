$(document).ready(function(){
    //top5_institute
Highcharts.chart('top5_institute', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 5 Institutes having maximum filed Grievance'
    },
    xAxis: {
        categories: [' DR.VARSHA PATIL INSTITUTE OF TECHNOLOGY', 'SAIGANAPATHI ENGINEERING COLLEGE', 'JSPM NARHE TECHNICAL CAMPUS', 'NALANDA INSTITUTE OF TECHNOLOGY', 'CHAITANYA INSTITUTE OF COMPUTER SCIENCES']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Grievance Count'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Pending',
        data: [12,8,5,6,3]
    }, {
        name: 'Satisfied',
        data: [8,9,11,10,7]
    }, {
        name: 'Handled',
        data: [6,7,5,3,5]
    }]
});

// grievance_type

Highcharts.chart('grievance_type', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 0
        }
    },
    title: {
        text: 'Types of Grievance'
    },
    plotOptions: {
        pie: {
            innerSize:70,
            depth: 50,
            dataLabels: {
                enabled: false,
                format: '{point.percentage:.1f}%'
                
            },
            showInLegend:true,
        },
        
        
    },
    legend: {
        align: 'right',
        x: -25 ,
        verticalAlign: 'top',
        y: 20,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,

    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percentage',
        data: [
            ['Examination Cell', 41 ],
            ['Admission Cell', 14],
            ['Training & Placement ', 17],
            ['Accounts', 29],            
        ]
    }]
});

// grievance_yearwise
Highcharts.chart('grievance_yearwise', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Yearwise filled Grievances'
    },
    xAxis: {
        categories: ['2015','2016','2017','2018','2019']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Grievance Count'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Filled Grievance',
        data: [6000,2000,5000,7000,3000]
    }]
});


// top5_state
Highcharts.chart('top5_state', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 5 state having maximum Grievance'
    },
    xAxis: {
        categories: ['Sikkim','UP ','Punjab','Kerela','Delhi']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Grievance Count'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total Grievance',
        data: [6000,2000,5000,7000,3000]
    }]
});
});
// jquery end
