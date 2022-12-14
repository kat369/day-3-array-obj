var kathir={
    basicInfotmation:{
        name:"Kathiravan",
        emailId:"kathir@gmail.com",
        contacnumber:"9095043789",
        address:"Erode, tamilnadu",
        pincode:"638504",        
    },


    workAndExperience:"i am a fresher,willing to work in full stack developer role",
    educationAndQualification:[
        {
            sranderd:"10th",
            nameofTheSchool:"jsms",
            yearOfPassing:"2013",
            percentage:"86",
        },
        {
            sranderd:"12th",
            nameofTheSchool:"Adarsh school",
            yearOfPassing:"2015",
            percentage:"67",
        },
        {
            college:"PMU",
            nameofTheSinstitute:"PMu",
            yearOfPassing:"2017",
            percentage:"83",
        },
        ],
    strength:[
        "*excellet interpersonal",
        "*willingness to learning new things",
        "*quick learner",
    ],
    exrtaCurrcularActivites:[
        "*district level footBall player",
        "*reading books",
    ],
    languagesKnown:[
        "*tamil",
        "*english",
    ]
}
    
let  katjson=JSON.stringify(kathir);
console.log(katjson);
let katobj=JSON.parse(katjson);
console.log(katjson);