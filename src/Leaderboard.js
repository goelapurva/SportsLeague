
import './leaderboard-style.css';
import {useState} from 'react';

export default function Leaderboard(){
      
        const  matches = [
            {
                "matchDate": 1651744228685,
                "stadium": "Maracanã",
                "homeTeam": "Brazil",
                "awayTeam": "Serbia",
                "matchPlayed": true,
                "homeTeamScore": 1,
                "awayTeamScore": 0
            },
            {
                "matchDate": 1651744228685,
                "stadium": "Stade de Suisse",
                "homeTeam": "Switzerland",
                "awayTeam": "Serbia",
                "matchPlayed": true,
                "homeTeamScore": 2,
                "awayTeamScore": 2
            },
            {
                "matchDate": 1651744228685,
                "stadium": "Stadion Rajko Mitic",
                "homeTeam": "Serbia",
                "awayTeam": "Cameroon",
                "matchPlayed": true,
                "homeTeamScore": 0,
                "awayTeamScore": 1
            },
            {
                "matchDate": 1651744228685,
                "stadium": "Maracanã",
                "homeTeam": "Brazil",
                "awayTeam": "Switzerland",
                "matchPlayed": true,
                "homeTeamScore": 3,
                "awayTeamScore": 0
            },
            {
                "matchDate": 1651744228685,
                "stadium": "Maracanã",
                "homeTeam": "Brazil",
                "awayTeam": "Cameroon",
                "matchPlayed": true,
                "homeTeamScore": 4,
                "awayTeamScore": 4
            },
            {
                "matchDate": 1651744228685,
                "stadium": "Stade de Suisse",
                "homeTeam": "Switzerland",
                "awayTeam": "Cameroon",
                "matchPlayed": true,
                "homeTeamScore": 2,
                "awayTeamScore": 2
            }
        ];

				let teams = [
					{
							teamName : "Brazil" ,
							matchesPlayed: 0,
							goalsAgainst:0,
							 goalsFor:0,
							 points: 0,
					},
					{
							teamName : "Switzerland" ,
							matchesPlayed: 0,
							goalsAgainst:0,
							 goalsFor:0,
							 points: 0,
					},
					{
							
							teamName : "Cameroon" ,
							matchesPlayed: 0,
							goalsAgainst:0,
							 goalsFor:0,
							 points: 0,
					},
					{
							
							teamName : "Serbia" ,
							matchesPlayed: 0,
							goalsAgainst:0,
							 goalsFor:0,
							 points: 0,
					},
					
			]
        
      function generate(){
					
        function leader(matches,teams){
        
            console.log(matches);
            console.log(teams);

                    let oldVal= teams.map(arrayElem => {
                            for(let i=0;i<matches.length;i++){
                                    
                                if(matches[i].homeTeam === arrayElem.teamName){
                                    arrayElem.matchesPlayed = arrayElem.matchesPlayed + 1;
                                    arrayElem.goalsFor = arrayElem.goalsFor + matches[i].homeTeamScore ;
                                    arrayElem.goalsAgainst = arrayElem.goalsAgainst + matches[i].awayTeamScore ;
                                }
                                if(matches[i].awayTeam === arrayElem.teamName){
                                    arrayElem.matchesPlayed = arrayElem.matchesPlayed + 1;
                                    arrayElem.goalsFor = arrayElem.goalsFor + matches[i].awayTeamScore ;
                                    arrayElem.goalsAgainst = arrayElem.goalsAgainst + matches[i].homeTeamScore ;
                                }

                                if(matches[i].homeTeam === arrayElem.teamName){
                                    //check score 
                                    if(matches[i].homeTeamScore > matches[i].awayTeamScore){
                                        arrayElem.points = arrayElem.points + 3;
                                    }else if(matches[i].homeTeamScore === matches[i].awayTeamScore){
                                        arrayElem.points = arrayElem.points + 1;
                                    }
                                }
                                if(matches[i].awayTeam === arrayElem.teamName){
                                    if(matches[i].awayTeamScore > matches[i].homeTeamScore){
                                        arrayElem.points = arrayElem.points + 3;
                                    }else if(matches[i].awayTeamScore === matches[i].homeTeamScore){
                                        arrayElem.points = arrayElem.points + 1;
                                    }
                                }

                            }
                          //  arrayElem.GD = arrayElem.GF - arrayElem.GA;

                        
                        
                            return arrayElem;
                        })


                        console.log("oldVal",oldVal);

                        function compare( a, b ) {
                            if ( a.points < b.points ){
                                return 1;
                            }
                            if ( a.points > b.points ){
                                return -1;
                            }
                            return 0;
                        }
                        
                        let newArr = oldVal.sort( compare );
                        console.log("newArr",newArr);
                        return newArr;
        }		
            
       let leaderBoardData =  leader(matches,teams);
       return leaderBoardData;

        }
        
            const renderTableData = (items) => {
               
                console.log(items);
                return (
                    items.map((item) =>
                        <tr key={item.id} className={item.selected ? "selected" : ""}>
                            <td>
                                {item.teamName === "Brazil" && <img src={process.env.PUBLIC_URL + '/Images/Brazil.jpg'} alt="Brazil flag" width="53px" height="37px" />}
                                {item.teamName === "Serbia" &&  <img src={process.env.PUBLIC_URL + '/Images/Serbia.jpg'} alt="Serbia flag" width="53px" height="37px"/>}
                                {item.teamName === "Switzerland" &&  <img src={process.env.PUBLIC_URL + '/Images/Switzerland.jpg'} alt="Switzerland flag" width="53px" height="37px" />}
                                {item.teamName === "Cameroon" && <img src={process.env.PUBLIC_URL + '/Images/Cameroon.jpg'} alt="Cameroon flag" width="53px" height="37px"/>}
                                <p> <b>{item.teamName}</b> </p>
                             </td>
                            
                        
                            <td>
                                {   item.matchesPlayed    }
                            </td>
                            <td>
                            {   item.goalsFor   }
                            </td>
                            <td>
                            {   item.goalsAgainst    }
                            </td>
                            <td>
                            {   item.goalsFor - item.goalsAgainst   }
                            </td>  
                            <td>
                            {   item.points   }
                            </td>
                        </tr>
                    )
                )
            }
        
          return (
                <div className="m-4">
                	<h3 className="title">League Standings</h3>
                	<div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Team Name</th>
                                <th scope="col">MP</th>
                                <th scope="col">GF</th>
                                <th scope="col">GA</th>
								<th scope="col">GD</th>
                                <th scope="col">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(generate())}                    
                        </tbody>
        
                    </table>
                    
                	</div>
           		 </div>
        
          );
}