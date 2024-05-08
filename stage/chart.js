const graph = document.getElementById('graph').getContext('2d');

let myChart = new Chart(graph, {
    type:"doughnut",
    data: {
        labels: [
         "Informatique bureautique",
          "Informatique avancé" ,
           "Cours de Langue",
            "Apprentisage du métier",
           
    ],
    datasets: [
        {
            label:"Nb étudiant",
            data: [2,2,2,1],
            backgroundColor: [
                "red",
                "green",
                "grey",
                "blue",
               
            ],
            hoverBorderWidth:3,
        }
      
    ]
    },
    options: {
     title: {
        display: true,
        text:"Les étudiant inscrits",
        fontSize: 24,

     },
     layout:{
        padding: {
            top:20,
        },
     },
    },

});