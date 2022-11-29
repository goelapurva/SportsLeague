

import './schedule-style.css';


export default function Schedule(){
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

    const renderTableData = (items) => {
       
        console.log(items);
        return (
            items.map((item) =>
                <tr key={item.id} className={item.selected ? "selected" : ""}>
                    <td scope="row">
                 <p>5.5.2022</p>
                 {/* <p>11:50</p> */}
              </td>
              <td>
              <p> {item.stadium} </p>
            
              </td>
                    <td id="imagsc">
                   
                        
                        {item.homeTeam === "Brazil" && <img src={process.env.PUBLIC_URL + '/Images/Brazil.jpg'} alt="Brazil flag" width="53px" height="37px" />}
                        {item.homeTeam === "Serbia" && <img src={process.env.PUBLIC_URL + '/Images/Serbia.jpg'} alt="Serbia flag" width="53px" height="37px"/>}
                        {item.homeTeam === "Switzerland"  && <img src={process.env.PUBLIC_URL + '/Images/Switzerland.jpg'} alt="Switzerland flag" width="53px" height="37px"/>}
                        {item.homeTeam === "Cameroon" && <img src={process.env.PUBLIC_URL + '/Images/Cameroon.jpg'} alt="Cameroon flag" width="53px" height="37px"/>}

                       
                        {  <p> <b id="hometeamid">{item.homeTeam}</b> </p>}
                    </td>
                    
                     <td>
                     {<div id="scoreStyle"><p> <b>{item.homeTeamScore}</b></p><p><b>:</b></p><p> <b>{item.awayTeamScore} </b></p></div>}  
                  
                   
                    </td>
                    
                    <td>
                    {item.awayTeam === "Brazil" && <img src={process.env.PUBLIC_URL + '/Images/Brazil.jpg'} alt="Brazil flag" width="53px" height="37px" />}
                        {item.awayTeam === "Serbia" &&  <img src={process.env.PUBLIC_URL + '/Images/Serbia.jpg'} alt="Serbia flag" width="53px" height="37px"/>}
                        {item.awayTeam === "Switzerland" &&  <img src={process.env.PUBLIC_URL + '/Images/Switzerland.jpg'} alt="Switzerland flag" width="53px" height="37px"  />}
                        {item.awayTeam === "Cameroon" && <img src={process.env.PUBLIC_URL + '/Images/Cameroon.jpg'} alt="Cameroon flag" width="53px" height="37px"/>}
                        
                        {
                             <p> <b>{item.awayTeam}</b> </p>
                        }
                    </td>
                    
                </tr>
            )
        )
    }

    return (
    
      
        <div className="m-4">
        <h3 className="title">League Schedule</h3>
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date/Time</th>
                        <th scope="col">Stadium</th>
                        <th scope="col">Home Team</th>
                        <th scope="col">&nbsp; &nbsp; &nbsp;Score</th>
                        <th scope="col">Away Team</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData(matches)}                    
                </tbody>

            </table>
            
        </div>
    </div>

       
       
      );

}