

const barCanvas = document.getElementById('barCanvas');

const barChart = new Chart(barCanvas, {
    type: "bar",
    data:{
        labels:[2019 , 2020, 2021 , 2022, 2023 ,2024, 2025],
        datasets:[{
            data:[813, 20015 , 41296 , 34801 , 40629, 20836 , 13339],
            backgroundColor: [
                "#E10600",
                "#E10600",
                "#E10600",
                "#E10600",
                "#E10600",
                "#E10600",
                "#E10600"
            ]
        }]
    },
    options:{
        plugins:{
            title:{
                display:true,
                text:"Ventes de la Porsche Taycan par année"
            }
        },
        scales:{
            y:{
                suggestedMax:50000
            }
        }
    }

});

            
        
    