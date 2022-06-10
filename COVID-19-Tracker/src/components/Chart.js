import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../containers/api';
import { Line ,Bar } from 'react-chartjs-2';
import 'chart.js/auto'


const Chart = ({data:{confirmed , recovered , deaths}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());

        }

        fetchAPI();
    },[]);

    const linechart = (
        dailyData.length ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: 'true',
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: 'true',
                    }],
                }}

            />) : null
    )

    const barchart = (
        confirmed ? (<Bar
            data={{
               labels: ['Infected','Recovered', 'Deaths'],
               datasets: [{
                label: `Current in ${country}`,
                backgroundColor: [ 'blue', 'green', 'red'],
                data: [confirmed.value,recovered.value,deaths.value]
               }]
            }}
            options={{
                legend: {display: false},
                title: {display : true, text: `Current in ${country}`},
            }}
            
            />) : null
    );
    return (
        <div>
            {country ? barchart : linechart}

        </div>
    )
}

export default Chart
